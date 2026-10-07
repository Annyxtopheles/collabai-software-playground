import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, ShieldCheck, AlertTriangle, PhoneCall, BookOpen, Bell, Mic, FileText, BookMarked } from "lucide-react";
import PageSeoHead from "@/components/PageSeoHead";
import { PharmaScreenshot } from "@/components/new/pharma/PharmaScreenshot";

const navy = "bg-[hsl(220,40%,12%)]";

const pains = [
  { title: "Agents spend hours on hold", body: "A benefit verification agent making 20 PA calls per day spends 3–4 hours navigating IVR trees and sitting on hold. That's 50% of their workday wasted before speaking to anyone." },
  { title: "IVR navigation errors lose calls", body: "One wrong menu selection means starting over. Manual IVR navigation has a 15–20% error rate, causing call abandonment and delayed authorizations." },
  { title: "PA criteria not available during calls", body: "Agents scramble between payer portals, plan documents, and CRM while on hold. Information silos mean missed coverage criteria and incomplete authorizations." },
];

const steps = [
  { n: "1", title: "Agent initiates PA request", desc: "One click in the dashboard." },
  { n: "2", title: "IVR Navigator dials the payer", desc: "AI handles all menu navigation automatically." },
  { n: "3", title: "Hold queue managed by AI", desc: "Agent is freed to work other tasks." },
  { n: "4", title: "PA criteria loaded", desc: "Plan rules, formulary, PA criteria pulled from retrieval layer." },
  { n: "5", title: "Alert sent to agent", desc: "Joins the call only when a human payer agent answers." },
];

const features = [
  { icon: PhoneCall, name: "Automated IVR tree navigation" },
  { icon: Mic, name: "DTMF + voice menu handling" },
  { icon: BookOpen, name: "Real-time PA criteria lookup" },
  { icon: ShieldCheck, name: "STIR/SHAKEN verified outbound calls" },
  { icon: FileText, name: "Full call transcript logged" },
  { icon: BookMarked, name: "Multi-payer phone book library" },
];

export default function IVRNavigator() {
  return (
    <>
      <PageSeoHead
        title="AI IVR Navigator — Zero Hold Time for Pharma Benefit Verification"
        description="Your team should never sit on hold again. AI dials payer phone trees, navigates menus, and alerts your agent the moment a human is on the line."
        canonicalPath="/pharma/ivr-navigator"
      />

      <section className={`${navy} text-background pt-20 pb-16 lg:pt-28`}>
        <div className="container mx-auto px-4">
          <Link to="/pharma" className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-background/60 hover:text-[hsl(180,70%,55%)]">
            <ArrowLeft className="h-3.5 w-3.5" /> ClinicalAI
          </Link>
          <div className="mx-auto mt-6 max-w-4xl text-center">
            <span className="inline-block rounded-full border border-background/20 bg-background/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[hsl(180,70%,55%)]">
              ClinicalAI · Powered by Control Tower · Payer Operations
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Your Team Should Never <span className="text-[hsl(180,70%,55%)]">Sit on Hold</span> Again.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-background/75">
              IVR Navigator dials payer phone trees automatically, navigates menus using AI and DTMF, and alerts your benefit verification agent the moment a human is on the line — with full call transcript and PA criteria pre-loaded.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[hsl(180,70%,45%)] px-6 py-3 text-sm font-semibold text-[hsl(220,40%,12%)] transition-all hover:shadow-lg active:translate-y-[2px]">
                Request Early Access <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/pharma" className="inline-flex items-center gap-2 rounded-lg border border-background/30 px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-background/5 active:translate-y-[2px]">
                <ArrowLeft className="h-4 w-4" /> Back to ClinicalAI
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs uppercase tracking-wider text-background/60">
              {["DTMF", "STIR/SHAKEN", "HIPAA", "Twilio", "ElevenLabs"].map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-[hsl(180,70%,55%)]" /> {b}
                </span>
              ))}
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
              {[
                { stat: "0 min", label: "On Hold Per Agent" },
                { stat: "3×", label: "Agent Throughput" },
                { stat: "100%", label: "Calls Logged + Transcribed" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-background/15 bg-background/5 p-5">
                  <div className="text-3xl font-bold text-[hsl(180,70%,55%)]">{s.stat}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-background/70">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAINS */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-brand-primary lg:text-4xl">The Hold Time Tax</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-3">
            {pains.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-card p-6">
                <AlertTriangle className="h-7 w-7 text-orange-500" />
                <h3 className="mt-4 text-lg font-bold text-brand-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-secondary">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slate-light py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-brand-primary lg:text-4xl">How It Works</h2>
          </div>
          <div className="mx-auto mt-12 max-w-5xl space-y-4">
            {steps.map((s) => (
              <div key={s.n} className="flex items-start gap-5 rounded-2xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-secondary))] font-bold text-background">{s.n}</div>
                <div>
                  <h3 className="text-base font-bold text-brand-primary">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-secondary">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-brand-primary lg:text-4xl">Inside the Console</h2>
          </div>
          <div className="mx-auto mt-14 max-w-6xl space-y-10">
            {/* Active Call Queue */}
            <PharmaScreenshot title="ivr.ai/queue" label="DEMO">
              <div className="p-4 space-y-3 text-xs">
                <div className="text-slate-400 font-mono">3 active calls · Agents freed: 18 min · 0 hold time absorbed by team</div>
                <div className="space-y-2">
                  {[
                    { id: "CALL-001", payer: "United Healthcare", type: "PA Request · DrugX 50mg", status: "Navigating menu tree (step 3/5)", time: "4:22", state: "navigating" },
                    { id: "CALL-002", payer: "Aetna", type: "Benefit Verification · DrugX 50mg", status: "On hold — estimated 8 min", time: "2:15", state: "hold" },
                    { id: "CALL-003", payer: "Cigna", type: "Prior Auth · DrugY 10mg", status: "🔔 HUMAN AGENT AVAILABLE", time: "11:33", state: "alert" },
                  ].map((c) => (
                    <div key={c.id} className={`rounded-lg p-3 border ${
                      c.state === "alert" ? "bg-green-500/15 border-green-500/50 animate-pulse" : "bg-slate-800/60 border-slate-700"
                    }`}>
                      <div className="flex items-center justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-white font-mono font-bold">{c.id}</span>
                            <span className="text-teal-300">{c.payer}</span>
                            <span className="text-slate-400">·</span>
                            <span className="text-slate-300">{c.type}</span>
                          </div>
                          <div className={`mt-1 ${c.state === "alert" ? "text-green-300 font-bold" : "text-slate-400"}`}>{c.status}</div>
                        </div>
                        <div className="shrink-0 flex items-center gap-2">
                          <span className="text-slate-400 font-mono">{c.time}</span>
                          {c.state === "alert" ? (
                            <button className="rounded bg-teal-500 px-4 py-2 text-xs font-bold text-slate-900">JOIN NOW</button>
                          ) : (
                            <button className="rounded bg-slate-700 px-3 py-1.5 text-[10px] font-bold text-slate-200">Monitor</button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PharmaScreenshot>

            {/* PA Context Panel */}
            <PharmaScreenshot title="ivr.ai/call/CALL-003" label="DEMO">
              <div className="p-4 grid lg:grid-cols-2 gap-3 text-xs">
                <div className="space-y-2">
                  <div className="rounded-lg bg-slate-800/60 p-3 space-y-1.5">
                    <div className="text-[10px] uppercase font-mono text-slate-500">PAYER + PLAN</div>
                    <div className="text-white font-bold">United Healthcare</div>
                    <div className="text-slate-300">UHC Choice Plus</div>
                  </div>
                  <div className="rounded-lg bg-slate-800/60 p-3 space-y-1.5">
                    <div className="text-[10px] uppercase font-mono text-slate-500">PATIENT REQUEST</div>
                    <div className="text-white">DrugX 50mg</div>
                    <div className="text-slate-300">ICD-10: G35 (Multiple Sclerosis)</div>
                  </div>
                  <div className="rounded-lg bg-slate-800/60 p-3 space-y-1">
                    <div className="text-[10px] uppercase font-mono text-slate-500">PA CRITERIA</div>
                    <div className="text-green-400">✓ Diagnosis confirmed</div>
                    <div className="text-green-400">✓ Step therapy complete</div>
                    <div className="text-yellow-400">⚠ Quantity limit exception needed</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="rounded-lg bg-slate-800/60 p-3">
                    <div className="text-[10px] uppercase font-mono text-slate-500 mb-2">CALL TRANSCRIPT</div>
                    <div className="space-y-1.5 text-slate-300">
                      <div className="text-slate-400 italic">"Thank you for calling United Healthcare. For benefit verif…"</div>
                      <div className="text-teal-300">→ AI selected: Option 2 (Provider Services)</div>
                      <div className="text-teal-300">→ AI selected: Option 4 (Prior Authorization)</div>
                      <div className="text-teal-300">→ AI entered: NPI 1234567890</div>
                      <div className="text-yellow-300">⏱ Hold queue — 8 min estimated</div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-teal-500/10 border border-teal-500/40 p-3">
                    <div className="text-[10px] uppercase font-mono text-teal-300 mb-1">SUGGESTED TALKING POINTS</div>
                    <div className="text-slate-200">Reference step therapy documentation from 2026-03-12. Request quantity limit exception per plan PA criteria §4.2.</div>
                  </div>
                </div>
              </div>
            </PharmaScreenshot>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-slate-light py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-brand-primary lg:text-4xl">Features</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.name} className="rounded-xl border border-border bg-card p-5">
                <f.icon className="h-6 w-6 text-[hsl(var(--brand-secondary))]" />
                <h3 className="mt-3 text-sm font-bold text-brand-primary">{f.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${navy} py-20 text-background`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold lg:text-4xl">Give your benefit verification team their day back.</h2>
          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[hsl(180,70%,45%)] px-6 py-3 text-sm font-semibold text-[hsl(220,40%,12%)] transition-all active:translate-y-[2px]">
              Request Early Access <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}