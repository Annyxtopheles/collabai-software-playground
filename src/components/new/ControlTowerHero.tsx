import { ReactNode } from "react";
import { ArrowRight, ShieldCheck, Lock, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import LogoStrip from "@/components/LogoStrip";
import ControlTowerSlider from "./ControlTowerSlider";

interface ControlTowerHeroProps {
  heading: ReactNode;
  subheading?: ReactNode;
  tagline: string;
  buttonText: string;
  buttonUrl: string;
  eyebrow?: ReactNode;
  secondaryCta?: { label: string; to: string };
}

const ControlTowerHero = ({
  heading,
  subheading,
  tagline,
  buttonText,
  buttonUrl,
  eyebrow,
  secondaryCta,
}: ControlTowerHeroProps) => {
  return (
    <section className="bg-background text-foreground">
      <main className="flex flex-col items-center justify-center">
        <div className="mt-12 sm:mt-16 lg:mt-24 flex flex-col items-center">
          <div className="mb-4">
            <AnimatedShinyText className="inline-flex items-center gap-2 bg-foreground/5 border border-foreground/10 text-foreground px-3 py-1 rounded-full text-xs font-medium uppercase tracking-[0.18em]">
              <ShieldCheck className="w-3.5 h-3.5 text-[hsl(var(--brand-secondary))]" />
              <span>{eyebrow ?? "The Private AI Control Tower"}</span>
            </AnimatedShinyText>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-center px-4 font-bold tracking-tight leading-[1.05]">
            {heading}
          </h1>
          <div className="mt-5 px-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-[11px] sm:text-xs uppercase tracking-[0.14em] text-muted-foreground">
              <Lock className="w-3 h-3 text-[hsl(var(--brand-secondary))]" />
              Private by design · Self-hosted by default
            </span>
          </div>
          {subheading && (
            <p className="mt-4 text-center px-4 text-xl lg:text-2xl font-medium text-foreground/80 max-w-2xl">
              {subheading}
            </p>
          )}
          <p className="mt-5 block text-muted-foreground text-center text-base sm:text-lg px-4 max-w-2xl">
            {tagline}
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              className="group relative cursor-pointer overflow-hidden rounded-full border bg-black px-8 py-2 text-center font-semibold active:translate-y-[2px] transition-all"
              asChild
            >
              {buttonUrl.startsWith("/") ? (
                <Link to={buttonUrl}>
                  <span>{buttonText}</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              ) : (
                <a href={buttonUrl} target="_blank" rel="noopener noreferrer">
                  <span>{buttonText}</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              )}
            </Button>
            {secondaryCta && (
              <Button
                variant="outline"
                className="rounded-full border-foreground/15 bg-background px-8 py-2 font-semibold hover:bg-foreground/10 hover:text-foreground active:translate-y-[2px] transition-all"
                asChild
              >
                <Link to={secondaryCta.to}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>
          <div className="mt-1 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 text-[11px] sm:text-xs text-muted-foreground">
            {["Self-hosted", "HIPAA-ready", "SOC 2 path", "Your tenant, your keys"].map((item, i) => (
              <span key={item} className="inline-flex items-center gap-1">
                {i > 0 && <span aria-hidden className="text-foreground/20">·</span>}
                <Check className="w-3 h-3 text-[hsl(var(--brand-secondary))]" />
                {item}
              </span>
            ))}
          </div>
          <Link
            to="/try-demo"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            See all live demos →
          </Link>
        </div>

        {/* Slider replaces the video slot */}
        <div className="mt-12 lg:mt-16 w-full max-w-screen-md mx-auto px-4 sm:px-2">
          <ControlTowerSlider />
        </div>

        <div className="mt-12 w-full">
          <LogoStrip heading="Trusted by Experts — Used by the Leaders." />
        </div>
      </main>
      <div className="h-12 sm:h-16 md:h-24" />
    </section>
  );
};

export default ControlTowerHero;