import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import CountUp from "@/components/ui/CountUp";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import pieClock from "@/assets/cai-pie-clock.svg.asset.json";

interface AgencyBeforeAfterProps {
  demoUrl: string;
}

const BLUE = "hsl(var(--brand-secondary))";
const INK = "hsl(var(--brand-primary))";

type ResultIconKey =
  | "clock"
  | "doc-sparkle"
  | "papers"
  | "checklist"
  | "magnifier"
  | "smart-search"
  | "calendar"
  | "target";

/** Purpose-drawn two-tone artwork (brand blue + ink). Decorative only. */
const ResultIcon = ({ icon }: { icon: ResultIconKey }) => {
  const common = {
    viewBox: "0 0 32 32",
    className: "h-full w-full",
    fill: "none" as const,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (icon) {
    case "clock":
      return (
        <svg {...common}>
          <circle cx="16" cy="16" r="12" stroke={BLUE} strokeWidth={2.4} />
          <path d="M16 8.5V16l5.5 3.5" stroke={INK} strokeWidth={2.4} />
        </svg>
      );
    case "doc-sparkle":
      return (
        <svg {...common}>
          <path d="M6 3h12l6 6v20H6z" stroke={INK} strokeWidth={2} />
          <path d="M18 3v6h6" stroke={INK} strokeWidth={2} />
          <path d="M10 15h9M10 20h9M10 25h5" stroke={INK} strokeWidth={1.8} />
          <path
            d="M26 2l1.3 3.2L30.5 6.5l-3.2 1.3L26 11l-1.3-3.2L21.5 6.5l3.2-1.3z"
            fill={BLUE}
          />
        </svg>
      );
    case "papers":
      return (
        <svg {...common}>
          <path d="M10 3h9l5 5v17h-14z" stroke={INK} strokeWidth={2} />
          <path d="M19 3v5h5" stroke={INK} strokeWidth={2} />
          <path d="M13 13h8M13 17h8M13 21h5" stroke={INK} strokeWidth={1.8} />
          <path d="M20 28H6V10" stroke={BLUE} strokeWidth={2.2} />
        </svg>
      );
    case "checklist":
      return (
        <svg {...common}>
          <rect x="4" y="6" width="7" height="7" rx="2" stroke={INK} strokeWidth={1.6} />
          <rect x="4" y="19" width="7" height="7" rx="2" stroke={INK} strokeWidth={1.6} />
          <path d="M5.8 9.4l1.8 1.8 3-3.4" stroke={BLUE} strokeWidth={2} />
          <path d="M5.8 22.4l1.8 1.8 3-3.4" stroke={BLUE} strokeWidth={2} />
          <path d="M15 8h13M15 12h9M15 21h13M15 25h9" stroke={INK} strokeWidth={2} />
        </svg>
      );
    case "magnifier":
      return (
        <svg {...common}>
          <circle cx="14" cy="14" r="9" stroke={BLUE} strokeWidth={2.4} />
          <path d="M20.5 20.5L28 28" stroke={INK} strokeWidth={3} />
        </svg>
      );
    case "smart-search":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="18" height="22" rx="3" stroke={INK} strokeWidth={2} />
          <path d="M8 10h9M8 14h7" stroke={INK} strokeWidth={1.8} />
          <circle cx="20" cy="20" r="7" fill="hsl(var(--background))" stroke={BLUE} strokeWidth={2.4} />
          <path d="M25 25l4 4" stroke={BLUE} strokeWidth={3} />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="4" y="7" width="24" height="21" rx="3" stroke={INK} strokeWidth={2} />
          <path d="M4 13h24" stroke={BLUE} strokeWidth={3} />
          <path d="M10 4v5M22 4v5" stroke={BLUE} strokeWidth={2.4} />
          <path d="M10 18h4M18 18h4M10 23h4" stroke={INK} strokeWidth={2} />
        </svg>
      );
    case "target":
      return (
        <svg {...common}>
          <circle cx="15" cy="17" r="11" stroke={INK} strokeWidth={2} />
          <circle cx="15" cy="17" r="6" stroke={INK} strokeWidth={2} />
          <circle cx="15" cy="17" r="1.8" fill={BLUE} />
          <path d="M28 4L15 17" stroke={BLUE} strokeWidth={2.4} />
          <path d="M22.5 5.5L28 4l-1.5 5.5" stroke={BLUE} strokeWidth={2.4} />
        </svg>
      );
    default:
      return null;
  }
};

const IconTile = ({ icon }: { icon: ResultIconKey }) => (
  <span
    aria-hidden
    className="flex h-[38px] w-[38px] shrink-0 items-center justify-center"
  >
    <ResultIcon icon={icon} />
  </span>
);

const rows: {
  beforeIcon: ResultIconKey;
  before: string;
  afterIcon: ResultIconKey;
  after: string;
  savings: string;
}[] = [
  {
    beforeIcon: "clock",
    before: "2 hrs writing client status reports",
    afterIcon: "doc-sparkle",
    after: "15 min with an AI draft",
    savings: "-87%",
  },
  {
    beforeIcon: "papers",
    before: "30 min of post-meeting admin",
    afterIcon: "checklist",
    after: "0 min — tasks auto-created in Monday/Notion",
    savings: "-100%",
  },
  {
    beforeIcon: "magnifier",
    before: "45 min hunting context in Notion & Slack",
    afterIcon: "smart-search",
    after: "2 min semantic search across every meeting & doc",
    savings: "-96%",
  },
  {
    beforeIcon: "calendar",
    before: "90 min of L10 prep on Sunday night",
    afterIcon: "target",
    after: "5 min — agenda auto-populated from Rocks & Issues",
    savings: "-94%",
  },
];

const metrics = [
  { value: 40, suffix: "+", label: "Hours saved / week" },
  { value: 2500, suffix: "+", label: "Meetings auto-processed" },
  { value: 10000, suffix: "+", label: "Agent tasks completed" },
  { value: 166, suffix: "", label: "Active projects tracked" },
];

const CONFETTI = Array.from({ length: 12 }, (_, i) => {
  const angle = (i / 12) * Math.PI * 2;
  return {
    x: Math.cos(angle) * (34 + (i % 3) * 8),
    y: Math.sin(angle) * (22 + (i % 2) * 8),
    dash: i % 2 === 0,
    blue: i % 3 !== 0,
    rotate: i * 37,
  };
});

const Confetti = () => (
  <span aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
    {CONFETTI.map((c, i) => (
      <motion.span
        key={i}
        initial={{ x: 0, y: 0, opacity: 1, scale: 0.4 }}
        animate={{ x: c.x, y: c.y, opacity: 0, scale: 1, rotate: c.rotate }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className={`absolute ${c.dash ? "h-1 w-2.5 rounded-sm" : "h-1.5 w-1.5 rounded-full"} ${
          c.blue ? "bg-[hsl(var(--brand-secondary))]" : "bg-brand-primary"
        }`}
      />
    ))}
  </span>
);

const ResultRow = ({ r, index, start, reduce }: { r: (typeof rows)[number]; index: number; start: boolean; reduce: boolean }) => {
  const [done, setDone] = useState(reduce);
  const delay = index * 0.8;
  const fill = (duration: number, ease: "linear" | "easeInOut" = "easeInOut") =>
    reduce
      ? { initial: { scaleX: 1 }, animate: { scaleX: 1 } }
      : {
          initial: { scaleX: 0 },
          animate: { scaleX: start ? 1 : 0 },
          transition: { duration, delay, ease },
        };

  return (
    <li className="grid items-stretch gap-3 sm:grid-cols-[minmax(0,1fr)_1rem_minmax(0,1fr)_6.5rem]">
      <div className="relative flex h-full items-center gap-3 overflow-hidden rounded-lg border border-border bg-slate-light px-4 py-3">
        <motion.span aria-hidden {...fill(60, "linear")} style={{ originX: 0 }} className="absolute inset-0 bg-brand-primary/[0.07]" />
        <span className="relative flex items-center gap-3">
          <IconTile icon={r.beforeIcon} />
          <span className="text-sm text-brand-primary [text-wrap:pretty]">{r.before}</span>
        </span>
      </div>
      <ArrowRight className="mx-auto hidden self-center h-4 w-4 text-slate-secondary sm:block" />
      <div className="relative flex h-full items-center gap-3 overflow-hidden rounded-lg border border-[hsl(var(--brand-secondary))]/30 bg-card px-4 py-3">
        <motion.span
          aria-hidden
          {...fill(1.8)}
          onAnimationComplete={() => start && setDone(true)}
          style={{ originX: 0 }}
          className="absolute inset-0 bg-[hsl(var(--brand-secondary))]/10"
        />
        <span className="relative flex items-center gap-3">
          <IconTile icon={r.afterIcon} />
          <span className="text-sm font-medium text-brand-primary [text-wrap:pretty]">{r.after}</span>
        </span>
      </div>
      <span className="relative self-center justify-self-center">
        {done && !reduce && <Confetti />}
        <motion.span
          initial={reduce ? false : { scale: 0.6, opacity: 0.35 }}
          animate={done ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0.35 }}
          transition={{ type: "spring", stiffness: 420, damping: 12 }}
          className="relative inline-flex items-center gap-1 rounded-full bg-[hsl(var(--brand-secondary))] px-3.5 py-1.5 text-base font-bold text-background shadow-md"
        >
          <ArrowDown className="h-4 w-4" />
          {r.savings.replace("-", "")}
        </motion.span>
      </span>
    </li>
  );
};

const AgencyBeforeAfter = ({ demoUrl }: AgencyBeforeAfterProps) => {
  const { ref: metricsRef, isVisible } = useScrollReveal(0.4);
  const { ref: listRef, isVisible: listVisible } = useScrollReveal(0.3);
  const reduce = useReducedMotion() ?? false;

  return (
  <section className="border-y border-border bg-slate-light py-14">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-brand-primary lg:text-4xl">
          Proven Results
        </h2>
      </div>

      <div ref={listRef} className="mx-auto mt-8 max-w-4xl rounded-2xl border border-border bg-card p-6 sm:p-8">
        <div className="mb-3 hidden gap-3 sm:grid sm:grid-cols-[minmax(0,1fr)_1rem_minmax(0,1fr)_6.5rem]">
          <span />
          <span />
          <span className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
            With Agency Control Tower
          </span>
          <span />
        </div>
        <ul className="space-y-4">
          {rows.map((r, i) => (
            <ResultRow key={i} r={r} index={i} start={listVisible} reduce={reduce} />
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-center gap-5 rounded-2xl border border-[hsl(var(--brand-secondary))]/40 bg-[hsl(var(--brand-secondary))]/5 px-6 py-6 text-center sm:flex-row sm:gap-8 sm:px-10 sm:text-left">
          <img src={pieClock.url} alt="" aria-hidden loading="lazy" decoding="async" className="h-28 w-auto shrink-0" />
          <div className="hidden h-20 w-px shrink-0 bg-[hsl(var(--brand-secondary))]/30 sm:block" />
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-sm font-medium text-slate-secondary">Total time taken</p>
            <div className="mt-3 grid grid-cols-1 items-center justify-items-center gap-x-6 gap-y-1 sm:grid-cols-[auto_auto_auto] sm:justify-items-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-secondary sm:row-start-1 sm:col-start-1">{"\n"}</span>
              <span className="text-2xl font-bold leading-none text-slate-secondary line-through decoration-2 sm:row-start-2 sm:col-start-1 lg:text-3xl">4hrs 45min</span>
              <ArrowRight aria-hidden className="my-2 h-6 w-6 rotate-90 text-[hsl(var(--brand-secondary))] sm:my-0 sm:row-start-2 sm:col-start-2 sm:rotate-0" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary sm:row-start-1 sm:col-start-3">{"\n"}</span>
              <span className="text-4xl font-bold leading-none text-[hsl(var(--brand-secondary))] sm:row-start-2 sm:col-start-3 lg:text-5xl">22 minutes</span>
            </div>
          </div>
        </div>
      </div>

      <div ref={metricsRef} className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="text-center">
            <div className="text-3xl font-bold tracking-tight text-brand-primary lg:text-4xl">
              <CountUp value={m.value} suffix={m.suffix} start={isVisible} />
            </div>
            <div className="mt-1 text-xs uppercase tracking-wider text-slate-secondary">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-base text-slate-secondary">
        Find out how you can get similar results for your team.
      </p>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        <Link
          to={demoUrl}
          className="inline-flex items-center gap-2 rounded-lg bg-[hsl(var(--brand-secondary))] px-6 py-3 text-sm font-semibold text-background transition-all hover:shadow-lg active:translate-y-[2px]"
        >
          Get Free Demo <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
  );
};


export default AgencyBeforeAfter;
