import { Radar, Cpu, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: Radar,
    title: "See everything",
    body: "Operational dashboards across projects, pipeline, MRR, tasks, and AI agent runs. One pane of glass for the whole company.",
  },
  {
    icon: Cpu,
    title: "Act on everything",
    body: "100+ AI agents that read and write across your stack — CRM, EHR, LOS, finance, calendars, and tickets.",
  },
  {
    icon: ShieldCheck,
    title: "Private by design",
    body: "Self-hosted or in your private cloud. SOC 2-aligned controls, HIPAA-ready, GDPR-aligned. Your data never leaves your perimeter — every agent action is audited.",
    link: { label: "See the security model", to: "/control-tower/security" },
  },
];

const SolutionPillars = () => (
  <section className="py-24 bg-slate-light">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center space-x-2 bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] px-4 py-2 rounded-full text-sm font-medium">
          The Control Tower
        </div>
        <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-brand-primary">
          Private AI ops for your company.
        </h2>
        <p className="mt-4 text-lg text-slate-secondary">
          See, decide, and act on your data — without it ever leaving your perimeter.
        </p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.title} className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))]">
              <p.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-brand-primary">{p.title}</h3>
            <p className="mt-2 text-slate-secondary">{p.body}</p>
            {"link" in p && p.link && (
              <Link
                to={p.link.to}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[hsl(var(--brand-secondary))] hover:underline"
              >
                {p.link.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionPillars;