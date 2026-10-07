import {
  FolderKanban, TrendingUp, Users, Video, Target, Sparkles,
  Calendar, Receipt, UserCheck,
} from "lucide-react";

const modules = [
  { icon: FolderKanban, title: "Projects & Delivery", desc: "Track projects, milestones, billing, allocation across Monday + Notion.", count: "12 features" },
  { icon: TrendingUp, title: "BD & Pipeline", desc: "HubSpot deals, contacts, accounts — with Deal Coach on every opportunity.", count: "15 features" },
  { icon: Users, title: "Teams, OKRs & Productivity", desc: "Team-level scorecards, OKRs, utilization, and weekly performance.", count: "10 features" },
  { icon: Video, title: "Meetings & Knowledge", desc: "Zoom transcripts, AI summaries, semantic knowledge base, process guides.", count: "11 features" },
  { icon: Target, title: "EOS & Strategy", desc: "Rocks, Scorecard, IDS, V/TO, Accountability Chart — L10-native.", count: "8 features" },
  { icon: Sparkles, title: "AI & Automation", desc: "100+ agency-tuned agents, CollabAI runtime, automated workflows.", count: "100+ agents" },
  { icon: Calendar, title: "Resource Projection", desc: "Capacity planning, weekly reports, data-center views for ops.", count: "5 features" },
  { icon: Receipt, title: "Finance & Invoicing", desc: "Project billing setup, expense tracking, invoice management.", count: "4 features" },
  { icon: UserCheck, title: "HR & Leave", desc: "Leave requests, approvals, HR sync, employee directory.", count: "6 features" },
];

const AgencyModuleGrid = () => (
  <section className="bg-background py-24">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
          What's inside
        </span>
        <h2 className="mt-3 text-3xl font-bold text-brand-primary lg:text-4xl">
          Nine modules. One operating system for your agency.
        </h2>
        <p className="mt-4 text-base text-slate-secondary">
          Every module is live in production — not a roadmap, not a beta.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((m) => {
          const Icon = m.icon;
          return (
            <article
              key={m.title}
              className="rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[hsl(var(--brand-secondary))]/10">
                  <Icon className="h-5 w-5 text-[hsl(var(--brand-secondary))]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-brand-primary">{m.title}</h3>
                    <span className="rounded border border-[hsl(var(--signal-live))]/40 px-1.5 py-0 text-[9px] font-semibold uppercase tracking-wider text-[hsl(var(--signal-live))]">
                      Live
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-secondary">{m.desc}</p>
                  <p className="mt-2 text-[10px] uppercase tracking-wider text-slate-secondary">
                    {m.count}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default AgencyModuleGrid;