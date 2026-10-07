import { Link } from "react-router-dom";
import { ArrowRight, LayoutDashboard, Cpu } from "lucide-react";
import type { VerticalProductPositioning } from "@/data/verticals";

interface Props {
  positioning: VerticalProductPositioning;
  /** Optional niche route slug, used to deep-link to /<niche>/agents and /<niche>/use-cases. */
  nicheSlug?: string;
}

const ProductsBand = ({ positioning, nicheSlug }: Props) => {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
            Two products. One platform.
          </span>
          <h2 className="mt-6 text-3xl font-bold text-brand-primary lg:text-4xl">
            Control Tower for the daily run. CollabAI Platform underneath.
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2">
          {/* Primary: Control Tower */}
          <article className="relative overflow-hidden rounded-2xl border-2 border-[hsl(var(--brand-secondary))] bg-card p-8">
            <div className="absolute right-4 top-4 rounded-full bg-[hsl(var(--brand-secondary))] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-background">
              Primary product
            </div>
            <LayoutDashboard className="h-8 w-8 text-[hsl(var(--brand-secondary))]" />
            <h3 className="mt-5 text-2xl font-bold text-brand-primary">Control Tower</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-secondary">{positioning.controlTowerAngle}</p>
            <ul className="mt-5 space-y-2 text-sm text-brand-primary">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 rounded-full bg-[hsl(var(--brand-secondary))]" /> Role-based dashboards</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 rounded-full bg-[hsl(var(--brand-secondary))]" /> AI agent orchestration</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 rounded-full bg-[hsl(var(--brand-secondary))]" /> Live workflow + integrations</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 rounded-full bg-[hsl(var(--brand-secondary))]" /> Audit log on every action</li>
            </ul>
            <Link
              to="/new/control-tower"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-secondary))]"
            >
              Explore Control Tower <ArrowRight className="h-4 w-4" />
            </Link>
          </article>

          {/* Secondary: CollabAI Platform */}
          <article className="relative overflow-hidden rounded-2xl border border-border bg-slate-light p-8">
            <div className="absolute right-4 top-4 rounded-full border border-border bg-card px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-secondary">
              Engine
            </div>
            <Cpu className="h-8 w-8 text-brand-primary" />
            <h3 className="mt-5 text-2xl font-bold text-brand-primary">CollabAI Platform</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-secondary">{positioning.collabPlatformAngle}</p>
            <ul className="mt-5 space-y-2 text-sm text-brand-primary">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 rounded-full bg-brand-primary" /> 100+ specialized agents</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 rounded-full bg-brand-primary" /> Knowledge + RAG runtime</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 rounded-full bg-brand-primary" /> Self-host or managed</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 rounded-full bg-brand-primary" /> Built on Supabase</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                to="/new/collabai-platform"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary"
              >
                Explore the platform <ArrowRight className="h-4 w-4" />
              </Link>
              {nicheSlug && (
                <Link
                  to={`/${nicheSlug}/agents`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-secondary hover:text-brand-primary"
                >
                  See the agents
                </Link>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProductsBand;