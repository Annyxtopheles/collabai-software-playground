import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageSeoHead from "@/components/PageSeoHead";
import { getTeam } from "@/data/agentTeams";
import MarketplaceAgentsSection from "@/components/new/sections/MarketplaceAgentsSection";

const AgentTeam = () => {
  const { team: teamSlug } = useParams();
  const team = teamSlug ? getTeam(teamSlug) : undefined;
  if (!team) return <Navigate to="/agents" replace />;

  return (
    <>
      <PageSeoHead
        title={`${team.name} Agents — Control Tower`}
        description={team.tagline}
        canonicalPath={`/agents/${team.slug}`}
      />
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <Link
            to="/agents"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[hsl(var(--brand-secondary))]"
          >
            <ArrowLeft className="h-4 w-4" /> All teams
          </Link>
          <div className="mt-6 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-secondary">
              {team.totalAgents} agents in this team
            </span>
            <h1 className="mt-3 text-4xl font-bold text-brand-primary sm:text-5xl">{team.name}</h1>
            <p className="mt-4 text-lg text-slate-secondary">{team.tagline}</p>
          </div>
        </div>
      </section>
      <section className="bg-slate-light py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.agents.map((a) => (
              <Link
                key={a.slug}
                to={`/agents/${team.slug}/${a.slug}`}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center gap-2">
                  <span className="rounded bg-[hsl(var(--brand-primary))] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-background">
                    {a.tier}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-secondary">
                    {a.trigger}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-brand-primary">{a.name}</h3>
                <p className="mt-2 text-sm text-slate-secondary">{a.description}</p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                  <span className="font-mono text-xs text-slate-secondary">{a.model}</span>
                  <ArrowRight className="h-4 w-4 text-[hsl(var(--brand-secondary))] transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
            {team.totalAgents > team.agents.length && (
              <div className="flex items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 p-6 text-center text-sm text-slate-secondary">
                +{team.totalAgents - team.agents.length} more agents in this team — full directory coming with launch.
              </div>
            )}
          </div>
        </div>
      </section>
      <MarketplaceAgentsSection
        limit={3}
        heading="Extend this team from the Marketplace"
        subheading="Add community- and partner-built agents that complement this team — installable into your Control Tower in one click."
      />
    </>
  );
};

export default AgentTeam;