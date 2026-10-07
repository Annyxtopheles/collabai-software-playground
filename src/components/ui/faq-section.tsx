"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FaqSectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  items: {
    question: string;
    answer: string;
  }[];
  contactInfo?: {
    title: string;
    description: string;
    buttonText: string;
    onContact?: () => void;
  };
}

const FaqSection = React.forwardRef<HTMLElement, FaqSectionProps>(
  ({ className, title, description, items, contactInfo, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-16 w-full", className)}
        {...props}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                {title}
              </h2>
              {description && (
                <p className="text-lg text-muted-foreground">{description}</p>
              )}
            </div>

            {/* FAQ Items */}
            <div className="space-y-2">
              {items.map((item, index) => (
                <FaqItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  index={index}
                />
              ))}
            </div>

            {/* Contact Section */}
            {contactInfo && (
              <div className="mt-12 text-center flex flex-col items-center gap-4 p-8 rounded-lg bg-muted/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {contactInfo.title}
                </h3>
                <p className="text-muted-foreground text-sm max-w-sm">
                  {contactInfo.description}
                </p>
                <Button
                  variant="outline"
                  onClick={contactInfo.onContact}
                >
                  {contactInfo.buttonText}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
);
FaqSection.displayName = "FaqSection";

// Internal FaqItem component
const FaqItem = React.forwardRef<
  HTMLDivElement,
  {
    question: string;
    answer: string;
    index: number;
  }
>((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { question, answer, index } = props;

  return (
    <div ref={ref} className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
      >
        <span className="text-base font-medium text-foreground pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4">
              <p className="text-muted-foreground leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});
FaqItem.displayName = "FaqItem";

export { FaqSection };
