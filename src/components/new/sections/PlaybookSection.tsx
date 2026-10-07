import { Quote } from "lucide-react";
import type { VerticalPlaybook } from "@/data/verticals";

interface Props {
  playbook: VerticalPlaybook;
  nicheName: string;
}

const PlaybookSection = ({ playbook, nicheName }: Props) => (
  <section className="bg-slate-light py-24">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-background px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
          The playbook
        </span>
        <h2 className="mt-6 text-3xl font-bold text-brand-primary lg:text-4xl">
          How {nicheName} go live.
        </h2>
        <p className="mt-4 text-base text-slate-secondary">{playbook.overview}</p>
      </div>

      <ol className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-4">
        {playbook.phases.map((phase, i) => (
          <li key={phase.title} className="rounded-2xl border border-border bg-card p-6">
            <div className="font-mono text-xs uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
              {phase.week} · 0{i + 1}
            </div>
            <h3 className="mt-3 text-base font-semibold text-brand-primary">{phase.title}</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-secondary">
              {phase.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2">
                  <span className="mt-1.5 inline-block h-1 w-1 rounded-full bg-[hsl(var(--brand-secondary))]" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-2xl border border-border bg-card p-6">
        {playbook.outcomes.map((o) => (
          <div key={o.label} className="text-center">
            <div className="font-mono text-2xl font-bold text-brand-primary">{o.value}</div>
            <div className="text-xs uppercase tracking-wider text-slate-secondary">{o.label}</div>
          </div>
        ))}
      </div>

      {playbook.quote && (
        <figure className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-card p-7">
          <Quote className="h-5 w-5 text-[hsl(var(--brand-secondary))]" />
          <blockquote className="mt-3 text-base leading-relaxed text-brand-primary">
            "{playbook.quote.text}"
          </blockquote>
          <figcaption className="mt-3 text-xs uppercase tracking-wider text-slate-secondary">
            — {playbook.quote.attribution}
          </figcaption>
        </figure>
      )}
    </div>
  </section>
);

export default PlaybookSection;