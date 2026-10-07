import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import {
  buildAiReadinessGhlPayload,
  type AiReadinessReportRow,
} from "../_shared/buildAiReadinessGhlPayload.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const PDF_SIGNED_URL_TTL_SECONDS = 7 * 24 * 60 * 60;
const GHL_ERROR_MAX_LENGTH = 500;

function truncateError(message: string): string {
  return message.length > GHL_ERROR_MAX_LENGTH
    ? `${message.slice(0, GHL_ERROR_MAX_LENGTH - 3)}...`
    : message;
}

function isServiceRoleRequest(req: Request): boolean {
  const auth = req.headers.get("Authorization");
  const serviceRole = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  return Boolean(auth && serviceRole && auth === `Bearer ${serviceRole}`);
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

  if (!isServiceRoleRequest(req)) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const webhookUrl = Deno.env.get("AI_READINESS");
    if (!webhookUrl) {
      throw new Error("Missing AI_READINESS webhook URL.");
    }

    const body = await req.json();
    const reportId = typeof body?.reportId === "string" ? body.reportId : "";
    if (!reportId) {
      return new Response(JSON.stringify({ error: "reportId is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRole = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !serviceRole) {
      throw new Error("Missing Supabase credentials in function environment.");
    }

    const serviceClient = createClient(supabaseUrl, serviceRole);

    const { data: row, error: selectError } = await serviceClient
      .from("ai_readiness_reports")
      .select("*")
      .eq("id", reportId)
      .maybeSingle();

    if (selectError) {
      throw selectError;
    }

    if (!row) {
      return new Response(JSON.stringify({ error: "Report not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (row.status !== "generated") {
      return new Response(
        JSON.stringify({ success: true, skipped: true, status: row.status }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const { data: signedData, error: signedError } = await serviceClient.storage
      .from("ai-readiness")
      .createSignedUrl(row.storage_path, PDF_SIGNED_URL_TTL_SECONDS);

    if (signedError || !signedData?.signedUrl) {
      throw signedError ?? new Error("Failed to create signed PDF URL.");
    }

    const payload = buildAiReadinessGhlPayload(
      row as AiReadinessReportRow,
      signedData.signedUrl,
    );

    const ghlResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!ghlResponse.ok) {
      const responseText = await ghlResponse.text();
      const errorMessage = truncateError(
        `GHL webhook ${ghlResponse.status}: ${responseText || ghlResponse.statusText}`,
      );
      console.error("send-ai-readiness-to-ghl GHL error", errorMessage);

      await serviceClient
        .from("ai_readiness_reports")
        .update({ status: "ghl_failed", ghl_error: errorMessage })
        .eq("id", reportId)
        .eq("status", "generated");

      return new Response(
        JSON.stringify({ success: false, status: "ghl_failed", error: errorMessage }),
        {
          status: 502,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const { error: updateError } = await serviceClient
      .from("ai_readiness_reports")
      .update({
        status: "ghl_sent",
        ghl_sent_at: new Date().toISOString(),
        ghl_error: null,
      })
      .eq("id", reportId)
      .eq("status", "generated");

    if (updateError) {
      throw updateError;
    }

    return new Response(
      JSON.stringify({ success: true, status: "ghl_sent" }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("send-ai-readiness-to-ghl error", message);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
