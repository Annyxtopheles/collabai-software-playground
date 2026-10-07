import { useRef, type ReactNode } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Handshake } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import {
  LOGOS,
  resolveLogos,
  type LogoId,
  type LogoItem,
} from "@/data/logos";

export type LogoStripProps = {
  /**
   * Logos to show. Pass catalog ids for a subset, or full logo objects
   * (including custom ones not in the catalog).
   * Defaults to the full `LOGOS` catalog.
   */
  logos?: readonly LogoId[] | readonly LogoItem[];
  /**
   * `carousel` — sliding strip with optional autoplay (default; e.g. /agency).
   * `static` — show every logo at once in a wrap grid (e.g. card interiors).
   */
  mode?: "carousel" | "static";
  /** Eyebrow / badge label above the strip */
  heading?: ReactNode;
  /** Hide the heading badge */
  hideHeading?: boolean;
  /**
   * Compact layout for nesting inside cards / tight containers.
   * Skips the outer page container chrome.
   */
  embedded?: boolean;
  className?: string;
  /** Extra classes on each logo tile */
  itemClassName?: string;
  /** Autoplay delay in ms; set false to disable. Only applies when mode="carousel". */
  autoplay?: number | false;
  /** Accessible name for the section */
  "aria-label"?: string;
};

function isLogoIdList(
  logos: readonly LogoId[] | readonly LogoItem[],
): logos is readonly LogoId[] {
  return typeof logos[0] === "string";
}

function normalizeLogos(
  logos?: readonly LogoId[] | readonly LogoItem[],
): LogoItem[] {
  if (!logos?.length) {
    return resolveLogos();
  }
  if (isLogoIdList(logos)) {
    return resolveLogos(logos);
  }
  return [...logos];
}

function LogoTile({
  logo,
  embedded,
  className,
}: {
  logo: LogoItem;
  embedded?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg border px-3 transition-colors",
        embedded ? "h-12" : "h-16 px-4",
        logo.darkTile
          ? "border-white/10 bg-neutral-950"
          : "border-border/60 bg-background/80",
        className,
      )}
    >
      <img
        src={logo.src}
        alt={logo.name}
        loading="lazy"
        decoding="async"
        className={cn(
          "w-auto max-w-full object-contain",
          embedded ? "max-h-7" : "max-h-9",
        )}
      />
    </div>
  );
}

function HeadingBadge({
  heading,
  embedded,
}: {
  heading: ReactNode;
  embedded?: boolean;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-secondary))]/10 font-medium text-[hsl(var(--brand-secondary))]",
        embedded ? "mb-3 px-3 py-1.5 text-xs" : "px-4 py-2 text-sm",
      )}
    >
      <Handshake
        className={embedded ? "h-3.5 w-3.5" : "h-4 w-4"}
        aria-hidden
      />
      <span>{heading}</span>
    </div>
  );
}

/**
 * Generic logo strip — partners, clients, integrations, etc.
 *
 * @example Carousel with autoplay (default)
 * <LogoStrip logos={["hubspot", "slack"]} />
 *
 * @example Static grid — all logos visible
 * <LogoStrip mode="static" logos={["hubspot", "zoom", "notion", "slack"]} />
 *
 * @example Embedded in a card
 * <LogoStrip embedded mode="static" hideHeading logos={["hubspot"]} />
 */
const LogoStrip = ({
  logos,
  mode = "carousel",
  heading = "Trusted by teams that ship with CollabAI",
  hideHeading = false,
  embedded = false,
  className,
  itemClassName,
  autoplay = 2200,
  "aria-label": ariaLabel = "Logos",
}: LogoStripProps) => {
  const items = normalizeLogos(logos);
  const plugin = useRef(
    mode === "carousel" && autoplay !== false
      ? Autoplay({
          delay: autoplay,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        })
      : undefined,
  );

  if (!items.length) return null;

  const showHeading = !hideHeading && heading;

  const body =
    mode === "static" ? (
      <ul
        className={cn(
          "flex w-full list-none flex-wrap gap-2 p-0",
          embedded ? "justify-start" : "justify-center",
        )}
      >
        {items.map((logo) => (
          <li
            key={logo.id}
            className={cn(
              embedded ? "min-w-[calc(50%-0.25rem)] flex-1 basis-[calc(50%-0.25rem)]" : "w-28 sm:w-32",
            )}
          >
            <LogoTile
              logo={logo}
              embedded={embedded}
              className={itemClassName}
            />
          </li>
        ))}
      </ul>
    ) : (
      <Carousel
        plugins={plugin.current ? [plugin.current] : []}
        className="w-full"
        opts={{ align: "start", loop: items.length > 3 }}
      >
        <CarouselContent className="-ml-2">
          {items.map((logo) => (
            <CarouselItem
              key={logo.id}
              className={cn(
                "pl-2",
                embedded
                  ? "basis-1/2"
                  : "basis-1/2 sm:basis-1/3 md:pl-4 lg:basis-1/4 xl:basis-1/5",
              )}
            >
              <LogoTile
                logo={logo}
                embedded={embedded}
                className={itemClassName}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    );

  if (embedded) {
    return (
      <div className={cn("w-full", className)} aria-label={ariaLabel}>
        {showHeading && <HeadingBadge heading={heading} embedded />}
        {body}
      </div>
    );
  }

  return (
    <section className={cn("w-full py-10", className)} aria-label={ariaLabel}>
      <div className="container mx-auto px-4">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8">
          {showHeading && <HeadingBadge heading={heading} />}
          {body}
        </div>
      </div>
    </section>
  );
};

export { LogoStrip, LOGOS, resolveLogos };
export default LogoStrip;
