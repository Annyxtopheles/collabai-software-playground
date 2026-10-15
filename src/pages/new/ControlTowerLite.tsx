import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Sparkles,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Users,
  Clock,
  Zap,
  Target,
  Workflow,
  Lightbulb,
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import sjInnovationLogo from "@/assets/sj-innovation-logo.svg";
import iso27001Logo from "@/assets/logos/iso-27001-certified.svg";

interface LiteSolution {
  id: string;
  name: string;
  badge: string;
  category: "agency" | "industry" | "growth";
  problem: string;
  description: string[];
  helpsWith: string[];
  outcome: string;
  targetHref: string;
  lovableRemixUrl: string;
  icon: typeof Building2;
}

const LITE_SOLUTIONS: LiteSolution[] = [
  {
    id: "agency-lite",
    name: "Agency Lite",
    badge: "Agency Operations",
    category: "agency",
    problem: "Spending Too Much Time Chasing Project and Client Updates?",
    description: [
      "Information sits across tools, meetings and team members.",
      "Getting a clear picture takes too much effort.",
      "Agency Lite brings the work that needs attention into one view.",
    ],
    helpsWith: [
      "Client visibility",
      "Project oversight",
      "Team priorities",
      "Meeting follow-up",
      "Agency operations",
    ],
    outcome: "Less chasing. Clearer priorities. Better control over delivery.",
    targetHref: "/agency",
    lovableRemixUrl: "https://lovable.dev/projects?ref=collabai-agency-lite",
    icon: Building2,
  },
  {
    id: "healthhub-lite",
    name: "HealthHub AI Lite",
    badge: "Presenting · Healthcare",
    category: "industry",
    problem: "Too Much Admin. Not Enough Time for People?",
    description: [
      "Calls. Scheduling. Follow-ups. Everyday administrative work.",
      "It all takes time away from your team.",
      "HealthHub AI Lite helps reduce repetitive work behind patient operations.",
    ],
    helpsWith: [
      "Patient communication",
      "Scheduling workflows",
      "Front-desk tasks",
      "Administrative work",
      "Practice operations",
    ],
    outcome: "Less admin. Faster workflows. More time for patients.",
    targetHref: "/healthcare",
    lovableRemixUrl: "https://lovable.dev/projects?ref=collabai-healthhub-lite",
    icon: HeartPulse,
  },
  {
    id: "nonprofit-lite",
    name: "Nonprofit Board Control Tower Lite",
    badge: "Presenting · Nonprofits",
    category: "industry",
    problem: "Board Information Buried Across Emails, Files and Folders?",
    description: [
      "Meeting notes are in one place. Policies are somewhere else.",
      "Finding the right information takes too long.",
      "Nonprofit Board Control Tower Lite brings important board information together.",
    ],
    helpsWith: [
      "Board documents",
      "Meeting information",
      "Governance visibility",
      "Organizational knowledge",
      "Leadership access",
    ],
    outcome: "Find answers faster. Prepare better. Make informed decisions.",
    targetHref: "/non-profit",
    lovableRemixUrl: "https://lovable.dev/projects?ref=collabai-nonprofit-lite",
    icon: HeartHandshake,
  },
  {
    id: "mortgage-lite",
    name: "MortgageAI Lite",
    badge: "Mortgage Lending",
    category: "industry",
    problem: "Too Much to Track. Too Easy to Fall Behind. Finding Loan Problems Only After They Become Urgent?",
    description: [
      "Busy pipelines make it harder to see which files, deadlines and risks need attention first.",
      "MortgageAI Lite helps surface what your team needs to act on.",
    ],
    helpsWith: [
      "Pipeline visibility",
      "Loan priorities",
      "Risk signals",
      "Rate-lock awareness",
      "Operational oversight",
    ],
    outcome: "See priorities sooner. Act faster. Stay ahead of the pipeline.",
    targetHref: "/mortgage-bank",
    lovableRemixUrl: "https://lovable.dev/projects?ref=collabai-mortgage-lite",
    icon: Landmark,
  },
  {
    id: "realtorhelp-lite",
    name: "RealtorHelp Lite",
    badge: "Real Estate",
    category: "growth",
    problem: "Leads Going Cold While You’re Busy With Everything Else?",
    description: [
      "Follow-ups get delayed. Old leads disappear into the CRM.",
      "Good opportunities lose momentum.",
      "RealtorHelp Lite helps keep conversations moving.",
    ],
    helpsWith: [
      "Lead follow-up",
      "Re-engagement",
      "AI-assisted messages",
      "Lead organization",
      "Everyday communication",
    ],
    outcome: "Respond faster. Follow up consistently. Keep more opportunities active.",
    targetHref: "/book-demo?solution=realtorhelp-lite",
    lovableRemixUrl: "https://lovable.dev/projects?ref=collabai-realtorhelp-lite",
    icon: KeyRound,
  },
  {
    id: "marketing-lite",
    name: "Marketing Lite",
    badge: "Presenting · Marketing Ops",
    category: "growth",
    problem: "Marketing Moving Too Slowly? Clients Slipping Away?",
    description: [
      "Campaigns are spread across tools. Tasks pile up.",
      "Performance takes too long to understand.",
      "Marketing Lite brings the work and the numbers into clearer view.",
    ],
    helpsWith: [
      "Marketing performance",
      "Campaign visibility",
      "Task management",
      "AI-powered insights",
      "Priority identification",
    ],
    outcome: "Better visibility. Faster execution. Smarter marketing decisions.",
    targetHref: "/book-demo?solution=marketing-lite",
    lovableRemixUrl: "https://lovable.dev/projects?ref=collabai-marketing-lite",
    icon: Megaphone,
  },
  {
    id: "client-success-lite",
    name: "Client Success Lite",
    badge: "Presenting · Retention",
    category: "growth",
    problem: "Clients Slipping Away Before You See the Warning Signs?",
    description: [
      "Account updates are scattered. Follow-ups get delayed.",
      "Risk becomes visible too late.",
      "Client Success Lite helps you see who needs attention and why.",
    ],
    helpsWith: [
      "Client health",
      "Churn signals",
      "Account priorities",
      "Revenue visibility",
      "Client intelligence",
    ],
    outcome: "Earlier action. Stronger relationships. Better retention.",
    targetHref: "/book-demo?solution=client-success-lite",
    lovableRemixUrl: "https://lovable.dev/projects?ref=collabai-clientsuccess-lite",
    icon: UserCheck,
  },
  {
    id: "ghl-lite",
    name: "GHL Control Tower Lite",
    badge: "Presenting · GoHighLevel",
    category: "agency",
    problem: "Too Much Happening to See What Needs Attention?",
    description: [
      "Contacts. Conversations. Pipelines. Revenue. The data is there.",
      "The next action is not always obvious.",
      "GHL Control Tower Lite turns GHL activity into clearer priorities.",
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
    targetHref: "/agency?addon=ghl-lite",
    lovableRemixUrl: "https://lovable.dev/projects?ref=collabai-ghl-lite",
    icon: Activity,
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
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Helmet>
        <title>Control Tower Lite — Practical AI Solutions for Real Business Workflows | CollabAI</title>
        <meta
          name="description"
          content="You don't need the biggest AI system. You need the right starting point. Explore Control Tower Lite solutions for agencies, healthcare, nonprofits, mortgage, realtors, marketing, and CS."
        />
        <link rel="canonical" href="https://collabai.software/control-tower-lite" />
      </Helmet>

      {/* =========================================================================
          1. HERO - FIRST FOLD (CollabAI Clean Editorial Style)
         ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28">
        {/* Soft background ambient gradient meshes matching CollabAI design system */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 15% 30%, rgba(14, 165, 233, 0.05) 0%, transparent 40%),
              radial-gradient(circle at 85% 30%, rgba(37, 99, 235, 0.05) 0%, transparent 40%)
            `,
          }}
        />

        <div className="container mx-auto max-w-5xl px-4 text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-50/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>INTRODUCING LITE</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-600 font-medium normal-case tracking-normal">Designed to make Your First Step Easier</span>
          </div>

          {/* Main Headline */}
          <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.08] text-balance">
            <span>You Don’t Need the Biggest AI System.</span>
            <span className="block mt-2 text-blue-600">
              You Need the Right Starting Point.
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-slate-600 font-normal leading-relaxed text-pretty">
            AI projects often become complicated because businesses try to solve everything at once.
          </p>

          {/* CTAs following CollabAI button system */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              size="lg"
              onClick={scrollToSolutions}
              className="group rounded-full border border-slate-900 bg-slate-950 px-8 py-3.5 text-center font-semibold text-white shadow-sm transition-all duration-150 hover:border-slate-800 hover:bg-slate-800 hover:text-white active:translate-y-[2px]"
            >
              <span>Explore Lite Now</span>
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setSelectedSolution(LITE_SOLUTIONS[0])}
              className="rounded-full border border-slate-300 bg-white px-8 py-3.5 font-semibold text-slate-800 shadow-2xs transition-all duration-150 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-950 active:translate-y-[2px]"
            >
              <Sparkles className="mr-2 h-4 w-4 text-amber-500" />
              <span>Lovable Remix (Instant Buy)</span>
            </Button>
          </div>

          {/* Supported Audience Strip */}
          <div className="mt-14 pt-8 border-t border-slate-100">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
              AI solutions purpose-built for:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
              {INDUSTRIES_TICKER.map((industry) => (
                <span
                  key={industry}
                  className="inline-flex items-center rounded-full border border-slate-200/80 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-2xs"
                >
                  <CheckCircle2 className="mr-1.5 h-3.5 w-3.5 text-blue-600" />
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. WHAT “LITE” ACTUALLY MEANS
         ========================================================================= */}
      <section className="border-t border-slate-100 bg-[#f8fafc] py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              The Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
              A Smaller Starting Point.
              <span className="block text-slate-500 font-semibold mt-1">Not Just Another AI Demo.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed text-pretty">
              Our Lite products are focused versions of larger AI platforms and industry solutions. Instead of asking you to commit to a large system before you know how it fits your business, Lite gives you a practical way to start with the workflows that matter most.
            </p>
          </div>

          {/* 4 Cards following the 4 cards token */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/15">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-5 border border-blue-100">
                <Target className="h-5 w-5" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">Step 01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Start With One Need</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Choose the area where your team is losing time, missing opportunities or doing too much work manually.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/15">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 mb-5 border border-sky-100">
                <Workflow className="h-5 w-5" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-1">Step 02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Experience the Workflow</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                See AI working inside an actual business process instead of watching a generic presentation.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/15">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 mb-5 border border-teal-100">
                <Lightbulb className="h-5 w-5" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-1">Step 03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Learn What Works for You</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Understand where AI creates real value before expanding your investment.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/15">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 mb-5 border border-purple-100">
                <Rocket className="h-5 w-5" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-purple-600 mb-1">Step 04</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Scale When You Are Ready</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Move into a larger annual solution, additional workflows or a customized system when the business case is clear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3–6. CHOOSE YOUR LITE SOLUTION (All 8 Cards following CollabAI Token)
         ========================================================================= */}
      <section id="choose-lite" className="border-t border-slate-100 bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
              Production-Ready Editions
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 uppercase">
              CHOOSE YOUR LITE SOLUTION
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 text-pretty">
              Every Lite solution is fully pre-configured, production-ready, and available for instant deployment or 1-click Lovable remix.
            </p>

            {/* Filter Tabs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              <Button
                variant={filterCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterCategory("all")}
                className={filterCategory === "all" ? "rounded-full bg-slate-950 text-white font-semibold" : "rounded-full border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-50"}
              >
                All Solutions (8)
              </Button>
              <Button
                variant={filterCategory === "agency" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterCategory("agency")}
                className={filterCategory === "agency" ? "rounded-full bg-slate-950 text-white font-semibold" : "rounded-full border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-50"}
              >
                Agencies & Operations
              </Button>
              <Button
                variant={filterCategory === "industry" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterCategory("industry")}
                className={filterCategory === "industry" ? "rounded-full bg-slate-950 text-white font-semibold" : "rounded-full border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-50"}
              >
                Healthcare, Nonprofits, Mortgage
              </Button>
              <Button
                variant={filterCategory === "growth" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterCategory("growth")}
                className={filterCategory === "growth" ? "rounded-full bg-slate-950 text-white font-semibold" : "rounded-full border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-50"}
              >
                Real Estate, Marketing & CS
              </Button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {filteredSolutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <div
                  key={solution.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/15"
                >
                  <div>
                    {/* Header: Badge & Status */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                        <Icon className="h-3.5 w-3.5 text-blue-600" />
                        {solution.badge}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-0.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Instant Deploy
                      </span>
                    </div>

                    {/* Problem Hook Question */}
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-2 leading-snug">
                      {solution.problem}
                    </h3>

                    {/* Product Name Label */}
                    <div className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-4">
                      {solution.name}
                    </div>

                    {/* Description Paragraphs */}
                    <div className="space-y-1.5 text-sm text-slate-600 mb-6 leading-relaxed">
                      {solution.description.map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>

                    {/* What It Helps With */}
                    <div className="mb-6 rounded-2xl border border-slate-100 bg-[#f8fafc] p-4.5">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        What It Helps With:
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                        {solution.helpsWith.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcome Highlight Box */}
                    <div className="mb-7 rounded-2xl border border-blue-100 bg-blue-50/80 p-4 text-xs sm:text-sm text-blue-950 font-medium">
                      <span className="font-bold text-blue-700 uppercase tracking-wide mr-1.5">Outcome:</span>
                      {solution.outcome}
                    </div>
                  </div>

                  {/* Action Buttons: Explore + Lovable Remix */}
                  <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row gap-3 items-stretch">
                    <Button
                      asChild
                      className="flex-1 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-xs"
                    >
                      <Link to={solution.targetHref}>
                        Explore {solution.name}
                        <ArrowRight className="ml-1.5 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedSolution(solution)}
                      className="rounded-xl border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm"
                    >
                      <Sparkles className="mr-1.5 h-3.5 w-3.5 text-amber-500" />
                      Lovable Remix (Instant Buy)
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. BENEFITS (WHAT YOU GET)
         ========================================================================= */}
      <section className="border-t border-slate-100 bg-[#f8fafc] py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
              WHAT YOU GET
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 uppercase">
              More Output From the Workday You Already Have.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Clear outcomes, zero fluff. Built to eliminate manual busywork and unlock focus.
            </p>
          </div>

          {/* 6 Benefit Cards following CollabAI Card Token */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1: Save Time */}
            <div className="group rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2.5 py-0.5">
                  EFFICIENCY
                </span>
                <div className="h-10 w-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                  <Clock className="h-5 w-5" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-2">
                Save Time.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Reduce repetitive everyday work across your team.
              </p>
              <div className="pt-4 border-t border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center justify-between">
                <span>Outcome-Driven</span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
              </div>
            </div>

            {/* Card 2: Increase Productivity */}
            <div className="group rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-orange-700 bg-orange-50 border border-orange-200 rounded-full px-2.5 py-0.5">
                  CAPACITY
                </span>
                <div className="h-10 w-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                  <Zap className="h-5 w-5" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-2">
                Increase Productivity.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Help your team complete more without adding unnecessary manual steps.
              </p>
              <div className="pt-4 border-t border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center justify-between">
                <span>Higher Throughput</span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
              </div>
            </div>

            {/* Card 3: Respond Faster */}
            <div className="group rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-pink-700 bg-pink-50 border border-pink-200 rounded-full px-2.5 py-0.5">
                  SPEED
                </span>
                <div className="h-10 w-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600">
                  <Rocket className="h-5 w-5" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-2">
                Respond Faster.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Keep customers, leads and important tasks moving without delay.
              </p>
              <div className="pt-4 border-t border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center justify-between">
                <span>Zero Stalled Leads</span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
              </div>
            </div>

            {/* Card 4: See What Matters */}
            <div className="group rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-full px-2.5 py-0.5">
                  VISIBILITY
                </span>
                <div className="h-10 w-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <Target className="h-5 w-5" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-2">
                See What Matters.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Surface priorities without digging through multiple disconnected systems.
              </p>
              <div className="pt-4 border-t border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center justify-between">
                <span>Instant Clarity</span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
              </div>
            </div>

            {/* Card 5: Stay Organized */}
            <div className="group rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-0.5">
                  STRUCTURE
                </span>
                <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Boxes className="h-5 w-5" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-2">
                Stay Organized.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Keep important information and everyday work easy to manage and find.
              </p>
              <div className="pt-4 border-t border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center justify-between">
                <span>Unified Governance</span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
              </div>
            </div>

            {/* Card 6: Make Better Decisions */}
            <div className="group rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-2.5 py-0.5">
                  INTELLIGENCE
                </span>
                <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <LineChart className="h-5 w-5" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-2">
                Make Better Decisions.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Turn business information into useful insights and clearer next actions.
              </p>
              <div className="pt-4 border-t border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center justify-between">
                <span>Actionable Insight</span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. EXPLAINING WHY (Built for Work. Not Just Prompts.)
         ========================================================================= */}
      <section className="border-t border-slate-100 bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
              WHY THESE AI SOLUTIONS?
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
              Built for Work.
              <span className="block text-slate-500 font-semibold mt-1">Not Just Prompts.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Generic AI gives you a blank box. These solutions are built around actual business workflows.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200/90 bg-[#f8fafc] p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">01 · Purpose-Built</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Purpose-Built</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Designed for specific teams and industries — not a one-size-fits-all experiment.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-[#f8fafc] p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-2">02 · Practical</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Practical</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Focused on everyday work your team already handles so adoption happens naturally.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-[#f8fafc] p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-2">03 · Action-Oriented</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Action-Oriented</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Built to help surface what needs attention next and guide immediate execution.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-[#f8fafc] p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-purple-600 mb-2">04 · Easy to Use</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Easy to Use</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                AI fits into the workflow instead of becoming another complicated system to manage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. BUILT AROUND THE WAY YOU WORK
         ========================================================================= */}
      <section className="border-t border-slate-100 bg-[#f8fafc] py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
              OPERATIONAL FLOW
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
              Your Tools Should Work Together —
              <span className="block text-slate-500 font-semibold mt-1">Not Create More Work.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              These AI solutions are designed to work around real business operations.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 text-center shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mx-auto mb-4 border border-blue-100">
                <Boxes className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Bring Information Together</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Consolidates fragmented files, chats, and CRMs into one context.</p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 text-center shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 mx-auto mb-4 border border-sky-100">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Reduce Repeated Tasks</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Automates follow-ups, agenda creation, and status summaries.</p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 text-center shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 mx-auto mb-4 border border-teal-100">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Surface Priorities</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Flags risks, bottlenecks, and misses before they become critical.</p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 text-center shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mx-auto mb-4 border border-indigo-100">
                <ArrowRight className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Information → Action Faster</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Empowers your team to execute immediately with pre-drafted steps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. CONCLUSION - NEED SOMETHING MORE? (CollabAI Navy CTA Card)
         ========================================================================= */}
      <section className="border-t border-slate-100 bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 lg:p-16 shadow-xl border border-slate-800">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                NEED SOMETHING MORE?
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                When Your Needs Go Beyond Lite,
                <span className="block text-blue-400 mt-1">We Can Go Further.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Need AI across more workflows, teams or systems? We also provide annual AI services and custom-built solutions around your business.
              </p>

              {/* 8 Feature Chips */}
              <div className="mt-8 flex flex-wrap gap-2">
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
                    className="inline-flex items-center rounded-lg border border-slate-700/80 bg-slate-900/80 px-3.5 py-1.5 text-xs font-semibold text-slate-200"
                  >
                    <Check className="mr-1.5 h-3.5 w-3.5 text-blue-400" />
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3.5">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full border border-white bg-white px-8 py-3.5 font-bold text-slate-950 shadow-md hover:bg-slate-100"
                >
                  <Link to="/collabai-platform">
                    <span>Explore Full & Custom AI Solutions</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border border-slate-700 bg-slate-900/80 text-white hover:bg-slate-800 hover:text-white px-8 py-3.5 font-semibold"
                >
                  <Link to="/book-demo">
                    Schedule Private Architecture Review
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          12. BUILT AND BROUGHT TO YOU BY SJ INNOVATION (Matches CollabAI Trust Section)
         ========================================================================= */}
      <section className="border-t border-slate-100 bg-[#fbfdfa] py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-slate-200/80">
            <div className="flex items-center gap-4">
              <img
                src={sjInnovationLogo}
                alt="SJ Innovation"
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <div className="h-8 w-px bg-slate-200" />
              <div className="flex items-center gap-2.5">
                <img
                  src={iso27001Logo}
                  alt="ISO 27001 Certified"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
                <span className="text-xs font-semibold text-slate-500 max-w-[150px] leading-tight hidden md:inline-block">
                  ISO/IEC 27001:2022 Certified Information Security
                </span>
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-slate-950 leading-tight text-left sm:text-right">
              <span className="block">Built on 22 Years of</span>
              <span className="block text-blue-600">Technology Delivery Experience</span>
            </h2>
          </div>

          {/* Stats Grid matching CollabAI Trust Style */}
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#f97316]">
                500+
              </div>
              <div className="mt-1 text-xs sm:text-sm font-medium text-slate-600">
                Professionals On Board
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#f97316]">
                22
              </div>
              <div className="mt-1 text-xs sm:text-sm font-medium text-slate-600">
                Years Of Market Experience
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#f97316]">
                1,000+
              </div>
              <div className="mt-1 text-xs sm:text-sm font-medium text-slate-600">
                Successful Projects
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#f97316]">
                4
              </div>
              <div className="mt-1 text-xs sm:text-sm font-medium text-slate-600">
                Offices Worldwide
              </div>
            </div>
          </div>

          {/* Recognition Bar */}
          <div className="mt-7 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-semibold text-slate-800">Recognition:</span>
              <span className="rounded-md bg-slate-100 border border-slate-200 px-2 py-0.5 text-slate-700 font-medium">Inc. 5000</span>
              <span>·</span>
              <span className="rounded-md bg-slate-100 border border-slate-200 px-2 py-0.5 text-slate-700 font-medium">Clutch Recognized</span>
              <span>·</span>
              <span className="rounded-md bg-slate-100 border border-slate-200 px-2 py-0.5 text-slate-700 font-medium">Certified NYC MBE</span>
            </div>
            <div className="text-slate-500">
              Delivered across enterprise software, mobile, cloud, and AI automation.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE LOVABLE REMIX / INSTANT BUY DIALOG MODAL (CollabAI Light Theme)
         ========================================================================= */}
      <Dialog open={!!selectedSolution} onOpenChange={(open) => !open && setSelectedSolution(null)}>
        <DialogContent className="max-w-lg border-slate-200 bg-white text-slate-900 p-6 sm:p-7 sm:rounded-3xl shadow-xl">
          {selectedSolution && (
            <>
              <DialogHeader>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 mb-1">
                  <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                  INSTANT BUY & LOVABLE REMIX
                </div>
                <DialogTitle className="text-2xl font-bold text-slate-950">
                  {selectedSolution.name}
                </DialogTitle>
                <DialogDescription className="text-slate-600 text-sm">
                  {selectedSolution.outcome}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 space-y-4">
                <div className="rounded-2xl border border-slate-100 bg-[#f8fafc] p-4.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Included in Lite Edition:
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700 font-medium">
                    {selectedSolution.helpsWith.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-3.5 text-xs text-emerald-900 flex items-center justify-between font-medium">
                  <span>Pre-configured template with Zero Lock-In</span>
                  <Badge variant="outline" className="border-emerald-300 text-emerald-700 bg-white text-[10px]">
                    Production Ready
                  </Badge>
                </div>

                <div className="space-y-2.5 pt-2">
                  <Button
                    asChild
                    className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm"
                  >
                    <a
                      href={selectedSolution.lovableRemixUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Sparkles className="mr-2 h-4 w-4 text-amber-400" />
                      Remix on Lovable (Instant Deploy)
                      <ArrowUpRight className="ml-1.5 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full h-11 rounded-xl border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm"
                  >
                    <Link to={selectedSolution.targetHref}>
                      View Dedicated Solution Guide
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </Button>
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
