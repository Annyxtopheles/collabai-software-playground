import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Bot, User, Cpu } from "lucide-react";
import PageSeoHead from "@/components/PageSeoHead";
import type { VerticalConfig } from "@/data/verticals";

type Mode = "agents" | "use-cases" | "workflows";

interface Props {
  config: VerticalConfig;
  mode: Mode;
}

const titles: Record<Mode, (n: string) => string> = {
  agents: (n) => `Agents for ${n}`,
  "use-cases": (n) => `Use cases — ${n}`,
  workflows: (n) => `Workflows — ${n}`,
};

const subtitles: Record<Mode, string> = {
  agents: "Every agent that ships with this niche, grouped by team. Each one runs inside Control Tower on top of your existing stack.",
  "use-cases": "Concrete scenarios our customers run on day one — and the outcome attached to each.",
  workflows: "How agents combine, who triggers them, and where humans review. Each workflow is a real production trigger chain.",
};

const StepIcon = ({ actor }: { actor: "agent" | "human" | "system" }) => {
  const map = { agent: Bot, human: User, system: Cpu } as const;
  const Icon = map[actor];
  const tone =
    actor === "agent" ? "text-[hsl(var(--brand-secondary))] bg-[hsl(var(--brand-secondary))]/10"
      : actor === "human" ? "text-[hsl(var(--signal-live))] bg-[hsl(var(--signal-live))]/15"
      : "text-slate-secondary bg-slate-light";
  return (
    <span className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${tone}`}>
      <Icon className="h-4 w-4" />
    </span>
  );
};

const NicheSubPageTemplate = ({ config, mode }: Props) => {
  const { displayName, routeSlug, agents, useCases, workflows } = config;
  const title = titles[mode](displayName);

  return (
    <>
      <PageSeoHead
        title={`${title} — Control Tower by CollabAI`}
        description={subtitles[mode]}
        canonicalPath={`/${routeSlug}/${mode}`}
      />

      <section className="bg-background pt-20 pb-10 lg:pt-28">
        <div className="container mx-auto px-4">
          <Link to={`/${routeSlug}`} className="inline-flex items-center gap-2 text-sm text-slate-secondary hover:text-brand-primary">
            <ArrowLeft className="h-4 w-4" /> Back to {displayName}
          </Link>
          <div className="mx-auto mt-6 max-w-3xl text-center">
            <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
              {displayName}
            </span>
            <h1 className="mt-5 text-4xl font-bold text-brand-primary lg:text-5xl">{title}</h1>
            <p className="mt-4 text-base text-slate-secondary">{subtitles[mode]}</p>
          </div>
        </div>
      </section>

      <section className="bg-background pb-24">
        <div className="container mx-auto px-4">
          {mode === "agents" && (
            <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3">
              {agents.map((a) => (
                <article key={a.name} className="rounded-2xl border border-border bg-card p-6">
                  <div className="font-mono text-xs uppercase tracking-wider text-[hsl(var(--brand-secondary))]">{a.role}</div>
                  <h2 className="mt-3 text-base font-semibold text-brand-primary">{a.name}</h2>
                  <p className="mt-2 text-sm text-slate-secondary">{a.description}</p>
                </article>
              ))}
            </div>
          )}

          {mode === "use-cases" && (
            <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
              {useCases.map((u) => (
                <article key={u.title} className="rounded-2xl border border-border bg-card p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-lg font-semibold text-brand-primary">{u.title}</h2>
                    {u.metric && (
                      <span className="shrink-0 rounded bg-[hsl(var(--signal-live))]/15 px-2 py-0.5 font-mono text-xs text-brand-primary">{u.metric}</span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-slate-secondary">{u.scenario}</p>
                  <p className="mt-4 border-t border-border pt-3 text-sm text-brand-primary">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[hsl(var(--brand-secondary))]">Outcome · </span>
                    {u.outcome}
                  </p>
                </article>
              ))}
            </div>
          )}

          {mode === "workflows" && (
            <div className="mx-auto max-w-4xl space-y-8">
              {workflows.map((w) => (
                <article key={w.name} className="rounded-2xl border border-border bg-card p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h2 className="text-xl font-semibold text-brand-primary">{w.name}</h2>
                    <span className="font-mono text-xs uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
                      Trigger · {w.trigger}
                    </span>
                  </div>
                  <ol className="mt-6 space-y-4">
                    {w.steps.map((s, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <StepIcon actor={s.actor} />
                        <div>
                          <div className="font-mono text-[10px] uppercase tracking-wider text-slate-secondary">
                            Step {i + 1} · {s.actor}
                          </div>
                          <div className="text-sm text-brand-primary">{s.label}</div>
                        </div>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-6 rounded-lg bg-slate-light p-4 text-sm text-brand-primary">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[hsl(var(--brand-secondary))]">Outcome · </span>
                    {w.outcome}
                  </p>
                </article>
              ))}
            </div>
          )}

          <div className="mt-14 text-center">
            <Link to={`/${routeSlug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-secondary))]">
              Back to {displayName} overview <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NicheSubPageTemplate;