import ProductPageShell from "@/components/new/ProductPageShell";
import { LayoutDashboard, Users, ShieldCheck, Smartphone, Plug, Workflow, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: LayoutDashboard,
    title: "Operational Dashboards",
    body: "Pipeline, projects, meetings, and agent runs — one live view per role.",
    href: "/control-tower/dashboards",
  },
  {
    icon: Users,
    title: "100+ AI Agents",
    body: "Six teams of specialized agents handling research, ops, and follow-ups around the clock.",
    href: "/control-tower/ai-agents",
  },
  {
    icon: Workflow,
    title: "How It Works",
    body: "Ingest your data, configure agents, watch outcomes in production within 4 weeks.",
    href: "/control-tower/how-it-works",
  },
  {
    icon: ShieldCheck,
    title: "Security & Privacy",
    body: "Private deployment, RLS-backed multi-tenant data, full audit trail. HIPAA-ready.",
    href: "/control-tower/security",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    body: "iOS and Android apps for field teams — capture meetings, approve tasks, on the go.",
    href: "/control-tower/mobile",
  },
  {
    icon: Plug,
    title: "Integrations",
    body: "HubSpot, Zoom, Slack, Drive, Calendar, and 20+ connectors out of the box.",
    href: "/control-tower/integrations",
  },
];

const proof = [
  { value: "40+", label: "hours / week saved" },
  { value: "2,500+", label: "meetings processed" },
  { value: "10K+", label: "tasks automated" },
  { value: "166", label: "active projects" },
];

const ControlTower = () => (
  <ProductPageShell
    seo={{
      title: "Control Tower — Private AI Ops | CollabAI",
      description:
        "Control Tower is a private, agentic AI platform with 100+ specialized agents, role-based dashboards, and built-in security for regulated industries.",
      canonicalPath: "/control-tower",
    }}
    eyebrow="Control Tower"
    h1="One platform to run your AI workforce."
    sub="Control Tower is the command center for your private AI ops — dashboards, 100+ agents, integrations, and audit-grade security. Already running inside SJ Innovation for 12+ months."
    ctas={[
      { label: "Book a Demo", url: "/book-demo" },
      { label: "Try the Live Demo", url: "/try-demo", variant: "secondary" },
    ]}
    badges={["Self-hosted option", "HIPAA-ready", "Built on Supabase"]}
  >
    {/* Proof bar */}
    <section className="border-y border-border bg-slate-light py-12">
      <div className="container mx-auto px-4">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {proof.map((p) => (
            <li key={p.label} className="text-center">
              <div className="font-mono text-3xl font-bold text-brand-primary lg:text-4xl">{p.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-slate-secondary">{p.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Pillars */}
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center space-x-2 rounded-full bg-[hsl(var(--brand-secondary))]/10 px-4 py-2 text-sm font-medium text-[hsl(var(--brand-secondary))]">
            What's inside
          </div>
          <h2 className="mt-6 text-3xl font-bold text-brand-primary lg:text-4xl">
            Six surfaces. One operating system for AI work.
          </h2>
          <p className="mt-4 text-sm text-slate-secondary">
            Control Tower is the operator surface for the{" "}
            <Link to="/collabai-platform" className="font-semibold text-[hsl(var(--brand-secondary))] hover:underline">
              CollabAI Platform
            </Link>{" "}
            — an agent runtime and a knowledge layer running inside your tenant.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body, href }) => (
            <Link
              key={title}
              to={href}
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <Icon className="h-7 w-7 text-[hsl(var(--brand-secondary))]" />
              <h3 className="mt-4 text-lg font-semibold text-brand-primary">{title}</h3>
              <p className="mt-2 text-sm text-slate-secondary">{body}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[hsl(var(--brand-secondary))]">
                Explore <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* For your industry */}
    <section className="bg-[hsl(var(--brand-primary))] py-20 text-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold lg:text-4xl">Tuned for your industry.</h2>
          <p className="mt-4 text-background/70">
            Pre-built workflows for the verticals we've shipped in production.
          </p>
        </div>
        <div className="mt-12 grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Agencies", href: "/agency" },
            { label: "Mortgage", href: "/mortgage-bank" },
            { label: "Healthcare", href: "/healthcare" },
            { label: "Non-profit", href: "/non-profit" },
          ].map((v) => (
            <Link
              key={v.label}
              to={v.href}
              className="rounded-xl border border-background/20 bg-background/5 px-5 py-6 text-center transition-all hover:bg-background/10"
            >
              <span className="text-base font-semibold">{v.label}</span>
              <ArrowRight className="ml-2 inline h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  </ProductPageShell>
);

export default ControlTower;