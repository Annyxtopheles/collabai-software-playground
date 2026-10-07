export interface VerticalFAQ {
  question: string;
  answer: string;
}

export interface VerticalKPI {
  value: string;
  label: string;
}

export interface VerticalTestimonial {
  quote: string;
  name: string;
  role: string;
  metric?: string;
}

export interface VerticalAgent {
  name: string;
  role: string;
  description: string;
}

export interface VerticalUseCase {
  title: string;
  scenario: string;
  outcome: string;
  metric?: string;
}

export type WorkflowIconKey =
  | "doc-sparkle"
  | "checklist"
  | "slack"
  | "person-check"
  | "bar-chart"
  | "document"
  | "mail"
  | "people-eye"
  | "target";

export type WorkflowIconTone =
  | "blue"
  | "indigo"
  | "green"
  | "teal"
  | "amber"
  | "pink";

export interface VerticalWorkflowStep {
  actor: "agent" | "human" | "system";
  label: string;
  icon?: WorkflowIconKey;
  iconTone?: WorkflowIconTone;
}

export interface VerticalWorkflow {
  name: string;
  trigger: string;
  steps: VerticalWorkflowStep[];
  outcome: string;
  outcomeIcon?: WorkflowIconKey;
}

export interface VerticalPlaybook {
  overview: string;
  phases: { week: string; title: string; deliverables: string[] }[];
  outcomes: { label: string; value: string }[];
  quote?: { text: string; attribution: string };
}

export interface VerticalProductPositioning {
  controlTowerAngle: string;
  collabPlatformAngle: string;
}

export interface VerticalDemoLink {
  label: string;
  url: string;
  blurb: string;
}

export interface VerticalDemos {
  full?: VerticalDemoLink;
  lite?: VerticalDemoLink;
}

export interface VerticalSubBrand {
  /** Sub-brand product name, e.g. "ePhysician Control Tower". */
  name: string;
  /** Short tagline shown next to the name, e.g. "by CollabAI". */
  tagline?: string;
  /** Optional external website for the sub-brand. */
  url?: string;
  /** SEO tagline appended after the sub-brand name in <title>. */
  seoTagline?: string;
}

export interface VerticalConfig {
  slug: "agency" | "mortgage-bank" | "healthcare" | "non-profit" | "touring" | "pharma";
  /** URL slug (matches the route segment, e.g. "mortgage-bank"). */
  routeSlug: string;
  /** Display name used in nav, breadcrumbs, sub-page titles. */
  displayName: string;
  eyebrow: string;
  buyer: string;
  buyerSubtitle: string;
  /** Niche-specific subline used in the CollabAI Platform attribution band. */
  platformNiche: string;
  /** Display string for the per-industry agent count, e.g. "100+". */
  agentCount: string;
  /** Starting price string for the per-industry pricing card, e.g. "$5,000". */
  startingPrice?: string;
  /** Lower-case noun for the industry, used in copy like "healthcare agents". Defaults to displayName.toLowerCase(). */
  categoryNoun?: string;
  /** Optional sub-brand metadata (rendered as a badge on hub + pricing pages). */
  subBrand?: VerticalSubBrand;
  hero: {
    h1: string;
    sub: string;
    primaryCta: { label: string; url: string; external?: boolean };
    secondaryCta: { label: string; url: string; external?: boolean };
    badges: string[];
  };
  pains: { title: string; body: string }[];
  outcomes: VerticalKPI[];
  agents: VerticalAgent[];
  integrations: string[];
  compliance: string[];
  testimonials: VerticalTestimonial[];
  faqs: VerticalFAQ[];
  closingBadges?: string[];
  useCases: VerticalUseCase[];
  workflows: VerticalWorkflow[];
  playbook: VerticalPlaybook;
  productPositioning: VerticalProductPositioning;
  /** Optional live demo links (full product + lite/no-signup version). */
  demos?: VerticalDemos;
}

export const verticals: Record<string, VerticalConfig> = {
  agency: {
    slug: "agency",
    routeSlug: "agency",
    displayName: "Agencies",
    eyebrow: "For Agencies & Professional Services",
    agentCount: "66+",
    startingPrice: "$2,500",
    buyer: "For Managing Partners & COOs",
    buyerSubtitle:
      "Stop scope creep eating your margin. Stop knowledge walking out the door. Add an AI workforce to the tools your team already uses.",
    platformNiche: "Tuned for billable hours and client delivery.",
    hero: {
      h1: "Same Workflow. New Workforce.",
      sub: "Control Tower adds AI agents to HubSpot, Zoom, Drive, and Slack. 1+ year in production at SJ Innovation. 40+ hours saved per week, 2,500+ meetings auto-processed.",
      primaryCta: { label: "Book a Demo", url: "/book-demo" },
      secondaryCta: {
        label: "Try the Live Demo",
        url: "https://controltowerdemo.collabai.software/login/login",
        external: true,
      },
      badges: ["No signup required", "1+ year battle-tested", "SOC 2-aligned · GDPR"],
    },
    pains: [
      {
        title: "Copying meeting notes into tasks",
        body: "Then chasing people to finish them. Hours per week, every week.",
      },
      {
        title: "Status reporting overhead",
        body: "Slack pings, email threads, 'quick syncs' that aren't quick. A 20-person team loses 400+ hours/month.",
      },
      {
        title: "Context trapped in people's heads",
        body: "Notion, Confluence, nobody searches them. Knowledge walks out when employees leave.",
      },
    ],
    outcomes: [
      { value: "40+", label: "Hours saved per week" },
      { value: "2,500+", label: "Meetings auto-processed" },
      { value: "10,000+", label: "Agent tasks completed" },
      { value: "166", label: "Active projects tracked" },
    ],
    agents: [
      {
        name: "Deal Coach",
        role: "Sales & CRM",
        description: "Strategic coaching on every active deal based on pipeline, history, and stage.",
      },
      {
        name: "Meeting Intelligence",
        role: "Meetings",
        description: "Auto-extracts issues, action items, decisions, and sentiment from every call.",
      },
      {
        name: "AI Project Analyzer",
        role: "Project Management",
        description: "Flags timeline risk, scope creep, and blockers before they become billable disasters.",
      },
      {
        name: "EOS Triage Assistant",
        role: "EOS",
        description: "Triages issues with priority, severity, and department — your L10 prep, automated.",
      },
      {
        name: "Team Weekly AI Summary",
        role: "Team & Productivity",
        description: "Sunday-night briefings on productivity %, OKRs, utilization, GitHub, and reviews.",
      },
      {
        name: "Knowledge Librarian",
        role: "Knowledge",
        description: "Semantic search across every meeting, doc, and decision — finds what you mean.",
      },
      {
        name: "L10 Agenda Builder",
        role: "EOS",
        description: "Auto-populates the Level-10 agenda from overdue Rocks and open Issues.",
      },
      {
        name: "Task AI Chat",
        role: "Tasks",
        description: "Conversational assistant inside every task — answers, suggests, gives context.",
      },
    ],
    integrations: ["HubSpot", "Zoom", "Google Workspace", "Slack", "Monday", "Notion", "GitHub", "Outlook"],
    compliance: ["SOC 2-aligned controls", "GDPR", "Self-hosted option", "Audit logging on every action"],
    testimonials: [
      {
        quote:
          "Control Tower changed how we run the business. We used to spend Monday mornings catching up on what happened last week. Now the AI tells us before we even ask. Our L10 meetings actually take 90 minutes instead of running over.",
        name: "Leadership Team",
        role: "SJ Innovation",
        metric: "L10s on time",
      },
      {
        quote:
          "The Meeting Assistant alone was worth it. I used to spend 30 minutes after every client call typing up notes and creating tasks. Now I just end the Zoom and it's all done. That's 5+ hours a week back.",
        name: "Project Manager",
        role: "SJ Innovation",
        metric: "5+ hrs/week back",
      },
      {
        quote:
          "Finally, a knowledge base people actually use. Control Tower's AI search actually finds things because it understands what you mean, not just what you type.",
        name: "Operations Lead",
        role: "SJ Innovation",
        metric: "Knowledge base that works",
      },
    ],
    faqs: [
      {
        question: "Do we have to rip out HubSpot, Monday, or our PM tool?",
        answer:
          "No. Control Tower sits on top of your existing stack — HubSpot, Zoom, Drive, Slack, Monday, Notion. Your team keeps using the tools they know. The agents work in the background.",
      },
      {
        question: "How long does onboarding take?",
        answer:
          "Four weeks. Week 1 admin setup and integrations. Week 2 team training. Week 3 historical data import and agent fine-tuning. Week 4 go-live and optimization.",
      },
      {
        question: "Is it really battle-tested?",
        answer:
          "Yes — Control Tower has run inside SJ Innovation for over a year managing real projects, real clients, and real dollars. 40+ hours/week saved, 2,500+ meetings processed, 10,000+ agent tasks completed.",
      },
      {
        question: "What if we run EOS / Traction?",
        answer:
          "EOS is native. V/TO, Rocks, Scorecard, IDS, and Accountability Chart are built-in. The L10 agenda auto-populates from overdue Rocks and open Issues.",
      },
      {
        question: "Where does our data live?",
        answer:
          "Your VPC, your keys, your audit logs. We can deploy on infrastructure you control. We never train AI models on your data.",
      },
    ],
    useCases: [
      {
        title: "Auto-generate L10 agendas",
        scenario:
          "Sunday night, agents pull overdue Rocks, open Issues, and last week's IDS into a chair-ready agenda.",
        outcome: "L10 prep collapses from 90 min to 5 min",
        metric: "18×",
      },
      {
        title: "Catch scope creep before billing",
        scenario:
          "Project Analyzer scans Monday/Notion + meeting transcripts and flags out-of-scope requests in real time.",
        outcome: "Recover billable work that previously leaked",
        metric: "+12% margin",
      },
      {
        title: "Auto-draft client status reports",
        scenario: "Friday afternoon, agents assemble a per-client status from PM tool, GitHub, and meeting notes.",
        outcome: "PMs get 4+ hours back per week",
        metric: "4+ hrs/wk",
      },
      {
        title: "Search across every meeting & doc",
        scenario: "Knowledge Librarian indexes Zoom transcripts, Drive, Notion, and decisions.",
        outcome: "New hires ramp in days, not months",
        metric: "Semantic",
      },
    ],
    workflows: [
      {
        name: "Meeting → tasks → owners",
        trigger: "Zoom call ends",
        steps: [
          { actor: "agent", label: "Meeting Intelligence extracts decisions, action items, sentiment", icon: "doc-sparkle", iconTone: "blue" },
          { actor: "agent", label: "Task AI Chat creates tasks in Monday/Notion with owners + due dates", icon: "checklist", iconTone: "indigo" },
          { actor: "agent", label: "Slack DM sent to each owner with context", icon: "slack", iconTone: "green" },
          { actor: "human", label: "Owner accepts, edits, or reassigns in 1 click", icon: "person-check", iconTone: "green" },
        ],
        outcome: "Zero post-meeting admin. Tasks live in the tools your team already uses.",
        outcomeIcon: "target",
      },
      {
        name: "Monday Team Briefing",
        trigger: "Scheduled, Sunday 6pm",
        steps: [
          { actor: "agent", label: "Team Weekly AI pulls productivity %, OKRs, GitHub, reviews", icon: "bar-chart", iconTone: "teal" },
          { actor: "agent", label: "Drafts 1-page briefing per team with risks called out", icon: "document", iconTone: "indigo" },
          { actor: "system", label: "Email + Slack delivery to leads", icon: "mail", iconTone: "amber" },
          { actor: "human", label: "Lead reviews, opens Monday for L10 prep", icon: "people-eye", iconTone: "pink" },
        ],
        outcome: "Leadership starts Monday with the full picture, not asking 'what happened last week?'.",
        outcomeIcon: "bar-chart",
      },
    ],
    playbook: {
      overview:
        "A four-week rollout that puts AI agents on top of HubSpot, Monday/Notion, Zoom, and Slack — without disrupting how your team already works. Battle-tested at SJ Innovation across 1+ year of production use.",
      phases: [
        {
          week: "Week 1",
          title: "Connect & calibrate",
          deliverables: [
            "OAuth into HubSpot, Zoom, Drive, Slack, Monday",
            "Import last 90 days of meetings + projects",
            "Configure teams, OKRs, EOS settings",
          ],
        },
        {
          week: "Week 2",
          title: "Agent training",
          deliverables: [
            "Train Knowledge Librarian on docs + Notion",
            "Activate Meeting Intelligence on live calls",
            "L10 Agenda Builder dry-run with leadership",
          ],
        },
        {
          week: "Week 3",
          title: "Team enablement",
          deliverables: [
            "30-min team training session",
            "Team leads onboard to Monday briefings",
            "Task AI Chat live in 1 pilot team",
          ],
        },
        {
          week: "Week 4",
          title: "Go live",
          deliverables: [
            "All agents active company-wide",
            "Weekly office hours for first month",
            "Outcomes review at day 30 / 60 / 90",
          ],
        },
      ],
      outcomes: [
        { label: "Hours saved / week", value: "40+" },
        { label: "Meetings auto-processed", value: "2,500+" },
        { label: "Agent tasks completed", value: "10,000+" },
      ],
      quote: {
        text: "Our L10 meetings actually take 90 minutes instead of running over. The AI tells us what happened before we even ask.",
        attribution: "Leadership Team, SJ Innovation",
      },
    },
    productPositioning: {
      controlTowerAngle:
        "Your agency cockpit — teams, OKRs, EOS, and PM data unified into one view your leadership runs the business from.",
      collabPlatformAngle:
        "The runtime underneath: 100+ agents, semantic search across every meeting and doc, and the agent orchestration that ties it all together.",
    },
    demos: {
      full: {
        label: "Try the Live Demo",
        url: "https://controltowerdemo.collabai.software/login/",
        blurb: "Full Control Tower sandbox — pipeline, agents, meetings, reports.",
      },
      lite: {
        label: "Try the lite demo",
        url: "https://agencylite.collabai.software",
        blurb: "Lightweight tour of the agency build. Instant, no signup.",
      },
    },
  },

  "mortgage-bank": {
    slug: "mortgage-bank",
    routeSlug: "mortgage-bank",
    displayName: "Mortgage Banks",
    eyebrow: "For Mortgage Operations Teams",
    agentCount: "15+",
    startingPrice: "$8,999",
    categoryNoun: "mortgage",
    subBrand: {
      name: "Mortgage Control Tower",
      tagline: "by CollabAI",
      url: "https://mortgage.collabai.software/",
      seoTagline: "Private AI Control Tower for Mortgage Ops",
    },
    buyer: "For VPs of Operations & Branch Managers",
    buyerSubtitle:
      "Catch at-risk loans before borrowers complain. Stop tracking rate locks in spreadsheets. Run your pipeline by foresight, not firefighting.",
    platformNiche: "Tuned for LOS workflows and compliance.",
    hero: {
      h1: "AI Agents That Live Behind Your Firewall.",
      sub: "Real-time pipeline visibility, risk detection, and smart prioritization — deployed inside your VPC, powered by your own OpenAI, Anthropic, or Bedrock API keys. No replacing Encompass, LendingPad, or your CRM.",
      primaryCta: { label: "Book a Demo", url: "/book-demo" },
      secondaryCta: { label: "Try the Live Demo", url: "https://demomortgage.collabai.software/login", external: true },
      badges: ["Behind your firewall", "Bring your own API key", "SOC 2-aligned controls", "Self-hosted option"],
    },
    pains: [
      {
        title: "Logging into 3+ systems daily",
        body: "Encompass, the CRM, the spreadsheet, the email. The data is everywhere except where you need it.",
      },
      {
        title: "Discovering problems after borrowers complain",
        body: "By the time a loan is 'at risk,' it's already past due. You react instead of preventing.",
      },
      {
        title: "Spreadsheet-tracked rate locks",
        body: "One missed expiration costs more than a year of software. And it happens every month.",
      },
    ],
    outcomes: [
      { value: "23%", label: "Faster close times" },
      { value: "67%", label: "Fewer at-risk loans" },
      { value: "4 hrs", label: "Saved per manager / week" },
      { value: "$2.4M", label: "Saved in lock extensions" },
    ],
    agents: [
      {
        name: "Pipeline Prioritization Agent",
        role: "Pipeline Management",
        description: "Ranks open loans by urgency and surfaces stalled deals before they fall through.",
      },
      {
        name: "File Risk Agent",
        role: "Pipeline Management",
        description: "Scores every file against milestone SLAs and flags slippage with root cause.",
      },
      {
        name: "Rate Alert Intelligence Agent",
        role: "Pipeline Management",
        description: "Watches rate-lock expirations and triggers 7/3/1-day alerts across the pipeline.",
      },
      {
        name: "Underwriter Precheck Agent",
        role: "Compliance & Underwriting",
        description: "Reviews files against approval criteria before submission to underwriting.",
      },
      {
        name: "Compliance Screening Agent",
        role: "Compliance & Underwriting",
        description: "Flags HMDA and state-level regulatory issues in real time — no manual audits.",
      },
      {
        name: "Document Generation Agent",
        role: "Compliance & Underwriting",
        description: "Generates lender-formatted disclosures, condition letters, and approval packets.",
      },
      {
        name: "Daily Action Agent",
        role: "Coaching & Productivity",
        description: "Builds each user's morning to-do list based on their pipeline and deadlines.",
      },
      {
        name: "Loan Coaching Agent",
        role: "Coaching & Productivity",
        description: "Guides MLOs through approval rules and guidelines — senior processor on call 24/7.",
      },
      {
        name: "Action Items Agent",
        role: "Coaching & Productivity",
        description: "Captures, assigns, and tracks action items pulled directly from loan workflows.",
      },
      {
        name: "Branch Performance Coach",
        role: "Management & Oversight",
        description: "Real-time snapshot of team performance and pipeline health across loan officers.",
      },
      {
        name: "Manager Insight Agent",
        role: "Management & Oversight",
        description: "Surfaces who needs coaching, which deals need attention, and where bottlenecks are.",
      },
      {
        name: "Portfolio Summary Agent",
        role: "Management & Oversight",
        description: "Executive portfolio rollups with risk, volume, and trend breakdowns.",
      },
      {
        name: "Borrower Communication Agent",
        role: "Communication",
        description: "Drafts and sends borrower updates that match each loan's stage and risk.",
      },
      {
        name: "Email Intelligence Agent",
        role: "Communication",
        description: "Triages inbound borrower and partner email, extracts action items, links to the right loan.",
      },
      {
        name: "AI Chat Assistant",
        role: "Communication",
        description: "Conversational copilot grounded in the full loan file and knowledge base.",
      },
    ],
    integrations: [
      "Encompass",
      "LendingPad",
      "ICE Mortgage Tech",
      "Salesforce",
      "DocuSign",
      "Fannie Mae",
      "Freddie Mac",
      "Jungo",
      "Outlook",
      "Gmail",
      "Zoom",
    ],
    compliance: ["SOC 2-aligned controls", "HMDA monitoring", "Encryption at rest & in transit", "Self-hosted option"],
    testimonials: [
      {
        quote:
          "I used to spend the first two hours of every day just figuring out which loans needed attention. Now I know before I finish my coffee.",
        name: "Sarah M.",
        role: "Operations Manager, Regional Lender",
        metric: "2 hours saved daily",
      },
      {
        quote:
          "We caught three loans about to miss lock expirations in the first week. That alone paid for a year of the software.",
        name: "Michael R.",
        role: "VP of Operations, Mortgage Broker",
        metric: "$180K saved",
      },
      {
        quote:
          "Finally, a tool that shows me what I actually need to see without making me dig through five different systems.",
        name: "Jennifer L.",
        role: "Branch Manager, Credit Union",
        metric: "5 systems unified",
      },
    ],
    faqs: [
      {
        question: "Where does the AI run, and who has access to our data?",
        answer:
          "Mortgage Control Tower runs inside your VPC or self-hosted on infrastructure you control. Borrower data never leaves your firewall. You bring your own model API keys (OpenAI, Anthropic, Azure OpenAI, Bedrock), so model usage is billed and logged on your account — not ours.",
      },
      {
        question: "Do we have to replace our LOS?",
        answer:
          "No. Mortgage Control Tower sits on top of Encompass, LendingPad, ICE Mortgage Technology, or whatever you already use. No rip-and-replace.",
      },
      {
        question: "How fast can we be live?",
        answer: "Most operations teams are live in under 2 weeks. Integration is OAuth-based — no heavy IT lift.",
      },
      {
        question: "How does it handle rate lock expirations?",
        answer:
          "Automatic alerts at 7, 3, and 1 day before expiry. One team caught three near-misses in the first week — paying for the year.",
      },
      {
        question: "Is it SOC 2 aligned?",
        answer:
          "We implement SOC 2-aligned controls including encryption at rest and in transit, row-level security, a full audit log of every agent action, and role-based access controls. We are not yet SOC 2 Type II certified but are on that path.",
      },
      {
        question: "What about HMDA compliance?",
        answer:
          "The Compliance Monitor Agent flags HMDA-related issues in real time so your team stays compliant without manual audits.",
      },
    ],
    closingBadges: [
      "Behind your firewall",
      "Bring your own API key",
      "SOC 2-aligned controls",
      "Live in under 2 weeks",
    ],
    useCases: [
      {
        title: "Detect at-risk loans before borrowers complain",
        scenario: "File Risk Agent watches every open loan against milestone SLAs.",
        outcome: "67% fewer at-risk loans in pipeline",
        metric: "67%",
      },
      {
        title: "Never miss a rate lock expiration",
        scenario: "Alerts at 7, 3, and 1 day before expiry across the entire pipeline.",
        outcome: "$2.4M saved in lock extensions",
        metric: "$2.4M",
      },
      {
        title: "Pre-check files before underwriting",
        scenario: "Underwriting Pre-Check Agent scans against approval criteria.",
        outcome: "Drastic reduction in back-and-forth with UW",
        metric: "23% faster close",
      },
      {
        title: "Morning action list for every MLO",
        scenario: "Daily Action Item Agent ranks the day's work by deadline and dollar impact.",
        outcome: "Managers save 4 hrs/week",
        metric: "4 hrs/wk",
      },
    ],
    workflows: [
      {
        name: "At-risk loan detection",
        trigger: "Encompass milestone slips",
        steps: [
          { actor: "system", label: "LOS milestone delta detected" },
          { actor: "agent", label: "File Risk Agent scores risk and root cause" },
          { actor: "agent", label: "Pipeline Prioritization Agent re-ranks LO's queue" },
          { actor: "human", label: "LO + Manager get prioritized action list" },
        ],
        outcome: "Problems caught hours after they happen — not days after the borrower complains.",
      },
      {
        name: "Rate-lock guardian",
        trigger: "Scheduled, every morning",
        steps: [
          { actor: "agent", label: "Scans every open loan's lock expiry" },
          { actor: "agent", label: "Cross-checks doc completion vs days remaining" },
          { actor: "system", label: "Alert sent at 7d / 3d / 1d thresholds" },
          { actor: "human", label: "LO acts before extension cost" },
        ],
        outcome: "Lock expirations stop being a recurring cost line.",
      },
      {
        name: "Compliance monitor",
        trigger: "Every file change",
        steps: [
          { actor: "agent", label: "Compliance Monitor scans against HMDA + state rules" },
          { actor: "agent", label: "Flags issue with regulation cite" },
          { actor: "human", label: "Compliance officer reviews + clears" },
        ],
        outcome: "Real-time compliance instead of monthly audits.",
      },
    ],
    playbook: {
      overview:
        "A two-week rollout that adds AI agents on top of Encompass, LendingPad, or your existing LOS — no rip-and-replace, OAuth-based integration, live in under 14 days.",
      phases: [
        {
          week: "Days 1-3",
          title: "LOS connection",
          deliverables: [
            "OAuth into Encompass / LendingPad / ICE",
            "Pull last 12 months of pipeline history",
            "Map milestones, statuses, and roles",
          ],
        },
        {
          week: "Days 4-7",
          title: "Risk model calibration",
          deliverables: [
            "File Risk Agent trained on your historical at-risk patterns",
            "Lock expiry alert thresholds tuned to your products",
            "Compliance Monitor configured to your state rules + HMDA profile",
          ],
        },
        {
          week: "Days 8-11",
          title: "Pilot with 1 branch",
          deliverables: [
            "Live with 5-10 LOs",
            "Manager Insight dashboard for branch lead",
            "Daily Action Item agent firing every 7am",
          ],
        },
        {
          week: "Days 12-14",
          title: "Roll out",
          deliverables: [
            "All branches enabled",
            "Weekly metric review with VP of Ops",
            "30/60/90-day outcomes scorecard",
          ],
        },
      ],
      outcomes: [
        { label: "Faster close times", value: "23%" },
        { label: "Fewer at-risk loans", value: "67%" },
        { label: "Saved per manager / wk", value: "4 hrs" },
        { label: "Lock-extension savings", value: "$2.4M" },
      ],
      quote: {
        text: "We caught three loans about to miss lock expirations in the first week. That alone paid for a year of the software.",
        attribution: "Michael R., VP of Operations",
      },
    },
    productPositioning: {
      controlTowerAngle:
        "Mortgage Control Tower — pipeline prioritization, file risk, and compliance monitoring, deployed inside your perimeter on top of your existing LOS.",
      collabPlatformAngle:
        "The platform underneath: agent orchestration, semantic search across every borrower file, audit logs on every action.",
    },
    demos: {
      full: {
        label: "Try the Live Demo",
        url: "https://demomortgage.collabai.software/login",
        blurb: "Live Mortgage Control Tower — risk-sorted pipeline, lock alerts, broker workflows.",
      },
      lite: {
        label: "Try the lite demo",
        url: "https://mortgagelite.collabai.software/",
        blurb: "Lightweight preview of Mortgage Control Tower. Instant, no signup.",
      },
    },
  },

  healthcare: {
    slug: "healthcare",
    routeSlug: "healthcare",
    displayName: "Healthcare",
    eyebrow: "For Practices, Clinics & Healthcare Networks",
    agentCount: "22+",
    startingPrice: "$7,999",
    categoryNoun: "healthcare",
    subBrand: {
      name: "ePhysician Control Tower",
      tagline: "by CollabAI",
      url: "https://ephysician.biz/",
      seoTagline: "HIPAA-Ready AI Front Desk for Clinics",
    },
    buyer: "For Practice Owners, Administrators & CMOs",
    buyerSubtitle:
      "Replace front-desk phone queues with ePhysician's HIPAA-compliant voice agents. 24/7 coverage. Zero hold time. No hardware. Live in 10 minutes.",
    platformNiche: "Tuned for HIPAA-grade voice and scheduling.",
    hero: {
      h1: "AI That Answers Your Phones. Schedules. Verifies. Never Calls In Sick.",
      sub: "ePhysician replaces your front-desk phone queue with intelligent voice agents that book appointments, verify insurance, and confirm patient identity — 24 hours a day, without staff intervention.",
      primaryCta: { label: "Book a Demo", url: "/book-demo" },
      secondaryCta: { label: "Try the Live Demo", url: "https://demo.ephysician.biz/login", external: true },
      badges: ["HIPAA-ready", "No hardware required", "Live in under 10 minutes"],
    },
    pains: [
      {
        title: "Missed calls = lost revenue",
        body: "After-hours, lunch, peak periods. Every unanswered call is a patient who books somewhere else.",
      },
      {
        title: "Front-desk turnover",
        body: "Hiring, training, attrition. The phone queue is the hardest seat to keep filled — and the most expensive to lose.",
      },
      {
        title: "Insurance surprises at check-in",
        body: "Manual eligibility checks fail. Patients learn at the desk they aren't covered. Staff fields the complaint.",
      },
    ],
    outcomes: [
      { value: "24/7", label: "Inbound call coverage" },
      { value: "<10 min", label: "Time to go live" },
      { value: "Real-time", label: "Insurance eligibility" },
      { value: "0", label: "Hardware required" },
    ],
    agents: [
      {
        name: "Voice Scheduling Agent",
        role: "Inbound Calls",
        description:
          "Handles inbound patient calls end-to-end. Books appointments for new and existing patients, routes based on patient type, and confirms in real time.",
      },
      {
        name: "Insurance Verification Agent",
        role: "Eligibility",
        description:
          "Performs real-time insurance eligibility checks before any appointment is booked. No manual payer calls. No surprises at check-in.",
      },
      {
        name: "Identity & Eligibility Agent",
        role: "Security",
        description:
          "Verifies patient identity before any action is taken — using date of birth, name, and record matching — keeping PHI access secure.",
      },
      {
        name: "Appointment Availability Agent",
        role: "Scheduling",
        description:
          "Checks your live calendar in real time and surfaces open slots that match the patient's provider preference, appointment type, and location.",
      },
    ],
    integrations: ["eClinicalWorks", "NextHealth", "Twilio", "Stedi", "Sika AI", "OpenAI", "SendGrid", "SMTP"],
    compliance: [
      "HIPAA-ready infrastructure",
      "PHI access controls",
      "Encryption at rest & in transit",
      "Audit logging",
      "GDPR",
    ],
    testimonials: [
      {
        quote:
          "Our front desk used to lose 30+ calls a week to voicemail. After we pointed our line at ePhysician, the voicemail count dropped to near zero — and we stopped losing those appointments.",
        name: "Practice Administrator",
        role: "Multi-site primary care",
        metric: "30+ calls/wk recovered",
      },
    ],
    faqs: [
      {
        question: "Is it really HIPAA compliant?",
        answer:
          "Yes. ePhysician deploys on HIPAA-ready infrastructure with PHI access controls, encryption at rest and in transit, identity verification before any data access, and full audit logging.",
      },
      {
        question: "How does it integrate with our EHR?",
        answer:
          "Two-way calendar and clinical data sync via NextHealth and eClinicalWorks. New integrations added regularly. You connect only what you need.",
      },
      {
        question: "What does setup look like?",
        answer:
          "Three steps in under 10 minutes: (1) describe your practice in plain English, (2) the system selects and configures the right voice agents, (3) you forward your existing clinic number to ePhysician.",
      },
      {
        question: "Can a healthcare network white-label this?",
        answer:
          "Yes. Networks and local partners can offer ePhysician under their own brand. Each facility gets an isolated instance — separate data, separate configuration, branded experience.",
      },
      {
        question: "What about insurance verification?",
        answer:
          "Real-time payer eligibility checks via Stedi before every booking. Patients learn coverage on the call — not at the front desk.",
      },
    ],
    closingBadges: ["HIPAA-ready", "No hardware", "Live in 10 minutes"],
    useCases: [
      {
        title: "Replace front-desk phone queue",
        scenario: "Voice agent handles inbound patient calls 24/7, books appointments end-to-end.",
        outcome: "Recover 30+ missed calls per week",
        metric: "30+/wk",
      },
      {
        title: "Real-time insurance eligibility",
        scenario: "Verification Agent runs a Stedi check before any booking.",
        outcome: "Zero coverage surprises at check-in",
        metric: "Real-time",
      },
      {
        title: "After-hours appointment booking",
        scenario: "Patients call at 9pm, get scheduled in calendar overnight.",
        outcome: "Capture appointments competitors lose to voicemail",
        metric: "24/7",
      },
      {
        title: "White-label across a healthcare network",
        scenario: "Each facility gets an isolated, branded instance.",
        outcome: "Network-wide AI with per-site data isolation",
        metric: "Multi-tenant",
      },
    ],
    workflows: [
      {
        name: "Inbound patient call → booked",
        trigger: "Patient dials clinic number",
        steps: [
          { actor: "system", label: "Call forwarded to ePhysician voice agent" },
          { actor: "agent", label: "Identity & Eligibility Agent verifies DOB + name" },
          { actor: "agent", label: "Insurance Verification Agent runs Stedi eligibility" },
          { actor: "agent", label: "Availability Agent finds slot matching provider + type" },
          { actor: "agent", label: "Voice Scheduling Agent books + confirms" },
        ],
        outcome: "End-to-end booking with zero front-desk involvement, fully HIPAA-compliant.",
      },
    ],
    playbook: {
      overview:
        "Live in under 10 minutes. Describe your practice in plain English, the system selects the right voice agents, you forward your phone line. HIPAA-ready by default.",
      phases: [
        {
          week: "Minute 1-3",
          title: "Describe your practice",
          deliverables: [
            "Practice type, specialties, hours",
            "Provider list + appointment types",
            "EHR (eClinicalWorks / NextHealth)",
          ],
        },
        {
          week: "Minute 4-6",
          title: "Auto-configuration",
          deliverables: [
            "System selects voice agent set",
            "Insurance payer list configured via Stedi",
            "Calendar two-way sync established",
          ],
        },
        {
          week: "Minute 7-10",
          title: "Go live",
          deliverables: ["Forward your existing clinic number", "Test calls with your team", "Live with 24/7 coverage"],
        },
        {
          week: "Week 2+",
          title: "Optimize",
          deliverables: [
            "Review missed-call recovery metrics",
            "Tune voice agent flow",
            "Add network-wide white-label if multi-site",
          ],
        },
      ],
      outcomes: [
        { label: "Inbound coverage", value: "24/7" },
        { label: "Time to live", value: "<10 min" },
        { label: "Hardware required", value: "0" },
      ],
      quote: {
        text: "Our voicemail count dropped to near zero — and we stopped losing those appointments.",
        attribution: "Practice Administrator, multi-site primary care",
      },
    },
    productPositioning: {
      controlTowerAngle: "ePhysician Control Tower — the voice + scheduling platform that runs your front desk 24/7.",
      collabPlatformAngle:
        "The HIPAA-ready agent platform underneath: identity verification, audit logging, and PHI-safe orchestration.",
    },
    demos: {
      full: {
        label: "Try the Live Demo",
        url: "https://demo.ephysician.biz/login",
        blurb: "ePhysician — voice agent flow: Incoming → Verify → Slot → Booked.",
      },
      lite: {
        label: "Request Free Access",
        url: "https://ephysician.biz/",
        blurb: "Lightweight preview. Instant, no signup.",
      },
    },
  },

  "non-profit": {
    slug: "non-profit",
    routeSlug: "non-profit",
    displayName: "Nonprofits",
    eyebrow: "For Nonprofits & Boards",
    agentCount: "23+",
    startingPrice: "$1,500",
    categoryNoun: "nonprofit",
    subBrand: {
      name: "Nonprofit Control Tower",
      tagline: "by CollabAI",
      url: "https://www.nonprofitai.software/",
      seoTagline: "Free, Open-Source AI Ops Layer for Nonprofits",
    },
    buyer: "For Executive Directors & Board Chairs",
    buyerSubtitle:
      "Open-source AI for nonprofits — free to self-host, or $1,500/yr fully managed. From the boardroom to daily operations — connect your systems, automate the busywork, give your team time back for the mission.",
    platformNiche: "Tuned for grants, donors, and program ops.",
    hero: {
      h1: "Your Donors Deserve Better. Your Team Does Too. Control Tower Connects the Dots.",
      sub: "The operational intelligence layer that sits on top of your CRM, finance, and event systems — surfacing insights, automating busywork, and giving every role a purpose-built dashboard.",
      primaryCta: { label: "Book a Demo", url: "/book-demo" },
      secondaryCta: { label: "Try the Live Demo", url: "https://demo.nonprofitai.software/", external: true },
      badges: ["Free to self-host", "MIT License", "$1,500/yr managed", "SOC 2-aligned infrastructure"],
    },
    pains: [
      {
        title: "Tool sprawl",
        body: "Donor data in Salesforce, finances in QuickBooks, events in Eventbrite, grants in spreadsheets. Your team wastes hours switching between systems.",
      },
      {
        title: "Data quality decay",
        body: "Duplicates, incomplete profiles, and stale records silently erode your fundraising effectiveness — and nobody catches it until audit season.",
      },
      {
        title: "Manual busywork",
        body: "Writing thank-you letters, reconciling transactions, preparing board reports. Your team's talent is buried under repetitive tasks.",
      },
      {
        title: "No single source of truth",
        body: "The ED asks 'how are we doing?' and gets five different answers from five different systems.",
      },
    ],
    outcomes: [
      { value: "Free", label: "Self-host license cost (MIT)" },
      { value: "16", label: "Operations AI agents" },
      { value: "10", label: "Board Governance agents" },
      { value: "8", label: "Modular features" },
    ],
    agents: [
      {
        name: "Deal Coach",
        role: "Donor Intelligence",
        description: "Real-time coaching on donor cultivation strategies based on giving history and pipeline stage.",
      },
      {
        name: "Daily Briefing",
        role: "Donor Intelligence",
        description: "Morning digest of pipeline changes and recommended actions for development staff.",
      },
      {
        name: "Quick Email",
        role: "Donor Intelligence",
        description: "Drafts personalized donor emails using donor context, history, and your voice.",
      },
      {
        name: "Deal AI Chat",
        role: "Donor Intelligence",
        description: "Conversational Q&A across your donor pipeline — ask anything, get an answer.",
      },
      {
        name: "Meeting Summarizer",
        role: "Meeting AI",
        description: "Auto-generates summaries from meeting transcripts so nothing is lost.",
      },
      {
        name: "Action Extractor",
        role: "Meeting AI",
        description: "Pulls action items from meetings and assigns them to team members.",
      },
      {
        name: "Efficiency Analyzer",
        role: "Meeting AI",
        description: "Scores meeting productivity and suggests structural improvements.",
      },
      {
        name: "Client Call Analyzer",
        role: "Meeting AI",
        description: "Analyzes donor/funder calls for sentiment, decisions, and next steps.",
      },
      {
        name: "EOS Coach",
        role: "Strategy AI",
        description: "Strategic planning guidance for organizational health and quarterly rocks.",
      },
      {
        name: "Pattern Detective",
        role: "Strategy AI",
        description: "Surfaces trends and patterns across your organizational data automatically.",
      },
      {
        name: "Pod Health",
        role: "Strategy AI",
        description: "Monitors team workload and collaboration health, flags burnout risks.",
      },
      {
        name: "Quarterly Digest",
        role: "Strategy AI",
        description: "Automated quarterly performance narrative built from your real data.",
      },
      {
        name: "Project Analyst",
        role: "Project AI",
        description: "Analyzes project health, risks, and resource allocation across programs.",
      },
      {
        name: "Bug & Feature Planner",
        role: "Project AI",
        description: "Plans and prioritizes technical improvements across your stack.",
      },
      {
        name: "Technical Planner",
        role: "Project AI",
        description: "Generates technical implementation plans for new initiatives.",
      },
      {
        name: "Code Reviewer",
        role: "Project AI",
        description: "Automated code quality review and suggestions for in-house dev teams.",
      },
      {
        name: "Board Packet Composer",
        role: "Board Governance",
        description: "Auto-assembles the board packet from finance, programs, and prior minutes — every cycle.",
      },
      {
        name: "Meeting Minutes Agent",
        role: "Board Governance",
        description: "Drafts minutes, decisions, and follow-up tasks from the board recording — chair-ready.",
      },
      {
        name: "Document Q&A Agent",
        role: "Board Governance",
        description:
          "Board members ask plain-English questions of policies, bylaws, and past minutes — instant answers.",
      },
    ],
    integrations: [
      "Salesforce NPSP",
      "Blackbaud RE NXT",
      "Bloomerang",
      "Neon CRM",
      "Virtuous",
      "DonorPerfect",
      "HubSpot",
      "Kindful",
      "Stripe",
      "PayPal",
      "QuickBooks",
      "Eventbrite",
      "Givebutter",
      "OneCause",
      "Google Workspace",
      "Microsoft 365",
      "Zoom",
      "Mailchimp",
    ],
    compliance: [
      "Row-Level Security",
      "SOC 2-aligned infrastructure",
      "Encrypted at rest & in transit",
      "OAuth 2.0 SSO",
      "Role-Based Access",
      "GDPR Ready",
      "MIT License",
    ],
    testimonials: [
      {
        quote:
          "We were quoted $40K/year for a nonprofit ops platform. This is free, open source, and our IT team can actually host it. Game-changer for a $4M organization.",
        name: "Executive Director",
        role: "Community nonprofit",
        metric: "$40K/yr saved",
      },
    ],
    faqs: [
      {
        question: "Is it really free?",
        answer:
          "Yes, if you self-host. Both products are open source under the MIT License — zero license cost to run on your own infrastructure. If you want us to host and manage it for you, that starts at $1,500/yr covering hosting, updates, and support.",
      },
      {
        question: "Do we need engineers to run it?",
        answer:
          "Self-hosting takes a technically-comfortable IT person or contractor. Or we can host it for you for a small support fee — your data still stays isolated and exportable.",
      },
      {
        question: "How does it work with our CRM and finance system?",
        answer:
          "Pre-built integrations for Salesforce NPSP, Bloomerang, QuickBooks, and others. You connect what you have — the agents read across and surface insights.",
      },
      {
        question: "Will the AI train on our donor data?",
        answer:
          "No. Your donor data never trains AI models. Data stays in your instance, your residency, your control.",
      },
      {
        question: "What's the difference between the two products?",
        answer:
          "Board Governance handles meeting automation, document Q&A, task tracking, and governance workflows. Nonprofit Control Tower handles daily operations — donor 360, grants, programs, role-specific dashboards.",
      },
    ],
    useCases: [
      {
        title: "Auto-assemble the board packet",
        scenario:
          "Board Packet Composer pulls finance, programs, and prior minutes into a chair-ready packet every cycle.",
        outcome: "Board prep drops from a week to an afternoon",
        metric: "1 wk → 1 afternoon",
      },
      {
        title: "Donor 360 across all systems",
        scenario: "Donor 360 Agent unifies CRM, finance, and event data into one view per donor.",
        outcome: "Better stewardship, fewer dropped relationships",
        metric: "Unified",
      },
      {
        title: "Grant report drafting",
        scenario: "Grant Report Drafter pre-fills funder reports from program + finance data.",
        outcome: "Staff edits instead of writing from scratch",
        metric: "10× faster",
      },
      {
        title: "Plain-English Q&A on policies",
        scenario: "Document Q&A Agent answers questions about bylaws, policies, and past minutes.",
        outcome: "Board members self-serve instead of emailing the ED",
        metric: "Instant",
      },
    ],
    workflows: [
      {
        name: "Quarterly board cycle",
        trigger: "Board meeting scheduled",
        steps: [
          { actor: "agent", label: "Board Packet Composer drafts packet" },
          { actor: "human", label: "ED reviews + approves" },
          { actor: "agent", label: "Meeting Minutes Agent records + drafts minutes" },
          { actor: "agent", label: "Tasks routed to committee owners" },
        ],
        outcome: "Governance runs on rails. ED gets the week back.",
      },
    ],
    playbook: {
      overview:
        "Free, open-source, MIT-licensed. Self-host on your IT, or have us host it for a small support fee. Connect what you have — Salesforce NPSP, Bloomerang, QuickBooks — and the agents read across.",
      phases: [
        {
          week: "Week 1",
          title: "Self-host or hosted",
          deliverables: ["Decide self-host vs managed", "Provision instance", "Connect first system (CRM or finance)"],
        },
        {
          week: "Week 2",
          title: "Board Governance live",
          deliverables: [
            "Upload past 1 year of minutes + bylaws",
            "Board Packet Composer dry-run",
            "Document Q&A trained on policies",
          ],
        },
        {
          week: "Week 3",
          title: "Operations Control Tower",
          deliverables: [
            "Donor 360 across CRM + finance",
            "Grant Report Drafter on active grants",
            "Program Outcomes tracking active",
          ],
        },
        {
          week: "Ongoing",
          title: "Mission impact review",
          deliverables: [
            "Quarterly outcomes scorecard",
            "Add agents as needs emerge",
            "Free upgrades from open-source community",
          ],
        },
      ],
      outcomes: [
        { label: "License cost", value: "$0" },
        { label: "Board governance agents", value: "10" },
        { label: "Operations agents", value: "16" },
      ],
      quote: {
        text: "We were quoted $40K/year for a nonprofit ops platform. This is free, open source, and our IT team can host it.",
        attribution: "Executive Director, community nonprofit",
      },
    },
    productPositioning: {
      controlTowerAngle:
        "Two control towers: Board Governance for the boardroom, Nonprofit Control Tower for daily ops.",
      collabPlatformAngle:
        "All built on the open-source CollabAI Platform — your data, your residency, never used to train models.",
    },
    demos: {
      full: {
        label: "Try the live demo",
        url: "https://demo.nonprofitai.software/",
        blurb: "Nonprofit Control Tower — donors, grants, programs, role-based dashboards.",
      },
      lite: {
        label: "request Free Access",
        url: "https://nonprofitai.software/",
        blurb: "Board Governance — packets, minutes, document Q&A.",
      },
    },
  },

  touring: {
    slug: "touring",
    routeSlug: "touring",
    displayName: "Tour Operators",
    eyebrow: "For Travel & Tour Operators",
    agentCount: "100+",
    startingPrice: "$2,500",
    categoryNoun: "tour operations",
    subBrand: {
      name: "TourOps Control Tower",
      tagline: "by CollabAI",
      url: "https://tourdesk.collabai.software/",
      seoTagline: "AI Ops Layer for Modern Tour Operators",
    },
    buyer: "For Owners, Ops Managers & Sales Leads",
    buyerSubtitle:
      "Stop losing bookings to slow quote turnaround. Stop juggling itineraries across email, spreadsheets, and supplier portals. Add AI agents that quote, confirm, and follow up — 24/7.",
    platformNiche: "Tuned for itineraries, supplier ops, and 24/7 booking response.",
    hero: {
      h1: "One Control Tower for Bookings, Channels, Reviews, and Revenue.",
      sub: "Bokun, GetYourGuide, Viator, Stripe, and your direct bookings — unified into one operator dashboard with AI agents that draft replies, reconcile channels, and brief your day.",
      primaryCta: { label: "Book a Demo", url: "/book-demo" },
      secondaryCta: { label: "Try the Live Demo", url: "https://tourdesk.collabai.software/login", external: true },
      badges: ["Live in 2 weeks", "Self-host or managed", "GDPR-ready"],
    },
    pains: [
      {
        title: "Inquiries arrive at 11pm",
        body: "Travelers compare 4 operators. Whoever responds first usually wins. Your team sleeps. The booking goes elsewhere.",
      },
      {
        title: "Itinerary stitched across 6 systems",
        body: "Email, spreadsheets, supplier portals, WhatsApp. One missed reply breaks the trip.",
      },
      {
        title: "Supplier coordination eats ops time",
        body: "Hotels, transport, guides, restaurants. Manual confirmations, manual reconfirmations, manual changes.",
      },
      {
        title: "Double-bookings between OTAs",
        body: "Bokun, GetYourGuide, Viator and direct all sell the same slot. Conflicts surface after the guest arrives.",
      },
    ],
    outcomes: [
      { value: "<5 min", label: "Inquiry first-response time" },
      { value: "24/7", label: "Booking response coverage" },
      { value: "60%", label: "Less ops time per trip" },
      { value: "3×", label: "Quote-to-book conversion" },
    ],
    agents: [
      {
        name: "Ops Briefing Agent",
        role: "Operations",
        description:
          "Surfaces the day's bookings, conflicts, weather, and at-risk trips on the Today screen — your morning standup, written for you.",
      },
      {
        name: "Review Reply Agent",
        role: "Customer Experience",
        description: "Drafts on-brand replies to every review (Google, TripAdvisor, OTA), saved to the booking record.",
      },
      {
        name: "Guest Concierge Agent",
        role: "Customer Experience",
        description: "Answers guest questions via email/WhatsApp using your product, policy, and FAQ content.",
      },
      {
        name: "Channel Reconciler Agent",
        role: "Operations",
        description:
          "Scheduled scan across OTAs and direct bookings — flags double-bookings and inventory drift before guests are affected.",
      },
      {
        name: "Booking Email Drafter",
        role: "Inbound Sales",
        description:
          "Generates confirmation, cancellation, and follow-up emails from booking, customer, and product context.",
      },
      {
        name: "Inquiry Triage Agent",
        role: "Inbound Sales",
        description:
          "Reads inbound inquiries (web, email, WhatsApp), classifies trip type, drafts a personalized quote in minutes.",
      },
      {
        name: "Itinerary Builder Agent",
        role: "Trip Design",
        description:
          "Assembles multi-day itineraries from your supplier catalog, with availability and pricing rolled up.",
      },
      {
        name: "Supplier Coordination Agent",
        role: "Operations",
        description:
          "Sends, confirms, and reconfirms hotel, transport, guide, and restaurant bookings — keeps the master itinerary clean.",
      },
      {
        name: "Traveler Communications Agent",
        role: "Customer Experience",
        description:
          "Pre-trip welcome, day-before reminders, in-trip check-ins. Handles the long tail of small questions.",
      },
      {
        name: "Quote Follow-up Agent",
        role: "Inbound Sales",
        description: "Re-engages quote-sent-but-not-booked leads with the right cadence and the right offer.",
      },
      {
        name: "Change & Cancellation Agent",
        role: "Operations",
        description: "Coordinates supplier changes when travelers shift dates — without losing deposits.",
      },
      {
        name: "Revenue Optimizer Agent",
        role: "Revenue",
        description:
          "Suggests price and inventory changes from demand signals, competitor pricing, and historical conversion.",
      },
      {
        name: "Meeting Intelligence",
        role: "Internal Ops",
        description: "One-pass extraction of summaries, decisions, action items, and risks from internal ops meetings.",
      },
      {
        name: "Agent Run + Cost Tracker",
        role: "Internal Ops",
        description:
          "Logs every agent invocation with token + cost analytics so ops leaders see exactly where AI is paying off.",
      },
    ],
    integrations: [
      "Bokun",
      "GetYourGuide",
      "Viator",
      "TourPlan",
      "Rezdy",
      "WeTravel",
      "Stripe",
      "Twilio",
      "WhatsApp Business",
      "SendGrid",
      "Google Calendar",
      "Google Reviews",
      "TripAdvisor",
      "OpenWeather",
      "Slack",
      "HubSpot",
    ],
    compliance: [
      "GDPR",
      "Row-Level Security",
      "SOC 2-aligned infrastructure",
      "Encryption at rest & in transit",
      "Audit log on every action",
      "Self-hosted option",
    ],
    testimonials: [],
    faqs: [
      {
        question: "Will AI quotes be wrong?",
        answer:
          "Quotes are drafted from your live supplier rates and your margin rules — the agent doesn't invent pricing. A human can approve before send, or you can let trusted templates auto-send.",
      },
      {
        question: "Do we have to replace TourPlan / Bokun / Rezdy?",
        answer: "No. The agents sit on top via API. Your booking system stays the system of record.",
      },
      {
        question: "How do channel integrations work?",
        answer:
          "A registry-driven Integration Hub with pre-built connectors for Bokun, GetYourGuide, Viator, Stripe, Twilio and more. Add credentials in /admin, run a test, then enable sync.",
      },
      {
        question: "How do I try it right now?",
        answer:
          "Open the live demo and sign in as Operator, Front Desk, or Admin — instant access, no signup. Real seeded products, bookings, and reviews.",
      },
      {
        question: "What about traveler privacy?",
        answer:
          "GDPR-compliant by default. Self-hosted option for operators that need data residency in the EU or elsewhere.",
      },
      {
        question: "How fast can we go live?",
        answer:
          "Two weeks. Week 1: connect your booking platform + supplier catalog. Week 2: tune the inquiry agent on a sample of past leads, then go live.",
      },
    ],
    closingBadges: ["GDPR-ready", "Live in 2 weeks", "No booking-system replacement"],
    useCases: [
      {
        title: "Auto-quote inbound inquiries 24/7",
        scenario: "Inquiry Triage reads incoming requests, classifies trip type, drafts a personalized quote.",
        outcome: "First response in <5 minutes, even at 3am",
        metric: "<5 min",
      },
      {
        title: "Multi-supplier itinerary assembly",
        scenario: "Itinerary Builder rolls up availability + pricing across your supplier catalog.",
        outcome: "Hours of manual stitching collapse to minutes",
        metric: "10× faster",
      },
      {
        title: "Reconfirm every supplier touchpoint",
        scenario: "Supplier Coordination agent sends, confirms, reconfirms hotels, transport, guides.",
        outcome: "Zero missed reconfirmations",
        metric: "100%",
      },
      {
        title: "Win back unconverted quotes",
        scenario: "Follow-up Agent re-engages quote-sent leads with the right cadence.",
        outcome: "Recover bookings that would otherwise ghost",
        metric: "+30%",
      },
    ],
    workflows: [
      {
        name: "Inquiry → quote",
        trigger: "New inquiry (web / email / WhatsApp)",
        steps: [
          { actor: "agent", label: "Triage classifies trip type, party size, dates" },
          { actor: "agent", label: "Itinerary Builder drafts options from supplier catalog" },
          { actor: "agent", label: "Quote drafted with your margin rules" },
          { actor: "human", label: "Sales lead approves + sends (or auto-send templated)" },
        ],
        outcome: "First-response time drops from hours to under 5 minutes.",
      },
      {
        name: "Booked → in-trip",
        trigger: "Booking confirmed",
        steps: [
          { actor: "agent", label: "Supplier Coordination sends bookings to all suppliers" },
          { actor: "agent", label: "Reconfirms 7 days + 1 day prior" },
          { actor: "agent", label: "Traveler Comms sends pre-trip pack + reminders" },
          { actor: "agent", label: "In-trip daily check-in" },
        ],
        outcome: "Operators run more trips with the same headcount.",
      },
    ],
    playbook: {
      overview:
        "A two-week rollout for tour operators. Connect your booking platform and supplier catalog, tune the inquiry agent on past leads, go live with 24/7 quote coverage.",
      phases: [
        {
          week: "Days 1-4",
          title: "Connect",
          deliverables: [
            "API into TourPlan / Bokun / Rezdy",
            "Import supplier catalog + rates",
            "Wire inbound channels (email, web form, WhatsApp)",
          ],
        },
        {
          week: "Days 5-9",
          title: "Calibrate",
          deliverables: [
            "Inquiry agent trained on past 6 months of leads",
            "Quote templates per trip type",
            "Margin + commission rules configured",
          ],
        },
        {
          week: "Days 10-12",
          title: "Pilot",
          deliverables: [
            "Live with shadow mode (drafts go to sales lead first)",
            "Tune tone + structure",
            "Promote to auto-send for trusted templates",
          ],
        },
        {
          week: "Days 13-14",
          title: "Go live",
          deliverables: [
            "24/7 quote coverage active",
            "Supplier coordination + traveler comms enabled",
            "Weekly conversion + ops-time review",
          ],
        },
      ],
      outcomes: [
        { label: "First-response time", value: "<5 min" },
        { label: "Booking response", value: "24/7" },
        { label: "Ops time per trip", value: "-60%" },
      ],
    },
    productPositioning: {
      controlTowerAngle:
        "TourOps Control Tower — every booking, channel, review, and trip in one operator view, with AI keeping the back-and-forth moving.",
      collabPlatformAngle:
        "Built on CollabAI Platform: 24/7 agent runtime, semantic search across supplier docs and past trips, audit trail on every supplier touch.",
    },
    demos: {
      full: {
        label: "Try the Live Demo",
        url: "https://tourdesk.collabai.software/login",
        blurb: "Login as Operator, Front Desk, or Admin — instant access, seeded data.",
      },
      lite: {
        label: "See product vision",
        url: "https://tourdesk.collabai.software/vision",
        blurb: "Phased roadmap + remix model for TourOps Control Tower.",
      },
    },
  },

  pharma: {
    slug: "pharma",
    routeSlug: "pharma",
    displayName: "Pharma & Life Sciences",
    eyebrow: "For Pharma, CROs & Life Sciences Companies",
    agentCount: "18+",
    startingPrice: "$12,000",
    categoryNoun: "pharma",
    subBrand: {
      name: "ClinicalAI",
      tagline: "Powered by Control Tower",
      url: "https://clinicalai.collabai.software/",
      seoTagline: "AI Agents for Clinical Trials & Pharmacovigilance",
    },
    buyer: "For CIOs, VP Clinical Operations & Head of Drug Safety",
    buyerSubtitle:
      "Replace manual patient follow-up calls, automate MedDRA coding, and cut regulatory document review costs — without replacing your EDC, CTMS, or LIMS.",
    platformNiche: "Tuned for 21 CFR Part 11, HIPAA, and GCP compliance.",
    hero: {
      h1: "AI Agents Built for the Most Regulated Industry on Earth.",
      sub: "ClinicalAI automates outbound patient follow-up, adverse event coding, and regulatory document review — built on a 21 CFR Part 11 compliant stack with full audit trail, e-signatures, and HIPAA-ready infrastructure.",
      primaryCta: { label: "Book a Demo", url: "/book-demo" },
      secondaryCta: { label: "Try the Live Demo", url: "https://clinicalai.aideveloper.consulting", external: true },
      badges: ["21 CFR Part 11", "HIPAA-ready", "GDPR compliant", "GCP / ICH E6 R2"],
    },
    pains: [
      {
        title: "Manual patient follow-up at scale",
        body: "Clinical trial coordinators spend days calling patients about missed visits. Each call takes 15+ minutes. At 500 patients, that's 125+ hours per cycle.",
      },
      {
        title: "MedDRA coding backlogs",
        body: "Medical coders manually map patient-reported symptoms to MedDRA terms. One adverse event backlog can delay a study submission by weeks.",
      },
      {
        title: "Regulatory review costs $2,000/hour",
        body: "Pharma companies pay legal teams to verify FDA submission documents against regulatory guidelines. AI does it in minutes — at 1% of the cost.",
      },
    ],
    outcomes: [
      { value: "98%", label: "Call completion rate" },
      { value: "2×", label: "Faster data collection" },
      { value: "$47", label: "AI cost vs $312 manual per interview" },
      { value: "100%", label: "Calls QC-reviewed automatically" },
    ],
    agents: [
      {
        name: "Patient Follow-Up Agent",
        role: "Clinical Trials",
        description:
          "Outbound AI voice calls to clinical trial patients. Protocol-driven interview, consent capture, adverse event detection.",
      },
      {
        name: "MedDRA Coding Agent",
        role: "Pharmacovigilance",
        description:
          "Auto-proposes MedDRA PT, HLT, HLGT, SOC from verbatim patient responses. SMQ screening. CDISC SDTM export.",
      },
      {
        name: "QC Review Agent",
        role: "Quality Control",
        description:
          "Automated QC disposition on 100% of calls. PASS/FLAG/FAIL/ESCALATED. Triggers deviation workflow on FAIL.",
      },
      {
        name: "Audit Trail Agent",
        role: "Compliance",
        description:
          "Every action HSM-timestamped and immutable. RFC 3161. 15-year retention. 21 CFR Part 11 §11.10(e) compliant.",
      },
      {
        name: "E-Signature Agent",
        role: "Compliance",
        description:
          "Full e-signature manifest with countersignature workflows. Meaning-of-signature per record. 21 CFR Part 11 Subpart C.",
      },
      {
        name: "Regulatory Document Validator",
        role: "Regulatory Affairs",
        description:
          "Upload FDA submission or label text — AI checks against current guidelines, flags issues, suggests corrections.",
      },
      {
        name: "Protocol Compliance Checker",
        role: "Clinical Operations",
        description:
          "Upload study protocol — AI checks every section against ICH GCP, FDA, EMA guidelines. Flags deviations.",
      },
      {
        name: "IVR Navigator Agent",
        role: "Payer Operations",
        description:
          "AI navigates payer IVR systems automatically. Alerts your rep when a human agent is available. Eliminates hold time.",
      },
    ],
    integrations: [
      "Medidata Rave",
      "Oracle Clinical",
      "Veeva Vault",
      "REDCap",
      "ElevenLabs",
      "Twilio",
      "MedDRA v27.x",
      "CDISC SDTM",
      "HL7 FHIR",
      "Azure (HIPAA)",
      "AWS GovCloud",
    ],
    compliance: [
      "21 CFR Part 11",
      "HIPAA",
      "GDPR Article 9",
      "GCP ICH E6 R2",
      "ICH E2B(R3)",
      "ALCOA+",
      "GAMP 5",
      "Audit trail on every action",
    ],
    testimonials: [
      {
        quote:
          "We went from paying coordinators to make 500 calls per cycle to having the AI complete them overnight. The MedDRA coding is more consistent than our manual process and the audit trail is inspection-ready.",
        name: "Head of Clinical Operations",
        role: "Mid-size CRO",
        metric: "125+ coordinator hours saved per cycle",
      },
      {
        quote:
          "The regulatory document validator alone justified the investment. We were spending $40K per submission on legal review. The AI catches the same issues in an afternoon.",
        name: "VP Regulatory Affairs",
        role: "Specialty Pharma",
        metric: "$40K saved per submission",
      },
    ],
    faqs: [
      {
        question: "Is this really 21 CFR Part 11 compliant?",
        answer:
          "Yes — HSM-backed immutable audit trail, RFC 3161 timestamping, e-signature manifest with meaning-of-signature, and role-based access controls. Computer System Validation documentation available.",
      },
      {
        question: "Do you have a MedDRA license?",
        answer:
          "Integration is designed for MedDRA v27.x. You supply the license from MSSO — we provide the coding engine and CDISC SDTM export pipeline.",
      },
      {
        question: "Can we white-label this for our pharma clients?",
        answer:
          "Yes — white-label model available. Each client gets an isolated instance with their own branding, data residency, and configuration. We partner with life sciences IT consulting firms.",
      },
      {
        question: "What EDC/CTMS systems do you integrate with?",
        answer:
          "Medidata Rave, Oracle Clinical, Veeva Vault, and REDCap currently. HL7 FHIR R4 export in Phase 2. Open to custom connectors for specific client environments.",
      },
      {
        question: "How does the AI handle sensitive patient data?",
        answer:
          "Patients are de-identified by subject code. All PHI is encrypted at rest (AES-256) and in transit (TLS 1.3). HIPAA BAAs executed with all infrastructure vendors. Self-hosted option available.",
      },
    ],
    closingBadges: ["21 CFR Part 11 ready", "HIPAA + GDPR", "White-label available", "Audit trail on every action"],
    useCases: [
      {
        title: "Automate clinical trial patient follow-up",
        scenario:
          "AI calls 500 patients overnight, captures health status, adverse events, and missed visit reasons with full consent.",
        outcome: "125+ coordinator hours saved per study cycle",
        metric: "125+ hrs/cycle",
      },
      {
        title: "MedDRA coding with SMQ screening",
        scenario:
          "Patient verbatim responses auto-mapped to MedDRA PT/HLT/HLGT/SOC with pharmacovigilance signal detection.",
        outcome: "Coding backlogs eliminated. CDISC SDTM export ready.",
        metric: "Same day",
      },
      {
        title: "Regulatory document review at AI speed",
        scenario: "Upload FDA submission or protocol — AI checks against current guidelines in minutes.",
        outcome: "Cut $40K per submission in legal review fees",
        metric: "$40K saved",
      },
      {
        title: "Eliminate payer IVR hold time",
        scenario: "AI Navigator dials out, navigates the IVR, and alerts your rep the moment a human agent picks up.",
        outcome: "Your team only joins live calls — never sits on hold",
        metric: "0 hold time",
      },
    ],
    workflows: [
      {
        name: "Patient follow-up → coded → QC'd",
        trigger: "Scheduled study cycle",
        steps: [
          { actor: "agent", label: "Patient Follow-Up Agent dials patient, captures protocol responses" },
          { actor: "agent", label: "MedDRA Coding Agent maps verbatim terms to PT/HLT/SOC" },
          { actor: "agent", label: "QC Review Agent dispositions call: PASS / FLAG / FAIL" },
          { actor: "human", label: "Medical coder reviews flagged terms, applies e-signature" },
          { actor: "agent", label: "Audit Trail Agent timestamps every action immutably" },
        ],
        outcome:
          "End-to-end clinical data collection with 21 CFR Part 11 audit trail. No coordinator involvement until exception handling.",
      },
    ],
    playbook: {
      overview:
        "A phased rollout designed for regulated pharma environments. Phase 0 is UX demo. Phase 1 is working voice agent. Phase 2 is full production. Each phase includes documentation artifacts for Computer System Validation.",
      phases: [
        {
          week: "Phase 0 (Now)",
          title: "Interactive prototype",
          deliverables: [
            "Full UX demo at clinicalai.aideveloper.consulting",
            "4 role-based logins (Director, Coder, QC, Coordinator)",
            "All screens: call monitor, MedDRA coding, QC queue, audit trail",
          ],
        },
        {
          week: "Phase 1 (4 weeks)",
          title: "Working voice agent",
          deliverables: [
            "Real ElevenLabs agent configured for your protocol",
            "Live outbound calls to test numbers",
            "Transcript captured + MedDRA coding pipeline active",
          ],
        },
        {
          week: "Phase 2 (8-12 weeks)",
          title: "Full production",
          deliverables: [
            "HIPAA-compliant infrastructure",
            "MedDRA v27.x coding engine (requires client license)",
            "21 CFR Part 11 audit trail",
            "EDC integration (Medidata / Veeva)",
          ],
        },
        {
          week: "Phase 3 (ongoing)",
          title: "Validation & compliance",
          deliverables: [
            "IQ/OQ/PQ documentation",
            "Requirements Traceability Matrix",
            "System Validation Report",
            "FDA inspection readiness",
          ],
        },
      ],
      outcomes: [
        { label: "Coordinator hours saved", value: "125+/cycle" },
        { label: "Legal review savings", value: "$40K/submission" },
        { label: "Call completion rate", value: "98%" },
      ],
      quote: {
        text: "We went from 500 manual calls per cycle to overnight AI completion. The audit trail is inspection-ready from day one.",
        attribution: "Head of Clinical Operations, CRO",
      },
    },
    productPositioning: {
      controlTowerAngle:
        "ClinicalAI Control Tower — study-level dashboard, patient call queue, MedDRA coding console, QC review, and compliance reporting in one place.",
      collabPlatformAngle:
        "Built on CollabAI's regulated-industry AI platform: voice agents, HIPAA-compliant data layer, HSM audit trail, and white-label architecture.",
    },
    demos: {
      full: {
        label: "Try the live demo",
        url: "https://clinicalai.collabai.software/",
        blurb: "Log in as Study Director, Medical Coder, QC Reviewer, or Site Coordinator — instant access.",
      },
      lite: {
        label: "See the live call monitor",
        url: "https://clinicalai.collabai.software/login",
        blurb: "See a clinical trial call in progress — transcript, protocol tracker, AE detection.",
      },
    },
  },
};

export const getVertical = (slug: string) => verticals[slug];

export const nicheSlugs = ["agency", "mortgage-bank", "healthcare", "non-profit", "touring", "pharma"] as const;
export type NicheSlug = (typeof nicheSlugs)[number];
