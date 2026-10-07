import { Link } from "react-router-dom";
import { Stethoscope, TrendingUp, Building2, Heart, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: Stethoscope,
    title: "ePhysician Control Tower",
    body: "HIPAA-ready voice agents that answer calls, verify insurance, and book appointments 24/7.",
    to: "/healthcare",
  },
  {
    icon: TrendingUp,
    title: "Mortgage Control Tower",
    body: "LOS automation, compliance checks, pipeline visibility — bank-grade controls.",
    to: "/mortgage-bank",
  },
  {
    icon: Building2,
    title: "Agency",
    body: "Client ops, deliverables, retainers, reporting — all in one Control Tower.",
    to: "/agency",
  },
  {
    icon: Heart,
    title: "Nonprofit Control Tower",
    body: "Donor ops, grant workflows, program reporting — built for lean teams.",
    to: "/non-profit",
  },
];

const IndustriesCards4 = () => (
  <section className="py-24 bg-slate-light">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center space-x-2 bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] px-4 py-2 rounded-full text-sm font-medium">
          Built for regulated industries
        </div>
        <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-brand-primary">
          Pick your control tower.
        </h2>
        <p className="mt-4 text-lg text-slate-secondary">
          Same platform. Vertical-specific agents, integrations and compliance.
        </p>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((i) => (
          <Link
            key={i.title}
            to={i.to}
            className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[hsl(var(--brand-primary))] text-background">
              <i.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-brand-primary">{i.title}</h3>
            <p className="mt-2 text-sm text-slate-secondary">{i.body}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[hsl(var(--brand-secondary))]">
              Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesCards4;