import { useState } from "react";
import { Check, X } from "lucide-react";

interface Row {
  feature: string;
  ours: boolean;
  theirs: boolean;
}

interface Tab {
  id: string;
  label: string;
  them: string;
  bottomLine: string;
  rows: Row[];
}

const tabs: Tab[] = [
  {
    id: "chatgpt",
    label: "vs. ChatGPT",
    them: "ChatGPT",
    bottomLine: "ChatGPT is a chat tool. Control Tower is an AI workforce with business context.",
    rows: [
      { feature: "Knows your business context", ours: true, theirs: false },
      { feature: "Remembers past conversations", ours: true, theirs: false },
      { feature: "Takes action (creates tasks, updates deals)", ours: true, theirs: false },
      { feature: "Integrates with your tools", ours: true, theirs: false },
      { feature: "Audit trail", ours: true, theirs: false },
      { feature: "Data stays private", ours: true, theirs: false },
    ],
  },
  {
    id: "pm",
    label: "vs. Monday / Asana / ClickUp",
    them: "PM tools",
    bottomLine: "PM tools manage tasks. Control Tower manages operations — with AI.",
    rows: [
      { feature: "Task management", ours: true, theirs: true },
      { feature: "Meeting transcription & intelligence", ours: true, theirs: false },
      { feature: "AI that takes action across your stack", ours: true, theirs: false },
      { feature: "EOS native (V/TO, Rocks, Scorecard, IDS)", ours: true, theirs: false },
      { feature: "Knowledge base with semantic RAG", ours: true, theirs: false },
      { feature: "CRM / Deals built-in", ours: true, theirs: false },
    ],
  },
  {
    id: "crm",
    label: "vs. HubSpot / Salesforce",
    them: "CRM",
    bottomLine: "We don't replace your CRM. We connect it to everything else.",
    rows: [
      { feature: "Deal pipeline", ours: true, theirs: true },
      { feature: "Project delivery", ours: true, theirs: false },
      { feature: "Meeting intelligence", ours: true, theirs: false },
      { feature: "EOS / OKR tracking", ours: true, theirs: false },
      { feature: "Knowledge base", ours: true, theirs: false },
      { feature: "Agents that read AND write", ours: true, theirs: false },
    ],
  },
];

const Cell = ({ on }: { on: boolean }) =>
  on ? (
    <Check className="h-5 w-5 text-[hsl(var(--signal-live))]" aria-label="Yes" />
  ) : (
    <X className="h-5 w-5 text-background/30" aria-label="No" />
  );

const ComparisonTabs = () => {
  const [active, setActive] = useState(tabs[0].id);
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <section className="bg-[hsl(var(--brand-primary))] py-24 text-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center space-x-2 rounded-full bg-background/10 px-4 py-2 text-sm font-medium">
            How Control Tower compares
          </div>
          <h2 className="mt-6 text-3xl lg:text-4xl font-bold">
            We're not trying to replace every tool. We work <em className="font-serif italic">with</em> your stack.
          </h2>
          <p className="mt-4 text-background/70">Here's the honest comparison.</p>
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === t.id
                  ? "bg-[hsl(var(--signal-live))] text-brand-primary"
                  : "bg-background/10 text-background/80 hover:bg-background/20"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-background/10 bg-background/[0.04]">
          <div className="grid grid-cols-[1fr_auto_auto] items-center gap-6 border-b border-background/10 px-6 py-4 text-xs uppercase tracking-wider text-background/60">
            <span>Feature</span>
            <span className="w-28 text-center font-semibold text-[hsl(var(--signal-live))]">Control Tower</span>
            <span className="w-20 text-center">{tab.them}</span>
          </div>
          {tab.rows.map((r) => (
            <div
              key={r.feature}
              className="grid grid-cols-[1fr_auto_auto] items-center gap-6 border-b border-background/10 px-6 py-4 last:border-b-0"
            >
              <span className="text-sm">{r.feature}</span>
              <span className="flex w-28 justify-center"><Cell on={r.ours} /></span>
              <span className="flex w-20 justify-center"><Cell on={r.theirs} /></span>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-background/70">
          <span className="font-semibold text-background">Bottom line: </span>
          {tab.bottomLine}
        </p>
      </div>
    </section>
  );
};

export default ComparisonTabs;