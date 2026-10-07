import { cn } from "@/lib/utils";
import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Handshake } from "lucide-react";
import quonticLogo from "@/assets/clients/quontic-logo.png";
import flexpointLogo from "@/assets/clients/flexpoint-logo.png";
import icrCapitalLogo from "@/assets/clients/icr-capital-logo.png";
import ahadCoLogo from "@/assets/clients/ahad-co-logo.png";
import dynamicTaxLogo from "@/assets/clients/dynamic-tax-logo.png";
import simpleTherapyLogo from "@/assets/clients/simple-therapy-logo.png";
interface Logo {
  id?: string;
  name?: string;
  description?: string;
  logo?: string;
  image?: string;
  className?: string;
}
interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

// Default client logos data - updated format
const clientLogos: Logo[] = [{
  name: "Quontic Bank",
  logo: quonticLogo
}, {
  name: "FlexPoint",
  logo: flexpointLogo
}, {
  name: "ICR Capital LLC",
  logo: icrCapitalLogo
}, {
  name: "Ahad Co",
  logo: ahadCoLogo
}, {
  name: "Dynamic Tax & Accounting",
  logo: dynamicTaxLogo
}, {
  name: "Simple Therapy",
  logo: simpleTherapyLogo
}];
const Logos3 = ({
  heading,
  logos = clientLogos,
  className
}: Logos3Props) => {
  const plugin = useRef(Autoplay({
    delay: 2000,
    stopOnInteraction: false,
    stopOnMouseEnter: false
  }));
  return <section className={cn("py-16 bg-background", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] px-4 py-2 rounded-full text-sm font-medium">
            <Handshake className="w-4 h-4" />
            <span>Trusted by Leading Healthcare Organizations</span>
          </div>
          
          <div className="w-full max-w-6xl mx-auto">
            <Carousel plugins={[plugin.current]} className="w-full" opts={{
            align: "start",
            loop: true
          }}>
              <CarouselContent className="-ml-2 md:-ml-4">
                {clientLogos.map((client, index) => <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                    <div className="flex items-center justify-center h-16 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-500">
                      <img src={client.logo} alt={client.name} className="max-w-full max-h-10 object-contain opacity-60 hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </CarouselItem>)}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>;
};
export { Logos3 };