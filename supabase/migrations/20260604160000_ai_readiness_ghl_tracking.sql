alter table public.ai_readiness_reports
  add column if not exists ghl_sent_at timestamptz,
  add column if not exists ghl_error text;

comment on column public.ai_readiness_reports.status is
  'generated | ghl_sent | ghl_failed';
