import { useParams, Link, Navigate } from "react-router-dom";
import { Check, ArrowRight, Server, ArrowUpRight } from "lucide-react";
import ProductPageShell from "@/components/new/ProductPageShell";
import { verticals, nicheSlugs, type NicheSlug } from "@/data/verticals";
import { productSchema, breadcrumbSchema } from "@/lib/seoSchema";
import SubBrandBadge from "@/components/new/SubBrandBadge";
import LiveDemoBanner from "@/components/new/LiveDemoBanner";
import { useLiveAgentCount } from "@/hooks/useMarketplaceAgents";

/**
 * Derive a numeric price (USD) from a string like "$8,999".
 * Returns null if not parseable (e.g. "Custom").
 */
const parsePrice = (s?: string): number | null => {
  if (!s) return null;
  const n = Number(s.replace(/[^0-9.]/g, ""));
  return isNaN(n) || n === 0 ? null : n;
};

const formatPrice = (n: number) => `$${n.toLocaleString("en-US")}`;

type Tier = {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  cta: { label: string; url: string };
  featured?: boolean;
};

const buildTiers = (slug: NicheSlug): Tier[] => {
  const v = verticals[slug];
  const base = parsePrice(v.startingPrice) ?? 2500;
  const growth = base * 2;
  const noun = v.categoryNoun ?? v.displayName.toLowerCase();

  const sharedFeatures = [
    `${v.agentCount} ${noun} agents`,
    "Self-hosted on your server",
    "Software license + updates & patches",
    "Email / community support",
    "$4,000 one-time setup (waivable)",
  ];

  return [
    {
      name: "Starter",
      price: formatPrice(base),
      cadence: "/year",
      blurb: `For ${noun} teams up to 50 employees.`,
      features: [...sharedFeatures, "Up to 50 employees"],
      cta: { label: "Start with Starter", url: "/book-demo" },
    },
    {
      name: "Growth",
      price: formatPrice(growth),
      cadence: "/year",
      blurb: `For ${noun} with 50+ employees.`,
      features: [
        ...sharedFeatures,
        "50+ employees",
        "Optional managed hosting",
      ],
      cta: { label: "Talk to sales", url: "/contact" },
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      cadence: "",
      blurb: "Custom agents, BYO cloud, regulated data.",
      features: [
        "Unlimited employees",
        "Self-host or BYO cloud / air-gapped",
        "Custom agents + integrations",
        ...v.compliance.slice(0, 2),
        "Tier-1 SLA, 24×7",
        "Setup included in scope",
      ],
      cta: { label: "Contact sales", url: "/contact" },
    },
  ];
};

const TierCard = ({ tier }: { tier: Tier }) => (
  <div
    className={`flex flex-col rounded-2xl border p-6 ${
      tier.featured
        ? "border-[hsl(var(--brand-secondary))] bg-card shadow-lg"
        : "border-border bg-card"
    }`}
  >
    {tier.featured && (
      <span className="mb-3 inline-block w-fit rounded-full bg-[hsl(var(--brand-secondary))] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-background">
        Most popular
      </span>
    )}
    <h3 className="text-xl font-bold text-brand-primary">{tier.name}</h3>
    <p className="mt-1 text-sm text-slate-secondary">{tier.blurb}</p>
    <div className="mt-4 flex items-baseline gap-1">
      <span className="text-4xl font-bold text-brand-primary">{tier.price}</span>
      <span className="text-sm text-slate-secondary">{tier.cadence}</span>
    </div>
    <ul className="mt-6 flex-1 space-y-2">
      {tier.features.map((f) => (
        <li key={f} className="flex items-start gap-2 text-sm text-foreground">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-secondary))]" />
          {f}
        </li>
      ))}
    </ul>
    <Link
      to={tier.cta.url}
      className={`mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-all active:translate-y-[2px] ${
        tier.featured
          ? "bg-[hsl(var(--brand-secondary))] text-background"
          : "border border-border bg-background text-brand-primary"
      }`}
    >
      {tier.cta.label}
    </Link>
  </div>
);

const IndustryPricing = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug || !(nicheSlugs as readonly string[]).includes(slug)) {
    return <Navigate to="/pricing" replace />;
  }
  const niche = slug as NicheSlug;
  const v = verticals[niche];
  const tiers = buildTiers(niche);
  const base = parsePrice(v.startingPrice) ?? 2500;
  const productName = v.subBrand?.name ?? `${v.displayName} Industry Pack`;
  const isLegacyVertical = niche === "touring" || niche === "pharma";
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const liveAgentCount = useLiveAgentCount(v.routeSlug, v.agentCount);

  return (
    <ProductPageShell
      seo={{
        title: `${productName} — Pricing`,
        description: `Yearly pricing for the ${v.displayName} Industry Pack. Self-hosted on your server. ${liveAgentCount} agents included. Starts at ${formatPrice(base)}/yr.`,
        canonicalPath: `/pricing/industry/${niche}`,
        noindex: isLegacyVertical,
        jsonLd: [
          productSchema({
            name: productName,
            description: v.platformNiche,
            path: `/pricing/industry/${niche}`,
            price: String(base),
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
            { name: v.displayName, path: `/pricing/industry/${niche}` },
          ]),
        ],
      }}
      eyebrow={`${v.displayName} pricing`}
      h1={`${productName} — yearly pricing`}
      sub={`${v.platformNiche} ${liveAgentCount} agents included. Self-hosted on your infrastructure.`}
      ctas={[
        { label: "Book a demo", url: "/book-demo" },
        { label: "Talk to sales", url: "/contact", variant: "secondary" },
      ]}
    >
      {v.demos?.full?.url && (
        <LiveDemoBanner
          url={v.demos.full.url}
          message={
            v.subBrand
              ? `${v.subBrand.name} — try the live demo before you buy.`
              : `Try the live ${v.displayName} demo before you buy.`
          }
          storageKey={`live-demo-banner-pricing-${niche}`}
        />
      )}
      <section className="bg-background pb-20">
        <div className="container mx-auto px-4">
          {v.subBrand && (
            <div className="mb-6 flex justify-center">
              <SubBrandBadge subBrand={v.subBrand} />
            </div>
          )}
          <div className="mx-auto mb-10 max-w-3xl rounded-2xl border border-[hsl(var(--brand-secondary))]/30 bg-[hsl(var(--brand-secondary))]/5 p-5 text-center">
            <div className="flex items-center justify-center gap-2 text-[hsl(var(--brand-secondary))]">
              <Server className="h-4 w-4" />
              <span className="font-mono text-xs uppercase tracking-wider">Self-hosted · Runs on your server</span>
            </div>
            <p className="mt-2 text-sm text-slate-secondary">
              Installed on your infrastructure — your data never leaves your environment. Yearly license includes updates, patches, and support.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((t) => (
              <TierCard key={t.name} tier={t} />
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-secondary">
            All prices yearly. Custom agents, integrations, or workflows — <Link to="/contact" className="underline">contact sales</Link> for a scoped quote.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold text-brand-primary">What's in the {v.displayName} pack</h3>
              <ul className="mt-4 space-y-2">
                {v.agents.slice(0, 6).map((a) => (
                  <li key={a.name} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-secondary))]" />
                    <span>
                      <span className="font-semibold">{a.name}</span>
                      {a.description ? ` — ${a.description}` : null}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                to={`/${v.routeSlug}/agents`}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[hsl(var(--brand-secondary))]"
              >
                See all {liveAgentCount} agents <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold text-brand-primary">Integrations & compliance</h3>
              <div className="mt-4">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-secondary">Integrations</p>
                <p className="mt-1 text-sm text-foreground">{v.integrations.slice(0, 8).join(" · ")}</p>
              </div>
              <div className="mt-4">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-secondary">Compliance</p>
                <p className="mt-1 text-sm text-foreground">{v.compliance.join(" · ")}</p>
              </div>
              {v.demos?.full && (
                <a
                  href={v.demos.full.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[hsl(var(--brand-secondary))]"
                >
                  Try the live demo <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-1 text-sm font-semibold text-slate-secondary hover:text-foreground"
            >
              ← Back to all pricing
            </Link>
          </div>
        </div>
      </section>
    </ProductPageShell>
  );
};

export default IndustryPricing;