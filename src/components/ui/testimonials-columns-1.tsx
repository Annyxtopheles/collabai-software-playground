import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

// Animation duration in seconds for all columns (editable)
const SCROLL_DURATION = 25;

interface TestimonialData {
  id: string;
  name: string;
  role: string | null;
  content: string;
}

const staticTestimonials = [
  {
    id: "1",
    content: "Performance and security improved overnight for my agency.",
    name: "Shawn Perry",
    role: "Launch Wild",
  },
  {
    id: "2",
    content: "We reduced hours of admin work, improved our workflow, and kept client data private.",
    name: "Randy Satin",
    role: "Tour Patron",
  },
  {
    id: "3",
    content:
      "CollabAI helped us cut down our manual work. Now my team can focus more on clients and less on busywork. Setup was quick, and data always stays secure.",
    name: "Team Lead",
    role: "Ahad & Co",
  },
  {
    id: "4",
    content:
      "We needed serious patient data privacy and smart automations for our health programs. CollabAI did both. Fast, secure, and our doctors actually enjoy using it.",
    name: "Healthcare Director",
    role: "Simple Therapy",
  },
  {
    id: "5",
    content: "Performance and security improved overnight for my agency.",
    name: "Shawn Perry",
    role: "Launch Wild",
  },
  {
    id: "6",
    content: "We reduced hours of admin work, improved our workflow, and kept client data private.",
    name: "Randy Satin",
    role: "Tour Patron",
  },
  {
    id: "7",
    content:
      "CollabAI helped us cut down our manual work. Now my team can focus more on clients and less on busywork. Setup was quick, and data always stays secure.",
    name: "Operations Manager",
    role: "Ahad & Co",
  },
  {
    id: "8",
    content:
      "We needed serious patient data privacy and smart automations for our health programs. CollabAI did both. Fast, secure, and our doctors actually enjoy using it.",
    name: "Medical Director",
    role: "Simple Therapy",
  },
  {
    id: "9",
    content: "Performance and security improved overnight for my agency.",
    name: "Shawn Perry",
    role: "Launch Wild",
  },
  {
    id: "10",
    content: "Sincerity and ingenuity improved overnight for my partner.",
    name: "Zaman Khan",
    role: "Ocord",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: TestimonialData[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-75%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(4).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ content, name, role }, i) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
                  <div>{content}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<TestimonialData[]>(staticTestimonials);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data, error } = await supabase
          .from("testimonials")
          .select("id, name, role, content")
          .eq("is_published", true)
          .order("created_at", { ascending: false })
          .limit(9);

        if (error) throw error;

        if (data && data.length > 0) {
          setTestimonials(data);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        // Keep using static testimonials as fallback
      }
    };

    fetchTestimonials();
  }, []);

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.0, delay: 0.0, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="inline-flex items-center space-x-2 bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] px-4 py-2 rounded-full text-sm font-medium">
            <Zap className="w-4 h-4" />
            <span>Testimonials</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            What our users say
          </h2>
          <p className="text-center mt-5 opacity-75">See what our customers have to say about us.</p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={SCROLL_DURATION} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={SCROLL_DURATION} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={SCROLL_DURATION} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
