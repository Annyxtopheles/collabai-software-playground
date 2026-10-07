import {
  LayoutDashboard,
  Bot,
  Workflow,
  Brain,
  Smartphone,
  Plug,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";

const features = [
  { icon: LayoutDashboard, title: "Operational dashboards", body: "Real-time MRR, pipeline, projects, tasks and agent runs in one view." },
  { icon: Bot, title: "100+ AI agents", body: "Specialized agents for ops, sales, finance, support, compliance and execution." },
  { icon: Workflow, title: "Read and write", body: "Agents act across CRM, EHR, LOS, finance, calendars and tickets — not just chat." },
  { icon: Brain, title: "CEO Brain memory", body: "86+ persistent memories so your AI knows your company, not just your prompts." },
  { icon: Smartphone, title: "Mobile apps", body: "iOS and Android — sign off, intervene, and read the room from anywhere." },
  { icon: Plug, title: "100+ integrations", body: "Pre-built connectors plus a private agent SDK for anything internal." },
  { icon: ShieldCheck, title: "Self-hosted", body: "Your VPC, your keys, your audit logs. SOC 2, HIPAA, GDPR ready." },
  { icon: ClipboardCheck, title: "Audit & approvals", body: "Every agent action is logged, replayable, and gateable behind human approval." },
];

const FeaturesGrid8 = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center space-x-2 bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] px-4 py-2 rounded-full text-sm font-medium">
          What's inside
        </div>
        <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-brand-primary">
          Everything operations needs. Nothing it doesn't.
        </h2>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
          >
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))]">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-base font-semibold text-brand-primary">{f.title}</h3>
            <p className="mt-2 text-sm text-slate-secondary">{f.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesGrid8;