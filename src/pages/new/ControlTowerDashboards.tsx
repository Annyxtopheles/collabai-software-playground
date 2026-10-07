import ProductPageShell from "@/components/new/ProductPageShell";
import dashboardImg from "@/assets/control-tower/dashboard.png";
import meetingsImg from "@/assets/control-tower/meetings.png";
import reportsImg from "@/assets/control-tower/reports.png";

const views = [
  {
    image: dashboardImg,
    title: "Executive view",
    body: "Pipeline, projects in flight, agents running, and bottlenecks — one glance per morning.",
  },
  {
    image: meetingsImg,
    title: "Meetings intelligence",
    body: "Every meeting captured, summarized, and turned into action items — auto-assigned to owners.",
  },
  {
    image: reportsImg,
    title: "Reports & analytics",
    body: "Drill into agent performance, hours saved per team, and deal health over time.",
  },
];

const ControlTowerDashboards = () => (
  <ProductPageShell
    seo={{
      title: "Control Tower Dashboards — Role-based Live Views",
      description:
        "Live dashboards for executives, ops, and field teams. Pipeline, meetings, agent runs — one view per role.",
      canonicalPath: "/control-tower/dashboards",
    }}
    eyebrow="Dashboards"
    h1="One view per role. All of it live."
    sub="No more spreadsheet stitching. Pipeline, meetings, agents, projects — surfaced for the person who needs to act."
    ctas={[
      { label: "Try the Live Demo", url: "https://controltowerdemo.collabai.software/login", external: true },
      { label: "Book a walkthrough", url: "/book-demo", variant: "secondary" },
    ]}
  >
    <section className="bg-background py-24">
      <div className="container mx-auto px-4 space-y-20">
        {views.map((v, i) => (
          <div
            key={v.title}
            className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
          >
            <div>
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <img src={v.image} alt={v.title} className="w-full" loading="lazy" />
              </div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
                View 0{i + 1}
              </div>
              <h2 className="mt-3 text-3xl font-bold text-brand-primary">{v.title}</h2>
              <p className="mt-4 text-lg text-slate-secondary">{v.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </ProductPageShell>
);

export default ControlTowerDashboards;