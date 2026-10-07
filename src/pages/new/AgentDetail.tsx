import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Cpu, Zap, ExternalLink } from "lucide-react";
import PageSeoHead from "@/components/PageSeoHead";
import { getTeam, getAgent } from "@/data/agentTeams";
import { MARKETPLACE_SITE_URL } from "@/integrations/marketplace/client";

const AgentDetail = () => {
  const { team: teamSlug, agent: agentSlug } = useParams();
  const team = teamSlug ? getTeam(teamSlug) : undefined;
  const agent = teamSlug && agentSlug ? getAgent(teamSlug, agentSlug) : undefined;
  if (!team || !agent) return <Navigate to="/agents" replace />;

  return (
    <>
      <PageSeoHead
        title={`${agent.name} — ${team.name} Agent · Control Tower`}
        description={agent.description}
        canonicalPath={`/agents/${team.slug}/${agent.slug}`}
      />
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <Link
            to={`/agents/${team.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[hsl(var(--brand-secondary))]"
          >
            <ArrowLeft className="h-4 w-4" /> {team.name}
          </Link>
          <div className="mt-6 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="rounded bg-[hsl(var(--brand-primary))] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-background">
                {agent.tier}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-secondary">
                {team.name}
              </span>
            </div>
            <h1 className="mt-4 text-4xl font-bold text-brand-primary sm:text-5xl">{agent.name}</h1>
            <p className="mt-4 text-lg text-slate-secondary">{agent.description}</p>
          </div>

          <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-secondary">
                <Zap className="h-3.5 w-3.5" /> Trigger
              </div>
              <div className="mt-2 font-semibold text-brand-primary">{agent.trigger}</div>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-secondary">
                <Cpu className="h-3.5 w-3.5" /> Model
              </div>
              <div className="mt-2 font-semibold text-brand-primary">{agent.model}</div>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-secondary">
                <Clock className="h-3.5 w-3.5" /> Schedule
              </div>
              <div className="mt-2 font-semibold text-brand-primary">{agent.schedule ?? "On demand"}</div>
            </div>
          </div>

          <div className="mt-12 max-w-3xl flex flex-wrap gap-3">
            <a
              href="https://controltowerdemo.collabai.software/login/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[hsl(var(--brand-secondary))] px-6 py-3 text-sm font-semibold text-background transition-all active:translate-y-[2px]"
            >
              See this agent in the live demo <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`${MARKETPLACE_SITE_URL}/browse?q=${encodeURIComponent(agent.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-brand-primary transition-all hover:shadow-md active:translate-y-[2px]"
            >
              Find similar agents in the Marketplace <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgentDetail;