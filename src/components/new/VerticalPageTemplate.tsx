import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Quote, ExternalLink } from "lucide-react";
import { FaqSection } from "@/components/ui/faq-section";
import PageSeoHead from "@/components/PageSeoHead";
import PlatformAttributionBand from "@/components/new/sections/PlatformAttributionBand";
import type { VerticalConfig } from "@/data/verticals";

interface Props {
  config: VerticalConfig;
  seo: { title: string; description: string; canonicalPath: string };
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

const VerticalPageTemplate = ({ config, seo }: Props) => {
  const { hero, pains, outcomes, agents, integrations, compliance, testimonials, faqs, closingBadges, eyebrow, buyer, buyerSubtitle, platformNiche } =
    config;

  return (
    <>
      <PageSeoHead title={seo.title} description={seo.description} canonicalPath={seo.canonicalPath} />

      {/* Hero */}
      <section className="bg-background pt-20 pb-16 lg:pt-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
              {eyebrow}
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-brand-primary sm:text-5xl lg:text-6xl">
              {hero.h1}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-secondary">{hero.sub}</p>
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

      {/* Pains */}
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

      {/* Outcomes / KPIs */}
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

      {/* Agent lineup */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center space-x-2 rounded-full bg-[hsl(var(--brand-secondary))]/10 px-4 py-2 text-sm font-medium text-[hsl(var(--brand-secondary))]">
              AI Agents for your team
            </div>
            <h2 className="mt-6 text-3xl font-bold text-brand-primary lg:text-4xl">
              Specialized agents, built for this work.
            </h2>
            <p className="mt-4 text-lg text-slate-secondary">
              Working on top of your existing workflow — surfacing insights, reducing risk, keeping things moving.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {agents.map((a) => (
              <div key={a.name} className="rounded-2xl border border-border bg-card p-6">
                <div className="font-mono text-xs uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
                  {a.role}
                </div>
                <h3 className="mt-3 text-base font-semibold text-brand-primary">{a.name}</h3>
                <p className="mt-2 text-sm text-slate-secondary">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="bg-slate-light py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center space-x-2 rounded-full bg-background px-4 py-2 text-sm font-medium text-brand-primary">
              Works with your stack
            </div>
            <h2 className="mt-6 text-3xl font-bold text-brand-primary lg:text-4xl">
              No rip-and-replace.
            </h2>
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

      {/* Proof / testimonials */}
      {testimonials.length > 0 && (
        <section className="bg-background py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex items-center space-x-2 rounded-full bg-[hsl(var(--brand-secondary))]/10 px-4 py-2 text-sm font-medium text-[hsl(var(--brand-secondary))]">
                Proof
              </div>
              <h2 className="mt-6 text-3xl font-bold text-brand-primary lg:text-4xl">
                Battle-tested, not beta.
              </h2>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <figure key={t.name} className="rounded-2xl border border-border bg-card p-7">
                  <Quote className="h-5 w-5 text-[hsl(var(--brand-secondary))]" />
                  <blockquote className="mt-4 text-sm leading-relaxed text-brand-primary">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-5 border-t border-border pt-4">
                    <div className="text-sm font-semibold text-brand-primary">{t.name}</div>
                    <div className="text-xs text-slate-secondary">{t.role}</div>
                    {t.metric && (
                      <div className="mt-2 inline-block rounded bg-[hsl(var(--signal-live))]/15 px-2 py-0.5 text-xs font-mono text-brand-primary">
                        {t.metric}
                      </div>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Compliance bar */}
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

      {/* FAQ */}
      <FaqSection
        title="Frequently asked questions"
        items={faqs}
        className="bg-background"
      />

      {/* CollabAI Platform attribution */}
      <PlatformAttributionBand niche={platformNiche} />

      {/* Final CTA */}
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

export default VerticalPageTemplate;