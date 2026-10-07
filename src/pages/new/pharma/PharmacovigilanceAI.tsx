import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, ShieldCheck, AlertTriangle, FileSearch, Activity, CheckCircle2, Code2, Database, FileText } from "lucide-react";
import PageSeoHead from "@/components/PageSeoHead";
import { PharmaScreenshot } from "@/components/new/pharma/PharmaScreenshot";

const navy = "bg-[hsl(220,40%,12%)]";

const pains = [
  { title: "Manual AE coding takes days", body: "A single serious adverse event report requires 4–6 hours of manual MedDRA coding, narrative writing, and E2B submission preparation. At 50 reports/month, that's 200–300 hours." },
  { title: "SMQ signal detection is reactive", body: "Drug safety teams discover pharmacovigilance signals in aggregate reports — weeks after individual cases accumulate. AI screens every case in real-time." },
  { title: "E2B submission errors cause rejection", body: "Manual ICH E2B(R3) XML generation is error-prone. Rejected submissions require rework cycles that delay safety reporting to regulators." },
];

const steps = [
  { n: "1", title: "AE Report Intake", desc: "Structured and unstructured sources — call transcripts, emails, forms." },
  { n: "2", title: "MedDRA Auto-Coding", desc: "Verbatim term → PT/HLT/HLGT/SOC with confidence score." },
  { n: "3", title: "SMQ Screening", desc: "Checks 100+ Standardised MedDRA Queries for safety signal clusters." },
  { n: "4", title: "Causality Assessment", desc: "WHO-UMC scale assessment, automated narrative drafting." },
  { n: "5", title: "E2B(R3) XML Export", desc: "Ready for EMA/FDA EudraVigilance submission." },
];

const features = [
  { icon: Code2, name: "Auto-coding with MedDRA v27.x" },
  { icon: AlertTriangle, name: "SMQ cluster signal detection" },
  { icon: Activity, name: "WHO-UMC causality assessment" },
  { icon: FileText, name: "ICH E2B(R3) XML generation" },
  { icon: Database, name: "EudraVigilance integration" },
  { icon: ShieldCheck, name: "21 CFR Part 11 audit trail" },
];

export default function PharmacovigilanceAI() {
  return (
    <>
      <PageSeoHead
        title="Pharmacovigilance AI — Adverse Event Coding & SMQ Signal Detection"
        description="AI that catches adverse events before they become crises. MedDRA auto-coding, SMQ signal detection, ICH E2B(R3) XML export, FDA MedWatch integration."
        canonicalPath="/pharma/pharmacovigilance-ai"
      />

      <section className={`${navy} text-background pt-20 pb-16 lg:pt-28`}>
        <div className="container mx-auto px-4">
          <Link to="/pharma" className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-background/60 hover:text-[hsl(180,70%,55%)]">
            <ArrowLeft className="h-3.5 w-3.5" /> ClinicalAI
          </Link>
          <div className="mx-auto mt-6 max-w-4xl text-center">
            <span className="inline-block rounded-full border border-background/20 bg-background/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[hsl(180,70%,55%)]">
              ClinicalAI · Powered by Control Tower · Drug Safety
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              AI That Catches <span className="text-[hsl(180,70%,55%)]">Adverse Events</span> Before They Become Crises
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-background/75">
              PharmacovigilanceAI reviews incoming AE reports, auto-codes to MedDRA, screens for safety signals via SMQ clustering, and routes critical events to your safety officer — with full ICH E2B(R3) audit trail.
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
              {["ICH E2B(R3)", "MedDRA v27.x", "FDA MedWatch", "HIPAA", "21 CFR Part 11"].map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-[hsl(180,70%,55%)]" /> {b}
                </span>
              ))}
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
              {[
                { stat: "48hr → 4hr", label: "AE Processing Time" },
                { stat: "100%", label: "Cases Auto-Coded" },
                { stat: "0", label: "Missed SMQ Signals" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-background/15 bg-background/5 p-5">
                  <div className="text-2xl font-bold text-[hsl(180,70%,55%)]">{s.stat}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-background/70">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-brand-primary lg:text-4xl">The Pharmacovigilance Problem</h2>
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
            <p className="mt-4 text-base text-slate-secondary">From raw AE report to EudraVigilance-ready submission in minutes.</p>
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
            <h2 className="text-3xl font-bold text-brand-primary lg:text-4xl">See the Drug Safety Workspace</h2>
          </div>
          <div className="mx-auto mt-14 max-w-6xl space-y-10">
            {/* AE Intake */}
            <PharmaScreenshot title="pharmacovigilance.ai/intake" label="DEMO">
              <div className="p-4">
                <div className="text-xs text-slate-400 font-mono mb-3">3 serious · 8 moderate · 22 mild this week</div>
                <div className="rounded-lg border border-slate-700 overflow-hidden text-xs">
                  <div className="grid grid-cols-12 gap-2 bg-slate-800 px-3 py-2 text-[10px] font-mono uppercase text-slate-400">
                    <div className="col-span-2">ID</div>
                    <div className="col-span-2">Source</div>
                    <div className="col-span-1">Patient</div>
                    <div className="col-span-2">Drug</div>
                    <div className="col-span-2">Event</div>
                    <div className="col-span-1">Severity</div>
                    <div className="col-span-2 text-right">Status</div>
                  </div>
                  {[
                    { id: "AE-2047", src: "Call Transcript", pt: "PT-2047", drug: "DrugX 50mg", evt: "Headache", sev: "MILD", sevC: "slate", status: "AUTO-CODED", statusC: "green" },
                    { id: "AE-2046", src: "Email", pt: "PT-1893", drug: "DrugX 50mg", evt: "Palpitations", sev: "MODERATE", sevC: "yellow", status: "REVIEW", statusC: "yellow" },
                    { id: "AE-2045", src: "Web Form", pt: "PT-3312", drug: "DrugX 50mg", evt: "Jaundice", sev: "SERIOUS", sevC: "red", status: "URGENT", statusC: "red" },
                  ].map((r) => (
                    <div key={r.id} className="grid grid-cols-12 gap-2 px-3 py-2.5 border-t border-slate-700 items-center">
                      <div className="col-span-2 text-white font-mono">{r.id}</div>
                      <div className="col-span-2 text-slate-300">{r.src}</div>
                      <div className="col-span-1 text-slate-300 font-mono">{r.pt}</div>
                      <div className="col-span-2 text-slate-300">{r.drug}</div>
                      <div className="col-span-2 text-teal-300">{r.evt}</div>
                      <div className="col-span-1">
                        <span className={`rounded px-1.5 py-0.5 text-[9px] font-bold border ${
                          r.sevC === "red" ? "bg-red-500/20 text-red-300 border-red-500/40" :
                          r.sevC === "yellow" ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/40" :
                          "bg-slate-700 text-slate-300 border-slate-600"
                        }`}>{r.sev}</span>
                      </div>
                      <div className="col-span-2 text-right">
                        <span className={`rounded px-2 py-0.5 text-[10px] font-bold border ${
                          r.statusC === "red" ? "bg-red-500/20 text-red-300 border-red-500/40" :
                          r.statusC === "yellow" ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/40" :
                          "bg-green-500/20 text-green-300 border-green-500/40"
                        }`}>{r.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PharmaScreenshot>

            {/* SMQ Signal */}
            <PharmaScreenshot title="pharmacovigilance.ai/signals" label="DEMO">
              <div className="p-4 space-y-3 text-xs">
                <div className="rounded-lg bg-red-500/15 border border-red-500/40 p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-bold text-red-300">⚠ Signal Detected: Hepatotoxicity SMQ</div>
                      <div className="mt-1 text-slate-300">3 cases in 30 days · Threshold exceeded</div>
                    </div>
                    <button className="rounded bg-red-500 px-3 py-1 text-[10px] font-bold text-white shrink-0">Review Signal</button>
                  </div>
                </div>
                <div className="rounded-lg bg-yellow-500/10 border border-yellow-500/30 p-3">
                  <div className="font-bold text-yellow-300">📊 Monitoring: Cardiac Arrhythmias SMQ</div>
                  <div className="mt-1 text-slate-300">1 case · Below threshold</div>
                </div>
                <div className="rounded-lg bg-green-500/10 border border-green-500/30 p-3">
                  <div className="font-bold text-green-300">✓ Clear: Rhabdomyolysis SMQ</div>
                  <div className="mt-1 text-slate-300">0 cases</div>
                </div>
                <div className="text-slate-400 text-[11px] font-mono pt-1">
                  Signal strength: MODERATE — Pharmacovigilance review required within 72h
                </div>
              </div>
            </PharmaScreenshot>

            {/* E2B Export */}
            <PharmaScreenshot title="pharmacovigilance.ai/export/C-AE-2047" label="DEMO">
              <div className="p-4 space-y-3 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    ["MedDRA PT", "Headache (10019211)"],
                    ["SOC", "Nervous system disorders"],
                    ["Seriousness", "Non-serious"],
                    ["Causality", "Possible"],
                    ["Report Type", "Spontaneous"],
                    ["E2B XML", "READY"],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded bg-slate-800/60 p-2.5">
                      <div className="text-[10px] uppercase text-slate-500 font-mono">{k}</div>
                      <div className="mt-0.5 text-white font-mono">{v}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="rounded-full bg-teal-500/15 border border-teal-500/40 px-3 py-1 text-[10px] font-mono text-teal-300">
                    ICH E2B(R3) compliant · Validated schema
                  </span>
                  <button className="rounded bg-green-500 px-4 py-2 text-xs font-bold text-white">Export to EudraVigilance →</button>
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
          <h2 className="mx-auto max-w-2xl text-3xl font-bold lg:text-4xl">Ready to modernize your drug safety operation?</h2>
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