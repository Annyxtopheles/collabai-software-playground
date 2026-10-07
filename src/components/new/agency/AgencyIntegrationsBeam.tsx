import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  Brain,
  FolderKanban,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";
import SmoothImage from "@/components/ui/SmoothImage";
import { resolveLogos } from "@/data/logos";

const toolIds = [
  "hubspot",
  "monday",
  "notion",
  "zoom",
  "slack",
  "googledrive",
  "github",
] as const;

const tools = resolveLogos(toolIds);

const outputs = [
  { icon: FolderKanban, title: "Projects & Delivery" },
  { icon: TrendingUp, title: "BD & Pipeline" },
  { icon: Users, title: "Teams, OKRs, Productivity" },
  { icon: Brain, title: "Meetings & Knowledge" },
  { icon: Target, title: "EOS / L10" },
  { icon: Sparkles, title: "AI Agents" },
];

const Tile = forwardRef<
  HTMLDivElement,
  { className?: string; children?: ReactNode }
>(({ className, children }, ref) => (
  <div
    ref={ref}
    className={cn(
      "z-10 flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 shadow-sm",
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

const AgencyIntegrationsBeam = () => {
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
    <div className="mt-6">
      <div
        ref={containerRef}
        className="relative mx-auto grid w-full max-w-5xl items-center gap-4 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-16 xl:gap-20"
      >
        {/* Left: the tools you already use */}
        <div className="flex flex-col items-start gap-2 lg:items-end">
          {tools.map((tool, i) => (
            <Tile
              key={tool.id}
              className="w-fit"
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
              <span className="text-xs font-medium text-brand-primary sm:text-sm">
                {tool.name}
              </span>
            </Tile>
          ))}
        </div>

        {/* Centre: the hub */}
        <div className="flex justify-center">
          <Tile
            ref={hubRef}
            className="w-36 flex-col items-center justify-center gap-2 border-2 border-[hsl(var(--brand-secondary))] bg-card px-3 py-4 text-center shadow-[0_0_40px_-16px_hsl(var(--brand-secondary)/0.7)] sm:w-40 sm:py-5"
          >
            <span className="text-sm font-bold uppercase tracking-wide text-brand-primary sm:text-base">
              Agency
              <br />
              Control Tower
            </span>
          </Tile>
        </div>

        {/* Right: what you get */}
        <div className="flex flex-col items-start gap-1.5">
          {outputs.map((output, i) => {
            const Icon = output.icon;
            return (
              <Tile
                key={output.title}
                className="w-fit py-1.5"
                ref={(el) => {
                  outputRefs.current[i] = el;
                }}
              >
                <Icon className="h-4 w-4 shrink-0 text-[hsl(var(--brand-secondary))]" />
                <span className="text-xs font-semibold text-brand-primary sm:text-sm">
                  {output.title}
                </span>
              </Tile>
            );
          })}
        </div>

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
              stroke="hsl(var(--brand-secondary))"
              strokeOpacity={0.45}
              strokeWidth={1.5}
              strokeLinecap="round"
              fill="none"
            />
          ))}
        </svg>
      </div>

      <p className="mt-6 text-center text-base text-slate-secondary">
        One operating picture for leadership.
      </p>
    </div>
  );
};

export default AgencyIntegrationsBeam;
