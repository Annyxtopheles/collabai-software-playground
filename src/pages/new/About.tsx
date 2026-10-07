import ProductPageShell from "@/components/new/ProductPageShell";

const stats = [
  { value: "2004", label: "SJ Innovation LLC founded" },
  { value: "3", label: "Global offices" },
  { value: "400+", label: "Clients shipped to production" },
  { value: "1+ yr", label: "Control Tower in production" },
];

const values = [
  {
    title: "Operators, not consultants",
    body: "We run the platform we sell. Every release is dogfooded by our own ops team before it ships to customers.",
  },
  {
    title: "Private by default",
    body: "Your data stays in your tenant. We never train foundation models on customer data. Self-host is a first-class option.",
  },
  {
    title: "Outcome accountable",
    body: "We measure success in hours saved and pipeline accelerated — not licenses sold.",
  },
];

const About = () => (
  <ProductPageShell
    seo={{
      title: "About Control Tower — Built by SJ Innovation since 2004",
      description: "Control Tower is built by SJ Innovation LLC — founded 2004, 3 global offices, 400+ clients. Powered by CollabAI, our private AI operations platform.",
      canonicalPath: "/about",
    }}
    eyebrow="About"
    h1="Built by operators. Since 2004."
    sub="Control Tower — powered by CollabAI — is built and operated by SJ Innovation LLC, a global product engineering team that has shipped enterprise software since 2004."
    ctas={[
      { label: "Talk to the team", url: "/contact" },
      { label: "Read the playbook", url: "/built-on-supabase", variant: "secondary" },
    ]}
  >
    <section className="bg-background pb-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="text-4xl font-bold text-brand-primary">{s.value}</div>
              <div className="mt-1 text-sm text-slate-secondary">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold text-brand-primary">{v.title}</h3>
              <p className="mt-2 text-sm text-slate-secondary">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ProductPageShell>
);

export default About;