import ProductPageShell from "@/components/new/ProductPageShell";
import { Database, Lock, Zap, GitBranch, FileCode2, ShieldCheck } from "lucide-react";

const reasons = [
  { icon: Database, title: "Postgres-native", body: "Every customer gets a dedicated Postgres database. Real SQL. Real backups. No proprietary lock-in." },
  { icon: Lock, title: "Row-Level Security by design", body: "Multi-tenant isolation enforced at the database. We don't trust application code with your data." },
  { icon: Zap, title: "Edge functions everywhere", body: "Agent runs, webhooks, and integrations execute on global edge — milliseconds from your users." },
  { icon: GitBranch, title: "Open source spine", body: "If our managed service ever goes away, you can self-host. That's the contract." },
  { icon: FileCode2, title: "Generated types end-to-end", body: "Schema changes flow into TypeScript types automatically. Zero drift between DB and UI." },
  { icon: ShieldCheck, title: "SOC 2 + HIPAA paths", body: "Supabase Enterprise gives us the compliance scaffolding. We build the policies, agents, and audit logs on top." },
];

const BuiltOnSupabase = () => (
  <ProductPageShell
    seo={{
      title: "Built on Supabase — Why we chose the open Postgres stack",
      description: "Control Tower is built on Supabase. Open-source Postgres, row-level security, edge functions, and full self-host portability.",
      canonicalPath: "/built-on-supabase",
    }}
    eyebrow="Architecture"
    h1="Built on Supabase. Built to stay open."
    sub="Our customers run on the same open-source stack we love. No proprietary database. No vendor jail."
    ctas={[
      { label: "Read the docs", url: "https://supabase.com", external: true },
      { label: "Talk to engineering", url: "/new/contact", variant: "secondary" },
    ]}
  >
    <section className="bg-background pb-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl border border-border bg-card p-6">
              <r.icon className="h-7 w-7 text-[hsl(var(--brand-secondary))]" />
              <h3 className="mt-4 text-lg font-bold text-brand-primary">{r.title}</h3>
              <p className="mt-2 text-sm text-slate-secondary">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ProductPageShell>
);

export default BuiltOnSupabase;