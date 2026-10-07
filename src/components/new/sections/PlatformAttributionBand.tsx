import { Link } from "react-router-dom";
import { ArrowRight, Cpu, BookOpen, ShieldCheck } from "lucide-react";

interface Props {
  /** Niche-specific subline, e.g. "tuned for billable hours and client delivery." */
  niche: string;
}

/**
 * "Same engine, your shape" — placed near the bottom of every vertical page
 * to attribute the surface back to the CollabAI Platform engine.
 */
const PlatformAttributionBand = ({ niche }: Props) => (
  <section className="bg-background py-20">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-slate-light p-8 lg:p-12">
        <div className="text-center">
          <span className="inline-block rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
            The engine underneath
          </span>
          <h2 className="mt-5 text-3xl font-bold text-brand-primary lg:text-4xl">
            Same engine. {niche}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-secondary">
            Every vertical surface above runs on the{" "}
            <span className="font-semibold text-brand-primary">CollabAI Platform</span> — a private agent runtime
            and a knowledge layer, deployed inside your tenant.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-background p-5 text-left">
            <Cpu className="h-5 w-5 text-[hsl(var(--brand-secondary))]" />
            <div className="mt-2 text-sm font-semibold text-brand-primary">Agent Runtime</div>
            <p className="mt-1 text-xs text-slate-secondary">100+ agents · orchestration · audit log</p>
          </div>
          <div className="rounded-xl border border-border bg-background p-5 text-left">
            <BookOpen className="h-5 w-5 text-[hsl(var(--brand-secondary))]" />
            <div className="mt-2 text-sm font-semibold text-brand-primary">Knowledge + RAG</div>
            <p className="mt-1 text-xs text-slate-secondary">Meetings · docs · CRM · semantic recall</p>
          </div>
          <div className="rounded-xl border border-border bg-background p-5 text-left">
            <ShieldCheck className="h-5 w-5 text-[hsl(var(--brand-secondary))]" />
            <div className="mt-2 text-sm font-semibold text-brand-primary">Private by design</div>
            <p className="mt-1 text-xs text-slate-secondary">Self-hosted by default · your tenant, your keys</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/new/collabai-platform"
            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold text-brand-primary transition-all hover:shadow-md"
          >
            See the CollabAI Platform
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default PlatformAttributionBand;