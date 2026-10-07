import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  "Industry-specific AI agents ready to deploy",
  "Self-hosted security with full data control",
  "Measurable ROI from day one",
  "Complete compliance and governance"
];

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-trust-blue to-trust-blue-dark text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-white/5 bg-[length:60px_60px] bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Workflows?
          </h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join forward-thinking organizations that are already seeing measurable results 
            with industry-specific AI agents built for security and compliance.
          </p>

          {/* Benefits checklist */}
          <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 text-left">
                <CheckCircle className="w-5 h-5 text-white/80 flex-shrink-0" />
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-trust-blue hover:bg-white/90 font-semibold px-8 py-3 group"
              asChild
            >
              <Link to="/book-demo">
                Book a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3"
            >
              Download Industry Playbook
            </Button>
          </div>

          {/* Trust indicator */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm">
              1+ year in production • 40+ hours saved per week
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;