import { HeroSection } from "@/components/ui/dynamic-hero";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-illustration.jpg";
import { useSiteImage } from "@/hooks/useSiteImage";
const Hero = () => {
  const { imageUrl: heroUrl } = useSiteImage("homepage-hero", heroImage);
  return (
    <div className="relative">
      <HeroSection
        heading={
          <>
            From Pilot to Profit:{" "}
            <span className="bg-gradient-to-r from-trust-blue to-trust-blue-dark bg-clip-text text-transparent">
              Agentic AI
            </span>
            <br />
            for Regulated Industries
          </>
        }
        tagline="CollabAI helps mortgage banks, financial institutions, healthcare providers, accountants, and legal firms move beyond AI experiments — with secure, self-hosted AI agents that deliver measurable business results."
        buttonText="Book a Live Demo"
        imageUrl={heroUrl}
        videoUrl="https://player.vimeo.com/progressive_redirect/playback/1005176695/rendition/720p/file.mp4?loc=external&signature=d7e5488ba6b933c8cd462be6f37f9bcb471041acdcac75061bd18d1cd6780aee"
        navItems={[
          {
            id: "features",
            label: "Features",
            href: "/features",
          },
          {
            id: "playbooks",
            label: "Playbooks",
            href: "/playbooks",
          },
          {
            id: "pricing",
            label: "Pricing",
            href: "/pricing",
          },
          {
            id: "contact",
            label: "Contact",
            href: "/contact",
          },
        ]}
      />

      {/* Additional content section */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4"></div>
    </div>
  );
};
export default Hero;
