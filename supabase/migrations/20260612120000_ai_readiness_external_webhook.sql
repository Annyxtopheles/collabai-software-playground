alter table public.ai_readiness_reports
  add column if not exists external_webhook_sent_at timestamptz,
  add column if not exists external_webhook_error text;

comment on column public.ai_readiness_reports.external_webhook_sent_at is
  'Timestamp when report payload was successfully POSTed to the external webhook URL.';

comment on column public.ai_readiness_reports.external_webhook_error is
  'Last error message from external webhook delivery attempt.';
