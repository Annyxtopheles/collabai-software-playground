import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import PageSeoHead from "@/components/PageSeoHead";
import { DEFAULT_OG_IMAGE, breadcrumbSchema } from "@/lib/seoSchema";

export interface ProductPageHeroCta {
  label: string;
  url: string;
  external?: boolean;
  variant?: "primary" | "secondary";
}

export interface ProductPageShellProps {
  seo: {
    title: string;
    description: string;
    canonicalPath: string;
    ogImage?: string;
    jsonLd?: Record<string, unknown> | Record<string, unknown>[];
    noindex?: boolean;
  };
  eyebrow: string;
  h1: string;
  sub: string;
  ctas: ProductPageHeroCta[];
  badges?: string[];
  children: ReactNode;
  hideFinalCta?: boolean;
  hideEyebrow?: boolean;
  finalCtaDemoOnly?: boolean;
}

const Cta = ({ label, url, external, variant = "primary" }: ProductPageHeroCta) => {
  const base =
    "inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all active:translate-y-[2px]";
  const styles =
    variant === "primary"
      ? "bg-[hsl(var(--brand-secondary))] text-background hover:shadow-lg"
      : "border border-border bg-card text-brand-primary hover:shadow-md";
  if (external) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
        {label}
        {variant === "primary" ? <ArrowRight className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
      </a>
    );
  }
  if (url.startsWith("#")) {
    return (
      <a href={url} className={`${base} ${styles}`}>
        {label} <ArrowRight className="h-4 w-4" />
      </a>
    );
  }
  return (
    <Link to={url} className={`${base} ${styles}`}>
      {label} <ArrowRight className="h-4 w-4" />
    </Link>
  );
};

const ProductPageShell = ({ seo, eyebrow, h1, sub, ctas, badges, children, hideFinalCta, hideEyebrow, finalCtaDemoOnly }: ProductPageShellProps) => (
  <>
    <PageSeoHead
      title={seo.title}
      description={seo.description}
      canonicalPath={seo.canonicalPath}
      ogImage={seo.ogImage ?? DEFAULT_OG_IMAGE}
      noindex={seo.noindex}
      jsonLd={
        seo.jsonLd ??
        breadcrumbSchema([
          { name: "Home", path: "/new" },
          { name: eyebrow, path: seo.canonicalPath },
        ])
      }
    />
    <section className="bg-background pt-20 pb-12 lg:pt-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {!hideEyebrow && (
            <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
              {eyebrow}
            </span>
          )}
          <h1 className={hideEyebrow ? "text-4xl font-bold leading-tight text-brand-primary sm:text-5xl lg:text-6xl" : "mt-6 text-4xl font-bold leading-tight text-brand-primary sm:text-5xl lg:text-6xl"}>{h1}</h1>
          {sub && <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-secondary">{sub}</p>}
          <div className={ctas.length ? "mt-8 flex flex-wrap items-center justify-center gap-3" : "hidden"}>
            {ctas.map((c) => (
              <Cta key={c.label} {...c} />
            ))}
          </div>
          {badges && badges.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-wider text-slate-secondary">
              {badges.map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--signal-live))]" />
                  {b}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
    {children}
    {/* Final CTA */}
    {!hideFinalCta && (
    <section className="bg-slate-light py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold text-brand-primary lg:text-4xl">
          See it working. Right now.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-secondary">
          One click. Real data. No signup.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {finalCtaDemoOnly ? (
            <Cta label="Get Free Demo" url="/book-demo" />
          ) : (
            <>
              <Cta
                label="Try the Live Demo"
                url="https://controltowerdemo.collabai.software/login"
                external
              />
              <Cta label="Talk to sales" url="/contact" variant="secondary" />
            </>
          )}
        </div>
      </div>
    </section>
    )}
  </>
);

export default ProductPageShell;