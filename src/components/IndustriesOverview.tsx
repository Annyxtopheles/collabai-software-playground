import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Heart, Calculator, Scale, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    icon: Building2,
    title: "Mortgage Banks & Financial Institutions",
    description: "Streamline loan processing, compliance reviews, and risk assessment with AI agents that understand complex financial regulations.",
    benefit: "50% faster loan processing",
    href: "/playbooks/mortgage",
    color: "text-blue-600"
  },
  {
    icon: Heart,
    title: "Healthcare & Pharmacy",
    description: "Enhance patient care with AI agents for intake processing, claims management, and clinical documentation while maintaining HIPAA compliance.",
    benefit: "40% reduction in administrative time",
    href: "/playbooks/healthcare",
    color: "text-emerald-600"
  },
  {
    icon: Calculator,
    title: "Accounting Firms",
    description: "Automate financial analysis, audit processes, and client reporting with AI agents trained on accounting standards and tax regulations.",
    benefit: "60% faster report generation",
    href: "/playbooks/accounting",
    color: "text-amber-600"
  },
  {
    icon: Scale,
    title: "Legal Practices",
    description: "Accelerate contract review, legal research, and document preparation with AI agents that understand legal precedents and compliance requirements.",
    benefit: "70% faster contract analysis",
    href: "/playbooks/legal",
    color: "text-purple-600"
  }
];

const IndustriesOverview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-primary mb-4">
            Industry-Tailored AI Solutions
          </h2>
          <p className="text-lg text-slate-secondary max-w-3xl mx-auto">
            Purpose-built AI agents designed for the unique challenges and compliance requirements of your industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-trust-blue/20 hover:border-l-trust-blue"
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-trust-blue/10 to-trust-blue/20 flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-6 h-6 ${industry.color}`} />
                  </div>
                  <CardTitle className="text-lg font-semibold text-brand-primary group-hover:text-trust-blue transition-colors">
                    {industry.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-slate-secondary leading-relaxed">
                    {industry.description}
                  </CardDescription>
                  
                  <div className="bg-slate-light rounded-lg p-3">
                    <p className="text-sm font-medium text-trust-blue">
                      ✓ {industry.benefit}
                    </p>
                  </div>

                  <Button 
                    asChild 
                    variant="ghost" 
                    className="w-full justify-between text-trust-blue hover:bg-trust-blue/10 group/btn"
                  >
                    <Link to={industry.href}>
                      View Playbook
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white"
          >
            <Link to="/playbooks">
              Explore All Industry Playbooks
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesOverview;