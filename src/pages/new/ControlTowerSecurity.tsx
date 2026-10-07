import ProductPageShell from "@/components/new/ProductPageShell";
import { Lock, Server, FileCheck, KeyRound, ScrollText, Building2 } from "lucide-react";

const pillars = [
  { icon: Server, title: "Self-hosted option", body: "Run Control Tower in your VPC or on-prem. Your data never leaves your perimeter." },
  { icon: Lock, title: "Row-level security", body: "Every table is multi-tenant by default — RLS enforced at the database, not in app code." },
  { icon: KeyRound, title: "SSO + RBAC", body: "Google, Microsoft, SAML. Role-based access on every screen and agent action." },
  { icon: ScrollText, title: "Full audit trail", body: "Every agent run, every input, every output — logged with timestamps for compliance." },
  { icon: FileCheck, title: "HIPAA-ready", body: "BAA available. PHI handling vetted across our healthcare deployments." },
  { icon: FileCheck, title: "SOC 2-aligned controls", body: "Encryption at rest and in transit, row-level security, full audit logging, and RBAC — built toward SOC 2 Type II certification." },
  { icon: Building2, title: "Built on Supabase", body: "Production Postgres, isolated tenants, encryption at rest and in transit." },
];

const ControlTowerSecurity = () => (
  <ProductPageShell
    seo={{
      title: "Control Tower Security — Private, Self-hosted, HIPAA-ready",
      description:
        "Self-hosted deployment, row-level security, SSO, full audit trail, and HIPAA-readiness. Built for regulated industries.",
      canonicalPath: "/control-tower/security",
    }}
    eyebrow="Security & Privacy"
    h1="Built for regulated industries from day one."
    sub="Built for regulated industries from day one — healthcare and mortgage deployments shaped the security model. Your data, your tenant, your audit log."
    ctas={[
      { label: "Read the security brief", url: "/resources/whitepapers" },
      { label: "Book a security review", url: "/book-demo", variant: "secondary" },
    ]}
    badges={["HIPAA-ready", "Self-hosted", "Audit trail"]}
  >
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-7">
              <Icon className="h-7 w-7 text-[hsl(var(--brand-secondary))]" />
              <h3 className="mt-4 text-lg font-semibold text-brand-primary">{title}</h3>
              <p className="mt-2 text-sm text-slate-secondary">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ProductPageShell>
);

export default ControlTowerSecurity;