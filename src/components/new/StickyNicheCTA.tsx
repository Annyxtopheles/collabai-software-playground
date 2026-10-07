import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar } from "lucide-react";

interface Props {
  displayName: string;
  demoUrl: string;
  demoExternal?: boolean;
  hideBookDemo?: boolean;
  demoLabel?: string;
  compact?: boolean;
}

const StickyNicheCTA = ({
  displayName,
  demoUrl,
  demoExternal,
  hideBookDemo,
  demoLabel = "Try live demo",
  compact,
}: Props) => {
  const [scrolledPast, setScrolledPast] = useState(false);
  const [footerInView, setFooterInView] = useState(false);
  const visible = scrolledPast && !footerInView;

  useEffect(() => {
    const onScroll = () => setScrolledPast(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => setFooterInView(entry.isIntersecting));
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto max-w-3xl px-3 pb-3 sm:pb-4">
        <div
          className={`flex items-center gap-2 rounded-full border border-border bg-background/95 p-1.5 shadow-lg backdrop-blur ${
            compact ? "mx-auto w-fit sm:gap-2 [&>*]:sm:flex-none" : "sm:gap-3"
          }`}
        >
          <p
            className={`hidden text-xs font-medium text-brand-primary sm:block ${
              compact ? "pl-4 pr-1" : "flex-1 px-3"
            }`}
          >
            Ready to see {displayName} on Control Tower?
          </p>
          {!hideBookDemo && (
            <Link
              to="/book-demo"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-2 text-xs font-semibold text-brand-primary hover:border-[hsl(var(--brand-secondary))] sm:text-sm"
            >
              <Calendar className="h-3.5 w-3.5" />
              Book demo
            </Link>
          )}
          {demoExternal ? (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[hsl(var(--brand-secondary))] px-3 py-2 text-xs font-semibold text-background sm:flex-none sm:text-sm"
            >
              {demoLabel} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ) : (
            <Link
              to={demoUrl}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[hsl(var(--brand-secondary))] px-3 py-2 text-xs font-semibold text-background sm:flex-none sm:text-sm"
            >
              {demoLabel} <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default StickyNicheCTA;