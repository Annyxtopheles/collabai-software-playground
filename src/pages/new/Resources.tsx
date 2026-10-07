import { Link } from "react-router-dom";
import { BookOpen, FileText, HelpCircle, Download, Newspaper, Wrench } from "lucide-react";
import ProductPageShell from "@/components/new/ProductPageShell";
import { faqSchema, breadcrumbSchema } from "@/lib/seoSchema";

const quickFaqs = [
  { q: "How is Control Tower different from ChatGPT?", a: "ChatGPT is a chat interface to a public model. Control Tower is a private AI operations platform — 100+ purpose-built agents that read and write across HubSpot, Zoom, Drive, and Slack, with audit logs and SSO." },
  { q: "Where does my data live?", a: "In your dedicated Supabase project, encrypted at rest and in transit. We never train foundation models on customer data." },
  { q: "Can we self-host?", a: "Yes. The CollabAI Platform is open-source-friendly and supports self-host or BYO cloud. Enterprise customers can run fully air-gapped." },
];

const tiles = [
  { icon: Newspaper, title: "Blog", body: "Field notes from deploying AI ops in regulated industries.", to: "/new/blog" },
  { icon: BookOpen, title: "Case Studies", body: "How customers in mortgage, healthcare, and agency cut hours and accelerated pipeline.", to: "/new/case-studies" },
  { icon: HelpCircle, title: "FAQs", body: "Plain-English answers to security, pricing, and implementation questions.", to: "/new/resources/faqs" },
  { icon: Wrench, title: "Installation", body: "Step-by-step guides for self-hosting and BYO cloud deploys.", to: "/new/resources/installation" },
  { icon: Download, title: "Whitepapers", body: "Architecture deep-dives, compliance briefs, and ROI models.", to: "/new/resources/whitepapers" },
  { icon: FileText, title: "Knowledge Base", body: "Searchable documentation for every agent, dashboard, and integration.", to: "/new/resources/knowledge-base" },
];

const Resources = () => (
  <ProductPageShell
    seo={{
      title: "Resources — Docs, case studies, and whitepapers",
      description: "Everything you need to evaluate, deploy, and operate Control Tower and the CollabAI Platform.",
      canonicalPath: "/new/resources",
      jsonLd: [
        breadcrumbSchema([
          { name: "Home", path: "/new" },
          { name: "Resources", path: "/new/resources" },
        ]),
        faqSchema(quickFaqs),
      ],
    }}
    eyebrow="Resources"
    h1="The full library."
    sub="Read the playbooks, see the architectures, and steal the SQL we use in production."
    ctas={[{ label: "Browse the knowledge base", url: "/new/resources/knowledge-base" }]}
  >
    <section className="bg-background pb-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tiles.map((t) => (
            <Link
              key={t.title}
              to={t.to}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-[hsl(var(--brand-secondary))] hover:shadow-md"
            >
              <t.icon className="h-7 w-7 text-[hsl(var(--brand-secondary))]" />
              <h3 className="mt-4 text-lg font-bold text-brand-primary">{t.title}</h3>
              <p className="mt-2 text-sm text-slate-secondary">{t.body}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-[hsl(var(--brand-secondary))]">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </ProductPageShell>
);

export default Resources;