import { Link } from "react-router-dom";
import { ArrowRight, Users, Mic, Briefcase, ListChecks, Target, LineChart } from "lucide-react";
import PageSeoHead from "@/components/PageSeoHead";
import { agentTeams, TOTAL_AGENTS } from "@/data/agentTeams";
import MarketplaceAgentsSection from "@/components/new/sections/MarketplaceAgentsSection";

const iconBySlug: Record<string, React.ComponentType<{ className?: string }>> = {
  "sales-crm": Briefcase,
  meetings: Mic,
  "project-management": LineChart,
  tasks: ListChecks,
  eos: Target,
  "team-productivity": Users,
};

const Agents = () => (
  <>
    <PageSeoHead
      title="Featured Control Tower Agents — A curated set from the 100+ agent library"
      description="A curated set of Control Tower agents, organized into 6 teams: Sales & CRM, Meetings, Project Management, Tasks, EOS, and Team & Productivity. The full 100+ agent library lives in the CollabAI Agents Marketplace."
      canonicalPath="/agents"
    />
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
            Featured Agents
          </span>
          <h1 className="mt-6 text-4xl font-bold text-brand-primary sm:text-5xl">
            Featured Control Tower Agents
          </h1>
          <p className="mt-5 text-lg text-slate-secondary">
            A curated set from the 100+ agent library. Each agent is trained on your company data — meetings, docs, projects, deals — so it has context a generic chatbot never will. Browse the full library in the CollabAI Agents Marketplace below.
          </p>
        </div>
      </div>
    </section>
    <section className="bg-slate-light py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                <h2 className="mt-5 text-lg font-semibold text-brand-primary">{team.name}</h2>
                <p className="mt-2 text-sm text-slate-secondary">{team.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[hsl(var(--brand-secondary))]">
                  Explore team <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
    <MarketplaceAgentsSection
      limit={6}
      heading="Browse the full 100+ agent library"
      subheading="The complete CollabAI Agents Marketplace — built by our team, partners, and the community. Install any agent into your Control Tower in one click."
    />
  </>
);

export default Agents;