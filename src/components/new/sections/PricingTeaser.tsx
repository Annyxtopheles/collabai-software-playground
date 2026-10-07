import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Control Tower",
    tagline: "Private AI ops for your company.",
    features: ["Self-hosted or private cloud", "100+ AI agents", "Operational dashboards", "SOC 2 / HIPAA / GDPR"],
    cta: { label: "See CollabAI pricing — plans from $2,500/year", to: "/pricing" },
    featured: true,
  },
  {
    name: "CollabAI Platform",
    tagline: "Build your own private AI platform.",
    features: ["Custom AI agents", "Cloud or self-hosted", "BYOK models", "Developer-first"],
    cta: { label: "See CollabAI Platform pricing & open-source", to: "/pricing" },
    featured: false,
  },
];

const PricingTeaser = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center space-x-2 bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] px-4 py-2 rounded-full text-sm font-medium">
          One engine. Two ways to buy.
        </div>
        <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-brand-primary">
          Start with Control Tower. Extend with the Platform.
        </h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-2xl border p-8 ${
              t.featured
                ? "border-[hsl(var(--brand-secondary))] bg-card shadow-lg"
                : "border-border bg-card"
            }`}
          >
            {t.featured && (
              <span className="mb-3 inline-block rounded-full bg-[hsl(var(--brand-secondary))]/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
                Featured
              </span>
            )}
            <h3 className="text-2xl font-bold text-brand-primary">{t.name}</h3>
            <p className="mt-1 text-slate-secondary">{t.tagline}</p>
            <ul className="mt-6 space-y-2.5">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-trust-blue" />
                  <span className="text-sm text-slate-secondary">{f}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className={`mt-7 rounded-full px-6 py-2.5 font-semibold transition-all duration-150 active:translate-y-[2px] ${
                t.featured
                  ? "border border-slate-900 bg-slate-950 text-white shadow-sm hover:border-slate-800 hover:bg-slate-800 hover:text-white"
                  : "border border-slate-300 bg-white text-slate-800 shadow-xs hover:border-slate-400 hover:bg-slate-100 hover:text-slate-950"
              }`}
            >
              <Link to={t.cta.to}>
                {t.cta.label} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingTeaser;