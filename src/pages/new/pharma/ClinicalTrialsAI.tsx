import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  Phone,
  Mic,
  Brain,
  PhoneCall,
  Code2,
  FileCheck,
  PenTool,
  Lock,
  Monitor,
  CheckCircle2,
  Server,
  Database,
} from "lucide-react";
import PageSeoHead from "@/components/PageSeoHead";
import { PharmaScreenshot } from "@/components/new/pharma/PharmaScreenshot";

const navy = "bg-[hsl(220,40%,12%)]";
const teal = "hsl(180,70%,55%)";

const roles = [
  {
    title: "Study Director",
    email: "director@clarity301.com",
    password: "demo123",
    desc: "See full pipeline, ROI metrics, all studies.",
    color: "hsl(180,70%,55%)",
  },
  {
    title: "Medical Coder",
    email: "coder@clarity301.com",
    password: "demo123",
    desc: "Work MedDRA coding queue, review flagged terms.",
    color: "hsl(265,70%,70%)",
  },
  {
    title: "QC Reviewer",
    email: "qc@clarity301.com",
    password: "demo123",
    desc: "Review calls, apply QC disposition, e-sign records.",
    color: "hsl(145,65%,55%)",
  },
  {
    title: "Site Coordinator",
    email: "site@clarity301.com",
    password: "demo123",
    desc: "Manage your patient call queue, monitor live sessions.",
    color: "hsl(28,90%,65%)",
  },
];

const capabilities = [
  { icon: Phone, name: "Voice AI Agent", desc: "ElevenLabs-powered outbound voice with natural patient interaction." },
  { icon: Mic, name: "Speech-to-Text", desc: "Real-time medical-tuned STT with custom vocabulary." },
  { icon: Brain, name: "Clinical NLU", desc: "Extract symptoms, AEs, and protocol responses from free speech." },
  { icon: PhoneCall, name: "Call Orchestration", desc: "Twilio + SIP routing, retry logic, callback scheduling." },
  { icon: Code2, name: "MedDRA Coding", desc: "Verbatim → PT/HLT/HLGT/SOC. SMQ screening. v27.x." },
  { icon: FileCheck, name: "HSM Audit Trail", desc: "RFC 3161 timestamping, tamper-evident event log." },
  { icon: PenTool, name: "E-Signatures", desc: "21 CFR Part 11 §11.50 compliant signature manifest." },
  { icon: Lock, name: "HIPAA + GDPR", desc: "AES-256 at rest, TLS 1.3, BAA + DPIA documentation." },
  { icon: Monitor, name: "Live Monitor", desc: "Real-time transcript, protocol tracker, AE detection." },
  { icon: CheckCircle2, name: "Automated QC", desc: "PASS/FLAG/FAIL workflow with deviation register." },
  { icon: Server, name: "GAMP 5", desc: "Validated category 4 software, IQ/OQ/PQ ready." },
  { icon: Database, name: "Enterprise DR", desc: "Multi-region failover, encrypted snapshots, RTO < 1h." },
];

const compliance = [
  {
    title: "21 CFR Part 11",
    items: [
      "HSM-backed audit trail with RFC 3161 timestamping",
      "E-signature manifest with countersignature workflow",
      "Role-based access control with re-authentication",
      "CSV (computer system validation) documentation available",
      "§11.10, §11.30, §11.50, §11.70 coverage",
    ],
  },
  {
    title: "HIPAA + GDPR",
    items: [
      "AES-256 encryption at rest, TLS 1.3 in transit",
      "Business Associate Agreement with all vendors",
      "Data Protection Impact Assessment documentation",
      "Data subject rights management (access, erasure, portability)",
      "Pseudonymization + audit logging of PHI access",
    ],
  },
  {
    title: "GCP ICH E6 R2 + ALCOA+",
    items: [
      "Protocol adherence tracking on every call",
      "Read-back confirmation for critical data points",
      "Immutable data capture — attributable, legible, contemporaneous",
      "Deviation register with root cause workflow",
      "Source data verification (SDV) ready exports",
    ],
  },
];

const phases = [
  { phase: "Phase 0", when: "Live today", title: "Interactive UX Prototype", desc: "Fully clickable role-based demo at clinicalai.aideveloper.consulting." },
  { phase: "Phase 1", when: "4 weeks", title: "Working Voice Agent", desc: "Real outbound calls to test numbers. End-to-end transcript + MedDRA pipeline." },
  { phase: "Phase 2", when: "8–12 weeks", title: "Full Production", desc: "HIPAA infra, MedDRA engine, EDC integration (Medidata, Veeva, Oracle)." },
  { phase: "Phase 3", when: "Ongoing", title: "Validation & Compliance", desc: "IQ/OQ/PQ documentation, FDA inspection readiness, periodic revalidation." },
];

export default function ClinicalTrialsAI() {
  return (
    <>
      <PageSeoHead
        title="ClinicalAI — AI for Clinical Trial Follow-Up & MedDRA Coding"
        description="Flagship pharma product. Outbound AI calls to trial patients, MedDRA auto-coding, QC review, 21 CFR Part 11 audit trail. Try the live demo."
        canonicalPath="/pharma/clinicaltrials-ai"
      />

      {/* HERO */}
      <section className={`${navy} text-background pt-20 pb-16 lg:pt-28`}>
        <div className="container mx-auto px-4">
          <Link to="/pharma" className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-background/60 hover:text-[hsl(180,70%,55%)]">
            <ArrowLeft className="h-3.5 w-3.5" /> ClinicalAI
          </Link>
          <div className="mx-auto mt-6 max-w-4xl text-center">
            <span className="inline-block rounded-full border border-background/20 bg-background/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[hsl(180,70%,55%)]">
              ClinicalAI · Powered by Control Tower · Flagship Product
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              AI That Never Misses a <span className="text-[hsl(180,70%,55%)]">Clinical Trial Follow-Up</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-background/75">
              ClinicalAI makes outbound AI voice calls to trial patients, captures protocol responses, auto-codes to MedDRA, and delivers a 21 CFR Part 11 compliant admin console — with 4 role-based personas for every pharma team.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://clinicalai.aideveloper.consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[hsl(180,70%,45%)] px-6 py-3 text-sm font-semibold text-[hsl(220,40%,12%)] transition-all hover:shadow-lg active:translate-y-[2px]"
              >
                Try Interactive Demo <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/pharma"
                className="inline-flex items-center gap-2 rounded-lg border border-background/30 px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-background/5 active:translate-y-[2px]"
              >
                <ArrowLeft className="h-4 w-4" /> Back to ClinicalAI
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs uppercase tracking-wider text-background/60">
              {["21 CFR Part 11", "HIPAA", "GDPR", "ALCOA+", "GCP ICH E6 R2"].map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-[hsl(180,70%,55%)]" /> {b}
                </span>
              ))}
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
              {[
                { stat: "98%", label: "Call Completion Rate" },
                { stat: "2×", label: "Faster Data Collection" },
                { stat: "$47 vs $312", label: "AI vs Manual per Call" },
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

      {/* 4 ROLE LOGIN CARDS */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-brand-primary lg:text-4xl">
              Explore Every Pharma Role — Instantly
            </h2>
            <p className="mt-4 text-base text-slate-secondary">
              No signup. Click any role to log in directly to the live demo.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2">
            {roles.map((r) => (
              <article
                key={r.title}
                className="rounded-2xl border border-border bg-card p-6 transition hover:shadow-lg"
                style={{ borderLeft: `4px solid ${r.color}` }}
              >
                <div className="font-mono text-xs uppercase tracking-wider" style={{ color: r.color }}>
                  {r.title}
                </div>
                <div className="mt-4 rounded-lg bg-slate-light p-3 font-mono text-xs text-brand-primary">
                  <div>email: {r.email}</div>
                  <div className="mt-1 text-slate-secondary">password: {r.password}</div>
                </div>
                <p className="mt-4 text-sm text-slate-secondary">{r.desc}</p>
                <a
                  href="https://clinicalai.aideveloper.consulting/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-background transition-all active:translate-y-[2px]"
                  style={{ background: r.color }}
                >
                  Login as {r.title} <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-slate-light py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-brand-primary lg:text-4xl">Everything Built. Nothing Missing.</h2>
            <p className="mt-4 text-base text-slate-secondary">
              12 platform capabilities — all live in the demo today.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.name} className="rounded-xl border border-border bg-card p-5">
                <c.icon className="h-6 w-6 text-[hsl(var(--brand-secondary))]" />
                <h3 className="mt-3 text-base font-bold text-brand-primary">{c.name}</h3>
                <p className="mt-1.5 text-sm text-slate-secondary">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
              See every screen
            </span>
            <h2 className="mt-3 text-3xl font-bold text-brand-primary lg:text-4xl">Built. Not Mocked.</h2>
            <p className="mt-4 text-base text-slate-secondary">
              Every screen below is live in the demo at clinicalai.aideveloper.consulting
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-6xl space-y-10">
            {/* 1. Live Call Monitor */}
            <PharmaScreenshot title="clinicalai.aideveloper.consulting/monitor" label="LIVE">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-4 text-xs">
                <div className="rounded-lg bg-slate-800/60 p-3 space-y-2">
                  <div className="text-slate-400 font-mono text-[10px]">PATIENT</div>
                  <div className="text-white font-bold text-base">PT-2047</div>
                  <div className="text-slate-400">CLARITY-301</div>
                  <div className="text-teal-400 font-mono">00:03:42</div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-green-400 font-mono text-[10px] uppercase tracking-wider">Live</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-800/60 p-3 space-y-2 lg:col-span-1">
                  <div className="text-slate-400 font-mono text-[10px]">TRANSCRIPT</div>
                  <div className="text-teal-300"><span className="font-semibold">AI:</span> Have you experienced any new symptoms?</div>
                  <div className="text-white"><span className="font-semibold text-slate-300">Patient:</span> I've had some headaches…</div>
                  <div className="text-teal-300"><span className="font-semibold">AI:</span> Noted. When did they start?</div>
                  <div className="text-white"><span className="font-semibold text-slate-300">Patient:</span> About three days ago.</div>
                </div>
                <div className="rounded-lg bg-slate-800/60 p-3 space-y-1.5">
                  <div className="text-slate-400 font-mono text-[10px]">PROTOCOL</div>
                  <div className="text-green-400">✓ Consent</div>
                  <div className="text-green-400">✓ Identity</div>
                  <div className="text-green-400">✓ Visit Reason</div>
                  <div className="text-yellow-400">⟳ Health Status</div>
                  <div className="text-slate-500">○ Symptoms</div>
                  <div className="text-slate-500">○ Medications</div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 border-t border-slate-700 px-4 py-2.5 bg-slate-800/40">
                <div className="flex gap-2">
                  <button className="rounded bg-red-500/20 border border-red-500/40 px-3 py-1 text-[10px] font-bold text-red-300">ESCALATE</button>
                  <button className="rounded bg-slate-700 px-3 py-1 text-[10px] font-bold text-slate-200">END CALL</button>
                </div>
                <span className="rounded-full bg-orange-500/20 border border-orange-500/40 px-2.5 py-0.5 text-[10px] font-bold text-orange-300">2 AEs DETECTED</span>
              </div>
            </PharmaScreenshot>

            {/* 2. MedDRA Coding */}
            <PharmaScreenshot title="clinicalai.aideveloper.consulting/coding" label="BUILT">
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs text-slate-400 font-mono">MedDRA v27.x · 14 terms in queue</div>
                  <button className="rounded bg-teal-500/20 border border-teal-500/40 px-3 py-1 text-[10px] font-bold text-teal-300">BULK APPROVE</button>
                </div>
                <div className="rounded-lg border border-slate-700 overflow-hidden text-xs">
                  <div className="grid grid-cols-12 gap-2 bg-slate-800 px-3 py-2 text-[10px] font-mono uppercase text-slate-400">
                    <div className="col-span-3">Verbatim</div>
                    <div className="col-span-2">PT</div>
                    <div className="col-span-4">SOC</div>
                    <div className="col-span-1">Conf</div>
                    <div className="col-span-2 text-right">Status</div>
                  </div>
                  {[
                    { v: "headaches", pt: "Headache", soc: "Nervous system disorders", c: "96%", s: "APPROVED", color: "green" },
                    { v: "felt tired", pt: "Fatigue", soc: "General disorders", c: "89%", s: "APPROVED", color: "green" },
                    { v: "joint pain", pt: "Arthralgia", soc: "Musculoskeletal", c: "74%", s: "REVIEW", color: "yellow", dual: true },
                  ].map((r) => (
                    <div key={r.v} className="grid grid-cols-12 gap-2 px-3 py-2.5 border-t border-slate-700 items-center">
                      <div className="col-span-3 text-white font-mono">{r.v}</div>
                      <div className="col-span-2 text-teal-300">{r.pt}</div>
                      <div className="col-span-4 text-slate-300">{r.soc}</div>
                      <div className="col-span-1 text-slate-400 font-mono">{r.c}</div>
                      <div className="col-span-2 text-right flex justify-end gap-1">
                        {r.dual && <span className="rounded bg-purple-500/20 border border-purple-500/40 px-1.5 py-0.5 text-[9px] font-bold text-purple-300">DUAL</span>}
                        <span className={`rounded px-2 py-0.5 text-[10px] font-bold ${r.color === "green" ? "bg-green-500/20 text-green-300 border border-green-500/40" : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/40"}`}>{r.s}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PharmaScreenshot>

            {/* 3. QC Review Queue */}
            <PharmaScreenshot title="clinicalai.aideveloper.consulting/qc" label="BUILT">
              <div className="p-4 space-y-3">
                <div className="rounded-lg bg-red-500/15 border border-red-500/40 px-3 py-2 text-xs text-red-300 font-semibold">
                  ⚠ 2 FAIL cases require immediate action
                </div>
                <div className="rounded-lg border border-slate-700 overflow-hidden text-xs">
                  {[
                    { id: "C-9847", pt: "PT-2047", study: "CLARITY-301", chip: "PASS", color: "green", action: null },
                    { id: "C-9821", pt: "PT-1893", study: "NEXUS-112", chip: "FLAG", color: "yellow", action: "Review" },
                    { id: "C-9801", pt: "PT-3312", study: "BEACON-205", chip: "FAIL", color: "red", action: "Action Required", pulse: true },
                  ].map((r) => (
                    <div key={r.id} className="grid grid-cols-12 gap-2 px-3 py-2.5 border-b border-slate-700 last:border-b-0 items-center">
                      <div className="col-span-2 text-white font-mono">{r.id}</div>
                      <div className="col-span-2 text-slate-300 font-mono">{r.pt}</div>
                      <div className="col-span-3 text-slate-300">{r.study}</div>
                      <div className="col-span-2">
                        <span className={`rounded px-2 py-0.5 text-[10px] font-bold border ${
                          r.color === "green" ? "bg-green-500/20 text-green-300 border-green-500/40" :
                          r.color === "yellow" ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/40" :
                          `bg-red-500/20 text-red-300 border-red-500/40 ${r.pulse ? "animate-pulse" : ""}`
                        }`}>{r.chip}</span>
                      </div>
                      <div className="col-span-3 text-right">
                        {r.action && (
                          <button className={`rounded px-2.5 py-1 text-[10px] font-bold ${r.color === "red" ? "bg-red-500 text-white" : "bg-slate-700 text-slate-200"}`}>
                            {r.action}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 text-[10px] font-bold pt-1">
                  {[
                    { l: "PASS", c: "green" },
                    { l: "FLAG", c: "yellow" },
                    { l: "FAIL", c: "red" },
                    { l: "ESCALATED", c: "purple" },
                  ].map((b) => (
                    <button key={b.l} className={`flex-1 rounded px-3 py-1.5 border bg-${b.c}-500/15 text-${b.c}-300 border-${b.c}-500/40`}>{b.l}</button>
                  ))}
                </div>
              </div>
            </PharmaScreenshot>

            {/* 4. Audit Trail */}
            <PharmaScreenshot title="clinicalai.aideveloper.consulting/audit-trail" label="LIVE">
              <div className="p-4 space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 border border-slate-700 px-3 py-1 text-[10px] font-mono text-teal-300">
                  🔒 Tamper-evident · HSM timestamped · RFC 3161
                </div>
                <div className="space-y-1.5 font-mono text-[11px]">
                  {[
                    { ts: "2026-05-23 14:32:01 UTC", id: "EVT-00847", type: "QC_DISPOSITION", cat: "QC", actor: "Priya Shah", ref: "C-9847", hash: "…c2f8a1" },
                    { ts: "2026-05-23 14:30:11 UTC", id: "EVT-00846", type: "MEDDRA_CODE_APPROVED", cat: "CODING", actor: "Marcus Chen", ref: "C-9847", hash: "…b7e3d2" },
                    { ts: "2026-05-23 14:25:08 UTC", id: "EVT-00845", type: "E_SIGNATURE_APPLIED", cat: "SIGNATURE", actor: "Priya Shah", ref: "SIG-0847", hash: "…d1a4e9" },
                    { ts: "2026-05-23 14:22:01 UTC", id: "EVT-00844", type: "CONSENT_OBTAINED", cat: "CALL", actor: "AI Agent", ref: "PT-2047", hash: "…a3f9c2" },
                  ].map((e) => {
                    const catColor = e.cat === "QC" ? "yellow" : e.cat === "CODING" ? "teal" : e.cat === "SIGNATURE" ? "purple" : "blue";
                    return (
                      <div key={e.id} className="flex items-center gap-2 rounded bg-slate-800/50 px-2.5 py-2">
                        <span className="text-slate-400 shrink-0">{e.ts}</span>
                        <span className="text-slate-300 shrink-0">{e.id}</span>
                        <span className={`rounded px-1.5 py-0.5 text-[9px] font-bold shrink-0 bg-${catColor}-500/20 text-${catColor}-300 border border-${catColor}-500/40`}>{e.cat}</span>
                        <span className="text-white truncate">{e.type}</span>
                        <span className="text-slate-300 hidden sm:inline shrink-0">{e.actor}</span>
                        <span className="text-slate-500 ml-auto hidden md:inline">{e.hash}</span>
                        <span className="text-green-400 text-[9px] font-bold shrink-0">VALID</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </PharmaScreenshot>

            {/* 5. E-Signature */}
            <PharmaScreenshot title="clinicalai.aideveloper.consulting/signatures" label="LIVE">
              <div className="p-4 space-y-3">
                <div className="text-xs text-slate-400 font-mono">
                  847 total signatures · 21 CFR Part 11 §11.50 compliant
                </div>
                <div className="rounded-lg border border-slate-700 overflow-hidden text-[11px]">
                  {[
                    { id: "SIG-0847", type: "QC Disposition", actor: "Priya Shah", reason: "QC Verified — Coded data reviewed", ts: "14:45:03 UTC", valid: true },
                    { id: "SIG-0846", type: "MedDRA Approval", actor: "Marcus Chen", reason: "MedDRA coding confirmed accurate", ts: "14:30:11 UTC", valid: true },
                    { id: "SIG-0845", type: "Monthly QC Report", actor: "Dr. Elena Reyes", reason: "Monthly summary reviewed", ts: "09:00:44 UTC", valid: true, counter: true },
                  ].map((s) => (
                    <div key={s.id} className={`grid grid-cols-12 gap-2 px-3 py-2.5 border-b border-slate-700 last:border-b-0 ${s.counter ? "bg-yellow-500/10" : ""}`}>
                      <div className="col-span-2 text-white font-mono">{s.id}</div>
                      <div className="col-span-2 text-teal-300">{s.type}</div>
                      <div className="col-span-2 text-slate-300">{s.actor}</div>
                      <div className="col-span-3 text-slate-400 italic truncate">"{s.reason}"</div>
                      <div className="col-span-2 text-slate-400 font-mono">{s.ts}</div>
                      <div className="col-span-1 text-right">
                        {s.counter ? (
                          <button className="rounded bg-yellow-500 px-2 py-0.5 text-[9px] font-bold text-slate-900">Countersign</button>
                        ) : (
                          <span className="text-green-400 text-[10px] font-bold">✓ VALID</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PharmaScreenshot>

            {/* 6. Architecture */}
            <PharmaScreenshot title="clinicalai.aideveloper.consulting/architecture" label="DEMO">
              <div className="p-6 space-y-3 text-[11px]">
                {[
                  ["Patient Phone", "PSTN/SIP", "Twilio + ElevenLabs"],
                  ["Voice AI Agent", "STT Engine", "MedDRA NLP"],
                  ["Data Capture", "PostgreSQL AES-256", "HSM Audit Log"],
                  ["React Admin", "RBAC Auth", "CDISC SDTM Export"],
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 gap-2 items-center">
                    {row.map((box, j) => (
                      <div key={j} className="relative">
                        <div className="rounded-lg bg-slate-800 border border-teal-500/50 px-3 py-2.5 text-center text-white font-mono">
                          {box}
                        </div>
                        {j < 2 && <div className="absolute top-1/2 -right-1 text-teal-400">→</div>}
                      </div>
                    ))}
                  </div>
                ))}
                <div className="flex flex-wrap justify-center gap-2 pt-3">
                  {["21 CFR Part 11", "HIPAA", "GDPR", "ALCOA+", "GCP"].map((b) => (
                    <span key={b} className="rounded-full border border-teal-500/40 bg-teal-500/10 px-2.5 py-0.5 text-[10px] font-mono text-teal-300">{b}</span>
                  ))}
                </div>
              </div>
            </PharmaScreenshot>
          </div>
        </div>
      </section>

      {/* COMPLIANCE DEEP DIVE */}
      <section className="bg-slate-light py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-brand-primary lg:text-4xl">
              Compliance Isn't a Feature. It's the Foundation.
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-3">
            {compliance.map((c) => (
              <div key={c.title} className="rounded-2xl bg-card border border-border p-6">
                <ShieldCheck className="h-7 w-7 text-[hsl(var(--brand-secondary))]" />
                <h3 className="mt-4 text-lg font-bold text-brand-primary">{c.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-secondary">
                  {c.items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-secondary))]" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROLLOUT TIMELINE */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-brand-primary lg:text-4xl">
              From Demo to Production — Phased Delivery
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-4">
            {phases.map((p, i) => (
              <div key={p.phase} className="rounded-2xl border border-border bg-card p-5 relative">
                <div className="font-mono text-xs uppercase tracking-wider text-[hsl(var(--brand-secondary))]">{p.phase}</div>
                <div className="mt-1 text-[11px] text-slate-secondary">{p.when}</div>
                <h3 className="mt-3 text-base font-bold text-brand-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-secondary">{p.desc}</p>
                {i < phases.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-[hsl(var(--brand-secondary))]">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${navy} py-20 text-background`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold lg:text-4xl">
            Ready to show your pharma team?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://clinicalai.aideveloper.consulting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[hsl(180,70%,45%)] px-6 py-3 text-sm font-semibold text-[hsl(220,40%,12%)] transition-all active:translate-y-[2px]"
            >
              Try the Interactive Demo <ExternalLink className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-background/30 px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-background/10 active:translate-y-[2px]"
            >
              Partner With Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}