import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  BarChart3,
  Bot,
  Calendar,
  FileText,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";
import SmoothImage from "@/components/ui/SmoothImage";
import { resolveLogos, type LogoId } from "@/data/logos";

const toolIds: readonly LogoId[] = [
  "salesforce",
  "bloomerang",
  "blackbaud",
  "inituitquickbooks",
  "googledrive",
  "ms365",
  "zoom",
];

const tools = resolveLogos(toolIds);

const outputs = [
  { icon: Users, title: "Donor Intelligence & Summaries" },
  { icon: ShieldCheck, title: "Board Packets & Governance" },
  { icon: FileText, title: "Grant Tracking & Drafting" },
  { icon: BarChart3, title: "Leadership 360° Operations" },
  { icon: Calendar, title: "Meeting Actions & Follow-ups" },
  { icon: Bot, title: "Repetitive Work Automations" },
];

const Tile = forwardRef<
  HTMLDivElement,
  { className?: string; children?: ReactNode }
>(({ className, children }, ref) => (
  <div
    ref={ref}
    className={cn(
      "z-10 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-2xs transition-all duration-150 hover:border-[#14a800]/40 hover:shadow-xs",
      className,
    )}
  >
    {children}
  </div>
));
Tile.displayName = "Tile";

const RADIUS = 12;

/** Builds an orthogonal (elbow) path: horizontal → vertical channel → horizontal. */
function buildElbow(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  channelX: number,
) {
  if (Math.abs(y1 - y2) < 1) {
    return `M ${x1} ${y1} L ${x2} ${y2}`;
  }

  const dirY = y2 > y1 ? 1 : -1;
  const dirIn = channelX > x1 ? 1 : -1;
  const dirOut = x2 > channelX ? 1 : -1;
  const r = Math.min(
    RADIUS,
    Math.abs(y2 - y1) / 2,
    Math.abs(channelX - x1),
    Math.abs(x2 - channelX),
  );

  return [
    `M ${x1} ${y1}`,
    `L ${channelX - dirIn * r} ${y1}`,
    `Q ${channelX} ${y1} ${channelX} ${y1 + dirY * r}`,
    `L ${channelX} ${y2 - dirY * r}`,
    `Q ${channelX} ${y2} ${channelX + dirOut * r} ${y2}`,
    `L ${x2} ${y2}`,
  ].join(" ");
}

const NonprofitIntegrationsBeam = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const toolRefs = useRef<Array<HTMLDivElement | null>>([]);
  const outputRefs = useRef<Array<HTMLDivElement | null>>([]);

  const [size, setSize] = useState({ width: 0, height: 0 });
  const [paths, setPaths] = useState<string[]>([]);

  const measure = useCallback(() => {
    const container = containerRef.current;
    const hub = hubRef.current;
    if (!container || !hub) return;

    const c = container.getBoundingClientRect();
    const h = hub.getBoundingClientRect();
    setSize({ width: c.width, height: c.height });

    const hubLeft = h.left - c.left;
    const hubRight = h.right - c.left;
    const hubMidY = h.top - c.top + h.height / 2;

    const next: string[] = [];

    const leftRects = toolRefs.current
      .filter(Boolean)
      .map((el) => (el as HTMLDivElement).getBoundingClientRect());
    const rightRects = outputRefs.current
      .filter(Boolean)
      .map((el) => (el as HTMLDivElement).getBoundingClientRect());

    if (leftRects.length) {
      const maxRight = Math.max(...leftRects.map((r) => r.right - c.left));
      const channel = maxRight + (hubLeft - maxRight) / 2;
      leftRects.forEach((r) => {
        next.push(
          buildElbow(
            r.right - c.left,
            r.top - c.top + r.height / 2,
            hubLeft,
            hubMidY,
            channel,
          ),
        );
      });
    }

    if (rightRects.length) {
      const minLeft = Math.min(...rightRects.map((r) => r.left - c.left));
      const channel = hubRight + (minLeft - hubRight) / 2;
      rightRects.forEach((r) => {
        next.push(
          buildElbow(
            hubRight,
            hubMidY,
            r.left - c.left,
            r.top - c.top + r.height / 2,
            channel,
          ),
        );
      });
    }

    setPaths(next);
  }, []);

  useEffect(() => {
    measure();
    const raf = requestAnimationFrame(measure);
    const t = setTimeout(measure, 400);

    const container = containerRef.current;
    const ro =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    if (ro && container) ro.observe(container);
    window.addEventListener("resize", measure);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
      ro?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  return (
    <div className="relative mx-auto w-full max-w-6xl">
      <div
        ref={containerRef}
        className="relative mx-auto grid w-full items-center gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.1fr)_auto_minmax(0,1.2fr)] lg:gap-14 xl:gap-20"
      >
        {/* Left: Existing Tools */}
        <div className="flex flex-col items-center gap-2.5 lg:items-end">
          <div className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-400">
            Your Existing Tools
          </div>
          {tools.map((tool, i) => (
            <Tile
              key={tool.id}
              className="w-full sm:w-64 lg:w-fit"
              ref={(el) => {
                toolRefs.current[i] = el;
              }}
            >
              <SmoothImage
                src={tool.src}
                alt={tool.name}
                wrapperClassName="h-5 w-5 shrink-0 bg-transparent"
                className="h-5 w-5 object-contain"
              />
              <span className="text-xs font-semibold text-slate-800 sm:text-sm">
                {tool.name === "Intuit QuickBooks" ? "QuickBooks" : tool.name}
              </span>
            </Tile>
          ))}
        </div>

        {/* Center: The Nonprofit Control Tower Hub (Clean & Focused) */}
        <div className="flex flex-col items-center justify-center">
          <div className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400 lg:hidden">
            Unified Hub
          </div>
          <Tile
            ref={hubRef}
            className="w-full max-w-xs sm:w-60 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-[#14a800] bg-white p-6 text-center shadow-[0_0_50px_-12px_rgba(20,168,0,0.35)] sm:py-8"
          >
            <div className="inline-flex items-center justify-center h-10 w-10 rounded-2xl bg-[#e7f5e3] text-[#14a800] mb-1">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="text-xl sm:text-2xl font-black tracking-tight text-[#0c180a] leading-tight">
              Nonprofit
              <br />
              Control Tower
            </div>
          </Tile>
        </div>

        {/* Right: Connected Outcomes & System Capabilities */}
        <div className="flex flex-col items-center gap-2.5 lg:items-start">
          <div className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-400">
            Delivered Outcomes
          </div>
          {outputs.map((output, i) => {
            const Icon = output.icon;
            return (
              <Tile
                key={output.title}
                className="w-full sm:w-64 lg:w-fit py-2.5"
                ref={(el) => {
                  outputRefs.current[i] = el;
                }}
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#e7f5e3] text-[#14a800]">
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-semibold text-slate-800 sm:text-sm block">
                    {output.title}
                  </span>
                  {"subtitle" in output && output.subtitle && (
                    <span className="text-[10px] text-slate-400 font-medium block">
                      {output.subtitle}
                    </span>
                  )}
                </div>
              </Tile>
            );
          })}
        </div>

        {/* Dynamic Orthogonal SVG Connector Beams */}
        <svg
          className="pointer-events-none absolute inset-0 hidden lg:block"
          width={size.width}
          height={size.height}
          viewBox={`0 0 ${size.width} ${size.height}`}
          fill="none"
          aria-hidden="true"
        >
          {paths.map((d, i) => (
            <path
              key={i}
              d={d}
              stroke="#14a800"
              strokeOpacity={0.45}
              strokeWidth={1.5}
              strokeLinecap="round"
              fill="none"
            />
          ))}
        </svg>
      </div>

      <p className="mt-8 text-center text-sm font-medium text-slate-500">
        One operating picture for leadership, staff, and your board.
      </p>
    </div>
  );
};

export default NonprofitIntegrationsBeam;
