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
import problemScatteredDonors from "@/assets/nonprofit/problem-scattered-donors.png";
import problemReportingTime from "@/assets/nonprofit/problem-reporting-time.jpg";
import problemManualWork from "@/assets/nonprofit/problem-manual-work.png";
import problemLeadershipView from "@/assets/nonprofit/problem-leadership-view.jpg";

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
    "inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm md:text-base font-semibold transition-all duration-200 active:translate-y-[1px] shadow-sm";

  const variants = {
    primary:
      "bg-[#14a800] text-white hover:bg-[#118f00] shadow-[0_4px_16px_rgba(20,168,0,0.25)] hover:shadow-[0_6px_22px_rgba(20,168,0,0.35)]",
    secondary:
      "border border-[#14a800]/25 bg-[#e7f5e3]/60 text-[#118f00] hover:bg-[#e7f5e3] hover:border-[#14a800]/40",
    white:
      "bg-white text-[#0c180a] hover:bg-slate-50 shadow-md hover:shadow-lg",
  };

  return (
    <Link
      to="/book-demo"
      className={`${base} ${variants[variant]} ${className}`}
    >
      Book Free Demo
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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

        <div className="container mx-auto max-w-6xl px-4 text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#14a800]/20 bg-[#e7f5e3]/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#118f00]">
            <Sparkles className="h-3.5 w-3.5" />
            AI Operations for Nonprofits & Boards
          </div>

          {/* Main Headline */}
          <h1 className="mt-8 text-2xl font-extrabold tracking-tight text-[#0c180a] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.12]">
            <span className="block sm:whitespace-nowrap">Spend Less Time Managing Systems.</span>
            <span className="block mt-1 text-[#14a800] sm:whitespace-nowrap">
              More Time Moving Your Mission Forward.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600 sm:text-xl sm:leading-relaxed text-pretty">
            Connect your donors, grants, programs, meetings, documents and board
            operations in one private AI-powered Nonprofit Control Tower without
            replacing the tools you already&nbsp;use.
          </p>

          <p className="mt-3 text-sm font-medium text-slate-500 text-pretty">
            See what your nonprofit could run from one connected&nbsp;system.
          </p>

          {/* Primary CTA */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BookFreeDemoBtn className="w-full sm:w-auto" />
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
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-14">
            <div className="flex h-12 items-center justify-center grayscale transition-all hover:grayscale-0 opacity-75 hover:opacity-100">
              <img
                src={iaaboLogo}
                alt="IAABO"
                className="h-10 w-auto object-contain"
              />
            </div>
            <div className="flex h-12 items-center justify-center grayscale transition-all hover:grayscale-0 opacity-75 hover:opacity-100">
              <img
                src={bspLogo}
                alt="BSP"
                className="h-10 w-auto object-contain"
              />
            </div>
            <div className="flex h-12 items-center justify-center grayscale transition-all hover:grayscale-0 opacity-75 hover:opacity-100">
              <img
                src={theOptimistsLogo}
                alt="The Optimists"
                className="h-8 w-auto object-contain"
              />
            </div>
            <div className="flex h-12 items-center justify-center grayscale transition-all hover:grayscale-0 opacity-75 hover:opacity-100">
              <img
                src={queensChamberLogo}
                alt="Queens Chamber of Commerce"
                className="h-8 w-auto object-contain"
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

          {/* Bridge Transition Statement */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#14a800]/30 bg-[#e7f5e3]/60 px-5 py-2 text-sm font-semibold text-[#118f00]">
              <Sparkles className="h-4 w-4" />
              That is where the Nonprofit Control Tower comes in.
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. THE NONPROFIT CONTROL TOWER SOLUTION
          Explains product in plain language + connected systems visual.
      ======================================================== */}
      <section className="border-t border-slate-100 bg-[#f9fbf8] py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#14a800]">
              The Unified Solution
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0c180a] sm:text-4xl md:text-5xl text-balance">
              <span className="block">One place to understand</span>
              <span className="block">and run your nonprofit.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg text-pretty">
              The Nonprofit Control Tower sits across the systems you already
              use and turns scattered information into a clear operational view
              for your team, leadership and&nbsp;board.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg text-pretty">
              It helps your organization connect data, surface answers, automate
              repetitive work and keep everyone aligned without forcing your team
              to replace the tools they already&nbsp;know.
            </p>
          </div>

          {/* Connected Systems Diagram Visual */}
          <div className="mt-14">
            <NonprofitIntegrationsBeam />
          </div>
        </div>
      </section>

      {/* ========================================================
          5. WHAT YOU CAN DO
          6 Outcome-based cards instead of leading with agent counts.
      ======================================================== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#14a800]">
              Everyday Outcomes
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0c180a] sm:text-4xl md:text-5xl">
              What You Can Do
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg text-balance max-w-2xl mx-auto">
              <span className="block">Transform daily operations across every department with private,</span>
              <span className="block">mission-aligned&nbsp;intelligence.</span>
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1: Donor Intelligence */}
            <div className="group rounded-2xl border border-slate-200/80 bg-white p-7 transition-all duration-200 hover:border-[#14a800]/40 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e7f5e3] text-[#14a800]">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#0c180a]">
                Donor Intelligence
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 text-pretty">
                Understand donors, history, engagement and next actions in one&nbsp;place.
              </p>
            </div>

            {/* Card 2: Grant Management */}
            <div className="group rounded-2xl border border-slate-200/80 bg-white p-7 transition-all duration-200 hover:border-[#14a800]/40 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e7f5e3] text-[#14a800]">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#0c180a]">
                Grant Management
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 text-pretty">
                Use existing organizational information to support grant
                research, drafting, reporting and&nbsp;follow-up.
              </p>
            </div>

            {/* Card 3: Program & Operations Visibility */}
            <div className="group rounded-2xl border border-slate-200/80 bg-white p-7 transition-all duration-200 hover:border-[#14a800]/40 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e7f5e3] text-[#14a800]">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#0c180a]">
                Program & Operations Visibility
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 text-pretty">
                See activities, outcomes and operational information together
                instead of across disconnected&nbsp;systems.
              </p>
            </div>

            {/* Card 4: Board Governance */}
            <div className="group rounded-2xl border border-slate-200/80 bg-white p-7 transition-all duration-200 hover:border-[#14a800]/40 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e7f5e3] text-[#14a800]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#0c180a]">
                Board Governance
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 text-pretty">
                Organize minutes, policies, board documents, packets and
                institutional&nbsp;knowledge.
              </p>
            </div>

            {/* Card 5: Meeting Intelligence */}
            <div className="group rounded-2xl border border-slate-200/80 bg-white p-7 transition-all duration-200 hover:border-[#14a800]/40 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e7f5e3] text-[#14a800]">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#0c180a]">
                Meeting Intelligence
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 text-pretty">
                Capture meeting summaries, decisions and action items so
                important follow-up does not get&nbsp;lost.
              </p>
            </div>

            {/* Card 6: AI Assistants */}
            <div className="group rounded-2xl border border-slate-200/80 bg-white p-7 transition-all duration-200 hover:border-[#14a800]/40 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e7f5e3] text-[#14a800]">
                <Bot className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#0c180a]">
                AI Assistants
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 text-pretty">
                Ask questions across your organization’s information instead of
                searching through files, inboxes and systems&nbsp;manually.
              </p>
            </div>
          </div>
        </div>
      </section>

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
            <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-xs md:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <img
                  src={iaaboLogo}
                  alt="IAABO"
                  className="h-12 w-auto object-contain"
                />
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                  IAABO
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#0c180a]">
                AI learning for 16,000+ basketball&nbsp;officials
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
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
            <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-xs md:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <img
                  src={bspLogo}
                  alt="BSP"
                  className="h-12 w-auto object-contain"
                />
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                  BSP
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#0c180a]">
                From a placeholder site to a live nonprofit Control&nbsp;Tower
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
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
            <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-xs md:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <img
                  src={theOptimistsLogo}
                  alt="The Optimists"
                  className="h-10 w-auto object-contain"
                />
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                  The Optimists
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#0c180a]">
                Modernizing a 12-year-old nonprofit&nbsp;platform
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
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
            <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-xs md:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <img
                  src={queensChamberLogo}
                  alt="Queens Chamber of Commerce"
                  className="h-10 w-auto object-contain"
                />
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                  Queens Chamber
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#0c180a]">
                AI for a whole business&nbsp;community
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
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
      ======================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#14a800] to-[#0d7300] py-16 text-white md:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 75% 30%, #ffffff 0%, transparent 40%)",
          }}
        />
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-balance">
            <span className="block">See What the Nonprofit Control Tower</span>
            <span className="block">Could Do for Your Organization</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/90 sm:text-lg text-pretty">
            Every nonprofit operates differently. In a free demo, we’ll show you
            how the Nonprofit Control Tower can connect with your existing
            systems, reduce manual work and support the workflows that matter
            most to your&nbsp;team.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BookFreeDemoBtn variant="white" className="w-full sm:w-auto" />
          </div>

          <p className="mt-4 text-xs font-medium text-white/80 text-pretty">
            We will focus the demo on your organization’s actual workflows and
            your&nbsp;priorities.
          </p>
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
            {/* Step 1 */}
            <div className="relative rounded-3xl border border-slate-200 bg-slate-50/50 p-8">
              <div className="text-3xl font-extrabold text-[#14a800]">01</div>
              <h3 className="mt-4 text-xl font-bold text-[#0c180a]">Connect</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 text-pretty">
                Connect the CRM, finance, documents, meetings and other systems
                you already&nbsp;use.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-3xl border border-slate-200 bg-slate-50/50 p-8">
              <div className="text-3xl font-extrabold text-[#14a800]">02</div>
              <h3 className="mt-4 text-xl font-bold text-[#0c180a]">Configure</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 text-pretty">
                Set permissions, workflows, dashboards and AI assistants around
                your&nbsp;organization.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-3xl border border-slate-200 bg-slate-50/50 p-8">
              <div className="text-3xl font-extrabold text-[#14a800]">03</div>
              <h3 className="mt-4 text-xl font-bold text-[#0c180a]">
                Put Your Data to&nbsp;Work
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 text-pretty">
                Ask questions, automate repetitive work and give every role the
                information it&nbsp;needs.
              </p>
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
          Plain language trust & security statements.
      ======================================================== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#14a800]">
              Privacy & Protection
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0c180a] sm:text-4xl md:text-5xl text-balance">
              <span className="block">Your Data Is Private,</span>
              <span className="block">Protected and&nbsp;Secure</span>
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg text-pretty max-w-2xl mx-auto">
              The Nonprofit Control Tower is designed for organizations that want
              the benefits of AI without giving up control of sensitive donor,
              member, financial or organizational&nbsp;information.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Private by design",
                desc: "Your data stays isolated in your dedicated organization environment, completely private from other entities.",
                icon: ShieldCheck,
              },
              {
                title: "Role-based access",
                desc: "Granular permission locks ensure staff, leadership, and board members only see information intended for their role.",
                icon: Lock,
              },
              {
                title: "Encrypted in transit & at rest",
                desc: "Enterprise-grade TLS 1.3 in transit and AES-256 encryption at rest protect every file, transcript, and record.",
                icon: Database,
              },
              {
                title: "Never used to train public models",
                desc: "Your donor records and private organizational knowledge are never fed into public AI training datasets.",
                icon: CheckCircle2,
              },
              {
                title: "Self-hosting available",
                desc: "Run on your own infrastructure or cloud for total organizational control over data residency and compliance.",
                icon: Server,
              },
              {
                title: "Auditable AI activity",
                desc: "Comprehensive logs record every AI interaction, search query, and automated action for complete governance oversight.",
                icon: Layers,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-slate-50/40 p-6 transition-all hover:bg-white hover:border-[#14a800]/30 hover:shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e7f5e3] text-[#14a800]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#0c180a]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 text-pretty">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://sjinnovation.com/security"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#14a800] hover:underline"
            >
              Learn more about SJ Innovation security standards
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </section>

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