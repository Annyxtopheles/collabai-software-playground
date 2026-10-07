import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { Bot, Check, Cpu, User, Zap } from "lucide-react";
import slackLogo from "@/assets/logos/slack.svg";
import type {
  VerticalWorkflow,
  VerticalWorkflowStep,
  WorkflowIconKey,
} from "@/data/verticals";

interface AgencyWorkflowMotionProps {
  workflows: VerticalWorkflow[];
}

const actorIcon: Record<VerticalWorkflowStep["actor"], typeof Bot> = {
  agent: Bot,
  human: User,
  system: Cpu,
};

/** Ties the last two words together so no single word is left on its own line. */
const noOrphan = (text: string) =>
  text.replace(/\s+(\S+)\s*$/, "\u00a0$1");

const BLUE = "hsl(var(--brand-secondary))";
const INK = "hsl(var(--brand-primary))";

/**
 * Purpose-drawn two-tone artwork (brand blue + ink). Decorative only —
 * the step text carries the meaning.
 */
const StepIcon = ({ icon }: { icon: WorkflowIconKey }) => {
  const common = {
    viewBox: "0 0 32 32",
    className: "h-full w-full [&_*]:[stroke-width:2.6]",
    fill: "none" as const,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (icon) {
    case "doc-sparkle":
      return (
        <svg {...common}>
          <path d="M7 3h12l6 6v20H7z" stroke={INK} strokeWidth={2} />
          <path d="M19 3v6h6" stroke={INK} strokeWidth={2} />
          <path
            d="M11 14h10M11 19h10M11 24h6"
            stroke={BLUE}
            strokeWidth={2}
          />
          <path
            d="M26 2l1.2 3.1L30.3 6.3l-3.1 1.2L26 10.6l-1.2-3.1L21.7 6.3l3.1-1.2z"
            fill={BLUE}
          />
        </svg>
      );
    case "checklist":
      return (
        <svg {...common}>
          <rect
            x="4"
            y="6"
            width="7"
            height="7"
            rx="2"
            stroke={BLUE}
            style={{ strokeWidth: 1.5 }}
          />
          <rect
            x="4"
            y="19"
            width="7"
            height="7"
            rx="2"
            stroke={BLUE}
            style={{ strokeWidth: 1.5 }}
          />
          <path
            d="M5.8 9.4l1.8 1.8 3-3.4"
            stroke={BLUE}
            style={{ strokeWidth: 1.6 }}
          />
          <path
            d="M5.8 22.4l1.8 1.8 3-3.4"
            stroke={BLUE}
            style={{ strokeWidth: 1.6 }}
          />
          <path
            d="M15 8h13M15 12h9M15 21h13M15 25h9"
            stroke={INK}
            strokeWidth={2}
          />
        </svg>
      );
    case "slack":
      return <img src={slackLogo} alt="" className="h-full w-full object-contain" />;
    case "person-check":
      return (
        <svg {...common}>
          <circle cx="13" cy="10" r="5" fill={BLUE} />
          <path
            d="M4 27c0-5 4-8 9-8s9 3 9 8"
            stroke={INK}
            strokeWidth={2}
          />
          <circle cx="24" cy="23" r="6" fill={BLUE} />
          <path
            d="M21.4 23.2l1.9 1.9 3.5-4"
            stroke="hsl(var(--background))"
            strokeWidth={2}
          />
        </svg>
      );
    case "bar-chart":
      return (
        <svg {...common}>
          <rect x="5" y="17" width="6" height="10" rx="1.5" fill={INK} />
          <rect x="13" y="12" width="6" height="15" rx="1.5" fill={INK} />
          <rect x="21" y="5" width="6" height="22" rx="1.5" fill={BLUE} />
        </svg>
      );
    case "document":
      return (
        <svg {...common}>
          <path d="M7 3h12l6 6v20H7z" stroke={INK} strokeWidth={2} />
          <path d="M19 3v6h6" stroke={INK} strokeWidth={2} />
          <path
            d="M11 14h10M11 19h10M11 24h6"
            stroke={BLUE}
            strokeWidth={2}
          />
        </svg>
      );
    case "mail":
      return (
        <svg
          {...common}
          viewBox="0 0 52 52"
          className="h-full w-full"
          strokeWidth={4.225}
        >
          <path d="M6.5 12.625L26 27.25L45.5 12.625" stroke={BLUE} />
          <path
            d="M42.25 11.375H9.75C7.05761 11.375 4.875 13.5576 4.875 16.25V35.75C4.875 38.4424 7.05761 40.625 9.75 40.625H42.25C44.9424 40.625 47.125 38.4424 47.125 35.75V16.25C47.125 13.5576 44.9424 11.375 42.25 11.375Z"
            stroke={INK}
          />
        </svg>
      );
    case "people-eye":
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="5" fill={BLUE} />
          <path d="M3 26c0-5 4-8 9-8s9 3 9 8" stroke={INK} strokeWidth={2} />
          <circle cx="23" cy="12" r="4" stroke={INK} strokeWidth={2} />
          <path
            d="M15.5 24c2.3-3.7 4.9-5.6 8-5.6S29.2 20.3 31.5 24c-2.3 3.7-4.9 5.6-8 5.6S17.8 27.7 15.5 24z"
            fill={BLUE}
          />
          <circle cx="23.5" cy="24" r="2.6" fill="#ffffff" />
        </svg>
      );
    case "target":
      return (
        <svg
          {...common}
          viewBox="0 0 57 57"
          className="h-full w-full"
          strokeWidth={4.225}
        >
          <path
            d="M24.375 50.5C34.2471 50.5 42.25 42.4971 42.25 32.625C42.25 22.7529 34.2471 14.75 24.375 14.75C14.5029 14.75 6.5 22.7529 6.5 32.625C6.5 42.4971 14.5029 50.5 24.375 50.5Z"
            stroke={BLUE}
          />
          <path
            d="M24.375 42.375C29.7598 42.375 34.125 38.0098 34.125 32.625C34.125 27.2402 29.7598 22.875 24.375 22.875C18.9902 22.875 14.625 27.2402 14.625 32.625C14.625 38.0098 18.9902 42.375 24.375 42.375Z"
            stroke={BLUE}
          />
          <path
            d="M24.3781 35.5492C25.9936 35.5492 27.3031 34.2397 27.3031 32.6242C27.3031 31.0088 25.9936 29.6992 24.3781 29.6992C22.7627 29.6992 21.4531 31.0088 21.4531 32.6242C21.4531 34.2397 22.7627 35.5492 24.3781 35.5492Z"
            fill={BLUE}
            stroke="none"
          />
          <path d="M41.5 16L24.375 32.625" stroke={INK} />
          <path d="M49.9375 15.9375H41V7" stroke={INK} />
        </svg>
      );
    default:
      return null;
  }
};

const IconTile = ({ icon }: { icon: WorkflowIconKey }) => (
  <span
    aria-hidden
    className="flex h-[52px] w-[52px] shrink-0 items-center justify-center"
  >
    <StepIcon icon={icon} />
  </span>
);

interface WorkflowCardProps {
  workflow: VerticalWorkflow;
  progress: number;
  outcomeOn: boolean;
  reduceMotion: boolean;
}

const WorkflowCard = ({
  workflow,
  progress,
  outcomeOn,
  reduceMotion,
}: WorkflowCardProps) => {
  const total = workflow.steps.length;
  // Reserve the last slice of the scroll range for the outcome reveal.
  const stepProgress = reduceMotion ? 1 : Math.min(progress / 0.85, 1);
  const revealed = reduceMotion
    ? total
    : Math.min(total, Math.round(stepProgress * total));
  const showOutcome = reduceMotion || (revealed >= total && outcomeOn);
  const railProgress = total === 0 ? 0 : Math.min(revealed / total, 1);

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h3 className="text-base font-semibold text-brand-primary">
        {workflow.name}
      </h3>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-secondary))]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
          <Zap className="h-3.5 w-3.5" /> Trigger
        </span>
        <span className="text-sm font-medium text-brand-primary">
          {workflow.trigger}
        </span>
      </div>

      <div className="relative mt-6 pl-8">
        <div className="absolute left-[11px] top-2 h-[calc(100%-1rem)] w-[2px] rounded bg-border" />
        <motion.div
          className="absolute left-[11px] top-2 w-[2px] rounded bg-[hsl(var(--brand-secondary))]"
          initial={false}
          animate={{ height: `calc((100% - 1rem) * ${railProgress})` }}
          transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
        />

        <ol className="space-y-5">
          {workflow.steps.map((s, i) => {
            const Icon = actorIcon[s.actor];
            const isDone = i < revealed - 1 || (showOutcome && i < revealed);
            const isActive = i === revealed - 1 && !showOutcome;
            const isVisible = i < revealed;
            return (
              <li key={`${workflow.name}-${i}`} className="relative">
                <span
                  className={`absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 transition-colors ${
                    isVisible
                      ? "border-[hsl(var(--brand-secondary))] bg-[hsl(var(--brand-secondary))] text-background"
                      : "border-border bg-background text-slate-secondary"
                  }`}
                >
                  {isDone ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : (
                    <Icon className="h-3.5 w-3.5" />
                  )}
                </span>
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isVisible ? 1 : 0.35,
                    x: isVisible ? 0 : reduceMotion ? 0 : 8,
                  }}
                  transition={{ duration: reduceMotion ? 0 : 0.3 }}
                  className={`flex items-center gap-3 rounded-xl border px-3 py-2 transition-colors ${
                    isActive
                      ? "border-[hsl(var(--brand-secondary))]/50 bg-[hsl(var(--brand-secondary))]/5"
                      : "border-border bg-background"
                  }`}
                >
                  {s.icon ? <IconTile icon={s.icon} /> : null}
                  <span className="min-w-0 [text-wrap:pretty]">
                    <span className="mr-2 inline-block rounded bg-slate-light px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-slate-secondary">
                      {s.actor}
                    </span>
                    <span className="text-sm text-brand-primary">
                      {noOrphan(s.label)}
                    </span>
                  </span>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Always occupies space so the card height never changes mid-scroll. */}
      <motion.div
        initial={false}
        animate={{
          opacity: showOutcome ? 1 : 0,
          y: showOutcome || reduceMotion ? 0 : 8,
        }}
        transition={{ duration: reduceMotion ? 0 : 0.3 }}
        aria-hidden={!showOutcome}
        className={`mt-6 rounded-xl border border-[hsl(var(--brand-secondary))]/30 bg-[hsl(var(--brand-secondary))]/5 px-4 py-3 ${
          showOutcome ? "" : "pointer-events-none"
        }`}
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
          Outcome
        </span>
        <div className="mt-1 flex items-center gap-3">
          {workflow.outcomeIcon ? <IconTile icon={workflow.outcomeIcon} /> : null}
          <p className="text-sm text-brand-primary [text-wrap:pretty]">
            {noOrphan(workflow.outcome)}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const AgencyWorkflowMotion = ({ workflows }: AgencyWorkflowMotionProps) => {
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [outcomeOn, setOutcomeOn] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.55", "end 0.75"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const p = Math.min(1, Math.max(0, v));
    // Completes once and stays complete; resets only on page reload.
    setProgress((prev) => Math.max(prev, p));
    setOutcomeOn((on) => on || p > 0.92);
  });

  if (workflows.length === 0) return null;

  return (
    <section ref={sectionRef} className="bg-background py-14">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-brand-primary lg:text-4xl">
            Agency Workflow in Motion
          </h2>
          <p className="mt-3 text-base text-slate-secondary">
            Scroll to watch real workflows run themselves, step by step.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2">
          {workflows.map((w) => (
            <WorkflowCard
              key={w.name}
              workflow={w}
              progress={progress}
              outcomeOn={outcomeOn}
              reduceMotion={Boolean(reduceMotion)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgencyWorkflowMotion;
