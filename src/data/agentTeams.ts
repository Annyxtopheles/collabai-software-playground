export type AgentTrigger = "Manual" | "Scheduled" | "Event-driven" | "Event-driven / Manual";

export interface Agent {
  slug: string;
  name: string;
  tier: "Core" | "Standard";
  trigger: AgentTrigger;
  model: string;
  description: string;
  scope?: string;
  schedule?: string;
}

export interface AgentTeam {
  slug: string;
  name: string;
  tagline: string;
  totalAgents: number;
  highlightAgent: string;
  agents: Agent[];
}

export const agentTeams: AgentTeam[] = [
  {
    slug: "sales-crm",
    name: "Sales & CRM",
    tagline: "AI-powered deal intelligence, research, and client communication",
    totalAgents: 10,
    highlightAgent: "deal-coach",
    agents: [
      {
        slug: "deal-coach",
        name: "Deal Coach",
        tier: "Core",
        trigger: "Manual",
        model: "Gemini 3.0",
        description:
          "Strategic coaching and recommendations for active deals based on pipeline data, client history, and deal stage.",
      },
      {
        slug: "client-research",
        name: "Client Research",
        tier: "Standard",
        trigger: "Manual",
        model: "Gemini 3.0",
        description:
          "Pulls public signals — news, hiring, funding, tech stack — and writes a one-page briefing before every client meeting.",
      },
      {
        slug: "pipeline-hygiene",
        name: "Pipeline Hygiene",
        tier: "Standard",
        trigger: "Scheduled",
        model: "Gemini 2.5 Flash",
        description:
          "Flags stalled deals, missing close dates, and rep-pipeline-coverage gaps every Monday morning.",
      },
    ],
  },
  {
    slug: "meetings",
    name: "Meetings & Communication",
    tagline: "Automated meeting intelligence, analysis, and communication coaching",
    totalAgents: 6,
    highlightAgent: "meeting-intelligence",
    agents: [
      {
        slug: "meeting-intelligence",
        name: "Meeting Intelligence",
        tier: "Core",
        trigger: "Event-driven / Manual",
        model: "Gemini 3.0",
        description:
          "Analyzes meeting transcripts for issue extraction, action items, decisions, and sentiment.",
      },
      {
        slug: "follow-up-drafter",
        name: "Follow-Up Drafter",
        tier: "Standard",
        trigger: "Event-driven",
        model: "Gemini 2.5 Flash",
        description:
          "Drafts the post-meeting follow-up email with decisions, owners, and dates — ready for one-click send.",
      },
    ],
  },
  {
    slug: "project-management",
    name: "Project Management",
    tagline: "Project health analysis, weekly updates, and technical planning",
    totalAgents: 6,
    highlightAgent: "project-analyzer",
    agents: [
      {
        slug: "project-analyzer",
        name: "AI Project Analyzer",
        tier: "Core",
        trigger: "Manual",
        model: "Gemini 3.0",
        description:
          "Analyzes project health — timeline risk, resource utilization, scope creep, and blocker identification.",
      },
      {
        slug: "weekly-status",
        name: "Weekly Status Composer",
        tier: "Standard",
        trigger: "Scheduled",
        model: "Gemini 2.5 Flash",
        schedule: "Friday 4 PM EST",
        description: "Drafts per-project status updates from the week's tasks, commits, and meeting notes.",
      },
    ],
  },
  {
    slug: "tasks",
    name: "Tasks",
    tagline: "AI-powered task chat, summaries, research, and subtask planning",
    totalAgents: 4,
    highlightAgent: "task-ai-chat",
    agents: [
      {
        slug: "task-ai-chat",
        name: "Task AI Chat",
        tier: "Core",
        trigger: "Manual",
        model: "Gemini 2.5 Flash",
        description:
          "Conversational AI assistant within task detail pages — answers questions, suggests approaches, and provides context.",
      },
      {
        slug: "subtask-planner",
        name: "Subtask Planner",
        tier: "Standard",
        trigger: "Manual",
        model: "Gemini 2.5 Flash",
        description: "Breaks a task into actionable subtasks with estimates and dependencies.",
      },
    ],
  },
  {
    slug: "eos",
    name: "EOS",
    tagline: "Entrepreneurial Operating System — triage, patterns, accountability, and health",
    totalAgents: 8,
    highlightAgent: "eos-triage-assistant",
    agents: [
      {
        slug: "eos-triage-assistant",
        name: "EOS Triage Assistant",
        tier: "Core",
        trigger: "Manual",
        model: "Gemini 3.0",
        description:
          "Assists with issue triage — suggests priority, severity, department assignment, and categorization.",
      },
      {
        slug: "l10-agenda",
        name: "L10 Agenda Builder",
        tier: "Standard",
        trigger: "Scheduled",
        model: "Gemini 2.5 Flash",
        schedule: "1 hour before L10",
        description:
          "Auto-populates the Level-10 agenda from overdue Rocks, open Issues, and Scorecard misses.",
      },
      {
        slug: "rock-tracker",
        name: "Rock Accountability Tracker",
        tier: "Standard",
        trigger: "Scheduled",
        model: "Gemini 2.5 Flash",
        description: "Surfaces at-risk Rocks two weeks before quarter-end and DMs the owner.",
      },
    ],
  },
  {
    slug: "team-productivity",
    name: "Team & Productivity",
    tagline: "Team performance briefings, productivity analysis, and weekly digests",
    totalAgents: 4,
    highlightAgent: "pod-weekly-ai-summary",
    agents: [
      {
        slug: "pod-weekly-ai-summary",
        name: "Pod Weekly AI Summary",
        tier: "Core",
        trigger: "Scheduled",
        model: "Gemini 3 Flash Preview",
        schedule: "Sunday 11 PM EST",
        description:
          "Generates structured team performance briefings — productivity %, tasks, OKRs, billable utilization, GitHub activity, and manager reviews.",
      },
      {
        slug: "burnout-detector",
        name: "Burnout Detector",
        tier: "Standard",
        trigger: "Scheduled",
        model: "Gemini 2.5 Flash",
        description: "Spots utilization spikes and weekend activity before they turn into resignations.",
      },
    ],
  },
];

export const TOTAL_AGENTS = agentTeams.reduce((s, t) => s + t.totalAgents, 0);

export const getTeam = (slug: string) => agentTeams.find((t) => t.slug === slug);
export const getAgent = (teamSlug: string, agentSlug: string) =>
  getTeam(teamSlug)?.agents.find((a) => a.slug === agentSlug);