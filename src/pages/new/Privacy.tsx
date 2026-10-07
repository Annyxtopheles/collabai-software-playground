import ProductPageShell from "@/components/new/ProductPageShell";

const sections = [
  { h: "What we collect", body: "Account data (name, email, company), usage telemetry (page views, agent runs), and the data you choose to send through integrations. We do not collect data we don't need to operate the product." },
  { h: "Where it lives", body: "All customer data is stored in your dedicated Supabase project, encrypted at rest (AES-256) and in transit (TLS 1.3). Regional residency available on Growth and Enterprise." },
  { h: "How we use it", body: "To operate Control Tower, deliver agent results to you, and surface usage analytics in your own dashboards. We never use customer data to train foundation models." },
  { h: "Who can see it", body: "Only you, the users you invite, and a small set of named CollabAI engineers under written confidentiality agreements. Access is audited." },
  { h: "Your rights", body: "You can export, correct, or delete your data at any time. We honor GDPR DSARs within 30 days and California CCPA requests within 45 days." },
  { h: "Sub-processors", body: "Supabase (database + auth), Resend (transactional email), and select model providers (only when you explicitly route a workload to them). Full list on request." },
];

const Privacy = () => (
  <ProductPageShell
    seo={{
      title: "Privacy Policy — CollabAI",
      description: "How CollabAI collects, stores, and protects customer data. GDPR, CCPA, HIPAA aligned.",
      canonicalPath: "/privacy",
    }}
    eyebrow="Privacy"
    h1="Your data is yours."
    sub="Plain English. No dark patterns. CollabAI is a product of SJ Innovation LLC. Last updated June 2026."
    ctas={[{ label: "Talk to compliance", url: "/contact" }]}
  >
    <section className="bg-background pb-20">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h3 className="text-lg font-bold text-brand-primary">{s.h}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-secondary">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ProductPageShell>
);

export default Privacy;