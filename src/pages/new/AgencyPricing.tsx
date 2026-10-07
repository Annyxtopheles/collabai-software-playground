import { useState } from "react";
import { Check, ArrowUpRight, X } from "lucide-react";
import ProductPageShell from "@/components/new/ProductPageShell";
import { productSchema, breadcrumbSchema, faqSchema } from "@/lib/seoSchema";
import { Link } from "react-router-dom";
import { verticals, nicheSlugs } from "@/data/verticals";
import { useLiveAgentCount } from "@/hooks/useMarketplaceAgents";
import { FaqSection } from "@/components/ui/faq-section";

const coreNicheSlugs = ["agency", "healthcare", "mortgage-bank", "non-profit"] as const;

const pricingFaqs = [
  {
    question: "Is the $4,000 setup fee really waivable?",
    answer:
      "Yes. The one-time setup is waived for most Starter and Growth customers who self-host on their own infrastructure. It applies only when our team performs the installation, hardening, and initial integration work for you.",
  },
  {
    question: "What's included in the annual license?",
    answer:
      "Software license, all official connectors, security patches, version upgrades, and email/community support. Custom agent engineering and white-glove SLAs are scoped separately under Enterprise.",
  },
  {
    question: "Self-hosted vs managed hosting — what's the difference?",
    answer:
      "Self-hosted means Control Tower runs entirely inside your environment (your VPC, your servers, your cloud) — your data never leaves. Managed hosting is an optional add-on where we operate the platform for you on isolated infrastructure.",
  },
  {
    question: "Do you offer HIPAA / SOC 2 / GDPR support?",
    answer:
      "Yes, under the Enterprise tier. We provide the controls, documentation, and deployment patterns (including air-gapped) required for regulated industries.",
  },
  {
    question: "Can I try it before I buy?",
    answer:
      "Yes. Book a demo and we'll walk you through a live environment, or try one of the industry demos directly from the Industry Packs tab above.",
  },
  {
    question: "How does Control Tower pricing compare to ChatGPT Enterprise or Microsoft Copilot?",
    answer:
      "ChatGPT Enterprise and Microsoft Copilot are per-seat ($30–$60/user/month) and run on the vendor's cloud. Control Tower is a flat annual license starting at $2,500/year for the whole organization, runs on your own infrastructure, and ships 100+ pre-built operational agents instead of a generic chat box.",
  },
  {
    question: "What does the $2,500 Starter plan include?",
    answer:
      "Starter covers up to 50 employees: self-hosted Control Tower, the full library of 100+ operational AI agents, all official connectors (HubSpot, Zoom, Slack, Drive, etc.), security patches, version upgrades, and email/community support. A one-time $4,000 setup fee applies and is waived for most self-install customers.",
  },
  {
    question: "Do I need to bring my own OpenAI or Anthropic API key?",
    answer:
      "Yes — and that's a feature, not a limitation. You plug in your own OpenAI, Anthropic, AWS Bedrock, or Azure OpenAI key so prompts, completions, and embeddings stay under your contracts and governance. Control Tower never sees your model traffic.",
  },
  {
    question: "How much does a custom AI agent cost?",
    answer:
      "Custom agents are scoped under the Enterprise tier. Typical engagements range from $15,000–$75,000 depending on data sources, integrations, and compliance requirements. Talk to sales for a fixed-scope quote.",
  },
];

const includedInEveryPlan = [
  { title: "Self-hosted on your infrastructure", body: "Your VPC, your servers, your cloud. Data never leaves your environment." },
  { title: "100+ pre-built AI agents", body: "Sales, meetings, project ops, EOS, mortgage, healthcare, pharma — ready on day one." },
  { title: "All official connectors", body: "HubSpot, Zoom, Slack, Drive, SharePoint, Gmail, LinkedIn, Calendar, and more." },
  { title: "Bring your own LLM key", body: "OpenAI, Anthropic, Bedrock, Azure OpenAI — model traffic stays under your contracts." },
  { title: "Updates & security patches", body: "Quarterly feature releases plus same-day patches for critical CVEs." },
  { title: "Operational dashboards", body: "Real-time visibility across teams, agents, and integrations." },
  { title: "SOC 2 / HIPAA / GDPR posture", body: "Documentation, controls, and air-gapped deployment patterns available." },
  { title: "Email & community support", body: "Tier-1 SLA available on Enterprise. 24×7 on request." },
];

const comparisonRows: { feature: string; collabai: string | true; chatgpt: string | boolean; copilot: string | boolean; whiteLabel: string | boolean }[] = [
  { feature: "Pricing model",                  collabai: "$2,500/yr flat",   chatgpt: "$60/user/mo",      copilot: "$30/user/mo",       whiteLabel: "$10k+/mo" },
  { feature: "Self-hosted on your servers",    collabai: true,                chatgpt: false,              copilot: false,                whiteLabel: "Sometimes" },
  { feature: "Bring your own LLM API key",     collabai: true,                chatgpt: false,              copilot: false,                whiteLabel: "Sometimes" },
  { feature: "Pre-built operational agents",   collabai: "100+",              chatgpt: "Chat only",        copilot: "Chat + drafts",      whiteLabel: "Build yourself" },
  { feature: "Industry packs (regulated)",     collabai: "4 verticals",       chatgpt: false,              copilot: false,                whiteLabel: "Custom build" },
  { feature: "HIPAA / SOC 2 / GDPR posture",   collabai: true,                chatgpt: "Add-on",           copilot: "Add-on",             whiteLabel: "Varies" },
];

type Tier = {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  cta: { label: string; url: string; external?: boolean };
  featured?: boolean;
};

const controlTowerTiers: Tier[] = [
  {
    name: "Lite",
    price: "$299",
    cadence: "/year",
    blurb: "For small teams getting started. Installed on your server.",
    features: [
      "Up to 10 employees",
      "Self-hosted on your server",
      "Software license + updates & patches",
      "Email / community support",
      "Basic connectors included",
    ],
    cta: { label: "Buy Now", url: "https://agencylite.collabai.software", external: true },
  },
  {
    name: "Starter",
    price: "$2,500",
    cadence: "/year",
    blurb: "For teams up to 50 employees. Installed on your server.",
    features: [
      "Up to 50 employees",
      "Self-hosted on your server",
      "Software license + updates & patches",
      "Email / community support",
      "All connectors included",
      "$4,000 one-time setup (waivable)",
    ],
    cta: { label: "Buy Now", url: "/book-demo" },
    featured: true,
  },
  {
    name: "Growth",
    price: "$5,000",
    cadence: "/year",
    blurb: "For organizations with 50+ employees. Installed on your server.",
    features: [
      "50+ employees",
      "Self-hosted on your server",
      "Software license + updates & patches",
      "Email / community support",
      "Optional managed hosting available",
      "$4,000 one-time setup (waivable)",
    ],
    cta: { label: "Buy Now", url: "/contact" },
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
      "HIPAA / SOC 2 controls",
      "Tier-1 SLA, 24×7",
      "Setup included in scope",
    ],
    cta: { label: "Buy Now", url: "/contact" },
  },
];

const platformTiers: Tier[] = [
  {
    name: "Enterprise Platform",
    price: "Custom",
    cadence: "",
    blurb: "Private-cloud platform with custom AI agents built by us.",
    features: [
      "BYO cloud or air-gapped",
      "Custom agents engineering",
      "HIPAA / SOC 2 / GDPR",
      "Tier-1 SLA",
    ],
    cta: { label: "Contact sales", url: "/contact" },
  },
];

const PricingCard = ({ tier }: { tier: Tier }) => (
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
    <a
      href={tier.cta.url}
      target={tier.cta.external ? "_blank" : undefined}
      rel={tier.cta.external ? "noopener noreferrer" : undefined}
      className={`mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-all active:translate-y-[2px] ${
        tier.featured
          ? "bg-[hsl(var(--brand-secondary))] text-background"
          : "border border-border bg-background text-brand-primary"
      }`}
    >
      {tier.cta.label}
    </a>
  </div>
);

const Pricing = () => {
  const tiers = controlTowerTiers;

  return (
    <ProductPageShell
      seo={{
        title: "Control Tower Pricing — Self-Hosted AI from $2,500/yr",
        description:
          "Transparent Control Tower pricing. Self-hosted private AI from $2,500/year. Control Tower plans plus industry packs for Agency, Healthcare, Mortgage, and Nonprofit teams.",
          canonicalPath: "/agency-pricing",
        jsonLd: [
          productSchema({
            name: "Control Tower by CollabAI",
            description: "Private, self-hosted AI operations platform. 100+ agents, dashboards, integrations. Bring your own LLM key.",
              path: "/pricing",
            price: "2500",
          }),
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Control Tower by CollabAI",
            description:
              "Self-hosted AI operations platform for regulated industries. Starter, Growth, and Enterprise annual plans.",
            brand: { "@type": "Brand", name: "Control Tower" },
            url: "https://collabai.software/pricing",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "USD",
              lowPrice: "2500",
              highPrice: "5000",
              offerCount: "3",
              availability: "https://schema.org/InStock",
            },
          },
          faqSchema(pricingFaqs.map((f) => ({ q: f.question, a: f.answer }))),
          breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Pricing", path: "/pricing" },
          ]),
        ],
      }}
      eyebrow="Pricing"
      hideEyebrow
      finalCtaDemoOnly
      h1="Protect Your Business & Data from External AI Sources"
      sub=""
      ctas={[]}
    >
      <section className="bg-background pb-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl rounded-2xl border border-[hsl(var(--brand-secondary))]/30 bg-[hsl(var(--brand-secondary))]/5 px-6 py-10 text-center">
            <h2 className="text-2xl font-bold text-brand-primary sm:text-3xl">Get Agency Control Tower</h2>
            <p className="mt-2 text-sm font-medium text-slate-secondary">On your server</p>
            <p className="mt-3 text-3xl font-bold text-brand-primary sm:text-4xl">
              At Just <span className="text-[hsl(var(--brand-secondary))]">$2,500</span>{" "}
              <span className="text-base font-medium text-slate-secondary">(One-Time Payment)</span>
            </p>
            <a
              href="/book-demo"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[hsl(var(--brand-secondary))] px-8 py-3 text-sm font-semibold text-primary-foreground transition-all active:translate-y-[2px]"
            >
              Buy Starter
            </a>
            <p className="mt-6 text-sm text-slate-secondary">
              One Time Installation Fees | No Need To Pay Per Licence | Cover Yearly Maintenance Only
            </p>
          </div>
          <h2 className="mb-6 text-center text-3xl font-bold text-brand-primary lg:text-4xl">
            Explore All Packages
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tiers.map((t) => (
              <PricingCard key={t.name} tier={t} />
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-secondary">
            All pricing is annual. Software is installed on your server — your data never leaves your environment.
          </p>
            <div className="mx-auto mt-6 flex max-w-3xl flex-col items-center justify-center gap-4 text-center sm:flex-row">
              <p className="text-base text-slate-secondary">
                <span className="font-semibold text-brand-primary">Get Agency Control Tower Lite</span>{" "}
                <span className="whitespace-nowrap">
                  At Just <span className="font-bold text-[hsl(var(--brand-secondary))]">$299</span>
                </span>
              </p>
              <a
                href="https://agencylite.collabai.software"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[hsl(var(--brand-secondary))] px-5 py-2.5 text-sm font-semibold text-background transition-all active:translate-y-[2px]"
              >
                Get Now <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
        </div>
      </section>

      {/* What's included in every plan — crawlable depth */}
      <section className="bg-slate-light py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-brand-primary lg:text-4xl">What's Included</h2>
            <p className="mt-3 text-slate-secondary">
              Applies to all plans &amp; packages
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {includedInEveryPlan.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-secondary))]" />
                  <h3 className="text-sm font-bold text-brand-primary">{item.title}</h3>
                </div>
                <p className="mt-2 text-xs text-slate-secondary">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center gap-4 text-center">
            <p className="text-base text-slate-secondary [text-wrap:pretty]">
              See how it functions in real-time
            </p>
            <Link
              to="/book-demo#calendar"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[hsl(var(--brand-secondary))] px-5 py-2.5 text-sm font-semibold text-background transition-all active:translate-y-[2px]"
            >
              Get Free Demo <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison table — vs ChatGPT Enterprise / Copilot / white-label */}
      <section className="border-b border-border bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-brand-primary lg:text-4xl">
              Comparison
            </h2>
            <p className="mt-2 text-base text-slate-secondary">
              Agency Control Tower vs. ChatGPT | Microsoft Copilot | White-label AI
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-5xl overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-light text-xs uppercase tracking-wider text-slate-secondary">
                <tr>
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold text-[hsl(var(--brand-secondary))]">Control Tower</th>
                  <th className="px-4 py-3 font-semibold">ChatGPT Enterprise</th>
                  <th className="px-4 py-3 font-semibold">Microsoft Copilot</th>
                  <th className="px-4 py-3 font-semibold">White-label AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparisonRows.map((row) => (
                  <tr key={row.feature}>
                    <td className="px-4 py-3 font-semibold text-brand-primary">{row.feature}</td>
                    <ComparisonCell value={row.collabai} highlight />
                    <ComparisonCell value={row.chatgpt} />
                    <ComparisonCell value={row.copilot} />
                    <ComparisonCell value={row.whiteLabel} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>


      <FaqSection
        title="Control Tower Pricing FAQ"
        className="bg-background"
        items={pricingFaqs}
      />
    </ProductPageShell>
  );
};

export default Pricing;

const ComparisonCell = ({ value, highlight = false }: { value: string | boolean; highlight?: boolean }) => {
  const base = highlight ? "px-4 py-3 font-semibold text-[hsl(var(--brand-secondary))]" : "px-4 py-3 text-slate-secondary";
  if (value === true) return <td className={base}><Check className="h-4 w-4 text-[hsl(var(--brand-secondary))]" /></td>;
  if (value === false) return <td className={base}><X className="h-4 w-4 text-slate-secondary/60" /></td>;
  return <td className={base}>{value}</td>;
};

const IndustryPricingCard = ({
  slug,
  pillars,
}: {
  slug: typeof nicheSlugs[number];
  pillars: string[];
}) => {
  const v = verticals[slug];
  const count = useLiveAgentCount(v.routeSlug, v.agentCount);
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-brand-primary">{v.subBrand?.name ?? v.displayName}</h3>
        <span className="rounded-full bg-[hsl(var(--brand-secondary))]/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-[hsl(var(--brand-secondary))]">
          {count} agents
        </span>
      </div>
      <p className="mt-1 text-sm text-slate-secondary">
        {v.subBrand?.tagline ? `${v.subBrand.tagline} · ` : ""}{v.platformNiche}
      </p>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-xs text-slate-secondary">Starting at</span>
        <span className="ml-1 text-3xl font-bold text-brand-primary">{v.startingPrice ?? "Custom"}</span>
        <span className="text-sm text-slate-secondary">/year</span>
      </div>
      {slug === "non-profit" && (
        <p className="mt-2 text-xs text-slate-secondary">
          Open-source core is free to self-host. $1,500/yr covers hosting, updates, and support.
        </p>
      )}
      <ul className="mt-5 flex-1 space-y-2">
        {pillars.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-secondary))]" />
            {p}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          to={`/pricing/industry/${slug}`}
          className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-3 py-2 text-xs font-semibold text-background hover:opacity-90"
        >
          See pricing details <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
        {v.demos?.full ? (
          <a
            href={v.demos.full.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[hsl(var(--brand-secondary))] px-3 py-2 text-xs font-semibold text-background hover:shadow-md"
          >
            Try live demo <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ) : (
          <Link
            to={`/${v.routeSlug}`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-[hsl(var(--brand-secondary))] px-3 py-2 text-xs font-semibold text-background"
          >
            Industry page
          </Link>
        )}
        <Link
          to="/book-demo"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-2 text-xs font-semibold text-brand-primary hover:border-[hsl(var(--brand-secondary))]"
        >
          Book demo
        </Link>
      </div>
    </div>
  );
};