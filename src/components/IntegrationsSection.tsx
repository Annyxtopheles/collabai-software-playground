import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
interface Integration {
  name: string;
  url: string;
}
interface IntegrationsSectionProps {
  industry: string;
  title: string;
  description: string;
  integrations: Integration[];
}
const IntegrationsSection = ({
  industry,
  title,
  description,
  integrations
}: IntegrationsSectionProps) => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center border border-slate-light p-8 rounded-3xl bg-surface-elevated">
          {/* Left Side */}
          <div>
            <p className="uppercase text-sm font-semibold text-slate-secondary mb-2">
              {industry} Integrations
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-4">
              {title}
            </h2>
            <p className="text-slate-secondary mb-6 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-trust-blue to-trust-blue-dark" asChild>
                <Link to="/contact">
                  Request Custom Integration
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-6 gap-4">
            {integrations.map((integration, idx) => <div key={idx} style={{
            clipPath: "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)"
          }} title={integration.name} className="relative w-16 h-16 p-2 bg-background shadow-sm border-2 border-slate-light hover:border-trust-blue/30 transition-colors rounded-sm">
                <img src={integration.url} alt={integration.name} className="w-full h-full object-contain p-1.5" />
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default IntegrationsSection;