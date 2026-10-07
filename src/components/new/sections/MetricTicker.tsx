const metrics = [
  { value: "40+", label: "Hours saved / week" },
  { value: "2,500+", label: "Meetings auto-processed" },
  { value: "10,000+", label: "Agent tasks completed" },
  { value: "166", label: "Active projects tracked" },
  { value: "100+", label: "Pre-built agents" },
  { value: "1+ yr", label: "In production" },
];

const MetricTicker = () => (
  <section className="border-y border-border bg-[hsl(var(--brand-primary))] text-background">
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-background/60">
        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[hsl(var(--signal-live))]" />
        Battle-tested · 1+ year in production at SJ Innovation
      </div>
      <ul className="grid grid-cols-2 gap-6 font-mono sm:grid-cols-3 lg:grid-cols-6">
        {metrics.map((m) => (
          <li key={m.label} className="flex flex-col">
            <span className="text-2xl font-semibold tracking-tight lg:text-3xl">{m.value}</span>
            <span className="mt-1 text-[11px] uppercase tracking-wider text-background/60">{m.label}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default MetricTicker;