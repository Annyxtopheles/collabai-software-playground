import { useRef, useState, type ReactNode } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import {
  AlertCircle,
  Check,
  Clock,
  Database,
  FileSpreadsheet,
  Layers,
  RefreshCw,
  Users,
  Zap,
} from "lucide-react";

const GREEN = "#14a800";
const INK = "#0c180a";

type ProblemIconKey =
  | "database"
  | "spreadsheet"
  | "mail"
  | "calendar-ticket"
  | "doc-export"
  | "checklist"
  | "bar-chart"
  | "hourglass"
  | "doc-sparkle"
  | "grant-doc"
  | "cleanup"
  | "five-systems"
  | "three-sheets"
  | "people-eye"
  | "target";

/**
 * Purpose-drawn two-tone SVG artwork (Nonprofit green #14a800 + dark ink #0c180a)
 * matching the exact visual style of AgencyWorkflowMotion.tsx.
 */
const StepArtwork = ({ icon }: { icon: ProblemIconKey }) => {
  const common = {
    viewBox: "0 0 32 32",
    className: "h-full w-full [&_*]:[stroke-width:2.2]",
    fill: "none" as const,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (icon) {
    case "database":
      return (
        <svg {...common}>
          <ellipse cx="16" cy="8" rx="10" ry="4" stroke={INK} />
          <path d="M6 8v8c0 2.2 4.5 4 10 4s10-1.8 10-4V8" stroke={INK} />
          <path d="M6 16v8c0 2.2 4.5 4 10 4s10-1.8 10-4v-8" stroke={GREEN} />
          <circle cx="21" cy="14" r="1.5" fill={GREEN} stroke="none" />
          <circle cx="21" cy="22" r="1.5" fill={GREEN} stroke="none" />
        </svg>
      );
    case "spreadsheet":
      return (
        <svg {...common}>
          <rect x="5" y="4" width="22" height="24" rx="2.5" stroke={INK} />
          <path d="M5 11h22M5 18h22M13 11v17" stroke={GREEN} />
          <rect x="8" y="6.5" width="6" height="2" rx="1" fill={GREEN} stroke="none" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="4" y="7" width="24" height="18" rx="2.5" stroke={INK} />
          <path d="M5.5 9l10.5 8 10.5-8" stroke={GREEN} />
        </svg>
      );
    case "calendar-ticket":
      return (
        <svg {...common}>
          <rect x="4" y="6" width="24" height="21" rx="2.5" stroke={INK} />
          <path d="M4 12h24M10 4v4M22 4v4" stroke={INK} />
          <circle cx="11" cy="17" r="1.6" fill={GREEN} stroke="none" />
          <circle cx="16" cy="17" r="1.6" fill={GREEN} stroke="none" />
          <circle cx="21" cy="17" r="1.6" fill={GREEN} stroke="none" />
          <path d="M10 22h12" stroke={GREEN} />
        </svg>
      );
    case "doc-export":
      return (
        <svg {...common}>
          <path d="M7 3h12l6 6v20H7z" stroke={INK} />
          <path d="M19 3v6h6" stroke={INK} />
          <path d="M16 13v10m0 0l-3.5-3.5M16 23l3.5-3.5" stroke={GREEN} />
        </svg>
      );
    case "checklist":
      return (
        <svg {...common}>
          <rect x="4" y="6" width="7" height="7" rx="1.8" stroke={GREEN} />
          <rect x="4" y="19" width="7" height="7" rx="1.8" stroke={GREEN} />
          <path d="M5.8 9.4l1.8 1.8 3-3.4" stroke={GREEN} />
          <path d="M5.8 22.4l1.8 1.8 3-3.4" stroke={GREEN} />
          <path d="M15 8h13M15 12h9M15 21h13M15 25h9" stroke={INK} />
        </svg>
      );
    case "bar-chart":
      return (
        <svg {...common}>
          <rect x="5" y="17" width="6" height="10" rx="1.5" fill={INK} stroke="none" />
          <rect x="13" y="12" width="6" height="15" rx="1.5" fill={INK} stroke="none" />
          <rect x="21" y="5" width="6" height="22" rx="1.5" fill={GREEN} stroke="none" />
        </svg>
      );
    case "hourglass":
      return (
        <svg {...common}>
          <path d="M7 4h18M7 28h18" stroke={INK} />
          <path d="M9 4v5c0 4 7 5 7 7s-7 3-7 7v5M23 4v5c0 4-7 5-7 7s7 3 7 7v5" stroke={INK} />
          <path d="M12 24h8l-4-4-4 4z" fill={GREEN} stroke="none" />
        </svg>
      );
    case "doc-sparkle":
      return (
        <svg {...common}>
          <path d="M7 3h12l6 6v20H7z" stroke={INK} />
          <path d="M19 3v6h6" stroke={INK} />
          <path d="M11 14h10M11 19h10M11 24h6" stroke={GREEN} />
          <path
            d="M26 2l1.2 3.1L30.3 6.3l-3.1 1.2L26 10.6l-1.2-3.1L21.7 6.3l3.1-1.2z"
            fill={GREEN}
            stroke="none"
          />
        </svg>
      );
    case "grant-doc":
      return (
        <svg {...common}>
          <path d="M6 4h14l6 6v18H6z" stroke={INK} />
          <path d="M20 4v6h6" stroke={INK} />
          <path d="M10 15h12M10 20h8" stroke={INK} />
          <circle cx="21" cy="22" r="4" fill={GREEN} stroke="none" />
          <path d="M19.5 22l1 1 2.2-2.2" stroke="#ffffff" strokeWidth={1.8} />
        </svg>
      );
    case "cleanup":
      return (
        <svg {...common}>
          <path d="M7 10h18M10 16h12M13 22h6" stroke={INK} />
          <circle cx="24" cy="10" r="3" fill={GREEN} stroke="none" />
          <circle cx="8" cy="16" r="3" fill={GREEN} stroke="none" />
          <circle cx="21" cy="22" r="3" fill={GREEN} stroke="none" />
        </svg>
      );
    case "five-systems":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="10" height="9" rx="2" stroke={INK} />
          <rect x="18" y="5" width="10" height="9" rx="2" stroke={GREEN} />
          <rect x="4" y="18" width="10" height="9" rx="2" stroke={GREEN} />
          <rect x="18" y="18" width="10" height="9" rx="2" stroke={INK} />
          <circle cx="16" cy="16" r="2.5" fill={GREEN} stroke="none" />
        </svg>
      );
    case "three-sheets":
      return (
        <svg {...common}>
          <rect x="4" y="8" width="16" height="19" rx="2" stroke={INK} />
          <path d="M9 5h15a2 2 0 0 1 2 2v17" stroke={GREEN} />
          <path d="M8 14h8M8 18h8M8 22h5" stroke={GREEN} />
        </svg>
      );
    case "people-eye":
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="4.5" fill={GREEN} stroke="none" />
          <path d="M4 26c0-4.5 3.6-7.5 8-7.5s8 3 8 7.5" stroke={INK} />
          <path
            d="M16 23c2-3.2 4.4-4.8 7.2-4.8s5.2 1.6 7.2 4.8c-2 3.2-4.4 4.8-7.2 4.8S18 26.2 16 23z"
            fill={GREEN}
            stroke="none"
          />
          <circle cx="23.2" cy="23" r="2.2" fill="#ffffff" stroke="none" />
        </svg>
      );
    case "target":
      return (
        <svg {...common}>
          <circle cx="16" cy="16" r="11" stroke={INK} />
          <circle cx="16" cy="16" r="6.5" stroke={GREEN} />
          <circle cx="16" cy="16" r="2.5" fill={GREEN} stroke="none" />
        </svg>
      );
    default:
      return null;
  }
};

const IconTile = ({ icon }: { icon: ProblemIconKey }) => (
  <span
    aria-hidden
    className="flex h-[34px] w-[34px] shrink-0 items-center justify-center"
  >
    <StepArtwork icon={icon} />
  </span>
);

interface ProblemStep {
  tag: string;
  label: string;
  icon: ProblemIconKey;
  nodeIcon: typeof Database;
}

interface ProblemCardData {
  title: string;
  triggerLabel: string;
  triggerText: string;
  steps: ProblemStep[];
  copyContent: ReactNode;
  outcomeIcon: ProblemIconKey;
}

const problemCards: ProblemCardData[] = [
  {
    title: "Your donor information is\u00a0scattered.",
    triggerLabel: "Reality",
    triggerText: "Every tool holds a different piece",
    steps: [
      {
        tag: "CRM",
        label: "Donor profiles & pledge history",
        icon: "database",
        nodeIcon: Database,
      },
      {
        tag: "SHEETS",
        label: "Event check-ins & custom lists",
        icon: "spreadsheet",
        nodeIcon: FileSpreadsheet,
      },
      {
        tag: "FINANCE",
        label: "Gift threads & accounting entries",
        icon: "mail",
        nodeIcon: Layers,
      },
      {
        tag: "EVENTS",
        label: "Ticket sales & attendance logs",
        icon: "calendar-ticket",
        nodeIcon: AlertCircle,
      },
    ],
    copyContent: (
      <>
        CRM, spreadsheets, email, accounting software and event platforms all
        hold different pieces of the&nbsp;story.
      </>
    ),
    outcomeIcon: "database",
  },
  {
    title: "Reporting takes too\u00a0long.",
    triggerLabel: "Trigger",
    triggerText: "Leadership or board meeting ahead",
    steps: [
      {
        tag: "STAFF",
        label: "Pull raw CSV exports across tools",
        icon: "doc-export",
        nodeIcon: Users,
      },
      {
        tag: "STAFF",
        label: "Cross-check mismatched numbers",
        icon: "checklist",
        nodeIcon: RefreshCw,
      },
      {
        tag: "STAFF",
        label: "Format sheets & charts into packets",
        icon: "bar-chart",
        nodeIcon: FileSpreadsheet,
      },
      {
        tag: "DELAY",
        label: "Hours lost before every meeting",
        icon: "hourglass",
        nodeIcon: Clock,
      },
    ],
    copyContent: (
      <>
        Staff spend hours gathering information before leadership or
        board&nbsp;meetings.
      </>
    ),
    outcomeIcon: "hourglass",
  },
  {
    title: "Too much work is still\u00a0manual.",
    triggerLabel: "Trigger",
    triggerText: "Daily & weekly nonprofit operations",
    steps: [
      {
        tag: "SUMMARIES",
        label: "Typing notes & chasing action items",
        icon: "doc-sparkle",
        nodeIcon: RefreshCw,
      },
      {
        tag: "FOLLOW-UPS",
        label: "Drafting donor & committee emails",
        icon: "mail",
        nodeIcon: Users,
      },
      {
        tag: "GRANTS",
        label: "Copy-pasting metrics for reports",
        icon: "grant-doc",
        nodeIcon: FileSpreadsheet,
      },
      {
        tag: "CLEANUP",
        label: "Fixing duplicate records by hand",
        icon: "cleanup",
        nodeIcon: Clock,
      },
    ],
    copyContent: (
      <>
        Follow-ups, summaries, grant reporting, meeting actions and data cleanup
        consume valuable staff&nbsp;time.
      </>
    ),
    outcomeIcon: "checklist",
  },
  {
    title: "Leadership lacks one clear\u00a0view.",
    triggerLabel: "Trigger",
    triggerText: "ED asks: “Where do we stand?”",
    steps: [
      {
        tag: "5 SYSTEMS",
        label: "Log into 5 separate tools",
        icon: "five-systems",
        nodeIcon: Layers,
      },
      {
        tag: "3 SHEETS",
        label: "Stitch 3 offline trackers together",
        icon: "three-sheets",
        nodeIcon: FileSpreadsheet,
      },
      {
        tag: "WAITING",
        label: "Wait on leads to confirm figures",
        icon: "people-eye",
        nodeIcon: Users,
      },
      {
        tag: "SILOED",
        label: "No single real-time view",
        icon: "target",
        nodeIcon: AlertCircle,
      },
    ],
    copyContent: (
      <>
        When an Executive Director asks,{" "}
        <strong className="font-bold text-slate-900">
          “Where do we stand?”
        </strong>{" "}
        The answer should not require five systems and three&nbsp;spreadsheets.
      </>
    ),
    outcomeIcon: "target",
  },
];

interface ProblemInfographicCardProps {
  card: ProblemCardData;
  progress: number;
  outcomeOn: boolean;
  reduceMotion: boolean;
}

const ProblemInfographicCard = ({
  card,
  progress,
  outcomeOn,
  reduceMotion,
}: ProblemInfographicCardProps) => {
  const total = card.steps.length;
  const stepProgress = reduceMotion ? 1 : Math.min(progress / 0.85, 1);
  const revealed = reduceMotion
    ? total
    : Math.max(1, Math.min(total, Math.round(stepProgress * total)));
  const showOutcome = reduceMotion || (revealed >= total && outcomeOn);
  const railProgress = total === 0 ? 0 : Math.min(revealed / total, 1);

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition-all duration-200 hover:border-[#14a800]/40 hover:shadow-md">
      <h3 className="text-base sm:text-lg font-bold text-[#0c180a] leading-snug min-h-[2.75rem]">
        {card.title}
      </h3>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-[#14a800]/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#14a800]">
          <Zap className="h-3 w-3" /> {card.triggerLabel}
        </span>
        <span className="text-xs font-medium text-slate-600">
          {card.triggerText}
        </span>
      </div>

      <div className="relative mt-5 pl-7 flex-1">
        <div className="absolute left-[9px] top-2 h-[calc(100%-1rem)] w-[2px] rounded bg-slate-200" />
        <motion.div
          className="absolute left-[9px] top-2 w-[2px] rounded bg-[#14a800]"
          initial={false}
          animate={{ height: `calc((100% - 1rem) * ${railProgress})` }}
          transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
        />

        <ol className="space-y-3">
          {card.steps.map((s, i) => {
            const NodeIcon = s.nodeIcon;
            const isDone = i < revealed - 1 || (showOutcome && i < revealed);
            const isActive = i === revealed - 1 && !showOutcome;
            const isVisible = i < revealed;

            return (
              <li key={`${card.title}-${i}`} className="relative">
                <span
                  className={`absolute -left-7 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors ${
                    isVisible
                      ? "border-[#14a800] bg-[#14a800] text-white"
                      : "border-slate-200 bg-white text-slate-400"
                  }`}
                >
                  {isDone ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <NodeIcon className="h-3 w-3" />
                  )}
                </span>

                <motion.div
                  initial={false}
                  animate={{
                    opacity: isVisible ? 1 : 0.4,
                    x: isVisible ? 0 : reduceMotion ? 0 : 6,
                  }}
                  transition={{ duration: reduceMotion ? 0 : 0.3 }}
                  className={`flex items-center gap-2.5 rounded-xl border px-2.5 py-2 transition-colors ${
                    isActive
                      ? "border-[#14a800]/50 bg-[#14a800]/5"
                      : "border-slate-200/90 bg-white"
                  }`}
                >
                  <IconTile icon={s.icon} />
                  <span className="min-w-0 leading-snug [text-wrap:pretty]">
                    <span className="mr-1.5 inline-block rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-slate-600">
                      {s.tag}
                    </span>
                    <span className="text-xs font-medium text-[#0c180a]">
                      {s.label}
                    </span>
                  </span>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Bottom Callout Box containing the exact copy sentence */}
      <div className="mt-5 rounded-xl border border-[#14a800]/30 bg-[#14a800]/5 px-3.5 py-3">
        <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 [text-wrap:pretty]">
          {card.copyContent}
        </p>
      </div>
    </div>
  );
};

export const NonprofitProblemInfographics = () => {
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0.35);
  const [outcomeOn, setOutcomeOn] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.7", "end 0.75"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const p = Math.min(1, Math.max(0.35, v));
    setProgress((prev) => Math.max(prev, p));
    setOutcomeOn((on) => on || p > 0.85);
  });

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-[#0c180a] sm:text-5xl xl:text-[54px] text-balance">
            <span className="block">Your mission should not be buried</span>
            <span className="block">under operational busywork.</span>
          </h2>
        </div>

        {/* 4 Side-by-Side (1 Row) Agency-Style Infographic Cards */}
        <div className="mx-auto mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problemCards.map((card) => (
            <ProblemInfographicCard
              key={card.title}
              card={card}
              progress={progress}
              outcomeOn={outcomeOn}
              reduceMotion={Boolean(reduceMotion)}
            />
          ))}
        </div>

        {/* Impactful Guiding Statement */}
        <div className="mt-14 sm:mt-16 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-[#0c180a]">
            That is where the{" "}
            <span className="text-[#14a800]">Nonprofit Control Tower</span>{" "}
            comes in.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default NonprofitProblemInfographics;
