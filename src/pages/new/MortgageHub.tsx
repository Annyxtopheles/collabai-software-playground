import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, ShieldCheck, Quote, Building2, Compass, Clock, LineChart, Lock, KeyRound, Server, FileCheck } from "lucide-react";
import { FaqSection } from "@/components/ui/faq-section";
import PageSeoHead from "@/components/PageSeoHead";
import PlatformAttributionBand from "@/components/new/sections/PlatformAttributionBand";
import LiveDemoBanner from "@/components/new/LiveDemoBanner";
import StickyNicheCTA from "@/components/new/StickyNicheCTA";
import SubBrandBadge from "@/components/new/SubBrandBadge";
import MarketplaceAgentsSection from "@/components/new/sections/MarketplaceAgentsSection";
import LogoStrip from "@/components/LogoStrip";
import { useLiveAgentCount } from "@/hooks/useMarketplaceAgents";
import { getVertical } from "@/data/verticals";
import blueprintImg from "@/assets/mortgage-blueprint.jpg";

const config = getVertical("mortgage-bank")!;

const seo = {
  title: "Mortgage Control Tower — AI Ops Layer",
  description:
    "AI agents that sit on top of Encompass, LendingPad, or ICE Mortgage Tech. Real-time pipeline risk, rate-lock alerts, and compliance monitoring. Live in under 2 weeks.",
  canonicalPath: "/mortgage-bank",
};

// Local warm-sunset accent tokens — page-scoped only.
const warmStyle: React.CSSProperties = {
  ["--mortgage-navy" as never]: "#0F1B3D",
  ["--mortgage-cyan" as never]: "#22D3EE",
  ["--mortgage-blue" as never]: "#3B82F6",
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
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all active:translate-y-[2px]";
  const styles =
    variant === "primary"
      ? "text-background shadow-lg shadow-[hsl(0,0%,9%)]/10 hover:shadow-xl"
      : "border border-border bg-background text-brand-primary hover:shadow-md";
  const inline =
    variant === "primary"
      ? { background: "linear-gradient(135deg, var(--mortgage-blue), var(--mortgage-cyan))" }
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

const MortgageHub = () => {
  const { hero, pains, outcomes, agents, compliance, faqs, playbook, demos, routeSlug, subBrand, eyebrow, buyer, buyerSubtitle, platformNiche, agentCount, productPositioning } =
    config;
  const liveAgentCount = useLiveAgentCount(routeSlug, agentCount);

  return (
    <div style={warmStyle}>
      <PageSeoHead title={seo.title} description={seo.description} canonicalPath={seo.canonicalPath} />

      {demos?.full?.url && (
        <LiveDemoBanner
          url={demos.full.url}
          message={`${subBrand?.name ?? "Mortgage Control Tower"} — try the live mortgage operations demo right now.`}
          storageKey="live-demo-banner-mortgage"
        />
      )}

      {/* 1 · Hero — split, warm sunset, illustration right */}
      <section className="relative overflow-hidden bg-background pt-14 lg:pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
          style={{
            background:
              "radial-gradient(60% 50% at 80% 0%, var(--mortgage-blue) 0%, transparent 60%), radial-gradient(45% 40% at 10% 90%, var(--mortgage-cyan) 0%, transparent 60%)",
          }}
        />
        <div className="container mx-auto px-4 pb-16 lg:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ borderColor: "var(--mortgage-blue)", color: "var(--mortgage-blue)" }}
              >
                <Building2 className="h-3.5 w-3.5" /> {eyebrow}
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
                          backgroundImage: "linear-gradient(90deg, var(--mortgage-blue), var(--mortgage-cyan))",
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
                  style={{ background: "linear-gradient(135deg, var(--mortgage-blue), var(--mortgage-cyan))" }}
                >
                  {liveAgentCount} mortgage ops agents
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
                      style={{ background: "var(--mortgage-blue)" }}
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
                    "linear-gradient(135deg, color-mix(in oklab, var(--mortgage-blue) 18%, transparent), color-mix(in oklab, var(--mortgage-cyan) 18%, transparent))",
                }}
              />
              <img
                src={blueprintImg}
                alt="Mortgage pipeline visualized as a blueprint with milestone checkpoints, rate-lock dials, and approval stamps"
                width={1280}
                height={960}
                className="relative w-full rounded-[2rem] border border-border shadow-2xl"
              />
              {/* Floating "stamp" chips */}
              <div
                className="absolute -left-3 top-6 hidden rotate-[-8deg] rounded-full border-2 bg-background/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur md:inline-flex"
                style={{ borderColor: "var(--mortgage-blue)", color: "var(--mortgage-blue)" }}
              >
                · Live in 2 weeks ·
              </div>
              <div
                className="absolute -right-2 bottom-6 hidden rotate-[6deg] rounded-full border-2 bg-background/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur md:inline-flex"
                style={{ borderColor: "var(--mortgage-cyan)", color: "var(--mortgage-cyan)" }}
              >
                · Behind your firewall ·
              </div>
            </div>
          </div>

          {/* Buyer band */}
          <div className="mx-auto mt-14 max-w-4xl rounded-2xl border border-border bg-slate-light p-6 text-center">
            <p className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--mortgage-blue)" }}>
              {buyer}
            </p>
            <p className="mt-3 text-base text-brand-primary">{buyerSubtitle}</p>
          </div>

          {/* Privacy posture strip */}
          <div className="mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Server, title: "Behind your firewall", body: "Self-host or run inside your own VPC." },
              { icon: KeyRound, title: "Bring your own keys", body: "OpenAI · Anthropic · Azure OpenAI · Bedrock." },
              { icon: Lock, title: "Zero data egress", body: "Borrower data never leaves your perimeter." },
              { icon: FileCheck, title: "Audit log on every action", body: "Every agent step is recorded and queryable." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-border bg-background p-5">
                <Icon className="h-5 w-5" style={{ color: "var(--mortgage-blue)" }} />
                <div className="mt-3 text-sm font-semibold text-brand-primary">{title}</div>
                <p className="mt-1 text-xs leading-relaxed text-slate-secondary">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StickyNicheCTA
        displayName="Mortgage Banks"
        demoUrl={demos?.full?.url ?? hero.primaryCta.url}
        demoExternal={!!demos?.full?.url || !!hero.primaryCta.external}
      />

      {/* 2 · Pains — lost-revenue timeline (horizontal) */}
      <section className="bg-slate-light py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.22em]" style={{ color: "var(--mortgage-cyan)" }}>
              Where loans leak
            </span>
            <h2 className="mt-3 text-3xl font-bold text-brand-primary lg:text-4xl">
              The journey from app to at-risk loan.
            </h2>
          </div>

          <ol className="relative mt-14 grid gap-6 md:grid-cols-4">
            {/* Dashed connector */}
            <div
              aria-hidden
              className="absolute left-6 right-6 top-6 hidden border-t-2 border-dashed md:block"
              style={{ borderColor: "var(--mortgage-blue)", opacity: 0.4 }}
            />
            {pains.map((p, i) => (
              <li key={p.title} className="relative">
                <div
                  className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-background shadow-md"
                  style={{ background: "linear-gradient(135deg, var(--mortgage-blue), var(--mortgage-cyan))" }}
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
            <span className="font-mono text-xs uppercase tracking-[0.22em]" style={{ color: "var(--mortgage-blue)" }}>
              The numbers
            </span>
            <h2 className="mt-3 text-3xl font-bold text-brand-primary lg:text-4xl">
              What changes in the first month on the pipeline.
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
                    backgroundImage: "linear-gradient(135deg, var(--mortgage-blue), var(--mortgage-cyan))",
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
            <span className="font-mono text-xs uppercase tracking-[0.22em]" style={{ color: "var(--mortgage-cyan)" }}>
              Two products. One platform.
            </span>
            <h2 className="mt-3 text-3xl font-bold text-brand-primary lg:text-4xl">
              Mortgage Control Tower runs the pipeline. CollabAI Platform powers it.
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
            <article
              className="relative overflow-hidden rounded-2xl border-2 bg-background p-8"
              style={{ borderColor: "var(--mortgage-blue)" }}
            >
              <div
                className="absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-background"
                style={{ background: "linear-gradient(135deg, var(--mortgage-blue), var(--mortgage-cyan))" }}
              >
                Primary product
              </div>
              <LineChart className="h-8 w-8" style={{ color: "var(--mortgage-blue)" }} />
              <h3 className="mt-5 text-2xl font-bold text-brand-primary">Mortgage Control Tower</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-secondary">{productPositioning.controlTowerAngle}</p>
              <ul className="mt-5 space-y-2 text-sm text-brand-primary">
                {["Risk-sorted pipeline view across every open loan", "Rate-lock alerts at 7 / 3 / 1 day thresholds", "Underwriting pre-checks before submission", "Audit log on every agent action"].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full" style={{ background: "var(--mortgage-blue)" }} />
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
                  style={{ color: "var(--mortgage-blue)" }}
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
                {["24/7 agent runtime on every loan file", "Semantic search across borrower docs + history", "Self-host or managed", "Built on Supabase"].map((x) => (
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
              <span className="font-mono text-xs uppercase tracking-[0.22em]" style={{ color: "var(--mortgage-blue)" }}>
                The agent stack
              </span>
              <h2 className="mt-3 text-3xl font-bold text-brand-primary lg:text-4xl">
                Specialists for every step of the loan lifecycle.
              </h2>
            </div>
            <Link
              to={`/${routeSlug}/agents`}
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "var(--mortgage-cyan)" }}
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
                    style={{ background: "linear-gradient(135deg, var(--mortgage-blue), var(--mortgage-cyan))" }}
                  >
                    {a.name
                      .split(" ")
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "var(--mortgage-cyan)" }}>
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
            <span className="font-mono text-xs uppercase tracking-[0.22em]" style={{ color: "var(--mortgage-blue)" }}>
              The rollout
            </span>
            <h2 className="mt-3 text-3xl font-bold text-brand-primary lg:text-4xl">Two-week rollout on top of your LOS.</h2>
            <p className="mt-4 text-base text-slate-secondary">{playbook.overview}</p>
          </div>

          <ol className="mx-auto mt-12 max-w-3xl space-y-4">
            {playbook.phases.map((phase, i) => (
              <li key={phase.title} className="relative rounded-2xl border border-border bg-background p-6 pl-20">
                <div
                  className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full text-[11px] font-bold text-background"
                  style={{ background: "linear-gradient(135deg, var(--mortgage-blue), var(--mortgage-cyan))" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex flex-wrap items-baseline gap-3">
                  <span
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider"
                    style={{ color: "var(--mortgage-cyan)" }}
                  >
                    <Clock className="h-3 w-3" /> {phase.week}
                  </span>
                  <h3 className="text-lg font-semibold text-brand-primary">{phase.title}</h3>
                </div>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {phase.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-slate-secondary">
                      <Compass
                        className="mt-0.5 h-3.5 w-3.5 shrink-0"
                        style={{ color: "var(--mortgage-blue)" }}
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
                    backgroundImage: "linear-gradient(135deg, var(--mortgage-blue), var(--mortgage-cyan))",
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
            <span className="font-mono text-xs uppercase tracking-[0.22em]" style={{ color: "var(--mortgage-cyan)" }}>
              Works with your stack
            </span>
            <h2 className="mt-3 text-3xl font-bold text-brand-primary lg:text-4xl">No rip-and-replace.</h2>
          </div>
          <LogoStrip
            mode="static"
            hideHeading
            className="mt-6 py-0"
            aria-label="Mortgage integrations"
            logos={[
              "encompass",
              "lendingpad",
              "salesforce",
              "docusign",
              "freddiemac",
              "outlook",
              "zoom",
              "fanniemae",
              "jungo"
            ]}
          />
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
                  style={{ borderColor: "var(--mortgage-blue)", color: "var(--mortgage-blue)" }}
                >
                  Live demo · no signup
                </span>
                <h2 className="mt-5 text-3xl font-bold lg:text-4xl">Click in. Real pipeline. Real agents.</h2>
                <p className="mt-4 text-base text-background/75">{demos.full.blurb}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Btn label={demos.full.label} url={demos.full.url} external />
                </div>
              </div>
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-background/15"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in oklab, var(--mortgage-blue) 30%, #0a0a0a), color-mix(in oklab, var(--mortgage-cyan) 20%, #0a0a0a))",
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
                        style={{ background: "linear-gradient(135deg, var(--mortgage-blue), var(--mortgage-cyan))" }}
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
              <ShieldCheck className="h-6 w-6" style={{ color: "var(--mortgage-blue)" }} />
              <span className="text-lg font-semibold text-brand-primary">Your data. Your control.</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-secondary">
              {compliance.map((c) => (
                <span key={c} className="inline-flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--mortgage-cyan)" }} />
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
        heading="More mortgage ops agents in the Marketplace"
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
              "radial-gradient(45% 60% at 50% 50%, var(--mortgage-cyan) 0%, transparent 65%)",
          }}
        />
        <div className="container mx-auto px-4 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-brand-primary lg:text-4xl">
            See your pipeline run on AI. Right now.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-secondary">
            One click. Live mortgage demo. No signup required.
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

export default MortgageHub;