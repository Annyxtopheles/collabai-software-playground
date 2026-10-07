import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageSeoHead from "@/components/PageSeoHead";
import { FaqSection } from "@/components/ui/faq-section";
import StickyNicheCTA from "@/components/new/StickyNicheCTA";

import AgencyProofBar from "@/components/new/agency/AgencyProofBar";

import AgencyBeforeAfter from "@/components/new/agency/AgencyBeforeAfter";

import AgencySjBacking from "@/components/new/agency/AgencySjBacking";
import AgencyWhyAct from "@/components/new/agency/AgencyWhyAct";
import AgencyWorkflowMotion from "@/components/new/agency/AgencyWorkflowMotion";

import { verticals } from "@/data/verticals";
import financeInvoicing from "@/assets/Finance_Invoicing_1.svg";
import aiAutomation from "@/assets/AI_Automation_1.svg";
import podsOkrProductivity from "@/assets/Pods_OKR_Productivity_1.svg";
import meetingIntelligence from "@/assets/Meeting_Intelligence_Knowledge_Base_1.svg";
import projectsDelivery from "@/assets/Projects_Delivery_1.svg";
import hrLeaveTracking from "@/assets/HR_Leave_Tracking_1.svg";
import SmoothImage from "@/components/ui/SmoothImage";

const config = verticals.agency;

interface HelpCard {
  label: string;
  title: string;
  titleSecondLine?: string;
  image: string;
  alt: string;
  body: string;
}

const helpCards: HelpCard[] = [
  {
    label: "NO REPETITION!",
    title: "AI & Automation",
    image: aiAutomation,
    alt: "Frustrated employee surrounded by repeating task loops asking why he must repeat this task every day",
    body: "You can automate repetitive tasks and much more. 100+ agency-tuned agents, CollabAI runtime, automated workflows",
  },
  {
    label: "NO GUESSING!",
    title: "Meeting Intelligence",
    titleSecondLine: "& Knowledge Base",
    image: meetingIntelligence,
    alt: "Two colleagues at a table asking what the manager said in the meeting",
    body: "Auto-extracts issues, action items, decisions, and sentiment from every call",
  },
  {
    label: "NO CHASING!",
    title: "Projects & Delivery",
    image: projectsDelivery,
    alt: "Employee leaning out of a doorway asking if anyone has seen the project update",
    body: "You stay where you are while the on-going project details, updates and team productivity is visible. Track projects, milestones, billing, allocation across Monday + Notion & other tools",
  },
  {
    label: "YOU DON'T!",
    title: "Teams, OKR & Productivity",
    image: podsOkrProductivity,
    alt: "Team lead facing a wall of team review cards saying she has to create team reviews",
    body: "Consider this task taken off your plate. Team-level scorecards, OKRs, utilization, and weekly performance - all auto-generated",
  },
  {
    label: "TRACK IN REAL-TIME!",
    title: "Finance & Invoicing",
    image: financeInvoicing,
    alt: "Person looking at scattered financial charts, wondering what numbers they will run into",
    body: "Don't wonder and don't wait while the finance team takes days to build a 100-page report. Real-time project billing setup, expense tracking, invoice management is your power",
  },
  {
    label: "REDUCE SURPRISES!",
    title: "HR & Leave Tracking",
    image: hrLeaveTracking,
    alt: "Manager beside an empty desk asking where his graphic designer is",
    body: "Last-minute callouts and unexpected absences happen. What doesn't have to happen? The chaos that follows. Improve visibility and foster transparency by unifying leave requests, approvals, HR sync, and employee directory in one seamless workflow.",
  },
];

const AgencyHub = () => {
  const { faqs, workflows } = config;

  return (
    <>
      <PageSeoHead
        title="Agency Control Tower — Run your agency from one cockpit"
        description="One hub for HubSpot, Monday, Zoom, Slack, Notion. 100+ AI agents tuned for agencies. 1+ year in production, 40+ hrs/week saved. Try the live demo."
        canonicalPath="/agency"
      />

      {/* 1 · Hero */}
      <section className="bg-background pt-12 pb-8 lg:pt-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
              PROTECT YOUR DATA FROM PUBLIC AI APPS
            </span>
            <h1 className="mt-6 text-[7vw] font-bold leading-tight text-brand-primary sm:text-4xl lg:text-5xl xl:text-6xl">
              <span className="block whitespace-nowrap">All Tools. All Tasks. All Updates.</span>
              <span className="text-[hsl(var(--brand-secondary))]">In One Place!</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-secondary">
              Track Performance, Identify Blockers, Auto-generate Reports, Store Business Knowledge - all under One Intelligent Hub without replacing your tools.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/book-demo#calendar"
                className="inline-flex items-center gap-2 rounded-lg bg-[hsl(var(--brand-secondary))] px-6 py-3 text-sm font-semibold text-background transition-all hover:shadow-lg active:translate-y-[2px]"
              >
                Get Free Demo <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-slate-secondary">
                Your Data, Your Server
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-slate-secondary">
                Works With Your Existing Tools
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-slate-secondary">
                40+ hrs/wk saved
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <StickyNicheCTA
        displayName="Agencies"
        demoUrl="/book-demo#calendar"
        hideBookDemo
        demoLabel="Get Free Demo"
        compact
      />

      {/* 2 · How it helps — compact 6-card grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-brand-primary lg:text-4xl">
            <span className="block">How Does Agency Control Tower</span>
            <span className="block">Help Small &amp; Mid-Scale Businesses</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {helpCards.map((card) => (
              <article
                key={card.title}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-5"
              >
                <div className="overflow-hidden rounded-xl border border-border bg-slate-light">
                  <SmoothImage
                    src={card.image}
                    alt={card.alt}
                    aspectRatio="3 / 2"
                    wrapperClassName="rounded-xl"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="mt-4 text-xs uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
                  {card.label}
                </span>
                <h3 className="mt-2 text-xl font-bold text-brand-primary">
                  <span className="block">{card.title}</span>
                  {card.titleSecondLine && (
                    <span className="block">{card.titleSecondLine}</span>
                  )}
                </h3>
                <p className="mt-3 text-sm text-slate-secondary">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 2 · Proof bar */}
      <AgencyProofBar />

      {/* Workflows */}
      <AgencyWorkflowMotion workflows={workflows} />

      {/* Before/After */}
      <AgencyBeforeAfter demoUrl="/book-demo#calendar" />

      {/* Module grid */}
      




      <AgencySjBacking />


      {/* 3 reasons to choose ACT */}
      <AgencyWhyAct />


      {/* Agency pack */}
      <section className="bg-slate-light py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-brand-primary lg:text-4xl">
              Get Agency Control Tower Now
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-slate-secondary">
              A single Command Center for SMBs to Scale Faster
            </p>
            <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
              <div className="rounded-xl border-2 border-[hsl(var(--brand-secondary))] bg-background p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-secondary))]">
                  Full version
                </span>
                <p className="mt-3 text-3xl font-bold text-brand-primary">$2,500</p>
                <p className="mt-1 text-sm text-slate-secondary">one-time instalment fees</p>
                <p className="mt-4 text-sm font-medium text-brand-primary">
                  Up to 5 softwares | 20 Agents
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-secondary">
                  Lite version
                </span>
                <p className="mt-3 text-3xl font-bold text-brand-primary">$299</p>
                <p className="mt-1 text-sm text-slate-secondary">one-time, lighter setup</p>
                <p className="mt-4 text-sm font-medium text-brand-primary">
                  A quick way to get started
                </p>
              </div>
            </div>
            <p className="mx-auto mt-8 max-w-xl text-base text-slate-secondary">
              Get a detailed price break up{" "}
              <Link
                to="/agency-pricing"
                className="font-semibold text-[hsl(var(--brand-secondary))] underline underline-offset-4"
              >
                here
              </Link>
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/book-demo#calendar"
                className="inline-flex items-center gap-2 rounded-lg bg-[hsl(var(--brand-secondary))] px-6 py-3 text-sm font-semibold text-background transition-all active:translate-y-[2px]"
              >
                Get Free Demo <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>








      {/* 15 · FAQ */}
      <FaqSection
        title="Frequently asked by agency leaders"
        description="The questions partners and COOs ask in the first call."
        items={faqs}
      />
    </>

  );
};

export default AgencyHub;