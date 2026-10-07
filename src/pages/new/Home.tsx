import PageSeoHead from "@/components/PageSeoHead";
import ControlTowerHero from "@/components/new/ControlTowerHero";
import { organizationSchema, websiteSchema, softwareApplicationSchema, DEFAULT_OG_IMAGE } from "@/lib/seoSchema";
import Testimonials from "@/components/ui/testimonials-columns-1";
import FinalCTASection from "@/components/FinalCTASection";
import ProblemSection from "@/components/new/sections/ProblemSection";
import SecuritySection from "@/components/new/sections/SecuritySection";
import IndustriesCards4 from "@/components/new/sections/IndustriesCards4";
import PricingTeaser from "@/components/new/sections/PricingTeaser";
import { Radar, Cpu, ShieldCheck, KeyRound, Server, Coins } from "lucide-react";

const proofStats = [
  { value: "1+ yr", label: "In production" },
  { value: "40+", label: "Hours saved / week" },
  { value: "100+", label: "AI agents" },
  { value: "400+", label: "Clients since 2004 — built by SJ Innovation" },
];

const ProofBand = () => (
  <section className="border-y border-border bg-[hsl(var(--brand-primary))] text-background">
    <div className="container mx-auto px-4 py-10">
      <ul className="grid grid-cols-2 gap-6 font-mono md:grid-cols-4">
        {proofStats.map((s) => (
          <li key={s.label} className="flex flex-col">
            <span className="text-2xl font-semibold tracking-tight lg:text-3xl">{s.value}</span>
            <span className="mt-1 text-[11px] uppercase tracking-wider text-background/70">{s.label}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const controlTowerPillars = [
  { icon: Radar, title: "See everything", body: "Tasks, projects, CRM, meetings, and OKRs in one operational view." },
  { icon: Cpu, title: "Act on everything", body: "100+ AI agents that read and write across your stack." },
  { icon: ShieldCheck, title: "Private by design", body: "Runs inside your tenant. Every agent action is audited." },
];

const collabAiPoints = [
  { icon: KeyRound, title: "Your API keys", body: "Bring your own OpenAI, Anthropic, or Gemini keys." },
  { icon: Server, title: "Your servers", body: "Self-hosted or in your private cloud. Your data never leaves." },
  { icon: Coins, title: "Zero token fees", body: "You pay the model providers directly. The engine stays yours." },
];

const SolutionSection = () => (
  <section className="bg-slate-light py-24">
    <div className="container mx-auto space-y-16 px-4">
      {/* Part A — Control Tower */}
      <div>
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center space-x-2 rounded-full bg-[hsl(var(--brand-secondary))]/10 px-4 py-2 text-sm font-medium text-[hsl(var(--brand-secondary))]">
            Control Tower
          </div>
          <h2 className="mt-6 text-3xl font-bold text-brand-primary lg:text-4xl">
            The AI operations platform your team works in.
          </h2>
          <p className="mt-4 text-lg text-slate-secondary">
            Tasks, projects, CRM, meetings, and OKRs in one place — with AI agents that act across all of it.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {controlTowerPillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-7 shadow-sm">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))]">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-brand-primary">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-secondary">{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Part B — Powered by CollabAI (BYOK) */}
      <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-background p-8 lg:p-12">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
              The engine underneath
            </span>
            <h2 className="mt-5 text-3xl font-bold text-brand-primary lg:text-4xl">
              Powered by CollabAI.
            </h2>
            <p className="mt-4 text-base text-slate-secondary">
              Your API keys, your servers, zero token fees. The engine stays yours — no per-seat AI markup, no vendor lock-in.
            </p>
          </div>
          <div className="grid gap-4">
            {collabAiPoints.map((p) => (
              <div key={p.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <p.icon className="mt-0.5 h-6 w-6 shrink-0 text-[hsl(var(--brand-secondary))]" />
                <div>
                  <h3 className="text-sm font-semibold text-brand-primary">{p.title}</h3>
                  <p className="mt-1 text-xs text-slate-secondary">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const NewHome = () => {
  return (
    <>
      <PageSeoHead
        title="Control Tower by CollabAI — Private AI ops for your company"
        description="Control Tower is the private AI operations platform for regulated industries. Visibility, control, and AI agents that read and write across your stack."
        canonicalPath="/"
        ogImage={DEFAULT_OG_IMAGE}
        jsonLd={[organizationSchema(), websiteSchema(), softwareApplicationSchema()]}
      />

      {/* 1. HERO */}
      <ControlTowerHero
        eyebrow="The Private AI Control Tower"
        heading={
          <>
            Same Workflow.{" "}
            <span className="bg-gradient-to-r from-trust-blue to-trust-blue-dark bg-clip-text text-transparent">
              New Workforce.
            </span>
          </>
        }
        subheading="AI agents inside the tools you already use."
        tagline="Control Tower adds 100+ AI agents to HubSpot, Zoom, Drive, and Slack — no rip-and-replace. 1+ year in production, 40+ hours saved per week."
        buttonText="Book a Demo"
        buttonUrl="/book-demo"
        secondaryCta={{ label: "Try the Live Demo", to: "/try-demo" }}
      />

      {/* 2. PROOF BAND */}
      <ProofBand />

      {/* 3. PROBLEM */}
      <ProblemSection />

      {/* 4. SOLUTION — Control Tower + Powered by CollabAI */}
      <SolutionSection />

      {/* 5. SECURITY */}
      <SecuritySection />

      {/* 6. INDUSTRIES */}
      <IndustriesCards4 />

      {/* 7. TESTIMONIALS */}
      <Testimonials />

      {/* 8. PRICING + FINAL CTA */}
      <PricingTeaser />
      <FinalCTASection
        title="Ready to see Control Tower?"
        paragraph="Book a personalized demo tailored to your industry and stack."
        button1Text="Book a Demo"
        button1Link="/book-demo"
        button2Text="Try the Live Demo"
        button2Link="/try-demo"
      />
    </>
  );
};

export default NewHome;