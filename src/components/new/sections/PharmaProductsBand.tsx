import { Link } from "react-router-dom";
import { ArrowRight, Phone, ShieldCheck, FileSearch, Stethoscope } from "lucide-react";

const PRODUCTS = [
  {
    name: "ClinicalAI",
    role: "Clinical Trials",
    tagline: "FLAGSHIP PRODUCT",
    description: "Outbound AI voice calls to clinical trial patients. Protocol-driven interviews, adverse event capture, MedDRA coding, and a 21 CFR Part 11 compliant admin console.",
    badges: ["21 CFR Part 11", "HIPAA", "GDPR", "ALCOA+"],
    bullets: [
      "AI calls patients at scale — 500 interviews overnight",
      "Live call monitor with protocol tracker + AE detection",
      "MedDRA auto-coding with SMQ screening",
      "QC review queue with e-signature",
      "Immutable audit trail — HSM timestamped",
      "4 role-based logins for pharma teams",
    ],
    cta: { label: "Try the Interactive Demo", url: "https://clinicalai.aideveloper.consulting", external: true },
    secondaryCta: { label: "See product detail", url: "/pharma/clinicaltrials-ai" },
    icon: Phone,
    primary: true,
  },
  {
    name: "Pharmacovigilance AI",
    role: "Drug Safety",
    tagline: "IN DEVELOPMENT",
    description: "AI reviews incoming adverse event reports, auto-codes to MedDRA, flags severity levels, and routes to your safety officer with FDA MedWatch integration.",
    badges: ["ICH E2B(R3)", "MedDRA v27.x", "FDA MedWatch"],
    bullets: [
      "AE report intake and triage",
      "Auto-coding to MedDRA PT/HLT/SOC",
      "Signal detection and SMQ screening",
      "FDA MedWatch submission workflow",
    ],
    cta: { label: "See Product Detail →", url: "/pharma/pharmacovigilance-ai", external: false },
    icon: ShieldCheck,
    primary: false,
  },
  {
    name: "Regulatory Doc Validator",
    role: "Regulatory Affairs",
    tagline: "IN DEVELOPMENT",
    description: "Upload any FDA submission or drug label — AI checks every section against current FDA/EMA guidelines, flags non-compliant language, and generates a correction report.",
    badges: ["FDA", "EMA", "ICH"],
    bullets: [
      "FDA submission and label validation",
      "ICH guideline compliance check",
      "Non-compliant language flagged with suggested fixes",
      "Full audit trail of review",
    ],
    cta: { label: "See Product Detail →", url: "/pharma/regulatory-doc-validator", external: false },
    icon: FileSearch,
    primary: false,
  },
  {
    name: "AI IVR Navigator",
    role: "Payer Operations",
    tagline: "IN DEVELOPMENT",
    description: "AI dials out and navigates payer IVR systems automatically. Your rep gets an alert the moment a human agent is available — eliminating hold time completely.",
    badges: ["DTMF", "STIR/SHAKEN", "HIPAA"],
    bullets: [
      "Automated IVR navigation and phone tree traversal",
      "PA criteria and plan rules pulled into context",
      "Real-time alert when human agent available",
      "Call recording and transcript stored",
    ],
    cta: { label: "See Product Detail →", url: "/pharma/ivr-navigator", external: false },
    icon: Stethoscope,
    primary: false,
  },
];

export default function PharmaProductsBand() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
            Product Suite
          </span>
          <h2 className="mt-6 text-3xl font-bold text-brand-primary lg:text-4xl">
            Purpose-built for pharma. Not adapted from something else.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-secondary">
            Every product in the ClinicalAI suite is built from the ground up for regulated life sciences environments — 21 CFR Part 11, HIPAA, GCP, and ALCOA+ by default.
          </p>
        </div>

        {/* ClinicalAI — primary hero product card */}
        <div className="mx-auto mt-14 max-w-5xl">
          {PRODUCTS.filter(p => p.primary).map((p) => (
            <article key={p.name} className="relative overflow-hidden rounded-2xl border-2 border-[hsl(var(--brand-secondary))] bg-card p-8 lg:p-10">
              <div className="absolute right-5 top-5 rounded-full bg-[hsl(var(--brand-secondary))] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-background">
                {p.tagline}
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-[hsl(var(--brand-secondary))]/10 p-3">
                  <p.icon className="h-7 w-7 text-[hsl(var(--brand-secondary))]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-xs uppercase tracking-wider text-[hsl(var(--brand-secondary))]">{p.role}</div>
                  <h3 className="mt-1 text-2xl font-bold text-brand-primary">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-secondary max-w-2xl">{p.description}</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {p.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-2 text-sm text-brand-primary">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-secondary))]" />
                    {b}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {p.badges.map((b) => (
                  <span key={b} className="inline-flex items-center rounded-full bg-[hsl(var(--brand-secondary))]/10 px-3 py-1 text-xs font-mono font-semibold text-[hsl(var(--brand-secondary))]">
                    {b}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-6">
                <a
                  href={p.cta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[hsl(var(--brand-secondary))] px-6 py-3 text-sm font-semibold text-background transition hover:shadow-lg"
                >
                  {p.cta.label} <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to={p.secondaryCta!.url}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-secondary))]"
                >
                  {p.secondaryCta!.label} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Other 3 products — smaller cards */}
        <div className="mx-auto mt-6 max-w-5xl grid grid-cols-1 gap-5 md:grid-cols-3">
          {PRODUCTS.filter(p => !p.primary).map((p) => (
            <article key={p.name} className="relative overflow-hidden rounded-2xl border border-border bg-slate-light p-6">
              <div className="absolute right-4 top-4 rounded-full border border-border bg-card px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-slate-secondary">
                {p.tagline}
              </div>
              <div className="rounded-xl bg-card p-2.5 w-fit">
                <p.icon className="h-5 w-5 text-brand-primary" />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-slate-secondary mt-3">{p.role}</div>
              <h3 className="mt-1 text-base font-bold text-brand-primary">{p.name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-secondary">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.badges.map((b) => (
                  <span key={b} className="rounded bg-background px-2 py-0.5 text-[10px] font-mono text-slate-secondary border border-border">{b}</span>
                ))}
              </div>
              <Link
                to={p.cta.url}
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary"
              >
                {p.cta.label} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>

        {/* Small note — backbone is CollabAI */}
        <div className="mx-auto mt-10 max-w-5xl">
          <p className="text-center text-xs text-slate-secondary">
            All ClinicalAI products are powered by the CollabAI platform — HIPAA-ready infrastructure, role-based access, HSM audit trail, and white-label architecture. 
            <a href="/new/collabai-platform" className="ml-1 underline hover:text-brand-primary">Learn about the platform →</a>
          </p>
        </div>
      </div>
    </section>
  );
}
