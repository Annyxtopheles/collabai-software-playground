# AI Readiness External Webhook

When a user completes the `/ai-readiness` assessment, this project saves the report to `ai_readiness_reports` and automatically POSTs the full payload to your other application's webhook URL.

## Setup (this project)

1. Deploy the edge function:

   ```bash
   supabase functions deploy send-ai-readiness-webhook
   ```

2. Set secrets in **Supabase Dashboard → Edge Functions → Secrets**:

   | Secret | Description |
   |--------|-------------|
   | `AI_READINESS_WEBHOOK_URL` | POST endpoint URL (e.g. Control Tower Supabase function: `https://<project-ref>.supabase.co/functions/v1/ai-readiness-webhook`) |
   | `AI_READINESS_WEBHOOK_SECRET` | Shared secret sent in the `X-Webhook-Secret` header |
   | `AI_READINESS_WEBHOOK_ANON_KEY` | Optional. Control Tower Supabase **anon** key — sent as `apikey` and `Authorization` when the receiver is a Supabase Edge Function |

   If `AI_READINESS_WEBHOOK_URL` is not set, webhook delivery is skipped (useful for local dev).

   **Control Tower example:**

   ```
   AI_READINESS_WEBHOOK_URL=https://ttlmdbgptqlvjswtcrnq.supabase.co/functions/v1/ai-readiness-webhook
   AI_READINESS_WEBHOOK_SECRET=<same secret as Control Tower>
   AI_READINESS_WEBHOOK_ANON_KEY=<Control Tower anon key from Project Settings → API>
   ```

3. Apply the database migration for delivery tracking columns (`external_webhook_sent_at`, `external_webhook_error`).

## Setup (your other project)

Create a POST endpoint that:

1. Validates `X-Webhook-Secret` against your stored secret (return `401` if invalid).
2. Parses the JSON body and saves/displays the data.
3. Returns `200` promptly.

### Request format

```http
POST /api/ai-readiness-webhook
Content-Type: application/json
X-Webhook-Secret: <same value as AI_READINESS_WEBHOOK_SECRET>
```

### Payload schema

```json
{
  "source": "ai_readiness_assessment",
  "report_id": "uuid",
  "submitted_at": "2026-06-12T10:00:00.000Z",
  "contact": {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "company_name": "Acme Inc",
    "website": "https://acme.com",
    "industry": "Professional Services",
    "team_size": 25
  },
  "scores": {
    "raw_score": 65,
    "score_100": 50,
    "overall": 50,
    "score_category": "AI Explorer",
    "score_summary": "Your organization is exploring AI with room to grow."
  },
  "findings": [
    {
      "title": "Finding title",
      "description": "Finding description",
      "priority": "high"
    }
  ],
  "industry_insight": "Industry-specific insight text.",
  "recommendation": "Recommended next step.",
  "answers": {
    "ai_familiarity": "A few team members use tools like ChatGPT",
    "manual_work": "Some repetitive tasks",
    "data_readiness": "Data is partially organized",
    "business_area": ["Customer support", "Sales"],
    "team_openness": "Mostly open to trying AI",
    "integration_readiness": "We use a few cloud tools",
    "ai_goal": ["Save time on repetitive work", "Improve customer experience"]
  },
  "pdf_url": "https://...signed-url-valid-7-days..."
}
```

### Example receiver (Express)

```javascript
app.post("/api/ai-readiness-webhook", express.json(), (req, res) => {
  if (req.headers["x-webhook-secret"] !== process.env.WEBHOOK_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { contact, scores, answers, findings, pdf_url, report_id } = req.body;

  // Persist to your database or trigger your UI update
  // await saveReport({ contact, scores, answers, findings, pdf_url, report_id });

  res.json({ ok: true });
});
```

### Example receiver (Next.js App Router)

```typescript
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secret = request.headers.get("x-webhook-secret");
  if (secret !== process.env.WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = await request.json();
  // await saveReport(payload);

  return NextResponse.json({ ok: true });
}
```

## Delivery tracking

After each submission, check `ai_readiness_reports` in Supabase:

- `external_webhook_sent_at` — set when delivery succeeded
- `external_webhook_error` — last error message if delivery failed

Webhook failures do not block the user from downloading their PDF.

## Testing

1. Set secrets and deploy the function.
2. Submit the form at `/ai-readiness`.
3. Confirm your endpoint received the POST and the DB row has `external_webhook_sent_at` populated.
