import { Link } from "react-router-dom";
import { Zap, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import dataControlSecurityV3Fallback from "@/assets/data-control-security-v3.png";
import { useSiteImage } from "@/hooks/useSiteImage";
import SmoothImage from "@/components/ui/SmoothImage";

const bullets = [
  "On-premises or private cloud deployment",
  "SOC 2 Type II, HIPAA, GDPR compliant",
  "End-to-end encryption and audit trails",
  "Role-based access controls",
];

const SecuritySection = () => {
  const { imageUrl } = useSiteImage("homepage-data-control-security", dataControlSecurityV3Fallback);

  return (
    <section className="py-24 bg-slate-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <SmoothImage
              src={imageUrl}
              alt="Secure data control with compliance badges and private cloud infrastructure"
              width={600}
              height={400}
              aspectRatio="3 / 2"
              wrapperClassName="rounded-xl"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4" />
              <span>Security First</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-primary leading-tight">
              Your Data Never Leaves Your Control
            </h2>
            <p className="text-xl text-slate-secondary leading-relaxed">
              Deploy Control Tower entirely behind your firewall with enterprise-grade security that
              meets the strictest compliance requirements.
            </p>
            <div className="space-y-3">
              {bullets.map((b) => (
                <div key={b} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-trust-blue" />
                  <span className="text-slate-secondary">{b}</span>
                </div>
              ))}
            </div>
            <Button size="lg" asChild>
              <Link to="/security">
                Learn About Security
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;