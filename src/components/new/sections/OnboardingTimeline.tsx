const steps = [
  {
    week: "Week 1",
    title: "Admin setup",
    bullets: ["Connect integrations (OAuth)", "Configure agents", "Set roles & permissions"],
  },
  {
    week: "Week 2",
    title: "Team training",
    bullets: ["Two-hour workshops", "Pilot users onboarded", "Feedback loop opens"],
  },
  {
    week: "Week 3",
    title: "Data import",
    bullets: ["Historical context loaded", "Agents fine-tuned", "Knowledge base indexed"],
  },
  {
    week: "Week 4",
    title: "Go-live",
    bullets: ["Optimization", "Full team rollout", "First weekly digests delivered"],
  },
];

const OnboardingTimeline = () => (
  <section className="py-24 bg-slate-light">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center space-x-2 bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] px-4 py-2 rounded-full text-sm font-medium">
          Get running in days, not months
        </div>
        <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-brand-primary">
          Live in 2–4 weeks — vertical packs as fast as same-day.
        </h2>
        <p className="mt-4 text-lg text-slate-secondary">
          A simple, repeatable onboarding flow. No rip-and-replace.
        </p>
      </div>
      <ol className="mt-14 grid gap-6 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li
            key={s.week}
            className="relative rounded-2xl border border-border bg-card p-6"
          >
            <div className="font-mono text-xs uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
              {s.week}
            </div>
            <div className="mt-2 text-3xl font-bold text-brand-primary">0{i + 1}</div>
            <h3 className="mt-3 text-lg font-semibold text-brand-primary">{s.title}</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-secondary">
              {s.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-[hsl(var(--brand-secondary))]" />
                  {b}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default OnboardingTimeline;