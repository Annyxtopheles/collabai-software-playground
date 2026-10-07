create extension if not exists pgcrypto;

create table if not exists public.ai_readiness_reports (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company_name text not null,
  website text not null,
  industry text not null,
  team_size integer not null check (team_size > 0),
  answers_json jsonb not null,
  raw_score integer not null check (raw_score >= 0 and raw_score <= 130),
  score_100 integer not null check (score_100 >= 0 and score_100 <= 100),
  score_category text not null,
  score_summary text not null,
  findings_json jsonb not null,
  industry_insight text not null,
  recommendation text not null,
  storage_path text not null,
  status text not null default 'generated'
);

create index if not exists ai_readiness_reports_email_idx on public.ai_readiness_reports (email);
create index if not exists ai_readiness_reports_created_at_idx on public.ai_readiness_reports (created_at desc);

alter table public.ai_readiness_reports enable row level security;
