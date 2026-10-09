import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Database,
  Users,
  FileText,
  Calendar,
  Sparkles,
  Lock,
  Layers,
  Server,
  Cloud,
  Check,
  ExternalLink,
  Bot,
  BarChart3,
  Search,
  Zap,
  HelpCircle,
  Clock,
  Briefcase,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import PageSeoHead from "@/components/PageSeoHead";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Client Logos
import iaaboLogo from "@/assets/clients/iaabo.png";
import bspLogo from "@/assets/clients/bsp.png";
import theOptimistsLogo from "@/assets/clients/the-optimists.png";
import queensChamberLogo from "@/assets/clients/queens-chamber.png";

// Section Visuals & Components
import NonprofitIntegrationsBeam from "@/components/new/nonprofit/NonprofitIntegrationsBeam";
import WhatYouCanDoSection from "@/components/new/nonprofit/WhatYouCanDoSection";
import NonprofitSecuritySection from "@/components/new/nonprofit/NonprofitSecuritySection";
import problemScatteredDonors from "@/assets/nonprofit/problem-scattered-donors.png";
import problemReportingTime from "@/assets/nonprofit/problem-reporting-time.jpg";
import problemManualWork from "@/assets/nonprofit/problem-manual-work.png";
import problemLeadershipView from "@/assets/nonprofit/problem-leadership-view.jpg";
import heroCommunityImpact from "@/assets/nonprofit/hero-community-impact.jpg";

// Integration Logos
import salesforceLogo from "@/assets/logos/salesforce.svg";
import blackbaudLogo from "@/assets/logos/blackbaud.svg";
import bloomerangLogo from "@/assets/logos/bloomerang.svg";
import quickbooksLogo from "@/assets/logos/intuitquickbooks.svg";
import hubspotLogo from "@/assets/logos/hubspot.svg";
import stripeLogo from "@/assets/logos/stripe.svg";
import paypalLogo from "@/assets/logos/paypal.svg";
import eventbriteLogo from "@/assets/logos/eventbrite.svg";
import ms365Logo from "@/assets/logos/ms365.svg";
import googleWorkspaceLogo from "@/assets/logos/google-workspace.svg";
import zoomLogo from "@/assets/logos/zoom.svg";
import mailchimpLogo from "@/assets/logos/mailchimp.svg";

const seo = {
  title: "Nonprofit Control Tower — AI Operations for Nonprofits & Boards",
  description:
    "Connect your donors, grants, programs, meetings, documents and board operations in one private AI-powered Nonprofit Control Tower without replacing the tools you already use.",
  canonicalPath: "/non-profit",
};

// Primary CTA Component: STRICT RULE - Every CTA button must say exactly "Book Free Demo"
const BookFreeDemoBtn = ({
  className = "",
  variant = "primary",
}: {
  className?: string;
  variant?: "primary" | "secondary" | "white";
}) => {
  const base =
    "group inline-flex items-center justify-center whitespace-nowrap rounded-full px-8 py-3.5 text-sm md:text-base font-semibold transition-all duration-200 active:translate-y-[1px]";

  const variants = {
    primary:
      "bg-[#14a800] text-white hover:bg-[#118f00] shadow-[0_4px_18px_rgba(20,168,0,0.28)] hover:shadow-[0_6px_24px_rgba(20,168,0,0.38)]",
    secondary:
      "border border-[#14a800]/30 bg-[#e7f5e3]/60 text-[#118f00] hover:bg-[#e7f5e3] hover:border-[#14a800]/50",
    white:
      "bg-white text-[#0c180a] hover:bg-slate-50 shadow-md hover:shadow-lg",
  };

  return (
    <Link
      to="/book-demo"
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span>Book Free Demo</span>
    </Link>
  );
};

const NonProfitHub = () => {
  return (
    <div className="min-h-screen bg-white text-[#0c180a] selection:bg-[#e7f5e3] selection:text-[#118f00]">
      <PageSeoHead
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      />

      {/* ========================================================
          1. HERO / FIRST FOLD
          Clean first fold: strong headline, supporting copy, single primary CTA.
          No pricing, agent counts, or architecture clutter here.
      ======================================================== */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28">
        {/* Soft background ambient gradient meshes matching nonprofitai.software */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 18% 15%, rgba(20, 168, 0, 0.08) 0%, transparent 40%),
              radial-gradient(circle at 85% 20%, rgba(20, 168, 0, 0.06) 0%, transparent 45%),
              radial-gradient(circle at 50% 100%, rgba(231, 245, 227, 0.8) 0%, transparent 55%)
            `,
          }}
        />

        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left Column: Copy & Action */}
            <div className="text-left lg:col-span-7">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#14a800]/25 bg-[#e7f5e3]/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#118f00] shadow-2xs">
                <Sparkles className="h-3.5 w-3.5 text-[#14a800]" />
                <span>AI Operations for Nonprofits & Boards</span>
              </div>

              {/* Main Headline */}
              <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-[#0c180a] sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] leading-[1.12]">
                <span className="block">Spend Less Time Managing Systems.</span>
                <span className="block mt-1.5 text-[#14a800]">
                  More Time Moving Your Mission Forward.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="mt-6 max-w-2xl text-base text-slate-600 sm:text-lg sm:leading-relaxed text-pretty">
                Connect your donors, grants, programs, meetings, documents and board
                operations in one private AI-powered Nonprofit Control Tower without
                replacing the tools you already&nbsp;use.
              </p>

              <p className="mt-2.5 text-sm font-medium text-slate-500 text-pretty">
                See what your nonprofit could run from one connected&nbsp;system.
              </p>

              {/* Primary CTA + Reassurance */}
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <BookFreeDemoBtn />
              </div>

              {/* Social Proof Strip (like Dribbble reference 4K+ trusted) */}
              <div className="mt-10 flex items-center gap-4 pt-6 border-t border-slate-200/70">
                <div className="flex -space-x-2 overflow-hidden">
                  <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-[#14a800] text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                    ED
                  </div>
                  <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-[#0c180a] text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                    BM
                  </div>
                  <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-slate-700 text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                    GO
                  </div>
                  <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-[#e7f5e3] text-[#118f00] flex items-center justify-center font-bold text-xs shadow-2xs">
                    +
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0c180a]">
                    500+ Organizations & Boards
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Supported across North America & Global Missions
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Authentic Community Impact Photo with Floating Modern Badges */}
            <div className="relative lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[480px]">
                {/* Backing Ambient Decorative Glow */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[#14a800]/20 via-[#e7f5e3]/50 to-transparent blur-xl -z-10"
                />

                {/* Primary Photo Card */}
                <div className="relative overflow-hidden rounded-3xl border border-[#14a800]/25 bg-white p-2.5 shadow-[0_20px_50px_rgba(20,168,0,0.12)]">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[1/1] w-full">
                    <img
                      src={heroCommunityImpact}
                      alt="Dedicated nonprofit volunteers and community members working together in a fresh food distribution program"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Floating Card 1: Top Right Pill */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 flex items-center gap-2.5 rounded-2xl border border-slate-200/90 bg-white/95 px-4 py-2.5 shadow-xl backdrop-blur-xs">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#e7f5e3] text-[#14a800]">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900">Private Data Vault</div>
                    <div className="text-[10px] text-slate-500 font-medium">Zero public model training</div>
                  </div>
                </div>

                {/* Floating Card 2: Bottom Left Badge */}
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 flex items-center gap-2.5 rounded-2xl border border-slate-200/90 bg-white/95 px-4 py-2.5 shadow-xl backdrop-blur-xs">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#e7f5e3] text-[#14a800]">
                    <CheckCircle2 className="h-4 w-4 text-[#14a800]" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900">Zero Migration Required</div>
                    <div className="text-[10px] text-slate-500 font-medium">Syncs CRM, files & accounting</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. TRUST BAR
          Credible proof strip: 22 years, 500+ clients, 1,000+ projects,
          ISO/IEC 27001:2022 Certified, and 4 client logos.
      ======================================================== */}
      <section className="border-y border-slate-100 bg-[#fbfdfa] py-8">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
            Built on 22 years of technology delivery experience from SJ Innovation
          </p>

          {/* Key Credibility Stats */}
          <div className="mt-6 grid grid-cols-2 gap-4 text-center md:grid-cols-4 md:gap-8">
            <div className="rounded-xl border border-slate-100 bg-white p-3.5 shadow-xs">
              <div className="text-2xl font-extrabold text-[#14a800] md:text-3xl">
                22 Years
              </div>
              <div className="mt-0.5 text-xs font-medium text-slate-500">
                Technology delivery
              </div>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-3.5 shadow-xs">
              <div className="text-2xl font-extrabold text-[#14a800] md:text-3xl">
                500+
              </div>
              <div className="mt-0.5 text-xs font-medium text-slate-500">
                Clients served
              </div>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-3.5 shadow-xs">
              <div className="text-2xl font-extrabold text-[#14a800] md:text-3xl">
                1,000+
              </div>
              <div className="mt-0.5 text-xs font-medium text-slate-500">
                Projects delivered
              </div>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-3.5 shadow-xs">
              <div className="text-lg font-bold text-[#14a800] md:text-xl">
                ISO/IEC 27001:2022
              </div>
              <div className="mt-0.5 text-xs font-medium text-slate-500">
                Certified security
              </div>
            </div>
          </div>

          {/* Client Logos Strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-10 md:gap-16">
            <div className="flex h-16 items-center justify-center grayscale transition-all hover:grayscale-0 opacity-80 hover:opacity-100">
              <img
                src={iaaboLogo}
                alt="IAABO"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </div>
            <div className="flex h-16 items-center justify-center grayscale transition-all hover:grayscale-0 opacity-80 hover:opacity-100">
              <img
                src={bspLogo}
                alt="BSP"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </div>
            <div className="flex h-16 items-center justify-center grayscale transition-all hover:grayscale-0 opacity-80 hover:opacity-100">
              <img
                src={theOptimistsLogo}
                alt="The Optimists"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </div>
            <div className="flex h-16 items-center justify-center grayscale transition-all hover:grayscale-0 opacity-80 hover:opacity-100">
              <img
                src={queensChamberLogo}
                alt="Queens Chamber of Commerce"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. THE PROBLEM
          H1 headline style + infographic representation for subheaders.
          Inspired by Agency CT landing page structure.
      ======================================================== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#14a800]">
              Operational Reality
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0c180a] sm:text-4xl md:text-5xl text-balance">
              <span className="block">Your mission should not be buried</span>
              <span className="block">under operational busywork.</span>
            </h2>
          </div>

          {/* Infographic Problem Cards */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-200 hover:border-[#14a800]/40 hover:shadow-lg">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50/70 border-b border-slate-100 flex items-center justify-center p-3">
                <img
                  src={problemScatteredDonors}
                  alt="Scattered donor data across spreadsheets, CRM, and files"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-[#0c180a]">
                  Your donor information is&nbsp;scattered.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 text-pretty">
                  CRM, spreadsheets, email, accounting software and event platforms
                  all hold different pieces of the&nbsp;story.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-200 hover:border-[#14a800]/40 hover:shadow-lg">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50/70 border-b border-slate-100 flex items-center justify-center p-3">
                <img
                  src={problemReportingTime}
                  alt="Reporting takes too long with stacks of binders and hourglass"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-[#0c180a]">
                  Reporting takes too&nbsp;long.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 text-pretty">
                  Staff spend hours gathering information before leadership or
                  board&nbsp;meetings.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-200 hover:border-[#14a800]/40 hover:shadow-lg">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50/70 border-b border-slate-100 flex items-center justify-center p-3">
                <img
                  src={problemManualWork}
                  alt="Too much work is still manual with repetitive task cycles"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-[#0c180a]">
                  Too much work is still&nbsp;manual.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 text-pretty">
                  Follow-ups, summaries, grant reporting, meeting actions and data
                  cleanup consume valuable staff&nbsp;time.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-200 hover:border-[#14a800]/40 hover:shadow-lg">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50/70 border-b border-slate-100 flex items-center justify-center p-3">
                <img
                  src={problemLeadershipView}
                  alt="Leadership lacks one clear view across disparate dashboards"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-[#0c180a]">
                  Leadership lacks one clear&nbsp;view.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 text-pretty">
                  When an Executive Director asks, “Where do we stand?” The answer
                  should not require five systems and three&nbsp;spreadsheets.
                </p>
              </div>
            </div>
          </div>

          {/* Impactful Guiding Statement */}
          <div className="mt-14 sm:mt-16 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-[#0c180a]">
              That is where the <span className="text-[#14a800]">Nonprofit Control Tower</span> comes in.
            </h3>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. THE NONPROFIT CONTROL TOWER SOLUTION
          Explains product in plain language + connected systems visual.
      ======================================================== */}
      <section className="border-t border-slate-100 bg-[#f9fbf8] py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#14a800]">
              The Unified Solution
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0c180a] sm:text-4xl md:text-5xl text-balance">
              <span className="block">One place to understand</span>
              <span className="block">and run your nonprofit.</span>
            </h2>
            
            {/* Fluid, relaxed editorial copy replacing rigid narrow paragraphs */}
            <div className="mt-6 mx-auto max-w-3xl space-y-4 text-base sm:text-lg leading-relaxed text-slate-600">
              <p className="text-pretty">
                The <strong className="font-semibold text-slate-900">Nonprofit Control Tower</strong> sits across the tools you already rely on — turning scattered donor spreadsheets, grant files, and meeting minutes into one clear, real-time operational view for your staff, leadership, and board.
              </p>
              <p className="text-pretty text-slate-500 text-sm sm:text-base">
                Connect data seamlessly, surface immediate answers, and automate repetitive busywork — keeping everyone aligned without forcing your organization to replace a single tool you already know.
              </p>
            </div>
          </div>

          {/* Connected Systems Diagram Visual */}
          <div className="mt-14">
            <NonprofitIntegrationsBeam />
          </div>
        </div>
      </section>

      {/* ========================================================
          5. WHAT YOU CAN DO
          Donorbox-inspired alternating cards with video trigger & peeking corner UI.
      ======================================================== */}
      <WhatYouCanDoSection />

      {/* ========================================================
          6. SUCCESS STORIES
          Real proof before asking the visitor to make a decision.
          4 Clients: IAABO, BSP, The Optimists, Queens Chamber of Commerce.
      ======================================================== */}
      <section className="border-t border-slate-100 bg-[#fbfdfa] py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#14a800]">
              Real-World Proof
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0c180a] sm:text-4xl md:text-5xl text-balance">
              <span className="block">Built for organizations</span>
              <span className="block">doing real&nbsp;work.</span>
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg text-pretty">
              Real implementations delivering measurable operational time back to
              nonprofit&nbsp;teams.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {/* Case 1: IAABO */}
            <div className="flex flex-col rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-200 hover:border-[#14a800]/40 hover:shadow-lg md:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <img
                  src={iaaboLogo}
                  alt="IAABO"
                  className="h-12 w-auto object-contain"
                />
                <span className="rounded-full border border-[#14a800]/20 bg-[#e7f5e3] px-3 py-1 text-xs font-bold text-[#118f00]">
                  16,000+ Officials
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#0c180a]">
                AI learning for 16,000+ basketball&nbsp;officials
              </h3>

              {/* Mini Result Metric Card */}
              <div className="my-4 rounded-2xl border border-slate-100 bg-[#fbfdfa] p-3.5 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Impact Metric</div>
                  <div className="text-sm font-extrabold text-[#14a800]">100% Automated Testing & Certification</div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#e7f5e3] text-[#14a800]">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-600">
                <div>
                  <span className="font-semibold text-slate-900">Challenge: </span>
                  IAABO needed one place to train, test and certify officials
                  across local boards.
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    What we built:{" "}
                  </span>
                  SJ built an AI dashboard and learning academy with
                  configurable training rules, secure exams, certificates and
                  question-level analytics.
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <div className="inline-flex items-center gap-2 rounded-lg bg-[#e7f5e3] px-3.5 py-2 text-xs font-bold text-[#118f00]">
                  <CheckCircle2 className="h-4 w-4" />
                  Launched September 2026 | Supporting 16,000+ officials
                </div>
              </div>
            </div>

            {/* Case 2: BSP */}
            <div className="flex flex-col rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-200 hover:border-[#14a800]/40 hover:shadow-lg md:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <img
                  src={bspLogo}
                  alt="BSP"
                  className="h-12 w-auto object-contain"
                />
                <span className="rounded-full border border-[#14a800]/20 bg-[#e7f5e3] px-3 py-1 text-xs font-bold text-[#118f00]">
                  Community Operations
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#0c180a]">
                From a placeholder site to a live nonprofit Control&nbsp;Tower
              </h3>

              {/* Mini Result Metric Card */}
              <div className="my-4 rounded-2xl border border-slate-100 bg-[#fbfdfa] p-3.5 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Impact Metric</div>
                  <div className="text-sm font-extrabold text-[#14a800]">Unified Forms, Events & Donations</div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#e7f5e3] text-[#14a800]">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-600">
                <div>
                  <span className="font-semibold text-slate-900">Challenge: </span>
                  A volunteer-run community group needed online sign-ups and a
                  website its non-technical administrator could manage.
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    What we built:{" "}
                  </span>
                  SJ launched a new website backed by a Nonprofit Control Tower.
                  It handles events, gallery, members, volunteers and donations,
                  while online forms feed directly into the dashboard.
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <div className="inline-flex items-center gap-2 rounded-lg bg-[#e7f5e3] px-3.5 py-2 text-xs font-bold text-[#118f00]">
                  <CheckCircle2 className="h-4 w-4" />
                  Website + operations + forms connected in one system
                </div>
              </div>
            </div>

            {/* Case 3: The Optimists */}
            <div className="flex flex-col rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-200 hover:border-[#14a800]/40 hover:shadow-lg md:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <img
                  src={theOptimistsLogo}
                  alt="The Optimists"
                  className="h-10 w-auto object-contain"
                />
                <span className="rounded-full border border-[#14a800]/20 bg-[#e7f5e3] px-3 py-1 text-xs font-bold text-[#118f00]">
                  Legacy Modernization
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#0c180a]">
                Modernizing a 12-year-old nonprofit&nbsp;platform
              </h3>

              {/* Mini Result Metric Card */}
              <div className="my-4 rounded-2xl border border-slate-100 bg-[#fbfdfa] p-3.5 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Impact Metric</div>
                  <div className="text-sm font-extrabold text-[#14a800]">Zero Downtime Migration to Live Ops</div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#e7f5e3] text-[#14a800]">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-600">
                <div>
                  <span className="font-semibold text-slate-900">Challenge: </span>
                  An outdated WordPress site and admin panel were slowing the
                  team down.
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    What we built:{" "}
                  </span>
                  SJ moved hosting, rebuilt the admin panel and launched an
                  Optimists Control Tower connected to live data.
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <div className="inline-flex items-center gap-2 rounded-lg bg-[#e7f5e3] px-3.5 py-2 text-xs font-bold text-[#118f00]">
                  <CheckCircle2 className="h-4 w-4" />
                  Modernized infrastructure + live operational data
                </div>
              </div>
            </div>

            {/* Case 4: Queens Chamber of Commerce */}
            <div className="flex flex-col rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-200 hover:border-[#14a800]/40 hover:shadow-lg md:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <img
                  src={queensChamberLogo}
                  alt="Queens Chamber of Commerce"
                  className="h-10 w-auto object-contain"
                />
                <span className="rounded-full border border-[#14a800]/20 bg-[#e7f5e3] px-3 py-1 text-xs font-bold text-[#118f00]">
                  Community AI Infrastructure
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#0c180a]">
                AI for a whole business&nbsp;community
              </h3>

              {/* Mini Result Metric Card */}
              <div className="my-4 rounded-2xl border border-slate-100 bg-[#fbfdfa] p-3.5 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Impact Metric</div>
                  <div className="text-sm font-extrabold text-[#14a800]">Board Portal & Member AI Ecosystem</div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#e7f5e3] text-[#14a800]">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-600">
                <div>
                  <span className="font-semibold text-slate-900">Challenge: </span>
                  The Chamber needed practical AI infrastructure for its own team
                  and its member community.
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    What we built:{" "}
                  </span>
                  SJ built QueensChamberAI.org on the Nonprofit Control Tower
                  platform. The Chamber gets a board portal, document Q&A and
                  meeting summaries, while members receive a free AI marketing
                  toolkit.
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <div className="inline-flex items-center gap-2 rounded-lg bg-[#e7f5e3] px-3.5 py-2 text-xs font-bold text-[#118f00]">
                  <CheckCircle2 className="h-4 w-4" />
                  Board operations + document intelligence + member AI tools
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. MID-PAGE DECISION CTA
          Captures visitors who now understand problem, solution & proof.
          Styled as an elevated rounded-3xl banner card with bold, intentional,
          mathematically animated SVG frosted ribbon curves and floating telemetry nodes.
      ======================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c6600] via-[#118f00] to-[#0a5200] py-16 sm:py-20 md:py-24 text-white shadow-inner">
        {/* Ambient deep mesh background lighting */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(circle at 82% 40%, rgba(255, 255, 255, 0.3) 0%, transparent 45%),
              radial-gradient(circle at 95% 85%, rgba(20, 168, 0, 0.6) 0%, transparent 50%),
              radial-gradient(circle at 20% 90%, rgba(0, 0, 0, 0.25) 0%, transparent 60%)
            `,
          }}
        />

        {/* Subtle animated ambient aura pulse */}
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
          className="pointer-events-none absolute -right-16 top-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full bg-radial from-white/30 via-[#e7f5e3]/10 to-transparent blur-3xl -z-0"
        />

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12">
            {/* Left Column: Left-aligned Content */}
            <div className="text-left lg:col-span-7">
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-[2.65rem] leading-[1.18] text-balance">
                See What the Nonprofit Control Tower Could Do for Your Organization
              </h2>

              <p className="mt-5 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-white/90 text-pretty">
                Every nonprofit operates differently. In a free demo, we’ll show you
                how the Nonprofit Control Tower can connect with your existing
                systems, reduce manual work and support the workflows that matter
                most to your&nbsp;team.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <BookFreeDemoBtn variant="white" />
                <span className="text-xs font-medium text-white/80">
                  Focused on your organization’s actual workflows & priorities.
                </span>
              </div>
            </div>

            {/* Right Column: Bold, Animated Double-Helix Frosted Ribbon Canvas */}
            <div className="relative lg:col-span-5 h-[280px] sm:h-[340px] w-full flex items-center justify-center">
              {/* Full SVG Animated Canvas */}
              <svg
                viewBox="0 0 460 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-full w-full pointer-events-none overflow-visible select-none"
              >
                <defs>
                  {/* Primary Frosted Ribbon Gradient */}
                  <linearGradient id="ribbonGlowA" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                    <stop offset="45%" stopColor="#e7f5e3" stopOpacity="0.35" />
                    <stop offset="85%" stopColor="#ffffff" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
                  </linearGradient>

                  {/* Secondary Intersecting Ribbon Gradient */}
                  <linearGradient id="ribbonGlowB" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
                    <stop offset="50%" stopColor="#c8f0be" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
                  </linearGradient>

                  {/* Diffuse Soft Shadow */}
                  <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Ribbon Track 1: Sweeping Upward Helix with Wave Motion */}
                <motion.path
                  d="M 20 250 C 110 250, 150 70, 250 85 C 340 100, 390 230, 450 140"
                  stroke="url(#ribbonGlowA)"
                  strokeWidth="38"
                  strokeLinecap="round"
                  fill="none"
                  filter="url(#softGlow)"
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

                {/* Ribbon Track 2: Intersecting Counter Wave (Lucid Cross-Over) */}
                <motion.path
                  d="M 40 90 C 130 90, 160 260, 260 240 C 350 220, 380 70, 450 190"
                  stroke="url(#ribbonGlowB)"
                  strokeWidth="28"
                  strokeLinecap="round"
                  fill="none"
                  filter="url(#softGlow)"
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

                {/* Fine Precision Stream lines */}
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
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.path
                  d="M 30 110 Q 180 280, 310 140 T 450 240"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeDasharray="6 8"
                  strokeDashoffset={0}
                  fill="none"
                  animate={{
                    strokeDashoffset: [-50, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </svg>

              {/* Floating Operational Pill 1: Top Floating Glass Node */}
              <motion.div
                animate={{
                  y: [-6, 6, -6],
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-4 sm:top-6 right-2 sm:right-6 z-20 flex items-center gap-2.5 rounded-2xl border border-white/35 bg-white/20 px-4 py-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.18)] backdrop-blur-md"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-white text-[#118f00] shadow-2xs">
                  <Sparkles className="h-4 w-4 text-[#14a800]" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white tracking-tight">One Connected View</div>
                  <div className="text-[10px] text-[#e7f5e3] font-medium">Donors · Grants · Board</div>
                </div>
              </motion.div>

              {/* Floating Operational Pill 2: Bottom Floating Glass Node */}
              <motion.div
                animate={{
                  y: [6, -6, 6],
                  rotate: [1, -1, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-4 sm:bottom-6 left-2 sm:left-6 z-20 flex items-center gap-2.5 rounded-2xl border border-white/35 bg-white/20 px-4 py-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.18)] backdrop-blur-md"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-white text-[#118f00] shadow-2xs">
                  <CheckCircle2 className="h-4 w-4 text-[#14a800]" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white tracking-tight">Zero Tool Migrations</div>
                  <div className="text-[10px] text-[#e7f5e3] font-medium">Keep your existing stack</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. HOW IT WORKS
          Simple 3-step outcome-oriented flow to eliminate anxiety.
      ======================================================== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#14a800]">
              Simple Implementation
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0c180a] sm:text-4xl md:text-5xl text-balance">
              <span className="block">Keep your tools.</span>
              <span className="block">Connect your operations.</span>
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg text-pretty">
              No long, risky software transitions. We bring the intelligence to
              the data you already&nbsp;possess.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {/* Step 1: Connect */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#0c6600] p-8 sm:p-9 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="relative z-10 max-w-[85%]">
                <h3 className="text-2xl font-extrabold tracking-tight text-white">
                  Connect
                </h3>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/90 text-pretty">
                  Connect the CRM, finance, documents, meetings and other systems you already use.
                </p>
              </div>

              {/* Decorative Corner SVG Illustration: Multi-ring converging orbital network */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-7 -right-7 select-none transition-all duration-500 ease-out group-hover:scale-115 group-hover:-translate-x-2 group-hover:-translate-y-2"
              >
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 180 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white/20"
                >
                  {/* Concentric Signal Radar Rings */}
                  <circle cx="120" cy="120" r="70" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" className="transition-transform duration-700 ease-out group-hover:scale-105 origin-center" />
                  <circle cx="120" cy="120" r="48" stroke="currentColor" strokeWidth="2" strokeOpacity="0.8" />
                  <circle cx="120" cy="120" r="28" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="3" />
                  <circle cx="120" cy="120" r="12" fill="currentColor" />

                  {/* Satellite Interconnecting Nodes with Dynamic Hover Translation */}
                  <g className="transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:translate-y-1">
                    <circle cx="48" cy="120" r="14" fill="currentColor" fillOpacity="0.5" />
                    <line x1="62" y1="120" x2="92" y2="120" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </g>

                  <g className="transition-transform duration-500 ease-out group-hover:-translate-x-1 group-hover:translate-y-1">
                    <circle cx="120" cy="48" r="14" fill="currentColor" fillOpacity="0.5" />
                    <line x1="120" y1="62" x2="120" y2="92" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </g>

                  <g className="transition-transform duration-500 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1">
                    <circle cx="70" cy="70" r="10" fill="currentColor" fillOpacity="0.6" />
                    <line x1="78" y1="78" x2="100" y2="100" stroke="currentColor" strokeWidth="3" strokeDasharray="3 3" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Step 2: Configure */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#118f00] p-8 sm:p-9 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="relative z-10 max-w-[85%]">
                <h3 className="text-2xl font-extrabold tracking-tight text-white">
                  Configure
                </h3>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/90 text-pretty">
                  Set permissions, workflows, dashboards and AI assistants around your organization.
                </p>
              </div>

              {/* Decorative Corner SVG Illustration: Precision engineering gear */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-6 -right-6 select-none transition-transform duration-500 ease-out group-hover:rotate-45 group-hover:scale-110"
              >
                <svg
                  width="170"
                  height="170"
                  viewBox="0 0 170 170"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white/20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M85 40C88.866 40 92 43.134 92 47V51.3537C96.4449 52.6845 100.627 54.7788 104.351 57.5312L107.502 54.3802C110.236 51.6465 114.668 51.6465 117.402 54.3802L122.619 59.5979C125.353 62.3316 125.353 66.7638 122.619 69.4975L119.469 72.6485C122.221 76.3727 124.316 80.5551 125.646 85H130C133.866 85 137 88.134 137 92V99.3787C137 103.245 133.866 106.379 130 106.379H125.646C124.316 110.824 122.221 115.006 119.469 118.73L122.619 121.881C125.353 124.615 125.353 129.047 122.619 131.781L117.402 136.998C114.668 139.732 110.236 139.732 107.502 136.998L104.351 133.848C100.627 136.6 96.4449 138.694 92 140.025V144.379C92 148.245 88.866 151.379 85 151.379H77.6213C73.7553 151.379 70.6213 148.245 70.6213 144.379V140.025C66.1764 138.694 61.994 136.6 58.2698 133.848L55.1188 136.998C52.3851 139.732 47.953 139.732 45.2193 136.998L40.0016 131.781C37.2679 129.047 37.2679 124.615 40.0016 121.881L43.1526 118.73C40.4002 115.006 38.3059 110.824 36.9751 106.379H32.6213C28.7553 106.379 25.6213 103.245 25.6213 99.3787V92C25.6213 88.134 28.7553 85 32.6213 85H36.9751C38.3059 80.5551 40.4002 76.3727 43.1526 72.6485L40.0016 69.4975C37.2679 66.7638 37.2679 62.3316 40.0016 59.5979L45.2193 54.3802C47.953 51.6465 52.3851 51.6465 55.1188 54.3802L58.2698 57.5312C61.994 54.7788 66.1764 52.6845 70.6213 51.3537V47C70.6213 43.134 73.7553 40 77.6213 40H85ZM81.3107 72C70.265 72 61.3107 80.9543 61.3107 92C61.3107 103.046 70.265 112 81.3107 112C92.3564 112 101.311 103.046 101.311 92C101.311 80.9543 92.3564 72 81.3107 72Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            {/* Step 3: Put Your Data to Work */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#0a5200] p-8 sm:p-9 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="relative z-10 max-w-[85%]">
                <h3 className="text-2xl font-extrabold tracking-tight text-white">
                  Put Your Data to&nbsp;Work
                </h3>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/90 text-pretty">
                  Ask questions, automate repetitive work and give every role the information it needs.
                </p>
              </div>

              {/* Decorative Corner SVG Illustration: Dynamic ascending operational surge & pulse rays */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-6 -right-6 select-none transition-all duration-500 ease-out group-hover:scale-115 group-hover:-translate-x-1 group-hover:-translate-y-1"
              >
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 180 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white/20"
                >
                  {/* Stepped Surge Bars with Staggered Hover Elevation */}
                  <rect x="36" y="125" width="18" height="35" rx="6" fill="currentColor" fillOpacity="0.35" className="transition-transform duration-300 group-hover:-translate-y-1" />
                  <rect x="64" y="102" width="18" height="58" rx="6" fill="currentColor" fillOpacity="0.5" className="transition-transform duration-400 group-hover:-translate-y-2" />
                  <rect x="92" y="74" width="18" height="86" rx="6" fill="currentColor" fillOpacity="0.75" className="transition-transform duration-500 group-hover:-translate-y-3" />
                  <rect x="120" y="44" width="18" height="116" rx="6" fill="currentColor" className="transition-transform duration-600 group-hover:-translate-y-4" />

                  {/* Dynamic Trajectory Vector */}
                  <path
                    d="M38 116 L66 92 L94 65 L126 34"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. WORKS WITH YOUR EXISTING TOOLS
          12 Tool logos in clean grid. "Keep your tools" objection handler.
      ======================================================== */}
      <section className="border-t border-slate-100 bg-[#fbfdfa] py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#14a800]">
              Zero Vendor Lock-in
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0c180a] sm:text-4xl md:text-5xl text-balance">
              <span className="block">Keep the tools your team</span>
              <span className="block">already&nbsp;knows.</span>
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg text-pretty max-w-2xl mx-auto">
              The Nonprofit Control Tower adds an intelligence and automation
              layer across your existing systems instead of forcing you to
              rebuild your technology&nbsp;stack.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {[
              { name: "Salesforce", logo: salesforceLogo },
              { name: "Blackbaud", logo: blackbaudLogo },
              { name: "Bloomerang", logo: bloomerangLogo },
              { name: "QuickBooks", logo: quickbooksLogo },
              { name: "HubSpot", logo: hubspotLogo },
              { name: "Stripe", logo: stripeLogo },
              { name: "PayPal", logo: paypalLogo },
              { name: "Eventbrite", logo: eventbriteLogo },
              { name: "Microsoft 365", logo: ms365Logo },
              { name: "Google Workspace", logo: googleWorkspaceLogo },
              { name: "Zoom", logo: zoomLogo },
              { name: "Mailchimp", logo: mailchimpLogo },
            ].map((tool, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-5 transition-all duration-150 hover:border-[#14a800]/30 hover:shadow-sm"
              >
                <div className="flex h-10 w-full items-center justify-center">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="max-h-8 max-w-[100px] object-contain transition-transform group-hover:scale-105"
                  />
                </div>
                <span className="mt-3 text-xs font-semibold text-slate-700">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          10. SECURITY & DATA CONTROL
          Option 1: Structured Grid with Micro-UI Proof Elements.
      ======================================================== */}
      <NonprofitSecuritySection />

      {/* ========================================================
          11. DEPLOYMENT / PRICING
          Self-hosted ($0 open source) vs Managed ($1,500/yr).
          CTA must say "Book Free Demo".
      ======================================================== */}
      <section className="border-t border-slate-100 bg-[#fbfdfa] py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#14a800]">
              Clear, Honest Pricing
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0c180a] sm:text-4xl md:text-5xl text-balance">
              Flexible Hosting Options
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg text-pretty">
              Choose where you want your Nonprofit Control Tower to&nbsp;run.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {/* Option 1: Self-Hosted */}
            <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-xs">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                <Server className="h-4 w-4 text-[#14a800]" />
                Self-Hosted
              </div>
              <h3 className="mt-3 text-2xl font-bold text-[#0c180a]">
                Host on Your Own&nbsp;Infrastructure
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 text-pretty">
                Your organization can run the Nonprofit Control Tower within its
                own hosting environment, giving you greater control over your
                infrastructure and&nbsp;data.
              </p>

              <div className="my-6 border-y border-slate-100 py-6">
                <div className="text-3xl font-extrabold text-[#0c180a]">
                  $0{" "}
                  <span className="text-sm font-semibold text-slate-500">
                    license cost (MIT)
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Open-source core — deploy anywhere you choose.
                </p>
              </div>

              <ul className="mb-8 space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#14a800]" />
                  <span>Full control of server & data residency</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#14a800]" />
                  <span>Community updates and GitHub source access</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#14a800]" />
                  <span>Managed by your internal IT or contractor</span>
                </li>
              </ul>

              <div className="mt-auto">
                <BookFreeDemoBtn
                  variant="secondary"
                  className="w-full text-center"
                />
              </div>
            </div>

            {/* Option 2: Turnkey Managed Hosting (Featured) */}
            <div className="relative flex flex-col rounded-3xl border-2 border-[#14a800] bg-white p-8 shadow-xl">
              <div className="absolute -top-3.5 right-8 rounded-full bg-[#14a800] px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Most Popular
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#14a800]">
                <Cloud className="h-4 w-4 text-[#14a800]" />
                Fully Managed
              </div>
              <h3 className="mt-3 text-2xl font-bold text-[#0c180a]">
                Let Us Host It for&nbsp;You
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 text-pretty">
                Prefer not to manage the hosting yourself? We can host the
                Nonprofit Control Tower for your organization so you never worry
                about&nbsp;servers.
              </p>

              <div className="my-6 border-y border-slate-100 py-6">
                <div className="text-4xl font-extrabold text-[#0c180a]">
                  $1,500{" "}
                  <span className="text-sm font-semibold text-slate-500">
                    / year
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Turnkey management, infrastructure, and ongoing support.
                </p>
              </div>

              <ul className="mb-8 space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#14a800]" />
                  <span>Isolated cloud infrastructure & automated backups</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#14a800]" />
                  <span>Continuous software updates and security patches</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#14a800]" />
                  <span>Dedicated setup support from SJ Innovation engineers</span>
                </li>
              </ul>

              <div className="mt-auto">
                <BookFreeDemoBtn className="w-full text-center" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          12. FINAL CONVERSION SECTION
          Concludes persuasive journey. Single clear action.
          CTA: "Book Free Demo".
          Reinforces SJ Innovation trust note.
      ======================================================== */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28 text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(20, 168, 0, 0.08) 0%, transparent 60%)",
          }}
        />
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0c180a] sm:text-4xl md:text-5xl text-balance">
            <span className="block">Give your team more time</span>
            <span className="block">for the work that&nbsp;matters.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg text-pretty">
            See how your donor data, programs, board operations and everyday
            workflows could work together in one intelligent&nbsp;system.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BookFreeDemoBtn className="w-full sm:w-auto" />
          </div>

          <div className="mt-8 text-xs font-semibold text-slate-500">
            Built by SJ Innovation — technology partner since 2004.
          </div>
        </div>
      </section>

      {/* ========================================================
          13. FAQS - LAST SECTION DIRECTLY ABOVE FOOTER
          Answers common objections clearly and briefly before departure.
      ======================================================== */}
      <section className="border-t border-slate-100 bg-[#fbfdfa] py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#14a800]">
              Got Questions?
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0c180a] sm:text-4xl text-balance">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm text-slate-500 text-pretty">
              Everything you need to know about getting started with the
              Nonprofit Control&nbsp;Tower.
            </p>
          </div>

          <div className="mt-12">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem
                value="faq-1"
                className="rounded-2xl border border-slate-200 bg-white px-6 shadow-2xs"
              >
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline hover:text-[#14a800]">
                  Is it really free to get started?
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-slate-600">
                  Yes, if you self-host. The Nonprofit Control Tower is open
                  source under the MIT License — zero license cost to run on your
                  own infrastructure. If you prefer not to manage the servers
                  yourself, we offer turnkey managed hosting, maintenance, and
                  updates for $1,500 per year.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="faq-2"
                className="rounded-2xl border border-slate-200 bg-white px-6 shadow-2xs"
              >
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline hover:text-[#14a800]">
                  Do we have to replace the software tools we already use?
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-slate-600">
                  No. The Nonprofit Control Tower is designed specifically to sit
                  across your existing CRM, accounting, document, and meeting tools
                  (like Salesforce NPSP, Bloomerang, QuickBooks, Google
                  Workspace, and Microsoft 365) as an intelligence and automation
                  layer without forcing your staff to learn a new replacement stack.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="faq-3"
                className="rounded-2xl border border-slate-200 bg-white px-6 shadow-2xs"
              >
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline hover:text-[#14a800]">
                  Will the AI train on our donor or financial records?
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-slate-600">
                  Never. Your data remains strictly isolated within your private
                  instance. We enforce zero public model training, end-to-end
                  encryption in transit and at rest, and strict role-based access
                  controls so donor confidentiality is always preserved.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="faq-4"
                className="rounded-2xl border border-slate-200 bg-white px-6 shadow-2xs"
              >
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline hover:text-[#14a800]">
                  Do we need an internal engineering or IT team to run this?
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-slate-600">
                  Not if you choose our managed hosting option. Our engineering
                  team at SJ Innovation manages server provisioning, automated
                  backups, security updates, and daily operational support so your
                  nonprofit staff can simply use the platform with zero DevOps
                  burden.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="faq-5"
                className="rounded-2xl border border-slate-200 bg-white px-6 shadow-2xs"
              >
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline hover:text-[#14a800]">
                  How does the platform support board governance?
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-slate-600">
                  It centralizes board minutes, policies, and committee documents
                  into a private document intelligence portal. Board members can
                  ask plain-English questions to locate past decisions instantly,
                  and meeting summaries and action items are automatically
                  generated after each session.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="faq-6"
                className="rounded-2xl border border-slate-200 bg-white px-6 shadow-2xs"
              >
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline hover:text-[#14a800]">
                  How quickly can we get up and running?
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-slate-600">
                  Because it connects to your existing tools via pre-built
                  connectors, initial setup typically takes just a few business
                  days. Book a free demo and we’ll show you how it works with your
                  organization’s exact workflows.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* 14. FOOTER: Handled by layout automatically */}
    </div>
  );
};

export default NonProfitHub;