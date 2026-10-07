import { ArrowUpRight } from "lucide-react";
import type { VerticalDemos } from "@/data/verticals";

interface Props {
  demos: VerticalDemos;
  nicheName: string;
  footer?: React.ReactNode;
}

const DemosBand = ({ demos, nicheName, footer }: Props) => {
  const items = [demos.full, demos.lite].filter(Boolean) as NonNullable<VerticalDemos["full"]>[];
  if (items.length === 0) return null;

  return (
    <section className="border-y border-border bg-slate-light py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
            Live demos
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-primary lg:text-4xl">
            See it running, right now.
          </h2>
          <p className="mt-3 text-base text-slate-secondary">
            Two sandboxes for {nicheName}. Click around, break things — no signup, no install.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {items.map((d) => (
            <a
              key={d.url}
              href={d.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border bg-card p-6 transition hover:border-[hsl(var(--brand-secondary))] hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold text-brand-primary">{d.label}</h3>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:text-[hsl(var(--brand-secondary))]" />
              </div>
              <p className="mt-3 text-sm text-slate-secondary">{d.blurb}</p>
              <p className="mt-4 truncate text-xs text-muted-foreground">{new URL(d.url).hostname}</p>
            </a>
          ))}
        </div>
        {footer && <div className="mt-10">{footer}</div>}
      </div>
    </section>
  );
};

export default DemosBand;