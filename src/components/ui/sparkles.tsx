"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";

// Lightweight sparkles replacement - CSS-only, no heavy tsparticles dependency

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: ParticlesProps) => {
  const { id, className, background } = props;

  return (
    <motion.div
      id={id}
      className={cn("opacity-0", className)}
      style={{ background: background || "transparent" }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};
