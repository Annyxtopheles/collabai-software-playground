import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Quote, ExternalLink } from "lucide-react";
import { FaqSection } from "@/components/ui/faq-section";
import PageSeoHead from "@/components/PageSeoHead";
import PlatformAttributionBand from "@/components/new/sections/PlatformAttributionBand";
import ProductsBand from "@/components/new/sections/ProductsBand";
import PlaybookSection from "@/components/new/sections/PlaybookSection";
import DemosBand from "@/components/new/sections/DemosBand";
import type { VerticalConfig } from "@/data/verticals";
import StickyNicheCTA from "@/components/new/StickyNicheCTA";
import SubBrandBadge from "@/components/new/SubBrandBadge";
import LiveDemoBanner from "@/components/new/LiveDemoBanner";
import MarketplaceAgentsSection from "@/components/new/sections/MarketplaceAgentsSection";
import { useLiveAgentCount } from "@/hooks/useMarketplaceAgents";

interface Props {
  config: VerticalConfig;
  seo: { title: string; description: string; canonicalPath: string };
  customProductsBand?: React.ReactNode;
}

const CTAButton = ({
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
    "inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all active:translate-y-[2px]";
  const styles =
    variant === "primary"
      ? "bg-[hsl(var(--brand-secondary))] text-background hover:shadow-lg"
      : "border border-border bg-card text-brand-primary hover:shadow-md";
  if (external) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
        {label}
        {variant === "primary" ? <ArrowRight className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
      </a>
    );
  }
  return (
    <Link to={url} className={`${base} ${styles}`}>
      {label} <ArrowRight className="h-4 w-4" />
    </Link>
  );
};

const NicheHubTemplate = ({ config, seo, customProductsBand }: Props) => {
  const {
    hero, pains, outcomes, agents, integrations, compliance, testimonials, faqs, closingBadges,
    eyebrow, buyer, buyerSubtitle, platformNiche, useCases, playbook, productPositioning,
    routeSlug, displayName, demos, agentCount, categoryNoun, subBrand,
  } = config;
  const noun = categoryNoun ?? displayName.toLowerCase();
  const liveAgentCount = useLiveAgentCount(routeSlug, agentCount);

  const previewAgents = agents.slice(0, 6);
  const previewUseCases = useCases.slice(0, 3);

  return (
    <>
      <PageSeoHead title={seo.title} description={seo.description} canonicalPath={seo.canonicalPath} />

      {demos?.full?.url && (
        <LiveDemoBanner
          url={demos.full.url}
          message={
            subBrand
              ? `${subBrand.name} — try the live ${noun} demo right now.`
              : `Try the live ${noun} demo right now.`
          }
          storageKey={`live-demo-banner-${routeSlug}`}
        />
      )}

      {/* 1 · Hero */}
      <section className="bg-background pt-20 pb-16 lg:pt-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
              {eyebrow}
            </span>
            {subBrand && (
              <div className="mt-4 flex justify-center">
                <SubBrandBadge subBrand={subBrand} />
              </div>
            )}
            <h1 className="mt-6 text-4xl font-bold leading-tight text-brand-primary sm:text-5xl lg:text-6xl">
              {hero.h1}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-secondary">{hero.sub}</p>
            <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[hsl(var(--brand-secondary))]/10 px-3 py-1 font-mono font-semibold text-[hsl(var(--brand-secondary))]">
                {liveAgentCount} {noun} agents
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 font-mono text-slate-secondary">
                Part of 100+ on Control Tower
              </span>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <CTAButton label={hero.primaryCta.label} url={hero.primaryCta.url} external={hero.primaryCta.external} />
              <CTAButton
                label={hero.secondaryCta.label}
                url={hero.secondaryCta.url}
                external={hero.secondaryCta.external}
                variant="secondary"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-wider text-slate-secondary">
              {hero.badges.map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--signal-live))]" />
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-border bg-slate-light p-6 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--brand-secondary))]">{buyer}</p>
            <p className="mt-3 text-base text-brand-primary">{buyerSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Sticky CTA bar (mobile bottom / desktop after-hero) */}
      <StickyNicheCTA
        displayName={displayName}
        demoUrl={demos?.full?.url ?? hero.primaryCta.url}
        demoExternal={!!demos?.full?.url || !!hero.primaryCta.external}
      />

      {/* 2 · Pains */}
      <section className="bg-slate-light py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center space-x-2 rounded-full bg-background px-4 py-2 text-sm font-medium text-brand-primary">
              The reality
            </div>
            <h2 className="mt-6 text-3xl font-bold text-brand-primary lg:text-4xl">
              You're losing hours to work software should handle.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pains.map((p, i) => (
              <div key={p.title} className="rounded-2xl border border-border bg-card p-7">
                <div className="font-mono text-xs uppercase tracking-wider text-[hsl(var(--brand-secondary))]">0{i + 1}</div>
                <h3 className="mt-3 text-lg font-semibold text-brand-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-secondary">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 + 4 · Products band (Control Tower primary, CollabAI Platform engine) */}
      {customProductsBand ?? <ProductsBand positioning={productPositioning} nicheSlug={routeSlug} />}

      {/* 5 · Outcomes */}
      <section className="bg-[hsl(var(--brand-primary))] py-20 text-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center space-x-2 rounded-full bg-background/10 px-4 py-2 text-sm font-medium">
              What changes
            </div>
            <h2 className="mt-6 text-3xl font-bold lg:text-4xl">The numbers, in production.</h2>
          </div>
          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((k) => (
              <li key={k.label} className="text-center">
                <div className="font-mono text-4xl font-bold text-[hsl(var(--signal-live))] lg:text-5xl">{k.value}</div>
                <div className="mt-2 text-sm uppercase tracking-wider text-background/70">{k.label}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6 · Use cases preview */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-5xl flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[hsl(var(--brand-secondary))]">Use cases</span>
              <h2 className="mt-2 text-3xl font-bold text-brand-primary lg:text-4xl">Where teams put this to work.</h2>
            </div>
            <Link to={`/${routeSlug}/use-cases`} className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-secondary))]">
              All use cases <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
            {previewUseCases.map((u) => (
              <article key={u.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-brand-primary">{u.title}</h3>
                <p className="mt-2 text-sm text-slate-secondary">{u.scenario}</p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                  <span className="text-xs text-slate-secondary">{u.outcome}</span>
                  {u.metric && (
                    <span className="rounded bg-[hsl(var(--signal-live))]/15 px-2 py-0.5 font-mono text-xs text-brand-primary">{u.metric}</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7 · Agents preview */}
      <section className="bg-slate-light py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-5xl flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[hsl(var(--brand-secondary))]">Agents</span>
              <h2 className="mt-2 text-3xl font-bold text-brand-primary lg:text-4xl">Specialized agents, built for this work.</h2>
            </div>
            <Link to={`/${routeSlug}/agents`} className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-secondary))]">
              All agents <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3">
            {previewAgents.map((a) => (
              <div key={a.name} className="rounded-2xl border border-border bg-card p-5">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[hsl(var(--brand-secondary))]">{a.role}</div>
                <h3 className="mt-2 text-sm font-semibold text-brand-primary">{a.name}</h3>
                <p className="mt-1.5 text-xs text-slate-secondary">{a.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to={`/${routeSlug}/workflows`} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">
              See how the agents combine into workflows <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8 · Playbook */}
      <PlaybookSection playbook={playbook} nicheName={noun} />

      {/* 8b · Live demos (only when configured) */}
      {demos && <DemosBand demos={demos} nicheName={noun} />}

      {/* 9 · Integrations */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center space-x-2 rounded-full bg-slate-light px-4 py-2 text-sm font-medium text-brand-primary">
              Works with your stack
            </div>
            <h2 className="mt-6 text-3xl font-bold text-brand-primary lg:text-4xl">No rip-and-replace.</h2>
          </div>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {integrations.map((name) => (
              <span key={name} className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-brand-primary">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 10 · Testimonials */}
      {testimonials.length > 0 && (
        <section className="bg-slate-light py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex items-center space-x-2 rounded-full bg-[hsl(var(--brand-secondary))]/10 px-4 py-2 text-sm font-medium text-[hsl(var(--brand-secondary))]">
                Proof
              </div>
              <h2 className="mt-6 text-3xl font-bold text-brand-primary lg:text-4xl">Battle-tested, not beta.</h2>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <figure key={t.name} className="rounded-2xl border border-border bg-card p-7">
                  <Quote className="h-5 w-5 text-[hsl(var(--brand-secondary))]" />
                  <blockquote className="mt-4 text-sm leading-relaxed text-brand-primary">"{t.quote}"</blockquote>
                  <figcaption className="mt-5 border-t border-border pt-4">
                    <div className="text-sm font-semibold text-brand-primary">{t.name}</div>
                    <div className="text-xs text-slate-secondary">{t.role}</div>
                    {t.metric && (
                      <div className="mt-2 inline-block rounded bg-[hsl(var(--signal-live))]/15 px-2 py-0.5 text-xs font-mono text-brand-primary">{t.metric}</div>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 11 · Compliance bar */}
      <section className="bg-[hsl(var(--brand-primary))] py-16 text-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 lg:flex-row lg:justify-between">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-[hsl(var(--signal-live))]" />
              <span className="text-lg font-semibold">Your data. Your control.</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
              {compliance.map((c) => (
                <span key={c} className="inline-flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--signal-live))]" />
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12 · FAQ */}
      <FaqSection title="Frequently asked questions" items={faqs} className="bg-background" />

      {/* Marketplace — more agents from the CollabAI Agents Marketplace, filtered to this vertical */}
      <MarketplaceAgentsSection
        verticalSlug={routeSlug}
        heading={`More ${noun} agents in the Marketplace`}
        limit={6}
      />

      {/* CollabAI Platform attribution */}
      <PlatformAttributionBand niche={platformNiche} />

      {/* 13 · Final CTA */}
      <section className="bg-slate-light py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-brand-primary lg:text-4xl">
            See it working. Right now.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-secondary">
            One click. Real data. Real agents. No signup.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CTAButton label={hero.primaryCta.label} url={hero.primaryCta.url} external={hero.primaryCta.external} />
            <CTAButton label="Talk to sales" url="/new/contact" variant="secondary" />
          </div>
          {closingBadges && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-wider text-slate-secondary">
              {closingBadges.map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--signal-live))]" />
                  {b}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default NicheHubTemplate;