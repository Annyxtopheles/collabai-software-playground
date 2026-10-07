import { Link } from "react-router-dom";
import ProductPageShell from "@/components/new/ProductPageShell";
import { agentTeams } from "@/data/agentTeams";
import { ArrowRight } from "lucide-react";

const ControlTowerAgents = () => (
  <ProductPageShell
    seo={{
      title: "AI Agents in Control Tower — 100+ Specialized Agents Across 6 Teams",
      description:
        "Sales, Operations, Marketing, HR, Finance, Engineering — every team has its own AI workforce inside Control Tower.",
      canonicalPath: "/control-tower/ai-agents",
    }}
    eyebrow="AI Agents"
    h1="100+ agents. Six teams. One workforce."
    sub="Each agent is built for a specific role with its own triggers, model, and scope. Tier-1 agents are battle-tested in production at SJ Innovation."
    ctas={[
      { label: "Browse the agent directory", url: "/agents" },
      { label: "Try the Live Demo", url: "https://controltowerdemo.collabai.software/login", external: true, variant: "secondary" },
    ]}
  >
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {agentTeams.map((team) => (
            <Link
              key={team.slug}
              to={`/agents/${team.slug}`}
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
                {team.totalAgents} agents
              </div>
              <h3 className="mt-3 text-lg font-semibold text-brand-primary">{team.name}</h3>
              <p className="mt-2 text-sm text-slate-secondary">{team.tagline}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[hsl(var(--brand-secondary))]">
                View team <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </ProductPageShell>
);

export default ControlTowerAgents;