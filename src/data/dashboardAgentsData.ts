// Auto-generated production agents dataset incorporating CollabAI Marketplace listings
import dealCoachBanner from "@/assets/agents/deal-coach-banner.png";

export interface DashboardAgent {
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
  bannerImage?: string;
  marketplaceUrl?: string;
  vertical?: string;
}

export const DASHBOARD_AGENTS: DashboardAgent[] = [
  {
    "id": "deal-coach",
    "name": "Deal Coach",
    "bannerImage": dealCoachBanner,
    "team": "Sales & CRM",
    "teamSlug": "sales-crm",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "Triggered on-demand before client pitch or pipeline review",
    "model": "Gemini 3.0",
    "timeSaved": "5.5 hrs/week per rep",
    "speedupMultiplier": "6x faster prep",
    "description": "Synthesizes pipeline history, recent Zoom transcripts, and competitive signals to deliver an executive negotiation brief and objection guide.",
    "integrations": [
      "HubSpot",
      "Salesforce",
      "Zoom",
      "Slack"
    ],
    "workflowInput": "Account: Acme Corp ($140k ARR Opportunity, Stage: Contract Review, 3 overdue action items)",
    "workflowSteps": [
      "Extracts past 3 Zoom calls, pricing objections, and security concerns from CRM timeline",
      "Correlates objections with approved pricing thresholds & SLA guidelines",
      "Synthesizes 1-page playbook with 3 high-probability closing terms"
    ],
    "sampleOutput": "Deal Briefing: Acme Corp\n• Recommended Close Date: Oct 28\n• Key Blocker: Data residency in EU\n• Suggested Concession: Offer EU AWS cluster hosting with 0% margin discount\n• Next Action: Send pre-drafted security whitepaper to VP SecOps.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/deal-coach-w9kr6f"
  },
  {
    "id": "client-research",
    "name": "Client Research Agent",
    "team": "Sales & CRM",
    "teamSlug": "sales-crm",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "1-click deep research before discovery meetings",
    "model": "Gemini 3.0",
    "timeSaved": "4 hrs/week",
    "speedupMultiplier": "10x faster intel",
    "description": "Gathers external company intelligence — funding events, tech stack, open hiring roles, and executive changes — into an instant dossier.",
    "integrations": [
      "HubSpot",
      "LinkedIn",
      "Clearbit",
      "Google Docs"
    ],
    "workflowInput": "Domain: fintech-innovators.io",
    "workflowSteps": [
      "Scrapes public press releases, job boards, and tech footprint (StackShare / BuiltWith)",
      "Maps leadership org chart and recent funding announcements",
      "Generates 3 tailored conversation starters addressing their open hiring challenges"
    ],
    "sampleOutput": "Dossier: FinTech Innovators Inc.\n• Series B ($28M led by Insight Partners)\n• Expanding Compliance pod (+6 open roles in RegTech)\n• Pitch Angle: Control Tower automated compliance reporting saves 200+ audit hours.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/company-research-z0vx5y"
  },
  {
    "id": "pipeline-hygiene",
    "name": "Pipeline Hygiene Sentinel",
    "team": "Sales & CRM",
    "teamSlug": "sales-crm",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Scheduled",
    "triggerDetail": "Weekly recurring audit every Monday 7:00 AM",
    "model": "Gemini 2.5 Flash",
    "timeSaved": "3 hrs/week for Sales Leaders",
    "speedupMultiplier": "100% audit accuracy",
    "description": "Audits CRM deals for stalled progress, missing close dates, and inaccurate stage coverage, delivering a clean summary to Slack.",
    "integrations": [
      "HubSpot",
      "Slack",
      "Salesforce"
    ],
    "workflowInput": "Scheduled scan: 184 active deals across 8 Account Executives",
    "workflowSteps": [
      "Scans deals stagnant for >14 days without customer activity",
      "Checks close date accuracy vs actual contract stage velocity",
      "DMs reps directly with suggested 1-click status updates or close-date pushes"
    ],
    "sampleOutput": "Pipeline Hygiene Audit Completed:\n• 12 deals flagged for overdue close dates\n• 4 stalled deals with no touchpoints in 21 days\n• Slack notifications dispatched to 4 AE owners.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/deal-daily-briefing-v79swp"
  },
  {
    "id": "meeting-intelligence",
    "name": "Meeting Intelligence",
    "team": "Meetings & Comms",
    "teamSlug": "meetings",
    "category": "operations",
    "tier": "Core",
    "trigger": "Event-driven",
    "triggerDetail": "Triggers automatically when a Zoom / Google Meet recording finishes",
    "model": "Gemini 3.0",
    "timeSaved": "8 hrs/week per manager",
    "speedupMultiplier": "45-second summary",
    "description": "Transcribes calls, extracts decisions, categorizes issues, and tags action items with assignees and delivery deadlines.",
    "integrations": [
      "Zoom",
      "Google Meet",
      "Monday.com",
      "Slack"
    ],
    "workflowInput": "Raw audio & transcript from 45-minute Client Delivery & Sprint Sync",
    "workflowSteps": [
      "Separates speakers and filters filler conversation",
      "Extracts agreed deliverables, blockers, and budget sign-offs",
      "Creates tasks in project management system with assignees automatically"
    ],
    "sampleOutput": "Sprint Sync Key Takeaways:\n• Decision: Launch migration postponed to Nov 4 to allow load testing\n• Assigned: Sarah (Deploy staging DB), David (Finalize load test script)\n• 6 Action items synced to Monday.com Board #482.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/meeting-intelligence-vzpq60"
  },
  {
    "id": "follow-up-drafter",
    "name": "Follow-Up Drafter",
    "team": "Meetings & Comms",
    "teamSlug": "meetings",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Event-driven",
    "triggerDetail": "Fires immediately following Meeting Intelligence synthesis",
    "model": "Gemini 2.5 Flash",
    "timeSaved": "4.5 hrs/week",
    "speedupMultiplier": "Draft ready in 15s",
    "description": "Generates formatted, polite executive follow-up emails recapping action items, deadlines, and next meeting timestamps.",
    "integrations": [
      "Gmail",
      "Outlook",
      "Zoom"
    ],
    "workflowInput": "Extracted decisions from Client Steering Committee Meeting",
    "workflowSteps": [
      "Formats takeaways into clean, bulleted email structure",
      "Sets bold action item owners and deadlines",
      "Stores draft in user's email client ready for 1-click review & send"
    ],
    "sampleOutput": "Subject: Follow-up: Q4 Roadmap Alignment & Action Items\n\nHi Alex,\nThank you for today's time. As discussed, our next milestone is Nov 12.\nKey Action Items:\n1. CollabAI: Provide private tenant deployment specs (Owner: Marcus, by Oct 16)\n2. Acme: Whitelist staging IP range (Owner: Elena, by Oct 18)\n...",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/email-draft-generator-hwwlo7"
  },
  {
    "id": "project-analyzer",
    "name": "AI Project Analyzer",
    "team": "Project Management",
    "teamSlug": "project-management",
    "category": "operations",
    "tier": "Core",
    "trigger": "Event-driven / Manual",
    "triggerDetail": "Analyzes project boards on demand or on major milestone update",
    "model": "Gemini 3.0",
    "timeSaved": "6 hrs/week for PMs",
    "speedupMultiplier": "Real-time risk scoring",
    "description": "Monitors project timelines, task completion velocity, scope creep, and resource bottlenecks to forecast delivery dates accurately.",
    "integrations": [
      "Jira",
      "Monday.com",
      "GitHub",
      "Slack"
    ],
    "workflowInput": "Project: Healthcare Mobile App Redesign (48 open tickets, Sprint 4 of 6)",
    "workflowSteps": [
      "Compares current burndown rate against historical team velocity",
      "Flags 3 dependent tickets blocked by API contract approvals",
      "Calculates forecasted release delay risk: 82% confidence on 4-day slip without resource shift"
    ],
    "sampleOutput": "Project Health: AMBER\n• Velocity: 34 story points/week (target: 40)\n• Risk Factor: Epic #104 API Dependency\n• Recommended Mitigation: Reassign 1 backend engineer from non-critical sprint backlog.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/project-analyzer-vwgtey"
  },
  {
    "id": "weekly-status",
    "name": "Weekly Status Composer",
    "team": "Project Management",
    "teamSlug": "project-management",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Scheduled",
    "triggerDetail": "Every Friday at 4:00 PM EST",
    "model": "Gemini 2.5 Flash",
    "timeSaved": "3 hrs/week per Project Lead",
    "speedupMultiplier": "Zero manual writing",
    "description": "Aggregates Git commits, completed tasks, and meeting decisions into professional client-facing and leadership weekly status memos.",
    "integrations": [
      "GitHub",
      "Jira",
      "Slack",
      "Notion"
    ],
    "workflowInput": "Weekly sprint logs: 42 closed tickets, 18 merged pull requests, 2 client syncs",
    "workflowSteps": [
      "Parses merged PR descriptions and closed issue resolutions",
      "Transforms technical commit titles into human-friendly business accomplishments",
      "Outlines upcoming focus areas for the following week"
    ],
    "sampleOutput": "Weekly Client Digest (Week 41):\n• Accomplishments: Completed SSO integration; deployed HIPAA audit logging\n• In Progress: Patient portal appointment booking UI\n• Planned for Next Week: End-to-end pen testing.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/weekly-update-generator-oixfke"
  },
  {
    "id": "task-ai-chat",
    "name": "Task AI Assistant",
    "team": "Project Management",
    "teamSlug": "tasks",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "Embedded in task modal for instant interactive troubleshooting",
    "model": "Gemini 2.5 Flash",
    "timeSaved": "5 hrs/week per engineer/operator",
    "speedupMultiplier": "Instant context recall",
    "description": "Conversational co-pilot inside tasks with full access to project specs, historical code changes, and related meeting discussions.",
    "integrations": [
      "Control Tower",
      "GitHub",
      "Internal Wiki"
    ],
    "workflowInput": "User query: 'How does the HIPAA token expiration policy apply to inactive sessions?'",
    "workflowSteps": [
      "Queries vector search across company compliance documents & architecture notes",
      "Retrieves exact session timeout policy (15-minute inactivity rule)",
      "Provides code snippet and compliance reference link"
    ],
    "sampleOutput": "Answer: Inactive sessions must terminate after 15 minutes per section 4.2 of our HIPAA compliance spec. Code snippet configured in `/src/auth/sessionManager.ts:42`.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/task-ai-chat-dh6r9r"
  },
  {
    "id": "subtask-planner",
    "name": "Subtask Decomposition Planner",
    "team": "Project Management",
    "teamSlug": "tasks",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "1-click breakdown from complex parent feature request",
    "model": "Gemini 2.5 Flash",
    "timeSaved": "2 hrs/task planning",
    "speedupMultiplier": "8x faster estimation",
    "description": "Breaks down high-level initiatives into granular, estimated, and dependency-linked subtasks ready for sprint assignment.",
    "integrations": [
      "Jira",
      "Monday.com",
      "Linear"
    ],
    "workflowInput": "Task: 'Implement Stripe recurring billing portal with webhook retry logic'",
    "workflowSteps": [
      "Identifies architectural components (UI, API endpoint, Webhook listener, DB schema)",
      "Estimates story points per subtask based on historic team velocity",
      "Generates test cases and acceptance criteria per item"
    ],
    "sampleOutput": "Decomposed Subtasks:\n1. [2 pts] Database migration: customer_subscriptions table\n2. [3 pts] Stripe Checkout session redirect endpoint\n3. [3 pts] Webhook verification handler & idempotent idempotency key check\n4. [2 pts] Billing settings UI page.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/task-ai-planner-s9dkd4"
  },
  {
    "id": "eos-triage-assistant",
    "name": "EOS Triage Assistant",
    "team": "EOS & Leadership",
    "teamSlug": "eos",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "Runs on new issues submitted to executive leadership",
    "model": "Gemini 3.0",
    "timeSaved": "4 hrs/week leadership time",
    "speedupMultiplier": "Instant issue clarity",
    "description": "Assists leadership with issue triage — analyzes root cause, suggests priority, department assignment, and Level-10 discussion framing.",
    "integrations": [
      "Control Tower EOS",
      "Slack",
      "Google Sheets"
    ],
    "workflowInput": "Issue: 'Sales team reports 3 recent demos slowed down by staging database latency'",
    "workflowSteps": [
      "Diagnoses whether issue is symptom vs root problem",
      "Frames issue using EOS IDS (Identify, Discuss, Solve) methodology",
      "Proposes Department Owner (VP Engineering) and 3 potential resolution pathways"
    ],
    "sampleOutput": "IDS Recommendation:\n• Real Issue: Staging environment shares read-replicas with staging load-tests\n• Department: Infrastructure / DevOps\n• Suggested Action: Separate staging demo tier onto dedicated tenant instance.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eos-triage-assistant-8lokbt"
  },
  {
    "id": "l10-agenda-builder",
    "name": "L10 Agenda Builder",
    "team": "EOS & Leadership",
    "teamSlug": "eos",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Scheduled",
    "triggerDetail": "1 hour before weekly Level-10 Leadership meeting",
    "model": "Gemini 2.5 Flash",
    "timeSaved": "2 hrs/meeting prep",
    "speedupMultiplier": "100% automated agenda",
    "description": "Auto-populates the Level-10 agenda from overdue Rocks, open Issues, and Scorecard misses across department pods.",
    "integrations": [
      "Control Tower",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Scorecard miss: Customer onboarding time exceeded 14-day SLA target",
    "workflowSteps": [
      "Pulls Scorecard reds & yellows from the past 7 days",
      "Sorts open issues by urgency and executive impact score",
      "Pins prioritized top 3 items to the 60-minute IDS meeting block"
    ],
    "sampleOutput": "L10 Executive Agenda Generated:\n1. Good News (5m)\n2. Scorecard Review: 2 items in RED (Onboarding SLA, Blog Leads) (5m)\n3. Rock Review: 1 Rock off-track (SOC-2 Type II readiness) (5m)\n4. Top 3 IDS Priorities selected.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/meeting-agenda-builder-np-vssuo"
  },
  {
    "id": "pod-weekly-ai-summary",
    "name": "Pod Weekly Summary Agent",
    "team": "HR & People",
    "teamSlug": "team-productivity",
    "category": "operations",
    "tier": "Core",
    "trigger": "Scheduled",
    "triggerDetail": "Every Sunday at 11:00 PM EST",
    "model": "Gemini 3.0 Flash Preview",
    "timeSaved": "7 hrs/week for Department Directors",
    "speedupMultiplier": "Single unified briefing",
    "description": "Generates structured pod performance briefings — combining productivity %, closed tasks, OKR progress, billable utilization, and code velocity.",
    "integrations": [
      "GitHub",
      "Harvest",
      "Monday.com",
      "Slack"
    ],
    "workflowInput": "Team: Mobile Engineering Pod (7 engineers, 1 designer, 1 PM)",
    "workflowSteps": [
      "Aggregates timesheet utilization vs budget target (88% billable vs 85% goal)",
      "Calculates PR review cycle times and commit volume",
      "Highlights high-impact wins and flags any early burnout patterns"
    ],
    "sampleOutput": "Pod Briefing: Mobile Engineering Pod\n• Billable Utilization: 88.4% (Exceeds goal)\n• Output: 14 tickets closed, 28 PRs merged\n• Star Performer: Alex (Resolved critical iOS Push Notification bug ahead of schedule).",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/pod-weekly-ai-summary-g4xeeh"
  },
  {
    "id": "burnout-detector",
    "name": "Burnout & Overwork Detector",
    "team": "HR & People",
    "teamSlug": "team-productivity",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Scheduled",
    "triggerDetail": "Daily continuous sentiment & overtime scan",
    "model": "Gemini 2.5 Flash",
    "timeSaved": "Protects team retention",
    "speedupMultiplier": "Proactive alerting",
    "description": "Spots utilization spikes, late-night commit clusters, and weekend activity before they turn into employee attrition.",
    "integrations": [
      "Slack",
      "GitHub",
      "Harvest"
    ],
    "workflowInput": "Activity data: 3 engineers logged >12 hours on weekend across emergency hotfixes",
    "workflowSteps": [
      "Correlates time-log timestamps with communication sentiment trends",
      "Identifies unsustainable overtime spikes >25% above baseline",
      "Alerts Engineering VP with private recommendation for compensatory time off"
    ],
    "sampleOutput": "Wellbeing Alert: Infrastructure Pod logged 38 overtime hours over Saturday/Sunday. Recommendation: Schedule compensatory recharge day and rebalance on-call schedule.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/productivity-intelligence-sjhr"
  },
  {
    "id": "donor-360-agent",
    "name": "Donor 360 & Grant Drafter",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Event-driven / Manual",
    "triggerDetail": "On new donor interaction or annual grant deadline",
    "model": "Gemini 3.0",
    "timeSaved": "12 hrs/week for Development Directors",
    "speedupMultiplier": "Grant proposals in 2 mins",
    "description": "Connects Salesforce NPSP, Bloomerang, and QuickBooks. Writes customized donor thank-you letters and drafts foundation grant proposals with cited program data.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Grant RFP: MacArthur Environmental Resilience Program ($250,000 grant)",
    "workflowSteps": [
      "Pulls 12 months of programmatic metrics, verified headcounts, and impact figures",
      "Aligns grant RFP criteria with past audited financial disclosures",
      "Outputs complete 8-page draft with executive summary, budget breakdown, and milestones"
    ],
    "sampleOutput": "Draft Grant Proposal: MacArthur Environmental Resilience\n• Section 1: Executive Mission & Need Assessment (Done)\n• Section 2: 2025 Realized Outcomes: 4,800 families served\n• Budget Request: $250,000 across 3 implementation phases.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/board-reporting-np-only0",
    "vertical": "nonprofit"
  },
  {
    "id": "ephysician-scribe",
    "name": "Clinical Note Scribe & EHR Sync",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Event-driven",
    "triggerDetail": "Triggers on doctor-patient consultation audio completion",
    "model": "Gemini 3.0",
    "timeSaved": "2.5 hrs/day per physician",
    "speedupMultiplier": "Instant SOAP notes",
    "description": "Listens to patient consultations, automatically drafts HIPAA-compliant SOAP notes, extracts billing ICD-10 codes, and prepares EHR entries.",
    "integrations": [
      "Epic",
      "Cerner",
      "eClinicalWorks",
      "AthenaHealth"
    ],
    "workflowInput": "12-minute audio recording of patient follow-up for hypertension management",
    "workflowSteps": [
      "Separates doctor and patient dialogue with medical terminology recognition",
      "Structures conversation into Subjective, Objective, Assessment, Plan (SOAP)",
      "Extracts preliminary ICD-10 codes (I10 Essential Hypertension) for physician sign-off"
    ],
    "sampleOutput": "SOAP Note:\n• Subjective: Patient reports mild headache, compliant with Lisinopril 20mg\n• Objective: BP 138/86, HR 72\n• Assessment: Stage 1 Hypertension with adequate control\n• Plan: Continue current medication, recheck in 90 days.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eph-voice-scheduler-cau7hm",
    "vertical": "healthcare"
  },
  {
    "id": "loan-pipeline-sentinel",
    "name": "Loan Condition & 1003 Auditor",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Event-driven",
    "triggerDetail": "Triggers when borrower uploads income or asset documents",
    "model": "Gemini 3.0",
    "timeSaved": "15 hrs/week per underwriter",
    "speedupMultiplier": "Underwriting audit in 45s",
    "description": "Audits Fannie Mae / Freddie Mac loan files for missing underwriting conditions, borrower discrepancies, and W-2 paystub calculations.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "DocuSign",
      "Freddie Mac"
    ],
    "workflowInput": "Loan Application #88921: Borrower submitted W-2 and 2 recent paystubs",
    "workflowSteps": [
      "Extracts YTD earnings and calculates qualifying monthly income using Fannie Mae formula",
      "Flags discrepancy between stated 1003 bonus income and actual W-2 year-over-year average",
      "Updates Loan Officer with precise condition request to collect letter of explanation"
    ],
    "sampleOutput": "Loan Condition Audit:\n• Calculated Qualifying Income: $9,450/mo (matches 1003 within 0.4%)\n• Flag: Unexplained $12k deposit on July 14 statement requires source documentation\n• Action: Condition #204 auto-generated in Encompass.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/deal-coach-mortgage-hhybk",
    "vertical": "mortgage"
  },
  {
    "id": "team-insights-sjhr-healthcare",
    "name": "Team Insights Agent",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Gives each manager personalized analytics and forecasts about their team — attendance, productivity, and risks.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Gives each manager personalized analytics and forecasts about their team — attendance, productivity, and risks.",
    "workflowSteps": [
      "Manager-level analytics without a BI tool",
      "Forecasts team risks before they become incidents",
      "Personalized to each manager's actual team"
    ],
    "sampleOutput": "A manager opens their dashboard: 'Your team's on-time rate dropped 8% this week. 1 member at burnout risk based on workload + leave.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/team-insights-sjhr-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "lovable-prototype-builder-wpmxxf",
    "name": "Prototype Builder",
    "team": "Sales & CRM",
    "teamSlug": "sales-crm",
    "category": "operations",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Generates client-facing prototype specifications from deal context, enabling rapid prototype creation.",
    "integrations": [
      "HubSpot",
      "Salesforce",
      "Zoom",
      "Slack"
    ],
    "workflowInput": "Generates client-facing prototype specifications from deal context, enabling rapid prototype creation.\n\nCapabilities:\n- Creates prototype specs from deal requirements\n- Generates Lovable-ready project specifications\n- Extracts technical requirements from deal context\n- Supports rapid client demo preparation",
    "workflowSteps": [
      "Creates prototype specs from deal requirements",
      "Generates Lovable-ready project specifications",
      "Extracts technical requirements from deal context"
    ],
    "sampleOutput": "Executive Summary: Prototype Builder\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/lovable-prototype-builder-wpmxxf",
    "vertical": "agency"
  },
  {
    "id": "sow-generator-pfal2w",
    "name": "SOW Generator",
    "team": "Sales & CRM",
    "teamSlug": "sales-crm",
    "category": "operations",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Statement of Work generation with PDF export capability. Pulls deal data, project scope, and client info.",
    "integrations": [
      "HubSpot",
      "Salesforce",
      "Zoom",
      "Slack"
    ],
    "workflowInput": "Statement of Work generation with PDF export capability. Pulls deal data, project scope, and client info.\n\nCapabilities:\n- Generates professional SOW documents\n- Pulls deal and client data automatically\n- Supports PDF export for client delivery\n- Includes scope, timeline, and deliverables",
    "workflowSteps": [
      "Generates professional SOW documents",
      "Pulls deal and client data automatically",
      "Supports PDF export for client delivery"
    ],
    "sampleOutput": "Executive Summary: SOW Generator\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/sow-generator-pfal2w",
    "vertical": "agency"
  },
  {
    "id": "eos-issue-owner-reminder-h7c7t1",
    "name": "Issue Owner Reminder",
    "team": "EOS & Leadership",
    "teamSlug": "eos",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Sends weekly email summaries to issue owners listing their open EOS issues with direct links. CC to managers.",
    "integrations": [
      "Control Tower EOS",
      "Slack",
      "Google Sheets"
    ],
    "workflowInput": "Sends weekly email summaries to issue owners listing their open EOS issues with direct links. CC to managers.\n\nCapabilities:\n- Queries all open issues (New / In IDS) with assigned owners\n- Groups issues by owner and sends a summary email\n- Includes direct links to each issue for quick access\n- CCs managers@CollabAI.com on every email",
    "workflowSteps": [
      "Queries all open issues (New / In IDS) with assigned owners",
      "Groups issues by owner and sends a summary email",
      "Includes direct links to each issue for quick access"
    ],
    "sampleOutput": "Executive Summary: Issue Owner Reminder\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eos-issue-owner-reminder-h7c7t1",
    "vertical": "agency"
  },
  {
    "id": "email-draft-generator-hwwlo7",
    "name": "Email Draft Generator",
    "team": "Sales & CRM",
    "teamSlug": "sales-crm",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Relationship-aware email drafting that considers client history, previous communications, and contact preferences.",
    "integrations": [
      "HubSpot",
      "Salesforce",
      "Zoom",
      "Slack"
    ],
    "workflowInput": "Relationship-aware email drafting that considers client history, previous communications, and contact preferences.\n\nCapabilities:\n- Generates context-aware email drafts\n- Considers past communication patterns\n- Adapts to contact preferences and tone\n- Supports multiple email templates and styles",
    "workflowSteps": [
      "Generates context-aware email drafts",
      "Considers past communication patterns",
      "Adapts to contact preferences and tone"
    ],
    "sampleOutput": "Executive Summary: Email Draft Generator\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/email-draft-generator-hwwlo7",
    "vertical": "agency"
  },
  {
    "id": "company-research-z0vx5y",
    "name": "Company Research",
    "team": "Sales & CRM",
    "teamSlug": "sales-crm",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Deep company research with 4-tier fallback: domain-filtered, month recency, year recency, and plain name fallback.",
    "integrations": [
      "HubSpot",
      "Salesforce",
      "Zoom",
      "Slack"
    ],
    "workflowInput": "Deep company research with 4-tier fallback: domain-filtered, month recency, year recency, and plain name fallback.\n\nCapabilities:\n- Performs deep company background research\n- Uses 4-tier fallback for comprehensive results\n- Validates content for substantive findings\n- Persists failure diagnostics to the database",
    "workflowSteps": [
      "Performs deep company background research",
      "Uses 4-tier fallback for comprehensive results",
      "Validates content for substantive findings"
    ],
    "sampleOutput": "Executive Summary: Company Research\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/company-research-z0vx5y",
    "vertical": "agency"
  },
  {
    "id": "client-call-analyzer-3756c1",
    "name": "Client Call Analyzer",
    "team": "Meetings & Comms",
    "teamSlug": "meetings",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Specialized analysis of client calls — extracts sentiment, concerns, opportunities, and health indicators.",
    "integrations": [
      "Zoom",
      "Google Meet",
      "Teams",
      "Slack"
    ],
    "workflowInput": "Specialized analysis of client calls — extracts sentiment, concerns, opportunities, and health indicators.\n\nCapabilities:\n- Detects client sentiment and satisfaction signals\n- Identifies concerns and potential risks\n- Spots upsell and expansion opportunities\n- Tracks client health indicators over time",
    "workflowSteps": [
      "Detects client sentiment and satisfaction signals",
      "Identifies concerns and potential risks",
      "Spots upsell and expansion opportunities"
    ],
    "sampleOutput": "Executive Summary: Client Call Analyzer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/client-call-analyzer-3756c1",
    "vertical": "agency"
  },
  {
    "id": "meeting-issue-reporter-lcnymm",
    "name": "Meeting Issue Reporter",
    "team": "Meetings & Comms",
    "teamSlug": "meetings",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Extracts EOS-format issues from meeting transcripts and creates suggestions for the EOS Issues list.",
    "integrations": [
      "Zoom",
      "Google Meet",
      "Teams",
      "Slack"
    ],
    "workflowInput": "Extracts EOS-format issues from meeting transcripts and creates suggestions for the EOS Issues list.\n\nCapabilities:\n- Extracts issues in EOS IDS format\n- Suggests priority and severity for each issue\n- Creates direct suggestions for EOS Issues list\n- Emails a summary report to stakeholders",
    "workflowSteps": [
      "Extracts issues in EOS IDS format",
      "Suggests priority and severity for each issue",
      "Creates direct suggestions for EOS Issues list"
    ],
    "sampleOutput": "Executive Summary: Meeting Issue Reporter\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/meeting-issue-reporter-lcnymm",
    "vertical": "agency"
  },
  {
    "id": "meeting-efficiency-analyzer-nlhsyc",
    "name": "Efficiency Analyzer",
    "team": "Meetings & Comms",
    "teamSlug": "meetings",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Scores meeting quality based on structure, participation, outcomes, and time efficiency.",
    "integrations": [
      "Zoom",
      "Google Meet",
      "Teams",
      "Slack"
    ],
    "workflowInput": "Scores meeting quality based on structure, participation, outcomes, and time efficiency.\n\nCapabilities:\n- Scores meetings on structure and outcomes\n- Analyzes participant engagement patterns\n- Identifies time waste and improvement areas\n- Benchmarks against meeting best practices",
    "workflowSteps": [
      "Scores meetings on structure and outcomes",
      "Analyzes participant engagement patterns",
      "Identifies time waste and improvement areas"
    ],
    "sampleOutput": "Executive Summary: Efficiency Analyzer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/meeting-efficiency-analyzer-nlhsyc",
    "vertical": "agency"
  },
  {
    "id": "smart-meeting-categorizer-szzrz8",
    "name": "Smart Categorizer",
    "team": "Meetings & Comms",
    "teamSlug": "meetings",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Auto-categorizes meetings based on topic, participants, and content analysis.",
    "integrations": [
      "Zoom",
      "Google Meet",
      "Teams",
      "Slack"
    ],
    "workflowInput": "Auto-categorizes meetings based on topic, participants, and content analysis.\n\nCapabilities:\n- Classifies meetings by type automatically\n- Analyzes topic, participants, and content\n- Applies consistent categorization across meetings\n- Reduces manual tagging effort",
    "workflowSteps": [
      "Classifies meetings by type automatically",
      "Analyzes topic, participants, and content",
      "Applies consistent categorization across meetings"
    ],
    "sampleOutput": "Executive Summary: Smart Categorizer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/smart-meeting-categorizer-szzrz8",
    "vertical": "agency"
  },
  {
    "id": "project-analyzer-vwgtey",
    "name": "Project Analyzer",
    "team": "Project Management",
    "teamSlug": "project-management",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Analyzes project health — timeline risk, resource utilization, scope creep, and blocker identification.",
    "integrations": [
      "Jira",
      "Monday.com",
      "ActiveCollab",
      "Linear"
    ],
    "workflowInput": "Analyzes project health — timeline risk, resource utilization, scope creep, and blocker identification.\n\nCapabilities:\n- Assesses project health and risk levels\n- Identifies timeline risks and blockers\n- Analyzes resource utilization efficiency\n- Detects scope creep indicators",
    "workflowSteps": [
      "Assesses project health and risk levels",
      "Identifies timeline risks and blockers",
      "Analyzes resource utilization efficiency"
    ],
    "sampleOutput": "Executive Summary: Project Analyzer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/project-analyzer-vwgtey",
    "vertical": "agency"
  },
  {
    "id": "task-ai-summary-b211vx",
    "name": "Task AI Summary",
    "team": "Project Management",
    "teamSlug": "project-management",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Generates structured task snapshots — status overview, key decisions, blockers, and next steps.",
    "integrations": [
      "Jira",
      "Monday.com",
      "ActiveCollab",
      "Linear"
    ],
    "workflowInput": "Generates structured task snapshots — status overview, key decisions, blockers, and next steps.\n\nCapabilities:\n- Creates structured task status snapshots\n- Identifies key decisions and blockers\n- Highlights next steps and priorities\n- Caches results for quick access",
    "workflowSteps": [
      "Creates structured task status snapshots",
      "Identifies key decisions and blockers",
      "Highlights next steps and priorities"
    ],
    "sampleOutput": "Executive Summary: Task AI Summary\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/task-ai-summary-b211vx",
    "vertical": "agency"
  },
  {
    "id": "task-ai-research-3y468x",
    "name": "Task AI Research",
    "team": "Project Management",
    "teamSlug": "project-management",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Web and RAG-based research for task context — finds relevant documentation, articles, and best practices.",
    "integrations": [
      "Jira",
      "Monday.com",
      "ActiveCollab",
      "Linear"
    ],
    "workflowInput": "Web and RAG-based research for task context — finds relevant documentation, articles, and best practices.\n\nCapabilities:\n- Searches web for relevant resources\n- Queries internal knowledge base via RAG\n- Finds documentation and best practices\n- Provides curated research summaries",
    "workflowSteps": [
      "Searches web for relevant resources",
      "Queries internal knowledge base via RAG",
      "Finds documentation and best practices"
    ],
    "sampleOutput": "Executive Summary: Task AI Research\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/task-ai-research-3y468x",
    "vertical": "agency"
  },
  {
    "id": "eos-pod-health-jimmpg",
    "name": "Pod Health",
    "team": "EOS & Leadership",
    "teamSlug": "eos",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Analyzes pod/team health based on EOS metrics — accountability completion, issue resolution rate, rock progress.",
    "integrations": [
      "Control Tower EOS",
      "Slack",
      "Google Sheets"
    ],
    "workflowInput": "Analyzes pod/team health based on EOS metrics — accountability completion, issue resolution rate, rock progress.\n\nCapabilities:\n- Scores pod health on multiple dimensions\n- Tracks accountability chart completion\n- Measures issue resolution rates\n- Monitors quarterly rock progress",
    "workflowSteps": [
      "Scores pod health on multiple dimensions",
      "Tracks accountability chart completion",
      "Measures issue resolution rates"
    ],
    "sampleOutput": "Executive Summary: Pod Health\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eos-pod-health-jimmpg",
    "vertical": "agency"
  },
  {
    "id": "eos-quarterly-digest-9l9ttd",
    "name": "Quarterly Digest",
    "team": "EOS & Leadership",
    "teamSlug": "eos",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Generates quarterly summary reports — rock completion, issue trends, accountability scores, and recommendations.",
    "integrations": [
      "Control Tower EOS",
      "Slack",
      "Google Sheets"
    ],
    "workflowInput": "Generates quarterly summary reports — rock completion, issue trends, accountability scores, and recommendations.\n\nCapabilities:\n- Compiles quarterly EOS performance data\n- Summarizes rock completion status\n- Analyzes issue trend trajectories\n- Provides strategic recommendations",
    "workflowSteps": [
      "Compiles quarterly EOS performance data",
      "Summarizes rock completion status",
      "Analyzes issue trend trajectories"
    ],
    "sampleOutput": "Executive Summary: Quarterly Digest\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eos-quarterly-digest-9l9ttd",
    "vertical": "agency"
  },
  {
    "id": "accountability-chart-reminder-bu9tus",
    "name": "Chart Reminder",
    "team": "EOS & Leadership",
    "teamSlug": "eos",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Sends weekly reminders to employees with pending or overdue accountability chart submissions.",
    "integrations": [
      "Control Tower EOS",
      "Slack",
      "Google Sheets"
    ],
    "workflowInput": "Sends weekly reminders to employees with pending or overdue accountability chart submissions.\n\nCapabilities:\n- Identifies pending chart submissions\n- Sends automated email reminders\n- Tracks submission compliance rates\n- Runs weekly on Mondays automatically",
    "workflowSteps": [
      "Identifies pending chart submissions",
      "Sends automated email reminders",
      "Tracks submission compliance rates"
    ],
    "sampleOutput": "Executive Summary: Chart Reminder\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/accountability-chart-reminder-bu9tus",
    "vertical": "agency"
  },
  {
    "id": "accountability-revisit-reminder-mbf8qc",
    "name": "Revisit Reminder",
    "team": "EOS & Leadership",
    "teamSlug": "eos",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Monthly reminder for employees to revisit and update their accountability charts.",
    "integrations": [
      "Control Tower EOS",
      "Slack",
      "Google Sheets"
    ],
    "workflowInput": "Monthly reminder for employees to revisit and update their accountability charts.\n\nCapabilities:\n- Reminds employees to refresh their charts\n- Encourages regular self-assessment updates\n- Tracks chart freshness across the org\n- Runs monthly on the 1st",
    "workflowSteps": [
      "Reminds employees to refresh their charts",
      "Encourages regular self-assessment updates",
      "Tracks chart freshness across the org"
    ],
    "sampleOutput": "Executive Summary: Revisit Reminder\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/accountability-revisit-reminder-mbf8qc",
    "vertical": "agency"
  },
  {
    "id": "pod-weekly-ai-summary-g4xeeh",
    "name": "Pod Weekly Summary",
    "team": "Project Management",
    "teamSlug": "project-management",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Generates structured team performance briefings analyzing productivity, tasks, OKRs, and utilization with 4-week trends.",
    "integrations": [
      "Control Tower",
      "Slack",
      "Email",
      "Webhooks"
    ],
    "workflowInput": "Generates structured team performance briefings analyzing productivity, tasks, OKRs, and utilization with 4-week trends.\n\nCapabilities:\n- Scores team members on 1-10 rubric\n- Analyzes 4-week productivity trends\n- Tracks billable utilization vs 37.5h threshold\n- Auto-emails managers with detailed reports",
    "workflowSteps": [
      "Scores team members on 1-10 rubric",
      "Analyzes 4-week productivity trends",
      "Tracks billable utilization vs 37.5h threshold"
    ],
    "sampleOutput": "Executive Summary: Pod Weekly Summary\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/pod-weekly-ai-summary-g4xeeh",
    "vertical": "agency"
  },
  {
    "id": "ai-productivity-insight-06sy7f",
    "name": "AI Productivity Insight",
    "team": "Operations & Tech",
    "teamSlug": "agency",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Generates productivity insights with AI scoring, verdicts, and actionable recommendations per employee.",
    "integrations": [
      "Control Tower",
      "Slack",
      "Email",
      "Webhooks"
    ],
    "workflowInput": "Generates productivity insights with AI scoring, verdicts, and actionable recommendations per employee.\n\nCapabilities:\n- Provides AI-scored productivity assessments\n- Generates actionable improvement recommendations\n- Delivers verdict summaries per employee\n- Stores insights for historical comparison",
    "workflowSteps": [
      "Provides AI-scored productivity assessments",
      "Generates actionable improvement recommendations",
      "Delivers verdict summaries per employee"
    ],
    "sampleOutput": "Executive Summary: AI Productivity Insight\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/ai-productivity-insight-06sy7f",
    "vertical": "agency"
  },
  {
    "id": "weekly-productivity-digest-17w727",
    "name": "Weekly Digest",
    "team": "Operations & Tech",
    "teamSlug": "agency",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Compiles and emails weekly productivity digest summaries to managers.",
    "integrations": [
      "Control Tower",
      "Slack",
      "Email",
      "Webhooks"
    ],
    "workflowInput": "Compiles and emails weekly productivity digest summaries to managers.\n\nCapabilities:\n- Compiles weekly productivity data\n- Generates digest email for managers\n- Highlights top performers and concerns\n- Runs automatically via scheduled cron",
    "workflowSteps": [
      "Compiles weekly productivity data",
      "Generates digest email for managers",
      "Highlights top performers and concerns"
    ],
    "sampleOutput": "Executive Summary: Weekly Digest\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/weekly-productivity-digest-17w727",
    "vertical": "agency"
  },
  {
    "id": "unified-knowledge-search-tprjc9",
    "name": "Unified Knowledge Search",
    "team": "Operations & Tech",
    "teamSlug": "agency",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Cross-source semantic search across all knowledge bases — personal files, shared knowledge, client docs, and transcripts.",
    "integrations": [
      "Control Tower",
      "Slack",
      "Email",
      "Webhooks"
    ],
    "workflowInput": "Cross-source semantic search across all knowledge bases — personal files, shared knowledge, client docs, and transcripts.\n\nCapabilities:\n- Searches across all knowledge sources\n- Uses semantic similarity for relevance\n- Reranks results with Gemini AI\n- Supports personal, shared, and client docs",
    "workflowSteps": [
      "Searches across all knowledge sources",
      "Uses semantic similarity for relevance",
      "Reranks results with Gemini AI"
    ],
    "sampleOutput": "Executive Summary: Unified Knowledge Search\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/unified-knowledge-search-tprjc9",
    "vertical": "agency"
  },
  {
    "id": "unified-rag-search-y7n1w0",
    "name": "Unified RAG Search",
    "team": "Operations & Tech",
    "teamSlug": "agency",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Retrieval-Augmented Generation — combines semantic search with LLM-powered answer synthesis.",
    "integrations": [
      "Control Tower",
      "Slack",
      "Email",
      "Webhooks"
    ],
    "workflowInput": "Retrieval-Augmented Generation — combines semantic search with LLM-powered answer synthesis.\n\nCapabilities:\n- Synthesizes answers from knowledge sources\n- Combines search results with AI reasoning\n- Provides cited, contextual answers\n- Searches across all embedding sources",
    "workflowSteps": [
      "Synthesizes answers from knowledge sources",
      "Combines search results with AI reasoning",
      "Provides cited, contextual answers"
    ],
    "sampleOutput": "Executive Summary: Unified RAG Search\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/unified-rag-search-y7n1w0",
    "vertical": "agency"
  },
  {
    "id": "gemini-rag-query-8ejys2",
    "name": "Gemini RAG Query",
    "team": "Operations & Tech",
    "teamSlug": "agency",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Direct Gemini corpus search using Google's grounding capabilities for RAG queries.",
    "integrations": [
      "Control Tower",
      "Slack",
      "Email",
      "Webhooks"
    ],
    "workflowInput": "Direct Gemini corpus search using Google's grounding capabilities for RAG queries.\n\nCapabilities:\n- Uses Gemini grounding for accurate results\n- Queries against indexed Gemini corpus\n- Provides grounded, factual responses\n- Supports complex multi-part questions",
    "workflowSteps": [
      "Uses Gemini grounding for accurate results",
      "Queries against indexed Gemini corpus",
      "Provides grounded, factual responses"
    ],
    "sampleOutput": "Executive Summary: Gemini RAG Query\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/gemini-rag-query-8ejys2",
    "vertical": "agency"
  },
  {
    "id": "hr-request-processing-0fdgjv",
    "name": "HR Request Processing",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Automates HR request intake, categorization, and routing — leave requests, policy inquiries, and approvals.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Automates HR request intake, categorization, and routing — leave requests, policy inquiries, and approvals.\n\nCapabilities:\n- Categorizes HR requests automatically\n- Routes to appropriate approvers\n- Handles leave requests and policy questions\n- Speeds up HR response times",
    "workflowSteps": [
      "Categorizes HR requests automatically",
      "Routes to appropriate approvers",
      "Handles leave requests and policy questions"
    ],
    "sampleOutput": "Executive Summary: HR Request Processing\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/hr-request-processing-0fdgjv",
    "vertical": "agency"
  },
  {
    "id": "eos-monthly-issue-summary-fj0zh0",
    "name": "Monthly Issue Summary",
    "team": "EOS & Leadership",
    "teamSlug": "eos",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Sends a monthly summary email to managers with issue counts (Total, New, In IDS, Solved) and open issues per owner.",
    "integrations": [
      "Control Tower EOS",
      "Slack",
      "Google Sheets"
    ],
    "workflowInput": "Sends a monthly summary email to managers with issue counts (Total, New, In IDS, Solved) and open issues per owner.\n\nCapabilities:\n- Compiles total, new, in IDS, and solved issue counts\n- Generates owner breakdown table for open issues\n- Sends a single summary email to managers@CollabAI.com\n- Runs on the 1st of every month at 1 AM EST",
    "workflowSteps": [
      "Compiles total, new, in IDS, and solved issue counts",
      "Generates owner breakdown table for open issues",
      "Sends a single summary email to managers@CollabAI.com"
    ],
    "sampleOutput": "Executive Summary: Monthly Issue Summary\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eos-monthly-issue-summary-fj0zh0",
    "vertical": "agency"
  },
  {
    "id": "contact-research-injxag",
    "name": "Contact Research",
    "team": "Sales & CRM",
    "teamSlug": "sales-crm",
    "category": "operations",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Contact intelligence gathering — LinkedIn profiles, professional history, and social presence.",
    "integrations": [
      "HubSpot",
      "Salesforce",
      "Zoom",
      "Slack"
    ],
    "workflowInput": "Contact intelligence gathering — LinkedIn profiles, professional history, and social presence.\n\nCapabilities:\n- Finds LinkedIn and professional profiles\n- Gathers professional history and background\n- Identifies social media presence\n- Provides talking points for outreach",
    "workflowSteps": [
      "Finds LinkedIn and professional profiles",
      "Gathers professional history and background",
      "Identifies social media presence"
    ],
    "sampleOutput": "Executive Summary: Contact Research\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/contact-research-injxag",
    "vertical": "agency"
  },
  {
    "id": "bug-feature-planner-yd2be0",
    "name": "Bug/Feature Planner",
    "team": "Project Management",
    "teamSlug": "project-management",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Analyzes bug reports and feature requests to generate implementation plans, estimates, and priority recommendations.",
    "integrations": [
      "Jira",
      "Monday.com",
      "ActiveCollab",
      "Linear"
    ],
    "workflowInput": "Analyzes bug reports and feature requests to generate implementation plans, estimates, and priority recommendations.\n\nCapabilities:\n- Generates implementation plans from bug reports\n- Estimates effort for feature requests\n- Recommends priority based on impact analysis\n- Creates task breakdowns for development",
    "workflowSteps": [
      "Generates implementation plans from bug reports",
      "Estimates effort for feature requests",
      "Recommends priority based on impact analysis"
    ],
    "sampleOutput": "Executive Summary: Bug/Feature Planner\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/bug-feature-planner-yd2be0",
    "vertical": "agency"
  },
  {
    "id": "code-review-generator-bj4pd4",
    "name": "Code Review Generator",
    "team": "Project Management",
    "teamSlug": "project-management",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Generates automated code review feedback based on project standards and best practices.",
    "integrations": [
      "Jira",
      "Monday.com",
      "ActiveCollab",
      "Linear"
    ],
    "workflowInput": "Generates automated code review feedback based on project standards and best practices.\n\nCapabilities:\n- Reviews code against project standards\n- Identifies potential bugs and issues\n- Suggests best practice improvements\n- Generates structured review comments",
    "workflowSteps": [
      "Reviews code against project standards",
      "Identifies potential bugs and issues",
      "Suggests best practice improvements"
    ],
    "sampleOutput": "Executive Summary: Code Review Generator\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/code-review-generator-bj4pd4",
    "vertical": "agency"
  },
  {
    "id": "financial-report-agent-sjfc-nonprofit",
    "name": "Financial Report Agent",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Generates comprehensive reports with insights, forecasts, KPI analysis, and strategic recommendations for management decision-making.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Generates comprehensive reports with insights, forecasts, KPI analysis, and strategic recommendations for management decision-making.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Financial Report Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/financial-report-agent-sjfc-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "financial-risk-assessment-sjfc-real_estate",
    "name": "Financial Risk Assessment Agent",
    "team": "Real Estate",
    "teamSlug": "real-estate",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Analyzes client meeting data and financial records to detect early warning signs of payment, revenue, and relationship risks.",
    "integrations": [
      "MLS",
      "Follow Up Boss",
      "Zillow",
      "DocuSign"
    ],
    "workflowInput": "Analyzes client meeting data and financial records to detect early warning signs of payment, revenue, and relationship risks.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Financial Risk Assessment Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/financial-risk-assessment-sjfc-real_estate",
    "vertical": "real_estate"
  },
  {
    "id": "financial-risk-assessment-sjfc-mortgage",
    "name": "Financial Risk Assessment Agent",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Analyzes client meeting data and financial records to detect early warning signs of payment, revenue, and relationship risks.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Analyzes client meeting data and financial records to detect early warning signs of payment, revenue, and relationship risks.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Financial Risk Assessment Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/financial-risk-assessment-sjfc-mortgage",
    "vertical": "mortgage"
  },
  {
    "id": "employee-feedback-analyzer-sjhr-mortgage",
    "name": "Employee Feedback Analyzer",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Reads employee feedback objectively and gives HR an unbiased summary across performance cycles.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Reads employee feedback objectively and gives HR an unbiased summary across performance cycles.",
    "workflowSteps": [
      "Removes manager bias from feedback review",
      "Identifies recurring themes across reviewers",
      "Speeds up performance calibration"
    ],
    "sampleOutput": "Before a calibration meeting, HR opens a 1-page summary: 'Reviewers consistently highlight ownership; growth area is delegation.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/employee-feedback-analyzer-sjhr-mortgage",
    "vertical": "mortgage"
  },
  {
    "id": "employee-feedback-analyzer-sjhr-healthcare",
    "name": "Employee Feedback Analyzer",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Reads employee feedback objectively and gives HR an unbiased summary across performance cycles.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Reads employee feedback objectively and gives HR an unbiased summary across performance cycles.",
    "workflowSteps": [
      "Removes manager bias from feedback review",
      "Identifies recurring themes across reviewers",
      "Speeds up performance calibration"
    ],
    "sampleOutput": "Before a calibration meeting, HR opens a 1-page summary: 'Reviewers consistently highlight ownership; growth area is delegation.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/employee-feedback-analyzer-sjhr-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "wfh-event-parser-sjhr-nonprofit",
    "name": "WFH Event Parser",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Parses Work-From-Home calendar events and extracts structured data — employee, location, duration, reason.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Parses Work-From-Home calendar events and extracts structured data — employee, location, duration, reason.",
    "workflowSteps": [
      "Replaces manual WFH tracking",
      "Feeds clean data into HR analytics",
      "Keeps the WFH log accurate without admin work"
    ],
    "sampleOutput": "Every WFH calendar event automatically becomes a structured record in the HR system — searchable, reportable, audit-ready.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/wfh-event-parser-sjhr-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "task-assistant-sjhr-mortgage",
    "name": "Task Assistant",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "An AI-powered task companion that summarizes work, sharpens descriptions, suggests next steps, and drafts updates.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "An AI-powered task companion that summarizes work, sharpens descriptions, suggests next steps, and drafts updates.",
    "workflowSteps": [
      "Cuts task admin time for everyone",
      "Improves task clarity across teams",
      "Helps managers stay on top of progress"
    ],
    "sampleOutput": "A manager opens a long task thread and gets a 3-line summary plus a draft status update ready to send.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/task-assistant-sjhr-mortgage",
    "vertical": "mortgage"
  },
  {
    "id": "feedback-task-creator-sjhr-healthcare",
    "name": "Feedback Task Creator",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Scans employee feedback for issues that need manager attention and generates actionable follow-up tasks.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Scans employee feedback for issues that need manager attention and generates actionable follow-up tasks.",
    "workflowSteps": [
      "Ensures feedback never gets lost in a doc",
      "Routes concerns to the right manager automatically",
      "Makes employees feel heard"
    ],
    "sampleOutput": "An employee mentions burnout in their 1:1 form — a task lands in their manager's queue: 'Discuss workload in next 1:1.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/feedback-task-creator-sjhr-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "hr-insights-sjhr-nonprofit",
    "name": "HR Insights Agent",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "AI-powered analysis across the whole HR dataset, surfacing the trends and risks that matter this week.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "AI-powered analysis across the whole HR dataset, surfacing the trends and risks that matter this week.",
    "workflowSteps": [
      "Replaces hours of pivot-table work",
      "Highlights what changed since last week",
      "Answers ad-hoc HR questions on demand"
    ],
    "sampleOutput": "HR asks: 'Which teams have the highest leave usage this quarter?' and gets a chart, table, and one-paragraph summary.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/hr-insights-sjhr-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "exit-trends-6month-sjhr-healthcare",
    "name": "Exit Trends 6-Month Analyzer",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Looks across six months of exit feedback to identify trends, patterns, and strategic risks for leadership.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Looks across six months of exit feedback to identify trends, patterns, and strategic risks for leadership.",
    "workflowSteps": [
      "Shifts exit insight from reactive to strategic",
      "Connects departures to org changes",
      "Gives the board defensible data"
    ],
    "sampleOutput": "A quarterly leadership review opens with: 'Attrition in the design team doubled after the reorg; cited reasons: unclear ownership.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/exit-trends-6month-sjhr-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "onboarding-quality-sjhr-healthcare",
    "name": "Onboarding Quality Auditor",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Audits completed onboarding journeys to ensure process compliance and find what needs to be fixed.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Audits completed onboarding journeys to ensure process compliance and find what needs to be fixed.",
    "workflowSteps": [
      "Guarantees onboarding consistency across teams",
      "Catches missed steps before they hurt the new hire",
      "Documents compliance for audit"
    ],
    "sampleOutput": "A finished onboarding journey is scored — 92% complete, missing 'Manager 30-day check-in.' A follow-up is auto-created.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/onboarding-quality-sjhr-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "hr-weekly-team-digest-sjhr-mortgage",
    "name": "HR Weekly Team Digest",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Compiles a comprehensive weekly summary of team health metrics across every department for leadership.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Compiles a comprehensive weekly summary of team health metrics across every department for leadership.",
    "workflowSteps": [
      "Gives leadership one place to read the company's pulse",
      "Saves HR a half-day of weekly reporting",
      "Standardizes the conversation across teams"
    ],
    "sampleOutput": "Every Monday morning, leadership opens a single digest: attendance, engagement, leave, attrition risk — by department.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/hr-weekly-team-digest-sjhr-mortgage",
    "vertical": "mortgage"
  },
  {
    "id": "compliance-auditor-sjhr-insurance",
    "name": "Compliance Auditor",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Continuously checks leave and attendance against company policy so violations don't slip through.",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Continuously checks leave and attendance against company policy so violations don't slip through.",
    "workflowSteps": [
      "Flags policy breaches the moment they happen",
      "Replaces month-end manual audits",
      "Creates a clean, defensible audit trail"
    ],
    "sampleOutput": "HR receives an alert that an employee has exceeded their casual leave quota — with the exact policy clause and recommended action attached.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/compliance-auditor-sjhr-insurance",
    "vertical": "insurance"
  },
  {
    "id": "employee-weekly-snapshot-sjhr-nonprofit",
    "name": "Employee Weekly Snapshot",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Generates a short, HR-grade weekly snapshot for every active employee and stores it as immutable history.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Generates a short, HR-grade weekly snapshot for every active employee and stores it as immutable history.",
    "workflowSteps": [
      "Lets HR scroll an employee's week-by-week story in seconds",
      "Spots momentum shifts early",
      "Builds a defensible record for reviews"
    ],
    "sampleOutput": "An HR partner opens a profile and scrolls back 12 weeks — each week shows attendance, tasks, leave, and a one-line AI takeaway.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/employee-weekly-snapshot-sjhr-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "team-insights-sjhr-insurance",
    "name": "Team Insights Agent",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Gives each manager personalized analytics and forecasts about their team — attendance, productivity, and risks.",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Gives each manager personalized analytics and forecasts about their team — attendance, productivity, and risks.",
    "workflowSteps": [
      "Manager-level analytics without a BI tool",
      "Forecasts team risks before they become incidents",
      "Personalized to each manager's actual team"
    ],
    "sampleOutput": "A manager opens their dashboard: 'Your team's on-time rate dropped 8% this week. 1 member at burnout risk based on workload + leave.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/team-insights-sjhr-insurance",
    "vertical": "insurance"
  },
  {
    "id": "hr-weekly-trends-sjhr-nonprofit",
    "name": "HR Weekly Trends Analyzer",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Reads week-over-week trends and gives HR strategic insights to act on, not just numbers to look at.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Reads week-over-week trends and gives HR strategic insights to act on, not just numbers to look at.",
    "workflowSteps": [
      "Spots inflection points before they become problems",
      "Connects metrics across modules",
      "Recommends the next HR action"
    ],
    "sampleOutput": "The agent surfaces: 'Late arrivals jumped 18% this week — concentrated in the Mumbai office on Monday/Friday.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/hr-weekly-trends-sjhr-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "pom-analyzer-sjhr-mortgage",
    "name": "POM Evaluation Analyzer",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Analyzes Performer of the Month evaluation data to recommend winners and surface judging gaps.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Analyzes Performer of the Month evaluation data to recommend winners and surface judging gaps.",
    "workflowSteps": [
      "Makes POM decisions defensible with data",
      "Removes recency bias from awards",
      "Recognizes the right person every month"
    ],
    "sampleOutput": "HR opens the page and sees ranked candidates with reasoning, plus a flag: '3 strong candidates received zero nominations from Sales.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/pom-analyzer-sjhr-mortgage",
    "vertical": "mortgage"
  },
  {
    "id": "onboarding-sentiment-sjhr-healthcare",
    "name": "New Hire Sentiment Analyzer",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Reads new-hire feedback to identify what's working in onboarding and where joiners get stuck.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Reads new-hire feedback to identify what's working in onboarding and where joiners get stuck.",
    "workflowSteps": [
      "Improves onboarding faster than annual surveys",
      "Identifies what makes joiners succeed",
      "Reduces early-stage attrition"
    ],
    "sampleOutput": "A new joiner survey flags confusion about the dev environment — onboarding owners get a task: 'Update setup runbook.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/onboarding-sentiment-sjhr-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "onboarding-velocity-sjhr-nonprofit",
    "name": "Onboarding Velocity AI",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Tracks every onboarding journey to surface at-risk hires, bottlenecks, and process gaps in real time.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Tracks every onboarding journey to surface at-risk hires, bottlenecks, and process gaps in real time.",
    "workflowSteps": [
      "Spots stalling new hires before week 2",
      "Surfaces which onboarding step blocks people",
      "Shortens time-to-productivity"
    ],
    "sampleOutput": "A new engineer hasn't completed access setup by day 4 — their manager gets a nudge with the exact step to unblock them.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/onboarding-velocity-sjhr-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "task-assistant-sjhr-nonprofit",
    "name": "Task Assistant",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "An AI-powered task companion that summarizes work, sharpens descriptions, suggests next steps, and drafts updates.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "An AI-powered task companion that summarizes work, sharpens descriptions, suggests next steps, and drafts updates.",
    "workflowSteps": [
      "Cuts task admin time for everyone",
      "Improves task clarity across teams",
      "Helps managers stay on top of progress"
    ],
    "sampleOutput": "A manager opens a long task thread and gets a 3-line summary plus a draft status update ready to send.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/task-assistant-sjhr-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "compliance-auditor-sjhr-healthcare",
    "name": "Compliance Auditor",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Continuously checks leave and attendance against company policy so violations don't slip through.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Continuously checks leave and attendance against company policy so violations don't slip through.",
    "workflowSteps": [
      "Flags policy breaches the moment they happen",
      "Replaces month-end manual audits",
      "Creates a clean, defensible audit trail"
    ],
    "sampleOutput": "HR receives an alert that an employee has exceeded their casual leave quota — with the exact policy clause and recommended action attached.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/compliance-auditor-sjhr-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "hr-insights-sjhr-mortgage",
    "name": "HR Insights Agent",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "AI-powered analysis across the whole HR dataset, surfacing the trends and risks that matter this week.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "AI-powered analysis across the whole HR dataset, surfacing the trends and risks that matter this week.",
    "workflowSteps": [
      "Replaces hours of pivot-table work",
      "Highlights what changed since last week",
      "Answers ad-hoc HR questions on demand"
    ],
    "sampleOutput": "HR asks: 'Which teams have the highest leave usage this quarter?' and gets a chart, table, and one-paragraph summary.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/hr-insights-sjhr-mortgage",
    "vertical": "mortgage"
  },
  {
    "id": "hr-weekly-team-digest-sjhr-nonprofit",
    "name": "HR Weekly Team Digest",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Compiles a comprehensive weekly summary of team health metrics across every department for leadership.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Compiles a comprehensive weekly summary of team health metrics across every department for leadership.",
    "workflowSteps": [
      "Gives leadership one place to read the company's pulse",
      "Saves HR a half-day of weekly reporting",
      "Standardizes the conversation across teams"
    ],
    "sampleOutput": "Every Monday morning, leadership opens a single digest: attendance, engagement, leave, attrition risk — by department.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/hr-weekly-team-digest-sjhr-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "one-on-one-insights-sjhr-healthcare",
    "name": "One-on-One Insights Assistant",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Gives each manager personalized insights about their 1:1 cadence, themes, and recurring blockers.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Gives each manager personalized insights about their 1:1 cadence, themes, and recurring blockers.",
    "workflowSteps": [
      "Improves the quality of every 1:1",
      "Helps managers spot patterns across their team",
      "Makes 1:1s a strategic tool, not a calendar event"
    ],
    "sampleOutput": "A manager opens the page and sees: 'In the last 6 1:1s, two reports raised growth concerns — consider a career conversation.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/one-on-one-insights-sjhr-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "hr-weekly-trends-sjhr-mortgage",
    "name": "HR Weekly Trends Analyzer",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Reads week-over-week trends and gives HR strategic insights to act on, not just numbers to look at.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Reads week-over-week trends and gives HR strategic insights to act on, not just numbers to look at.",
    "workflowSteps": [
      "Spots inflection points before they become problems",
      "Connects metrics across modules",
      "Recommends the next HR action"
    ],
    "sampleOutput": "The agent surfaces: 'Late arrivals jumped 18% this week — concentrated in the Mumbai office on Monday/Friday.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/hr-weekly-trends-sjhr-mortgage",
    "vertical": "mortgage"
  },
  {
    "id": "team-insights-sjhr-real_estate",
    "name": "Team Insights Agent",
    "team": "Real Estate",
    "teamSlug": "real-estate",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Gives each manager personalized analytics and forecasts about their team — attendance, productivity, and risks.",
    "integrations": [
      "MLS",
      "Follow Up Boss",
      "Zillow",
      "DocuSign"
    ],
    "workflowInput": "Gives each manager personalized analytics and forecasts about their team — attendance, productivity, and risks.",
    "workflowSteps": [
      "Manager-level analytics without a BI tool",
      "Forecasts team risks before they become incidents",
      "Personalized to each manager's actual team"
    ],
    "sampleOutput": "A manager opens their dashboard: 'Your team's on-time rate dropped 8% this week. 1 member at burnout risk based on workload + leave.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/team-insights-sjhr-real_estate",
    "vertical": "real_estate"
  },
  {
    "id": "employee-weekly-snapshot-sjhr-mortgage",
    "name": "Employee Weekly Snapshot",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Generates a short, HR-grade weekly snapshot for every active employee and stores it as immutable history.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Generates a short, HR-grade weekly snapshot for every active employee and stores it as immutable history.",
    "workflowSteps": [
      "Lets HR scroll an employee's week-by-week story in seconds",
      "Spots momentum shifts early",
      "Builds a defensible record for reviews"
    ],
    "sampleOutput": "An HR partner opens a profile and scrolls back 12 weeks — each week shows attendance, tasks, leave, and a one-line AI takeaway.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/employee-weekly-snapshot-sjhr-mortgage",
    "vertical": "mortgage"
  },
  {
    "id": "pom-analyzer-sjhr-nonprofit",
    "name": "POM Evaluation Analyzer",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Analyzes Performer of the Month evaluation data to recommend winners and surface judging gaps.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Analyzes Performer of the Month evaluation data to recommend winners and surface judging gaps.",
    "workflowSteps": [
      "Makes POM decisions defensible with data",
      "Removes recency bias from awards",
      "Recognizes the right person every month"
    ],
    "sampleOutput": "HR opens the page and sees ranked candidates with reasoning, plus a flag: '3 strong candidates received zero nominations from Sales.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/pom-analyzer-sjhr-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "employee-weekly-snapshot-sjhr-healthcare",
    "name": "Employee Weekly Snapshot",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Generates a short, HR-grade weekly snapshot for every active employee and stores it as immutable history.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Generates a short, HR-grade weekly snapshot for every active employee and stores it as immutable history.",
    "workflowSteps": [
      "Lets HR scroll an employee's week-by-week story in seconds",
      "Spots momentum shifts early",
      "Builds a defensible record for reviews"
    ],
    "sampleOutput": "An HR partner opens a profile and scrolls back 12 weeks — each week shows attendance, tasks, leave, and a one-line AI takeaway.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/employee-weekly-snapshot-sjhr-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "eph-voice-scheduler-cau7hm",
    "name": "Voice Scheduler",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Handles inbound patient calls, verifies identity, and books appointments in real time using natural conversation.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Handles inbound patient calls, verifies identity, and books appointments in real time using natural conversation.",
    "workflowSteps": [
      "Answer inbound patient calls via Twilio",
      "Verify patient identity against records",
      "Check real-time provider availability"
    ],
    "sampleOutput": "Executive Summary: Voice Scheduler\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eph-voice-scheduler-cau7hm",
    "vertical": "healthcare"
  },
  {
    "id": "hr-weekly-trends-sjhr-healthcare",
    "name": "HR Weekly Trends Analyzer",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Reads week-over-week trends and gives HR strategic insights to act on, not just numbers to look at.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Reads week-over-week trends and gives HR strategic insights to act on, not just numbers to look at.",
    "workflowSteps": [
      "Spots inflection points before they become problems",
      "Connects metrics across modules",
      "Recommends the next HR action"
    ],
    "sampleOutput": "The agent surfaces: 'Late arrivals jumped 18% this week — concentrated in the Mumbai office on Monday/Friday.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/hr-weekly-trends-sjhr-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "hr-weekly-team-digest-sjhr-insurance",
    "name": "HR Weekly Team Digest",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Compiles a comprehensive weekly summary of team health metrics across every department for leadership.",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Compiles a comprehensive weekly summary of team health metrics across every department for leadership.",
    "workflowSteps": [
      "Gives leadership one place to read the company's pulse",
      "Saves HR a half-day of weekly reporting",
      "Standardizes the conversation across teams"
    ],
    "sampleOutput": "Every Monday morning, leadership opens a single digest: attendance, engagement, leave, attrition risk — by department.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/hr-weekly-team-digest-sjhr-insurance",
    "vertical": "insurance"
  },
  {
    "id": "wfh-event-parser-sjhr-healthcare",
    "name": "WFH Event Parser",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Parses Work-From-Home calendar events and extracts structured data — employee, location, duration, reason.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Parses Work-From-Home calendar events and extracts structured data — employee, location, duration, reason.",
    "workflowSteps": [
      "Replaces manual WFH tracking",
      "Feeds clean data into HR analytics",
      "Keeps the WFH log accurate without admin work"
    ],
    "sampleOutput": "Every WFH calendar event automatically becomes a structured record in the HR system — searchable, reportable, audit-ready.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/wfh-event-parser-sjhr-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "employee-feedback-analyzer-sjhr-nonprofit",
    "name": "Employee Feedback Analyzer",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Reads employee feedback objectively and gives HR an unbiased summary across performance cycles.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Reads employee feedback objectively and gives HR an unbiased summary across performance cycles.",
    "workflowSteps": [
      "Removes manager bias from feedback review",
      "Identifies recurring themes across reviewers",
      "Speeds up performance calibration"
    ],
    "sampleOutput": "Before a calibration meeting, HR opens a 1-page summary: 'Reviewers consistently highlight ownership; growth area is delegation.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/employee-feedback-analyzer-sjhr-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "pom-analyzer-sjhr-insurance",
    "name": "POM Evaluation Analyzer",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Analyzes Performer of the Month evaluation data to recommend winners and surface judging gaps.",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Analyzes Performer of the Month evaluation data to recommend winners and surface judging gaps.",
    "workflowSteps": [
      "Makes POM decisions defensible with data",
      "Removes recency bias from awards",
      "Recognizes the right person every month"
    ],
    "sampleOutput": "HR opens the page and sees ranked candidates with reasoning, plus a flag: '3 strong candidates received zero nominations from Sales.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/pom-analyzer-sjhr-insurance",
    "vertical": "insurance"
  },
  {
    "id": "pom-analyzer-sjhr-healthcare",
    "name": "POM Evaluation Analyzer",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Analyzes Performer of the Month evaluation data to recommend winners and surface judging gaps.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Analyzes Performer of the Month evaluation data to recommend winners and surface judging gaps.",
    "workflowSteps": [
      "Makes POM decisions defensible with data",
      "Removes recency bias from awards",
      "Recognizes the right person every month"
    ],
    "sampleOutput": "HR opens the page and sees ranked candidates with reasoning, plus a flag: '3 strong candidates received zero nominations from Sales.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/pom-analyzer-sjhr-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "wfh-event-parser-sjhr-insurance",
    "name": "WFH Event Parser",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Parses Work-From-Home calendar events and extracts structured data — employee, location, duration, reason.",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Parses Work-From-Home calendar events and extracts structured data — employee, location, duration, reason.",
    "workflowSteps": [
      "Replaces manual WFH tracking",
      "Feeds clean data into HR analytics",
      "Keeps the WFH log accurate without admin work"
    ],
    "sampleOutput": "Every WFH calendar event automatically becomes a structured record in the HR system — searchable, reportable, audit-ready.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/wfh-event-parser-sjhr-insurance",
    "vertical": "insurance"
  },
  {
    "id": "hr-weekly-team-digest-sjhr-healthcare",
    "name": "HR Weekly Team Digest",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Compiles a comprehensive weekly summary of team health metrics across every department for leadership.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Compiles a comprehensive weekly summary of team health metrics across every department for leadership.",
    "workflowSteps": [
      "Gives leadership one place to read the company's pulse",
      "Saves HR a half-day of weekly reporting",
      "Standardizes the conversation across teams"
    ],
    "sampleOutput": "Every Monday morning, leadership opens a single digest: attendance, engagement, leave, attrition risk — by department.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/hr-weekly-team-digest-sjhr-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "one-on-one-insights-sjhr-nonprofit",
    "name": "One-on-One Insights Assistant",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Gives each manager personalized insights about their 1:1 cadence, themes, and recurring blockers.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Gives each manager personalized insights about their 1:1 cadence, themes, and recurring blockers.",
    "workflowSteps": [
      "Improves the quality of every 1:1",
      "Helps managers spot patterns across their team",
      "Makes 1:1s a strategic tool, not a calendar event"
    ],
    "sampleOutput": "A manager opens the page and sees: 'In the last 6 1:1s, two reports raised growth concerns — consider a career conversation.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/one-on-one-insights-sjhr-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "employee-weekly-snapshot-sjhr-insurance",
    "name": "Employee Weekly Snapshot",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Generates a short, HR-grade weekly snapshot for every active employee and stores it as immutable history.",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Generates a short, HR-grade weekly snapshot for every active employee and stores it as immutable history.",
    "workflowSteps": [
      "Lets HR scroll an employee's week-by-week story in seconds",
      "Spots momentum shifts early",
      "Builds a defensible record for reviews"
    ],
    "sampleOutput": "An HR partner opens a profile and scrolls back 12 weeks — each week shows attendance, tasks, leave, and a one-line AI takeaway.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/employee-weekly-snapshot-sjhr-insurance",
    "vertical": "insurance"
  },
  {
    "id": "compliance-auditor-sjhr-nonprofit",
    "name": "Compliance Auditor",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Continuously checks leave and attendance against company policy so violations don't slip through.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Continuously checks leave and attendance against company policy so violations don't slip through.",
    "workflowSteps": [
      "Flags policy breaches the moment they happen",
      "Replaces month-end manual audits",
      "Creates a clean, defensible audit trail"
    ],
    "sampleOutput": "HR receives an alert that an employee has exceeded their casual leave quota — with the exact policy clause and recommended action attached.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/compliance-auditor-sjhr-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "hr-weekly-trends-sjhr-insurance",
    "name": "HR Weekly Trends Analyzer",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Reads week-over-week trends and gives HR strategic insights to act on, not just numbers to look at.",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Reads week-over-week trends and gives HR strategic insights to act on, not just numbers to look at.",
    "workflowSteps": [
      "Spots inflection points before they become problems",
      "Connects metrics across modules",
      "Recommends the next HR action"
    ],
    "sampleOutput": "The agent surfaces: 'Late arrivals jumped 18% this week — concentrated in the Mumbai office on Monday/Friday.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/hr-weekly-trends-sjhr-insurance",
    "vertical": "insurance"
  },
  {
    "id": "team-insights-sjhr-nonprofit",
    "name": "Team Insights Agent",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Gives each manager personalized analytics and forecasts about their team — attendance, productivity, and risks.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Gives each manager personalized analytics and forecasts about their team — attendance, productivity, and risks.",
    "workflowSteps": [
      "Manager-level analytics without a BI tool",
      "Forecasts team risks before they become incidents",
      "Personalized to each manager's actual team"
    ],
    "sampleOutput": "A manager opens their dashboard: 'Your team's on-time rate dropped 8% this week. 1 member at burnout risk based on workload + leave.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/team-insights-sjhr-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "task-assistant-sjhr-healthcare",
    "name": "Task Assistant",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "An AI-powered task companion that summarizes work, sharpens descriptions, suggests next steps, and drafts updates.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "An AI-powered task companion that summarizes work, sharpens descriptions, suggests next steps, and drafts updates.",
    "workflowSteps": [
      "Cuts task admin time for everyone",
      "Improves task clarity across teams",
      "Helps managers stay on top of progress"
    ],
    "sampleOutput": "A manager opens a long task thread and gets a 3-line summary plus a draft status update ready to send.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/task-assistant-sjhr-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "feedback-task-creator-sjhr-mortgage",
    "name": "Feedback Task Creator",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Scans employee feedback for issues that need manager attention and generates actionable follow-up tasks.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Scans employee feedback for issues that need manager attention and generates actionable follow-up tasks.",
    "workflowSteps": [
      "Ensures feedback never gets lost in a doc",
      "Routes concerns to the right manager automatically",
      "Makes employees feel heard"
    ],
    "sampleOutput": "An employee mentions burnout in their 1:1 form — a task lands in their manager's queue: 'Discuss workload in next 1:1.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/feedback-task-creator-sjhr-mortgage",
    "vertical": "mortgage"
  },
  {
    "id": "deal-ai-chat-lu8vsf",
    "name": "Deal AI Chat",
    "team": "Sales & CRM",
    "teamSlug": "sales-crm",
    "category": "operations",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Conversational AI assistant for deal analysis, answering questions about deal context, history, and strategy.",
    "integrations": [
      "HubSpot",
      "Salesforce",
      "Zoom",
      "Slack"
    ],
    "workflowInput": "Conversational AI assistant for deal analysis, answering questions about deal context, history, and strategy.\n\nCapabilities:\n- Answers questions about deal context and history\n- Provides strategic analysis on demand\n- Summarizes deal activity and communications\n- Suggests approaches for deal progression",
    "workflowSteps": [
      "Answers questions about deal context and history",
      "Provides strategic analysis on demand",
      "Summarizes deal activity and communications"
    ],
    "sampleOutput": "Executive Summary: Deal AI Chat\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/deal-ai-chat-lu8vsf",
    "vertical": "agency"
  },
  {
    "id": "deal-daily-briefing-v79swp",
    "name": "Daily Briefing",
    "team": "Sales & CRM",
    "teamSlug": "sales-crm",
    "category": "operations",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Generates daily deal summaries with key updates, stage changes, and action items for sales teams.",
    "integrations": [
      "HubSpot",
      "Salesforce",
      "Zoom",
      "Slack"
    ],
    "workflowInput": "Generates daily deal summaries with key updates, stage changes, and action items for sales teams.\n\nCapabilities:\n- Compiles overnight deal changes and updates\n- Highlights deals requiring immediate attention\n- Summarizes stage transitions across the pipeline\n- Generates prioritized action items for the day",
    "workflowSteps": [
      "Compiles overnight deal changes and updates",
      "Highlights deals requiring immediate attention",
      "Summarizes stage transitions across the pipeline"
    ],
    "sampleOutput": "Executive Summary: Daily Briefing\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/deal-daily-briefing-v79swp",
    "vertical": "agency"
  },
  {
    "id": "pm-comment-staleness-alert-79rjnh",
    "name": "PM Comment Staleness",
    "team": "Project Management",
    "teamSlug": "project-management",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Flags stale project management communication — identifies tasks and projects with no recent comments.",
    "integrations": [
      "Jira",
      "Monday.com",
      "ActiveCollab",
      "Linear"
    ],
    "workflowInput": "Flags stale project management communication — identifies tasks and projects with no recent comments.\n\nCapabilities:\n- Detects stale communication in projects\n- Identifies tasks with no recent activity\n- Sends alerts for communication gaps\n- Runs automatically every Monday",
    "workflowSteps": [
      "Detects stale communication in projects",
      "Identifies tasks with no recent activity",
      "Sends alerts for communication gaps"
    ],
    "sampleOutput": "Executive Summary: PM Comment Staleness\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/pm-comment-staleness-alert-79rjnh",
    "vertical": "agency"
  },
  {
    "id": "task-ai-chat-dh6r9r",
    "name": "Task AI Chat",
    "team": "Project Management",
    "teamSlug": "project-management",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Conversational AI assistant within task detail pages — answers questions, suggests approaches, and provides context.",
    "integrations": [
      "Jira",
      "Monday.com",
      "ActiveCollab",
      "Linear"
    ],
    "workflowInput": "Conversational AI assistant within task detail pages — answers questions, suggests approaches, and provides context.\n\nCapabilities:\n- Answers questions about task context\n- Suggests implementation approaches\n- Provides relevant documentation links\n- Helps brainstorm solutions",
    "workflowSteps": [
      "Answers questions about task context",
      "Suggests implementation approaches",
      "Provides relevant documentation links"
    ],
    "sampleOutput": "Executive Summary: Task AI Chat\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/task-ai-chat-dh6r9r",
    "vertical": "agency"
  },
  {
    "id": "eos-triage-assistant-8lokbt",
    "name": "EOS Triage",
    "team": "EOS & Leadership",
    "teamSlug": "eos",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Assists with issue triage — suggests priority, severity, department assignment, and categorization.",
    "integrations": [
      "Control Tower EOS",
      "Slack",
      "Google Sheets"
    ],
    "workflowInput": "Assists with issue triage — suggests priority, severity, department assignment, and categorization.\n\nCapabilities:\n- Suggests priority and severity for issues\n- Recommends department assignment\n- Categorizes issues by type and impact\n- Provides triage reasoning for review",
    "workflowSteps": [
      "Suggests priority and severity for issues",
      "Recommends department assignment",
      "Categorizes issues by type and impact"
    ],
    "sampleOutput": "Executive Summary: EOS Triage\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eos-triage-assistant-8lokbt",
    "vertical": "agency"
  },
  {
    "id": "eos-pattern-detective-5gmcu3",
    "name": "Pattern Detective",
    "team": "EOS & Leadership",
    "teamSlug": "eos",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Detects patterns and trends across EOS issues — recurring themes, systemic problems, and cross-department impacts.",
    "integrations": [
      "Control Tower EOS",
      "Slack",
      "Google Sheets"
    ],
    "workflowInput": "Detects patterns and trends across EOS issues — recurring themes, systemic problems, and cross-department impacts.\n\nCapabilities:\n- Identifies recurring issue patterns\n- Detects systemic organizational problems\n- Finds cross-department impact correlations\n- Tracks issue trends over time",
    "workflowSteps": [
      "Identifies recurring issue patterns",
      "Detects systemic organizational problems",
      "Finds cross-department impact correlations"
    ],
    "sampleOutput": "Executive Summary: Pattern Detective\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eos-pattern-detective-5gmcu3",
    "vertical": "agency"
  },
  {
    "id": "accountability-overlap-analyzer-0us8ex",
    "name": "Overlap Analyzer",
    "team": "EOS & Leadership",
    "teamSlug": "eos",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Detects overlapping responsibilities and gaps in accountability charts across the organization.",
    "integrations": [
      "Control Tower EOS",
      "Slack",
      "Google Sheets"
    ],
    "workflowInput": "Detects overlapping responsibilities and gaps in accountability charts across the organization.\n\nCapabilities:\n- Finds duplicate responsibilities across roles\n- Identifies accountability gaps\n- Highlights potential role conflicts\n- Runs monthly for proactive detection",
    "workflowSteps": [
      "Finds duplicate responsibilities across roles",
      "Identifies accountability gaps",
      "Highlights potential role conflicts"
    ],
    "sampleOutput": "Executive Summary: Overlap Analyzer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/accountability-overlap-analyzer-0us8ex",
    "vertical": "agency"
  },
  {
    "id": "pom-analyzer-sjhr",
    "name": "POM Evaluation Analyzer",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Analyzes Performer of the Month evaluation data to recommend winners and surface judging gaps.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Analyzes Performer of the Month evaluation data to recommend winners and surface judging gaps.",
    "workflowSteps": [
      "Makes POM decisions defensible with data",
      "Removes recency bias from awards",
      "Recognizes the right person every month"
    ],
    "sampleOutput": "HR opens the page and sees ranked candidates with reasoning, plus a flag: '3 strong candidates received zero nominations from Sales.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/pom-analyzer-sjhr",
    "vertical": "agency"
  },
  {
    "id": "culture-missed-attendance-sjhr",
    "name": "Culture Session Missed Attendance Follow-Up",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Automatically reaches out to employees who missed a culture session and helps them rebook.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Automatically reaches out to employees who missed a culture session and helps them rebook.",
    "workflowSteps": [
      "Improves overall participation rates",
      "Saves admins from sending one-by-one reminders",
      "Gives employees a frictionless re-entry"
    ],
    "sampleOutput": "An employee who missed Tuesday's Reading Circle gets an automated note inviting them to the next slot — no admin touch needed.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/culture-missed-attendance-sjhr",
    "vertical": "agency"
  },
  {
    "id": "expense-optimization-sjfc-healthcare",
    "name": "Expense Optimization Agent",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "AI-powered expense analyst that identifies cost-saving opportunities, analyzes spending patterns, provides budget variance insights, and flags unusual expenses across all offices and categories.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "AI-powered expense analyst that identifies cost-saving opportunities, analyzes spending patterns, provides budget variance insights, and flags unusual expenses across all offices and categories.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Expense Optimization Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/expense-optimization-sjfc-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "income-analysis-agent-sjfc-healthcare",
    "name": "Income Analysis Agent",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "AI-powered cash flow analyst that evaluates invoice collections, identifies payment risks, assesses client behavior, and recommends optimizations for revenue collection.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "AI-powered cash flow analyst that evaluates invoice collections, identifies payment risks, assesses client behavior, and recommends optimizations for revenue collection.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Income Analysis Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/income-analysis-agent-sjfc-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "gratuity-calculation-explainer-sjfc-nonprofit",
    "name": "Gratuity Calculation Explainer",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "AI agent that provides detailed, bilingual (English/Bengali) explanations of gratuity calculations based on Bangladesh and India labor laws.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "AI agent that provides detailed, bilingual (English/Bengali) explanations of gratuity calculations based on Bangladesh and India labor laws.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Gratuity Calculation Explainer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/gratuity-calculation-explainer-sjfc-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "weekly-invoice-review-sjfc-healthcare",
    "name": "Weekly Invoice Review Agent",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Analyzes all pending invoices weekly and provides actionable insights for collection, including risk assessment and prioritized action items.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Analyzes all pending invoices weekly and provides actionable insights for collection, including risk assessment and prioritized action items.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Weekly Invoice Review Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/weekly-invoice-review-sjfc-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "payroll-ctc-optimizer-sjfc-nonprofit",
    "name": "Payroll & CTC Optimizer",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Analyzes 112+ employee CTC records across offices, detects salary anomalies, benchmarks cost-per-hour across locations, and identifies billable utilization gaps.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Analyzes 112+ employee CTC records across offices, detects salary anomalies, benchmarks cost-per-hour across locations, and identifies billable utilization gaps.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Payroll & CTC Optimizer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/payroll-ctc-optimizer-sjfc-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "weekly-invoice-review-sjfc-real_estate",
    "name": "Weekly Invoice Review Agent",
    "team": "Real Estate",
    "teamSlug": "real-estate",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Analyzes all pending invoices weekly and provides actionable insights for collection, including risk assessment and prioritized action items.",
    "integrations": [
      "MLS",
      "Follow Up Boss",
      "Zillow",
      "DocuSign"
    ],
    "workflowInput": "Analyzes all pending invoices weekly and provides actionable insights for collection, including risk assessment and prioritized action items.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Weekly Invoice Review Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/weekly-invoice-review-sjfc-real_estate",
    "vertical": "real_estate"
  },
  {
    "id": "income-analysis-agent-sjfc-real_estate",
    "name": "Income Analysis Agent",
    "team": "Real Estate",
    "teamSlug": "real-estate",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "AI-powered cash flow analyst that evaluates invoice collections, identifies payment risks, assesses client behavior, and recommends optimizations for revenue collection.",
    "integrations": [
      "MLS",
      "Follow Up Boss",
      "Zillow",
      "DocuSign"
    ],
    "workflowInput": "AI-powered cash flow analyst that evaluates invoice collections, identifies payment risks, assesses client behavior, and recommends optimizations for revenue collection.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Income Analysis Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/income-analysis-agent-sjfc-real_estate",
    "vertical": "real_estate"
  },
  {
    "id": "anomaly-detection-agent-sjfc-healthcare",
    "name": "Anomaly Detection Agent",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Identifies unusual patterns, potential fraud, duplicate transactions, vendor irregularities, and spending anomalies that require investigation.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Identifies unusual patterns, potential fraud, duplicate transactions, vendor irregularities, and spending anomalies that require investigation.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Anomaly Detection Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/anomaly-detection-agent-sjfc-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "cash-flow-forecaster-sjfc-mortgage",
    "name": "Cash Flow Forecaster",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Analyzes historical financial data to produce 3-month forward cash flow projections, collection efficiency trends, and actionable cash management recommendations.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Analyzes historical financial data to produce 3-month forward cash flow projections, collection efficiency trends, and actionable cash management recommendations.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Cash Flow Forecaster\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/cash-flow-forecaster-sjfc-mortgage",
    "vertical": "mortgage"
  },
  {
    "id": "monthly-pnl-health-check-sjfc-nonprofit",
    "name": "Monthly P&L Health Check",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Produces a board-ready monthly financial health assessment with variance analysis, traffic-light indicators, margin trend analysis, and CFO-level action items.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Produces a board-ready monthly financial health assessment with variance analysis, traffic-light indicators, margin trend analysis, and CFO-level action items.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Monthly P&L Health Check\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/monthly-pnl-health-check-sjfc-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "overdue-invoice-monitor-sjfc-nonprofit",
    "name": "Overdue Invoice Monitor",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Weekly AI assistant that reviews invoices from the last 90 days, identifies overdue payments, summarizes client-level issues, highlights trends, and suggests next steps.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Weekly AI assistant that reviews invoices from the last 90 days, identifies overdue payments, summarizes client-level issues, highlights trends, and suggests next steps.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Overdue Invoice Monitor\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/overdue-invoice-monitor-sjfc-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "expense-analysis-agent-sjfc-insurance",
    "name": "Expense Analysis Agent",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Analyzes transactions, detects anomalies, suggests categories with confidence scores, and identifies potential duplicates or misclassifications.",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Analyzes transactions, detects anomalies, suggests categories with confidence scores, and identifies potential duplicates or misclassifications.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Expense Analysis Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/expense-analysis-agent-sjfc-insurance",
    "vertical": "insurance"
  },
  {
    "id": "financial-risk-assessment-sjfc-nonprofit",
    "name": "Financial Risk Assessment Agent",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Analyzes client meeting data and financial records to detect early warning signs of payment, revenue, and relationship risks.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Analyzes client meeting data and financial records to detect early warning signs of payment, revenue, and relationship risks.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Financial Risk Assessment Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/financial-risk-assessment-sjfc-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "strategic-planning-agent-sjfc-nonprofit",
    "name": "Strategic Planning Agent",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Analyzes financial data for growth opportunities, risk assessment, scenario modeling, budget optimization, and long-term strategic recommendations.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Analyzes financial data for growth opportunities, risk assessment, scenario modeling, budget optimization, and long-term strategic recommendations.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Strategic Planning Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/strategic-planning-agent-sjfc-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "overdue-invoice-monitor-sjfc-insurance",
    "name": "Overdue Invoice Monitor",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Weekly AI assistant that reviews invoices from the last 90 days, identifies overdue payments, summarizes client-level issues, highlights trends, and suggests next steps.",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Weekly AI assistant that reviews invoices from the last 90 days, identifies overdue payments, summarizes client-level issues, highlights trends, and suggests next steps.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Overdue Invoice Monitor\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/overdue-invoice-monitor-sjfc-insurance",
    "vertical": "insurance"
  },
  {
    "id": "weekly-invoice-review-sjfc-mortgage",
    "name": "Weekly Invoice Review Agent",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Analyzes all pending invoices weekly and provides actionable insights for collection, including risk assessment and prioritized action items.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Analyzes all pending invoices weekly and provides actionable insights for collection, including risk assessment and prioritized action items.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Weekly Invoice Review Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/weekly-invoice-review-sjfc-mortgage",
    "vertical": "mortgage"
  },
  {
    "id": "income-analysis-agent-sjfc-mortgage",
    "name": "Income Analysis Agent",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "AI-powered cash flow analyst that evaluates invoice collections, identifies payment risks, assesses client behavior, and recommends optimizations for revenue collection.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "AI-powered cash flow analyst that evaluates invoice collections, identifies payment risks, assesses client behavior, and recommends optimizations for revenue collection.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Income Analysis Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/income-analysis-agent-sjfc-mortgage",
    "vertical": "mortgage"
  },
  {
    "id": "cash-flow-forecaster-sjfc-real_estate",
    "name": "Cash Flow Forecaster",
    "team": "Real Estate",
    "teamSlug": "real-estate",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Analyzes historical financial data to produce 3-month forward cash flow projections, collection efficiency trends, and actionable cash management recommendations.",
    "integrations": [
      "MLS",
      "Follow Up Boss",
      "Zillow",
      "DocuSign"
    ],
    "workflowInput": "Analyzes historical financial data to produce 3-month forward cash flow projections, collection efficiency trends, and actionable cash management recommendations.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Cash Flow Forecaster\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/cash-flow-forecaster-sjfc-real_estate",
    "vertical": "real_estate"
  },
  {
    "id": "monthly-pnl-health-check-sjfc-mortgage",
    "name": "Monthly P&L Health Check",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Produces a board-ready monthly financial health assessment with variance analysis, traffic-light indicators, margin trend analysis, and CFO-level action items.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Produces a board-ready monthly financial health assessment with variance analysis, traffic-light indicators, margin trend analysis, and CFO-level action items.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Monthly P&L Health Check\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/monthly-pnl-health-check-sjfc-mortgage",
    "vertical": "mortgage"
  },
  {
    "id": "financial-report-agent-sjfc-mortgage",
    "name": "Financial Report Agent",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Generates comprehensive reports with insights, forecasts, KPI analysis, and strategic recommendations for management decision-making.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Generates comprehensive reports with insights, forecasts, KPI analysis, and strategic recommendations for management decision-making.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Financial Report Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/financial-report-agent-sjfc-mortgage",
    "vertical": "mortgage"
  },
  {
    "id": "cash-flow-forecaster-sjfc-insurance",
    "name": "Cash Flow Forecaster",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Analyzes historical financial data to produce 3-month forward cash flow projections, collection efficiency trends, and actionable cash management recommendations.",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Analyzes historical financial data to produce 3-month forward cash flow projections, collection efficiency trends, and actionable cash management recommendations.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Cash Flow Forecaster\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/cash-flow-forecaster-sjfc-insurance",
    "vertical": "insurance"
  },
  {
    "id": "overdue-invoice-monitor-sjfc-real_estate",
    "name": "Overdue Invoice Monitor",
    "team": "Real Estate",
    "teamSlug": "real-estate",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Weekly AI assistant that reviews invoices from the last 90 days, identifies overdue payments, summarizes client-level issues, highlights trends, and suggests next steps.",
    "integrations": [
      "MLS",
      "Follow Up Boss",
      "Zillow",
      "DocuSign"
    ],
    "workflowInput": "Weekly AI assistant that reviews invoices from the last 90 days, identifies overdue payments, summarizes client-level issues, highlights trends, and suggests next steps.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Overdue Invoice Monitor\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/overdue-invoice-monitor-sjfc-real_estate",
    "vertical": "real_estate"
  },
  {
    "id": "expense-analysis-agent-sjfc-healthcare",
    "name": "Expense Analysis Agent",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Analyzes transactions, detects anomalies, suggests categories with confidence scores, and identifies potential duplicates or misclassifications.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Analyzes transactions, detects anomalies, suggests categories with confidence scores, and identifies potential duplicates or misclassifications.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Expense Analysis Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/expense-analysis-agent-sjfc-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "strategic-planning-agent-sjfc-real_estate",
    "name": "Strategic Planning Agent",
    "team": "Real Estate",
    "teamSlug": "real-estate",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Analyzes financial data for growth opportunities, risk assessment, scenario modeling, budget optimization, and long-term strategic recommendations.",
    "integrations": [
      "MLS",
      "Follow Up Boss",
      "Zillow",
      "DocuSign"
    ],
    "workflowInput": "Analyzes financial data for growth opportunities, risk assessment, scenario modeling, budget optimization, and long-term strategic recommendations.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Strategic Planning Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/strategic-planning-agent-sjfc-real_estate",
    "vertical": "real_estate"
  },
  {
    "id": "overdue-invoice-monitor-sjfc-healthcare",
    "name": "Overdue Invoice Monitor",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Weekly AI assistant that reviews invoices from the last 90 days, identifies overdue payments, summarizes client-level issues, highlights trends, and suggests next steps.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Weekly AI assistant that reviews invoices from the last 90 days, identifies overdue payments, summarizes client-level issues, highlights trends, and suggests next steps.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Overdue Invoice Monitor\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/overdue-invoice-monitor-sjfc-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "financial-report-agent-sjfc-real_estate",
    "name": "Financial Report Agent",
    "team": "Real Estate",
    "teamSlug": "real-estate",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Generates comprehensive reports with insights, forecasts, KPI analysis, and strategic recommendations for management decision-making.",
    "integrations": [
      "MLS",
      "Follow Up Boss",
      "Zillow",
      "DocuSign"
    ],
    "workflowInput": "Generates comprehensive reports with insights, forecasts, KPI analysis, and strategic recommendations for management decision-making.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Financial Report Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/financial-report-agent-sjfc-real_estate",
    "vertical": "real_estate"
  },
  {
    "id": "monthly-pnl-health-check-sjfc-real_estate",
    "name": "Monthly P&L Health Check",
    "team": "Real Estate",
    "teamSlug": "real-estate",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Produces a board-ready monthly financial health assessment with variance analysis, traffic-light indicators, margin trend analysis, and CFO-level action items.",
    "integrations": [
      "MLS",
      "Follow Up Boss",
      "Zillow",
      "DocuSign"
    ],
    "workflowInput": "Produces a board-ready monthly financial health assessment with variance analysis, traffic-light indicators, margin trend analysis, and CFO-level action items.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Monthly P&L Health Check\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/monthly-pnl-health-check-sjfc-real_estate",
    "vertical": "real_estate"
  },
  {
    "id": "payroll-ctc-optimizer-sjfc-healthcare",
    "name": "Payroll & CTC Optimizer",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Analyzes 112+ employee CTC records across offices, detects salary anomalies, benchmarks cost-per-hour across locations, and identifies billable utilization gaps.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Analyzes 112+ employee CTC records across offices, detects salary anomalies, benchmarks cost-per-hour across locations, and identifies billable utilization gaps.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Payroll & CTC Optimizer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/payroll-ctc-optimizer-sjfc-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "overdue-invoice-monitor-sjfc-mortgage",
    "name": "Overdue Invoice Monitor",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Weekly AI assistant that reviews invoices from the last 90 days, identifies overdue payments, summarizes client-level issues, highlights trends, and suggests next steps.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Weekly AI assistant that reviews invoices from the last 90 days, identifies overdue payments, summarizes client-level issues, highlights trends, and suggests next steps.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Overdue Invoice Monitor\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/overdue-invoice-monitor-sjfc-mortgage",
    "vertical": "mortgage"
  },
  {
    "id": "expense-optimization-sjfc-insurance",
    "name": "Expense Optimization Agent",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "AI-powered expense analyst that identifies cost-saving opportunities, analyzes spending patterns, provides budget variance insights, and flags unusual expenses across all offices and categories.",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "AI-powered expense analyst that identifies cost-saving opportunities, analyzes spending patterns, provides budget variance insights, and flags unusual expenses across all offices and categories.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Expense Optimization Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/expense-optimization-sjfc-insurance",
    "vertical": "insurance"
  },
  {
    "id": "anomaly-detection-agent-sjfc-nonprofit",
    "name": "Anomaly Detection Agent",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Identifies unusual patterns, potential fraud, duplicate transactions, vendor irregularities, and spending anomalies that require investigation.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Identifies unusual patterns, potential fraud, duplicate transactions, vendor irregularities, and spending anomalies that require investigation.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Anomaly Detection Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/anomaly-detection-agent-sjfc-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "weekly-invoice-review-sjfc-insurance",
    "name": "Weekly Invoice Review Agent",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Analyzes all pending invoices weekly and provides actionable insights for collection, including risk assessment and prioritized action items.",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Analyzes all pending invoices weekly and provides actionable insights for collection, including risk assessment and prioritized action items.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Weekly Invoice Review Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/weekly-invoice-review-sjfc-insurance",
    "vertical": "insurance"
  },
  {
    "id": "productivity-intelligence-sjhr-healthcare",
    "name": "Productivity Intelligence Agent",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Reads workforce productivity signals to identify concerns and give HR clear, actionable recommendations.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Reads workforce productivity signals to identify concerns and give HR clear, actionable recommendations.",
    "workflowSteps": [
      "Identifies productivity dips before reviews",
      "Connects productivity to attendance, leave, and 1:1 themes",
      "Recommends specific HR actions"
    ],
    "sampleOutput": "The agent surfaces: 'Productivity in the support pod dropped 22% over 3 weeks; correlates with two open seats and rising overtime.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/productivity-intelligence-sjhr-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "attendance-intelligence-sjhr-nonprofit",
    "name": "Attendance Intelligence Agent",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Spots attendance patterns, flags anomalies, and forecasts staffing risks before they hurt delivery.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Spots attendance patterns, flags anomalies, and forecasts staffing risks before they hurt delivery.",
    "workflowSteps": [
      "Surfaces chronic late-comers and absenteeism trends without manual report-pulling",
      "Forecasts headcount risk so managers can plan around it",
      "Gives HR a one-click weekly read on the workforce"
    ],
    "sampleOutput": "A team lead opens the page and sees that three engineers in one pod have logged late arrivals 8+ times this month — with a recommendation to schedule a check-in.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/attendance-intelligence-sjhr-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "income-analysis-agent-sjfc-insurance",
    "name": "Income Analysis Agent",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "AI-powered cash flow analyst that evaluates invoice collections, identifies payment risks, assesses client behavior, and recommends optimizations for revenue collection.",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "AI-powered cash flow analyst that evaluates invoice collections, identifies payment risks, assesses client behavior, and recommends optimizations for revenue collection.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Income Analysis Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/income-analysis-agent-sjfc-insurance",
    "vertical": "insurance"
  },
  {
    "id": "expense-optimization-sjfc-nonprofit",
    "name": "Expense Optimization Agent",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "AI-powered expense analyst that identifies cost-saving opportunities, analyzes spending patterns, provides budget variance insights, and flags unusual expenses across all offices and categories.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "AI-powered expense analyst that identifies cost-saving opportunities, analyzes spending patterns, provides budget variance insights, and flags unusual expenses across all offices and categories.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Expense Optimization Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/expense-optimization-sjfc-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "strategic-planning-agent-sjfc-mortgage",
    "name": "Strategic Planning Agent",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Analyzes financial data for growth opportunities, risk assessment, scenario modeling, budget optimization, and long-term strategic recommendations.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Analyzes financial data for growth opportunities, risk assessment, scenario modeling, budget optimization, and long-term strategic recommendations.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Strategic Planning Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/strategic-planning-agent-sjfc-mortgage",
    "vertical": "mortgage"
  },
  {
    "id": "one-on-one-monthly-report-sjhr-nonprofit",
    "name": "One-on-One Monthly Report Generator",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Generates a comprehensive monthly 1:1 compliance report for HR — who held them, who skipped, and what came up.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Generates a comprehensive monthly 1:1 compliance report for HR — who held them, who skipped, and what came up.",
    "workflowSteps": [
      "Tracks 1:1 discipline across the org",
      "Spots managers who avoid 1:1s",
      "Surfaces the themes employees actually raise"
    ],
    "sampleOutput": "HR pulls the monthly report: '87% on-time compliance. 3 managers below 50%. Top themes: workload, growth, tooling.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/one-on-one-monthly-report-sjhr-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "anomaly-detection-agent-sjfc-insurance",
    "name": "Anomaly Detection Agent",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Identifies unusual patterns, potential fraud, duplicate transactions, vendor irregularities, and spending anomalies that require investigation.",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Identifies unusual patterns, potential fraud, duplicate transactions, vendor irregularities, and spending anomalies that require investigation.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Anomaly Detection Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/anomaly-detection-agent-sjfc-insurance",
    "vertical": "insurance"
  },
  {
    "id": "income-analysis-agent-sjfc-nonprofit",
    "name": "Income Analysis Agent",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "AI-powered cash flow analyst that evaluates invoice collections, identifies payment risks, assesses client behavior, and recommends optimizations for revenue collection.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "AI-powered cash flow analyst that evaluates invoice collections, identifies payment risks, assesses client behavior, and recommends optimizations for revenue collection.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Income Analysis Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/income-analysis-agent-sjfc-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "gratuity-calculation-explainer-sjfc-healthcare",
    "name": "Gratuity Calculation Explainer",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "AI agent that provides detailed, bilingual (English/Bengali) explanations of gratuity calculations based on Bangladesh and India labor laws.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "AI agent that provides detailed, bilingual (English/Bengali) explanations of gratuity calculations based on Bangladesh and India labor laws.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Gratuity Calculation Explainer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/gratuity-calculation-explainer-sjfc-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "exit-task-generator-sjhr-nonprofit",
    "name": "Exit Feedback Task Generator",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Reads exit interview feedback and creates the manager tasks needed to address it — no more lost insights.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Reads exit interview feedback and creates the manager tasks needed to address it — no more lost insights.",
    "workflowSteps": [
      "Turns exit feedback into accountable follow-through",
      "Closes the loop with the team that's staying",
      "Stops the same complaints from coming back"
    ],
    "sampleOutput": "An exit interview mentions weak onboarding — the agent files a task for the team lead: 'Review onboarding checklist with new joiners.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/exit-task-generator-sjhr-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "leave-intelligence-sjhr-nonprofit",
    "name": "Leave Intelligence AI",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Analyzes leave patterns to catch Friday-Monday abuse, burnout risk, and compliance issues before HR has to ask.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Analyzes leave patterns to catch Friday-Monday abuse, burnout risk, and compliance issues before HR has to ask.",
    "workflowSteps": [
      "Detects sandwich-leave patterns automatically",
      "Identifies employees at burnout risk",
      "Keeps leave compliance airtight"
    ],
    "sampleOutput": "An employee who's taken six Friday-Monday leaves this quarter is flagged with a suggested gentle check-in.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/leave-intelligence-sjhr-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "request-reviewer-sjhr-insurance",
    "name": "Request Pre-Review",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Pre-reviews WFH and Early Leaving requests, checks policy, spots patterns, and routes them to the right approver.",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Pre-reviews WFH and Early Leaving requests, checks policy, spots patterns, and routes them to the right approver.",
    "workflowSteps": [
      "Cuts approver workload by 60%+",
      "Catches policy violations automatically",
      "Speeds up decisions for employees"
    ],
    "sampleOutput": "A WFH request hits the manager queue with a pre-review: 'Policy OK. 4th WFH this month — consider checking in.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/request-reviewer-sjhr-insurance",
    "vertical": "insurance"
  },
  {
    "id": "weekly-invoice-review-sjfc-nonprofit",
    "name": "Weekly Invoice Review Agent",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Analyzes all pending invoices weekly and provides actionable insights for collection, including risk assessment and prioritized action items.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Analyzes all pending invoices weekly and provides actionable insights for collection, including risk assessment and prioritized action items.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Weekly Invoice Review Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/weekly-invoice-review-sjfc-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "expense-analysis-agent-sjfc",
    "name": "Expense Analysis Agent",
    "team": "Finance & Ops",
    "teamSlug": "finance",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Analyzes transactions, detects anomalies, suggests categories with confidence scores, and identifies potential duplicates or misclassifications.",
    "integrations": [
      "QuickBooks",
      "Xero",
      "Stripe",
      "Excel"
    ],
    "workflowInput": "Analyzes transactions, detects anomalies, suggests categories with confidence scores, and identifies potential duplicates or misclassifications.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Expense Analysis Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/expense-analysis-agent-sjfc",
    "vertical": "agency"
  },
  {
    "id": "overdue-invoice-monitor-sjfc",
    "name": "Overdue Invoice Monitor",
    "team": "Finance & Ops",
    "teamSlug": "finance",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Weekly AI assistant that reviews invoices from the last 90 days, identifies overdue payments, summarizes client-level issues, highlights trends, and suggests next steps.",
    "integrations": [
      "QuickBooks",
      "Xero",
      "Stripe",
      "Excel"
    ],
    "workflowInput": "Weekly AI assistant that reviews invoices from the last 90 days, identifies overdue payments, summarizes client-level issues, highlights trends, and suggests next steps.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Overdue Invoice Monitor\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/overdue-invoice-monitor-sjfc",
    "vertical": "agency"
  },
  {
    "id": "financial-risk-assessment-sjfc",
    "name": "Financial Risk Assessment Agent",
    "team": "Finance & Ops",
    "teamSlug": "finance",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Analyzes client meeting data and financial records to detect early warning signs of payment, revenue, and relationship risks.",
    "integrations": [
      "QuickBooks",
      "Xero",
      "Stripe",
      "Excel"
    ],
    "workflowInput": "Analyzes client meeting data and financial records to detect early warning signs of payment, revenue, and relationship risks.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Financial Risk Assessment Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/financial-risk-assessment-sjfc",
    "vertical": "agency"
  },
  {
    "id": "tool-categorization-agent-sjfc",
    "name": "Tool Categorization Agent",
    "team": "Finance & Ops",
    "teamSlug": "finance",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "AI agent that analyzes software tools and suggests appropriate business categories based on tool name, purpose, and vendor information.",
    "integrations": [
      "QuickBooks",
      "Xero",
      "Stripe",
      "Excel"
    ],
    "workflowInput": "AI agent that analyzes software tools and suggests appropriate business categories based on tool name, purpose, and vendor information.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Tool Categorization Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/tool-categorization-agent-sjfc",
    "vertical": "agency"
  },
  {
    "id": "expense-anomaly-detection-agent-sjfc",
    "name": "Expense Anomaly Detection Agent",
    "team": "Finance & Ops",
    "teamSlug": "finance",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Reviews expense data for anomalies, duplicates, and incorrect categorizations.",
    "integrations": [
      "QuickBooks",
      "Xero",
      "Stripe",
      "Excel"
    ],
    "workflowInput": "Reviews expense data for anomalies, duplicates, and incorrect categorizations.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Expense Anomaly Detection Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/expense-anomaly-detection-agent-sjfc",
    "vertical": "agency"
  },
  {
    "id": "payroll-ctc-optimizer-sjfc",
    "name": "Payroll & CTC Optimizer",
    "team": "Finance & Ops",
    "teamSlug": "finance",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Analyzes 112+ employee CTC records across offices, detects salary anomalies, benchmarks cost-per-hour across locations, and identifies billable utilization gaps.",
    "integrations": [
      "QuickBooks",
      "Xero",
      "Stripe",
      "Excel"
    ],
    "workflowInput": "Analyzes 112+ employee CTC records across offices, detects salary anomalies, benchmarks cost-per-hour across locations, and identifies billable utilization gaps.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Payroll & CTC Optimizer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/payroll-ctc-optimizer-sjfc",
    "vertical": "agency"
  },
  {
    "id": "monthly-pnl-health-check-sjfc",
    "name": "Monthly P&L Health Check",
    "team": "Finance & Ops",
    "teamSlug": "finance",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Produces a board-ready monthly financial health assessment with variance analysis, traffic-light indicators, margin trend analysis, and CFO-level action items.",
    "integrations": [
      "QuickBooks",
      "Xero",
      "Stripe",
      "Excel"
    ],
    "workflowInput": "Produces a board-ready monthly financial health assessment with variance analysis, traffic-light indicators, margin trend analysis, and CFO-level action items.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Monthly P&L Health Check\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/monthly-pnl-health-check-sjfc",
    "vertical": "agency"
  },
  {
    "id": "expense-optimization-sjfc",
    "name": "Expense Optimization Agent",
    "team": "Finance & Ops",
    "teamSlug": "finance",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "AI-powered expense analyst that identifies cost-saving opportunities, analyzes spending patterns, provides budget variance insights, and flags unusual expenses across all offices and categories.",
    "integrations": [
      "QuickBooks",
      "Xero",
      "Stripe",
      "Excel"
    ],
    "workflowInput": "AI-powered expense analyst that identifies cost-saving opportunities, analyzes spending patterns, provides budget variance insights, and flags unusual expenses across all offices and categories.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Expense Optimization Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/expense-optimization-sjfc",
    "vertical": "agency"
  },
  {
    "id": "income-analysis-agent-sjfc",
    "name": "Income Analysis Agent",
    "team": "Finance & Ops",
    "teamSlug": "finance",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "AI-powered cash flow analyst that evaluates invoice collections, identifies payment risks, assesses client behavior, and recommends optimizations for revenue collection.",
    "integrations": [
      "QuickBooks",
      "Xero",
      "Stripe",
      "Excel"
    ],
    "workflowInput": "AI-powered cash flow analyst that evaluates invoice collections, identifies payment risks, assesses client behavior, and recommends optimizations for revenue collection.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Income Analysis Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/income-analysis-agent-sjfc",
    "vertical": "agency"
  },
  {
    "id": "request-reviewer-sjhr-healthcare",
    "name": "Request Pre-Review",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Pre-reviews WFH and Early Leaving requests, checks policy, spots patterns, and routes them to the right approver.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Pre-reviews WFH and Early Leaving requests, checks policy, spots patterns, and routes them to the right approver.",
    "workflowSteps": [
      "Cuts approver workload by 60%+",
      "Catches policy violations automatically",
      "Speeds up decisions for employees"
    ],
    "sampleOutput": "A WFH request hits the manager queue with a pre-review: 'Policy OK. 4th WFH this month — consider checking in.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/request-reviewer-sjhr-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "anomaly-detection-agent-sjfc",
    "name": "Anomaly Detection Agent",
    "team": "Finance & Ops",
    "teamSlug": "finance",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Identifies unusual patterns, potential fraud, duplicate transactions, vendor irregularities, and spending anomalies that require investigation.",
    "integrations": [
      "QuickBooks",
      "Xero",
      "Stripe",
      "Excel"
    ],
    "workflowInput": "Identifies unusual patterns, potential fraud, duplicate transactions, vendor irregularities, and spending anomalies that require investigation.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Anomaly Detection Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/anomaly-detection-agent-sjfc",
    "vertical": "agency"
  },
  {
    "id": "culture-monthly-summary-sjhr",
    "name": "Culture Session Monthly Summary Email",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Emails managers a polished monthly culture report on the first Monday — sessions held, attendance %, and no-shows.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Emails managers a polished monthly culture report on the first Monday — sessions held, attendance %, and no-shows.",
    "workflowSteps": [
      "Gives leadership a culture pulse without asking",
      "Holds non-attendees gently accountable",
      "Eliminates manual report compilation"
    ],
    "sampleOutput": "Every first Monday, every manager receives a one-page email: 'Your team attended 78% of culture sessions in October. 2 members missed all sessions.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/culture-monthly-summary-sjhr",
    "vertical": "agency"
  },
  {
    "id": "employee-feedback-analyzer-sjhr",
    "name": "Employee Feedback Analyzer",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Reads employee feedback objectively and gives HR an unbiased summary across performance cycles.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Reads employee feedback objectively and gives HR an unbiased summary across performance cycles.",
    "workflowSteps": [
      "Removes manager bias from feedback review",
      "Identifies recurring themes across reviewers",
      "Speeds up performance calibration"
    ],
    "sampleOutput": "Before a calibration meeting, HR opens a 1-page summary: 'Reviewers consistently highlight ownership; growth area is delegation.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/employee-feedback-analyzer-sjhr",
    "vertical": "agency"
  },
  {
    "id": "productivity-intelligence-sjhr-mortgage",
    "name": "Productivity Intelligence Agent",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Reads workforce productivity signals to identify concerns and give HR clear, actionable recommendations.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Reads workforce productivity signals to identify concerns and give HR clear, actionable recommendations.",
    "workflowSteps": [
      "Identifies productivity dips before reviews",
      "Connects productivity to attendance, leave, and 1:1 themes",
      "Recommends specific HR actions"
    ],
    "sampleOutput": "The agent surfaces: 'Productivity in the support pod dropped 22% over 3 weeks; correlates with two open seats and rising overtime.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/productivity-intelligence-sjhr-mortgage",
    "vertical": "mortgage"
  },
  {
    "id": "one-on-one-monthly-report-sjhr-mortgage",
    "name": "One-on-One Monthly Report Generator",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Generates a comprehensive monthly 1:1 compliance report for HR — who held them, who skipped, and what came up.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Generates a comprehensive monthly 1:1 compliance report for HR — who held them, who skipped, and what came up.",
    "workflowSteps": [
      "Tracks 1:1 discipline across the org",
      "Spots managers who avoid 1:1s",
      "Surfaces the themes employees actually raise"
    ],
    "sampleOutput": "HR pulls the monthly report: '87% on-time compliance. 3 managers below 50%. Top themes: workload, growth, tooling.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/one-on-one-monthly-report-sjhr-mortgage",
    "vertical": "mortgage"
  },
  {
    "id": "exit-task-generator-sjhr-mortgage",
    "name": "Exit Feedback Task Generator",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Reads exit interview feedback and creates the manager tasks needed to address it — no more lost insights.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Reads exit interview feedback and creates the manager tasks needed to address it — no more lost insights.",
    "workflowSteps": [
      "Turns exit feedback into accountable follow-through",
      "Closes the loop with the team that's staying",
      "Stops the same complaints from coming back"
    ],
    "sampleOutput": "An exit interview mentions weak onboarding — the agent files a task for the team lead: 'Review onboarding checklist with new joiners.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/exit-task-generator-sjhr-mortgage",
    "vertical": "mortgage"
  },
  {
    "id": "feedback-task-creator-sjhr",
    "name": "Feedback Task Creator",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Scans employee feedback for issues that need manager attention and generates actionable follow-up tasks.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Scans employee feedback for issues that need manager attention and generates actionable follow-up tasks.",
    "workflowSteps": [
      "Ensures feedback never gets lost in a doc",
      "Routes concerns to the right manager automatically",
      "Makes employees feel heard"
    ],
    "sampleOutput": "An employee mentions burnout in their 1:1 form — a task lands in their manager's queue: 'Discuss workload in next 1:1.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/feedback-task-creator-sjhr",
    "vertical": "agency"
  },
  {
    "id": "exit-trends-6month-sjhr",
    "name": "Exit Trends 6-Month Analyzer",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Looks across six months of exit feedback to identify trends, patterns, and strategic risks for leadership.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Looks across six months of exit feedback to identify trends, patterns, and strategic risks for leadership.",
    "workflowSteps": [
      "Shifts exit insight from reactive to strategic",
      "Connects departures to org changes",
      "Gives the board defensible data"
    ],
    "sampleOutput": "A quarterly leadership review opens with: 'Attrition in the design team doubled after the reorg; cited reasons: unclear ownership.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/exit-trends-6month-sjhr",
    "vertical": "agency"
  },
  {
    "id": "one-on-one-insights-sjhr",
    "name": "One-on-One Insights Assistant",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Gives each manager personalized insights about their 1:1 cadence, themes, and recurring blockers.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Gives each manager personalized insights about their 1:1 cadence, themes, and recurring blockers.",
    "workflowSteps": [
      "Improves the quality of every 1:1",
      "Helps managers spot patterns across their team",
      "Makes 1:1s a strategic tool, not a calendar event"
    ],
    "sampleOutput": "A manager opens the page and sees: 'In the last 6 1:1s, two reports raised growth concerns — consider a career conversation.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/one-on-one-insights-sjhr",
    "vertical": "agency"
  },
  {
    "id": "onboarding-sentiment-sjhr",
    "name": "New Hire Sentiment Analyzer",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Reads new-hire feedback to identify what's working in onboarding and where joiners get stuck.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Reads new-hire feedback to identify what's working in onboarding and where joiners get stuck.",
    "workflowSteps": [
      "Improves onboarding faster than annual surveys",
      "Identifies what makes joiners succeed",
      "Reduces early-stage attrition"
    ],
    "sampleOutput": "A new joiner survey flags confusion about the dev environment — onboarding owners get a task: 'Update setup runbook.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/onboarding-sentiment-sjhr",
    "vertical": "agency"
  },
  {
    "id": "compliance-auditor-sjhr",
    "name": "Compliance Auditor",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Continuously checks leave and attendance against company policy so violations don't slip through.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Continuously checks leave and attendance against company policy so violations don't slip through.",
    "workflowSteps": [
      "Flags policy breaches the moment they happen",
      "Replaces month-end manual audits",
      "Creates a clean, defensible audit trail"
    ],
    "sampleOutput": "HR receives an alert that an employee has exceeded their casual leave quota — with the exact policy clause and recommended action attached.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/compliance-auditor-sjhr",
    "vertical": "agency"
  },
  {
    "id": "team-insights-sjhr",
    "name": "Team Insights Agent",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Gives each manager personalized analytics and forecasts about their team — attendance, productivity, and risks.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Gives each manager personalized analytics and forecasts about their team — attendance, productivity, and risks.",
    "workflowSteps": [
      "Manager-level analytics without a BI tool",
      "Forecasts team risks before they become incidents",
      "Personalized to each manager's actual team"
    ],
    "sampleOutput": "A manager opens their dashboard: 'Your team's on-time rate dropped 8% this week. 1 member at burnout risk based on workload + leave.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/team-insights-sjhr",
    "vertical": "agency"
  },
  {
    "id": "culture-admin-attendance-reminder-sjhr",
    "name": "Culture Session Admin Attendance Reminder",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Reminds HR to update culture session attendance and collect feedback on the last working day of every month.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Reminds HR to update culture session attendance and collect feedback on the last working day of every month.",
    "workflowSteps": [
      "Closes the loop on monthly culture reporting",
      "Prevents missing attendance data",
      "Keeps the engagement program on schedule"
    ],
    "sampleOutput": "On the 28th, HR gets a Slack ping: 'Update October culture attendance and trigger the participant feedback survey.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/culture-admin-attendance-reminder-sjhr",
    "vertical": "agency"
  },
  {
    "id": "hr-insights-sjhr",
    "name": "HR Insights Agent",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "AI-powered analysis across the whole HR dataset, surfacing the trends and risks that matter this week.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "AI-powered analysis across the whole HR dataset, surfacing the trends and risks that matter this week.",
    "workflowSteps": [
      "Replaces hours of pivot-table work",
      "Highlights what changed since last week",
      "Answers ad-hoc HR questions on demand"
    ],
    "sampleOutput": "HR asks: 'Which teams have the highest leave usage this quarter?' and gets a chart, table, and one-paragraph summary.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/hr-insights-sjhr",
    "vertical": "agency"
  },
  {
    "id": "wfh-event-parser-sjhr",
    "name": "WFH Event Parser",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Parses Work-From-Home calendar events and extracts structured data — employee, location, duration, reason.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Parses Work-From-Home calendar events and extracts structured data — employee, location, duration, reason.",
    "workflowSteps": [
      "Replaces manual WFH tracking",
      "Feeds clean data into HR analytics",
      "Keeps the WFH log accurate without admin work"
    ],
    "sampleOutput": "Every WFH calendar event automatically becomes a structured record in the HR system — searchable, reportable, audit-ready.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/wfh-event-parser-sjhr",
    "vertical": "agency"
  },
  {
    "id": "exit-intelligence-sjhr-mortgage",
    "name": "Exit Intelligence",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Reads exit interview transcripts to surface patterns, sentiment, and the real reasons people leave.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Reads exit interview transcripts to surface patterns, sentiment, and the real reasons people leave.",
    "workflowSteps": [
      "Reveals systemic issues hidden in individual exits",
      "Quantifies sentiment objectively",
      "Drives retention strategy with evidence"
    ],
    "sampleOutput": "HR opens the dashboard and sees: '60% of recent exits cite limited growth paths — strongest signal among engineers.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/exit-intelligence-sjhr-mortgage",
    "vertical": "mortgage"
  },
  {
    "id": "employee-weekly-snapshot-sjhr",
    "name": "Employee Weekly Snapshot",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Generates a short, HR-grade weekly snapshot for every active employee and stores it as immutable history.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Generates a short, HR-grade weekly snapshot for every active employee and stores it as immutable history.",
    "workflowSteps": [
      "Lets HR scroll an employee's week-by-week story in seconds",
      "Spots momentum shifts early",
      "Builds a defensible record for reviews"
    ],
    "sampleOutput": "An HR partner opens a profile and scrolls back 12 weeks — each week shows attendance, tasks, leave, and a one-line AI takeaway.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/employee-weekly-snapshot-sjhr",
    "vertical": "agency"
  },
  {
    "id": "hr-weekly-trends-sjhr",
    "name": "HR Weekly Trends Analyzer",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Reads week-over-week trends and gives HR strategic insights to act on, not just numbers to look at.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Reads week-over-week trends and gives HR strategic insights to act on, not just numbers to look at.",
    "workflowSteps": [
      "Spots inflection points before they become problems",
      "Connects metrics across modules",
      "Recommends the next HR action"
    ],
    "sampleOutput": "The agent surfaces: 'Late arrivals jumped 18% this week — concentrated in the Mumbai office on Monday/Friday.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/hr-weekly-trends-sjhr",
    "vertical": "agency"
  },
  {
    "id": "task-assistant-sjhr",
    "name": "Task Assistant",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "An AI-powered task companion that summarizes work, sharpens descriptions, suggests next steps, and drafts updates.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "An AI-powered task companion that summarizes work, sharpens descriptions, suggests next steps, and drafts updates.",
    "workflowSteps": [
      "Cuts task admin time for everyone",
      "Improves task clarity across teams",
      "Helps managers stay on top of progress"
    ],
    "sampleOutput": "A manager opens a long task thread and gets a 3-line summary plus a draft status update ready to send.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/task-assistant-sjhr",
    "vertical": "agency"
  },
  {
    "id": "leave-intelligence-sjhr-healthcare",
    "name": "Leave Intelligence AI",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Analyzes leave patterns to catch Friday-Monday abuse, burnout risk, and compliance issues before HR has to ask.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Analyzes leave patterns to catch Friday-Monday abuse, burnout risk, and compliance issues before HR has to ask.",
    "workflowSteps": [
      "Detects sandwich-leave patterns automatically",
      "Identifies employees at burnout risk",
      "Keeps leave compliance airtight"
    ],
    "sampleOutput": "An employee who's taken six Friday-Monday leaves this quarter is flagged with a suggested gentle check-in.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/leave-intelligence-sjhr-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "culture-session-reminders-sjhr",
    "name": "Culture Session Reminder System",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Sends email reminders to facilitators and participants exactly one hour before each culture session.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Sends email reminders to facilitators and participants exactly one hour before each culture session.",
    "workflowSteps": [
      "Lifts attendance through timely nudges",
      "Frees the culture team from manual reminders",
      "Reduces last-minute no-shows"
    ],
    "sampleOutput": "At 2 PM, the 3 PM 'Mindful Monday' facilitator and 12 invitees each receive a friendly reminder with the meeting link.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/culture-session-reminders-sjhr",
    "vertical": "agency"
  },
  {
    "id": "hr-weekly-team-digest-sjhr",
    "name": "HR Weekly Team Digest",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Compiles a comprehensive weekly summary of team health metrics across every department for leadership.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Compiles a comprehensive weekly summary of team health metrics across every department for leadership.",
    "workflowSteps": [
      "Gives leadership one place to read the company's pulse",
      "Saves HR a half-day of weekly reporting",
      "Standardizes the conversation across teams"
    ],
    "sampleOutput": "Every Monday morning, leadership opens a single digest: attendance, engagement, leave, attrition risk — by department.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/hr-weekly-team-digest-sjhr",
    "vertical": "agency"
  },
  {
    "id": "exit-task-generator-sjhr-healthcare",
    "name": "Exit Feedback Task Generator",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Reads exit interview feedback and creates the manager tasks needed to address it — no more lost insights.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Reads exit interview feedback and creates the manager tasks needed to address it — no more lost insights.",
    "workflowSteps": [
      "Turns exit feedback into accountable follow-through",
      "Closes the loop with the team that's staying",
      "Stops the same complaints from coming back"
    ],
    "sampleOutput": "An exit interview mentions weak onboarding — the agent files a task for the team lead: 'Review onboarding checklist with new joiners.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/exit-task-generator-sjhr-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "one-on-one-monthly-report-sjhr-healthcare",
    "name": "One-on-One Monthly Report Generator",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Generates a comprehensive monthly 1:1 compliance report for HR — who held them, who skipped, and what came up.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Generates a comprehensive monthly 1:1 compliance report for HR — who held them, who skipped, and what came up.",
    "workflowSteps": [
      "Tracks 1:1 discipline across the org",
      "Spots managers who avoid 1:1s",
      "Surfaces the themes employees actually raise"
    ],
    "sampleOutput": "HR pulls the monthly report: '87% on-time compliance. 3 managers below 50%. Top themes: workload, growth, tooling.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/one-on-one-monthly-report-sjhr-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "financial-report-agent-sjfc",
    "name": "Financial Report Agent",
    "team": "Finance & Ops",
    "teamSlug": "finance",
    "category": "operations",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Generates comprehensive reports with insights, forecasts, KPI analysis, and strategic recommendations for management decision-making.",
    "integrations": [
      "QuickBooks",
      "Xero",
      "Stripe",
      "Excel"
    ],
    "workflowInput": "Generates comprehensive reports with insights, forecasts, KPI analysis, and strategic recommendations for management decision-making.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Financial Report Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/financial-report-agent-sjfc",
    "vertical": "agency"
  },
  {
    "id": "cash-flow-forecaster-sjfc-nonprofit",
    "name": "Cash Flow Forecaster",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Analyzes historical financial data to produce 3-month forward cash flow projections, collection efficiency trends, and actionable cash management recommendations.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Analyzes historical financial data to produce 3-month forward cash flow projections, collection efficiency trends, and actionable cash management recommendations.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Cash Flow Forecaster\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/cash-flow-forecaster-sjfc-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "cash-flow-forecaster-sjfc",
    "name": "Cash Flow Forecaster",
    "team": "Finance & Ops",
    "teamSlug": "finance",
    "category": "operations",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Analyzes historical financial data to produce 3-month forward cash flow projections, collection efficiency trends, and actionable cash management recommendations.",
    "integrations": [
      "QuickBooks",
      "Xero",
      "Stripe",
      "Excel"
    ],
    "workflowInput": "Analyzes historical financial data to produce 3-month forward cash flow projections, collection efficiency trends, and actionable cash management recommendations.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Cash Flow Forecaster\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/cash-flow-forecaster-sjfc",
    "vertical": "agency"
  },
  {
    "id": "exit-intelligence-sjhr-healthcare",
    "name": "Exit Intelligence",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Reads exit interview transcripts to surface patterns, sentiment, and the real reasons people leave.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Reads exit interview transcripts to surface patterns, sentiment, and the real reasons people leave.",
    "workflowSteps": [
      "Reveals systemic issues hidden in individual exits",
      "Quantifies sentiment objectively",
      "Drives retention strategy with evidence"
    ],
    "sampleOutput": "HR opens the dashboard and sees: '60% of recent exits cite limited growth paths — strongest signal among engineers.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/exit-intelligence-sjhr-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "onboarding-quality-sjhr-mortgage",
    "name": "Onboarding Quality Auditor",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Audits completed onboarding journeys to ensure process compliance and find what needs to be fixed.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Audits completed onboarding journeys to ensure process compliance and find what needs to be fixed.",
    "workflowSteps": [
      "Guarantees onboarding consistency across teams",
      "Catches missed steps before they hurt the new hire",
      "Documents compliance for audit"
    ],
    "sampleOutput": "A finished onboarding journey is scored — 92% complete, missing 'Manager 30-day check-in.' A follow-up is auto-created.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/onboarding-quality-sjhr-mortgage",
    "vertical": "mortgage"
  },
  {
    "id": "productivity-intelligence-sjhr-insurance",
    "name": "Productivity Intelligence Agent",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Reads workforce productivity signals to identify concerns and give HR clear, actionable recommendations.",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Reads workforce productivity signals to identify concerns and give HR clear, actionable recommendations.",
    "workflowSteps": [
      "Identifies productivity dips before reviews",
      "Connects productivity to attendance, leave, and 1:1 themes",
      "Recommends specific HR actions"
    ],
    "sampleOutput": "The agent surfaces: 'Productivity in the support pod dropped 22% over 3 weeks; correlates with two open seats and rising overtime.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/productivity-intelligence-sjhr-insurance",
    "vertical": "insurance"
  },
  {
    "id": "exit-intelligence-sjhr-nonprofit",
    "name": "Exit Intelligence",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Reads exit interview transcripts to surface patterns, sentiment, and the real reasons people leave.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Reads exit interview transcripts to surface patterns, sentiment, and the real reasons people leave.",
    "workflowSteps": [
      "Reveals systemic issues hidden in individual exits",
      "Quantifies sentiment objectively",
      "Drives retention strategy with evidence"
    ],
    "sampleOutput": "HR opens the dashboard and sees: '60% of recent exits cite limited growth paths — strongest signal among engineers.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/exit-intelligence-sjhr-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "leave-intelligence-sjhr-insurance",
    "name": "Leave Intelligence AI",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Analyzes leave patterns to catch Friday-Monday abuse, burnout risk, and compliance issues before HR has to ask.",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Analyzes leave patterns to catch Friday-Monday abuse, burnout risk, and compliance issues before HR has to ask.",
    "workflowSteps": [
      "Detects sandwich-leave patterns automatically",
      "Identifies employees at burnout risk",
      "Keeps leave compliance airtight"
    ],
    "sampleOutput": "An employee who's taken six Friday-Monday leaves this quarter is flagged with a suggested gentle check-in.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/leave-intelligence-sjhr-insurance",
    "vertical": "insurance"
  },
  {
    "id": "request-reviewer-sjhr-nonprofit",
    "name": "Request Pre-Review",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Pre-reviews WFH and Early Leaving requests, checks policy, spots patterns, and routes them to the right approver.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Pre-reviews WFH and Early Leaving requests, checks policy, spots patterns, and routes them to the right approver.",
    "workflowSteps": [
      "Cuts approver workload by 60%+",
      "Catches policy violations automatically",
      "Speeds up decisions for employees"
    ],
    "sampleOutput": "A WFH request hits the manager queue with a pre-review: 'Policy OK. 4th WFH this month — consider checking in.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/request-reviewer-sjhr-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "pom-analyzer-sjhr-real_estate",
    "name": "POM Evaluation Analyzer",
    "team": "Real Estate",
    "teamSlug": "real-estate",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Analyzes Performer of the Month evaluation data to recommend winners and surface judging gaps.",
    "integrations": [
      "MLS",
      "Follow Up Boss",
      "Zillow",
      "DocuSign"
    ],
    "workflowInput": "Analyzes Performer of the Month evaluation data to recommend winners and surface judging gaps.",
    "workflowSteps": [
      "Makes POM decisions defensible with data",
      "Removes recency bias from awards",
      "Recognizes the right person every month"
    ],
    "sampleOutput": "HR opens the page and sees ranked candidates with reasoning, plus a flag: '3 strong candidates received zero nominations from Sales.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/pom-analyzer-sjhr-real_estate",
    "vertical": "real_estate"
  },
  {
    "id": "attendance-intelligence-sjhr",
    "name": "Attendance Intelligence Agent",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Spots attendance patterns, flags anomalies, and forecasts staffing risks before they hurt delivery.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Spots attendance patterns, flags anomalies, and forecasts staffing risks before they hurt delivery.",
    "workflowSteps": [
      "Surfaces chronic late-comers and absenteeism trends without manual report-pulling",
      "Forecasts headcount risk so managers can plan around it",
      "Gives HR a one-click weekly read on the workforce"
    ],
    "sampleOutput": "A team lead opens the page and sees that three engineers in one pod have logged late arrivals 8+ times this month — with a recommendation to schedule a check-in.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/attendance-intelligence-sjhr",
    "vertical": "agency"
  },
  {
    "id": "exit-task-generator-sjhr",
    "name": "Exit Feedback Task Generator",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Reads exit interview feedback and creates the manager tasks needed to address it — no more lost insights.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Reads exit interview feedback and creates the manager tasks needed to address it — no more lost insights.",
    "workflowSteps": [
      "Turns exit feedback into accountable follow-through",
      "Closes the loop with the team that's staying",
      "Stops the same complaints from coming back"
    ],
    "sampleOutput": "An exit interview mentions weak onboarding — the agent files a task for the team lead: 'Review onboarding checklist with new joiners.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/exit-task-generator-sjhr",
    "vertical": "agency"
  },
  {
    "id": "one-on-one-monthly-report-sjhr",
    "name": "One-on-One Monthly Report Generator",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Generates a comprehensive monthly 1:1 compliance report for HR — who held them, who skipped, and what came up.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Generates a comprehensive monthly 1:1 compliance report for HR — who held them, who skipped, and what came up.",
    "workflowSteps": [
      "Tracks 1:1 discipline across the org",
      "Spots managers who avoid 1:1s",
      "Surfaces the themes employees actually raise"
    ],
    "sampleOutput": "HR pulls the monthly report: '87% on-time compliance. 3 managers below 50%. Top themes: workload, growth, tooling.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/one-on-one-monthly-report-sjhr",
    "vertical": "agency"
  },
  {
    "id": "onboarding-sentiment-sjhr-nonprofit",
    "name": "New Hire Sentiment Analyzer",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Reads new-hire feedback to identify what's working in onboarding and where joiners get stuck.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Reads new-hire feedback to identify what's working in onboarding and where joiners get stuck.",
    "workflowSteps": [
      "Improves onboarding faster than annual surveys",
      "Identifies what makes joiners succeed",
      "Reduces early-stage attrition"
    ],
    "sampleOutput": "A new joiner survey flags confusion about the dev environment — onboarding owners get a task: 'Update setup runbook.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/onboarding-sentiment-sjhr-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "hr-insights-sjhr-insurance",
    "name": "HR Insights Agent",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "AI-powered analysis across the whole HR dataset, surfacing the trends and risks that matter this week.",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "AI-powered analysis across the whole HR dataset, surfacing the trends and risks that matter this week.",
    "workflowSteps": [
      "Replaces hours of pivot-table work",
      "Highlights what changed since last week",
      "Answers ad-hoc HR questions on demand"
    ],
    "sampleOutput": "HR asks: 'Which teams have the highest leave usage this quarter?' and gets a chart, table, and one-paragraph summary.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/hr-insights-sjhr-insurance",
    "vertical": "insurance"
  },
  {
    "id": "cash-flow-forecaster-sjfc-healthcare",
    "name": "Cash Flow Forecaster",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Analyzes historical financial data to produce 3-month forward cash flow projections, collection efficiency trends, and actionable cash management recommendations.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Analyzes historical financial data to produce 3-month forward cash flow projections, collection efficiency trends, and actionable cash management recommendations.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Cash Flow Forecaster\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/cash-flow-forecaster-sjfc-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "gratuity-calculation-explainer-sjfc",
    "name": "Gratuity Calculation Explainer",
    "team": "Finance & Ops",
    "teamSlug": "finance",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "AI agent that provides detailed, bilingual (English/Bengali) explanations of gratuity calculations based on Bangladesh and India labor laws.",
    "integrations": [
      "QuickBooks",
      "Xero",
      "Stripe",
      "Excel"
    ],
    "workflowInput": "AI agent that provides detailed, bilingual (English/Bengali) explanations of gratuity calculations based on Bangladesh and India labor laws.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Gratuity Calculation Explainer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/gratuity-calculation-explainer-sjfc",
    "vertical": "agency"
  },
  {
    "id": "onboarding-velocity-sjhr",
    "name": "Onboarding Velocity AI",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Tracks every onboarding journey to surface at-risk hires, bottlenecks, and process gaps in real time.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Tracks every onboarding journey to surface at-risk hires, bottlenecks, and process gaps in real time.",
    "workflowSteps": [
      "Spots stalling new hires before week 2",
      "Surfaces which onboarding step blocks people",
      "Shortens time-to-productivity"
    ],
    "sampleOutput": "A new engineer hasn't completed access setup by day 4 — their manager gets a nudge with the exact step to unblock them.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/onboarding-velocity-sjhr",
    "vertical": "agency"
  },
  {
    "id": "onboarding-velocity-sjhr-mortgage",
    "name": "Onboarding Velocity AI",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Tracks every onboarding journey to surface at-risk hires, bottlenecks, and process gaps in real time.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Tracks every onboarding journey to surface at-risk hires, bottlenecks, and process gaps in real time.",
    "workflowSteps": [
      "Spots stalling new hires before week 2",
      "Surfaces which onboarding step blocks people",
      "Shortens time-to-productivity"
    ],
    "sampleOutput": "A new engineer hasn't completed access setup by day 4 — their manager gets a nudge with the exact step to unblock them.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/onboarding-velocity-sjhr-mortgage",
    "vertical": "mortgage"
  },
  {
    "id": "productivity-intelligence-sjhr",
    "name": "Productivity Intelligence Agent",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Reads workforce productivity signals to identify concerns and give HR clear, actionable recommendations.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Reads workforce productivity signals to identify concerns and give HR clear, actionable recommendations.",
    "workflowSteps": [
      "Identifies productivity dips before reviews",
      "Connects productivity to attendance, leave, and 1:1 themes",
      "Recommends specific HR actions"
    ],
    "sampleOutput": "The agent surfaces: 'Productivity in the support pod dropped 22% over 3 weeks; correlates with two open seats and rising overtime.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/productivity-intelligence-sjhr",
    "vertical": "agency"
  },
  {
    "id": "strategic-planning-agent-sjfc",
    "name": "Strategic Planning Agent",
    "team": "Finance & Ops",
    "teamSlug": "finance",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Analyzes financial data for growth opportunities, risk assessment, scenario modeling, budget optimization, and long-term strategic recommendations.",
    "integrations": [
      "QuickBooks",
      "Xero",
      "Stripe",
      "Excel"
    ],
    "workflowInput": "Analyzes financial data for growth opportunities, risk assessment, scenario modeling, budget optimization, and long-term strategic recommendations.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Strategic Planning Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/strategic-planning-agent-sjfc",
    "vertical": "agency"
  },
  {
    "id": "office-expense-analyzer-sjfc",
    "name": "Office Expense Analyzer",
    "team": "Finance & Ops",
    "teamSlug": "finance",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Analyzes local office expenses across Goa, Dhaka, and Sylhet to identify trends, anomalies, and cost optimization opportunities.",
    "integrations": [
      "QuickBooks",
      "Xero",
      "Stripe",
      "Excel"
    ],
    "workflowInput": "Analyzes local office expenses across Goa, Dhaka, and Sylhet to identify trends, anomalies, and cost optimization opportunities.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Office Expense Analyzer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/office-expense-analyzer-sjfc",
    "vertical": "agency"
  },
  {
    "id": "weekly-invoice-review-sjfc",
    "name": "Weekly Invoice Review Agent",
    "team": "Finance & Ops",
    "teamSlug": "finance",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Analyzes all pending invoices weekly and provides actionable insights for collection, including risk assessment and prioritized action items.",
    "integrations": [
      "QuickBooks",
      "Xero",
      "Stripe",
      "Excel"
    ],
    "workflowInput": "Analyzes all pending invoices weekly and provides actionable insights for collection, including risk assessment and prioritized action items.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Weekly Invoice Review Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/weekly-invoice-review-sjfc",
    "vertical": "agency"
  },
  {
    "id": "exit-intelligence-sjhr",
    "name": "Exit Intelligence",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Reads exit interview transcripts to surface patterns, sentiment, and the real reasons people leave.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Reads exit interview transcripts to surface patterns, sentiment, and the real reasons people leave.",
    "workflowSteps": [
      "Reveals systemic issues hidden in individual exits",
      "Quantifies sentiment objectively",
      "Drives retention strategy with evidence"
    ],
    "sampleOutput": "HR opens the dashboard and sees: '60% of recent exits cite limited growth paths — strongest signal among engineers.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/exit-intelligence-sjhr",
    "vertical": "agency"
  },
  {
    "id": "request-reviewer-sjhr",
    "name": "Request Pre-Review",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Pre-reviews WFH and Early Leaving requests, checks policy, spots patterns, and routes them to the right approver.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Pre-reviews WFH and Early Leaving requests, checks policy, spots patterns, and routes them to the right approver.",
    "workflowSteps": [
      "Cuts approver workload by 60%+",
      "Catches policy violations automatically",
      "Speeds up decisions for employees"
    ],
    "sampleOutput": "A WFH request hits the manager queue with a pre-review: 'Policy OK. 4th WFH this month — consider checking in.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/request-reviewer-sjhr",
    "vertical": "agency"
  },
  {
    "id": "leave-intelligence-sjhr",
    "name": "Leave Intelligence AI",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Analyzes leave patterns to catch Friday-Monday abuse, burnout risk, and compliance issues before HR has to ask.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Analyzes leave patterns to catch Friday-Monday abuse, burnout risk, and compliance issues before HR has to ask.",
    "workflowSteps": [
      "Detects sandwich-leave patterns automatically",
      "Identifies employees at burnout risk",
      "Keeps leave compliance airtight"
    ],
    "sampleOutput": "An employee who's taken six Friday-Monday leaves this quarter is flagged with a suggested gentle check-in.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/leave-intelligence-sjhr",
    "vertical": "agency"
  },
  {
    "id": "eph-slot-finder-qqcfw7",
    "name": "Slot Finder",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Instantly finds the next available appointment slot matching patient preferences and provider availability.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Instantly finds the next available appointment slot matching patient preferences and provider availability.",
    "workflowSteps": [
      "Search across all providers and locations",
      "Match appointment type to provider skills",
      "Respect patient preferences for time and provider"
    ],
    "sampleOutput": "Executive Summary: Slot Finder\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eph-slot-finder-qqcfw7",
    "vertical": "healthcare"
  },
  {
    "id": "eph-claims-preparer-l65ffl",
    "name": "Claims Preparer",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Automatically prepares insurance claims from appointment data, reducing manual entry and submission errors.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Automatically prepares insurance claims from appointment data, reducing manual entry and submission errors.",
    "workflowSteps": [
      "Extract billing codes from appointment records",
      "Validate claim data before submission",
      "Attach supporting documentation"
    ],
    "sampleOutput": "Executive Summary: Claims Preparer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eph-claims-preparer-l65ffl",
    "vertical": "healthcare"
  },
  {
    "id": "eph-eligibility-verifier-rhy3m8",
    "name": "Eligibility Verifier",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Verifies patient insurance eligibility in real time via Stedi before appointments to prevent claim denials.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Verifies patient insurance eligibility in real time via Stedi before appointments to prevent claim denials.",
    "workflowSteps": [
      "Real-time eligibility checks via Stedi API",
      "Verify coverage, deductibles, and copays",
      "Flag patients with inactive or changed insurance"
    ],
    "sampleOutput": "Executive Summary: Eligibility Verifier\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eph-eligibility-verifier-rhy3m8",
    "vertical": "healthcare"
  },
  {
    "id": "realtorhelp-lead-followup-fc4949",
    "name": "Lead Follow-Up Orchestrator",
    "team": "Real Estate",
    "teamSlug": "real-estate",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Responds to new leads instantly with context-aware messages and intelligent two-way qualification.",
    "integrations": [
      "MLS",
      "Follow Up Boss",
      "Zillow",
      "DocuSign"
    ],
    "workflowInput": "Solo agents respond to new leads hours late and lose them. Warm leads who said \"maybe in 6 months\" disappear because no system follows up based on behavior or timeline.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Lead Follow-Up Orchestrator\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/realtorhelp-lead-followup-fc4949",
    "vertical": "real_estate"
  },
  {
    "id": "deal-coach-w9kr6f",
    "name": "Deal Coach",
    "team": "Sales & CRM",
    "teamSlug": "sales-crm",
    "category": "operations",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Provides strategic coaching and recommendations for active deals based on pipeline data, client history, and deal stage.",
    "integrations": [
      "HubSpot",
      "Salesforce",
      "Zoom",
      "Slack"
    ],
    "workflowInput": "Provides strategic coaching and recommendations for active deals based on pipeline data, client history, and deal stage.\n\nCapabilities:\n- Analyzes deal health and pipeline position\n- Recommends next steps based on deal stage\n- Identifies risks and opportunities in active deals\n- Provides coaching tips personalized to deal context",
    "workflowSteps": [
      "Analyzes deal health and pipeline position",
      "Recommends next steps based on deal stage",
      "Identifies risks and opportunities in active deals"
    ],
    "sampleOutput": "Executive Summary: Deal Coach\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/deal-coach-w9kr6f",
    "vertical": "agency"
  },
  {
    "id": "lead-followup-research-bqd0di",
    "name": "Lead Research",
    "team": "Sales & CRM",
    "teamSlug": "sales-crm",
    "category": "operations",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Gathers lead intelligence using Perplexity AI for contact and company research before follow-up outreach.",
    "integrations": [
      "HubSpot",
      "Salesforce",
      "Zoom",
      "Slack"
    ],
    "workflowInput": "Gathers lead intelligence using Perplexity AI for contact and company research before follow-up outreach.\n\nCapabilities:\n- Researches contact backgrounds via web search\n- Finds recent news and social media presence\n- Uses 4-tier progressive fallback search strategy\n- Caches research results for 30-60 day freshness",
    "workflowSteps": [
      "Researches contact backgrounds via web search",
      "Finds recent news and social media presence",
      "Uses 4-tier progressive fallback search strategy"
    ],
    "sampleOutput": "Executive Summary: Lead Research\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/lead-followup-research-bqd0di",
    "vertical": "agency"
  },
  {
    "id": "meeting-intelligence-vzpq60",
    "name": "Meeting Intelligence",
    "team": "Meetings & Comms",
    "teamSlug": "meetings",
    "category": "operations",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Analyzes meeting transcripts for issue extraction, action items, decisions, and sentiment analysis.",
    "integrations": [
      "Zoom",
      "Google Meet",
      "Teams",
      "Slack"
    ],
    "workflowInput": "Analyzes meeting transcripts for issue extraction, action items, decisions, and sentiment analysis.\n\nCapabilities:\n- Extracts issues and action items from transcripts\n- Performs sentiment analysis on conversations\n- Identifies key decisions and follow-ups\n- Generates structured meeting summaries",
    "workflowSteps": [
      "Extracts issues and action items from transcripts",
      "Performs sentiment analysis on conversations",
      "Identifies key decisions and follow-ups"
    ],
    "sampleOutput": "Executive Summary: Meeting Intelligence\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/meeting-intelligence-vzpq60",
    "vertical": "agency"
  },
  {
    "id": "insurance-quick-deal-email-7af7f",
    "name": "Quick Deal Email",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Draft personalized follow-up emails in seconds",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Writing tailored client follow-ups eats hours each week",
    "workflowSteps": [
      "Generates context-aware follow-up emails",
      "Adapts tone to your style",
      "Includes deal details automatically"
    ],
    "sampleOutput": "Executive Summary: Quick Deal Email\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/insurance-quick-deal-email-7af7f",
    "vertical": "insurance"
  },
  {
    "id": "client-communication-coach-1ftgzp",
    "name": "Communication Coach",
    "team": "Meetings & Comms",
    "teamSlug": "meetings",
    "category": "operations",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Provides communication improvement suggestions based on client interaction patterns and sentiment trends.",
    "integrations": [
      "Zoom",
      "Google Meet",
      "Teams",
      "Slack"
    ],
    "workflowInput": "Provides communication improvement suggestions based on client interaction patterns and sentiment trends.\n\nCapabilities:\n- Analyzes communication patterns with clients\n- Tracks sentiment trends across interactions\n- Suggests communication improvements\n- Identifies tone and style best practices",
    "workflowSteps": [
      "Analyzes communication patterns with clients",
      "Tracks sentiment trends across interactions",
      "Suggests communication improvements"
    ],
    "sampleOutput": "Executive Summary: Communication Coach\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/client-communication-coach-1ftgzp",
    "vertical": "agency"
  },
  {
    "id": "weekly-update-generator-oixfke",
    "name": "Weekly Update Generator",
    "team": "Project Management",
    "teamSlug": "project-management",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Generates structured weekly reports from ActiveCollab tasks and meeting transcripts.",
    "integrations": [
      "Jira",
      "Monday.com",
      "ActiveCollab",
      "Linear"
    ],
    "workflowInput": "Generates structured weekly reports from ActiveCollab tasks and meeting transcripts.\n\nCapabilities:\n- Compiles weekly accomplishments and progress\n- Lists in-progress work and blockers\n- Plans next week activities from task data\n- Pulls insights from meeting transcripts",
    "workflowSteps": [
      "Compiles weekly accomplishments and progress",
      "Lists in-progress work and blockers",
      "Plans next week activities from task data"
    ],
    "sampleOutput": "Executive Summary: Weekly Update Generator\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/weekly-update-generator-oixfke",
    "vertical": "agency"
  },
  {
    "id": "technical-plan-generator-1ppcx6",
    "name": "Technical Plan Generator",
    "team": "Project Management",
    "teamSlug": "project-management",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Creates technical implementation plans from requirements — architecture decisions, task breakdown, and timeline estimates.",
    "integrations": [
      "Jira",
      "Monday.com",
      "ActiveCollab",
      "Linear"
    ],
    "workflowInput": "Creates technical implementation plans from requirements — architecture decisions, task breakdown, and timeline estimates.\n\nCapabilities:\n- Creates detailed technical implementation plans\n- Recommends architecture and design patterns\n- Breaks down work into actionable tasks\n- Provides effort and timeline estimates",
    "workflowSteps": [
      "Creates detailed technical implementation plans",
      "Recommends architecture and design patterns",
      "Breaks down work into actionable tasks"
    ],
    "sampleOutput": "Executive Summary: Technical Plan Generator\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/technical-plan-generator-1ppcx6",
    "vertical": "agency"
  },
  {
    "id": "task-ai-planner-s9dkd4",
    "name": "Task AI Planner",
    "team": "Project Management",
    "teamSlug": "project-management",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Generates subtask breakdowns from task description — creates actionable, prioritized subtask plans.",
    "integrations": [
      "Jira",
      "Monday.com",
      "ActiveCollab",
      "Linear"
    ],
    "workflowInput": "Generates subtask breakdowns from task description — creates actionable, prioritized subtask plans.\n\nCapabilities:\n- Breaks tasks into actionable subtasks\n- Prioritizes subtasks by dependency and importance\n- Estimates effort for each subtask\n- Available for parent tasks only",
    "workflowSteps": [
      "Breaks tasks into actionable subtasks",
      "Prioritizes subtasks by dependency and importance",
      "Estimates effort for each subtask"
    ],
    "sampleOutput": "Executive Summary: Task AI Planner\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/task-ai-planner-s9dkd4",
    "vertical": "agency"
  },
  {
    "id": "accountability-manager-nudge-9nc4sd",
    "name": "Manager Nudge",
    "team": "EOS & Leadership",
    "teamSlug": "eos",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Monthly nudge to managers to review and approve pending accountability charts from their team.",
    "integrations": [
      "Control Tower EOS",
      "Slack",
      "Google Sheets"
    ],
    "workflowInput": "Monthly nudge to managers to review and approve pending accountability charts from their team.\n\nCapabilities:\n- Identifies charts awaiting manager review\n- Sends targeted nudges to managers\n- Tracks review completion rates\n- Runs monthly on the 1st",
    "workflowSteps": [
      "Identifies charts awaiting manager review",
      "Sends targeted nudges to managers",
      "Tracks review completion rates"
    ],
    "sampleOutput": "Executive Summary: Manager Nudge\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/accountability-manager-nudge-9nc4sd",
    "vertical": "agency"
  },
  {
    "id": "mcc-roi-calculator-9fce0",
    "name": "ROI Calculator",
    "team": "Marketing & Growth",
    "teamSlug": "marketing",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Calculates true campaign ROI across channels",
    "integrations": [
      "LinkedIn",
      "Google Ads",
      "Meta Ads",
      "WordPress"
    ],
    "workflowInput": "ROI math is inconsistent across teams",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: ROI Calculator\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mcc-roi-calculator-9fce0",
    "vertical": "agency"
  },
  {
    "id": "employee-productivity-p6qinu",
    "name": "Employee Productivity",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Individual employee productivity analysis — time tracking, task completion, and trend analysis.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Individual employee productivity analysis — time tracking, task completion, and trend analysis.\n\nCapabilities:\n- Analyzes individual productivity metrics\n- Tracks time logging patterns\n- Measures task completion rates\n- Identifies trends and improvement areas",
    "workflowSteps": [
      "Analyzes individual productivity metrics",
      "Tracks time logging patterns",
      "Measures task completion rates"
    ],
    "sampleOutput": "Executive Summary: Employee Productivity\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/employee-productivity-p6qinu",
    "vertical": "agency"
  },
  {
    "id": "expense-analysis-agent-sjfc-nonprofit",
    "name": "Expense Analysis Agent",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Analyzes transactions, detects anomalies, suggests categories with confidence scores, and identifies potential duplicates or misclassifications.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Analyzes transactions, detects anomalies, suggests categories with confidence scores, and identifies potential duplicates or misclassifications.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Expense Analysis Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/expense-analysis-agent-sjfc-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "eph-kiosk-guide-hottxr",
    "name": "Kiosk Guide",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Assists patients at the check-in kiosk — from DOB verification to copay payment and appointment confirmation.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Assists patients at the check-in kiosk — from DOB verification to copay payment and appointment confirmation.",
    "workflowSteps": [
      "Verify patient identity via date of birth",
      "Display upcoming appointments",
      "Calculate and collect copay via Stripe"
    ],
    "sampleOutput": "Executive Summary: Kiosk Guide\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eph-kiosk-guide-hottxr",
    "vertical": "healthcare"
  },
  {
    "id": "integration-health-monitor-np-1mama",
    "name": "Integration Health Monitor",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Flags sync failures, stale connections, and broken webhooks across integrations.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Flags sync failures, stale connections, and broken webhooks across integrations.\n\nCapabilities:\n- Monitor all active integration connections\n- Detect sync failures and data discrepancies\n- Flag stale or expired API credentials\n- Track webhook delivery success rates",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Integration Health Monitor\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/integration-health-monitor-np-1mama",
    "vertical": "nonprofit"
  },
  {
    "id": "reconciliation-fund-accounting-np-f9cpq",
    "name": "Reconciliation & Fund Accounting Agent",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Matches incoming transactions from payment processors against your finance system. Flags unmatched payments, fee variances, and restricted fund mismatches.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Matches incoming transactions from payment processors against your finance system. Flags unmatched payments, fee variances, and restricted fund mismatches.\n\nCapabilities:\n- Match Stripe and PayPal transactions to QuickBooks entries\n- Flag fee variances exceeding thresholds\n- Detect restricted fund miscategorizations\n- Generate monthly reconciliation summaries",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Reconciliation & Fund Accounting Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/reconciliation-fund-accounting-np-f9cpq",
    "vertical": "nonprofit"
  },
  {
    "id": "eph-reminder-sender-1zb5jq",
    "name": "Reminder Sender",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Sends appointment reminders via voice, SMS, and email — reducing no-shows across all communication channels.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Sends appointment reminders via voice, SMS, and email — reducing no-shows across all communication channels.",
    "workflowSteps": [
      "Send voice, SMS, and email reminders",
      "Schedule reminders 24h before appointments",
      "Personalize messages with patient and appointment details"
    ],
    "sampleOutput": "Executive Summary: Reminder Sender\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eph-reminder-sender-1zb5jq",
    "vertical": "healthcare"
  },
  {
    "id": "ai-email-composer-np-m4y7h",
    "name": "AI Email Composer",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Draft personalized outreach emails with appropriate tone for different recipient types",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Draft personalized outreach emails with appropriate tone for different recipient types\n\nCapabilities:\n- Draft personalized outreach emails\n- Adapt tone per recipient type\n- Reference campaign and event context\n- Suggest effective subject lines",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: AI Email Composer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/ai-email-composer-np-m4y7h",
    "vertical": "nonprofit"
  },
  {
    "id": "eph-patient-verifier-upq0in",
    "name": "Patient Verifier",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Instantly verifies patient identity using date of birth, name, and record matching before any appointment action.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Instantly verifies patient identity using date of birth, name, and record matching before any appointment action.",
    "workflowSteps": [
      "Verify patient identity in under 3 seconds",
      "Cross-reference against the patients database",
      "Handle partial matches and disambiguation"
    ],
    "sampleOutput": "Executive Summary: Patient Verifier\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eph-patient-verifier-upq0in",
    "vertical": "healthcare"
  },
  {
    "id": "eph-call-analyzer-6obycg",
    "name": "Call Analyzer",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Reviews call transcripts and conversation data to surface insights, flag issues, and measure AI performance.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Reviews call transcripts and conversation data to surface insights, flag issues, and measure AI performance.",
    "workflowSteps": [
      "Analyze call transcript content and outcomes",
      "Flag calls with missed bookings or complaints",
      "Calculate call duration and AI response quality"
    ],
    "sampleOutput": "Executive Summary: Call Analyzer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eph-call-analyzer-6obycg",
    "vertical": "healthcare"
  },
  {
    "id": "eph-recall-scheduler-hu1xqu",
    "name": "Recall Scheduler",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Automates patient recall scheduling by identifying overdue patients and initiating contact workflows.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Automates patient recall scheduling by identifying overdue patients and initiating contact workflows.",
    "workflowSteps": [
      "Identify patients due for recall",
      "Generate recall contact lists",
      "Trigger outbound reminder calls"
    ],
    "sampleOutput": "Executive Summary: Recall Scheduler\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eph-recall-scheduler-hu1xqu",
    "vertical": "healthcare"
  },
  {
    "id": "eph-availability-planner-s5fb3x",
    "name": "Availability Planner",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Manages provider schedules, time-off blocks, and operatory assignments to keep availability accurate.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Manages provider schedules, time-off blocks, and operatory assignments to keep availability accurate.",
    "workflowSteps": [
      "Manage provider availability windows",
      "Block time for non-appointment activities",
      "Sync availability with booking engine"
    ],
    "sampleOutput": "Executive Summary: Availability Planner\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eph-availability-planner-s5fb3x",
    "vertical": "healthcare"
  },
  {
    "id": "touring-ops-briefing-f86937",
    "name": "Operations Briefing Agent",
    "team": "Touring",
    "teamSlug": "touring",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Surfaces what matters today for a tour operator — bookings, availability gaps, guest issues — on a single Today screen.",
    "integrations": [
      "Beds24",
      "FareHarbor",
      "Viator",
      "Stripe"
    ],
    "workflowInput": "Tour operators start each day juggling spreadsheets, OTA inboxes, and channel dashboards to figure out what needs attention. Critical items get missed.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Operations Briefing Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/touring-ops-briefing-f86937",
    "vertical": "touring"
  },
  {
    "id": "touring-review-reply-51d04d",
    "name": "Review Reply Agent",
    "team": "Touring",
    "teamSlug": "touring",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Drafts on-brand replies to guest reviews from any OTA channel in seconds.",
    "integrations": [
      "Beds24",
      "FareHarbor",
      "Viator",
      "Stripe"
    ],
    "workflowInput": "Operators spend hours replying to Viator, GetYourGuide, Airbnb Experiences, and TripAdvisor reviews. Inconsistent tone and slow response times hurt rankings.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Review Reply Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/touring-review-reply-51d04d",
    "vertical": "touring"
  },
  {
    "id": "mcc-social-scheduler-c94af",
    "name": "Social Media Scheduler",
    "team": "Marketing & Growth",
    "teamSlug": "marketing",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Plans and schedules posts across LinkedIn, X, Instagram",
    "integrations": [
      "LinkedIn",
      "Google Ads",
      "Meta Ads",
      "WordPress"
    ],
    "workflowInput": "Cross-channel scheduling is fragmented",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Social Media Scheduler\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mcc-social-scheduler-c94af",
    "vertical": "agency"
  },
  {
    "id": "mcc-reporter-d56a8",
    "name": "Reporter",
    "team": "Marketing & Growth",
    "teamSlug": "marketing",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Generates weekly client performance reports",
    "integrations": [
      "LinkedIn",
      "Google Ads",
      "Meta Ads",
      "WordPress"
    ],
    "workflowInput": "Manual reporting eats account-manager hours",
    "workflowSteps": [
      "Weekly multi-source reports",
      "Branded PDF and slides",
      "Narrative commentary"
    ],
    "sampleOutput": "Executive Summary: Reporter\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mcc-reporter-d56a8",
    "vertical": "agency"
  },
  {
    "id": "real_estate-seo-researcher-18612",
    "name": "SEO Researcher",
    "team": "Real Estate",
    "teamSlug": "real-estate",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Keyword, SERP, and content gap research",
    "integrations": [
      "MLS",
      "Follow Up Boss",
      "Zillow",
      "DocuSign"
    ],
    "workflowInput": "SEO research takes hours per topic",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: SEO Researcher\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/real_estate-seo-researcher-18612",
    "vertical": "real_estate"
  },
  {
    "id": "mcc-proposal-generator-872f8",
    "name": "Proposal Generator",
    "team": "Sales & CRM",
    "teamSlug": "sales-crm",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Drafts SOWs and proposals from a brief",
    "integrations": [
      "Control Tower",
      "Slack",
      "Email",
      "Webhooks"
    ],
    "workflowInput": "Proposals take days to draft",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Proposal Generator\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mcc-proposal-generator-872f8",
    "vertical": "agency"
  },
  {
    "id": "insurance-technical-planner-87b66",
    "name": "Technical Planner",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Generate detailed technical implementation plans",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Engineers spend hours scoping work",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Technical Planner\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/insurance-technical-planner-87b66",
    "vertical": "insurance"
  },
  {
    "id": "technical-plan-generator-mortgage-abc04",
    "name": "Technical Planner",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Generates detailed technical implementation plans from high-level requirements",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Generates detailed technical implementation plans from high-level requirements\n\nCapabilities:\n- Converts business requirements into technical specs\n- Identifies architectural considerations and risks\n- Suggests implementation approaches and trade-offs\n- Creates developer-ready task breakdowns",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Technical Planner\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/technical-plan-generator-mortgage-abc04",
    "vertical": "mortgage"
  },
  {
    "id": "project-analyst-mortgage-abc02",
    "name": "Project Analyst",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Provides real-time project health analysis and delivery forecasts",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Provides real-time project health analysis and delivery forecasts\n\nCapabilities:\n- Monitors sprint velocity and delivery trends\n- Forecasts completion dates based on current progress\n- Identifies at-risk milestones and dependencies\n- Generates stakeholder-ready status reports",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Project Analyst\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/project-analyst-mortgage-abc02",
    "vertical": "mortgage"
  },
  {
    "id": "deal-daily-briefing-mortgage-wjcve",
    "name": "Daily Briefing",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Your morning summary of deals, priorities, and actions for the day",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Your morning summary of deals, priorities, and actions for the day\n\nCapabilities:\n- Summarizes your top deals and their current status\n- Highlights deals requiring immediate attention\n- Provides a prioritized action list for the day\n- Surfaces recent activity across your pipeline",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Daily Briefing\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/deal-daily-briefing-mortgage-wjcve",
    "vertical": "mortgage"
  },
  {
    "id": "quick-deal-email-mortgage-nhchi",
    "name": "Quick Deal Email",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Generate personalized follow-up emails for any deal in seconds",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Generate personalized follow-up emails for any deal in seconds\n\nCapabilities:\n- Drafts context-aware follow-up emails\n- Personalizes content based on deal stage and history\n- Suggests subject lines optimized for open rates\n- Adapts tone to match previous communication style",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Quick Deal Email\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/quick-deal-email-mortgage-nhchi",
    "vertical": "mortgage"
  },
  {
    "id": "deal-ai-chat-mortgage-i8ehf",
    "name": "Deal AI Chat",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Chat directly with your deal data — ask anything about your pipeline",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Chat directly with your deal data — ask anything about your pipeline\n\nCapabilities:\n- Answers natural language questions about your pipeline\n- Compares deals, stages, and team performance\n- Identifies patterns and trends across opportunities\n- Generates reports and summaries on demand",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Deal AI Chat\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/deal-ai-chat-mortgage-i8ehf",
    "vertical": "mortgage"
  },
  {
    "id": "meeting-summarizer-mortgage-pra6j",
    "name": "Meeting Summarizer",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Automatically generates concise summaries of your meeting transcripts",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Automatically generates concise summaries of your meeting transcripts\n\nCapabilities:\n- Produces structured summaries with key discussion points\n- Identifies decisions made during the meeting\n- Highlights risks and open questions\n- Formats output for easy sharing with stakeholders",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Meeting Summarizer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/meeting-summarizer-mortgage-pra6j",
    "vertical": "mortgage"
  },
  {
    "id": "action-item-extractor-mortgage-j74az",
    "name": "Action Extractor",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Extracts and assigns action items directly from your meeting transcripts",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Extracts and assigns action items directly from your meeting transcripts\n\nCapabilities:\n- Identifies all commitments and follow-ups from conversations\n- Assigns owners based on who agreed to each task\n- Sets suggested due dates based on context\n- Integrates extracted items into your task board",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Action Extractor\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/action-item-extractor-mortgage-j74az",
    "vertical": "mortgage"
  },
  {
    "id": "eos-pattern-detective-mortgage-0gc08",
    "name": "Pattern Detective",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Uncovers recurring issues and root causes hiding in your team data",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Uncovers recurring issues and root causes hiding in your team data\n\nCapabilities:\n- Identifies patterns in issues list over time\n- Connects recurring problems to root causes\n- Surfaces organizational health risks\n- Recommends systemic fixes over one-time patches",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Pattern Detective\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eos-pattern-detective-mortgage-0gc08",
    "vertical": "mortgage"
  },
  {
    "id": "eos-pod-health-mortgage-v42nj",
    "name": "Pod Health",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Monitors team pod health scores and surfaces burnout risks early",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Monitors team pod health scores and surfaces burnout risks early\n\nCapabilities:\n- Tracks individual and team health signals\n- Detects early burnout and disengagement indicators\n- Benchmarks pod health against targets\n- Recommends interventions before issues escalate",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Pod Health\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eos-pod-health-mortgage-v42nj",
    "vertical": "mortgage"
  },
  {
    "id": "eos-quarterly-digest-mortgage-abc01",
    "name": "Quarterly Digest",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Automatically compiles a comprehensive quarterly performance digest",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Automatically compiles a comprehensive quarterly performance digest\n\nCapabilities:\n- Aggregates rock completion rates and outcomes\n- Summarizes key wins, losses, and learnings\n- Benchmarks Q performance against prior quarters\n- Prepares executive-ready quarterly report drafts",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Quarterly Digest\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eos-quarterly-digest-mortgage-abc01",
    "vertical": "mortgage"
  },
  {
    "id": "code-review-generator-mortgage-abc05",
    "name": "Code Reviewer",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Generates thorough code review checklists and improvement suggestions",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Generates thorough code review checklists and improvement suggestions\n\nCapabilities:\n- Creates review checklists tailored to the change type\n- Identifies common code quality and security issues\n- Suggests refactoring opportunities\n- Generates PR description templates",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Code Reviewer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/code-review-generator-mortgage-abc05",
    "vertical": "mortgage"
  },
  {
    "id": "insurance-client-call-analyzer-6aef1",
    "name": "Client Call Analyzer",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Deep-dive analysis of client conversations and sentiment",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Reps miss upsell signals and churn risk on calls",
    "workflowSteps": [
      "Analyzes sentiment shifts",
      "Detects upsell/cross-sell signals",
      "Flags churn risk"
    ],
    "sampleOutput": "Executive Summary: Client Call Analyzer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/insurance-client-call-analyzer-6aef1",
    "vertical": "insurance"
  },
  {
    "id": "insurance-pod-health-f0a36",
    "name": "Pod Health",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Analyze team health metrics and get improvement suggestions",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Hard to spot team burnout or misalignment early",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Pod Health\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/insurance-pod-health-f0a36",
    "vertical": "insurance"
  },
  {
    "id": "insurance-quarterly-digest-e5a74",
    "name": "Quarterly Digest",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Generate comprehensive quarterly performance reports",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "QBR prep takes weeks",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Quarterly Digest\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/insurance-quarterly-digest-e5a74",
    "vertical": "insurance"
  },
  {
    "id": "insurance-project-analyst-49697",
    "name": "Project Analyst",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Get insights on project health, risks, and resource allocation",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "PMs lack early warnings on at-risk projects",
    "workflowSteps": [
      "Monitors timeline, budget, scope",
      "Early warning for at-risk projects",
      "Resource utilization analysis"
    ],
    "sampleOutput": "Executive Summary: Project Analyst\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/insurance-project-analyst-49697",
    "vertical": "insurance"
  },
  {
    "id": "insurance-code-reviewer-7eb12",
    "name": "Code Reviewer",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "AI-powered code review suggestions and best practices",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Reviews are slow and inconsistent",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Code Reviewer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/insurance-code-reviewer-7eb12",
    "vertical": "insurance"
  },
  {
    "id": "mcc-content-strategist-3d6f8",
    "name": "Content Strategist",
    "team": "Marketing & Growth",
    "teamSlug": "marketing",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Plans a 30-day editorial calendar tailored to each client",
    "integrations": [
      "Control Tower",
      "Slack",
      "Email",
      "Webhooks"
    ],
    "workflowInput": "Agencies struggle to plan consistent content across many clients",
    "workflowSteps": [
      "Builds editorial calendars per client",
      "Aligns topics to campaigns and personas",
      "Suggests cadence by channel"
    ],
    "sampleOutput": "Executive Summary: Content Strategist\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mcc-content-strategist-3d6f8",
    "vertical": "agency"
  },
  {
    "id": "mcc-linkedin-writer-15b71",
    "name": "LinkedIn Writer",
    "team": "Marketing & Growth",
    "teamSlug": "marketing",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Drafts on-brand LinkedIn posts in seconds",
    "integrations": [
      "LinkedIn",
      "Google Ads",
      "Meta Ads",
      "WordPress"
    ],
    "workflowInput": "Founders and execs struggle to post consistently on LinkedIn",
    "workflowSteps": [
      "Drafts posts in your brand voice",
      "Suggests hooks and CTAs",
      "Repurposes long-form into 5+ posts"
    ],
    "sampleOutput": "Executive Summary: LinkedIn Writer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mcc-linkedin-writer-15b71",
    "vertical": "agency"
  },
  {
    "id": "mcc-blog-writer-db7a8",
    "name": "Blog Writer",
    "team": "Marketing & Growth",
    "teamSlug": "marketing",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Long-form articles drafted from a brief and target keyword",
    "integrations": [
      "LinkedIn",
      "Google Ads",
      "Meta Ads",
      "WordPress"
    ],
    "workflowInput": "Agencies need volume blog content that ranks",
    "workflowSteps": [
      "SEO-aware long-form drafts",
      "Builds outlines from SERP",
      "Suggests internal links"
    ],
    "sampleOutput": "Executive Summary: Blog Writer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mcc-blog-writer-db7a8",
    "vertical": "agency"
  },
  {
    "id": "mcc-email-copywriter-a984f",
    "name": "Email Copywriter",
    "team": "Marketing & Growth",
    "teamSlug": "marketing",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Drafts campaign and lifecycle emails",
    "integrations": [
      "Control Tower",
      "Slack",
      "Email",
      "Webhooks"
    ],
    "workflowInput": "Email programs stall without dedicated copywriters",
    "workflowSteps": [
      "Subject line A/B variants",
      "Lifecycle sequences",
      "Promotional and transactional"
    ],
    "sampleOutput": "Executive Summary: Email Copywriter\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mcc-email-copywriter-a984f",
    "vertical": "agency"
  },
  {
    "id": "mcc-seo-researcher-50f49",
    "name": "SEO Researcher",
    "team": "Marketing & Growth",
    "teamSlug": "marketing",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Keyword, SERP, and content gap research",
    "integrations": [
      "LinkedIn",
      "Google Ads",
      "Meta Ads",
      "WordPress"
    ],
    "workflowInput": "SEO research takes hours per topic",
    "workflowSteps": [
      "Keyword clusters by intent",
      "SERP analysis",
      "Content gap detection"
    ],
    "sampleOutput": "Executive Summary: SEO Researcher\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mcc-seo-researcher-50f49",
    "vertical": "agency"
  },
  {
    "id": "mcc-competitor-analyzer-e71e9",
    "name": "Competitor Analyzer",
    "team": "Marketing & Growth",
    "teamSlug": "marketing",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Tracks competitor content, ads, and positioning",
    "integrations": [
      "LinkedIn",
      "Google Ads",
      "Meta Ads",
      "WordPress"
    ],
    "workflowInput": "Marketers lack a live view of competitor moves",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Competitor Analyzer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mcc-competitor-analyzer-e71e9",
    "vertical": "agency"
  },
  {
    "id": "mcc-persona-builder-1f97f",
    "name": "Persona Builder",
    "team": "Marketing & Growth",
    "teamSlug": "marketing",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Builds ICPs and buyer personas from real customer data",
    "integrations": [
      "LinkedIn",
      "Google Ads",
      "Meta Ads",
      "WordPress"
    ],
    "workflowInput": "Personas are vague and unused",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Persona Builder\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mcc-persona-builder-1f97f",
    "vertical": "agency"
  },
  {
    "id": "real_estate-linkedin-writer-e21f1",
    "name": "LinkedIn Writer",
    "team": "Real Estate",
    "teamSlug": "real-estate",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Drafts on-brand LinkedIn posts in seconds",
    "integrations": [
      "MLS",
      "Follow Up Boss",
      "Zillow",
      "DocuSign"
    ],
    "workflowInput": "Professionals struggle to post consistently on LinkedIn",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: LinkedIn Writer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/real_estate-linkedin-writer-e21f1",
    "vertical": "real_estate"
  },
  {
    "id": "insurance-linkedin-writer-4a835",
    "name": "LinkedIn Writer",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Drafts on-brand LinkedIn posts in seconds",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Professionals struggle to post consistently on LinkedIn",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: LinkedIn Writer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/insurance-linkedin-writer-4a835",
    "vertical": "insurance"
  },
  {
    "id": "nonprofit-linkedin-writer-17511",
    "name": "LinkedIn Writer",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Drafts on-brand LinkedIn posts in seconds",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Professionals struggle to post consistently on LinkedIn",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: LinkedIn Writer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/nonprofit-linkedin-writer-17511",
    "vertical": "nonprofit"
  },
  {
    "id": "healthcare-linkedin-writer-d52f9",
    "name": "LinkedIn Writer",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Drafts on-brand LinkedIn posts in seconds",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Professionals struggle to post consistently on LinkedIn",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: LinkedIn Writer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/healthcare-linkedin-writer-d52f9",
    "vertical": "healthcare"
  },
  {
    "id": "real_estate-email-copywriter-2e0f8",
    "name": "Email Copywriter",
    "team": "Real Estate",
    "teamSlug": "real-estate",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Drafts campaign and lifecycle emails",
    "integrations": [
      "MLS",
      "Follow Up Boss",
      "Zillow",
      "DocuSign"
    ],
    "workflowInput": "Email programs stall without dedicated copywriters",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Email Copywriter\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/real_estate-email-copywriter-2e0f8",
    "vertical": "real_estate"
  },
  {
    "id": "mortgage-email-copywriter-a36ca",
    "name": "Email Copywriter",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Drafts campaign and lifecycle emails",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Email programs stall without dedicated copywriters",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Email Copywriter\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mortgage-email-copywriter-a36ca",
    "vertical": "mortgage"
  },
  {
    "id": "insurance-email-copywriter-d4f0e",
    "name": "Email Copywriter",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Drafts campaign and lifecycle emails",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Email programs stall without dedicated copywriters",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Email Copywriter\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/insurance-email-copywriter-d4f0e",
    "vertical": "insurance"
  },
  {
    "id": "nonprofit-email-copywriter-81ed9",
    "name": "Email Copywriter",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Drafts campaign and lifecycle emails",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Email programs stall without dedicated copywriters",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Email Copywriter\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/nonprofit-email-copywriter-81ed9",
    "vertical": "nonprofit"
  },
  {
    "id": "healthcare-email-copywriter-1582a",
    "name": "Email Copywriter",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Drafts campaign and lifecycle emails",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Email programs stall without dedicated copywriters",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Email Copywriter\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/healthcare-email-copywriter-1582a",
    "vertical": "healthcare"
  },
  {
    "id": "real_estate-reporter-7ba6d",
    "name": "Reporter",
    "team": "Real Estate",
    "teamSlug": "real-estate",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Generates weekly performance reports",
    "integrations": [
      "MLS",
      "Follow Up Boss",
      "Zillow",
      "DocuSign"
    ],
    "workflowInput": "Manual reporting eats hours",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Reporter\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/real_estate-reporter-7ba6d",
    "vertical": "real_estate"
  },
  {
    "id": "mortgage-reporter-a6029",
    "name": "Reporter",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Generates weekly performance reports",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Manual reporting eats hours",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Reporter\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mortgage-reporter-a6029",
    "vertical": "mortgage"
  },
  {
    "id": "insurance-reporter-ff6e9",
    "name": "Reporter",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Generates weekly performance reports",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Manual reporting eats hours",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Reporter\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/insurance-reporter-ff6e9",
    "vertical": "insurance"
  },
  {
    "id": "nonprofit-reporter-dd84c",
    "name": "Reporter",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Generates weekly performance reports",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Manual reporting eats hours",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Reporter\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/nonprofit-reporter-dd84c",
    "vertical": "nonprofit"
  },
  {
    "id": "mortgage-seo-researcher-be383",
    "name": "SEO Researcher",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Keyword, SERP, and content gap research",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "SEO research takes hours per topic",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: SEO Researcher\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mortgage-seo-researcher-be383",
    "vertical": "mortgage"
  },
  {
    "id": "insurance-seo-researcher-5fda9",
    "name": "SEO Researcher",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Keyword, SERP, and content gap research",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "SEO research takes hours per topic",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: SEO Researcher\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/insurance-seo-researcher-5fda9",
    "vertical": "insurance"
  },
  {
    "id": "nonprofit-seo-researcher-a5521",
    "name": "SEO Researcher",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Keyword, SERP, and content gap research",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "SEO research takes hours per topic",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: SEO Researcher\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/nonprofit-seo-researcher-a5521",
    "vertical": "nonprofit"
  },
  {
    "id": "healthcare-seo-researcher-7703a",
    "name": "SEO Researcher",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Keyword, SERP, and content gap research",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "SEO research takes hours per topic",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: SEO Researcher\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/healthcare-seo-researcher-7703a",
    "vertical": "healthcare"
  },
  {
    "id": "real_estate-social-scheduler-bd9e7",
    "name": "Social Media Scheduler",
    "team": "Real Estate",
    "teamSlug": "real-estate",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Plans and schedules posts across channels",
    "integrations": [
      "MLS",
      "Follow Up Boss",
      "Zillow",
      "DocuSign"
    ],
    "workflowInput": "Cross-channel scheduling is fragmented",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Social Media Scheduler\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/real_estate-social-scheduler-bd9e7",
    "vertical": "real_estate"
  },
  {
    "id": "nonprofit-social-scheduler-17916",
    "name": "Social Media Scheduler",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Plans and schedules posts across channels",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Cross-channel scheduling is fragmented",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Social Media Scheduler\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/nonprofit-social-scheduler-17916",
    "vertical": "nonprofit"
  },
  {
    "id": "healthcare-social-scheduler-e24da",
    "name": "Social Media Scheduler",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Plans and schedules posts across channels",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Cross-channel scheduling is fragmented",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Social Media Scheduler\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/healthcare-social-scheduler-e24da",
    "vertical": "healthcare"
  },
  {
    "id": "real_estate-blog-writer-185c5",
    "name": "Blog Writer",
    "team": "Real Estate",
    "teamSlug": "real-estate",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Long-form articles drafted from a brief and keyword",
    "integrations": [
      "MLS",
      "Follow Up Boss",
      "Zillow",
      "DocuSign"
    ],
    "workflowInput": "Volume blog content needs to rank",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Blog Writer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/real_estate-blog-writer-185c5",
    "vertical": "real_estate"
  },
  {
    "id": "mortgage-blog-writer-44d30",
    "name": "Blog Writer",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Long-form articles drafted from a brief and keyword",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Volume blog content needs to rank",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Blog Writer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mortgage-blog-writer-44d30",
    "vertical": "mortgage"
  },
  {
    "id": "nonprofit-blog-writer-eff90",
    "name": "Blog Writer",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Long-form articles drafted from a brief and keyword",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Volume blog content needs to rank",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Blog Writer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/nonprofit-blog-writer-eff90",
    "vertical": "nonprofit"
  },
  {
    "id": "healthcare-blog-writer-f0c3d",
    "name": "Blog Writer",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Long-form articles drafted from a brief and keyword",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Volume blog content needs to rank",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Blog Writer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/healthcare-blog-writer-f0c3d",
    "vertical": "healthcare"
  },
  {
    "id": "client-call-analyzer-mortgage-khjtj",
    "name": "Client Call Analyzer",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Deep analysis of client calls to surface sentiment, risks, and opportunities",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Deep analysis of client calls to surface sentiment, risks, and opportunities\n\nCapabilities:\n- Detects client sentiment and emotional tone\n- Identifies objections and buying signals\n- Surfaces relationship risks before they escalate\n- Recommends follow-up strategies based on call content",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Client Call Analyzer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/client-call-analyzer-mortgage-khjtj",
    "vertical": "mortgage"
  },
  {
    "id": "eph-outbound-reminder-t6b40b",
    "name": "Outbound Reminder",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Proactively calls patients before appointments to confirm, cancel, or reschedule — reducing no-shows automatically.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Proactively calls patients before appointments to confirm, cancel, or reschedule — reducing no-shows automatically.",
    "workflowSteps": [
      "Initiate automated reminder calls 24h before appointments",
      "Handle CONFIRM, CANCEL, and RESCHEDULE responses",
      "Update appointment status in real time"
    ],
    "sampleOutput": "Executive Summary: Outbound Reminder\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eph-outbound-reminder-t6b40b",
    "vertical": "healthcare"
  },
  {
    "id": "mcc-status-update-d27f8",
    "name": "Status Update Writer",
    "team": "Marketing & Growth",
    "teamSlug": "marketing",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Drafts weekly client status updates",
    "integrations": [
      "Control Tower",
      "Slack",
      "Email",
      "Webhooks"
    ],
    "workflowInput": "Status updates are skipped when busy",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Status Update Writer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mcc-status-update-d27f8",
    "vertical": "agency"
  },
  {
    "id": "one-on-one-insights-sjhr-mortgage",
    "name": "One-on-One Insights Assistant",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Gives each manager personalized insights about their 1:1 cadence, themes, and recurring blockers.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Gives each manager personalized insights about their 1:1 cadence, themes, and recurring blockers.",
    "workflowSteps": [
      "Improves the quality of every 1:1",
      "Helps managers spot patterns across their team",
      "Makes 1:1s a strategic tool, not a calendar event"
    ],
    "sampleOutput": "A manager opens the page and sees: 'In the last 6 1:1s, two reports raised growth concerns — consider a career conversation.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/one-on-one-insights-sjhr-mortgage",
    "vertical": "mortgage"
  },
  {
    "id": "onboarding-quality-sjhr-nonprofit",
    "name": "Onboarding Quality Auditor",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Audits completed onboarding journeys to ensure process compliance and find what needs to be fixed.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Audits completed onboarding journeys to ensure process compliance and find what needs to be fixed.",
    "workflowSteps": [
      "Guarantees onboarding consistency across teams",
      "Catches missed steps before they hurt the new hire",
      "Documents compliance for audit"
    ],
    "sampleOutput": "A finished onboarding journey is scored — 92% complete, missing 'Manager 30-day check-in.' A follow-up is auto-created.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/onboarding-quality-sjhr-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "hr-insights-sjhr-real_estate",
    "name": "HR Insights Agent",
    "team": "Real Estate",
    "teamSlug": "real-estate",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "AI-powered analysis across the whole HR dataset, surfacing the trends and risks that matter this week.",
    "integrations": [
      "MLS",
      "Follow Up Boss",
      "Zillow",
      "DocuSign"
    ],
    "workflowInput": "AI-powered analysis across the whole HR dataset, surfacing the trends and risks that matter this week.",
    "workflowSteps": [
      "Replaces hours of pivot-table work",
      "Highlights what changed since last week",
      "Answers ad-hoc HR questions on demand"
    ],
    "sampleOutput": "HR asks: 'Which teams have the highest leave usage this quarter?' and gets a chart, table, and one-paragraph summary.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/hr-insights-sjhr-real_estate",
    "vertical": "real_estate"
  },
  {
    "id": "hr-insights-sjhr-healthcare",
    "name": "HR Insights Agent",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "AI-powered analysis across the whole HR dataset, surfacing the trends and risks that matter this week.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "AI-powered analysis across the whole HR dataset, surfacing the trends and risks that matter this week.",
    "workflowSteps": [
      "Replaces hours of pivot-table work",
      "Highlights what changed since last week",
      "Answers ad-hoc HR questions on demand"
    ],
    "sampleOutput": "HR asks: 'Which teams have the highest leave usage this quarter?' and gets a chart, table, and one-paragraph summary.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/hr-insights-sjhr-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "exit-trends-6month-sjhr-nonprofit",
    "name": "Exit Trends 6-Month Analyzer",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Looks across six months of exit feedback to identify trends, patterns, and strategic risks for leadership.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Looks across six months of exit feedback to identify trends, patterns, and strategic risks for leadership.",
    "workflowSteps": [
      "Shifts exit insight from reactive to strategic",
      "Connects departures to org changes",
      "Gives the board defensible data"
    ],
    "sampleOutput": "A quarterly leadership review opens with: 'Attrition in the design team doubled after the reorg; cited reasons: unclear ownership.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/exit-trends-6month-sjhr-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "feedback-task-creator-sjhr-nonprofit",
    "name": "Feedback Task Creator",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Scans employee feedback for issues that need manager attention and generates actionable follow-up tasks.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Scans employee feedback for issues that need manager attention and generates actionable follow-up tasks.",
    "workflowSteps": [
      "Ensures feedback never gets lost in a doc",
      "Routes concerns to the right manager automatically",
      "Makes employees feel heard"
    ],
    "sampleOutput": "An employee mentions burnout in their 1:1 form — a task lands in their manager's queue: 'Discuss workload in next 1:1.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/feedback-task-creator-sjhr-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "team-insights-sjhr-mortgage",
    "name": "Team Insights Agent",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Gives each manager personalized analytics and forecasts about their team — attendance, productivity, and risks.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Gives each manager personalized analytics and forecasts about their team — attendance, productivity, and risks.",
    "workflowSteps": [
      "Manager-level analytics without a BI tool",
      "Forecasts team risks before they become incidents",
      "Personalized to each manager's actual team"
    ],
    "sampleOutput": "A manager opens their dashboard: 'Your team's on-time rate dropped 8% this week. 1 member at burnout risk based on workload + leave.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/team-insights-sjhr-mortgage",
    "vertical": "mortgage"
  },
  {
    "id": "employee-weekly-snapshot-sjhr-real_estate",
    "name": "Employee Weekly Snapshot",
    "team": "Real Estate",
    "teamSlug": "real-estate",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Generates a short, HR-grade weekly snapshot for every active employee and stores it as immutable history.",
    "integrations": [
      "MLS",
      "Follow Up Boss",
      "Zillow",
      "DocuSign"
    ],
    "workflowInput": "Generates a short, HR-grade weekly snapshot for every active employee and stores it as immutable history.",
    "workflowSteps": [
      "Lets HR scroll an employee's week-by-week story in seconds",
      "Spots momentum shifts early",
      "Builds a defensible record for reviews"
    ],
    "sampleOutput": "An HR partner opens a profile and scrolls back 12 weeks — each week shows attendance, tasks, leave, and a one-line AI takeaway.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/employee-weekly-snapshot-sjhr-real_estate",
    "vertical": "real_estate"
  },
  {
    "id": "hr-weekly-trends-sjhr-real_estate",
    "name": "HR Weekly Trends Analyzer",
    "team": "Real Estate",
    "teamSlug": "real-estate",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Reads week-over-week trends and gives HR strategic insights to act on, not just numbers to look at.",
    "integrations": [
      "MLS",
      "Follow Up Boss",
      "Zillow",
      "DocuSign"
    ],
    "workflowInput": "Reads week-over-week trends and gives HR strategic insights to act on, not just numbers to look at.",
    "workflowSteps": [
      "Spots inflection points before they become problems",
      "Connects metrics across modules",
      "Recommends the next HR action"
    ],
    "sampleOutput": "The agent surfaces: 'Late arrivals jumped 18% this week — concentrated in the Mumbai office on Monday/Friday.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/hr-weekly-trends-sjhr-real_estate",
    "vertical": "real_estate"
  },
  {
    "id": "onboarding-sentiment-sjhr-mortgage",
    "name": "New Hire Sentiment Analyzer",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Reads new-hire feedback to identify what's working in onboarding and where joiners get stuck.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Reads new-hire feedback to identify what's working in onboarding and where joiners get stuck.",
    "workflowSteps": [
      "Improves onboarding faster than annual surveys",
      "Identifies what makes joiners succeed",
      "Reduces early-stage attrition"
    ],
    "sampleOutput": "A new joiner survey flags confusion about the dev environment — onboarding owners get a task: 'Update setup runbook.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/onboarding-sentiment-sjhr-mortgage",
    "vertical": "mortgage"
  },
  {
    "id": "insurance-deal-ai-chat-61b27",
    "name": "Deal AI Chat",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Ask anything about your deals, clients, and pipeline",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Reps need quick answers about deal status without digging through CRM",
    "workflowSteps": [
      "Answers questions about deal status and contacts",
      "Cross-references info across pipeline",
      "Provides win-rate insights"
    ],
    "sampleOutput": "Executive Summary: Deal AI Chat\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/insurance-deal-ai-chat-61b27",
    "vertical": "insurance"
  },
  {
    "id": "healthcare-reporter-79e60",
    "name": "Reporter",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Generates weekly performance reports",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Manual reporting eats hours",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Reporter\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/healthcare-reporter-79e60",
    "vertical": "healthcare"
  },
  {
    "id": "meeting-efficiency-analyzer-mortgage-cv5b9",
    "name": "Efficiency Analyzer",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Scores your meetings on effectiveness and suggests improvements",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Scores your meetings on effectiveness and suggests improvements\n\nCapabilities:\n- Rates meetings on clarity, engagement, and outcomes\n- Identifies talking time imbalances\n- Flags meetings without clear action items\n- Tracks efficiency trends over time",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Efficiency Analyzer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/meeting-efficiency-analyzer-mortgage-cv5b9",
    "vertical": "mortgage"
  },
  {
    "id": "exit-trends-6month-sjhr-mortgage",
    "name": "Exit Trends 6-Month Analyzer",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Looks across six months of exit feedback to identify trends, patterns, and strategic risks for leadership.",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Looks across six months of exit feedback to identify trends, patterns, and strategic risks for leadership.",
    "workflowSteps": [
      "Shifts exit insight from reactive to strategic",
      "Connects departures to org changes",
      "Gives the board defensible data"
    ],
    "sampleOutput": "A quarterly leadership review opens with: 'Attrition in the design team doubled after the reorg; cited reasons: unclear ownership.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/exit-trends-6month-sjhr-mortgage",
    "vertical": "mortgage"
  },
  {
    "id": "hr-weekly-team-digest-sjhr-real_estate",
    "name": "HR Weekly Team Digest",
    "team": "Real Estate",
    "teamSlug": "real-estate",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Compiles a comprehensive weekly summary of team health metrics across every department for leadership.",
    "integrations": [
      "MLS",
      "Follow Up Boss",
      "Zillow",
      "DocuSign"
    ],
    "workflowInput": "Compiles a comprehensive weekly summary of team health metrics across every department for leadership.",
    "workflowSteps": [
      "Gives leadership one place to read the company's pulse",
      "Saves HR a half-day of weekly reporting",
      "Standardizes the conversation across teams"
    ],
    "sampleOutput": "Every Monday morning, leadership opens a single digest: attendance, engagement, leave, attrition risk — by department.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/hr-weekly-team-digest-sjhr-real_estate",
    "vertical": "real_estate"
  },
  {
    "id": "onboarding-velocity-sjhr-healthcare",
    "name": "Onboarding Velocity AI",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Tracks every onboarding journey to surface at-risk hires, bottlenecks, and process gaps in real time.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Tracks every onboarding journey to surface at-risk hires, bottlenecks, and process gaps in real time.",
    "workflowSteps": [
      "Spots stalling new hires before week 2",
      "Surfaces which onboarding step blocks people",
      "Shortens time-to-productivity"
    ],
    "sampleOutput": "A new engineer hasn't completed access setup by day 4 — their manager gets a nudge with the exact step to unblock them.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/onboarding-velocity-sjhr-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "eph-payment-collector-vcamyy",
    "name": "Payment Collector",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Automates patient payment collection at kiosk check-in and via Stripe for outstanding balances.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Automates patient payment collection at kiosk check-in and via Stripe for outstanding balances.",
    "workflowSteps": [
      "Calculate copay and patient responsibility",
      "Create Stripe payment intents at check-in",
      "Process card payments securely"
    ],
    "sampleOutput": "Executive Summary: Payment Collector\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eph-payment-collector-vcamyy",
    "vertical": "healthcare"
  },
  {
    "id": "eph-aging-analyst-s9brtm",
    "name": "Aging Analyst",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Tracks outstanding claims and patient balances, identifies aging accounts, and flags collection priorities.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Tracks outstanding claims and patient balances, identifies aging accounts, and flags collection priorities.",
    "workflowSteps": [
      "Analyze claims aging by payer and date",
      "Identify high-priority unpaid balances",
      "Generate aging reports by time bucket"
    ],
    "sampleOutput": "Executive Summary: Aging Analyst\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eph-aging-analyst-s9brtm",
    "vertical": "healthcare"
  },
  {
    "id": "eph-registration-assistant-w0xkgr",
    "name": "Registration Assistant",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Guides new patients through the registration process with a secure, token-based self-service flow.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Guides new patients through the registration process with a secure, token-based self-service flow.",
    "workflowSteps": [
      "Generate secure registration token links",
      "Guide patients through multi-step registration",
      "Collect demographics, insurance, and consent"
    ],
    "sampleOutput": "Executive Summary: Registration Assistant\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eph-registration-assistant-w0xkgr",
    "vertical": "healthcare"
  },
  {
    "id": "crm-data-integrity-np-tiun2",
    "name": "CRM Data Integrity Agent",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Continuously scans your CRM for duplicate records, missing required fields, and stale donor profiles. Surfaces merge suggestions and data quality issues for review.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Continuously scans your CRM for duplicate records, missing required fields, and stale donor profiles. Surfaces merge suggestions and data quality issues for review.\n\nCapabilities:\n- Scan CRM for duplicate and incomplete records\n- Surface merge suggestions with confidence scores\n- Flag stale profiles with no activity in 12+ months\n- Track data quality score over time",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: CRM Data Integrity Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/crm-data-integrity-np-tiun2",
    "vertical": "nonprofit"
  },
  {
    "id": "eph-lead-manager-oe8txh",
    "name": "Lead Manager",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Tracks and manages prospective patient leads, automates follow-up calls, and converts leads to registered patients.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Tracks and manages prospective patient leads, automates follow-up calls, and converts leads to registered patients.",
    "workflowSteps": [
      "Track leads through a configurable pipeline",
      "Trigger automated follow-up call sequences",
      "Score leads by engagement level"
    ],
    "sampleOutput": "Executive Summary: Lead Manager\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eph-lead-manager-oe8txh",
    "vertical": "healthcare"
  },
  {
    "id": "grant-compliance-np-fj33z",
    "name": "Grant Compliance Agent",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Tracks active grant deadlines, monitors fund utilization against approved budgets, and flags spending anomalies or upcoming reporting requirements.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Tracks active grant deadlines, monitors fund utilization against approved budgets, and flags spending anomalies or upcoming reporting requirements.\n\nCapabilities:\n- Track grant deadlines and reporting requirements\n- Monitor fund utilization vs approved budgets\n- Flag spending anomalies and pace issues\n- Generate compliance summary documents",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Grant Compliance Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/grant-compliance-np-fj33z",
    "vertical": "nonprofit"
  },
  {
    "id": "board-reporting-np-only0",
    "name": "Board Reporting Agent",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Aggregates KPIs, financial snapshots, and engagement metrics from connected systems to generate draft board reports on a scheduled basis.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Aggregates KPIs, financial snapshots, and engagement metrics from connected systems to generate draft board reports on a scheduled basis.\n\nCapabilities:\n- Aggregate KPIs from all connected systems\n- Generate financial snapshots from QuickBooks data\n- Compile engagement metrics from Salesforce\n- Produce board-ready PDF reports",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Board Reporting Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/board-reporting-np-only0",
    "vertical": "nonprofit"
  },
  {
    "id": "grant-budget-watcher-np-rwi0l",
    "name": "Grant Budget Watcher",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Alerts when grant spending hits 75% or 90% of budget. Auto-drafts a variance explanation.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Alerts when grant spending hits 75% or 90% of budget. Auto-drafts a variance explanation.\n\nCapabilities:\n- Monitor grant spending against approved budgets in real-time\n- Trigger alerts at 75% and 90% utilization thresholds\n- Auto-draft variance explanation narratives\n- Generate budget-to-actual comparison reports",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Grant Budget Watcher\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/grant-budget-watcher-np-rwi0l",
    "vertical": "nonprofit"
  },
  {
    "id": "onboarding-checklist-ai-np-u4zmz",
    "name": "Onboarding Checklist AI",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Generates staff onboarding task lists from Knowledge Base documents.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Generates staff onboarding task lists from Knowledge Base documents.\n\nCapabilities:\n- Parse Knowledge Base documents for onboarding procedures\n- Generate role-specific task checklists\n- Track onboarding completion progress\n- Suggest process improvements from completion data",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Onboarding Checklist AI\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/onboarding-checklist-ai-np-u4zmz",
    "vertical": "nonprofit"
  },
  {
    "id": "governance-health-check-np-bn9cj",
    "name": "Governance Health Check",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Weekly compliance scan with findings, alerts, and recommendations",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Weekly compliance scan with findings, alerts, and recommendations\n\nCapabilities:\n- Analyze board composition and term status\n- Track assessment completion rates\n- Monitor meeting attendance and engagement\n- Generate governance health score (0–100)",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Governance Health Check\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/governance-health-check-np-bn9cj",
    "vertical": "nonprofit"
  },
  {
    "id": "board-request-responder-np-6uo63",
    "name": "Board Request Responder",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Draft and send professional responses to board member requests",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Draft and send professional responses to board member requests\n\nCapabilities:\n- Draft clear professional responses\n- Reference relevant KB policies\n- Suggest actionable next steps\n- Maintain consistent professional tone",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Board Request Responder\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/board-request-responder-np-6uo63",
    "vertical": "nonprofit"
  },
  {
    "id": "meeting-agenda-builder-np-vssuo",
    "name": "Meeting Agenda Builder",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Auto-populate meeting agendas based on context and past meetings",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Auto-populate meeting agendas based on context and past meetings\n\nCapabilities:\n- Build standard governance agenda structure\n- Pull in voting items and old business\n- Estimate time per agenda item\n- Reference last meeting outcomes",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Meeting Agenda Builder\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/meeting-agenda-builder-np-vssuo",
    "vertical": "nonprofit"
  },
  {
    "id": "committee-status-reporter-np-krdyq",
    "name": "Committee Status Reporter",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Weekly compilation of committee status for board meeting packets",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Weekly compilation of committee status for board meeting packets\n\nCapabilities:\n- Compile committee accomplishments\n- Surface in-progress items\n- Flag items needing board attention\n- Format for board packet inclusion",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Committee Status Reporter\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/committee-status-reporter-np-krdyq",
    "vertical": "nonprofit"
  },
  {
    "id": "event-coordination-assistant-np-qsc8d",
    "name": "Event Coordination Assistant",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Multi-touch event lifecycle automation with checklists and reminders",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Multi-touch event lifecycle automation with checklists and reminders\n\nCapabilities:\n- Generate pre-event logistics checklists\n- Track day-of execution items\n- Compile post-event follow-ups\n- Send reminders to assigned owners",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Event Coordination Assistant\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/event-coordination-assistant-np-qsc8d",
    "vertical": "nonprofit"
  },
  {
    "id": "task-extractor-np-v2vmh",
    "name": "Task Extractor",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Extract action items from meeting notes and summaries automatically",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Extract action items from meeting notes and summaries automatically\n\nCapabilities:\n- Identify concrete action items from notes\n- Assign responsible owner by name\n- Detect due dates from context\n- Add tasks to the task board",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Task Extractor\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/task-extractor-np-v2vmh",
    "vertical": "nonprofit"
  },
  {
    "id": "task-prioritizer-np-gyqhc",
    "name": "Task Prioritizer",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Morning priority stack with intelligent task ordering and follow-up drafts",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Morning priority stack with intelligent task ordering and follow-up drafts\n\nCapabilities:\n- Rank tasks by impact and deadline\n- Surface stalled or blocked items\n- Draft suggested follow-up messages\n- Group tasks by context",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Task Prioritizer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/task-prioritizer-np-gyqhc",
    "vertical": "nonprofit"
  },
  {
    "id": "ai-research-assistant-np-7zvip",
    "name": "AI Research Assistant",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Instant company and contact background research for outreach preparation",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Instant company and contact background research for outreach preparation\n\nCapabilities:\n- Research companies and contacts\n- Summarize relevant background\n- Surface mutual connections and context\n- Prepare outreach briefs",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: AI Research Assistant\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/ai-research-assistant-np-7zvip",
    "vertical": "nonprofit"
  },
  {
    "id": "eph-calendar-optimizer-hs0h8g",
    "name": "Calendar Optimizer",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Analyzes scheduling patterns to fill gaps, reduce wait times, and maximize provider utilization.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Analyzes scheduling patterns to fill gaps, reduce wait times, and maximize provider utilization.",
    "workflowSteps": [
      "Identify open slots and scheduling gaps",
      "Suggest optimal appointment times",
      "Balance provider workloads automatically"
    ],
    "sampleOutput": "Executive Summary: Calendar Optimizer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eph-calendar-optimizer-hs0h8g",
    "vertical": "healthcare"
  },
  {
    "id": "realtorhelp-listing-manager-623804",
    "name": "Listing Marketing & Operations Manager",
    "team": "Real Estate",
    "teamSlug": "real-estate",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Drafts MLS copy, creates marketing content, and coordinates vendors for every new listing.",
    "integrations": [
      "MLS",
      "Follow Up Boss",
      "Zillow",
      "DocuSign"
    ],
    "workflowInput": "Every new listing requires coordinating photographer, stager, sign installer, MLS entry, and social posts simultaneously. Marketing consistency suffers when stretched across multiple listings.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Listing Marketing & Operations Manager\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/realtorhelp-listing-manager-623804",
    "vertical": "real_estate"
  },
  {
    "id": "realtorhelp-client-reactivation-6f8897",
    "name": "Client Reactivation & Referral Assistant",
    "team": "Real Estate",
    "teamSlug": "real-estate",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Keeps past clients warm with personalized equity check-ins, life-event outreach, and referral capture.",
    "integrations": [
      "MLS",
      "Follow Up Boss",
      "Zillow",
      "DocuSign"
    ],
    "workflowInput": "Agents close deals, then go silent. Past clients list with another agent six months later because there is no system to stay in touch and capture repeat business.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Client Reactivation & Referral Assistant\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/realtorhelp-client-reactivation-6f8897",
    "vertical": "real_estate"
  },
  {
    "id": "realtorhelp-showing-feedback-9b85c5",
    "name": "Showing & Feedback Manager",
    "team": "Real Estate",
    "teamSlug": "real-estate",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Automates showing feedback requests, analyzes sentiment, and produces weekly seller reports.",
    "integrations": [
      "MLS",
      "Follow Up Boss",
      "Zillow",
      "DocuSign"
    ],
    "workflowInput": "Agents chase buyer agents for showing feedback, summarize vague responses for sellers, and look reactive. Sellers feel in the dark about listing performance.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Showing & Feedback Manager\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/realtorhelp-showing-feedback-9b85c5",
    "vertical": "real_estate"
  },
  {
    "id": "touring-channel-reconciler-0ca4e5",
    "name": "Channel Reconciler Agent",
    "team": "Touring",
    "teamSlug": "touring",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Flags double-bookings and inventory mismatches across OTA channels in real time.",
    "integrations": [
      "Beds24",
      "FareHarbor",
      "Viator",
      "Stripe"
    ],
    "workflowInput": "Selling the same tour on multiple OTAs (Viator, GetYourGuide, Airbnb, direct) leads to double-bookings and angry guests when inventory falls out of sync.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Channel Reconciler Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/touring-channel-reconciler-0ca4e5",
    "vertical": "touring"
  },
  {
    "id": "mcc-qbr-preparer-7e59a",
    "name": "QBR Preparer",
    "team": "Operations & Tech",
    "teamSlug": "agency",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Assembles quarterly business reviews",
    "integrations": [
      "Control Tower",
      "Slack",
      "Email",
      "Webhooks"
    ],
    "workflowInput": "QBRs take a week to build",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: QBR Preparer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mcc-qbr-preparer-7e59a",
    "vertical": "agency"
  },
  {
    "id": "event-intelligence-np-4houk",
    "name": "Event Intelligence Agent",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Analyzes post-event attendance data and suggests engagement tags, volunteer interest flags, and follow-up tasks for attendees not yet connected to your donor pipeline.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Analyzes post-event attendance data and suggests engagement tags, volunteer interest flags, and follow-up tasks for attendees not yet connected to your donor pipeline.\n\nCapabilities:\n- Analyze event attendance against CRM records\n- Flag untagged attendees for CRM updates\n- Identify volunteer interest signals\n- Generate post-event follow-up task lists",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Event Intelligence Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/event-intelligence-np-4houk",
    "vertical": "nonprofit"
  },
  {
    "id": "touring-revenue-optimizer-055954",
    "name": "Revenue Optimizer Agent",
    "team": "Touring",
    "teamSlug": "touring",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Yield, occupancy, and channel-mix recommendations with a rolling forecast.",
    "integrations": [
      "Beds24",
      "FareHarbor",
      "Viator",
      "Stripe"
    ],
    "workflowInput": "Tour operators price by gut feel and rarely rebalance channel commissions. Yield and occupancy suffer; high season is left on the table.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Revenue Optimizer Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/touring-revenue-optimizer-055954",
    "vertical": "touring"
  },
  {
    "id": "touring-guest-concierge-73bee0",
    "name": "Guest Concierge Agent",
    "team": "Touring",
    "teamSlug": "touring",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Pre-trip guest communications, FAQs, and upsell suggestions tailored to each booking.",
    "integrations": [
      "Beds24",
      "FareHarbor",
      "Viator",
      "Stripe"
    ],
    "workflowInput": "Guests ask the same pre-trip questions (meeting point, what to bring, weather, dietary) across email and chat. Operators answer manually and miss upsell windows.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Guest Concierge Agent\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/touring-guest-concierge-73bee0",
    "vertical": "touring"
  },
  {
    "id": "realtorhelp-transaction-coordinator-a3f788",
    "name": "Smart Transaction Coordinator",
    "team": "Real Estate",
    "teamSlug": "real-estate",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Extracts contract dates, monitors transaction emails, and sends reminders so no deadline is missed.",
    "integrations": [
      "MLS",
      "Follow Up Boss",
      "Zillow",
      "DocuSign"
    ],
    "workflowInput": "Agents manually track inspection deadlines, appraisal updates, and lender follow-ups. One missed deadline causes delays, angry clients, or a lost deal. Contract dates live in PDFs — never automatically in calendars.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Smart Transaction Coordinator\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/realtorhelp-transaction-coordinator-a3f788",
    "vertical": "real_estate"
  },
  {
    "id": "quick-deal-email-ue6l13",
    "name": "Quick Deal Email",
    "team": "Sales & CRM",
    "teamSlug": "sales-crm",
    "category": "operations",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Generates rapid email drafts in context of a specific deal, pulling relevant deal data and client info.",
    "integrations": [
      "HubSpot",
      "Salesforce",
      "Zoom",
      "Slack"
    ],
    "workflowInput": "Generates rapid email drafts in context of a specific deal, pulling relevant deal data and client info.\n\nCapabilities:\n- Drafts emails using deal context and client data\n- Adapts tone and style to client relationship\n- Includes relevant deal details automatically\n- Supports follow-up, intro, and proposal emails",
    "workflowSteps": [
      "Drafts emails using deal context and client data",
      "Adapts tone and style to client relationship",
      "Includes relevant deal details automatically"
    ],
    "sampleOutput": "Executive Summary: Quick Deal Email\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/quick-deal-email-ue6l13",
    "vertical": "agency"
  },
  {
    "id": "deal-coach-mortgage-hhybk",
    "name": "Deal Coach",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Real-time coaching and insights to help you win more deals",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Real-time coaching and insights to help you win more deals\n\nCapabilities:\n- Analyzes deal health and identifies risks\n- Provides tailored next-step recommendations\n- Surfaces competitive intelligence from your knowledge base\n- Tracks deal velocity and flags stalled opportunities",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Deal Coach\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/deal-coach-mortgage-hhybk",
    "vertical": "mortgage"
  },
  {
    "id": "bug-feature-planner-mortgage-abc03",
    "name": "Bug & Feature Planner",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Helps triage bugs and plan feature work with AI-powered prioritization",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Helps triage bugs and plan feature work with AI-powered prioritization\n\nCapabilities:\n- Triages and prioritizes incoming bugs by impact\n- Breaks down feature requests into actionable tasks\n- Estimates effort based on historical velocity\n- Balances bug fixes vs. new feature development",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Bug & Feature Planner\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/bug-feature-planner-mortgage-abc03",
    "vertical": "mortgage"
  },
  {
    "id": "mcc-client-manager-b4e17",
    "name": "Client Manager",
    "team": "Operations & Tech",
    "teamSlug": "agency",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Tracks account health and surfaces risks",
    "integrations": [
      "Control Tower",
      "Slack",
      "Email",
      "Webhooks"
    ],
    "workflowInput": "AMs miss early churn signals",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Client Manager\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mcc-client-manager-b4e17",
    "vertical": "agency"
  },
  {
    "id": "insurance-deal-coach-1fb1a",
    "name": "Deal Coach",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Get real-time coaching and strategy suggestions for your active insurance deals",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Insurance reps need real-time deal strategy and at-risk deal alerts",
    "workflowSteps": [
      "Analyzes deal pipeline and suggests next-best actions",
      "Identifies at-risk deals before they stall",
      "Provides competitor insights and objection-handling tips"
    ],
    "sampleOutput": "Executive Summary: Deal Coach\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/insurance-deal-coach-1fb1a",
    "vertical": "insurance"
  },
  {
    "id": "insurance-efficiency-analyzer-edfe7",
    "name": "Efficiency Analyzer",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Analyze meeting quality and get tips to improve",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Meetings run too long with poor outcomes",
    "workflowSteps": [
      "Scores meeting efficiency",
      "Identifies wasted time",
      "Suggests optimal duration"
    ],
    "sampleOutput": "Executive Summary: Efficiency Analyzer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/insurance-efficiency-analyzer-edfe7",
    "vertical": "insurance"
  },
  {
    "id": "insurance-eos-coach-ac3ca",
    "name": "EOS Coach",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Get guidance on implementing EOS methodology",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Teams struggle to run L10s, rocks, and IDS correctly",
    "workflowSteps": [
      "Guides through L10 meetings and rocks",
      "Helps resolve issues using IDS",
      "Templates for VTO, accountability charts, scorecards"
    ],
    "sampleOutput": "Executive Summary: EOS Coach\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/insurance-eos-coach-ac3ca",
    "vertical": "insurance"
  },
  {
    "id": "insurance-pattern-detective-4fc7c",
    "name": "Pattern Detective",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Identify recurring patterns in your organizational issues",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Same problems recur quarter after quarter",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Pattern Detective\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/insurance-pattern-detective-4fc7c",
    "vertical": "insurance"
  },
  {
    "id": "mcc-ad-copy-801f8",
    "name": "Ad Copy Generator",
    "team": "Marketing & Growth",
    "teamSlug": "marketing",
    "category": "operations",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Generates paid ad copy for Google, Meta, and LinkedIn",
    "integrations": [
      "LinkedIn",
      "Google Ads",
      "Meta Ads",
      "WordPress"
    ],
    "workflowInput": "Performance teams iterate slowly on creative",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Ad Copy Generator\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mcc-ad-copy-801f8",
    "vertical": "agency"
  },
  {
    "id": "mcc-campaign-planner-b8b35",
    "name": "Campaign Planner",
    "team": "Marketing & Growth",
    "teamSlug": "marketing",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Plans integrated campaigns from goal to deliverables",
    "integrations": [
      "Jira",
      "Monday.com",
      "ActiveCollab",
      "Linear"
    ],
    "workflowInput": "Launches are improvised and miss channels",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Campaign Planner\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mcc-campaign-planner-b8b35",
    "vertical": "agency"
  },
  {
    "id": "mcc-brand-voice-coach-eadd6",
    "name": "Brand Voice Coach",
    "team": "Marketing & Growth",
    "teamSlug": "marketing",
    "category": "operations",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Keeps every piece of content on-brand",
    "integrations": [
      "LinkedIn",
      "Google Ads",
      "Meta Ads",
      "WordPress"
    ],
    "workflowInput": "Content drifts across writers and channels",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Brand Voice Coach\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mcc-brand-voice-coach-eadd6",
    "vertical": "agency"
  },
  {
    "id": "mortgage-linkedin-writer-75ef2",
    "name": "LinkedIn Writer",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Drafts on-brand LinkedIn posts in seconds",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Professionals struggle to post consistently on LinkedIn",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: LinkedIn Writer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mortgage-linkedin-writer-75ef2",
    "vertical": "mortgage"
  },
  {
    "id": "mortgage-social-scheduler-1fe65",
    "name": "Social Media Scheduler",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Plans and schedules posts across channels",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Cross-channel scheduling is fragmented",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Social Media Scheduler\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mortgage-social-scheduler-1fe65",
    "vertical": "mortgage"
  },
  {
    "id": "insurance-blog-writer-794a1",
    "name": "Blog Writer",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Long-form articles drafted from a brief and keyword",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Volume blog content needs to rank",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Blog Writer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/insurance-blog-writer-794a1",
    "vertical": "insurance"
  },
  {
    "id": "attendance-intelligence-sjhr-insurance",
    "name": "Attendance Intelligence Agent",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Spots attendance patterns, flags anomalies, and forecasts staffing risks before they hurt delivery.",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Spots attendance patterns, flags anomalies, and forecasts staffing risks before they hurt delivery.",
    "workflowSteps": [
      "Surfaces chronic late-comers and absenteeism trends without manual report-pulling",
      "Forecasts headcount risk so managers can plan around it",
      "Gives HR a one-click weekly read on the workforce"
    ],
    "sampleOutput": "A team lead opens the page and sees that three engineers in one pod have logged late arrivals 8+ times this month — with a recommendation to schedule a check-in.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/attendance-intelligence-sjhr-insurance",
    "vertical": "insurance"
  },
  {
    "id": "employee-chat-sjfc",
    "name": "Employee AI Assistant",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Conversational AI assistant for internal employee questions across HR, policies, finance, and operations.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Conversational AI assistant for internal employee questions across HR, policies, finance, and operations.",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Employee AI Assistant\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/employee-chat-sjfc",
    "vertical": "agency"
  },
  {
    "id": "mcc-onboarding-concierge-dfa6b",
    "name": "Onboarding Concierge",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Runs new-client onboarding end to end",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Onboarding is ad-hoc and slow",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Onboarding Concierge\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mcc-onboarding-concierge-dfa6b",
    "vertical": "agency"
  },
  {
    "id": "insurance-bug-feature-planner-54023",
    "name": "Bug & Feature Planner",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Organize and prioritize bugs and feature requests",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Backlogs grow unmanaged",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Bug & Feature Planner\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/insurance-bug-feature-planner-54023",
    "vertical": "insurance"
  },
  {
    "id": "insurance-action-extractor-ac287",
    "name": "Action Extractor",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Automatically pull action items and assign owners",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Action items get lost after meetings",
    "workflowSteps": [
      "Scans transcripts for commitments",
      "Identifies owners",
      "Suggests deadlines"
    ],
    "sampleOutput": "Executive Summary: Action Extractor\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/insurance-action-extractor-ac287",
    "vertical": "insurance"
  },
  {
    "id": "insurance-daily-briefing-10a50",
    "name": "Daily Briefing",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Start your day with an AI-curated summary of pipeline changes",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Reps waste time scanning the pipeline each morning",
    "workflowSteps": [
      "Summarizes overnight pipeline movement and new leads",
      "Highlights deals approaching close date",
      "Flags stalled deals that need attention"
    ],
    "sampleOutput": "Executive Summary: Daily Briefing\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/insurance-daily-briefing-10a50",
    "vertical": "insurance"
  },
  {
    "id": "insurance-meeting-summarizer-0231e",
    "name": "Meeting Summarizer",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Standard",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "4 to 6 hrs/week",
    "speedupMultiplier": "6x faster",
    "description": "Get concise, actionable summaries from any meeting transcript",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Long meetings produce transcripts no one reads",
    "workflowSteps": [
      "Executive summaries from raw transcripts",
      "Extracts key decisions",
      "Identifies participants and contributions"
    ],
    "sampleOutput": "Executive Summary: Meeting Summarizer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/insurance-meeting-summarizer-0231e",
    "vertical": "insurance"
  },
  {
    "id": "mcc-ga4-analyst-96623",
    "name": "GA4 Analyst",
    "team": "Marketing & Growth",
    "teamSlug": "marketing",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Plain-English insights from your GA4 data",
    "integrations": [
      "LinkedIn",
      "Google Ads",
      "Meta Ads",
      "WordPress"
    ],
    "workflowInput": "GA4 is hard to read for non-analysts",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: GA4 Analyst\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mcc-ga4-analyst-96623",
    "vertical": "agency"
  },
  {
    "id": "mcc-conversion-auditor-27b31",
    "name": "Conversion Auditor",
    "team": "Marketing & Growth",
    "teamSlug": "marketing",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Audits funnels and flags conversion leaks",
    "integrations": [
      "LinkedIn",
      "Google Ads",
      "Meta Ads",
      "WordPress"
    ],
    "workflowInput": "Funnel issues hide in plain sight",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Conversion Auditor\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mcc-conversion-auditor-27b31",
    "vertical": "agency"
  },
  {
    "id": "mcc-social-insights-92de8",
    "name": "Social Insights",
    "team": "Marketing & Growth",
    "teamSlug": "marketing",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Engagement analytics across social channels",
    "integrations": [
      "LinkedIn",
      "Google Ads",
      "Meta Ads",
      "WordPress"
    ],
    "workflowInput": "Social data is scattered across platforms",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Social Insights\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mcc-social-insights-92de8",
    "vertical": "agency"
  },
  {
    "id": "mcc-feedback-synthesizer-ef725",
    "name": "Feedback Synthesizer",
    "team": "Operations & Tech",
    "teamSlug": "agency",
    "category": "operations",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Aggregates client feedback across channels",
    "integrations": [
      "Control Tower",
      "Slack",
      "Email",
      "Webhooks"
    ],
    "workflowInput": "Feedback is scattered and unactioned",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Feedback Synthesizer\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/mcc-feedback-synthesizer-ef725",
    "vertical": "agency"
  },
  {
    "id": "insurance-social-scheduler-5d1a7",
    "name": "Social Media Scheduler",
    "team": "Insurance",
    "teamSlug": "insurance",
    "category": "vertical",
    "tier": "Core",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "2 to 4 hrs/week",
    "speedupMultiplier": "4x faster",
    "description": "Plans and schedules posts across channels",
    "integrations": [
      "Applied Epic",
      "Vertafore",
      "AMS360",
      "Slack"
    ],
    "workflowInput": "Cross-channel scheduling is fragmented",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: Social Media Scheduler\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/insurance-social-scheduler-5d1a7",
    "vertical": "insurance"
  },
  {
    "id": "eos-coach-mortgage-c305z",
    "name": "EOS Coach",
    "team": "Mortgage",
    "teamSlug": "mortgage",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Guides your team through EOS principles, rocks, and quarterly planning",
    "integrations": [
      "Encompass",
      "LendingPad",
      "Fannie Mae",
      "Salesforce"
    ],
    "workflowInput": "Guides your team through EOS principles, rocks, and quarterly planning\n\nCapabilities:\n- Coaches on EOS methodology and best practices\n- Reviews rocks for clarity, measurability, and achievability\n- Facilitates L10 meeting preparation\n- Helps define and refine your Vision/Traction Organizer",
    "workflowSteps": [
      "Ingests input context and validates parameters against business schema",
      "Runs multi-step Gemini reasoning and cross-references organizational data",
      "Synthesizes structured deliverable and syncs updates to connected platforms"
    ],
    "sampleOutput": "Executive Summary: EOS Coach\n• Status: Operational & Verified\n• Key Finding: Processed context successfully with zero discrepancies\n• Action: Next steps and recommended actions dispatched to connected workflows.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/eos-coach-mortgage-c305z",
    "vertical": "mortgage"
  },
  {
    "id": "productivity-intelligence-sjhr-nonprofit",
    "name": "Productivity Intelligence Agent",
    "team": "Nonprofit",
    "teamSlug": "non-profit",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Reads workforce productivity signals to identify concerns and give HR clear, actionable recommendations.",
    "integrations": [
      "Salesforce NPSP",
      "Bloomerang",
      "QuickBooks",
      "Stripe"
    ],
    "workflowInput": "Reads workforce productivity signals to identify concerns and give HR clear, actionable recommendations.",
    "workflowSteps": [
      "Identifies productivity dips before reviews",
      "Connects productivity to attendance, leave, and 1:1 themes",
      "Recommends specific HR actions"
    ],
    "sampleOutput": "The agent surfaces: 'Productivity in the support pod dropped 22% over 3 weeks; correlates with two open seats and rising overtime.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/productivity-intelligence-sjhr-nonprofit",
    "vertical": "nonprofit"
  },
  {
    "id": "attendance-intelligence-sjhr-healthcare",
    "name": "Attendance Intelligence Agent",
    "team": "Healthcare",
    "teamSlug": "healthcare",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Spots attendance patterns, flags anomalies, and forecasts staffing risks before they hurt delivery.",
    "integrations": [
      "Epic",
      "AthenaHealth",
      "Cerner",
      "Stedi",
      "Twilio"
    ],
    "workflowInput": "Spots attendance patterns, flags anomalies, and forecasts staffing risks before they hurt delivery.",
    "workflowSteps": [
      "Surfaces chronic late-comers and absenteeism trends without manual report-pulling",
      "Forecasts headcount risk so managers can plan around it",
      "Gives HR a one-click weekly read on the workforce"
    ],
    "sampleOutput": "A team lead opens the page and sees that three engineers in one pod have logged late arrivals 8+ times this month — with a recommendation to schedule a check-in.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/attendance-intelligence-sjhr-healthcare",
    "vertical": "healthcare"
  },
  {
    "id": "productivity-intelligence-sjhr-real_estate",
    "name": "Productivity Intelligence Agent",
    "team": "Real Estate",
    "teamSlug": "real-estate",
    "category": "vertical",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Reads workforce productivity signals to identify concerns and give HR clear, actionable recommendations.",
    "integrations": [
      "MLS",
      "Follow Up Boss",
      "Zillow",
      "DocuSign"
    ],
    "workflowInput": "Reads workforce productivity signals to identify concerns and give HR clear, actionable recommendations.",
    "workflowSteps": [
      "Identifies productivity dips before reviews",
      "Connects productivity to attendance, leave, and 1:1 themes",
      "Recommends specific HR actions"
    ],
    "sampleOutput": "The agent surfaces: 'Productivity in the support pod dropped 22% over 3 weeks; correlates with two open seats and rising overtime.'",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/productivity-intelligence-sjhr-real_estate",
    "vertical": "real_estate"
  },
  {
    "id": "onboarding-quality-sjhr",
    "name": "Onboarding Quality Auditor",
    "team": "HR & People",
    "teamSlug": "hr",
    "category": "operations",
    "tier": "Enterprise",
    "trigger": "Manual",
    "triggerDetail": "On-demand 1-click execution in Control Tower",
    "model": "Gemini 3.0",
    "timeSaved": "8 to 12 hrs/week",
    "speedupMultiplier": "10x faster",
    "description": "Audits completed onboarding journeys to ensure process compliance and find what needs to be fixed.",
    "integrations": [
      "BambooHR",
      "Workday",
      "Slack",
      "Google Calendar"
    ],
    "workflowInput": "Audits completed onboarding journeys to ensure process compliance and find what needs to be fixed.",
    "workflowSteps": [
      "Guarantees onboarding consistency across teams",
      "Catches missed steps before they hurt the new hire",
      "Documents compliance for audit"
    ],
    "sampleOutput": "A finished onboarding journey is scored — 92% complete, missing 'Manager 30-day check-in.' A follow-up is auto-created.",
    "marketplaceUrl": "https://marketplace.collabai.software/listing/onboarding-quality-sjhr",
    "vertical": "agency"
  }
];
