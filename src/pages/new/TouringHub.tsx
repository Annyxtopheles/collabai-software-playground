import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, ShieldCheck, Quote, Sunrise, MapPin, Clock, Plane } from "lucide-react";
import { FaqSection } from "@/components/ui/faq-section";
import PageSeoHead from "@/components/PageSeoHead";
import PlatformAttributionBand from "@/components/new/sections/PlatformAttributionBand";
import LiveDemoBanner from "@/components/new/LiveDemoBanner";
import StickyNicheCTA from "@/components/new/StickyNicheCTA";
import SubBrandBadge from "@/components/new/SubBrandBadge";
import MarketplaceAgentsSection from "@/components/new/sections/MarketplaceAgentsSection";
import { useLiveAgentCount } from "@/hooks/useMarketplaceAgents";
import { getVertical } from "@/data/verticals";
import routeMap from "@/assets/touring-route-map.jpg";

const config = getVertical("touring")!;

const seo = {
  title: "TourOps Control Tower — AI Ops Layer for Modern Tour Operators",
  description:
    "Unify Bokun, GetYourGuide, Viator, Stripe, and direct bookings into one operator dashboard. AI agents that quote, confirm, and follow up — 24/7. Live in 2 weeks.",
  canonicalPath: "/touring",
};

// Local warm-sunset accent tokens — page-scoped only.
const warmStyle: React.CSSProperties = {
  ["--touring-amber" as never]: "#F59E0B",
  ["--touring-coral" as never]: "#FB7185",
  ["--touring-orange" as never]: "#F97316",
};

const Btn = ({
  label,
  url,
  external,
  variant = "primary",
}: {
  label: string;
  url: string;
  external?: boolean;
  variant?: "primary" | "secondary";
}) => {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-150 active:translate-y-[2px]";
  const styles =
    variant === "primary"
      ? "text-white shadow-md hover:shadow-lg hover:brightness-105"
      : "border border-slate-300 bg-white text-slate-800 shadow-xs hover:border-slate-400 hover:bg-slate-100 hover:text-slate-950";
  const inline =
    variant === "primary"
      ? { background: "linear-gradient(135deg, var(--touring-orange), var(--touring-coral))" }
      : undefined;
  const Inner = (
    <>
      {label}
      {variant === "primary" ? <ArrowRight className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
    </>
  );
  return external ? (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`} style={inline}>
      {Inner}
    </a>
  ) : (
    <Link to={url} className={`${base} ${styles}`} style={inline}>
      {Inner}
    </Link>
  );
};

const TouringHub = () => {
  const { hero, pains, outcomes, agents, integrations, compliance, faqs, playbook, demos, routeSlug, subBrand, eyebrow, buyer, buyerSubtitle, platformNiche, agentCount, productPositioning } =
    config;
  const liveAgentCount = useLiveAgentCount(routeSlug, agentCount);

  return (
    <div style={warmStyle}>
      <PageSeoHead title={seo.title} description={seo.description} canonicalPath={seo.canonicalPath} />

      {demos?.full?.url && (
        <LiveDemoBanner
          url={demos.full.url}
          message={`${subBrand?.name ?? "TourOps Control Tower"} — try the live tour operations demo right now.`}
          storageKey="live-demo-banner-touring"
        />
      )}

      {/* 1 · Hero — split, warm sunset, illustration right */}
      <section className="relative overflow-hidden bg-background pt-14 lg:pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
          style={{
            background:
              "radial-gradient(60% 50% at 80% 0%, var(--touring-orange) 0%, transparent 60%), radial-gradient(45% 40% at 10% 90%, var(--touring-coral) 0%, transparent 60%)",
          }}
        />
        <div className="container mx-auto px-4 pb-16 lg:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ borderColor: "var(--touring-orange)", color: "var(--touring-orange)" }}
              >
                <Sunrise className="h-3.5 w-3.5" /> {eyebrow}
              </span>
              {subBrand && (
                <div className="mt-4">
                  <SubBrandBadge subBrand={subBrand} />
                </div>
              )}
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-brand-primary sm:text-5xl lg:text-6xl">
                {hero.h1.split(",").map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 ? (
                      <span
                        style={{
                          backgroundImage: "linear-gradient(90deg, var(--touring-orange), var(--touring-coral))",
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          color: "transparent",
                        }}
                      >
                        ,
                      </span>
                    ) : null}
                  </span>
                ))}
              </h1>
              <p className="mt-6 max-w-xl text-lg text-slate-secondary">{hero.sub}</p>
              <div className="mt-7 flex flex-wrap items-center gap-2 text-xs">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono font-semibold text-background"
                  style={{ background: "linear-gradient(135deg, var(--touring-orange), var(--touring-coral))" }}
                >
                  {liveAgentCount} tour ops agents
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 font-mono text-slate-secondary">
                  Part of 100+ on Control Tower
                </span>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Btn label={hero.primaryCta.label} url={hero.primaryCta.url} external={hero.primaryCta.external} />
                <Btn label={hero.secondaryCta.label} url={hero.secondaryCta.url} external={hero.secondaryCta.external} variant="secondary" />
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-wider text-slate-secondary">
                {hero.badges.map((b) => (
                  <span key={b} className="inline-flex items-center gap-1.5">
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full"
                      style={{ background: "var(--touring-orange)" }}
                    />
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Illustration with subtle passport-stamp frame */}
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-[2rem]"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in oklab, var(--touring-orange) 18%, transparent), color-mix(in oklab, var(--touring-coral) 18%, transparent))",
                }}
              />
              <img
                src={routeMap}
                alt="Illustrated travel route winding across landmarks with passport stamps"
                width={1280}
                height={960}
                className="relative w-full rounded-[2rem] border border-border shadow-2xl"
              />
              {/* Floating "stamp" chips */}
              <div
                className="absolute -left-3 top-6 hidden rotate-[-8deg] rounded-full border-2 bg-background/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur md:inline-flex"
                style={{ borderColor: "var(--touring-orange)", color: "var(--touring-orange)" }}
              >
                · Live in 2 weeks ·
              </div>
              <div
                className="absolute -right-2 bottom-6 hidden rotate-[6deg] rounded-full border-2 bg-background/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur md:inline-flex"
                style={{ borderColor: "var(--touring-coral)", color: "var(--touring-coral)" }}
              >
                · 24/7 quotes ·
              </div>
            </div>
          </div>

          {/* Buyer band */}
          <div className="mx-auto mt-14 max-w-4xl rounded-2xl border border-border bg-slate-light p-6 text-center">
            <p className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--touring-orange)" }}>
              {buyer}
            </p>
            <p className="mt-3 text-base text-brand-primary">{buyerSubtitle}</p>
          </div>
        </div>
      </section>

      <StickyNicheCTA
        displayName="Tour Operators"
        demoUrl={demos?.full?.url ?? hero.primaryCta.url}
        demoExternal={!!demos?.full?.url || !!hero.primaryCta.external}
      />

      {/* 2 · Pains — lost-revenue timeline (horizontal) */}
      <section className="bg-slate-light py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.22em]" style={{ color: "var(--touring-coral)" }}>
              Where bookings leak
            </span>
            <h2 className="mt-3 text-3xl font-bold text-brand-primary lg:text-4xl">
              The journey from inquiry to lost booking.
            </h2>
          </div>

          <ol className="relative mt-14 grid gap-6 md:grid-cols-4">
            {/* Dashed connector */}
            <div
              aria-hidden
              className="absolute left-6 right-6 top-6 hidden border-t-2 border-dashed md:block"
              style={{ borderColor: "var(--touring-orange)", opacity: 0.4 }}
            />
            {pains.map((p, i) => (
              <li key={p.title} className="relative">
                <div
                  className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-background shadow-md"
                  style={{ background: "linear-gradient(135deg, var(--touring-orange), var(--touring-coral))" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-5 rounded-2xl border border-border bg-background p-6">
                  <h3 className="text-base font-semibold text-brand-primary">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-secondary">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 3 · Outcomes — ticket-stub strip */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.22em]" style={{ color: "var(--touring-orange)" }}>
              The numbers
            </span>
            <h2 className="mt-3 text-3xl font-bold text-brand-primary lg:text-4xl">
              What changes in the first month.
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((k) => (
              <div
                key={k.label}
                className="relative overflow-hidden rounded-2xl border border-border bg-card p-6"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 0 50%, transparent 8px, hsl(var(--card)) 8px), radial-gradient(circle at 100% 50%, transparent 8px, hsl(var(--card)) 8px)",
                }}
              >
                <div
                  className="font-mono text-4xl font-bold lg:text-5xl"
                  style={{
                    backgroundImage: "linear-gradient(135deg, var(--touring-orange), var(--touring-coral))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {k.value}
                </div>
                <div className="mt-3 border-t border-dashed border-border pt-3 text-[11px] uppercase tracking-[0.18em] text-slate-secondary">
                  {k.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · Products — keep parity but tour-themed */}
      <section className="bg-slate-light py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.22em]" style={{ color: "var(--touring-coral)" }}>
              Two products. One platform.
            </span>
            <h2 className="mt-3 text-3xl font-bold text-brand-primary lg:text-4xl">
              TourOps Control Tower runs the day. CollabAI Platform powers it.
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
            <article
              className="relative overflow-hidden rounded-2xl border-2 bg-background p-8"
              style={{ borderColor: "var(--touring-orange)" }}
            >
              <div
                className="absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-background"
                style={{ background: "linear-gradient(135deg, var(--touring-orange), var(--touring-coral))" }}
              >
                Primary product
              </div>
              <Plane className="h-8 w-8" style={{ color: "var(--touring-orange)" }} />
              <h3 className="mt-5 text-2xl font-bold text-brand-primary">TourOps Control Tower</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-secondary">{productPositioning.controlTowerAngle}</p>
              <ul className="mt-5 space-y-2 text-sm text-brand-primary">
                {["Operator dashboard for bookings, channels, reviews", "Channel reconciliation across OTAs + direct", "Agent-drafted replies on every record", "Audit log on every supplier touch"].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full" style={{ background: "var(--touring-orange)" }} />
                    {x}
                  </li>
                ))}
              </ul>
              {demos?.full?.url && (
                <a
                  href={demos.full.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: "var(--touring-orange)" }}
                >
                  Open the live demo <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </article>

            <article className="relative overflow-hidden rounded-2xl border border-border bg-card p-8">
              <div className="absolute right-4 top-4 rounded-full border border-border bg-background px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-secondary">
                Engine
              </div>
              <ShieldCheck className="h-8 w-8 text-brand-primary" />
              <h3 className="mt-5 text-2xl font-bold text-brand-primary">CollabAI Platform</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-secondary">{productPositioning.collabPlatformAngle}</p>
              <ul className="mt-5 space-y-2 text-sm text-brand-primary">
                {["24/7 agent runtime", "Semantic search across supplier docs + past trips", "Self-host or managed", "Built on Supabase"].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-primary" />
                    {x}
                  </li>
                ))}
              </ul>
              <Link
                to="/collabai-platform"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary"
              >
                Explore the platform <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* 5 · Agents — crew roster */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-5xl flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.22em]" style={{ color: "var(--touring-orange)" }}>
                The crew
              </span>
              <h2 className="mt-3 text-3xl font-bold text-brand-primary lg:text-4xl">
                A roster of specialists for every leg of the trip.
              </h2>
            </div>
            <Link
              to={`/${routeSlug}/agents`}
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "var(--touring-coral)" }}
            >
              All {agents.length} agents <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {agents.slice(0, 6).map((a) => (
              <article
                key={a.name}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold uppercase text-background"
                    style={{ background: "linear-gradient(135deg, var(--touring-orange), var(--touring-coral))" }}
                  >
                    {a.name
                      .split(" ")
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "var(--touring-coral)" }}>
                      {a.role}
                    </div>
                    <h3 className="mt-0.5 text-sm font-semibold text-brand-primary">{a.name}</h3>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-secondary">{a.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6 · Playbook — itinerary */}
      <section className="bg-slate-light py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.22em]" style={{ color: "var(--touring-orange)" }}>
              The itinerary
            </span>
            <h2 className="mt-3 text-3xl font-bold text-brand-primary lg:text-4xl">Two-week rollout, day by day.</h2>
            <p className="mt-4 text-base text-slate-secondary">{playbook.overview}</p>
          </div>

          <ol className="mx-auto mt-12 max-w-3xl space-y-4">
            {playbook.phases.map((phase, i) => (
              <li key={phase.title} className="relative rounded-2xl border border-border bg-background p-6 pl-20">
                <div
                  className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full text-[11px] font-bold text-background"
                  style={{ background: "linear-gradient(135deg, var(--touring-orange), var(--touring-coral))" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex flex-wrap items-baseline gap-3">
                  <span
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider"
                    style={{ color: "var(--touring-coral)" }}
                  >
                    <Clock className="h-3 w-3" /> {phase.week}
                  </span>
                  <h3 className="text-lg font-semibold text-brand-primary">{phase.title}</h3>
                </div>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {phase.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-slate-secondary">
                      <MapPin
                        className="mt-0.5 h-3.5 w-3.5 shrink-0"
                        style={{ color: "var(--touring-orange)" }}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            {playbook.outcomes.map((o) => (
              <div key={o.label} className="rounded-xl border border-border bg-background p-5 text-center">
                <div
                  className="font-mono text-2xl font-bold"
                  style={{
                    backgroundImage: "linear-gradient(135deg, var(--touring-orange), var(--touring-coral))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {o.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-slate-secondary">{o.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 · Integrations */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.22em]" style={{ color: "var(--touring-coral)" }}>
              Works with your stack
            </span>
            <h2 className="mt-3 text-3xl font-bold text-brand-primary lg:text-4xl">No rip-and-replace.</h2>
          </div>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {integrations.map((name) => (
              <span
                key={name}
                className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-brand-primary"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8 · Demo band — featured TourDesk frame */}
      {demos?.full?.url && (
        <section className="bg-[hsl(var(--brand-primary))] py-20 text-background">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
              <div>
                <span
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]"
                  style={{ borderColor: "var(--touring-orange)", color: "var(--touring-orange)" }}
                >
                  Live demo · no signup
                </span>
                <h2 className="mt-5 text-3xl font-bold lg:text-4xl">Click in. Real data. Real agents.</h2>
                <p className="mt-4 text-base text-background/75">{demos.full.blurb}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Btn label={demos.full.label} url={demos.full.url} external />
                  {demos.lite && (
                    <a
                      href={demos.lite.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3 text-sm font-semibold text-background hover:bg-background/10"
                    >
                      {demos.lite.label} <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-background/15"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in oklab, var(--touring-orange) 30%, #0a0a0a), color-mix(in oklab, var(--touring-coral) 20%, #0a0a0a))",
                }}
              >
                <div className="absolute inset-3 rounded-xl bg-background/5 backdrop-blur-sm" />
                <div className="absolute left-6 top-6 flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-background/30" />
                  <span className="h-2.5 w-2.5 rounded-full bg-background/30" />
                  <span className="h-2.5 w-2.5 rounded-full bg-background/30" />
                </div>
                <div className="absolute inset-x-8 top-14 space-y-2">
                  <div className="h-2 w-32 rounded-full bg-background/30" />
                  <div className="h-2 w-48 rounded-full bg-background/20" />
                </div>
                <div className="absolute inset-x-8 bottom-8 grid grid-cols-3 gap-3">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="space-y-2 rounded-lg bg-background/10 p-3">
                      <div className="h-1.5 w-10 rounded-full bg-background/40" />
                      <div
                        className="h-5 w-14 rounded-full"
                        style={{ background: "linear-gradient(135deg, var(--touring-orange), var(--touring-coral))" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 9 · Compliance bar */}
      <section className="bg-slate-light py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 lg:flex-row lg:justify-between">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6" style={{ color: "var(--touring-orange)" }} />
              <span className="text-lg font-semibold text-brand-primary">Your data. Your control.</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-secondary">
              {compliance.map((c) => (
                <span key={c} className="inline-flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--touring-coral)" }} />
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10 · FAQ */}
      <FaqSection title="Frequently asked questions" items={faqs} className="bg-background" />

      {/* Marketplace */}
      <MarketplaceAgentsSection
        verticalSlug={routeSlug}
        heading="More tour ops agents in the Marketplace"
        limit={6}
      />

      <PlatformAttributionBand niche={platformNiche} />

      {/* 11 · Final CTA */}
      <section className="relative overflow-hidden bg-background py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
          style={{
            background:
              "radial-gradient(45% 60% at 50% 50%, var(--touring-coral) 0%, transparent 65%)",
          }}
        />
        <div className="container mx-auto px-4 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-brand-primary lg:text-4xl">
            See it working. Right now.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-secondary">
            One click. Real bookings. Real agents. No signup.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Btn label={hero.primaryCta.label} url={hero.primaryCta.url} external={hero.primaryCta.external} />
            <Btn label="Talk to sales" url="/contact" variant="secondary" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TouringHub;