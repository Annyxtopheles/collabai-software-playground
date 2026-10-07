import ProductPageShell from "@/components/new/ProductPageShell";
import { Database, Settings2, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    icon: Database,
    week: "Week 1",
    title: "Connect your data",
    body: "Hook up HubSpot, Zoom, Drive, calendars, and any internal DBs. Your data stays in your tenant — RLS-backed from day one.",
  },
  {
    icon: Settings2,
    week: "Week 2",
    title: "Configure agents",
    body: "Pick from 100+ agents across 6 teams. Set triggers (manual, scheduled, event-driven), pick your model, define scope.",
  },
  {
    icon: Rocket,
    week: "Week 3",
    title: "Pilot with a team",
    body: "Start narrow — one team, one workflow. Run shadow mode, review outputs daily, tune prompts and guardrails.",
  },
  {
    icon: LineChart,
    week: "Week 4",
    title: "Roll out + measure",
    body: "Expand to the org. Track time saved, tasks closed, deals advanced. Every run is logged and auditable.",
  },
];

const ControlTowerHowItWorks = () => (
  <ProductPageShell
    seo={{
      title: "How Control Tower Works — From Data to Production in 4 Weeks",
      description:
        "A four-week deployment path for Control Tower: connect data, configure agents, pilot, and roll out — with audit trail at every step.",
      canonicalPath: "/control-tower/how-it-works",
    }}
    eyebrow="How it works"
    h1="From signed contract to production in four weeks."
    sub="No big-bang rollouts. We pilot one team first, prove the numbers, then scale — with your data, in your environment."
    ctas={[
      { label: "Talk to onboarding", url: "/book-demo" },
      { label: "Try the Live Demo", url: "https://controltowerdemo.collabai.software/login", external: true, variant: "secondary" },
    ]}
  >
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 lg:grid-cols-2">
          {steps.map(({ icon: Icon, week, title, body }, i) => (
            <div key={week} className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-[hsl(var(--brand-secondary))]/10 p-3">
                  <Icon className="h-6 w-6 text-[hsl(var(--brand-secondary))]" />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
                    Step 0{i + 1} · {week}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-brand-primary">{title}</h3>
                  <p className="mt-2 text-sm text-slate-secondary">{body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ProductPageShell>
);

export default ControlTowerHowItWorks;