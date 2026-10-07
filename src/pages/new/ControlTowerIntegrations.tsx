import ProductPageShell from "@/components/new/ProductPageShell";
import LogoStrip from "@/components/LogoStrip";
import type { LogoId } from "@/data/logos";

const categories: {
  name: string;
  items?: string[];
  logos?: readonly LogoId[];
}[] = [
  {
    name: "CRM & Sales",
    logos: ["hubspot", "salesforce", "pipedrive", "zoho"],
  },
  {
    name: "Meetings & Comms",
    logos: ["zoom", "googlemeet", "msteams", "slack", "twilio"],
  },
  {
    name: "Productivity",
    logos: ["googledrive", "ms365", "notion", "asana", "clickup"],
  },
  {
    name: "Mortgage",
    logos: ["encompass", "lendingpad"],
  },
  {
    name: "Healthcare",
    logos: ["eclinicalworks", "nexthealth", "stedi"],
  },
  {
    name: "Developer",
    logos: ["webhooks", "restapi", "n8n", "zapier"],
  },
];

const ControlTowerIntegrations = () => (
  <ProductPageShell
    seo={{
      title: "Control Tower Integrations — Works With Your Existing Stack",
      description:
        "HubSpot, Salesforce, Zoom, Slack, Drive, Encompass, eClinicalWorks, and more. Plus webhooks and a REST API for everything else.",
      canonicalPath: "/control-tower/integrations",
    }}
    eyebrow="Integrations"
    h1="No rip-and-replace."
    sub="Control Tower sits on top of the stack you already pay for. Pre-built connectors, plus a REST API and webhooks for anything custom."
    ctas={[
      { label: "Talk to an integrations engineer", url: "/new/contact" },
      { label: "Try the Live Demo", url: "https://controltowerdemo.collabai.software/login", external: true, variant: "secondary" },
    ]}
  >
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.name} className="rounded-2xl border border-border bg-card p-7">
              <div className="font-mono text-xs uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
                {cat.name}
              </div>
              {cat.logos ? (
                <LogoStrip
                  embedded
                  mode="static"
                  hideHeading
                  className="mt-4"
                  aria-label={`${cat.name} logos`}
                  logos={cat.logos}
                />
              ) : (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cat.items?.map((i) => (
                    <li
                      key={i}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-brand-primary"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  </ProductPageShell>
);

export default ControlTowerIntegrations;
