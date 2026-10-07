import { useRef } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem 
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Zap } from "lucide-react";

import quonticLogo from "@/assets/clients/quontic-logo.png";
import flexpointLogo from "@/assets/clients/flexpoint-logo.png";
import icrCapitalLogo from "@/assets/clients/icr-capital-logo.png";
import ahadCoLogo from "@/assets/clients/ahad-co-logo.png";
import dynamicTaxLogo from "@/assets/clients/dynamic-tax-logo.png";
import simpleTherapyLogo from "@/assets/clients/simple-therapy-logo.png";
import additionalContentImage from "/lovable-uploads/6a8dd0a7-d614-49d2-9cf6-8713e48b7c80.png";

const clientLogos = [
  { name: "Quontic Bank", logo: quonticLogo },
  { name: "FlexPoint", logo: flexpointLogo },
  { name: "ICR Capital LLC", logo: icrCapitalLogo },
  { name: "Ahad Co", logo: ahadCoLogo },
  { name: "Dynamic Tax & Accounting", logo: dynamicTaxLogo },
  { name: "Simple Therapy", logo: simpleTherapyLogo },
];

const ClientLogosCarousel = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  return (
    <section className="relative w-full pt-16 pb-0">
      {/* Background with lightweight CSS gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#315EFF]/20 to-white [mask-image:radial-gradient(50%_50%,white,transparent_85%)]" />
      
      {/* Content on top */}
      <div className="relative container mx-auto px-4">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] px-4 py-2 rounded-full text-sm font-medium">
            <Zap className="w-4 h-4" />
            <span>Trusted by Experts - Used by the Leaders.</span>
          </div>
          
          <div className="w-full max-w-6xl mx-auto">
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {clientLogos.map((client, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                    <div className="flex items-center justify-center h-16 bg-white/65 rounded-lg border border-white/30 hover:bg-white/65 transition-all duration-300">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-w-full max-h-10 object-contain opacity-100 hover:opacity-100 transition-opacity duration-300"
                        onError={(e) => {
                          console.log(`Failed to load image: ${client.name}`, e);
                        }}
                        onLoad={() => {
                          console.log(`Loaded image: ${client.name}`);
                        }}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          
          <div className="mt-12 flex justify-center">
            <img 
              src={additionalContentImage} 
              alt="Additional content" 
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosCarousel;