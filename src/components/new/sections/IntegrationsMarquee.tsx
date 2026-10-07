const integrations = [
  "HubSpot", "Salesforce", "Zoom", "Google Workspace", "Slack", "Microsoft 365",
  "Encompass", "LendingPad", "ICE Mortgage Tech", "DocuSign", "Jungo",
  "eClinicalWorks", "NextHealth", "Twilio", "Stedi",
  "Monday", "Notion", "GitHub", "Mailchimp", "QuickBooks", "Eventbrite",
];

const IntegrationsMarquee = () => (
  <section className="py-20 bg-background border-y border-border">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center space-x-2 bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] px-4 py-2 rounded-full text-sm font-medium">
          Works with your stack
        </div>
        <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-brand-primary">
          Connect what you already use.
        </h2>
        <p className="mt-4 text-lg text-slate-secondary">
          Pre-built integrations across CRM, EHR, LOS, calendars, and communications. New connectors added every month.
        </p>
      </div>
      <div className="mt-10 overflow-hidden">
        <div className="flex animate-[scroll_40s_linear_infinite] gap-3 whitespace-nowrap">
          {[...integrations, ...integrations].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="inline-flex shrink-0 items-center rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-brand-primary"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  </section>
);

export default IntegrationsMarquee;