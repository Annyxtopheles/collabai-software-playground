import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
  Search,
  Zap,
  CheckCircle2,
  Layers,
  Play,
  Terminal,
  SlidersHorizontal,
  ChevronRight,
} from "lucide-react";
import PageSeoHead from "@/components/PageSeoHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import LogoStrip from "@/components/LogoStrip";
import { agentTeams } from "@/data/agentTeams";

interface DashboardAgent {
  id: string;
  name: string;
  team: string;
  teamSlug: string;
  category: "operations" | "vertical";
  tier: "Core" | "Standard" | "Enterprise";
  trigger: "Event-driven" | "Scheduled" | "Manual" | "Event-driven / Manual";
  triggerDetail: string;
  model: string;
  timeSaved: string;
  speedupMultiplier: string;
  description: string;
  integrations: string[];
  workflowInput: string;
  workflowSteps: string[];
  sampleOutput: string;
}

const DASHBOARD_AGENTS: DashboardAgent[] = [
  // --- Sales & CRM ---
  {
    id: "deal-coach",
    name: "Deal Coach",
    team: "Sales & CRM",
    teamSlug: "sales-crm",
    category: "operations",
    tier: "Core",
    trigger: "Manual",
    triggerDetail: "Triggered on-demand before client pitch or pipeline review",
    model: "Gemini 3.0",
    timeSaved: "5.5 hrs/week per rep",
    speedupMultiplier: "6x faster prep",
    description: "Synthesizes pipeline history, recent Zoom transcripts, and competitive signals to deliver an executive negotiation brief and objection guide.",
    integrations: ["HubSpot", "Salesforce", "Zoom", "Slack"],
    workflowInput: "Account: Acme Corp ($140k ARR Opportunity, Stage: Contract Review, 3 overdue action items)",
    workflowSteps: [
      "Extracts past 3 Zoom calls, pricing objections, and security concerns from CRM timeline",
      "Correlates objections with approved pricing thresholds & SLA guidelines",
      "Synthesizes 1-page playbook with 3 high-probability closing terms"
    ],
    sampleOutput: "Deal Briefing: Acme Corp\n• Recommended Close Date: Oct 28\n• Key Blocker: Data residency in EU\n• Suggested Concession: Offer EU AWS cluster hosting with 0% margin discount\n• Next Action: Send pre-drafted security whitepaper to VP SecOps."
  },
  {
    id: "client-research",
    name: "Client Research Agent",
    team: "Sales & CRM",
    teamSlug: "sales-crm",
    category: "operations",
    tier: "Standard",
    trigger: "Manual",
    triggerDetail: "1-click deep research before discovery meetings",
    model: "Gemini 3.0",
    timeSaved: "4 hrs/week",
    speedupMultiplier: "10x faster intel",
    description: "Gathers external company intelligence — funding events, tech stack, open hiring roles, and executive changes — into an instant dossier.",
    integrations: ["HubSpot", "LinkedIn", "Clearbit", "Google Docs"],
    workflowInput: "Domain: fintech-innovators.io",
    workflowSteps: [
      "Scrapes public press releases, job boards, and tech footprint (StackShare / BuiltWith)",
      "Maps leadership org chart and recent funding announcements",
      "Generates 3 tailored conversation starters addressing their open hiring challenges"
    ],
    sampleOutput: "Dossier: FinTech Innovators Inc.\n• Series B ($28M led by Insight Partners)\n• Expanding Compliance pod (+6 open roles in RegTech)\n• Pitch Angle: Control Tower automated compliance reporting saves 200+ audit hours."
  },
  {
    id: "pipeline-hygiene",
    name: "Pipeline Hygiene Sentinel",
    team: "Sales & CRM",
    teamSlug: "sales-crm",
    category: "operations",
    tier: "Standard",
    trigger: "Scheduled",
    triggerDetail: "Weekly recurring audit every Monday 7:00 AM",
    model: "Gemini 2.5 Flash",
    timeSaved: "3 hrs/week for Sales Leaders",
    speedupMultiplier: "100% audit accuracy",
    description: "Audits CRM deals for stalled progress, missing close dates, and inaccurate stage coverage, delivering a clean summary to Slack.",
    integrations: ["HubSpot", "Slack", "Salesforce"],
    workflowInput: "Scheduled scan: 184 active deals across 8 Account Executives",
    workflowSteps: [
      "Scans deals stagnant for >14 days without customer activity",
      "Checks close date accuracy vs actual contract stage velocity",
      "DMs reps directly with suggested 1-click status updates or close-date pushes"
    ],
    sampleOutput: "Pipeline Hygiene Audit Completed:\n• 12 deals flagged for overdue close dates\n• 4 stalled deals with no touchpoints in 21 days\n• Slack notifications dispatched to 4 AE owners."
  },

  // --- Meetings & Comms ---
  {
    id: "meeting-intelligence",
    name: "Meeting Intelligence",
    team: "Meetings & Comms",
    teamSlug: "meetings",
    category: "operations",
    tier: "Core",
    trigger: "Event-driven",
    triggerDetail: "Triggers automatically when a Zoom / Google Meet recording finishes",
    model: "Gemini 3.0",
    timeSaved: "8 hrs/week per manager",
    speedupMultiplier: "45-second summary",
    description: "Transcribes calls, extracts decisions, categorizes issues, and tags action items with assignees and delivery deadlines.",
    integrations: ["Zoom", "Google Meet", "Monday.com", "Slack"],
    workflowInput: "Raw audio & transcript from 45-minute Client Delivery & Sprint Sync",
    workflowSteps: [
      "Separates speakers and filters filler conversation",
      "Extracts agreed deliverables, blockers, and budget sign-offs",
      "Creates tasks in project management system with assignees automatically"
    ],
    sampleOutput: "Sprint Sync Key Takeaways:\n• Decision: Launch migration postponed to Nov 4 to allow load testing\n• Assigned: Sarah (Deploy staging DB), David (Finalize load test script)\n• 6 Action items synced to Monday.com Board #482."
  },
  {
    id: "follow-up-drafter",
    name: "Follow-Up Drafter",
    team: "Meetings & Comms",
    teamSlug: "meetings",
    category: "operations",
    tier: "Standard",
    trigger: "Event-driven",
    triggerDetail: "Fires immediately following Meeting Intelligence synthesis",
    model: "Gemini 2.5 Flash",
    timeSaved: "4.5 hrs/week",
    speedupMultiplier: "Draft ready in 15s",
    description: "Generates formatted, polite executive follow-up emails recapping action items, deadlines, and next meeting timestamps.",
    integrations: ["Gmail", "Outlook", "Zoom"],
    workflowInput: "Extracted decisions from Client Steering Committee Meeting",
    workflowSteps: [
      "Formats takeaways into clean, bulleted email structure",
      "Sets bold action item owners and deadlines",
      "Stores draft in user's email client ready for 1-click review & send"
    ],
    sampleOutput: "Subject: Follow-up: Q4 Roadmap Alignment & Action Items\n\nHi Alex,\nThank you for today's time. As discussed, our next milestone is Nov 12.\nKey Action Items:\n1. CollabAI: Provide private tenant deployment specs (Owner: Marcus, by Oct 16)\n2. Acme: Whitelist staging IP range (Owner: Elena, by Oct 18)\n..."
  },

  // --- Project Management ---
  {
    id: "project-analyzer",
    name: "AI Project Analyzer",
    team: "Project Management",
    teamSlug: "project-management",
    category: "operations",
    tier: "Core",
    trigger: "Event-driven / Manual",
    triggerDetail: "Analyzes project boards on demand or on major milestone update",
    model: "Gemini 3.0",
    timeSaved: "6 hrs/week for PMs",
    speedupMultiplier: "Real-time risk scoring",
    description: "Monitors project timelines, task completion velocity, scope creep, and resource bottlenecks to forecast delivery dates accurately.",
    integrations: ["Jira", "Monday.com", "GitHub", "Slack"],
    workflowInput: "Project: Healthcare Mobile App Redesign (48 open tickets, Sprint 4 of 6)",
    workflowSteps: [
      "Compares current burndown rate against historical team velocity",
      "Flags 3 dependent tickets blocked by API contract approvals",
      "Calculates forecasted release delay risk: 82% confidence on 4-day slip without resource shift"
    ],
    sampleOutput: "Project Health: AMBER\n• Velocity: 34 story points/week (target: 40)\n• Risk Factor: Epic #104 API Dependency\n• Recommended Mitigation: Reassign 1 backend engineer from non-critical sprint backlog."
  },
  {
    id: "weekly-status",
    name: "Weekly Status Composer",
    team: "Project Management",
    teamSlug: "project-management",
    category: "operations",
    tier: "Standard",
    trigger: "Scheduled",
    triggerDetail: "Every Friday at 4:00 PM EST",
    model: "Gemini 2.5 Flash",
    timeSaved: "3 hrs/week per Project Lead",
    speedupMultiplier: "Zero manual writing",
    description: "Aggregates Git commits, completed tasks, and meeting decisions into professional client-facing and leadership weekly status memos.",
    integrations: ["GitHub", "Jira", "Slack", "Notion"],
    workflowInput: "Weekly sprint logs: 42 closed tickets, 18 merged pull requests, 2 client syncs",
    workflowSteps: [
      "Parses merged PR descriptions and closed issue resolutions",
      "Transforms technical commit titles into human-friendly business accomplishments",
      "Outlines upcoming focus areas for the following week"
    ],
    sampleOutput: "Weekly Client Digest (Week 41):\n• Accomplishments: Completed SSO integration; deployed HIPAA audit logging\n• In Progress: Patient portal appointment booking UI\n• Planned for Next Week: End-to-end pen testing."
  },

  // --- Tasks & Operations ---
  {
    id: "task-ai-chat",
    name: "Task AI Assistant",
    team: "Tasks",
    teamSlug: "tasks",
    category: "operations",
    tier: "Core",
    trigger: "Manual",
    triggerDetail: "Embedded in task modal for instant interactive troubleshooting",
    model: "Gemini 2.5 Flash",
    timeSaved: "5 hrs/week per engineer/operator",
    speedupMultiplier: "Instant context recall",
    description: "Conversational co-pilot inside tasks with full access to project specs, historical code changes, and related meeting discussions.",
    integrations: ["Control Tower", "GitHub", "Internal Wiki"],
    workflowInput: "User query: 'How does the HIPAA token expiration policy apply to inactive sessions?'",
    workflowSteps: [
      "Queries vector search across company compliance documents & architecture notes",
      "Retrieves exact session timeout policy (15-minute inactivity rule)",
      "Provides code snippet and compliance reference link"
    ],
    sampleOutput: "Answer: Inactive sessions must terminate after 15 minutes per section 4.2 of our HIPAA compliance spec. Code snippet configured in `/src/auth/sessionManager.ts:42`."
  },
  {
    id: "subtask-planner",
    name: "Subtask Decomposition Planner",
    team: "Tasks",
    teamSlug: "tasks",
    category: "operations",
    tier: "Standard",
    trigger: "Manual",
    triggerDetail: "1-click breakdown from complex parent feature request",
    model: "Gemini 2.5 Flash",
    timeSaved: "2 hrs/task planning",
    speedupMultiplier: "8x faster estimation",
    description: "Breaks down high-level initiatives into granular, estimated, and dependency-linked subtasks ready for sprint assignment.",
    integrations: ["Jira", "Monday.com", "Linear"],
    workflowInput: "Task: 'Implement Stripe recurring billing portal with webhook retry logic'",
    workflowSteps: [
      "Identifies architectural components (UI, API endpoint, Webhook listener, DB schema)",
      "Estimates story points per subtask based on historic team velocity",
      "Generates test cases and acceptance criteria per item"
    ],
    sampleOutput: "Decomposed Subtasks:\n1. [2 pts] Database migration: customer_subscriptions table\n2. [3 pts] Stripe Checkout session redirect endpoint\n3. [3 pts] Webhook verification handler & idempotent idempotency key check\n4. [2 pts] Billing settings UI page."
  },

  // --- EOS & Leadership ---
  {
    id: "eos-triage-assistant",
    name: "EOS Triage Assistant",
    team: "EOS & Leadership",
    teamSlug: "eos",
    category: "operations",
    tier: "Core",
    trigger: "Manual",
    triggerDetail: "Runs on new issues submitted to executive leadership",
    model: "Gemini 3.0",
    timeSaved: "4 hrs/week leadership time",
    speedupMultiplier: "Instant issue clarity",
    description: "Assists leadership with issue triage — analyzes root cause, suggests priority, department assignment, and Level-10 discussion framing.",
    integrations: ["Control Tower EOS", "Slack", "Google Sheets"],
    workflowInput: "Issue: 'Sales team reports 3 recent demos slowed down by staging database latency'",
    workflowSteps: [
      "Diagnoses whether issue is symptom vs root problem",
      "Frames issue using EOS IDS (Identify, Discuss, Solve) methodology",
      "Proposes Department Owner (VP Engineering) and 3 potential resolution pathways"
    ],
    sampleOutput: "IDS Recommendation:\n• Real Issue: Staging environment shares read-replicas with staging load-tests\n• Department: Infrastructure / DevOps\n• Suggested Action: Separate staging demo tier onto dedicated tenant instance."
  },
  {
    id: "l10-agenda-builder",
    name: "L10 Agenda Builder",
    team: "EOS & Leadership",
    teamSlug: "eos",
    category: "operations",
    tier: "Standard",
    trigger: "Scheduled",
    triggerDetail: "1 hour before weekly Level-10 Leadership meeting",
    model: "Gemini 2.5 Flash",
    timeSaved: "2 hrs/meeting prep",
    speedupMultiplier: "100% automated agenda",
    description: "Auto-populates the Level-10 agenda from overdue Rocks, open Issues, and Scorecard misses across department pods.",
    integrations: ["Control Tower", "Slack", "Google Calendar"],
    workflowInput: "Scorecard miss: Customer onboarding time exceeded 14-day SLA target",
    workflowSteps: [
      "Pulls Scorecard reds & yellows from the past 7 days",
      "Sorts open issues by urgency and executive impact score",
      "Pins prioritized top 3 items to the 60-minute IDS meeting block"
    ],
    sampleOutput: "L10 Executive Agenda Generated:\n1. Good News (5m)\n2. Scorecard Review: 2 items in RED (Onboarding SLA, Blog Leads) (5m)\n3. Rock Review: 1 Rock off-track (SOC-2 Type II readiness) (5m)\n4. Top 3 IDS Priorities selected."
  },

  // --- Team & Productivity ---
  {
    id: "pod-weekly-ai-summary",
    name: "Pod Weekly Summary Agent",
    team: "Team & Productivity",
    teamSlug: "team-productivity",
    category: "operations",
    tier: "Core",
    trigger: "Scheduled",
    triggerDetail: "Every Sunday at 11:00 PM EST",
    model: "Gemini 3.0 Flash Preview",
    timeSaved: "7 hrs/week for Department Directors",
    speedupMultiplier: "Single unified briefing",
    description: "Generates structured pod performance briefings — combining productivity %, closed tasks, OKR progress, billable utilization, and code velocity.",
    integrations: ["GitHub", "Harvest", "Monday.com", "Slack"],
    workflowInput: "Team: Mobile Engineering Pod (7 engineers, 1 designer, 1 PM)",
    workflowSteps: [
      "Aggregates timesheet utilization vs budget target (88% billable vs 85% goal)",
      "Calculates PR review cycle times and commit volume",
      "Highlights high-impact wins and flags any early burnout patterns"
    ],
    sampleOutput: "Pod Briefing: Mobile Engineering Pod\n• Billable Utilization: 88.4% (Exceeds goal)\n• Output: 14 tickets closed, 28 PRs merged\n• Star Performer: Alex (Resolved critical iOS Push Notification bug ahead of schedule)."
  },
  {
    id: "burnout-detector",
    name: "Burnout & Overwork Detector",
    team: "Team & Productivity",
    teamSlug: "team-productivity",
    category: "operations",
    tier: "Standard",
    trigger: "Scheduled",
    triggerDetail: "Daily continuous sentiment & overtime scan",
    model: "Gemini 2.5 Flash",
    timeSaved: "Protects team retention",
    speedupMultiplier: "Proactive alerting",
    description: "Spots utilization spikes, late-night commit clusters, and weekend activity before they turn into employee attrition.",
    integrations: ["Slack", "GitHub", "Harvest"],
    workflowInput: "Activity data: 3 engineers logged >12 hours on weekend across emergency hotfixes",
    workflowSteps: [
      "Correlates time-log timestamps with communication sentiment trends",
      "Identifies unsustainable overtime spikes >25% above baseline",
      "Alerts Engineering VP with private recommendation for compensatory time off"
    ],
    sampleOutput: "Wellbeing Alert: Infrastructure Pod logged 38 overtime hours over Saturday/Sunday. Recommendation: Schedule compensatory recharge day and rebalance on-call schedule."
  },

  // --- Industry Verticals (Packs) ---
  {
    id: "donor-360-agent",
    name: "Donor 360 & Grant Drafter",
    team: "Nonprofit Pack",
    teamSlug: "non-profit",
    category: "vertical",
    tier: "Enterprise",
    trigger: "Event-driven / Manual",
    triggerDetail: "On new donor interaction or annual grant deadline",
    model: "Gemini 3.0",
    timeSaved: "12 hrs/week for Development Directors",
    speedupMultiplier: "Grant proposals in 2 mins",
    description: "Connects Salesforce NPSP, Bloomerang, and QuickBooks. Writes customized donor thank-you letters and drafts foundation grant proposals with cited program data.",
    integrations: ["Salesforce NPSP", "Bloomerang", "QuickBooks", "Stripe"],
    workflowInput: "Grant RFP: MacArthur Environmental Resilience Program ($250,000 grant)",
    workflowSteps: [
      "Pulls 12 months of programmatic metrics, verified headcounts, and impact figures",
      "Aligns grant RFP criteria with past audited financial disclosures",
      "Outputs complete 8-page draft with executive summary, budget breakdown, and milestones"
    ],
    sampleOutput: "Draft Grant Proposal: MacArthur Environmental Resilience\n• Section 1: Executive Mission & Need Assessment (Done)\n• Section 2: 2025 Realized Outcomes: 4,800 families served\n• Budget Request: $250,000 across 3 implementation phases."
  },
  {
    id: "ephysician-scribe",
    name: "Clinical Note Scribe & EHR Sync",
    team: "Healthcare Pack",
    teamSlug: "healthcare",
    category: "vertical",
    tier: "Enterprise",
    trigger: "Event-driven",
    triggerDetail: "Triggers on doctor-patient consultation audio completion",
    model: "Gemini 3.0",
    timeSaved: "2.5 hrs/day per physician",
    speedupMultiplier: "Instant SOAP notes",
    description: "Listens to patient consultations, automatically drafts HIPAA-compliant SOAP notes, extracts billing ICD-10 codes, and prepares EHR entries.",
    integrations: ["Epic", "Cerner", "eClinicalWorks", "AthenaHealth"],
    workflowInput: "12-minute audio recording of patient follow-up for hypertension management",
    workflowSteps: [
      "Separates doctor and patient dialogue with medical terminology recognition",
      "Structures conversation into Subjective, Objective, Assessment, Plan (SOAP)",
      "Extracts preliminary ICD-10 codes (I10 Essential Hypertension) for physician sign-off"
    ],
    sampleOutput: "SOAP Note:\n• Subjective: Patient reports mild headache, compliant with Lisinopril 20mg\n• Objective: BP 138/86, HR 72\n• Assessment: Stage 1 Hypertension with adequate control\n• Plan: Continue current medication, recheck in 90 days."
  },
  {
    id: "loan-pipeline-sentinel",
    name: "Loan Condition & 1003 Auditor",
    team: "Mortgage Pack",
    teamSlug: "mortgage-bank",
    category: "vertical",
    tier: "Enterprise",
    trigger: "Event-driven",
    triggerDetail: "Triggers when borrower uploads income or asset documents",
    model: "Gemini 3.0",
    timeSaved: "15 hrs/week per underwriter",
    speedupMultiplier: "Underwriting audit in 45s",
    description: "Audits Fannie Mae / Freddie Mac loan files for missing underwriting conditions, borrower discrepancies, and W-2 paystub calculations.",
    integrations: ["Encompass", "LendingPad", "DocuSign", "Freddie Mac"],
    workflowInput: "Loan Application #88921: Borrower submitted W-2 and 2 recent paystubs",
    workflowSteps: [
      "Extracts YTD earnings and calculates qualifying monthly income using Fannie Mae formula",
      "Flags discrepancy between stated 1003 bonus income and actual W-2 year-over-year average",
      "Updates Loan Officer with precise condition request to collect letter of explanation"
    ],
    sampleOutput: "Loan Condition Audit:\n• Calculated Qualifying Income: $9,450/mo (matches 1003 within 0.4%)\n• Flag: Unexplained $12k deposit on July 14 statement requires source documentation\n• Action: Condition #204 auto-generated in Encompass."
  }
];

const AgentBannerPreview = ({ agent }: { agent: DashboardAgent }) => {
  const getBannerData = () => {
    switch (agent.teamSlug) {
      case "sales-crm":
        return {
          header: "Pipeline Intelligence Hub",
          tag: "Active",
          card1Title: "Deal Velocity",
          card1Metric: "+34% Win Rate",
          card1Sub: "3 overdue items cleared",
          card2Title: "Signal Match",
          bars: [
            { label: "HubSpot", pct: "88%" },
            { label: "Decision Makers", pct: "74%" },
          ],
        };
      case "meetings":
        return {
          header: "Meeting Intelligence",
          tag: "Live Audio",
          card1Title: "Call Synthesis",
          card1Metric: "100% Ingested",
          card1Sub: "6 action items logged",
          card2Title: "Decision Output",
          bars: [
            { label: "Key Deliverables", pct: "95%" },
            { label: "Task Assignees", pct: "100%" },
          ],
        };
      case "project-management":
        return {
          header: "Sprint Delivery Radar",
          tag: "On Track",
          card1Title: "Sprint Velocity",
          card1Metric: "91% Complete",
          card1Sub: "0 critical blockers",
          card2Title: "Milestone Health",
          bars: [
            { label: "Burndown Rate", pct: "86%" },
            { label: "PR Code Review", pct: "92%" },
          ],
        };
      case "tasks":
        return {
          header: "Task Co-Pilot & Plan",
          tag: "Ready",
          card1Title: "Decomposition",
          card1Metric: "4 Subtasks",
          card1Sub: "Estimates & specs ready",
          card2Title: "Context Sync",
          bars: [
            { label: "Spec Accuracy", pct: "96%" },
            { label: "Acceptance Criteria", pct: "100%" },
          ],
        };
      case "eos":
        return {
          header: "Level-10 Ops Pulse",
          tag: "Leadership",
          card1Title: "Scorecard Health",
          card1Metric: "96% Verified",
          card1Sub: "Top 3 IDS issues pinned",
          card2Title: "Rock Progress",
          bars: [
            { label: "Department Rocks", pct: "90%" },
            { label: "Triage Resolution", pct: "84%" },
          ],
        };
      case "team-productivity":
        return {
          header: "Pod Utilization Radar",
          tag: "Balanced",
          card1Title: "Billable Output",
          card1Metric: "88.4%",
          card1Sub: "Retention risk: Optimal",
          card2Title: "Workload Metrics",
          bars: [
            { label: "Core Utilization", pct: "88%" },
            { label: "Overtime Balance", pct: "94%" },
          ],
        };
      case "non-profit":
        return {
          header: "Donor & Grant Hub",
          tag: "Verified",
          card1Title: "Grant Proposal",
          card1Metric: "$250k Drafted",
          card1Sub: "Program citations 100%",
          card2Title: "CRM Readiness",
          bars: [
            { label: "Salesforce NPSP", pct: "98%" },
            { label: "Financial Data", pct: "92%" },
          ],
        };
      case "healthcare":
        return {
          header: "Clinical Note Scribe",
          tag: "HIPAA Verified",
          card1Title: "Consultation Audio",
          card1Metric: "Synced",
          card1Sub: "SOAP notes auto-drafted",
          card2Title: "EHR Validation",
          bars: [
            { label: "ICD-10 Codes", pct: "97%" },
            { label: "Audit Adherence", pct: "100%" },
          ],
        };
      case "mortgage":
        return {
          header: "Underwriting Auditor",
          tag: "Compliant",
          card1Title: "Loan Dossier",
          card1Metric: "32% DTI",
          card1Sub: "Fannie Mae checks passed",
          card2Title: "1003 Verification",
          bars: [
            { label: "Income & Assets", pct: "99%" },
            { label: "Credit Exception", pct: "91%" },
          ],
        };
      case "touring":
        return {
          header: "Tour Route & Venues",
          tag: "Optimized",
          card1Title: "14 Venues",
          card1Metric: "-18% Travel",
          card1Sub: "Routing contracts linked",
          card2Title: "Itinerary Progress",
          bars: [
            { label: "Production Advances", pct: "88%" },
            { label: "Schedule Sync", pct: "96%" },
          ],
        };
      case "agency":
        return {
          header: "Scope & Fee Estimator",
          tag: "Calibrated",
          card1Title: "Target Margin",
          card1Metric: "42% Gross",
          card1Sub: "Statement of work ready",
          card2Title: "Estimation Health",
          bars: [
            { label: "Resource Bandwidth", pct: "89%" },
            { label: "Rate Alignment", pct: "100%" },
          ],
        };
      default:
        return {
          header: "Operational Workflow",
          tag: "Active",
          card1Title: "Automation Health",
          card1Metric: "98%",
          card1Sub: "Zero manual intervention",
          card2Title: "System Sync",
          bars: [
            { label: "Data Quality", pct: "94%" },
            { label: "Pipeline Status", pct: "98%" },
          ],
        };
    }
  };

  const data = getBannerData();

  return (
    <div className="relative h-44 w-full overflow-hidden border-b border-slate-100 bg-[#f8fafc] p-3 select-none">
      {/* Subtle Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />

      {/* Mini App Mockup Frame */}
      <div className="relative flex h-full flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-xs transition-transform duration-200 group-hover:scale-[1.01]">
        {/* Mockup Top Navigation Bar */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold text-slate-800 tracking-tight">
              {data.header}
            </span>
          </div>
          <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[9px] font-semibold text-slate-600">
            {data.tag}
          </span>
        </div>

        {/* Mockup Content Grid: 2 mini panels */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          {/* Panel 1: Main Metric */}
          <div className="flex flex-col justify-between rounded-lg border border-slate-100 bg-slate-50/70 p-2">
            <div>
              <span className="block text-[9px] font-semibold text-slate-500 uppercase tracking-wider">
                {data.card1Title}
              </span>
              <span className="mt-0.5 block text-xs font-bold text-slate-900">
                {data.card1Metric}
              </span>
            </div>
            <span className="mt-1 block text-[9px] text-slate-500 truncate">
              {data.card1Sub}
            </span>
          </div>

          {/* Panel 2: Signal / Progress Bars */}
          <div className="flex flex-col justify-between rounded-lg border border-slate-100 bg-slate-50/70 p-2">
            <span className="block text-[9px] font-semibold text-slate-500 uppercase tracking-wider">
              {data.card2Title}
            </span>
            <div className="mt-1 space-y-1">
              {data.bars.map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between text-[8px] font-medium text-slate-600">
                    <span className="truncate max-w-[55px]">{bar.label}</span>
                    <span className="font-bold text-slate-700">{bar.pct}</span>
                  </div>
                  <div className="mt-0.5 h-1 w-full rounded-full bg-slate-200/70 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-trust-blue transition-all duration-300"
                      style={{ width: bar.pct }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TEAMS = [
  "All Teams",
  "Sales & CRM",
  "Meetings & Comms",
  "Project Management",
  "Tasks",
  "EOS & Leadership",
  "Team & Productivity",
  "Industry Packs"
];

const AIDashboard = () => {
  const [selectedTeam, setSelectedTeam] = useState("All Teams");
  const [selectedTrigger, setSelectedTrigger] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeAgentModal, setActiveAgentModal] = useState<DashboardAgent | null>(null);

  const filteredAgents = useMemo(() => {
    return DASHBOARD_AGENTS.filter((agent) => {
      const matchesTeam =
        selectedTeam === "All Teams"
          ? true
          : selectedTeam === "Industry Packs"
          ? agent.category === "vertical"
          : agent.team.toLowerCase().includes(selectedTeam.toLowerCase());

      const matchesTrigger =
        selectedTrigger === "All"
          ? true
          : agent.trigger.toLowerCase().includes(selectedTrigger.toLowerCase());

      const matchesSearch =
        searchQuery === ""
          ? true
          : agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            agent.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            agent.integrations.some((i) => i.toLowerCase().includes(searchQuery.toLowerCase())) ||
            agent.team.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTeam && matchesTrigger && matchesSearch;
    });
  }, [selectedTeam, selectedTrigger, searchQuery]);

  return (
    <>
      <PageSeoHead
        title="AI Workforce Dashboard — Explore 100+ Specialized Agents | Control Tower"
        description="Live operational dashboard showcasing CollabAI & Control Tower AI agents. Accelerate workflows across Sales, Meetings, Projects, Tasks, and Industry verticals."
        canonicalPath="/ai-dashboard"
      />

      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background via-slate-light/40 to-background pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl text-center">
            {/* Live operational badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--brand-secondary))]/30 bg-[hsl(var(--brand-secondary))]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(var(--brand-secondary))] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[hsl(var(--brand-secondary))]"></span>
              </span>
              AI Workforce Operations Dashboard · 100+ Production Agents
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-brand-primary sm:text-5xl lg:text-6xl">
              Specialized AI Agents That
              <br />
              <span className="bg-gradient-to-r from-trust-blue to-trust-blue-dark bg-clip-text text-transparent">
                Speed Up Every Workflow.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-5xl text-lg text-slate-secondary lg:text-xl">
              From automated meeting intelligence to pipeline hygiene, project risk detection, and grant drafting.
              <br className="hidden sm:inline" />{" "}
              Explore our production agent workforce running inside your tools with zero per-token markup.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#agents-explorer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-900 bg-slate-950 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:border-slate-800 hover:bg-slate-800 hover:text-white active:translate-y-[2px]"
              >
                <Search className="h-4 w-4" />
                Explore Agents
              </a>
              <a
                href="https://controltowerdemo.collabai.software/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-800 shadow-xs transition-all duration-150 hover:border-slate-400 hover:bg-slate-100 hover:text-slate-950 active:translate-y-[2px]"
              >
                <Play className="h-4 w-4 text-slate-700" />
                Launch Live Demo
                <ExternalLink className="h-3.5 w-3.5 text-slate-500" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Agent Explorer Section */}
      <section id="agents-explorer" className="bg-slate-light py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
                Production Directory
              </span>
              <h2 className="mt-2 text-3xl font-bold text-brand-primary lg:text-4xl">
                Explore Available AI Agents
              </h2>
              <p className="mt-2 text-base text-slate-secondary">
                Filter by operational department, execution trigger, or search specific capabilities.
              </p>
            </div>
            <div className="text-sm font-medium text-slate-secondary">
              Showing {filteredAgents.length} of {DASHBOARD_AGENTS.length} featured agents
            </div>
          </div>

          {/* Search & Filter Controls */}
          <div className="mt-8 space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-secondary" />
                <Input
                  type="text"
                  placeholder="Search agents by name, function, integration (e.g. HubSpot, Zoom, EOS)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-full border-border bg-background pl-10 pr-4 text-sm shadow-sm"
                />
              </div>

              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-slate-secondary" />
                <span className="text-xs font-semibold text-slate-secondary">Trigger:</span>
                <select
                  aria-label="Filter agents by trigger type"
                  value={selectedTrigger}
                  onChange={(e) => setSelectedTrigger(e.target.value)}
                  className="rounded-full border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-800 shadow-xs transition-all duration-150 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
                >
                  <option value="All">All Triggers</option>
                  <option value="Event-driven">Event-driven</option>
                  <option value="Scheduled">Scheduled (Cron)</option>
                  <option value="Manual">Manual (On-demand)</option>
                </select>
              </div>
            </div>

            {/* Department / Category Pill Selector */}
            <div className="flex flex-wrap gap-2 pt-2">
              {TEAMS.map((team) => (
                <button
                  key={team}
                  type="button"
                  onClick={() => setSelectedTeam(team)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-150 ${
                    selectedTeam === team
                      ? "border border-slate-950 bg-slate-950 text-white shadow-sm"
                      : "border border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-100 hover:text-slate-950"
                  }`}
                >
                  {team}
                </button>
              ))}
            </div>
          </div>

          {/* Agents Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredAgents.map((agent) => (
              <div
                key={agent.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
              >
                {/* 1. Banner Image */}
                <AgentBannerPreview agent={agent} />

                {/* Card Content Area */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    {/* 2. Category above title */}
                    <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
                      {agent.team}
                    </span>

                    {/* 3. Title */}
                    <h3 className="mt-1.5 text-lg font-bold text-brand-primary group-hover:text-[hsl(var(--brand-secondary))] transition-colors">
                      {agent.name}
                    </h3>

                    {/* 4. Description */}
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-secondary">
                      {agent.description}
                    </p>
                  </div>

                  {/* 5. CTA Button */}
                  <div className="mt-6 pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveAgentModal(agent)}
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[hsl(var(--brand-secondary))] py-2.5 text-xs font-semibold text-white shadow-[0_2px_10px_0_rgba(49,94,255,0.25)] transition-all duration-150 hover:bg-[#254bdb] hover:shadow-[0_4px_14px_rgba(49,94,255,0.35)] active:translate-y-[1px]"
                    >
                      <span>Know More</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredAgents.length === 0 && (
            <div className="mt-12 rounded-2xl border border-dashed border-border bg-card p-12 text-center">
              <Search className="mx-auto h-8 w-8 text-slate-secondary" />
              <h3 className="mt-3 text-base font-semibold text-brand-primary">No agents found</h3>
              <p className="mt-1 text-xs text-slate-secondary">
                Try modifying your search keywords or resetting filters.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedTeam("All Teams");
                  setSelectedTrigger("All");
                  setSearchQuery("");
                }}
                className="mt-4 rounded-full text-xs"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Integration Ecosystem Section */}
      <section className="bg-background py-20 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
            Connected Stack
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-primary sm:text-4xl">
            Seamlessly Integrated with Your Systems of Record
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-secondary">
            CollabAI agents do not require you to migrate tools. They connect securely into HubSpot, Slack, Zoom, Google Workspace, and your private databases.
          </p>

          <div className="mt-10">
            <LogoStrip
              mode="static"
              hideHeading
              aria-label="Agent Integration Stack"
              logos={[
                "hubspot",
                "zoom",
                "google-workspace",
                "slack",
                "monday",
                "notion",
                "github",
                "salesforce",
                "ms365",
                "jira",
                "zapier",
                "docusign",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-gradient-to-br from-[hsl(var(--brand-primary))] to-black py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/10 text-white hover:bg-white/20">
            Ready to Deploy
          </Badge>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Put Your AI Workforce to Work Today.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80">
            Self-hosted in your private cloud or managed by us. Bring your own model keys with zero token markups.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book-demo"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-sm font-semibold text-black shadow-sm transition-all duration-150 hover:bg-slate-100 hover:text-black active:translate-y-[2px]"
            >
              Book a Personalized Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://controltowerdemo.collabai.software/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_7px_29px_0_rgba(49,94,255,0.4)] active:translate-y-[2px]"
            >
              Launch Sandbox Live Demo
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Inspect Agent Workflow Modal */}
      <Dialog
        open={!!activeAgentModal}
        onOpenChange={(open) => !open && setActiveAgentModal(null)}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {activeAgentModal && (
            <div>
              <DialogHeader>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
                    {activeAgentModal.team}
                  </span>
                  <Badge variant="secondary" className="text-[10px]">
                    {activeAgentModal.tier}
                  </Badge>
                </div>
                <DialogTitle className="text-2xl font-bold text-brand-primary">
                  {activeAgentModal.name}
                </DialogTitle>
                <DialogDescription className="text-sm text-slate-secondary">
                  {activeAgentModal.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 space-y-6">
                {/* Speedup and Trigger stats */}
                <div className="grid grid-cols-2 gap-4 rounded-xl border border-border bg-slate-light p-4 text-xs sm:grid-cols-3">
                  <div>
                    <span className="text-slate-400">Trigger:</span>
                    <p className="mt-0.5 font-semibold text-brand-primary">{activeAgentModal.trigger}</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Model Engine:</span>
                    <p className="mt-0.5 text-xs font-semibold text-brand-primary">{activeAgentModal.model}</p>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-slate-400">Workflow Gain:</span>
                    <p className="mt-0.5 font-semibold text-emerald-600">{activeAgentModal.timeSaved}</p>
                  </div>
                </div>

                {/* Input trigger */}
                <div>
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-secondary">
                    <Terminal className="h-3.5 w-3.5 text-[hsl(var(--brand-secondary))]" />
                    Trigger Event / Input Data
                  </h4>
                  <div className="mt-2 rounded-xl border border-border bg-card p-3 text-xs leading-relaxed text-brand-primary">
                    {activeAgentModal.workflowInput}
                  </div>
                </div>

                {/* Agent Execution Flow */}
                <div>
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-secondary">
                    <Layers className="h-3.5 w-3.5 text-[hsl(var(--brand-secondary))]" />
                    Agent Reasoning Steps
                  </h4>
                  <div className="mt-2 space-y-2">
                    {activeAgentModal.workflowSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 rounded-lg border border-border bg-background p-2.5 text-xs text-brand-primary"
                      >
                        <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-slate-light text-[11px] font-semibold text-slate-700">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Concrete Output Artifact */}
                <div>
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-secondary">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    Generated Output Artifact
                  </h4>
                  <div className="mt-2 whitespace-pre-wrap rounded-xl border border-emerald-200 bg-emerald-50/50 p-4 text-xs leading-relaxed text-emerald-950">
                    {activeAgentModal.sampleOutput}
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveAgentModal(null)}
                    className="rounded-full border border-slate-300 bg-white px-5 py-2 text-xs font-semibold text-slate-700 shadow-xs transition-all duration-150 hover:border-slate-400 hover:bg-slate-100 hover:text-slate-950"
                  >
                    Close
                  </button>
                  <Link
                    to="/book-demo"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-900 bg-slate-950 px-6 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-150 hover:border-slate-800 hover:bg-slate-800 hover:text-white"
                  >
                    Request Custom Configuration
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AIDashboard;
