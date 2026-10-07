import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Target, TrendingUp, Cog } from "lucide-react";
import dashboardImageFallback from "@/assets/dashboard-preview.jpg";
import { useSiteImage } from "@/hooks/useSiteImage";

const benefits = [
  {
    icon: Target,
    title: "Industry-Tailored AI Playbooks",
    description: "Pre-built agents designed specifically for your industry's workflows, regulations, and compliance requirements."
  },
  {
    icon: Shield,
    title: "Self-Hosted for Maximum Security",
    description: "Your data never leaves your infrastructure. Complete control over AI models, processing, and governance."
  },
  {
    icon: TrendingUp,
    title: "Measurable ROI with Governance Dashboard",
    description: "Track performance metrics, compliance adherence, and business impact in real-time with detailed reporting."
  },
  {
    icon: Cog,
    title: "Seamless Integration & Human Oversight",
    description: "Plug into existing systems with built-in approval workflows and human-in-the-loop controls for critical decisions."
  }
];

const WhyCollabAI = () => {
  const { imageUrl: dashboardImage } = useSiteImage("homepage-dashboard-preview", dashboardImageFallback);
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-primary mb-4">
            Why Choose CollabAI?
          </h2>
          <p className="text-lg text-slate-secondary max-w-3xl mx-auto">
            Purpose-built for regulated industries that demand security, compliance, and measurable results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits Grid */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="border-l-4 border-l-trust-blue/20 hover:border-l-trust-blue transition-all duration-300 hover:shadow-md">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-trust-blue/10 to-trust-blue/20 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-trust-blue" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-brand-primary">
                        {benefit.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-secondary leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-trust-blue/10 to-trust-blue-dark/10 rounded-2xl blur-2xl transform rotate-3"></div>
            <div className="relative bg-surface-elevated p-8 rounded-2xl shadow-2xl border border-border">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-brand-primary mb-2">Real-Time Governance Dashboard</h3>
                <p className="text-sm text-slate-secondary">Monitor AI performance, compliance, and ROI metrics</p>
              </div>
              <img 
                src={dashboardImage}
                alt="CollabAI governance dashboard showing AI performance metrics and compliance tracking"
                className="rounded-lg w-full h-auto shadow-lg"
              />
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-trust-blue">99.9%</div>
                  <div className="text-xs text-slate-secondary">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-trust-blue">45%</div>
                  <div className="text-xs text-slate-secondary">Avg. Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-trust-blue">100%</div>
                  <div className="text-xs text-slate-secondary">Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCollabAI;