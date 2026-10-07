import { Building2 } from "lucide-react";

const AgencyEcosystem = () => (
  <section className="bg-slate-light py-24">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
          The Agency Control Tower
        </span>
        <h2 className="mt-3 text-3xl font-bold text-brand-primary lg:text-4xl">
          One hub. Every system your agency already runs on.
        </h2>
        <p className="mt-4 text-base text-slate-secondary">
          Control Tower sits on top of HubSpot, Monday, Notion, Zoom, Slack, Drive, and GitHub —
          ties them into one operating picture for leadership.
        </p>
      </div>

      {/* Hub + satellites */}
      <div className="mx-auto mt-14 max-w-5xl">
        {/* Center hub */}
        <div className="flex justify-center">
          <div className="relative flex h-32 w-64 items-center justify-center rounded-2xl border-2 border-[hsl(var(--brand-secondary))] bg-card shadow-lg">
            <Building2 className="absolute left-5 top-5 h-5 w-5 text-[hsl(var(--brand-secondary))]" />
            <div className="text-center">
              <div className="text-[10px] uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
                Unified hub
              </div>
              <div className="mt-1 text-base font-bold text-brand-primary">Agency Control Tower</div>
              <div className="mt-0.5 text-[11px] text-slate-secondary">Live data · AI orchestration</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AgencyEcosystem;