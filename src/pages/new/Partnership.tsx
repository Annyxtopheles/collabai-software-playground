import ProductPageShell from "@/components/new/ProductPageShell";
import { Handshake, Code2, Building2 } from "lucide-react";

const tracks = [
  {
    icon: Handshake,
    title: "Referral partner",
    body: "Introduce qualified buyers. Earn 15% of year-one ARR, paid quarterly.",
    cta: "Become a referral partner",
  },
  {
    icon: Code2,
    title: "Implementation partner",
    body: "Deliver onboarding, custom agents, and managed services on top of Control Tower.",
    cta: "Apply to deliver",
  },
  {
    icon: Building2,
    title: "Technology partner",
    body: "Co-build connectors and verticalized agent packs. Joint go-to-market.",
    cta: "Discuss co-build",
  },
];

const Partnership = () => (
  <ProductPageShell
    seo={{
      title: "Partnership — Build, refer, and resell with CollabAI",
      description: "Three partnership tracks: referral, implementation, and technology. Co-build the future of private AI ops.",
      canonicalPath: "/partnership",
    }}
    eyebrow="Partnership"
    h1="Build with us. Sell with us. Win with us."
    sub="Three tracks for agencies, consultancies, and ISVs that want to deliver private AI to regulated industries."
    ctas={[{ label: "Apply to partner", url: "/new/contact" }]}
  >
    <section className="bg-background pb-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 lg:grid-cols-3">
          {tracks.map((t) => (
            <div key={t.title} className="flex flex-col rounded-2xl border border-border bg-card p-6">
              <t.icon className="h-8 w-8 text-[hsl(var(--brand-secondary))]" />
              <h3 className="mt-4 text-lg font-bold text-brand-primary">{t.title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-secondary">{t.body}</p>
              <a
                href="/new/contact"
                className="mt-6 inline-flex items-center justify-center rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold text-brand-primary transition-all active:translate-y-[2px]"
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ProductPageShell>
);

export default Partnership;