import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, ShieldCheck, AlertTriangle, FileText, FileSearch, GitCompare, BookOpen, Wand2, CheckCircle2 } from "lucide-react";
import PageSeoHead from "@/components/PageSeoHead";
import { PharmaScreenshot } from "@/components/new/pharma/PharmaScreenshot";

const navy = "bg-[hsl(220,40%,12%)]";

const pains = [
  { title: "$2,000/hour legal review", body: "Pharma companies pay specialist regulatory lawyers $2,000/hour to manually verify FDA submission documents. A single label review costs $40,000–80,000." },
  { title: "Guideline changes catch teams off guard", body: "FDA guidelines update constantly. A label approved 2 years ago may now be non-compliant with new draft guidance. Manual tracking is impossible at scale." },
  { title: "Submission rejections delay drug launches", body: "A Complete Response Letter from FDA for a labeling issue can delay a drug launch by 6–12 months and cost $100M+. AI catches these before submission." },
];

const steps = [
  { n: "1", title: "Upload Document", desc: "FDA submission, drug label, protocol, SOP, or any regulatory document." },
  { n: "2", title: "Guideline Mapping", desc: "AI maps each section to applicable FDA/EMA/ICH guidance documents." },
  { n: "3", title: "Compliance Check", desc: "Flags non-compliant language with exact guideline citations." },
  { n: "4", title: "Correction Report", desc: "Generates a redline report with suggested replacements and references." },
];

const features = [
  { icon: FileText, name: "FDA 21 CFR §201 label compliance" },
  { icon: ShieldCheck, name: "ICH M4/M4E CTD format validation" },
  { icon: BookOpen, name: "EMA CHMP guideline mapping" },
  { icon: Wand2, name: "Automatic redline generation" },
  { icon: FileSearch, name: "Cited reference library" },
  { icon: GitCompare, name: "Version comparison (track changes)" },
];

export default function RegulatoryDocValidator() {
  return (
    <>
      <PageSeoHead
        title="Regulatory Doc Validator — AI FDA, EMA & ICH Document Review"
        description="AI that reviews FDA documents faster than your legal team at 1% of the cost. FDA/EMA/ICH guideline mapping, automated redlines, cited references."
        canonicalPath="/pharma/regulatory-doc-validator"
      />

      <section className={`${navy} text-background pt-20 pb-16 lg:pt-28`}>
        <div className="container mx-auto px-4">
          <Link to="/pharma" className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-background/60 hover:text-[hsl(180,70%,55%)]">
            <ArrowLeft className="h-3.5 w-3.5" /> ClinicalAI
          </Link>
          <div className="mx-auto mt-6 max-w-4xl text-center">
            <span className="inline-block rounded-full border border-background/20 bg-background/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[hsl(180,70%,55%)]">
              ClinicalAI · Powered by Control Tower · Regulatory Affairs
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              AI That Reviews <span className="text-[hsl(180,70%,55%)]">FDA Documents</span> Faster Than Your Legal Team — At 1% of the Cost
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-background/75">
              Upload any FDA submission, drug label, or protocol document — the Regulatory Doc Validator checks every section against current FDA/EMA/ICH guidelines, flags non-compliant language, and generates a correction report with cited references.
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
              {["FDA", "EMA", "ICH", "21 CFR Part 11"].map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-[hsl(180,70%,55%)]" /> {b}
                </span>
              ))}
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
              {[
                { stat: "$40K", label: "Saved Per Submission" },
                { stat: "4 hrs vs 4 wks", label: "Review Turnaround" },
                { stat: "Zero", label: "Missed Citations" },
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

      {/* PROBLEM */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-brand-primary lg:text-4xl">Why Regulatory Review Is Broken</h2>
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
          <div className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--brand-secondary))] font-bold text-background">{s.n}</div>
                <h3 className="mt-4 text-base font-bold text-brand-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-secondary">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-brand-primary lg:text-4xl">Inside the Validator</h2>
          </div>
          <div className="mx-auto mt-14 max-w-6xl space-y-10">
            {/* Upload + Analysis */}
            <PharmaScreenshot title="regdoc.ai/upload" label="DEMO">
              <div className="p-5 space-y-4">
                <div className="rounded-lg border-2 border-dashed border-slate-700 bg-slate-800/40 p-6 text-center">
                  <FileText className="h-8 w-8 mx-auto text-teal-400" />
                  <div className="mt-2 text-white text-sm font-mono">DRUGX_Label_v3.2.pdf</div>
                  <div className="mt-1 text-xs text-slate-400">Analyzing — 78%</div>
                  <div className="mt-3 h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-500" style={{ width: "78%" }} />
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {[
                    ["Indications", "✓", "green"],
                    ["Dosage", "✓", "green"],
                    ["Warnings", "⚠", "yellow"],
                    ["Contraindications", "...", "slate"],
                  ].map(([k, v, c]) => (
                    <div key={k} className="rounded bg-slate-800/60 p-2 flex items-center justify-between">
                      <span className="text-slate-300">{k}</span>
                      <span className={c === "green" ? "text-green-400" : c === "yellow" ? "text-yellow-400" : "text-slate-500"}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </PharmaScreenshot>

            {/* Issues Report */}
            <PharmaScreenshot title="regdoc.ai/issues/DRUGX_Label_v3.2" label="DEMO">
              <div className="p-4 space-y-3 text-xs">
                <div className="flex gap-2 text-[10px] font-bold">
                  <button className="rounded bg-teal-500/20 border border-teal-500/40 px-2.5 py-1 text-teal-300">ALL (14)</button>
                  <button className="rounded bg-red-500/20 border border-red-500/40 px-2.5 py-1 text-red-300">CRITICAL (2)</button>
                  <button className="rounded bg-yellow-500/20 border border-yellow-500/40 px-2.5 py-1 text-yellow-300">MAJOR (5)</button>
                  <button className="rounded bg-slate-700 px-2.5 py-1 text-slate-300">MINOR (7)</button>
                </div>
                <div className="space-y-2">
                  {[
                    { sev: "CRITICAL", color: "red", section: "Section 5.1 Warnings", body: "Black box warning format does not comply with 21 CFR §201.57(c)(1). Missing required border formatting." },
                    { sev: "MAJOR", color: "yellow", section: "Section 6.1 Adverse Reactions", body: "Incidence table missing required MedDRA SOC grouping per FDA guidance 2024." },
                    { sev: "MINOR", color: "green", section: "Section 12.3 Pharmacokinetics", body: "Missing population PK study reference recommended per EMA/CHMP." },
                  ].map((i) => (
                    <div key={i.section} className={`rounded-lg p-3 border ${
                      i.color === "red" ? "bg-red-500/10 border-red-500/30" :
                      i.color === "yellow" ? "bg-yellow-500/10 border-yellow-500/30" :
                      "bg-green-500/10 border-green-500/30"
                    }`}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className={`text-[10px] font-bold mb-1 ${i.color === "red" ? "text-red-300" : i.color === "yellow" ? "text-yellow-300" : "text-green-300"}`}>● {i.sev} — {i.section}</div>
                          <div className="text-slate-300">{i.body}</div>
                        </div>
                        <div className="flex gap-1.5 shrink-0">
                          <button className="rounded bg-slate-700 px-2 py-1 text-[9px] font-bold text-slate-200">View</button>
                          <button className="rounded bg-teal-500 px-2 py-1 text-[9px] font-bold text-slate-900">Fix</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PharmaScreenshot>

            {/* Redline */}
            <PharmaScreenshot title="regdoc.ai/redline" label="DEMO">
              <div className="p-4 space-y-3 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-slate-800/60 p-3">
                    <div className="text-[10px] uppercase font-mono text-slate-500 mb-2">ORIGINAL</div>
                    <div className="text-slate-300 font-mono leading-relaxed">
                      <span className="text-red-400 line-through">WARNING:</span> May cause serious cardiovascular events. Use with caution.
                    </div>
                  </div>
                  <div className="rounded-lg bg-slate-800/60 p-3">
                    <div className="text-[10px] uppercase font-mono text-slate-500 mb-2">CORRECTED</div>
                    <div className="text-slate-300 font-mono leading-relaxed">
                      <span className="bg-green-500/20 text-green-300 border border-green-500/40 rounded px-1">━━ BOXED WARNING ━━</span> Serious cardiovascular events have been reported. See full prescribing information.
                    </div>
                  </div>
                </div>
                <div className="text-[10px] text-teal-300 font-mono">
                  📖 Guideline: 21 CFR §201.57(c)(1) — FDA Labeling Guidance 2024
                </div>
                <div className="flex gap-2 pt-1">
                  <button className="rounded bg-teal-500 px-3 py-1.5 text-[10px] font-bold text-slate-900">Export Redline PDF</button>
                  <button className="rounded bg-slate-700 px-3 py-1.5 text-[10px] font-bold text-slate-200">Export to Word</button>
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
          <h2 className="mx-auto max-w-2xl text-3xl font-bold lg:text-4xl">Cut your regulatory review costs by 99%.</h2>
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