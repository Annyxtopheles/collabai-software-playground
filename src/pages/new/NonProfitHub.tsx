import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowDown,
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
import { FaqSection } from "@/components/ui/faq-section";
import { getVertical } from "@/data/verticals";

// Client Logos & SJ Innovation Logo
import sjInnovationLogo from "@/assets/sj-innovation-logo.svg";
import iaaboLogo from "@/assets/clients/iaabo.png";
import bspLogo from "@/assets/clients/bsp-logo.svg";
import theOptimistsLogo from "@/assets/clients/the-optimists.png";
import queensChamberLogo from "@/assets/clients/queens-chamber.png";

// Section Visuals & Components
import SmoothImage from "@/components/ui/SmoothImage";
import NonprofitProblemInfographics from "@/components/new/nonprofit/NonprofitProblemInfographics";
import NonprofitIntegrationsBeam from "@/components/new/nonprofit/NonprofitIntegrationsBeam";
import HeroMeetingIllustration from "@/components/new/nonprofit/HeroMeetingIllustration";
import heroIllustration from "@/assets/nonprofit/collaborative-green-office-meeting.svg";
import iso27001CertifiedLogo from "@/assets/logos/iso-27001-certified.png";
import easyArt from "@/assets/why-act/easy-to-use.svg.asset.json";
import privacyArt from "@/assets/why-act/data-privacy.svg.asset.json";
import costArt from "@/assets/why-act/cost-effective.svg.asset.json";

const nonprofitFaqs = getVertical("non-profit")!.faqs;

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
      "bg-[#14a800] text-white hover:bg-[#118f00] shadow-none hover:shadow-lg hover:shadow-[#14a800]/25",
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

const CLIENT_CASE_CARDS = [
  {
    id: "case-iaabo",
    name: "IAABO",
    subtitle: "Basketball Officials Association",
    logo: iaaboLogo,
    logoHeight: "h-14 sm:h-16",
    summary: "AI learning, configurable training rules, secure exams and automated certification for 16,000+ officials.",
    metric: "16,000+ Officials",
  },
  {
    id: "case-bsp",
    name: "BSP",
    subtitle: "Community Organization",
    logo: bspLogo,
    logoHeight: "h-12 sm:h-14",
    summary: "New website, event registration, donations and operations unified into a single live dashboard.",
    metric: "Community Ops",
  },
  {
    id: "case-optimists",
    name: "The Optimists",
    subtitle: "Youth & Community Non-Profit",
    logo: theOptimistsLogo,
    logoHeight: "h-11 sm:h-12",
    summary: "Modernized 12-year-old platform with zero downtime, updated admin panel and live operational data.",
    metric: "Platform Migration",
  },
  {
    id: "case-queens-chamber",
    name: "Queens Chamber of Commerce",
    subtitle: "Civic & Business Community",
    logo: queensChamberLogo,
    logoHeight: "h-10 sm:h-12",
    summary: "Board portal, document Q&A, automatic meeting summaries and AI tools for member businesses.",
    metric: "Board & Member AI",
  },
];

const scrollToCase = (targetId: string) => {
  const el = document.getElementById(targetId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.classList.add("ring-4", "ring-[#14a800]", "ring-offset-4", "transition-all", "duration-500");
    setTimeout(() => {
      el.classList.remove("ring-4", "ring-[#14a800]", "ring-offset-4");
    }, 2500);
  }
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
                operations in one private AI-powered <strong className="font-bold text-slate-900">Nonprofit Control Tower</strong> without
                replacing the tools you already&nbsp;use.
              </p>

              <p className="mt-2.5 text-sm font-medium text-slate-500 text-pretty">
                See what your nonprofit could run from one connected&nbsp;system.
              </p>

              {/* Primary CTA */}
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <BookFreeDemoBtn />
              </div>
            </div>

            {/* Right Column: Open SVG Illustration with Floating Modern Badges */}
            <div className="relative lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[520px]">
                <HeroMeetingIllustration className="w-full h-auto select-none" />

                {/* Floating Card 1: Top Right Pill with smooth sub-pixel GPU floating motion */}
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
                  style={{ willChange: "transform" }}
                  className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-20 flex items-center gap-2.5 rounded-2xl border border-slate-200/90 bg-white px-4 py-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.12)] transform-gpu"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#e7f5e3] text-[#14a800]">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900">Private Data Vault</div>
                    <div className="text-[10px] text-slate-500 font-medium">Zero public model training</div>
                  </div>
                </motion.div>

                {/* Floating Card 2: Bottom Left Badge with smooth sub-pixel GPU counter floating motion */}
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
                  style={{ willChange: "transform" }}
                  className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 z-20 flex items-center gap-2.5 rounded-2xl border border-slate-200/90 bg-white px-4 py-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.12)] transform-gpu"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#e7f5e3] text-[#14a800]">
                    <CheckCircle2 className="h-4 w-4 text-[#14a800]" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900">Zero Migration Required</div>
                    <div className="text-[10px] text-slate-500 font-medium">Syncs CRM, files & accounting</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. TRUST BAR
          H2 title with SJ Innovation logo + horizontal split:
          4 client logo cards on the left, 4 metrics on the right.
      ======================================================== */}
      <section className="border-y border-slate-100 bg-[#fbfdfa] py-10 md:py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="flex flex-wrap items-center justify-center gap-3 text-center text-2xl font-extrabold tracking-tight text-[#0c180a] sm:text-3xl lg:text-4xl">
            <span>Built on 22 Years of Technology Delivery Experience from</span>
            <img
              src={sjInnovationLogo}
              alt="SJ Innovation"
              className="inline-block h-9 sm:h-11 w-auto object-contain"
            />
          </h2>

          {/* Horizontal 2-Column Split: 4 Client Logo Cards (Left) + 4 Metrics (Right) */}
          <div className="mt-7 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7 items-stretch">
            {/* Left Side: 4 Interactive Client Case Study Flip Cards (2x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {CLIENT_CASE_CARDS.map((client) => (
                <div
                  key={client.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => scrollToCase(client.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      scrollToCase(client.id);
                    }
                  }}
                  className="group h-[180px] [perspective:1000px] cursor-pointer select-none focus:outline-hidden"
                  aria-label={`View ${client.name} success story`}
                >
                  <div className="relative h-full w-full rounded-2xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* FRONT FACE: Logo Banner + Title Name */}
                    <div className="absolute inset-0 h-full w-full rounded-2xl border border-slate-200/90 bg-white p-3 flex flex-col justify-between [backface-visibility:hidden]">
                      {/* Top Banner with Client Logo */}
                      <div className="w-full h-24 rounded-xl bg-gradient-to-b from-[#f8faf6] to-[#edf5eb]/60 border border-slate-100 flex items-center justify-center p-2.5 relative overflow-hidden">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className={`${client.logoHeight} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
                        />
                      </div>

                      {/* Title Name & Category */}
                      <div className="text-center w-full px-1 py-0.5">
                        <h4 className="text-sm font-bold text-slate-900 tracking-tight line-clamp-1">
                          {client.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 font-medium mt-0.5 line-clamp-1">
                          {client.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* BACK FACE: Clean Flipped Preview with Navigation Link */}
                    <div className="absolute inset-0 h-full w-full rounded-2xl border border-[#14a800]/40 bg-gradient-to-br from-[#0c6600] via-[#118f00] to-[#0a5200] p-3.5 text-white flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex items-center justify-between border-b border-white/20 pb-1">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider bg-white/20 text-[#e7f5e3] px-2 py-0.5 rounded-full">
                          {client.metric}
                        </span>
                      </div>

                      <div className="my-auto py-0.5">
                        <h4 className="text-xs sm:text-sm font-extrabold text-white tracking-tight line-clamp-1">
                          {client.name}
                        </h4>
                        <p className="mt-0.5 text-[11px] text-white/90 leading-snug line-clamp-3">
                          {client.summary}
                        </p>
                      </div>

                      <div className="pt-1 border-t border-white/20">
                        <div className="inline-flex w-full items-center justify-between rounded-lg bg-white/15 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-xs transition-all duration-200 group-hover:bg-white group-hover:text-[#0c6600]">
                          <span>Read Success Story</span>
                          <ArrowDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side: 4 Key Credibility Stats (2x2 matching compact height) */}
            <div className="grid grid-cols-2 gap-3.5 text-center">
              <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs flex flex-col items-center justify-center min-h-[140px] lg:h-[180px]">
                <div className="text-2xl font-extrabold text-[#14a800] sm:text-3xl">
                  22 Years
                </div>
                <div className="mt-1 text-xs font-medium text-slate-500">
                  Technology delivery
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs flex flex-col items-center justify-center min-h-[140px] lg:h-[180px]">
                <div className="text-2xl font-extrabold text-[#14a800] sm:text-3xl">
                  500+
                </div>
                <div className="mt-1 text-xs font-medium text-slate-500">
                  Clients served
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs flex flex-col items-center justify-center min-h-[140px] lg:h-[180px]">
                <div className="text-2xl font-extrabold text-[#14a800] sm:text-3xl">
                  1,000+
                </div>
                <div className="mt-1 text-xs font-medium text-slate-500">
                  Projects delivered
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs flex flex-col items-center justify-center min-h-[140px] lg:h-[180px]">
                <img
                  src={iso27001CertifiedLogo}
                  alt="ISO/IEC 27001:2022 Certified"
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. THE PROBLEM
          H1 headline style + Agency-style infographic representation for subheaders.
      ======================================================== */}
      <NonprofitProblemInfographics />

      {/* ========================================================
          4. THE NONPROFIT CONTROL TOWER SOLUTION
          Explains product in plain language + connected systems visual.
      ======================================================== */}
      <section className="border-t border-slate-100 bg-[#f9fbf8] py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#0c180a] sm:text-3xl lg:text-4xl text-balance">
              <span className="block">One Place to Understand</span>
              <span className="block">and Run Your Nonprofit.</span>
            </h2>
            
            <div className="mt-6 mx-auto max-w-3xl text-base sm:text-lg leading-relaxed text-slate-600">
              <p className="text-pretty">
                The <strong className="font-semibold text-slate-900">Nonprofit Control Tower</strong> sits across the systems you already use and turns scattered information into a clear operational view for your team, leadership and board.
              </p>
            </div>
          </div>

          {/* Connected Systems Diagram Visual */}
          <div className="mt-14">
            <NonprofitIntegrationsBeam />
          </div>

          <p className="mt-12 mx-auto max-w-3xl text-center text-pretty text-slate-600 text-base sm:text-lg leading-relaxed">
            It helps your organization connect data, surface answers, automate repetitive work and keep everyone aligned without forcing your team to replace the tools they already know.
          </p>
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
            <h2 className="text-2xl font-extrabold tracking-tight text-[#0c180a] sm:text-3xl lg:text-4xl text-balance">
              Client Success Stories
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {/* Case 1: IAABO */}
            <div id="case-iaabo" className="scroll-mt-28 flex flex-col rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:border-[#14a800]/40 hover:shadow-lg md:p-8">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                <img
                  src={iaaboLogo}
                  alt="IAABO"
                  className="h-12 w-auto shrink-0 object-contain"
                />
                <h3 className="text-lg sm:text-xl font-bold text-[#0c180a] leading-snug">
                  AI Learning for 16,000+ Basketball&nbsp;Officials
                </h3>
              </div>

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
              <div className="mt-auto pt-6 border-t border-slate-100">
                <div className="inline-flex items-center gap-2 rounded-lg bg-[#e7f5e3] px-3.5 py-2 text-xs font-bold text-[#118f00]">
                  <CheckCircle2 className="h-4 w-4" />
                  Launched September 2026 | Supporting 16,000+ officials
                </div>
              </div>
            </div>

            {/* Case 2: BSP */}
            <div id="case-bsp" className="scroll-mt-28 flex flex-col rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:border-[#14a800]/40 hover:shadow-lg md:p-8">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                <img
                  src={bspLogo}
                  alt="BSP"
                  className="h-12 w-auto shrink-0 object-contain"
                />
                <h3 className="text-lg sm:text-xl font-bold text-[#0c180a] leading-snug">
                  From a Placeholder Site to a Live Nonprofit Control&nbsp;Tower
                </h3>
              </div>

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
              <div className="mt-auto pt-6 border-t border-slate-100">
                <div className="inline-flex items-center gap-2 rounded-lg bg-[#e7f5e3] px-3.5 py-2 text-xs font-bold text-[#118f00]">
                  <CheckCircle2 className="h-4 w-4" />
                  Website + operations + forms connected in one system
                </div>
              </div>
            </div>

            {/* Case 3: The Optimists */}
            <div id="case-optimists" className="scroll-mt-28 flex flex-col rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:border-[#14a800]/40 hover:shadow-lg md:p-8">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                <img
                  src={theOptimistsLogo}
                  alt="The Optimists"
                  className="h-10 w-auto shrink-0 object-contain"
                />
                <h3 className="text-lg sm:text-xl font-bold text-[#0c180a] leading-snug">
                  Modernizing a 12-Year-Old Nonprofit&nbsp;Platform
                </h3>
              </div>

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
              <div className="mt-auto pt-6 border-t border-slate-100">
                <div className="inline-flex items-center gap-2 rounded-lg bg-[#e7f5e3] px-3.5 py-2 text-xs font-bold text-[#118f00]">
                  <CheckCircle2 className="h-4 w-4" />
                  Modernized infrastructure + live operational data
                </div>
              </div>
            </div>

            {/* Case 4: Queens Chamber of Commerce */}
            <div id="case-queens-chamber" className="scroll-mt-28 flex flex-col rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:border-[#14a800]/40 hover:shadow-lg md:p-8">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                <img
                  src={queensChamberLogo}
                  alt="Queens Chamber of Commerce"
                  className="h-10 w-auto shrink-0 object-contain"
                />
                <h3 className="text-lg sm:text-xl font-bold text-[#0c180a] leading-snug">
                  AI for a Whole Business&nbsp;Community
                </h3>
              </div>

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
              <div className="mt-auto pt-6 border-t border-slate-100">
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
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl leading-[1.18] text-balance">
                See What the Nonprofit Control Tower Could Do for Your Organization
              </h2>

              <p className="mt-5 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-white/90 text-pretty">
                Every nonprofit operates differently.
                <br />
                In a free demo, we’ll show you how the Nonprofit Control Tower can connect with your existing systems, reduce manual work and support the workflows that matter most to your&nbsp;team.
              </p>

              <div className="mt-8 flex flex-col items-start gap-3">
                <BookFreeDemoBtn variant="white" />
                <p className="text-xs font-medium text-white/80">
                  We will focus the demo on your organization’s actual workflows and your priorities.
                </p>
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
          9. 3 REASONS TO CHOOSE NON-PROFIT CONTROL TOWER
          Merged Keep Your Existing Tools, Protect Your Private Data, and Flexible Hosting Options
          in a 3-card horizontal row matching AgencyWhyAct design.
      ======================================================== */}
      <section className="border-y border-slate-100 bg-[#fbfdfa] py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-[#0c180a] sm:text-3xl lg:text-4xl text-balance">
              3 Reasons to Choose Non-Profit Control Tower
            </h2>
          </div>

          <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3 lg:gap-8">
            {/* Card 1: Keep Your Existing Tools */}
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#14a800]/50 hover:shadow-md">
              <div className="-mx-7 -mt-7 mb-5">
                <SmoothImage
                  src={easyArt.url}
                  alt="Keep Your Existing Tools"
                  wrapperClassName="aspect-[3/2] w-full overflow-hidden bg-transparent"
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#0c180a]">
                Keep Your Existing Tools
              </h3>

              <div className="my-5 h-px bg-slate-200/80" />

              <div className="flex-1">
                <p className="text-sm leading-relaxed text-slate-600">
                  The Nonprofit Control Tower adds an intelligence and automation layer across your existing systems instead of forcing you to rebuild your technology stack.
                </p>

                <ul className="mt-5 space-y-3 text-sm text-slate-600">
                  {[
                    "No new tools to learn",
                    "No need to replace anything",
                    "Reduce repetitive work",
                    "Connect your operations in one place",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e7f5e3]">
                        <Check className="h-3 w-3 text-[#14a800]" strokeWidth={3} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Card 2: Protect Your Private Data */}
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#14a800]/50 hover:shadow-md">
              <div className="-mx-7 -mt-7 mb-5">
                <SmoothImage
                  src={privacyArt.url}
                  alt="Protect Your Private Data"
                  wrapperClassName="aspect-[3/2] w-full overflow-hidden bg-transparent"
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#0c180a]">
                Protect Your Private Data
              </h3>

              <div className="my-5 h-px bg-slate-200/80" />

              <div className="flex-1">
                <p className="text-sm leading-relaxed text-slate-600">
                  Get benefits of AI without giving up control of sensitive donor, member, financial or organizational information.
                </p>

                <ul className="mt-5 space-y-3 text-sm text-slate-600">
                  {[
                    "Private by design",
                    "Role-based access",
                    "Encrypted in transit and at rest",
                    "Your data is not used to train public AI models",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e7f5e3]">
                        <Check className="h-3 w-3 text-[#14a800]" strokeWidth={3} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Card 3: Flexible Hosting Options */}
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#14a800]/50 hover:shadow-md">
              <div className="-mx-7 -mt-7 mb-5">
                <SmoothImage
                  src={costArt.url}
                  alt="Flexible Hosting Options"
                  wrapperClassName="aspect-[3/2] w-full overflow-hidden bg-transparent"
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#0c180a]">
                Flexible Hosting Options
              </h3>

              <div className="my-5 h-px bg-slate-200/80" />

              <div className="flex-1">
                <p className="text-sm leading-relaxed text-slate-600">
                  Choose where you want your Nonprofit Control Tower to run
                </p>

                <ul className="mt-5 space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e7f5e3]">
                      <Check className="h-3 w-3 text-[#14a800]" strokeWidth={3} />
                    </span>
                    <div>
                      <span className="font-semibold text-[#0c180a] block">
                        Host It on Your Own Infrastructure
                      </span>
                      <span className="mt-1 block leading-relaxed">
                        Your organization can run the Nonprofit Control Tower within its own hosting environment, giving you greater control over your infrastructure and data.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e7f5e3]">
                      <Check className="h-3 w-3 text-[#14a800]" strokeWidth={3} />
                    </span>
                    <div>
                      <span className="font-semibold text-[#0c180a] block">
                        Let Us Host It for You
                      </span>
                      <span className="mt-1 block leading-relaxed">
                        Prefer not to manage the hosting yourself?
                      </span>
                      <span className="mt-1 block leading-relaxed">
                        We can host the Nonprofit Control Tower for your organization for $1,500 per year
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </article>
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
          <h2 className="text-2xl font-extrabold tracking-tight text-[#0c180a] sm:text-3xl lg:text-4xl text-balance">
            <span className="block">Give Your Team More Time</span>
            <span className="block">for the Work That&nbsp;Matters.</span>
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
      ======================================================== */}
      <FaqSection
        title="Frequently Asked Questions"
        items={nonprofitFaqs}
        className="border-t border-slate-100 bg-[#fbfdfa]"
      />

      {/* 14. FOOTER: Handled by layout automatically */}
    </div>
  );
};

export default NonProfitHub;