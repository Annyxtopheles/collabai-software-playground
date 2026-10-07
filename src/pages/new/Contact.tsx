import { useEffect, useState } from "react";
import { Phone, MessageSquare, Calendar, X } from "lucide-react";
import ProductPageShell from "@/components/new/ProductPageShell";
import { organizationSchema } from "@/lib/seoSchema";

const cardClass =
  "group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-[hsl(var(--brand-secondary))] hover:shadow-md";

const Contact = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  const openChat = () => setChatOpen(true);
  const closeChat = () => setChatOpen(false);
  const openDemo = () => setDemoOpen(true);
  const closeDemo = () => setDemoOpen(false);

  useEffect(() => {
    if (!chatOpen) return;
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://js.hsforms.net/forms/embed/3295715.js"]'
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/embed/3295715.js";
      script.defer = true;
      document.body.appendChild(script);
    } else {
      // Re-trigger HubSpot to scan for new form frames
      const w = window as unknown as { hbspt?: { forms?: { create: (opts: unknown) => void } } };
      if (w.hbspt?.forms) {
        // no-op; embed script auto-detects .hs-form-frame
      }
    }
  }, [chatOpen]);

  useEffect(() => {
    if (!demoOpen) return;
    const src = "https://connect.leadslift.io/js/form_embed.js";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement("script");
      script.src = src;
      script.type = "text/javascript";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, [demoOpen]);

  return (
    <ProductPageShell
      seo={{
        title: "Contact CollabAI — Sales, support, partnerships",
        description: "Talk to sales, request a demo, or reach support. Real engineers respond within 1 business day.",
        canonicalPath: "/contact",
        jsonLd: [
          organizationSchema(),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact CollabAI",
            url: "https://collabai.software/new/contact",
          },
        ],
      }}
      eyebrow="Contact"
      h1="Talk to an engineer, not a chatbot."
      sub="Every inbound is reviewed by a solutions engineer. No SDR funnel. No drip campaign."
      ctas={[{ label: "Book a demo", url: "/book-demo" }]}
    >
      <section className="bg-background pb-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <button onClick={openDemo} className={`${cardClass} text-left w-full`}>
              <Calendar className="h-7 w-7 text-[hsl(var(--brand-secondary))]" />
              <h3 className="mt-4 text-base font-bold text-brand-primary">Book a demo</h3>
              <p className="mt-1 flex-1 text-sm text-slate-secondary">30-minute working session with a solutions engineer.</p>
              <span className="mt-4 text-sm font-semibold text-[hsl(var(--brand-secondary))]">Pick a time →</span>
            </button>
            <button onClick={openChat} className={`${cardClass} text-left w-full`}>
              <MessageSquare className="h-7 w-7 text-[hsl(var(--brand-secondary))]" />
              <h3 className="mt-4 text-base font-bold text-brand-primary">Get in touch</h3>
              <p className="mt-1 flex-1 text-sm text-slate-secondary">Share a few details and our team will get back to you shortly.</p>
              <span className="mt-4 text-sm font-semibold text-[hsl(var(--brand-secondary))]">Send us your query →</span>
            </button>
            <a href="tel:+16466669714" className={cardClass}>
              <Phone className="h-7 w-7 text-[hsl(var(--brand-secondary))]" />
              <h3 className="mt-4 text-base font-bold text-brand-primary">Talk to a human</h3>
              <p className="mt-1 flex-1 text-sm text-slate-secondary">+1 (646) 666-9714 — Mon–Fri, 9am–6pm ET.</p>
              <span className="mt-4 text-sm font-semibold text-[hsl(var(--brand-secondary))]">Call now →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Live Chat Modal */}
      {chatOpen && (
        <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black/50 p-4 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-[680px] my-auto rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
              <h4 className="text-sm font-semibold text-gray-900">Get in touch</h4>
              <button
                onClick={closeChat}
                className="rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              <div
                className="hs-form-frame"
                style={{ minHeight: 500, width: "100%" }}
                data-region="na1"
                data-form-id="b346b9bf-7f68-4d71-87a2-bb4efcbfed0e"
                data-portal-id="3295715"
              />
            </div>
          </div>
        </div>
      )}

      {/* Book a demo Modal */}
      {demoOpen && (
        <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black/50 p-4 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-[900px] my-auto rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
              <h4 className="text-sm font-semibold text-gray-900">Book a demo</h4>
              <button
                onClick={closeDemo}
                className="rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                aria-label="Close booking"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-2 sm:p-4 max-h-[85vh] overflow-y-auto">
              <iframe
                src="https://connect.leadslift.io/widget/booking/9qx9Z37lMfFwglnT1n4I"
                style={{ width: "100%", border: "none", overflow: "hidden", minHeight: 700 }}
                scrolling="no"
                id="9qx9Z37lMfFwglnT1n4I_1780916844416"
                title="Book a demo"
              />
            </div>
          </div>
        </div>
      )}
    </ProductPageShell>
  );
};

export default Contact;
