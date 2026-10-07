export type AiReadinessQuestionId =
  | "ai_familiarity"
  | "manual_work"
  | "data_readiness"
  | "business_area"
  | "team_openness"
  | "integration_readiness"
  | "ai_goal";

export type AiReadinessOption = {
  label: string;
  score: number;
};

export type AiReadinessQuestion = {
  id: AiReadinessQuestionId;
  title: string;
  options: AiReadinessOption[];
  multiSelect?: boolean;
  helper?: string;
};

export const AI_READINESS_QUESTIONS: AiReadinessQuestion[] = [
  {
    id: "ai_familiarity",
    title: "How familiar is your business with AI tools?",
    options: [
      { label: "We are not familiar with AI yet", score: 0 },
      { label: "We have heard about AI but have not used it", score: 5 },
      { label: "A few team members use tools like ChatGPT", score: 10 },
      { label: "We use AI in some business tasks", score: 15 },
      { label: "AI is already part of our business strategy", score: 20 },
    ],
  },
  {
    id: "manual_work",
    title: "How much of your daily work is repetitive or manual?",
    helper: "More manual work indicates larger AI opportunity.",
    options: [
      { label: "Almost everything is manual", score: 20 },
      { label: "Many tasks are repetitive and manual", score: 15 },
      { label: "Some tasks are manual, some are automated", score: 10 },
      { label: "Most key tasks are already automated", score: 5 },
      { label: "Very little work is repetitive or manual", score: 0 },
    ],
  },
  {
    id: "data_readiness",
    title: "How well organized is your business data?",
    options: [
      { label: "Our data is scattered across many places", score: 0 },
      { label: "We have some organized data, but it is inconsistent", score: 5 },
      { label: "Our data is somewhat organized in tools or spreadsheets", score: 10 },
      { label: "Most of our data is clean and easy to access", score: 15 },
      { label: "Our data is centralized, structured, and reliable", score: 20 },
    ],
  },
  {
    id: "business_area",
    title: "Which business area would benefit most from AI right now?",
    multiSelect: true,
    helper: "Select all that apply.",
    options: [
      { label: "Sales and lead generation", score: 15 },
      { label: "Customer support", score: 15 },
      { label: "Marketing and content creation", score: 15 },
      { label: "Operations and admin work", score: 15 },
      { label: "Project management and delivery", score: 15 },
      { label: "Reporting and decision-making", score: 15 },
      { label: "We are not sure yet", score: 5 },
    ],
  },
  {
    id: "team_openness",
    title: "How open is your team to using AI in daily work?",
    options: [
      { label: "The team is not ready or may resist AI", score: 0 },
      { label: "Some people are curious, but there is hesitation", score: 5 },
      { label: "The team is open, but needs training", score: 10 },
      { label: "The team is already experimenting with AI", score: 15 },
      { label: "The team is actively using AI and wants to do more", score: 20 },
    ],
  },
  {
    id: "integration_readiness",
    title: "Do you currently have systems or tools that AI could connect with?",
    options: [
      { label: "We mostly work manually without many systems", score: 0 },
      { label: "We use basic tools like email and spreadsheets", score: 5 },
      { label: "We use tools like CRM, project management, or helpdesk software", score: 10 },
      { label: "We use several connected business tools", score: 15 },
      { label: "We already use APIs, automations, or integrated platforms", score: 20 },
    ],
  },
  {
    id: "ai_goal",
    title: "What is your biggest goal for using AI?",
    multiSelect: true,
    helper: "Select all that apply.",
    options: [
      { label: "Save time on repetitive work", score: 15 },
      { label: "Generate more leads or sales", score: 15 },
      { label: "Improve customer service", score: 15 },
      { label: "Reduce operational costs", score: 15 },
      { label: "Improve team productivity", score: 15 },
      { label: "Make better business decisions", score: 15 },
      { label: "We are not sure yet", score: 5 },
    ],
  },
];

export const AI_READINESS_MULTI_SELECT_MAX_SCORING = new Set<AiReadinessQuestionId>([
  "business_area",
  "ai_goal",
]);

export const AI_READINESS_TOTAL_SCORE = 130;

export function getAiReadinessCategory(scoreOutOf100: number): string {
  if (scoreOutOf100 <= 25) return "AI Beginner";
  if (scoreOutOf100 <= 50) return "AI Explorer";
  if (scoreOutOf100 <= 75) return "AI Ready";
  return "AI Advanced";
}
