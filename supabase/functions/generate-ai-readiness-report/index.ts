import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { buildReportPdfBuffer } from "./buildReportPdf.ts";
import {
  AI_READINESS_MULTI_SELECT_MAX_SCORING,
  AI_READINESS_QUESTIONS,
  AI_READINESS_TOTAL_SCORE,
  getAiReadinessCategory,
  type AiReadinessQuestionId,
} from "../_shared/aiReadiness.ts";
import { type AiReadinessReportRow } from "../_shared/buildAiReadinessGhlPayload.ts";
import { postAiReadinessExternalWebhook } from "../_shared/postAiReadinessExternalWebhook.ts";

const EXTERNAL_WEBHOOK_PDF_TTL_SECONDS = 7 * 24 * 60 * 60;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

type Payload = {
  details: {
    name: string;
    email: string;
    companyName: string;
    website: string;
    industry: string;
    teamSize: number;
  };
  answers: Record<AiReadinessQuestionId, string | string[]>;
};

type Finding = {
  title: string;
  description: string;
  priority: number;
};

const BOOKING_LINK = "https://buildyourai.consulting/contact";

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
    .slice(0, 64);
}

function isValidPayload(payload: unknown): payload is Payload {
  if (!payload || typeof payload !== "object") return false;
  const candidate = payload as Payload;
  if (!candidate.details || !candidate.answers) return false;

  const requiredDetailFields: Array<keyof Payload["details"]> = [
    "name",
    "email",
    "companyName",
    "website",
    "industry",
    "teamSize",
  ];
  for (const field of requiredDetailFields) {
    if (
      candidate.details[field] === undefined ||
      candidate.details[field] === null ||
      candidate.details[field] === ""
    ) {
      return false;
    }
  }

  const questionIds: AiReadinessQuestionId[] = AI_READINESS_QUESTIONS.map((question) => question.id);

  if (!questionIds.every((id) => candidate.answers[id] !== undefined)) return false;

  // Format validation
  const { email, website, teamSize, name, companyName, industry } = candidate.details;
  if (typeof email !== "string" || email.length > 320 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return false;
  if (typeof name !== "string" || name.length > 200) return false;
  if (typeof companyName !== "string" || companyName.length > 200) return false;
  if (typeof industry !== "string" || industry.length > 200) return false;
  if (typeof website !== "string" || website.length > 500) return false;
  try {
    const url = new URL(website);
    if (!/^https?:$/.test(url.protocol)) return false;
  } catch {
    return false;
  }
  if (typeof teamSize !== "number" || !Number.isInteger(teamSize) || teamSize <= 0 || teamSize >= 100000) return false;

  // Validate answer labels against the known option set
  const optionsByQuestion = new Map(AI_READINESS_QUESTIONS.map((q) => [q.id, new Set(q.options.map((o) => o.label))]));
  for (const id of questionIds) {
    const allowed = optionsByQuestion.get(id)!;
    const value = candidate.answers[id];
    if (Array.isArray(value)) {
      if (value.length > 50) return false;
      if (!value.every((v) => typeof v === "string" && allowed.has(v))) return false;
    } else if (typeof value === "string") {
      if (!allowed.has(value)) return false;
    } else {
      return false;
    }
  }

  return true;
}

function scoreAnswer(questionId: AiReadinessQuestionId, selected: string | string[]): number {
  const question = AI_READINESS_QUESTIONS.find((item) => item.id === questionId);
  if (!question) return 0;
  const scoreByLabel = new Map(question.options.map((option) => [option.label, option.score]));

  if (Array.isArray(selected)) {
    const scores = selected.map((label) => scoreByLabel.get(label) ?? 0);
    if (AI_READINESS_MULTI_SELECT_MAX_SCORING.has(questionId)) {
      return scores.length > 0 ? Math.max(...scores) : 0;
    }
    return scores.reduce((sum, score) => sum + score, 0);
  }
  return scoreByLabel.get(selected) ?? 0;
}

function calculateScore(answers: Payload["answers"]) {
  const questionIds = AI_READINESS_QUESTIONS.map((question) => question.id);
  const perQuestion: Record<AiReadinessQuestionId, number> = {
    ai_familiarity: 0,
    manual_work: 0,
    data_readiness: 0,
    business_area: 0,
    team_openness: 0,
    integration_readiness: 0,
    ai_goal: 0,
  };

  let total = 0;
  for (const questionId of questionIds) {
    const score = scoreAnswer(questionId, answers[questionId]);
    perQuestion[questionId] = score;
    total += score;
  }

  const normalized = Math.round((total / AI_READINESS_TOTAL_SCORE) * 100);

  return { total, normalized, perQuestion };
}

function scoreSummary(score: number): string {
  if (score <= 25) {
    return "You are at the beginning of your AI journey. Focus on AI awareness and one small pilot use case.";
  }
  if (score <= 50) {
    return "You have interest and early signals of readiness. A structured AI rollout can unlock quick wins.";
  }
  if (score <= 75) {
    return "You are ready to scale AI in priority workflows with measurable business impact.";
  }
  return "You are highly prepared for advanced AI automation and deeper cross-functional integration.";
}

function generateFindings(payload: Payload, perQuestion: Record<AiReadinessQuestionId, number>): Finding[] {
  const findings: Finding[] = [];
  const selectedAreas = Array.isArray(payload.answers.business_area)
    ? payload.answers.business_area
    : [payload.answers.business_area];
  const selectedGoals = Array.isArray(payload.answers.ai_goal) ? payload.answers.ai_goal : [payload.answers.ai_goal];

  if (perQuestion.manual_work >= 15) {
    findings.push({
      title: "High automation potential",
      description:
        "Your team spends meaningful time on repetitive work, which creates a strong opportunity for AI-assisted automation.",
      priority: 100,
    });
  }

  if (perQuestion.data_readiness <= 10) {
    findings.push({
      title: "Data foundation needs improvement",
      description:
        "Business data appears fragmented or inconsistent. Improving data structure will significantly increase AI outcome quality.",
      priority: 95,
    });
  }

  if (perQuestion.integration_readiness <= 10) {
    findings.push({
      title: "Integration maturity is still growing",
      description:
        "You likely rely on basic or partially connected tools. Standardizing core systems first will accelerate AI implementation.",
      priority: 90,
    });
  }

  if (perQuestion.team_openness <= 10) {
    findings.push({
      title: "Change management is essential",
      description:
        "Team readiness is moderate. A clear onboarding and training plan will reduce friction during AI adoption.",
      priority: 85,
    });
  }

  if (perQuestion.ai_familiarity <= 10) {
    findings.push({
      title: "AI capability is in early stages",
      description:
        "Your organization is still building confidence with AI tools. Start with guided workflows to create fast internal wins.",
      priority: 80,
    });
  }

  if (selectedAreas.length > 0 && selectedAreas[0] !== "We are not sure yet") {
    findings.push({
      title: "Primary opportunity area is clear",
      description: `Your selected focus area (${selectedAreas.join(", ")}) indicates where AI initiatives should start for maximum impact.`,
      priority: 75,
    });
  }

  if (selectedGoals.length > 0 && selectedGoals[0] !== "We are not sure yet") {
    findings.push({
      title: "Business goals are outcome-driven",
      description: `Your AI goals (${selectedGoals.join(", ")}) are concrete and can be translated into measurable implementation milestones.`,
      priority: 70,
    });
  }

  findings.sort((a, b) => b.priority - a.priority);

  while (findings.length < 3) {
    findings.push({
      title: "AI momentum is building",
      description:
        "Your responses show practical opportunities to improve efficiency and decision quality through targeted AI use cases.",
      priority: 10,
    });
  }

  return findings.slice(0, 3);
}

function industryInsight(industryRaw: string): string {
  const industry = industryRaw.toLowerCase();
  if (industry.includes("health")) {
    return "Healthcare organizations are seeing fast wins with AI in patient communication, support triage, and operational scheduling.";
  }
  if (industry.includes("agency") || industry.includes("marketing")) {
    return "Agencies are using AI to speed up campaign production, reporting, and proposal turnaround while keeping human creative direction.";
  }
  if (industry.includes("finance") || industry.includes("bank") || industry.includes("mortgage")) {
    return "Financial teams are applying AI to document processing, client support workflows, and decision-support analytics.";
  }
  if (industry.includes("pharma")) {
    return "Pharma teams are leveraging AI to accelerate research documentation, regulatory prep, and knowledge retrieval across teams.";
  }
  return "Across your industry, companies that start with one high-volume workflow and clear success metrics usually reach value fastest.";
}

function recommendation(perQuestion: Record<AiReadinessQuestionId, number>): string {
  const ranked = Object.entries(perQuestion).sort((a, b) => a[1] - b[1]);
  const lowest = ranked[0]?.[0] as AiReadinessQuestionId | undefined;

  switch (lowest) {
    case "data_readiness":
      return "Start by consolidating high-value business data into one accessible source. Then launch a pilot use case built on this clean dataset.";
    case "integration_readiness":
      return "Prioritize integrating two to three core tools (for example CRM + project + communication stack) before introducing deeper AI automations.";
    case "team_openness":
      return "Run a focused AI enablement sprint for your team with practical training and one quick-win workflow to build trust.";
    case "ai_familiarity":
      return "Begin with a low-risk AI assistant workflow in one department and document results to build organization-wide confidence.";
    default:
      return "Select one repetitive workflow with measurable volume, deploy an AI-assisted pilot, and review impact after 30 days.";
  }
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const raw = await req.json();
    if (!isValidPayload(raw)) {
      return new Response(JSON.stringify({ error: "Invalid payload" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const payload = raw as Payload;
    const { total, normalized, perQuestion } = calculateScore(payload.answers);
    const category = getAiReadinessCategory(normalized);
    const findings = generateFindings(payload, perQuestion);
    const insight = industryInsight(payload.details.industry);
    const nextRecommendation = recommendation(perQuestion);

    const pdfBytes = await buildReportPdfBuffer({
      companyName: payload.details.companyName,
      industry: payload.details.industry,
      score: normalized,
      category,
      scoreSummary: scoreSummary(normalized),
      findings: findings.map((f) => ({ title: f.title, description: f.description })),
      industryInsight: insight,
      recommendation: nextRecommendation,
      bookingLink: BOOKING_LINK,
    });

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRole = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !serviceRole) {
      throw new Error("Missing Supabase credentials in function environment.");
    }

    const serviceClient = createClient(supabaseUrl, serviceRole);

    const fileName = `${slugify(payload.details.companyName || "company")}-${Date.now()}.pdf`;
    const now = new Date();
    const storagePath = `reports/${now.getUTCFullYear()}/${String(now.getUTCMonth() + 1).padStart(2, "0")}/${fileName}`;

    const { error: uploadError } = await serviceClient.storage.from("ai-readiness").upload(storagePath, pdfBytes, {
      contentType: "application/pdf",
      upsert: false,
    });

    if (uploadError) {
      throw uploadError;
    }

    const { data: report, error: insertError } = await serviceClient
      .from("ai_readiness_reports")
      .insert({
        name: payload.details.name,
        email: payload.details.email,
        company_name: payload.details.companyName,
        website: payload.details.website,
        industry: payload.details.industry,
        team_size: payload.details.teamSize,
        answers_json: payload.answers,
        raw_score: total,
        score_100: normalized,
        score_category: category,
        score_summary: scoreSummary(normalized),
        findings_json: findings,
        industry_insight: insight,
        recommendation: nextRecommendation,
        storage_path: storagePath,
        status: "generated",
      })
      .select("id")
      .single();

    if (insertError) {
      throw insertError;
    }

    const { data: signedData, error: signedError } = await serviceClient.storage
      .from("ai-readiness")
      .createSignedUrl(storagePath, 60 * 60);

    if (signedError) {
      throw signedError;
    }

    const responseBody = JSON.stringify({
      success: true,
      storagePath,
      signedUrl: signedData.signedUrl,
      score: normalized,
      scoreCategory: category,
    });

    const reportRow: AiReadinessReportRow = {
      id: report.id,
      created_at: new Date().toISOString(),
      name: payload.details.name,
      email: payload.details.email,
      company_name: payload.details.companyName,
      website: payload.details.website,
      industry: payload.details.industry,
      team_size: payload.details.teamSize,
      answers_json: payload.answers,
      raw_score: total,
      score_100: normalized,
      score_category: category,
      score_summary: scoreSummary(normalized),
      findings_json: findings,
      industry_insight: insight,
      recommendation: nextRecommendation,
      storage_path: storagePath,
      status: "generated",
    };

    const deliverExternalWebhook = async () => {
      try {
        const { data: webhookPdf, error: webhookPdfError } = await serviceClient.storage
          .from("ai-readiness")
          .createSignedUrl(storagePath, EXTERNAL_WEBHOOK_PDF_TTL_SECONDS);

        if (webhookPdfError || !webhookPdf?.signedUrl) {
          throw webhookPdfError ?? new Error("Failed to create webhook PDF URL.");
        }

        const webhookResult = await postAiReadinessExternalWebhook(reportRow, webhookPdf.signedUrl);

        if (!webhookResult.ok) {
          if (webhookResult.skipped) {
            console.log("external webhook skipped", webhookResult.reason);
            return;
          }
          console.error("external webhook failed", webhookResult.error);
          await serviceClient
            .from("ai_readiness_reports")
            .update({ external_webhook_error: webhookResult.error })
            .eq("id", report.id);
          return;
        }

        await serviceClient
          .from("ai_readiness_reports")
          .update({
            external_webhook_sent_at: new Date().toISOString(),
            external_webhook_error: null,
          })
          .eq("id", report.id);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown webhook error";
        console.error("deliverExternalWebhook error", message);
        await serviceClient
          .from("ai_readiness_reports")
          .update({ external_webhook_error: message })
          .eq("id", report.id)
          .then(() => undefined)
          .catch(() => undefined);
      }
    };

    const ghlInvoke = serviceClient.functions.invoke("send-ai-readiness-to-ghl", {
      body: { reportId: report.id },
    });

    const edgeRuntime = (globalThis as { EdgeRuntime?: { waitUntil: (p: Promise<unknown>) => void } }).EdgeRuntime;
    if (edgeRuntime?.waitUntil) {
      edgeRuntime.waitUntil(
        ghlInvoke.catch((err) => {
          console.error("send-ai-readiness-to-ghl invoke failed", err);
        }),
      );
      edgeRuntime.waitUntil(deliverExternalWebhook());
    } else {
      void ghlInvoke.catch((err) => {
        console.error("send-ai-readiness-to-ghl invoke failed", err);
      });
      void deliverExternalWebhook();
    }

    return new Response(responseBody, {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("generate-ai-readiness-report error", message);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
