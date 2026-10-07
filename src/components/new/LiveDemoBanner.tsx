import { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

interface Props {
  url: string;
  message: string;
  ctaLabel?: string;
  storageKey: string;
}

const LiveDemoBanner = ({ url, message, ctaLabel = "Open live demo", storageKey }: Props) => {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(storageKey) !== "1") setDismissed(false);
    } catch {
      setDismissed(false);
    }
  }, [storageKey]);

  if (dismissed) return null;

  const dismiss = () => {
    try {
      sessionStorage.setItem(storageKey, "1");
    } catch {
      /* noop */
    }
    setDismissed(true);
  };

  return (
    <div className="sticky top-0 z-40 w-full bg-[hsl(var(--brand-secondary))] text-background">
      <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-2.5 text-sm">
        <p className="flex-1 text-center font-medium sm:text-left">{message}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 rounded-md bg-background px-3 py-1.5 text-trust-blue text-xs font-semibold uppercase tracking-wider transition hover:bg-background"
        >
          {ctaLabel}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss"
          className="shrink-0 rounded-md p-1 transition hover:bg-background/15"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default LiveDemoBanner;