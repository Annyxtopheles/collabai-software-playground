import { AlertTriangle, EyeOff, ClipboardX } from "lucide-react";

const problems = [
  {
    icon: EyeOff,
    title: "5+ disconnected tools",
    body: "Tasks, CRM, docs, meetings, and KPIs live in separate systems. Your team switches contexts all day.",
  },
  {
    icon: ClipboardX,
    title: "Nothing talks to each other",
    body: "A decision in a meeting doesn't reach the CRM. A task never links back to the doc. Data stays siloed.",
  },
  {
    icon: AlertTriangle,
    title: "Leadership flies blind",
    body: "No real-time view of projects, pipeline, or AI work. Status updates arrive weeks late — if at all.",
  },
];

const ProblemSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center space-x-2 bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] px-4 py-2 rounded-full text-sm font-medium">
          The problem
        </div>
        <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-brand-primary">
          Your ops stack is fragmented.
        </h2>
        <p className="mt-4 text-lg text-slate-secondary">
          Most teams run 5+ disconnected tools. Nothing talks to each other. Leadership can't see what's happening.
        </p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {problems.map((p) => (
          <div key={p.title} className="rounded-2xl border border-border bg-card p-7">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-[hsl(var(--brand-primary))] text-background">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-brand-primary">{p.title}</h3>
            <p className="mt-2 text-slate-secondary">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;