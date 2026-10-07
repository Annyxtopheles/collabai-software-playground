import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { type AiReadinessReportRow } from "../_shared/buildAiReadinessGhlPayload.ts";
import { postAiReadinessExternalWebhook } from "../_shared/postAiReadinessExternalWebhook.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const PDF_SIGNED_URL_TTL_SECONDS = 7 * 24 * 60 * 60;

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

    if (row.external_webhook_sent_at) {
      return new Response(JSON.stringify({ success: true, skipped: true, reason: "already_sent" }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { data: signedData, error: signedError } = await serviceClient.storage
      .from("ai-readiness")
      .createSignedUrl(row.storage_path, PDF_SIGNED_URL_TTL_SECONDS);

    if (signedError || !signedData?.signedUrl) {
      throw signedError ?? new Error("Failed to create signed PDF URL.");
    }

    const result = await postAiReadinessExternalWebhook(row as AiReadinessReportRow, signedData.signedUrl);

    if (!result.ok) {
      if (result.skipped) {
        return new Response(JSON.stringify({ success: true, skipped: true, reason: result.reason }), {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      console.error("send-ai-readiness-webhook error", result.error);

      await serviceClient
        .from("ai_readiness_reports")
        .update({ external_webhook_error: result.error })
        .eq("id", reportId)
        .is("external_webhook_sent_at", null);

      return new Response(JSON.stringify({ success: false, error: result.error }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { error: updateError } = await serviceClient
      .from("ai_readiness_reports")
      .update({
        external_webhook_sent_at: new Date().toISOString(),
        external_webhook_error: null,
      })
      .eq("id", reportId)
      .is("external_webhook_sent_at", null);

    if (updateError) {
      console.error("send-ai-readiness-webhook tracking update failed", updateError.message);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("send-ai-readiness-webhook error", message);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
