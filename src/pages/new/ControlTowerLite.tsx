import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Sparkles,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  ExternalLink,
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
  Award,
  Layers,
  ChevronRight,
  Boxes,
  Compass,
  ArrowUpRight,
  Activity,
  HeartPulse,
  HeartHandshake,
  Landmark,
  KeyRound,
  TrendingUp,
  LineChart,
  Megaphone,
  UserCheck,
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
  badge?: string;
  category: "agency" | "industry" | "growth";
  problem: string;
  description: string[];
  helpsWith: string[];
  outcome: string;
  targetHref: string;
  lovableRemixUrl: string;
  icon: typeof Building2;
  accentColor: string;
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
    accentColor: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30",
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
    accentColor: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
  },
  {
    id: "nonprofit-lite",
    name: "Nonprofit Control Tower Lite",
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
    accentColor: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30",
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
    accentColor: "from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30",
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
    accentColor: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30",
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
    accentColor: "from-rose-500/20 to-red-500/20 text-rose-400 border-rose-500/30",
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
    accentColor: "from-violet-500/20 to-purple-500/20 text-violet-400 border-violet-500/30",
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
    accentColor: "from-sky-500/20 to-indigo-500/20 text-sky-400 border-sky-500/30",
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
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      <Helmet>
        <title>Control Tower Lite — Practical AI Solutions for Real Business Workflows | CollabAI</title>
        <meta
          name="description"
          content="You don't need the biggest AI system. You need the right starting point. Explore Control Tower Lite solutions for agencies, healthcare, nonprofits, mortgage, realtors, marketing, and CS."
        />
        <link rel="canonical" href="https://collabai.software/control-tower-lite" />
      </Helmet>

      {/* =========================================================================
          1. HERO - FIRST FOLD (Clean, bold editorial style as referenced)
         ========================================================================= */}
      <section className="relative overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950 pt-16 pb-20 sm:pt-24 sm:pb-28">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="pointer-events-none absolute top-1/2 -right-40 -z-10 h-[400px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-300 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-blue-400" />
            <span>INTRODUCING LITE</span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-300">Designed to make Your First Step Easier</span>
          </div>

          {/* Main Headline */}
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            You Don’t Need the Biggest AI System.
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-teal-300 bg-clip-text text-transparent">
              You Need the Right Starting Point.
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300 sm:text-xl md:text-2xl font-normal leading-relaxed">
            AI projects often become complicated because businesses try to solve everything at once.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={scrollToSolutions}
              className="h-13 px-8 text-base font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Lite Now
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setSelectedSolution(LITE_SOLUTIONS[0])}
              className="h-13 px-8 text-base font-semibold border-slate-700 bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:text-white transition-all"
            >
              <Sparkles className="mr-2 h-4 w-4 text-amber-400" />
              Lovable Remix (Instant Buy)
            </Button>
          </div>

          {/* Industries Supported Band */}
          <div className="mt-16 pt-10 border-t border-slate-800/80">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-5">
              AI solutions purpose-built for:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
              {INDUSTRIES_TICKER.map((industry) => (
                <span
                  key={industry}
                  className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/90 px-3.5 py-1.5 text-xs font-medium text-slate-300 shadow-sm"
                >
                  <CheckCircle2 className="mr-1.5 h-3 w-3 text-blue-400" />
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
      <section className="relative border-b border-slate-800/80 bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="outline" className="border-blue-500/40 text-blue-400 bg-blue-500/10 mb-4 px-3 py-1">
              THE PHILOSOPHY
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              A Smaller Starting Point.
              <br />
              <span className="text-slate-400">Not Just Another AI Demo.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              Our Lite products are focused versions of larger AI platforms and industry solutions. Instead of asking you to commit to a large system before you know how it fits your business, Lite gives you a practical way to start with the workflows that matter most.
            </p>
          </div>

          {/* 4 Step Pillars */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur transition-all hover:border-slate-700 hover:bg-slate-900/80">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-5">
                <Target className="h-5 w-5" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">Step 01</div>
              <h3 className="text-lg font-bold text-white mb-2">Start With One Need</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Choose the area where your team is losing time, missing opportunities or doing too much work manually.
              </p>
            </div>

            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur transition-all hover:border-slate-700 hover:bg-slate-900/80">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 mb-5">
                <Workflow className="h-5 w-5" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1">Step 02</div>
              <h3 className="text-lg font-bold text-white mb-2">Experience the Workflow</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                See AI working inside an actual business process instead of watching a generic presentation.
              </p>
            </div>

            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur transition-all hover:border-slate-700 hover:bg-slate-900/80">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 mb-5">
                <Lightbulb className="h-5 w-5" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-1">Step 03</div>
              <h3 className="text-lg font-bold text-white mb-2">Learn What Works for You</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Understand where AI creates real value before expanding your investment.
              </p>
            </div>

            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur transition-all hover:border-slate-700 hover:bg-slate-900/80">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-5">
                <Rocket className="h-5 w-5" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">Step 04</div>
              <h3 className="text-lg font-bold text-white mb-2">Scale When You Are Ready</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Move into a larger annual solution, additional workflows or a customized system when the business case is clear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3–6. CHOOSE YOUR LITE SOLUTION (Product Folds - 8 Cards)
          Design Reference: Sleek dark cards with glowing borders & Instant Buy
         ========================================================================= */}
      <section id="choose-lite" className="relative border-b border-slate-800/80 bg-slate-950 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="border-blue-500/40 text-blue-400 bg-blue-500/10 mb-3 px-3 py-1">
              PRODUCTION-READY EDITIONS
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl uppercase">
              CHOOSE YOUR LITE SOLUTION
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400">
              Every Lite solution is fully pre-configured, production-ready, and available for instant deployment or 1-click Lovable remix.
            </p>

            {/* Filter Tabs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              <Button
                variant={filterCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterCategory("all")}
                className={filterCategory === "all" ? "bg-blue-600 text-white" : "border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900"}
              >
                All Solutions (8)
              </Button>
              <Button
                variant={filterCategory === "agency" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterCategory("agency")}
                className={filterCategory === "agency" ? "bg-blue-600 text-white" : "border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900"}
              >
                Agencies & Ops
              </Button>
              <Button
                variant={filterCategory === "industry" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterCategory("industry")}
                className={filterCategory === "industry" ? "bg-blue-600 text-white" : "border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900"}
              >
                Healthcare, Nonprofits, Mortgage
              </Button>
              <Button
                variant={filterCategory === "growth" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterCategory("growth")}
                className={filterCategory === "growth" ? "bg-blue-600 text-white" : "border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900"}
              >
                Real Estate, Marketing & CS
              </Button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {filteredSolutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <div
                  key={solution.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800/90 bg-gradient-to-b from-slate-900/90 to-slate-950 p-7 sm:p-8 shadow-xl transition-all duration-300 hover:border-slate-700 hover:shadow-2xl hover:shadow-blue-900/10"
                >
                  {/* Glowing subtle top bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Header: Badge & Category */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-800/60 px-3 py-1 text-xs font-semibold text-slate-200">
                        <Icon className="h-3.5 w-3.5 text-blue-400" />
                        {solution.badge || solution.name}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-0.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Instant Deploy
                      </span>
                    </div>

                    {/* Problem Hook Question */}
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2 leading-snug">
                      {solution.problem}
                    </h3>

                    {/* Product Name Label */}
                    <div className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-4">
                      {solution.name}
                    </div>

                    {/* Description Paragraphs */}
                    <div className="space-y-1 text-sm text-slate-300 mb-6">
                      {solution.description.map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>

                    {/* What It Helps With */}
                    <div className="mb-6 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                        What It Helps With:
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        {solution.helpsWith.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcome Highlight Box */}
                    <div className="mb-7 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4 text-xs sm:text-sm text-blue-200">
                      <span className="font-bold text-blue-400 uppercase tracking-wide mr-1.5">Outcome:</span>
                      {solution.outcome}
                    </div>
                  </div>

                  {/* Action Buttons: Explore + Lovable Remix */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row gap-3 items-stretch">
                    <Button
                      asChild
                      className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md"
                    >
                      <Link to={solution.targetHref}>
                        Explore {solution.name}
                        <ArrowRight className="ml-1.5 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedSolution(solution)}
                      className="border-slate-700 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm"
                    >
                      <Sparkles className="mr-1.5 h-3.5 w-3.5 text-amber-400" />
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
          7. BENEFITS (Design Reference: Image 3 - High Contrast / Vibrant Cards)
         ========================================================================= */}
      <section className="relative border-b border-slate-800/80 bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge variant="outline" className="border-blue-500/40 text-blue-400 bg-blue-500/10 mb-3 px-3 py-1">
              WHAT YOU GET
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl uppercase">
              More Output From the Workday You Already Have.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400">
              Clear outcomes, zero fluff. Built to unlock focus and strip away manual busywork.
            </p>
          </div>

          {/* 6 High-Contrast Cards inspired by the vibrant PayPal cards reference */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1: Save Time */}
            <div className="relative overflow-hidden rounded-3xl bg-[#f59e0b] p-7 sm:p-8 text-slate-950 shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-black uppercase tracking-wider text-slate-900 border-b-2 border-slate-950/40 pb-0.5">
                  EFFICIENCY
                </span>
                <Clock className="h-6 w-6 text-slate-950" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
                Save Time.
              </h3>
              <p className="text-base font-medium text-slate-900 leading-relaxed mb-6">
                Reduce repetitive everyday work across your team.
              </p>
              <div className="pt-4 border-t border-slate-950/20 text-xs font-bold uppercase tracking-wider text-slate-950/80 flex items-center justify-between">
                <span>Outcome-Driven</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            {/* Card 2: Increase Productivity */}
            <div className="relative overflow-hidden rounded-3xl bg-[#f97316] p-7 sm:p-8 text-white shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-black uppercase tracking-wider text-white border-b-2 border-white/40 pb-0.5">
                  CAPACITY
                </span>
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
                Increase Productivity.
              </h3>
              <p className="text-base font-medium text-white/95 leading-relaxed mb-6">
                Help your team complete more without adding unnecessary manual steps.
              </p>
              <div className="pt-4 border-t border-white/20 text-xs font-bold uppercase tracking-wider text-white/80 flex items-center justify-between">
                <span>Higher Throughput</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            {/* Card 3: Respond Faster */}
            <div className="relative overflow-hidden rounded-3xl bg-[#ec4899] p-7 sm:p-8 text-white shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-black uppercase tracking-wider text-white border-b-2 border-white/40 pb-0.5">
                  SPEED
                </span>
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
                Respond Faster.
              </h3>
              <p className="text-base font-medium text-white/95 leading-relaxed mb-6">
                Keep customers, leads and important tasks moving without delay.
              </p>
              <div className="pt-4 border-t border-white/20 text-xs font-bold uppercase tracking-wider text-white/80 flex items-center justify-between">
                <span>Zero Stalled Leads</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            {/* Card 4: See What Matters */}
            <div className="relative overflow-hidden rounded-3xl bg-[#6366f1] p-7 sm:p-8 text-white shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-black uppercase tracking-wider text-white border-b-2 border-white/40 pb-0.5">
                  VISIBILITY
                </span>
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
                See What Matters.
              </h3>
              <p className="text-base font-medium text-white/95 leading-relaxed mb-6">
                Surface priorities without digging through multiple disconnected systems.
              </p>
              <div className="pt-4 border-t border-white/20 text-xs font-bold uppercase tracking-wider text-white/80 flex items-center justify-between">
                <span>Instant Clarity</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            {/* Card 5: Stay Organized */}
            <div className="relative overflow-hidden rounded-3xl bg-[#10b981] p-7 sm:p-8 text-slate-950 shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-black uppercase tracking-wider text-slate-900 border-b-2 border-slate-950/40 pb-0.5">
                  STRUCTURE
                </span>
                <Boxes className="h-6 w-6 text-slate-950" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
                Stay Organized.
              </h3>
              <p className="text-base font-medium text-slate-900 leading-relaxed mb-6">
                Keep important information and everyday work easy to manage and find.
              </p>
              <div className="pt-4 border-t border-slate-950/20 text-xs font-bold uppercase tracking-wider text-slate-950/80 flex items-center justify-between">
                <span>Unified Governance</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            {/* Card 6: Make Better Decisions */}
            <div className="relative overflow-hidden rounded-3xl bg-[#0ea5e9] p-7 sm:p-8 text-slate-950 shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-black uppercase tracking-wider text-slate-900 border-b-2 border-slate-950/40 pb-0.5">
                  INTELLIGENCE
                </span>
                <LineChart className="h-6 w-6 text-slate-950" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
                Make Better Decisions.
              </h3>
              <p className="text-base font-medium text-slate-900 leading-relaxed mb-6">
                Turn business information into useful insights and clearer next actions.
              </p>
              <div className="pt-4 border-t border-slate-950/20 text-xs font-bold uppercase tracking-wider text-slate-950/80 flex items-center justify-between">
                <span>Actionable Insight</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. EXPLAINING WHY (Built for Work. Not Just Prompts.)
         ========================================================================= */}
      <section className="relative border-b border-slate-800/80 bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <Badge variant="outline" className="border-blue-500/40 text-blue-400 bg-blue-500/10 mb-3 px-3 py-1">
              WHY THESE AI SOLUTIONS?
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Built for Work.
              <br />
              <span className="text-slate-400">Not Just Prompts.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Generic AI gives you a blank box. These solutions are built around actual business workflows.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">01 · Purpose-Built</div>
              <h3 className="text-lg font-bold text-white mb-2">Purpose-Built</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Designed for specific teams and industries — not a one-size-fits-all experiment.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">02 · Practical</div>
              <h3 className="text-lg font-bold text-white mb-2">Practical</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Focused on everyday work your team already handles so adoption happens naturally.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-2">03 · Action-Oriented</div>
              <h3 className="text-lg font-bold text-white mb-2">Action-Oriented</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Built to help surface what needs attention next and guide immediate execution.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2">04 · Easy to Use</div>
              <h3 className="text-lg font-bold text-white mb-2">Easy to Use</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                AI fits into the workflow instead of becoming another complicated system to manage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. BUILT AROUND THE WAY YOU WORK
         ========================================================================= */}
      <section className="relative border-b border-slate-800/80 bg-slate-900/50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge variant="outline" className="border-blue-500/40 text-blue-400 bg-blue-500/10 mb-3 px-3 py-1">
              OPERATIONAL FLOW
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Your Tools Should Work Together —
              <br />
              <span className="text-slate-400">Not Create More Work.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              These AI solutions are designed to work around real business operations.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 mx-auto mb-4">
                <Boxes className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Bring Information Together</h3>
              <p className="text-xs text-slate-400">Consolidates fragmented files, chats, and CRMs into one context.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600/10 text-sky-400 mx-auto mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Reduce Repeated Tasks</h3>
              <p className="text-xs text-slate-400">Automates follow-ups, agenda creation, and status summaries.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600/10 text-teal-400 mx-auto mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Surface Priorities</h3>
              <p className="text-xs text-slate-400">Flags risks, bottlenecks, and misses before they become critical.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-400 mx-auto mb-4">
                <ArrowRight className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Information → Action Faster</h3>
              <p className="text-xs text-slate-400">Empowers your team to execute immediately with pre-drafted steps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. CONCLUSION - NEED SOMETHING MORE?
         ========================================================================= */}
      <section className="relative border-b border-slate-800/80 bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                NEED SOMETHING MORE?
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                When Your Needs Go Beyond Lite,
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  We Can Go Further.
                </span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Need AI across more workflows, teams or systems? We also provide annual AI services and custom-built solutions tailored directly around your enterprise business model.
              </p>

              {/* 8 Feature Chips */}
              <div className="mt-8 flex flex-wrap gap-2.5">
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
                    className="inline-flex items-center rounded-lg border border-slate-700/80 bg-slate-800/60 px-3.5 py-1.5 text-xs font-semibold text-slate-200"
                  >
                    <Check className="mr-1.5 h-3.5 w-3.5 text-blue-400" />
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/20"
                >
                  <Link to="/collabai-platform">
                    Explore Full & Custom AI Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white"
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
          12. BUILT AND BROUGHT TO YOU BY SJ INNOVATION (Image 4 Design Reference)
         ========================================================================= */}
      <section className="relative border-b border-slate-800/80 bg-slate-950 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-800/90 bg-slate-900/40 p-8 sm:p-10 backdrop-blur">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
              <div className="flex items-center gap-5">
                <img
                  src={sjInnovationLogo}
                  alt="SJ Innovation"
                  className="h-10 w-auto object-contain brightness-0 invert opacity-90"
                />
                <div className="h-8 w-px bg-slate-800" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    BUILT AND BROUGHT TO YOU BY SJ INNOVATION
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    22+ Years of Proven Technology Delivery.
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={iso27001Logo}
                  alt="ISO 27001 Certified"
                  className="h-9 w-auto object-contain opacity-90"
                />
                <span className="text-xs font-semibold text-slate-400 max-w-[160px] leading-tight">
                  ISO/IEC 27001:2022 Certified Information Security
                </span>
              </div>
            </div>

            {/* Stats Row (matches Screenshot 4) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 text-center border-b border-slate-800">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-500">500+</div>
                <div className="mt-1 text-xs sm:text-sm font-medium text-slate-300">Professionals On Board</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-500">22</div>
                <div className="mt-1 text-xs sm:text-sm font-medium text-slate-300">Years Of Market Experience</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-500">1000+</div>
                <div className="mt-1 text-xs sm:text-sm font-medium text-slate-300">Successful Projects</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-500">4</div>
                <div className="mt-1 text-xs sm:text-sm font-medium text-slate-300">Offices Worldwide</div>
              </div>
            </div>

            {/* Recognition Bar (matches Screenshot 4) */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-semibold text-slate-300">Recognition:</span>
                <span className="rounded bg-slate-800/80 px-2 py-0.5 text-slate-200">Inc. 5000</span>
                <span>·</span>
                <span className="rounded bg-slate-800/80 px-2 py-0.5 text-slate-200">Clutch Recognized</span>
                <span>·</span>
                <span className="rounded bg-slate-800/80 px-2 py-0.5 text-slate-200">Certified NYC MBE</span>
              </div>
              <div>
                Delivered across enterprise software, mobile, cloud, and AI automation.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE LOVABLE REMIX / INSTANT BUY DIALOG MODAL
         ========================================================================= */}
      <Dialog open={!!selectedSolution} onOpenChange={(open) => !open && setSelectedSolution(null)}>
        <DialogContent className="max-w-lg border-slate-800 bg-slate-950 text-slate-100 p-6 sm:p-7 sm:rounded-2xl">
          {selectedSolution && (
            <>
              <DialogHeader>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 mb-1">
                  <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                  INSTANT BUY & LOVABLE REMIX
                </div>
                <DialogTitle className="text-2xl font-bold text-white">
                  {selectedSolution.name}
                </DialogTitle>
                <DialogDescription className="text-slate-400 text-sm">
                  {selectedSolution.outcome}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 space-y-4">
                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Included in Lite Edition:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {selectedSolution.helpsWith.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3.5 text-xs text-emerald-300 flex items-center justify-between">
                  <span>Pre-configured template with Zero Lock-In</span>
                  <Badge variant="outline" className="border-emerald-400/40 text-emerald-300 bg-emerald-400/10 text-[10px]">
                    Production Ready
                  </Badge>
                </div>

                <div className="space-y-2 pt-2">
                  <Button
                    asChild
                    className="w-full h-11 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md"
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
                    className="w-full h-11 border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white font-medium text-sm"
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
