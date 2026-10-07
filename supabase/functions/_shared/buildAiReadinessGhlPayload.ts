export type AiReadinessReportRow = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  company_name: string;
  website: string;
  industry: string;
  team_size: number;
  answers_json: unknown;
  raw_score: number;
  score_100: number;
  score_category: string;
  score_summary: string;
  findings_json: unknown;
  industry_insight: string;
  recommendation: string;
  storage_path: string;
  status: string;
};

export type AiReadinessGhlPayload = {
  source: "ai_readiness_assessment";
  report_id: string;
  submitted_at: string;
  contact: {
    name: string;
    email: string;
    company_name: string;
    website: string;
    industry: string;
    team_size: number;
  };
  scores: {
    raw_score: number;
    score_100: number;
    overall: number;
    score_category: string;
    score_summary: string;
  };
  findings: unknown;
  industry_insight: string;
  recommendation: string;
  answers: unknown;
  pdf_url: string;
};

export function buildAiReadinessGhlPayload(
  row: AiReadinessReportRow,
  pdfUrl: string,
): AiReadinessGhlPayload {
  return {
    source: "ai_readiness_assessment",
    report_id: row.id,
    submitted_at: row.created_at,
    contact: {
      name: row.name,
      email: row.email,
      company_name: row.company_name,
      website: row.website,
      industry: row.industry,
      team_size: row.team_size,
    },
    scores: {
      raw_score: row.raw_score,
      score_100: row.score_100,
      overall: row.score_100,
      score_category: row.score_category,
      score_summary: row.score_summary,
    },
    findings: row.findings_json,
    industry_insight: row.industry_insight,
    recommendation: row.recommendation,
    answers: row.answers_json,
    pdf_url: pdfUrl,
  };
}
