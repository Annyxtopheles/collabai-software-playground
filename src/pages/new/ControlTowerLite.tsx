import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ArrowDown,
  Building2,
  Clock,
  Zap,
  Target,
  Rocket,
  Check,
  Boxes,
  ArrowUpRight,
  Activity,
  HeartPulse,
  HeartHandshake,
  Landmark,
  KeyRound,
  LineChart,
  Megaphone,
  UserCheck,
  Lock,
  Workflow,
} from "lucide-react";
import PageSeoHead from "@/components/PageSeoHead";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import sjInnovationLogo from "@/assets/sj-innovation-logo.svg";
import iso27001Logo from "@/assets/logos/iso-27001-certified.svg";
import { DEFAULT_OG_IMAGE, breadcrumbSchema } from "@/lib/seoSchema";

// =========================================================================
// BESPOKE, RESPONSIVE-TO-HOVER VECTOR ILLUSTRATIONS (Top-Right of Cards)
// Crafted in CollabAI Brand Blue palette (Zero yellow anywhere)
// =========================================================================

/** 1. Start With One Need: Focus / Target Workflow Layer Illustration */
const TargetFocusIllustration = () => (
  <div
    aria-hidden="true"
    className="relative h-20 w-24 sm:h-22 sm:w-28 shrink-0 select-none overflow-visible"
  >
    <svg
      viewBox="0 0 110 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full overflow-visible"
    >
      {/* Soft Ambient Aura Blob */}
      <path
        d="M 20 44 C 18 18, 55 10, 85 16 C 105 22, 108 55, 96 72 C 80 88, 38 88, 24 74 C 16 66, 22 56, 20 44 Z"
        fill="#eff6ff"
        className="transition-colors duration-500 group-hover:fill-[#dbeafe]"
      />

      {/* Background Dashboard Slate Layer */}
      <rect
        x="14"
        y="18"
        width="66"
        height="50"
        rx="8"
        fill="#ffffff"
        stroke="#cbd5e1"
        strokeWidth="1.5"
        className="transition-transform duration-500 ease-out group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]"
      />
      {/* Mini Table Rows on background layer */}
      <line x1="22" y1="28" x2="48" y2="28" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="36" x2="68" y2="36" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="44" x2="60" y2="44" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="52" x2="52" y2="52" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />

      {/* Elevated Front Target Card with Radar Focus Reticle */}
      <g className="origin-center transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:translate-y-[-3px]">
        {/* Outer Rotating Precision Dashed Ring */}
        <circle
          cx="68"
          cy="44"
          r="26"
          stroke="#93c5fd"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className="origin-center transition-transform duration-700 ease-out group-hover:rotate-90 group-hover:stroke-[#315EFF]"
        />
        {/* Middle Solid Reticle Ring */}
        <circle
          cx="68"
          cy="44"
          r="18"
          stroke="#3b82f6"
          strokeWidth="2"
          fill="#ffffff"
          className="transition-colors duration-300 group-hover:stroke-[#1d4ed8]"
        />
        {/* Precision Crosshair Lines */}
        <line x1="68" y1="20" x2="68" y2="28" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" />
        <line x1="68" y1="60" x2="68" y2="68" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" />
        <line x1="44" y1="44" x2="52" y2="44" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" />
        <line x1="84" y1="44" x2="92" y2="44" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" />

        {/* Center Target Lock Pip */}
        <circle
          cx="68"
          cy="44"
          r="5"
          fill="#315EFF"
          className="transition-transform duration-300 group-hover:scale-125"
        />
        <circle cx="68" cy="44" r="2" fill="#ffffff" />
      </g>
    </svg>
  </div>
);

/** 2. Experience the Workflow: Dynamic Connected Pipeline Illustration */
const WorkflowPipelineIllustration = () => (
  <div
    aria-hidden="true"
    className="relative h-20 w-24 sm:h-22 sm:w-28 shrink-0 select-none overflow-visible"
  >
    <svg
      viewBox="0 0 110 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full overflow-visible"
    >
      {/* Soft Ambient Aura Blob */}
      <path
        d="M 25 40 C 20 15, 60 8, 88 18 C 106 25, 108 58, 92 74 C 76 88, 32 86, 20 70 C 14 58, 28 50, 25 40 Z"
        fill="#eff6ff"
        className="transition-colors duration-500 group-hover:fill-[#dbeafe]"
      />

      {/* Connecting Pipeline Curves */}
      <path
        d="M 24 58 C 42 58, 38 28, 58 28 C 76 28, 72 50, 88 50"
        stroke="#93c5fd"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        className="transition-colors duration-500 group-hover:stroke-[#315EFF]"
      />
      {/* Pulsing Highlight Along Pipeline */}
      <path
        d="M 24 58 C 42 58, 38 28, 58 28 C 76 28, 72 50, 88 50"
        stroke="#1d4ed8"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="8 14"
        fill="none"
        className="opacity-40 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Stage 1 Node Card */}
      <g className="transition-transform duration-300 group-hover:-translate-y-1">
        <circle cx="24" cy="58" r="12" fill="#ffffff" stroke="#3b82f6" strokeWidth="2.5" />
        <circle cx="24" cy="58" r="5" fill="#315EFF" />
      </g>

      {/* Stage 2 Active Logic Hub Card */}
      <g className="transition-transform duration-300 group-hover:scale-110 origin-[58px_28px]">
        <rect
          x="46"
          y="16"
          width="24"
          height="24"
          rx="6"
          fill="#315EFF"
          stroke="#1d4ed8"
          strokeWidth="2"
        />
        <path d="M 53 28 L 63 28 M 58 23 L 58 33" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Stage 3 Output Verified Node Card */}
      <g className="transition-transform duration-300 group-hover:translate-x-1">
        <circle cx="88" cy="50" r="11" fill="#ffffff" stroke="#1d4ed8" strokeWidth="2.5" />
        <path d="M 84 50 L 87 53 L 93 47" stroke="#315EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  </div>
);

/** 3. Learn What Works for You: Insight Spark & Value Card Illustration */
const InsightValueIllustration = () => (
  <div
    aria-hidden="true"
    className="relative h-20 w-24 sm:h-22 sm:w-28 shrink-0 select-none overflow-visible"
  >
    <svg
      viewBox="0 0 110 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full overflow-visible"
    >
      {/* Soft Ambient Aura Blob */}
      <path
        d="M 22 42 C 16 16, 52 10, 84 18 C 104 24, 106 60, 92 76 C 76 90, 34 88, 22 72 C 16 60, 24 52, 22 42 Z"
        fill="#eff6ff"
        className="transition-colors duration-500 group-hover:fill-[#dbeafe]"
      />

      {/* Layer 1: Analytic Sparkline Chart Card in Background */}
      <rect
        x="16"
        y="24"
        width="60"
        height="44"
        rx="8"
        fill="#ffffff"
        stroke="#cbd5e1"
        strokeWidth="1.5"
        className="transition-transform duration-500 ease-out group-hover:translate-x-[-2px]"
      />
      <path
        d="M 22 54 L 34 46 L 46 50 L 62 36"
        stroke="#93c5fd"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-300 group-hover:stroke-[#3b82f6]"
      />
      <circle cx="62" cy="36" r="3" fill="#315EFF" />

      {/* Layer 2: Radiant Value Bulb Floating in Foreground */}
      <g className="origin-[74px_42px] transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
        {/* Radiating Energy Rays */}
        <g className="origin-[74px_42px] opacity-60 transition-all duration-500 group-hover:opacity-100 group-hover:scale-115">
          <line x1="74" y1="18" x2="74" y2="24" stroke="#315EFF" strokeWidth="2" strokeLinecap="round" />
          <line x1="56" y1="26" x2="61" y2="31" stroke="#315EFF" strokeWidth="2" strokeLinecap="round" />
          <line x1="92" y1="26" x2="87" y2="31" stroke="#315EFF" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="44" x2="56" y2="44" stroke="#315EFF" strokeWidth="2" strokeLinecap="round" />
          <line x1="98" y1="44" x2="92" y2="44" stroke="#315EFF" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Bulb Body */}
        <path
          d="M 64 42 C 64 34, 69 28, 74 28 C 79 28, 84 34, 84 42 C 84 46, 81 49, 80 52 L 68 52 C 67 49, 64 46, 64 42 Z"
          fill="#ffffff"
          stroke="#1d4ed8"
          strokeWidth="2.5"
        />
        {/* Bulb Base */}
        <rect x="69" y="53" width="10" height="3" rx="1.5" fill="#93c5fd" />
        <rect x="71" y="57" width="6" height="2" rx="1" fill="#60a5fa" />

        {/* Core Glowing Filament */}
        <path
          d="M 70 42 Q 74 36, 78 42"
          stroke="#315EFF"
          strokeWidth="2"
          strokeLinecap="round"
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </g>
    </svg>
  </div>
);

/** 4. Scale When You Are Ready: Velocity Rocket Launch Illustration (ZERO yellow) */
const ScaleRocketIllustration = () => (
  <div
    aria-hidden="true"
    className="relative h-20 w-24 sm:h-22 sm:w-28 shrink-0 select-none overflow-visible"
  >
    <svg
      viewBox="0 0 110 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full overflow-visible"
    >
      {/* Soft Ambient Aura Blob */}
      <path
        d="M 20 45 C 16 20, 50 12, 82 20 C 102 26, 105 58, 92 74 C 76 88, 36 86, 22 72 C 16 62, 22 52, 20 45 Z"
        fill="#eff6ff"
        className="transition-colors duration-500 group-hover:fill-[#dbeafe]"
      />

      {/* Stepped Scale Growth Bars in Background */}
      <rect x="18" y="54" width="9" height="16" rx="2.5" fill="#cbd5e1" />
      <rect x="31" y="44" width="9" height="26" rx="2.5" fill="#93c5fd" />
      <rect x="44" y="32" width="9" height="38" rx="2.5" fill="#3b82f6" />

      {/* Curved Launch Trajectory Arc */}
      <path
        d="M 28 66 Q 48 50, 76 22"
        stroke="#93c5fd"
        strokeWidth="2"
        strokeDasharray="4 4"
        fill="none"
        className="transition-colors duration-500 group-hover:stroke-[#315EFF]"
      />

      {/* Aerospace Rocket Vessel (Zero yellow: crisp blue/cyan ion thrust) */}
      <g className="origin-center transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:-translate-y-2">
        {/* Ion Thruster Plume in Blue/Cyan */}
        <path
          d="M 52 56 L 44 68 L 57 62 Z"
          fill="#60a5fa"
          className="transition-transform duration-300 group-hover:scale-125"
        />
        <path d="M 53 57 L 48 65 L 56 61 Z" fill="#93c5fd" />

        {/* Rocket Wings */}
        <path d="M 56 46 L 48 54 L 57 58 Z" fill="#1e40af" />
        <path d="M 72 32 L 80 40 L 76 48 Z" fill="#1e40af" />

        {/* Fuselage */}
        <path
          d="M 57 56 C 58 46, 68 34, 84 18 C 68 34, 54 44, 44 58 C 48 58, 52 57, 57 56 Z"
          fill="#315EFF"
          stroke="#1e3a8a"
          strokeWidth="2.5"
        />
        {/* White Nose Cone */}
        <path
          d="M 75 27 C 79 22, 82 19, 84 18 C 83 20, 80 23, 75 27 Z"
          fill="#ffffff"
        />
        {/* Cockpit Porthole */}
        <circle cx="68" cy="34" r="3.5" fill="#ffffff" stroke="#1e3a8a" strokeWidth="1.5" />
      </g>
    </svg>
  </div>
);

// =========================================================================
// DATA STRUCTURES
// =========================================================================

interface LiteSolution {
  id: string;
  fold: number;
  name: string;
  badge: string;
  category: "agency" | "industry" | "growth";
  problem: string;
  presentingPrefix?: string;
  description: string[];
  helpsWith: string[];
  outcome: string;
  ctaText: string;
  targetHref: string;
  lovableRemixUrl: string;
}

const LITE_SOLUTIONS: LiteSolution[] = [
  // FOLD 1
  {
    id: "agency-lite",
    fold: 1,
    name: "Agency Lite",
    badge: "Agency Operations",
    category: "agency",
    problem: "Spending Too Much Time Chasing Project and Client Updates?",
    description: [
      "Information sits across tools, meetings and team members. Getting a clear picture takes too much effort. Agency Lite brings the work that needs attention into one view.",
    ],
    helpsWith: [
      "Client visibility",
      "Project oversight",
      "Team priorities",
      "Meeting follow-up",
      "Agency operations",
    ],
    outcome: "Less chasing. Clearer priorities. Better control over delivery.",
    ctaText: "Explore Agency Lite",
    targetHref: "/agency",
    lovableRemixUrl: "https://lovable.dev/projects?ref=collabai-agency-lite",
  },
  {
    id: "healthhub-lite",
    fold: 1,
    name: "HealthHub AI Lite",
    badge: "Healthcare Operations",
    category: "industry",
    problem: "Too Much Admin. Not Enough Time for People?",
    presentingPrefix: "Presenting",
    description: [
      "Calls. Scheduling. Follow-ups. Everyday administrative work. It all takes time away from your team. HealthHub AI Lite helps reduce repetitive work behind patient operations.",
    ],
    helpsWith: [
      "Patient communication",
      "Scheduling workflows",
      "Front-desk tasks",
      "Administrative work",
      "Practice operations",
    ],
    outcome: "Less admin. Faster workflows. More time for patients.",
    ctaText: "Explore HealthHub AI Lite",
    targetHref: "/healthcare",
    lovableRemixUrl: "https://lovable.dev/projects?ref=collabai-healthhub-lite",
  },

  // FOLD 2
  {
    id: "nonprofit-lite",
    fold: 2,
    name: "Nonprofit Board Control Tower Lite",
    badge: "Nonprofit & Board Ops",
    category: "industry",
    problem: "Board Information Buried Across Emails, Files and Folders?",
    presentingPrefix: "Presenting",
    description: [
      "Meeting notes are in one place. Policies are somewhere else. Finding the right information takes too long. Nonprofit Board Control Tower Lite brings important board information together.",
    ],
    helpsWith: [
      "Board documents",
      "Meeting information",
      "Governance visibility",
      "Organizational knowledge",
      "Leadership access",
    ],
    outcome: "Find answers faster. Prepare better. Make informed decisions.",
    ctaText: "Explore Nonprofit Board Control Tower Lite",
    targetHref: "/non-profit",
    lovableRemixUrl: "https://lovable.dev/projects?ref=collabai-nonprofit-lite",
  },
  {
    id: "mortgage-lite",
    fold: 2,
    name: "MortgageAI Lite",
    badge: "Mortgage & Banking",
    category: "industry",
    problem: "Finding Loan Problems Only After They Become Urgent?",
    description: [
      "Too much to track. Too easy to fall behind. Busy pipelines make it harder to see which files, deadlines and risks need attention first. MortgageAI Lite helps surface what your team needs to act on.",
    ],
    helpsWith: [
      "Pipeline visibility",
      "Loan priorities",
      "Risk signals",
      "Rate-lock awareness",
      "Operational oversight",
    ],
    outcome: "See priorities sooner. Act faster. Stay ahead of the pipeline.",
    ctaText: "Explore MortgageAI Lite",
    targetHref: "/mortgage-bank",
    lovableRemixUrl: "https://lovable.dev/projects?ref=collabai-mortgage-lite",
  },

  // FOLD 3
  {
    id: "realtor-lite",
    fold: 3,
    name: "RealtorHelp Lite",
    badge: "Real Estate & Brokerages",
    category: "growth",
    problem: "Leads Going Cold While You’re Busy With Everything Else?",
    description: [
      "Follow-ups get delayed. Old leads disappear into the CRM. Good opportunities lose momentum. RealtorHelp Lite helps keep conversations moving.",
    ],
    helpsWith: [
      "Lead follow-up",
      "Re-engagement",
      "AI-assisted messages",
      "Lead organization",
      "Everyday communication",
    ],
    outcome: "Respond faster. Follow up consistently. Keep more opportunities active.",
    ctaText: "Explore RealtorHelp Lite",
    targetHref: "/book-demo?solution=realtor-lite",
    lovableRemixUrl: "https://lovable.dev/projects?ref=collabai-realtor-lite",
  },
  {
    id: "marketing-lite",
    fold: 3,
    name: "Marketing Lite",
    badge: "Marketing Performance",
    category: "growth",
    problem: "Marketing Moving Too Slowly? Clients Slipping Away?",
    presentingPrefix: "Presenting",
    description: [
      "Campaigns are spread across tools. Tasks pile up. Performance takes too long to understand. Marketing Lite brings the work and the numbers into clearer view.",
    ],
    helpsWith: [
      "Marketing performance",
      "Campaign visibility",
      "Task management",
      "AI-powered insights",
      "Priority identification",
    ],
    outcome: "Better visibility. Faster execution. Smarter marketing decisions.",
    ctaText: "Explore Marketing Lite",
    targetHref: "/book-demo?solution=marketing-lite",
    lovableRemixUrl: "https://lovable.dev/projects?ref=collabai-marketing-lite",
  },

  // FOLD 4
  {
    id: "cs-lite",
    fold: 4,
    name: "Client Success Lite",
    badge: "Account Retention",
    category: "growth",
    problem: "Clients Slipping Away Before You See the Warning Signs?",
    presentingPrefix: "Presenting",
    description: [
      "Account updates are scattered. Follow-ups get delayed. Risk becomes visible too late. Client Success Lite helps you see who needs attention and why.",
    ],
    helpsWith: [
      "Client health",
      "Churn signals",
      "Account priorities",
      "Revenue visibility",
      "Client intelligence",
    ],
    outcome: "Earlier action. Stronger relationships. Better retention.",
    ctaText: "Explore Client Success Lite",
    targetHref: "/book-demo?solution=client-success-lite",
    lovableRemixUrl: "https://lovable.dev/projects?ref=collabai-clientsuccess-lite",
  },
  {
    id: "ghl-lite",
    fold: 4,
    name: "GHL Control Tower Lite",
    badge: "GoHighLevel Ecosystem",
    category: "agency",
    problem: "Too Much Happening to See What Needs Attention?",
    presentingPrefix: "Presenting",
    description: [
      "Contacts. Conversations. Pipelines. Revenue. The data is there. The next action is not always obvious. GHL Control Tower Lite turns GHL activity into clearer priorities.",
    ],
    helpsWith: [
      "Pipeline visibility",
      "Lead intelligence",
      "Client overview",
      "Conversations",
      "Revenue visibility",
      "AI insights",
    ],
    outcome: "See what matters. Follow up faster. Keep your pipeline moving.",
    ctaText: "Explore GHL Control Tower Lite",
    targetHref: "/agency?addon=ghl-lite",
    lovableRemixUrl: "https://lovable.dev/projects?ref=collabai-ghl-lite",
  },
];

const INDUSTRIES_TICKER = [
  "Agencies",
  "Healthcare",
  "Nonprofits",
  "Mortgage",
  "Realtors",
  "Marketing",
  "Client Success",
  "GoHighLevel Agencies",
];

const ControlTowerLite = () => {
  const [selectedSolution, setSelectedSolution] = useState<LiteSolution | null>(null);
  const [filterCategory, setFilterCategory] = useState<"all" | "agency" | "industry" | "growth">("all");

  const filteredSolutions =
    filterCategory === "all"
      ? LITE_SOLUTIONS
      : LITE_SOLUTIONS.filter((s) => s.category === filterCategory);

  const scrollToSolutions = () => {
    const el = document.getElementById("choose-lite");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[hsl(var(--brand-secondary))]/15 selection:text-[hsl(var(--brand-secondary))]">
      <PageSeoHead
        title="Control Tower Lite — Practical AI Solutions for Real Business Workflows | CollabAI"
        description="You don't need the biggest AI system. You need the right starting point. Explore Control Tower Lite solutions for agencies, healthcare, nonprofits, mortgage, realtors, marketing, and CS."
        canonicalPath="/control-tower-lite"
        ogImage={DEFAULT_OG_IMAGE}
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Control Tower Lite", path: "/control-tower-lite" },
        ])}
      />

      {/* =========================================================================
          1. HERO - FIRST FOLD (CollabAI Design System)
         ========================================================================= */}
      <section className="bg-background pt-20 pb-16 lg:pt-28 lg:pb-24 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            {/* Eyebrow badge matching CollabAI tokens */}
            <div className="mb-6">
              <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--brand-secondary))] shadow-2xs">
                INTRODUCING LITE · DESIGNED TO MAKE YOUR FIRST STEP EASIER
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-bold leading-tight text-brand-primary sm:text-5xl lg:text-6xl tracking-tight text-balance">
              <span>You Don’t Need the Biggest AI System.</span>
              <span className="block mt-2 text-[hsl(var(--brand-secondary))]">
                You Need the Right Starting Point.
              </span>
            </h1>

            {/* Subhead matching site tokens */}
            <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-slate-secondary text-pretty">
              AI projects often become complicated because businesses try to solve everything at once.
            </p>

            {/* Trust Badges */}
            <div className="mt-5 flex items-center justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1 text-[11px] sm:text-xs uppercase tracking-[0.14em] text-muted-foreground shadow-2xs">
                <Lock className="w-3.5 h-3.5 text-[hsl(var(--brand-secondary))]" />
                Private by design · Self-hosted by default · Real workflows on day one
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <button
                type="button"
                onClick={scrollToSolutions}
                className="group inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-950 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:border-slate-800 hover:bg-slate-800 hover:text-white active:translate-y-[2px]"
              >
                <span>Explore Lite Now</span>
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5 text-white" />
              </button>
              <button
                type="button"
                onClick={() => setSelectedSolution(LITE_SOLUTIONS[0])}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-800 shadow-xs transition-all duration-150 hover:border-slate-400 hover:bg-slate-100 hover:text-slate-950 active:translate-y-[2px]"
              >
                <Sparkles className="mr-2 h-4 w-4 text-[hsl(var(--brand-secondary))]" />
                <span>Lovable Remix (Instant Buy)</span>
              </button>
            </div>

            {/* Industry Coverage Badges with Blue Pulse Dots */}
            <div className="mt-14 pt-8 border-t border-border">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                AI solutions for agencies, healthcare, nonprofits, mortgage, realtors, marketing, client success, &amp; GoHighLevel agencies
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 text-xs uppercase tracking-wider text-slate-secondary">
                {INDUSTRIES_TICKER.map((industry) => (
                  <span
                    key={industry}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1 text-slate-secondary transition-colors hover:border-[hsl(var(--brand-secondary))]/40 hover:text-brand-primary"
                  >
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-secondary))]" />
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. WHAT “LITE” ACTUALLY MEANS (Interactive Hover Illustrations, No Steps)
         ========================================================================= */}
      <section className="py-24 bg-slate-light border-b border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center space-x-2 bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              WHAT “LITE” ACTUALLY MEANS
            </div>
            <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-brand-primary tracking-tight">
              A Smaller Starting Point.
              <span className="block text-slate-secondary font-medium mt-1">Not Just Another AI Demo.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-secondary leading-relaxed">
              Our Lite products are focused versions of larger AI platforms and industry solutions.
              Instead of asking you to commit to a large system before you know how it fits your business, Lite gives you a practical way to start with the workflows that matter most.
            </p>
          </div>

          {/* 4 Cards with custom responsive-to-hover animated vector illustrations */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1: Start With One Need */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-xl hover:shadow-[hsl(var(--brand-secondary))]/10">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-brand-primary leading-snug">
                    Start With One Need
                  </h3>
                </div>
                <TargetFocusIllustration />
              </div>
              <p className="text-sm text-slate-secondary leading-relaxed mt-2">
                Choose the area where your team is losing time, missing opportunities or doing too much work manually.
              </p>
            </div>

            {/* Card 2: Experience the Workflow */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-xl hover:shadow-[hsl(var(--brand-secondary))]/10">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-brand-primary leading-snug">
                    Experience the Workflow
                  </h3>
                </div>
                <WorkflowPipelineIllustration />
              </div>
              <p className="text-sm text-slate-secondary leading-relaxed mt-2">
                See AI working inside an actual business process instead of watching a generic presentation.
              </p>
            </div>

            {/* Card 3: Learn What Works for You */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-xl hover:shadow-[hsl(var(--brand-secondary))]/10">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-brand-primary leading-snug">
                    Learn What Works for You
                  </h3>
                </div>
                <InsightValueIllustration />
              </div>
              <p className="text-sm text-slate-secondary leading-relaxed mt-2">
                Understand where AI creates real value before expanding your investment.
              </p>
            </div>

            {/* Card 4: Scale When You Are Ready */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-xl hover:shadow-[hsl(var(--brand-secondary))]/10">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-brand-primary leading-snug">
                    Scale When You Are Ready
                  </h3>
                </div>
                <ScaleRocketIllustration />
              </div>
              <p className="text-sm text-slate-secondary leading-relaxed mt-2">
                Move into a larger annual solution, additional workflows or a customized system when the business case is clear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3–6. CHOOSE YOUR LITE SOLUTION (Clean Toggles, Legible High-Contrast Buttons)
         ========================================================================= */}
      <section id="choose-lite" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center space-x-2 bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              PRODUCTION-READY EDITIONS
            </div>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-brand-primary tracking-tight uppercase">
              CHOOSE YOUR LITE SOLUTION
            </h2>

            {/* 4 Clean Toggles without any scrollbar */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
              <button
                type="button"
                onClick={() => setFilterCategory("all")}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-150 ${
                  filterCategory === "all"
                    ? "border border-slate-900 bg-slate-950 text-white shadow-xs"
                    : "border border-border bg-card text-slate-secondary hover:border-slate-400 hover:text-brand-primary"
                }`}
              >
                All Solutions (8)
              </button>
              <button
                type="button"
                onClick={() => setFilterCategory("agency")}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-150 ${
                  filterCategory === "agency"
                    ? "border border-slate-900 bg-slate-950 text-white shadow-xs"
                    : "border border-border bg-card text-slate-secondary hover:border-slate-400 hover:text-brand-primary"
                }`}
              >
                Agencies &amp; Operations
              </button>
              <button
                type="button"
                onClick={() => setFilterCategory("industry")}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-150 ${
                  filterCategory === "industry"
                    ? "border border-slate-900 bg-slate-950 text-white shadow-xs"
                    : "border border-border bg-card text-slate-secondary hover:border-slate-400 hover:text-brand-primary"
                }`}
              >
                Healthcare, Nonprofits, Mortgage
              </button>
              <button
                type="button"
                onClick={() => setFilterCategory("growth")}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-150 ${
                  filterCategory === "growth"
                    ? "border border-slate-900 bg-slate-950 text-white shadow-xs"
                    : "border border-border bg-card text-slate-secondary hover:border-slate-400 hover:text-brand-primary"
                }`}
              >
                Real Estate, Marketing &amp; CS
              </button>
            </div>
          </div>

          {/* Cards Grid: Streamlined, Airy, Exact Copy, High Contrast */}
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {filteredSolutions.map((solution) => (
              <div
                key={solution.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-7 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-xl hover:shadow-[hsl(var(--brand-secondary))]/12"
              >
                <div>
                  {/* Top Row: Product Name Eyebrow + Lite Edition Dot */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
                      {solution.presentingPrefix && (
                        <span className="text-muted-foreground font-medium mr-1.5">{solution.presentingPrefix}</span>
                      )}
                      {solution.name}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-slate-500">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-secondary))]" />
                      Lite Edition
                    </span>
                  </div>

                  {/* Problem Hook Question */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-brand-primary mb-3 leading-snug">
                    {solution.problem}
                  </h3>

                  {/* Description Copy */}
                  <p className="text-sm text-slate-secondary leading-relaxed mb-5">
                    {solution.description.join(" ")}
                  </p>

                  {/* What It Helps With: Streamlined Chip List */}
                  <div className="mb-4">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      What It Helps With:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {solution.helpsWith.map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-700 font-medium"
                        >
                          <Check className="h-3 w-3 text-[hsl(var(--brand-secondary))] shrink-0" />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Outcome Highlight Line */}
                  <p className="text-xs sm:text-sm text-slate-700 font-medium mb-6">
                    <strong className="font-bold text-brand-primary">Outcome:</strong>{" "}
                    {solution.outcome}
                  </p>
                </div>

                {/* Action Buttons: 100% High-Contrast Deterministic Styling */}
                <div className="pt-5 border-t border-border flex flex-col sm:flex-row gap-2.5 items-stretch">
                  <button
                    type="button"
                    onClick={() => setSelectedSolution(solution)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-900 bg-slate-950 px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition-all duration-150 hover:border-slate-800 hover:bg-slate-800 hover:text-white active:translate-y-[1px]"
                  >
                    <Sparkles className="mr-1.5 h-3.5 w-3.5 text-white" />
                    <span>Lovable Remix (Instant Buy)</span>
                  </button>
                  <Link
                    to={solution.targetHref}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-800 shadow-xs transition-all duration-150 hover:border-slate-400 hover:bg-slate-100 hover:text-slate-950 active:translate-y-[1px]"
                  >
                    <span>{solution.ctaText}</span>
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 text-slate-700" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. BENEFITS (WHAT YOU GET)
          Fixed orphaned word: "Workday You Already&nbsp;Have." with [text-wrap:balance]
         ========================================================================= */}
      <section className="py-24 bg-slate-light border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              WHAT YOU GET
            </div>
            <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-brand-primary tracking-tight max-w-2xl mx-auto [text-wrap:balance]">
              More Output From the Workday You Already&nbsp;Have.
            </h2>
          </div>

          {/* 6 Benefit Cards following CollabAI Card Token */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* 1: Save Time */}
            <div className="rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-lg hover:shadow-[hsl(var(--brand-secondary))]/10">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] mb-5">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-2">
                Save Time
              </h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Reduce repetitive everyday work.
              </p>
            </div>

            {/* 2: Increase Productivity */}
            <div className="rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-lg hover:shadow-[hsl(var(--brand-secondary))]/10">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] mb-5">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-2">
                Increase Productivity
              </h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Help your team complete more without adding unnecessary manual steps.
              </p>
            </div>

            {/* 3: Respond Faster */}
            <div className="rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-lg hover:shadow-[hsl(var(--brand-secondary))]/10">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] mb-5">
                <Rocket className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-2">
                Respond Faster
              </h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Keep customers, leads and important tasks moving.
              </p>
            </div>

            {/* 4: See What Matters */}
            <div className="rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-lg hover:shadow-[hsl(var(--brand-secondary))]/10">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] mb-5">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-2">
                See What Matters
              </h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Surface priorities without digging through multiple systems.
              </p>
            </div>

            {/* 5: Stay Organized */}
            <div className="rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-lg hover:shadow-[hsl(var(--brand-secondary))]/10">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] mb-5">
                <Boxes className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-2">
                Stay Organized
              </h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Keep important information and work easier to manage.
              </p>
            </div>

            {/* 6: Make Better Decisions */}
            <div className="rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-lg hover:shadow-[hsl(var(--brand-secondary))]/10">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] mb-5">
                <LineChart className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-2">
                Make Better Decisions
              </h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Turn business information into useful insights and clearer next actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. EXPLAINING WHY (Exact Copy)
         ========================================================================= */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              WHY THESE AI SOLUTIONS?
            </div>
            <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-brand-primary tracking-tight">
              Built for Work.
              <span className="block text-slate-secondary font-medium mt-1">Not Just Prompts.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-secondary leading-relaxed max-w-2xl mx-auto">
              Generic AI gives you a blank box. These solutions are built around actual business workflows.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-lg hover:shadow-[hsl(var(--brand-secondary))]/10">
              <h3 className="text-lg font-bold text-brand-primary mb-2">Purpose-Built</h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Designed for specific teams and industries.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-lg hover:shadow-[hsl(var(--brand-secondary))]/10">
              <h3 className="text-lg font-bold text-brand-primary mb-2">Practical</h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Focused on everyday work your team already handles.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-lg hover:shadow-[hsl(var(--brand-secondary))]/10">
              <h3 className="text-lg font-bold text-brand-primary mb-2">Action-Oriented</h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Built to help surface what needs attention next.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-lg hover:shadow-[hsl(var(--brand-secondary))]/10">
              <h3 className="text-lg font-bold text-brand-primary mb-2">Easy to Use</h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                AI fits into the workflow instead of becoming another complicated system to manage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. BUILT AROUND THE WAY YOU WORK (Exact User Copy)
         ========================================================================= */}
      <section className="py-24 bg-slate-light border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-primary tracking-tight">
              <span>Your Tools Should Work Together — </span>
              <span className="text-slate-secondary font-medium">Not Create More Work.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-secondary">
              These AI solutions are designed to work around real business operations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-border bg-card p-7 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))]">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] mx-auto mb-4">
                <Boxes className="h-6 w-6" />
              </div>
              <h3 className="text-base font-semibold text-brand-primary">
                Bring information together.
              </h3>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))]">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] mx-auto mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-base font-semibold text-brand-primary">
                Reduce repeated tasks.
              </h3>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))]">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] mx-auto mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-base font-semibold text-brand-primary">
                Surface priorities.
              </h3>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))]">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] mx-auto mb-4">
                <ArrowRight className="h-6 w-6" />
              </div>
              <h3 className="text-base font-semibold text-brand-primary">
                Help your team move from information → action faster.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. CONCLUSION - NEED SOMETHING MORE?
          (CollabAI Brand Blue Section with 100% High Contrast Text & Buttons)
         ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#091b4d] via-[#1d4ed8] to-[#1e3a8a] py-16 sm:py-20 md:py-24 text-white shadow-inner">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(circle at 82% 40%, rgba(255, 255, 255, 0.25) 0%, transparent 45%),
              radial-gradient(circle at 95% 85%, rgba(49, 94, 255, 0.6) 0%, transparent 50%),
              radial-gradient(circle at 20% 90%, rgba(0, 0, 0, 0.3) 0%, transparent 60%)
            `,
          }}
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-16 top-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full bg-radial from-white/30 via-[#dbeafe]/10 to-transparent blur-3xl -z-0"
        />

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12">
            <div className="text-left lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-xs mb-5">
                <Sparkles className="h-3.5 w-3.5 text-white" />
                <span>NEED SOMETHING MORE?</span>
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl xl:text-5xl leading-[1.15] text-balance text-white">
                <span>When Your Needs Go Beyond Lite,</span>
                <span className="block mt-1 text-white/95">We Can Go Further.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-white/90 text-pretty">
                Need AI across more workflows, teams or systems? We also provide annual AI services and custom-built solutions around your business.
              </p>

              {/* 8 Feature Chips */}
              <div className="mt-7 flex flex-wrap gap-2 max-w-xl">
                {[
                  "Custom AI workflows",
                  "Deeper system integrations",
                  "Multi-team solutions",
                  "Custom dashboards",
                  "AI automation",
                  "Private AI environments",
                  "Self-hosted solutions",
                  "Industry-specific development",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white shadow-2xs backdrop-blur-xs"
                  >
                    <Check className="mr-1.5 h-3.5 w-3.5 text-white" />
                    {chip}
                  </span>
                ))}
              </div>

              {/* High-Contrast Action Buttons (Explicit solid styling, zero clash) */}
              <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-3.5">
                <Link
                  to="/collabai-platform"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-bold text-slate-950 shadow-md transition-all duration-150 hover:bg-slate-100 hover:text-black active:translate-y-[1px]"
                >
                  <span>Explore Full &amp; Custom AI Solutions</span>
                  <ArrowRight className="ml-2 h-4 w-4 text-slate-950" />
                </Link>
                <Link
                  to="/book-demo"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-xs transition-all duration-150 hover:border-white/70 hover:bg-white/20 hover:text-white active:translate-y-[1px]"
                >
                  Schedule Private Architecture Review
                </Link>
              </div>
            </div>

            {/* Right Column: Ribbon Animation Canvas in Blue Palette */}
            <div className="relative lg:col-span-5 h-[280px] sm:h-[340px] w-full flex items-center justify-center">
              <svg
                viewBox="0 0 460 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-full w-full pointer-events-none overflow-visible select-none"
              >
                <defs>
                  <linearGradient id="liteRibbonGlowA" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
                    <stop offset="45%" stopColor="#93c5fd" stopOpacity="0.4" />
                    <stop offset="85%" stopColor="#ffffff" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#315EFF" stopOpacity="0.1" />
                  </linearGradient>

                  <linearGradient id="liteRibbonGlowB" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
                    <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
                  </linearGradient>

                  <filter id="liteSoftGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                <motion.path
                  d="M 20 250 C 110 250, 150 70, 250 85 C 340 100, 390 230, 450 140"
                  stroke="url(#liteRibbonGlowA)"
                  strokeWidth="38"
                  strokeLinecap="round"
                  fill="none"
                  filter="url(#liteSoftGlow)"
                  animate={{
                    d: [
                      "M 20 250 C 110 250, 150 70, 250 85 C 340 100, 390 230, 450 140",
                      "M 20 230 C 120 270, 160 90, 255 105 C 335 120, 385 200, 450 120",
                      "M 20 250 C 110 250, 150 70, 250 85 C 340 100, 390 230, 450 140",
                    ],
                  }}
                  transition={{
                    duration: 7.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.path
                  d="M 40 90 C 130 90, 160 260, 260 240 C 350 220, 380 70, 450 190"
                  stroke="url(#liteRibbonGlowB)"
                  strokeWidth="28"
                  strokeLinecap="round"
                  fill="none"
                  filter="url(#liteSoftGlow)"
                  animate={{
                    d: [
                      "M 40 90 C 130 90, 160 260, 260 240 C 350 220, 380 70, 450 190",
                      "M 40 110 C 140 70, 170 240, 255 220 C 345 200, 390 90, 450 210",
                      "M 40 90 C 130 90, 160 260, 260 240 C 350 220, 380 70, 450 190",
                    ],
                  }}
                  transition={{
                    duration: 8.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.path
                  d="M 10 210 Q 150 40, 280 180 T 450 110"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                  strokeDashoffset={0}
                  fill="none"
                  animate={{
                    strokeDashoffset: [0, -40],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <circle cx="250" cy="85" r="5" fill="#ffffff" filter="url(#liteSoftGlow)" />
                <circle cx="250" cy="85" r="2" fill="#315EFF" />

                <circle cx="340" cy="100" r="4" fill="#ffffff" filter="url(#liteSoftGlow)" />
                <circle cx="340" cy="100" r="1.5" fill="#315EFF" />

                <circle cx="160" cy="240" r="4.5" fill="#ffffff" filter="url(#liteSoftGlow)" />
                <circle cx="160" cy="240" r="1.8" fill="#315EFF" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          12. BUILT AND BROUGHT TO YOU BY SJ INNOVATION (Matches CollabAI Trust Section)
         ========================================================================= */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-10 border-b border-border">
            <div className="flex items-center gap-4">
              <img
                src={sjInnovationLogo}
                alt="SJ Innovation"
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <div className="h-8 w-px bg-border" />
              <div className="flex items-center gap-2.5">
                <img
                  src={iso27001Logo}
                  alt="ISO 27001 Certified"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
                <span className="text-xs font-semibold text-muted-foreground max-w-[150px] leading-tight hidden md:inline-block">
                  ISO/IEC 27001:2022 Certified Information Security
                </span>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <div className="inline-block rounded-full bg-slate-light border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--brand-secondary))] mb-2">
                BUILT AND BROUGHT TO YOU BY SJ INNOVATION
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-primary leading-tight">
                22+ Years of Proven Technology Delivery.
              </h2>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
              <div className="text-3xl sm:text-4xl font-extrabold text-[hsl(var(--brand-secondary))]">
                500+
              </div>
              <div className="mt-1.5 text-xs sm:text-sm font-semibold text-brand-primary">
                Clients
              </div>
              <div className="text-xs text-slate-secondary mt-0.5">Delivered across software, mobile, cloud and AI</div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
              <div className="text-3xl sm:text-4xl font-extrabold text-[hsl(var(--brand-secondary))]">
                1,000+
              </div>
              <div className="mt-1.5 text-xs sm:text-sm font-semibold text-brand-primary">
                Projects Delivered
              </div>
              <div className="text-xs text-slate-secondary mt-0.5">Proven delivery track record</div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
              <div className="text-3xl sm:text-4xl font-extrabold text-[hsl(var(--brand-secondary))]">
                ISO 27001
              </div>
              <div className="mt-1.5 text-xs sm:text-sm font-semibold text-brand-primary">
                ISO/IEC 27001:2022 Certified
              </div>
              <div className="text-xs text-slate-secondary mt-0.5">Information security practices backed by international standard</div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
              <div className="text-3xl sm:text-4xl font-extrabold text-[hsl(var(--brand-secondary))]">
                22+
              </div>
              <div className="mt-1.5 text-xs sm:text-sm font-semibold text-brand-primary">
                Years in Tech
              </div>
              <div className="text-xs text-slate-secondary mt-0.5">Proven technology delivery</div>
            </div>
          </div>

          {/* Recognition Bar */}
          <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-semibold text-brand-primary uppercase tracking-wider">Recognition:</span>
              <span className="rounded-full bg-slate-light border border-border px-3 py-1 text-brand-primary font-semibold">Inc. 5000</span>
              <span className="rounded-full bg-slate-light border border-border px-3 py-1 text-brand-primary font-semibold">Clutch Recognized</span>
              <span className="rounded-full bg-slate-light border border-border px-3 py-1 text-brand-primary font-semibold">NYC MBE</span>
            </div>
            <div className="text-muted-foreground font-medium text-center sm:text-right">
              Delivered across software, mobile, cloud and AI.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE LOVABLE REMIX / INSTANT BUY DIALOG MODAL (CollabAI Design Tokens)
         ========================================================================= */}
      <Dialog open={!!selectedSolution} onOpenChange={(open) => !open && setSelectedSolution(null)}>
        <DialogContent className="max-w-lg border border-border bg-card text-foreground p-6 sm:p-8 sm:rounded-2xl shadow-xl">
          {selectedSolution && (
            <>
              <DialogHeader>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[hsl(var(--brand-secondary))] uppercase tracking-wider mb-1">
                  <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--brand-secondary))]" />
                  INSTANT BUY &amp; LOVABLE REMIX
                </div>
                <DialogTitle className="text-2xl font-bold text-brand-primary tracking-tight">
                  {selectedSolution.name}
                </DialogTitle>
                <DialogDescription className="text-slate-secondary text-sm">
                  {selectedSolution.outcome}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 space-y-4">
                <div className="rounded-xl border border-border bg-slate-light p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Included Workflows &amp; Capabilities:
                  </div>
                  <ul className="space-y-2 text-xs text-slate-secondary font-medium">
                    {selectedSolution.helpsWith.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-[hsl(var(--brand-secondary))] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-[hsl(var(--brand-secondary))]/25 bg-[hsl(var(--brand-secondary))]/5 p-3.5 text-xs text-brand-primary flex items-center justify-between font-medium">
                  <span>Pre-configured template · Zero vendor lock-in</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-0.5 text-[10px] font-semibold text-[hsl(var(--brand-secondary))]">
                    Production Ready
                  </span>
                </div>

                <div className="space-y-2.5 pt-2">
                  <a
                    href={selectedSolution.lovableRemixUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-11 inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-950 text-white font-semibold text-sm shadow-sm hover:border-slate-800 hover:bg-slate-800 active:translate-y-[1px]"
                  >
                    <Sparkles className="mr-2 h-4 w-4 text-white" />
                    Remix on Lovable (Instant Deploy)
                    <ArrowUpRight className="ml-1.5 h-4 w-4 text-white" />
                  </a>
                  <Link
                    to={selectedSolution.targetHref}
                    className="w-full h-11 inline-flex items-center justify-center rounded-full border border-slate-300 bg-white hover:bg-slate-100 hover:text-slate-950 text-slate-800 font-semibold text-sm"
                  >
                    {selectedSolution.ctaText}
                    <ArrowRight className="ml-1.5 h-4 w-4 text-slate-700" />
                  </Link>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ControlTowerLite;
