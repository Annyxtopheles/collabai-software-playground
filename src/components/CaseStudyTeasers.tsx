import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    industry: "Mortgage Banking",
    company: "Regional Mortgage Bank",
    metric: "50% faster loan processing",
    quote: "CollabAI's mortgage agents reduced our loan review time from 3 days to 1.5 days while maintaining 100% compliance with federal regulations.",
    impact: "$2.3M annual savings",
    href: "/case-studies/mortgage-bank"
  },
  {
    industry: "Healthcare",
    company: "Metro Healthcare System",
    metric: "40% reduction in intake time",
    quote: "Patient intake processing that used to take 20 minutes now takes 12 minutes, and our staff can focus on actual patient care instead of paperwork.",
    impact: "1,200 additional patients/month",
    href: "/case-studies/healthcare-system"
  },
  {
    industry: "Accounting",
    company: "Premier CPA Firm",
    metric: "60% faster reporting",
    quote: "Our monthly client reports that used to take 8 hours now take 3 hours, and the accuracy has improved significantly with automated compliance checks.",
    impact: "150% capacity increase",
    href: "/case-studies/cpa-firm"
  }
];

const CaseStudyTeasers = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-slate-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-primary mb-4">
            Real Results from Real Companies
          </h2>
          <p className="text-lg text-slate-secondary max-w-2xl mx-auto">
            See how organizations like yours are transforming their operations with CollabAI's industry-specific AI agents.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-surface-elevated">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-trust-blue bg-trust-blue/10 px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                  <Quote className="w-8 h-8 text-trust-blue/30" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-primary group-hover:text-trust-blue transition-colors">
                  {study.metric}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <blockquote className="text-slate-secondary italic leading-relaxed">
                  "{study.quote}"
                </blockquote>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-sm font-medium text-brand-primary">{study.company}</p>
                    <p className="text-sm text-trust-blue font-semibold">{study.impact}</p>
                  </div>
                </div>

                <Button 
                  asChild 
                  variant="ghost" 
                  className="w-full justify-between text-trust-blue hover:bg-trust-blue/10 group/btn mt-4"
                >
                  <Link to={study.href}>
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white"
          >
            <Link to="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyTeasers;