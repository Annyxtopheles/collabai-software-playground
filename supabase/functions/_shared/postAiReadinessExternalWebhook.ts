import { buildAiReadinessGhlPayload, type AiReadinessReportRow } from "./buildAiReadinessGhlPayload.ts";

const WEBHOOK_ERROR_MAX_LENGTH = 500;

function truncateError(message: string): string {
  return message.length > WEBHOOK_ERROR_MAX_LENGTH ? `${message.slice(0, WEBHOOK_ERROR_MAX_LENGTH - 3)}...` : message;
}

export type ExternalWebhookResult =
  | { ok: true }
  | { ok: false; skipped: true; reason: string }
  | { ok: false; skipped?: false; error: string };

export async function postAiReadinessExternalWebhook(
  row: AiReadinessReportRow,
  pdfUrl: string,
): Promise<ExternalWebhookResult> {
  const webhookUrl = Deno.env.get("AI_READINESS_WEBHOOK_URL");
  if (!webhookUrl) {
    return { ok: false, skipped: true, reason: "webhook_not_configured" };
  }

  const webhookSecret = Deno.env.get("AI_READINESS_WEBHOOK_SECRET");
  if (!webhookSecret) {
    return { ok: false, error: "Missing AI_READINESS_WEBHOOK_SECRET." };
  }

  const payload = buildAiReadinessGhlPayload(row, pdfUrl);

  const webhookHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    "X-Webhook-Secret": webhookSecret,
  };

  const webhookAnonKey = Deno.env.get("AI_READINESS_WEBHOOK_ANON_KEY");
  if (webhookAnonKey) {
    webhookHeaders.apikey = webhookAnonKey;
    webhookHeaders.Authorization = `Bearer ${webhookAnonKey}`;
  }

  const webhookResponse = await fetch(webhookUrl, {
    method: "POST",
    headers: webhookHeaders,
    body: JSON.stringify(payload),
  });

  if (!webhookResponse.ok) {
    const responseText = await webhookResponse.text();
    return {
      ok: false,
      error: truncateError(`External webhook ${webhookResponse.status}: ${responseText || webhookResponse.statusText}`),
    };
  }

  return { ok: true };
}
