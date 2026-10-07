"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";
interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}
interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}
export function Pricing({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support."
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);
  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight
        },
        colors: ["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--secondary))", "hsl(var(--muted))"],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"]
      });
    }
  };
  return <div className="container py-20">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-brand-primary">
          {title}
        </h2>
        <p className="text-slate-secondary text-lg whitespace-pre-line">
          {description}
        </p>
      </div>


      <div className={cn("grid gap-6 justify-center", plans.length === 2 ? "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto" : "grid-cols-1 md:grid-cols-3")}>
        {plans.map((plan, index) => <motion.div key={index} initial={{
        y: 50,
        opacity: 0
      }} whileInView={isDesktop ? {
        y: plan.isPopular ? -20 : 0,
        opacity: 1,
        x: index === 2 ? -15 : index === 0 ? 15 : 0,
        scale: index === 0 || index === 2 ? 0.96 : 1.0
      } : {
        y: 0,
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 1.2,
        type: "spring",
        stiffness: 100,
        damping: 30,
        delay: index * 0.1
      }} className={cn("rounded-2xl border p-6 bg-background text-center flex flex-col justify-between relative", plan.isPopular ? "border-trust-blue border-2 shadow-lg" : "border-border hover:border-trust-blue/50 transition-colors", !plan.isPopular && "mt-5")}>
            {plan.isPopular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-trust-blue to-trust-blue-dark text-white py-1 px-4 rounded-full flex items-center gap-1 text-sm font-semibold">
                <Star className="h-4 w-4 fill-current" />
                Most Popular
              </div>}
            
            <div className="flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-brand-primary mb-2">
                {plan.name}
              </h3>
              
              <div className="mt-4 mb-6 flex items-center justify-center gap-x-2">
                {isNaN(Number(plan.price)) ? (
                  <>
                    <span className="text-5xl font-bold tracking-tight text-brand-primary">
                      {plan.price}
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-slate-secondary">
                      {plan.period}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-5xl font-bold tracking-tight text-brand-primary">
                      <NumberFlow value={isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)} format={{
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                  }} transformTiming={{
                    duration: 500,
                    easing: "ease-out"
                  }} willChange />
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-slate-secondary">
                      / {plan.period}
                    </span>
                  </>
                )}
              </div>

              

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, idx) => <li key={idx} className="flex items-start gap-3 text-left">
                    <Check className="h-5 w-5 text-trust-blue mt-0.5 flex-shrink-0" />
                    <span className="text-slate-secondary">{feature}</span>
                  </li>)}
              </ul>

              <button className={cn(buttonVariants({
            variant: plan.isPopular ? "default" : "outline"
          }), "w-full text-base font-semibold h-12")} onClick={() => window.location.href = plan.href}>
                {plan.buttonText}
              </button>
              
              <p className="mt-4 text-sm text-slate-secondary">
                {plan.description}
              </p>
            </div>
          </motion.div>)}
      </div>
    </div>;
}