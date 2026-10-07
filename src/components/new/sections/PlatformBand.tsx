import { Link } from "react-router-dom";
import { ArrowRight, Cpu, BookOpen } from "lucide-react";

/**
 * Compact "Powered by CollabAI Platform" band.
 * Used on the Home page and (optionally) on Control Tower above the pillars
 * to reinforce the two-pillar engine model: Agent Runtime + Knowledge & RAG.
 */
const PlatformBand = () => (
  <section className="bg-slate-light py-20">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-background p-8 lg:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
              The engine underneath
            </span>
            <h2 className="mt-5 text-3xl font-bold text-brand-primary lg:text-4xl">
              Powered by the CollabAI Platform.
            </h2>
            <p className="mt-4 text-base text-slate-secondary">
              A private agentic engine. Two pillars — an{" "}
              <span className="font-semibold text-brand-primary">agent runtime</span> with 100+ specialized agents,
              and a{" "}
              <span className="font-semibold text-brand-primary">knowledge layer</span> that turns your meetings,
              docs, and tools into recall — running inside your tenant.
            </p>
            <Link
              to="/collabai-platform"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-secondary))]"
            >
              Explore the platform <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5">
              <Cpu className="h-6 w-6 text-[hsl(var(--brand-secondary))]" />
              <h3 className="mt-3 text-sm font-semibold text-brand-primary">Agent Runtime</h3>
              <p className="mt-1.5 text-xs text-slate-secondary">
                100+ agents. Orchestrated, observed, fully audited — every action logged.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <BookOpen className="h-6 w-6 text-[hsl(var(--brand-secondary))]" />
              <h3 className="mt-3 text-sm font-semibold text-brand-primary">Knowledge + RAG</h3>
              <p className="mt-1.5 text-xs text-slate-secondary">
                Semantic recall across meetings, docs, CRM, and decisions — your private memory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PlatformBand;