import { ArrowUpRight } from "lucide-react";
import ProductPageShell from "@/components/new/ProductPageShell";
import { Link } from "react-router-dom";
import { verticals, nicheSlugs } from "@/data/verticals";

const coreNicheSlugs = ["agency", "healthcare", "mortgage-bank", "non-profit"] as const;
import { useLiveAgentCount } from "@/hooks/useMarketplaceAgents";

type Demo = { title: string; blurb: string; url: string; lite?: string; tag: string };

const demos: Demo[] = [
  // Flagship
  { title: "Control Tower", tag: "Flagship", url: "https://controltowerdemo.collabai.software/login/",
    blurb: "The flagship — pipeline, agents, meetings, reports." },

  // Verticals
  { title: "Agencies", tag: "Vertical", url: "https://controltowerdemo.collabai.software/login/", lite: "https://agencylite.collabai.software/",
    blurb: "100+ agents on HubSpot, Zoom, Drive, Slack. EOS, pods, OKRs." },
  { title: "Mortgage Banks", tag: "Vertical", url: "https://demomortgage.collabai.software/", lite: "https://mortgagelite.collabai.software/",
    blurb: "Risk-sorted pipeline, lock alerts, LOS overlay, broker workflows." },
  { title: "Healthcare", tag: "Vertical", url: "https://ephysician.biz/", lite: "https://lite.ephysician.biz/",
    blurb: "ePhysician voice agent: Incoming → Verify → Slot → Booked." },
  { title: "Nonprofits", tag: "Vertical", url: "https://demo.nonprofitai.software/", lite: "https://boarddemo.nonprofitai.software/",
    blurb: "Operations + Board Governance. Donors, grants, packets, minutes." },

  // Adjacent products
  { title: "GHL Control Tower", tag: "Product", url: "https://demo.ghldeveloper.com/", lite: "https://demolite.ghldeveloper.com/",
    blurb: "AI command center for GoHighLevel agencies — clients, automations, agents." },
  { title: "Client Success", tag: "Product", url: "https://clientsuccess.collabai.software/", lite: "https://cslite.collabai.software/",
    blurb: "Client intelligence platform for software agencies at scale." },
  { title: "Marketing AI", tag: "Product", url: "https://marketing.collabai.software/", lite: "https://marketinglite.collabai.software/",
    blurb: "AI operating system for marketing agencies — content, reporting, PM." },
  { title: "Restaurant AI (Plate Presence)", tag: "Product", url: "https://platepresence.social/", lite: "https://demo.platepresence.social/",
    blurb: "Operations platform for multi-location restaurant brands." },
];

const NewTryDemo = () => (
  <ProductPageShell
    seo={{
      title: "Try the Live Demo — Control Tower by CollabAI",
      description: "Pick your industry and open a live demo — no signup, no install. Plus the full library of CollabAI sandboxes.",
      canonicalPath: "/try-demo",
    }}
    eyebrow="Live demos"
    h1="Pick your industry. Click around."
    sub="Each industry has a sandbox shaped like a real customer. Choose yours below, or scroll for the full demo library."
    ctas={[
      { label: "Book a guided walk-through", url: "/book-demo" },
    ]}
  >
    {/* Industry chooser */}
    <section className="bg-slate-light py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs uppercase tracking-wider text-[hsl(var(--brand-secondary))]">Step 1</span>
          <h2 className="mt-2 text-2xl font-bold text-brand-primary lg:text-3xl">Which industry are you in?</h2>
          <p className="mt-2 text-sm text-slate-secondary">Each card opens the demo tuned for that workflow.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreNicheSlugs.map((slug) => (
            <IndustryDemoCard key={slug} slug={slug} />
          ))}
        </div>
      </div>
    </section>

    {/* Full demo library */}
    <section className="bg-background pb-20">
      <div className="container mx-auto px-4 pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs uppercase tracking-wider text-[hsl(var(--brand-secondary))]">Full library</span>
          <h2 className="mt-2 text-2xl font-bold text-brand-primary lg:text-3xl">Every Control Tower sandbox.</h2>
          <p className="mt-2 text-sm text-slate-secondary">Flagship, adjacent products, and per-industry builds.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
          {demos.map((d) => (
            <div
              key={d.title}
              className="rounded-2xl border border-border bg-card p-6 transition hover:border-[hsl(var(--brand-secondary))]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {d.tag}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-brand-primary">{d.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[hsl(var(--brand-secondary))] px-3 py-1.5 text-xs font-semibold text-background hover:shadow-md"
                >
                  Open full demo <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                {d.lite && (
                  <a
                    href={d.lite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-semibold text-brand-primary hover:border-[hsl(var(--brand-secondary))]"
                  >
                    Lite demo <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ProductPageShell>
);

const IndustryDemoCard = ({ slug }: { slug: typeof nicheSlugs[number] }) => {
  const v = verticals[slug];
  const count = useLiveAgentCount(v.routeSlug, v.agentCount);
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:border-[hsl(var(--brand-secondary))] hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-brand-primary">{v.displayName}</h3>
        <span className="rounded-full bg-[hsl(var(--brand-secondary))]/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-[hsl(var(--brand-secondary))]">
          {count} agents
        </span>
      </div>
                <p className="mt-2 line-clamp-2 text-sm text-slate-secondary">{v.buyerSubtitle}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {v.demos?.full && (
                    <a
                      href={v.demos.full.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[hsl(var(--brand-secondary))] px-3 py-1.5 text-xs font-semibold text-background hover:shadow-md"
                    >
                      Full demo <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {v.demos?.lite && (
                    <a
                      href={v.demos.lite.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-semibold text-brand-primary hover:border-[hsl(var(--brand-secondary))]"
                    >
                      Lite demo <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                  <Link
                    to={`/${v.routeSlug}`}
                    className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-slate-secondary hover:text-brand-primary"
                  >
                    Industry page →
                  </Link>
                </div>
                {!v.demos && (
                  <p className="mt-3 text-xs italic text-muted-foreground">Demo coming soon — book a walkthrough.</p>
                )}
    </div>
  );
};

export default NewTryDemo;