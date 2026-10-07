import ProductPageShell from "@/components/new/ProductPageShell";

const sections = [
  { h: "Agreement", body: "By accessing Control Tower or the CollabAI Platform, you agree to these terms on behalf of your organization. If you don't have authority to bind your organization, do not use the service." },
  { h: "Subscription & payment", body: "Plans are billed monthly or annually in advance. Annual plans receive a 15% discount. All fees are non-refundable except as required by law." },
  { h: "Acceptable use", body: "Don't use the platform to process data you don't have rights to, to attack other systems, or to generate content that violates applicable law. We will suspend accounts that violate this clause." },
  { h: "Service levels", body: "Growth plans target 99.9% uptime. Enterprise plans include a written SLA with credits. Scheduled maintenance is announced 72 hours in advance." },
  { h: "Liability", body: "Our aggregate liability is limited to the fees paid in the 12 months preceding the claim. We're not liable for indirect, incidental, or consequential damages." },
  { h: "Termination", body: "Either party may terminate for material breach with 30 days' written notice. On termination, you have 90 days to export your data before deletion." },
];

const Terms = () => (
  <ProductPageShell
    seo={{
      title: "Terms of Service — CollabAI",
      description: "Plain-English terms for Control Tower and the CollabAI Platform. Last updated November 2026.",
      canonicalPath: "/new/terms",
    }}
    eyebrow="Terms"
    h1="The rules of the road."
    sub="Short, readable, and written for humans. Last updated November 2026."
    ctas={[{ label: "Talk to legal", url: "/new/contact" }]}
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

export default Terms;