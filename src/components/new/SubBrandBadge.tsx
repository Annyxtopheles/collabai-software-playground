import { ExternalLink, Sparkles } from "lucide-react";
import type { VerticalSubBrand } from "@/data/verticals";

interface Props {
  subBrand: VerticalSubBrand;
  size?: "sm" | "md";
  className?: string;
}

/**
 * Pill rendered on vertical hub + industry pricing pages to surface a
 * product sub-brand (e.g. "ePhysician Control Tower — by CollabAI").
 * Uses existing brand tokens; no new colors introduced.
 */
const SubBrandBadge = ({ subBrand, size = "md", className = "" }: Props) => {
  const pad = size === "sm" ? "px-3 py-1 text-[11px]" : "px-4 py-1.5 text-xs";
  const content = (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-[hsl(var(--brand-secondary))]/30 bg-[hsl(var(--brand-secondary))]/10 font-medium text-[hsl(var(--brand-secondary))] ${pad} ${className}`}
    >
      <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
      <span className="font-semibold tracking-wide">{subBrand.name}</span>
      {subBrand.tagline && (
        <>
          <span aria-hidden="true" className="opacity-50">·</span>
          <span className="text-slate-secondary">{subBrand.tagline}</span>
        </>
      )}
      {subBrand.url && <ExternalLink className="h-3 w-3 opacity-70" aria-hidden="true" />}
    </span>
  );
  if (subBrand.url) {
    return (
      <a
        href={subBrand.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${subBrand.name}${subBrand.tagline ? ` ${subBrand.tagline}` : ""} — open in new tab`}
        className="inline-flex transition-opacity hover:opacity-80"
      >
        {content}
      </a>
    );
  }
  return content;
};

export default SubBrandBadge;