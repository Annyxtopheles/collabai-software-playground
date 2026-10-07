import { Search, Wrench, Puzzle, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Assessment",
    description: "We analyze your current workflows, compliance requirements, and identify high-impact opportunities for AI automation.",
    number: "01"
  },
  {
    icon: Wrench,
    title: "Agent Design",
    description: "Custom AI agents are built using your industry playbook, trained on your specific processes and regulatory requirements.",
    number: "02"
  },
  {
    icon: Puzzle,
    title: "Integration",
    description: "Seamless deployment into your existing systems with self-hosted security and human oversight controls.",
    number: "03"
  },
  {
    icon: BarChart3,
    title: "Governance & ROI Tracking",
    description: "Continuous monitoring, compliance reporting, and measurable ROI tracking through our governance dashboard.",
    number: "04"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-light to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-primary mb-4">
            Your Path to AI Transformation
          </h2>
          <p className="text-lg text-slate-secondary max-w-2xl mx-auto">
            A proven methodology that takes you from pilot to production with measurable results and full compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-trust-blue/30 to-trust-blue/10 z-0"></div>
                )}
                
                <div className="relative z-10 text-center">
                  {/* Step number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-trust-blue to-trust-blue-dark text-white rounded-full font-bold text-lg mb-6 shadow-lg">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 bg-surface-elevated rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm border border-border">
                    <IconComponent className="w-7 h-7 text-trust-blue" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-brand-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline visual for mobile */}
        <div className="lg:hidden mt-12">
          <div className="flex flex-col space-y-8">
            {steps.map((_, index) => (
              <div key={index} className="flex items-center justify-center">
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-8 bg-gradient-to-b from-trust-blue/30 to-trust-blue/10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;