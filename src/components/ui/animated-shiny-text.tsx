"use client";

import { CSSProperties, FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
}) => {
  return (
    <p
      style={
        {
          "--shimmer-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "mx-auto max-w-md",
        "inline-flex items-center justify-center px-4 py-2 rounded-full",
        "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100",
        "border border-gray-300 shadow-sm",
        "animate-shimmer bg-[length:200%_100%]",
        "text-gray-700 text-sm font-medium",
        className,
      )}
    >
      {children}
    </p>
  );
};

export default AnimatedShinyText;