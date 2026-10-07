import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Check, PlayCircle, Mail, Phone } from "lucide-react";
import ProductPageShell from "@/components/new/ProductPageShell";

const promise = [
  "30 minutes with a solutions engineer, not a sales rep",
  "Live walk-through of Control Tower using your industry's data",
  "Recorded session you can share with your team",
  "Tailored pricing within 24 hours",
];

const BookDemo = () => {
  const location = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (location.hash === "#calendar") {
        document.getElementById("calendar")?.scrollIntoView({ block: "start" });
      } else {
        window.scrollTo(0, 0);
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [location.hash, location.key]);

  return (
  <ProductPageShell
    seo={{
      title: "Book a Demo — See Control Tower with your data",
      description: "30-minute working session with a solutions engineer. Real product, real data, real answers.",
      canonicalPath: "/book-demo",
    }}
    eyebrow="Book a demo"
    h1="See it working in 30 minutes."
    sub="Pick a time. Tell us your stack. We'll show Control Tower running on a sandbox shaped like your business."
    ctas={[]}
    hideFinalCta
  >
    <section className="bg-background pb-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {/* Inline booking calendar — top priority */}
          <div id="calendar" className="scroll-mt-24 rounded-2xl border border-border bg-card overflow-hidden mb-8">
            <iframe
              src="https://connect.leadslift.io/widget/booking/9qx9Z37lMfFwglnT1n4I"
              style={{ width: "100%", border: "none", overflow: "hidden", minHeight: 700 }}
              scrolling="no"
              title="Book a demo"
            />
          </div>

          {/* What you get + escape hatch in a 2-col row below */}
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold text-brand-primary">What you'll get</h3>
              <ul className="mt-4 space-y-3">
                {promise.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-secondary))]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-brand-primary">Not ready to book yet?</h3>
                <p className="mt-2 text-sm text-slate-secondary">Explore the live demo first — no signup, no install. Come back when you're ready to talk.</p>
              </div>
              <div className="mt-6 space-y-3">
                <a
                  href="/try-demo"
                  className="flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-secondary))] hover:underline"
                >
                  <PlayCircle className="h-4 w-4" /> Try the live demo sandbox →
                </a>
                <div className="flex flex-wrap items-center gap-4 text-sm text-foreground">
                  <a href="mailto:sales@collabai.software" className="inline-flex items-center gap-2 hover:text-[hsl(var(--brand-secondary))]">
                    <Mail className="h-4 w-4" /> sales@collabai.software
                  </a>
                  <a href="tel:+16466669714" className="inline-flex items-center gap-2 hover:text-[hsl(var(--brand-secondary))]">
                    <Phone className="h-4 w-4" /> +1 (646) 666-9714
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </ProductPageShell>
  );
};

export default BookDemo;