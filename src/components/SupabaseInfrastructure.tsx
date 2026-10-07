import { ArrowRight, Zap, Gauge, Shield, Database } from "lucide-react";
import supabaseLogo from "@/assets/supabase-logo-wordmark.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import supabaseInfraImage from "@/assets/supabase-infrastructure-illustration.png";
import { useSiteImage } from "@/hooks/useSiteImage";

const SupabaseInfrastructure = () => {
  const { imageUrl: infraUrl } = useSiteImage("homepage-supabase-infrastructure", supabaseInfraImage);
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4" />
              <span>Infrastructure Update</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-brand-primary leading-tight">
              Now Powered by{" "}
              <Link to="/built-on-supabase" aria-label="Learn how CollabAI is built on Supabase" className="inline-block align-middle hover:opacity-80 transition-opacity">
                <img src={supabaseLogo} alt="Supabase" className="h-12 lg:h-14 inline-block align-middle mx-1" />
              </Link>{" "}
              Enterprise Infrastructure
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-secondary mb-2">Why we moved</h3>
                <p className="text-slate-secondary leading-relaxed">
                  As CollabAI scaled across healthcare, financial services, and enterprise deployments, we needed infrastructure that could handle complex multi-tenant relationships, real-time AI workflows, and enterprise-grade security without compromise.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-secondary mb-2">What improved</h3>
                <p className="text-slate-secondary leading-relaxed">
                  By migrating to Supabase PostgreSQL, we achieved 6.6x faster query performance, built-in Row-Level Security for multi-tenant isolation, and unified authentication, storage, and real-time capabilities — all while reducing operational complexity.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-secondary mb-2">What this means for you</h3>
                <p className="text-slate-secondary leading-relaxed">
                  Your AI agents now run on a more scalable, secure, and performant foundation. Faster responses, stronger data consistency, and enterprise-ready infrastructure that grows with your needs — without you having to think about it.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" asChild>
                <Link to="/built-on-supabase">
                  Read the Full Story
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>

              <Link
                to="/built-on-supabase"
                className="inline-flex items-center gap-2 bg-[#3ECF8E]/10 hover:bg-[#3ECF8E]/20 text-[#3ECF8E] px-4 py-2 rounded-full text-sm font-semibold border border-[#3ECF8E]/30 transition-colors"
                aria-label="Powered by Supabase — view infrastructure details"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3ECF8E] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3ECF8E]"></span>
                </span>
                Powered by Supabase
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative space-y-6">
            <img
              src={infraUrl}
              alt="Supabase enterprise infrastructure upgrade showing 6.6x performance improvement"
              loading="lazy"
              decoding="async"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl shadow-[var(--shadow-medium)]"
            />

            {/* Metric Callout Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 bg-card border border-border rounded-lg p-4">
                <div className="w-10 h-10 bg-[hsl(var(--brand-secondary))]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Gauge className="w-5 h-5 text-[hsl(var(--brand-secondary))]" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-secondary">6.6x</div>
                  <div className="text-xs text-slate-secondary">Faster queries</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-card border border-border rounded-lg p-4">
                <div className="w-10 h-10 bg-[hsl(var(--brand-secondary))]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Database className="w-5 h-5 text-[hsl(var(--brand-secondary))]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-secondary">Enterprise</div>
                  <div className="text-xs text-slate-secondary">PostgreSQL</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-card border border-border rounded-lg p-4">
                <div className="w-10 h-10 bg-[hsl(var(--brand-secondary))]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-[hsl(var(--brand-secondary))]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-secondary">Built-in</div>
                  <div className="text-xs text-slate-secondary">Multi-tenant security</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupabaseInfrastructure;
