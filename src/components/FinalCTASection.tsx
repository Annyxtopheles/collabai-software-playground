import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Download } from "lucide-react";
import { Link } from "react-router-dom";
interface FinalCTASectionProps {
  title?: string;
  paragraph?: string;
  button1Text?: string;
  button2Text?: string;
  button1Link?: string;
  button2Link?: string;
  button2Icon?: "play" | "download";
  showNewsletter?: boolean;
  newsletterDisclaimer?: string;
}
const FinalCTASection = ({
  title = "Ready to Deploy Control Tower for Your Company?",
  paragraph = "Get a personalized demo of Control Tower — powered by CollabAI — tailored to your industry and security requirements.",
  button1Text = "Book a Demo",
  button2Text = "Try the Live Demo",
  button1Link = "/book-demo",
  button2Link = "/try-demo",
  button2Icon = "play",
  showNewsletter = false,
  newsletterDisclaimer = "Quarterly releases • Industry insights • No spam"
}: FinalCTASectionProps) => {
  return <section className="py-24 bg-gradient-to-br from-trust-blue to-trust-blue-dark">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {paragraph}
        </p>
        
        {showNewsletter ? <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <input type="email" placeholder="Enter your email" className="flex-1 h-12 px-4 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30" />
              <Button size="lg" variant="secondary" className="h-12 bg-white text-trust-blue hover:bg-white/90">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-white/80">
              {newsletterDisclaimer}
            </p>
          </div> : <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-trust-blue hover:bg-white/95 hover:text-trust-blue" asChild>
              <Link to={button1Link}>
                {button1Text}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-trust-blue hover:bg-white/10" asChild>
              <Link to={button2Link}>
                {button2Text}
              </Link>
            </Button>
          </div>}
      </div>
    </section>;
};
export default FinalCTASection;