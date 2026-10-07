import { Link } from "react-router-dom";
import { ArrowRight, Users, Mic, Briefcase, ListChecks, Target, LineChart } from "lucide-react";
import { agentTeams, TOTAL_AGENTS } from "@/data/agentTeams";

const iconBySlug: Record<string, React.ComponentType<{ className?: string }>> = {
  "sales-crm": Briefcase,
  meetings: Mic,
  "project-management": LineChart,
  tasks: ListChecks,
  eos: Target,
  "team-productivity": Users,
};

const AgentTeamsShowcase = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center space-x-2 bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] px-4 py-2 rounded-full text-sm font-medium">
          Meet Your AI Workforce
        </div>
        <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-brand-primary">
          {TOTAL_AGENTS}+ pre-configured agents.<br />Organized into 6 teams.
        </h2>
        <p className="mt-4 text-lg text-slate-secondary">
          Trained on your company data — meetings, docs, projects, deals — so they have context a generic chatbot never will.
        </p>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {agentTeams.map((team) => {
          const Icon = iconBySlug[team.slug] ?? Users;
          return (
            <Link
              key={team.slug}
              to={`/agents/${team.slug}`}
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[hsl(var(--brand-primary))] text-background">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-slate-secondary">
                  {team.totalAgents} agents
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-brand-primary">{team.name}</h3>
              <p className="mt-2 text-sm text-slate-secondary">{team.tagline}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[hsl(var(--brand-secondary))]">
                Explore team <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          );
        })}
      </div>
      <div className="mt-10 text-center">
        <Link
          to="/agents"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-brand-primary transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          Browse all {TOTAL_AGENTS}+ agents <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default AgentTeamsShowcase;