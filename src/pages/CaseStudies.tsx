import PageSeoHead from "@/components/PageSeoHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import FinalCTASection from "@/components/FinalCTASection";

const caseStudies = [
  {
    id: "mortgage-bank",
    industry: "Mortgage Banking",
    company: "Regional Mortgage Bank",
    logo: "🏦",
    headline: "50% Reduction in Loan Processing Time",
    summary: "How a regional mortgage bank transformed their loan review process with AI agents, maintaining 100% regulatory compliance while doubling throughput.",
    metrics: [
      { label: "Processing Time", value: "3 days → 1.5 days", icon: Clock },
      { label: "Annual Savings", value: "$2.3M", icon: DollarSign },
      { label: "Accuracy", value: "99.8%", icon: TrendingUp }
    ],
    quote: "CollabAI's mortgage agents reduced our loan review time from 3 days to 1.5 days while maintaining 100% compliance with federal regulations.",
    quotePerson: "Sarah Johnson, VP of Operations",
    tags: ["Loan Processing", "Compliance", "Risk Assessment"]
  },
  {
    id: "healthcare-system",
    industry: "Healthcare",
    company: "Metro Healthcare System",
    logo: "🏥",
    headline: "40% Faster Patient Intake Processing",
    summary: "A large healthcare system streamlined patient intake and claims processing while maintaining HIPAA compliance and improving patient satisfaction.",
    metrics: [
      { label: "Intake Time", value: "20 min → 12 min", icon: Clock },
      { label: "Additional Patients", value: "1,200/month", icon: TrendingUp },
      { label: "Staff Satisfaction", value: "+60%", icon: DollarSign }
    ],
    quote: "Patient intake processing that used to take 20 minutes now takes 12 minutes, and our staff can focus on actual patient care instead of paperwork.",
    quotePerson: "Dr. Michael Chen, Chief Medical Officer",
    tags: ["Patient Intake", "HIPAA Compliance", "Claims Processing"]
  },
  {
    id: "cpa-firm",
    industry: "Accounting",
    company: "Premier CPA Firm",
    logo: "📊",
    headline: "60% Faster Financial Reporting",
    summary: "A mid-size CPA firm automated their monthly reporting process, allowing them to take on 150% more clients without additional staff.",
    metrics: [
      { label: "Report Generation", value: "8 hours → 3 hours", icon: Clock },
      { label: "Capacity Increase", value: "150%", icon: TrendingUp },
      { label: "Error Reduction", value: "90%", icon: DollarSign }
    ],
    quote: "Our monthly client reports that used to take 8 hours now take 3 hours, and the accuracy has improved significantly with automated compliance checks.",
    quotePerson: "Jennifer Walsh, Managing Partner",
    tags: ["Financial Reporting", "Tax Compliance", "Audit Automation"]
  },
  {
    id: "law-firm",
    industry: "Legal",
    company: "Corporate Law Associates",
    logo: "⚖️",
    headline: "70% Faster Contract Review",
    summary: "A corporate law firm revolutionized their contract review process, reducing turnaround times while improving accuracy and client satisfaction.",
    metrics: [
      { label: "Review Time", value: "2 days → 14 hours", icon: Clock },
      { label: "Accuracy", value: "95% improvement", icon: TrendingUp },
      { label: "Client Satisfaction", value: "+85%", icon: DollarSign }
    ],
    quote: "Contract analysis that once took our team 2 days now takes 14 hours, with far better accuracy in identifying potential issues and risks.",
    quotePerson: "Robert Martinez, Senior Partner",
    tags: ["Contract Review", "Legal Research", "Risk Analysis"]
  }
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen">
      <PageSeoHead title="Case Studies – Control Tower in Action" description="See how enterprises across banking, healthcare, and legal deploy Control Tower to automate workflows and protect sensitive data." />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-surface-elevated via-background to-slate-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-brand-primary mb-6">
              Real Results from
              <span className="bg-gradient-to-r from-trust-blue to-trust-blue-dark bg-clip-text text-transparent">
                {" "}Real Companies
              </span>
            </h1>
            
            <p className="text-xl text-slate-secondary leading-relaxed mb-8">
              See how organizations across regulated industries are transforming their operations 
              with Control Tower's industry-specific AI agents.
            </p>

            <div className="flex items-center justify-center space-x-8 text-sm text-slate-secondary">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-trust-blue" />
                <span>1+ year in production</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-trust-blue" />
                <span>40+ hours saved per week</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Card 
                key={study.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-trust-blue/20 hover:border-l-trust-blue"
              >
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{study.logo}</span>
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          {study.industry}
                        </Badge>
                        <h3 className="font-semibold text-brand-primary">{study.company}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-brand-primary group-hover:text-trust-blue transition-colors">
                    {study.headline}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-brand-secondary leading-relaxed">
                    {study.summary}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {study.metrics.map((metric, index) => {
                      const IconComponent = metric.icon;
                      return (
                        <div key={index} className="text-center">
                          <div className="w-10 h-10 bg-trust-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <IconComponent className="w-5 h-5 text-trust-blue" />
                          </div>
                          <div className="text-lg font-bold text-brand-primary">{metric.value}</div>
                          <div className="text-xs text-brand-secondary">{metric.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-4 border-trust-blue/30 pl-4 italic text-brand-secondary">
                    "{study.quote}"
                    <footer className="mt-2 text-sm font-medium text-brand-primary">
                      — {study.quotePerson}
                    </footer>
                  </blockquote>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button 
                    asChild 
                    variant="ghost" 
                    className="w-full justify-between text-trust-blue hover:text-brand-primary bg-trust-blue/10 hover:bg-trust-blue/10 group/btn"
                  >
                    <Link to={`/case-studies/${study.id}`}>
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection 
        title="Ready to Write Your Success Story?"
        paragraph="Join these forward-thinking organizations and start your AI transformation journey today."
        button1Text="Book Your Transformation Call"
        button2Text="Download Success Guide"
        button2Icon="download"
      />

    </div>
  );
};

export default CaseStudies;