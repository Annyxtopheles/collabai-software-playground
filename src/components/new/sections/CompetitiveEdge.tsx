const rows = [
  { ours: "Reads AND writes across your stack", theirs: "Reads only — you still do the work" },
  { ours: "Self-hosted, your VPC, your keys", theirs: "Vendor cloud — your data leaves your control" },
  { ours: "Auditable, replayable agent actions", theirs: "Opaque LLM calls with no audit trail" },
  { ours: "Persistent CEO Brain memory (86+)", theirs: "Stateless prompts, lost between sessions" },
  { ours: "100+ agents working as a team", theirs: "A single chatbot doing summaries" },
];

const CompetitiveEdge = () => (
  <section className="bg-[hsl(var(--brand-primary))] py-24 text-background">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center space-x-2 rounded-full bg-background/10 px-4 py-2 text-sm font-medium">
          The difference
        </div>
        <h2 className="mt-6 text-3xl lg:text-4xl font-bold">
          Ambient assistants <em className="font-serif italic text-[hsl(var(--signal-live))]">read</em>.
          {" "}Control Tower <em className="font-serif italic text-[hsl(var(--signal-live))]">reads and writes</em>.
        </h2>
      </div>
      <div className="mx-auto mt-12 max-w-4xl divide-y divide-background/10 rounded-2xl border border-background/10 bg-background/[0.04]">
        {rows.map((r) => (
          <div key={r.ours} className="grid grid-cols-1 gap-2 p-5 sm:grid-cols-2 sm:gap-8">
            <div className="text-base">
              <span className="mr-2 inline-block rounded bg-[hsl(var(--signal-live))]/20 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--signal-live))]">
                Control Tower
              </span>
              {r.ours}
            </div>
            <div className="text-base text-background/60">
              <span className="mr-2 inline-block rounded bg-background/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-background/60">
                Everyone else
              </span>
              {r.theirs}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CompetitiveEdge;