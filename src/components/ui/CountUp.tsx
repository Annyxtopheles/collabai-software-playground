import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
  start?: boolean;
  className?: string;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const CountUp = ({
  value,
  suffix = "",
  duration = 1600,
  start = true,
  className,
}: CountUpProps) => {
  const [display, setDisplay] = useState(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    if (!start) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setDisplay(Math.round(easeOutCubic(progress) * value));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [start, value, duration]);

  return (
    <span className={className}>
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
};

export default CountUp;
