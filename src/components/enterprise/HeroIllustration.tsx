import { useEffect, useState } from "react";

const HeroIllustration = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setOffset(window.scrollY * 0.15);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none opacity-20"
      style={{ transform: `translateY(${offset}px)` }}
    >
      <svg
        viewBox="0 0 800 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Isometric grid lines */}
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0" y1={40 + i * 40} x2="800" y2={40 + i * 40}
            stroke="white" strokeWidth="0.5" opacity="0.3"
          />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={40 + i * 40} y1="0" x2={40 + i * 40} y2="500"
            stroke="white" strokeWidth="0.5" opacity="0.3"
          />
        ))}

        {/* Drifting particles along vertical paths */}
        {[80, 200, 320, 480, 600, 720].map((x, i) => (
          <circle key={`vp-${i}`} r={2 + (i % 2)} fill="white" opacity={0.4 + (i % 3) * 0.1}>
            <animateMotion
              dur={`${4 + i * 0.8}s`}
              repeatCount="indefinite"
              path={`M${x},0 L${x},500`}
            />
          </circle>
        ))}

        {/* Drifting particles along diagonal paths */}
        {[0, 1, 2, 3].map((i) => (
          <circle key={`dp-${i}`} r={2} fill="white" opacity={0.3}>
            <animateMotion
              dur={`${5 + i * 1.2}s`}
              repeatCount="indefinite"
              path={`M${50 + i * 200},0 L${200 + i * 150},500`}
            />
          </circle>
        ))}

        {/* Pulsing ripple nodes scattered across canvas */}
        {[
          [120, 80], [350, 120], [600, 60], [700, 200],
          [100, 300], [400, 250], [250, 400], [550, 350],
          [650, 440], [180, 180], [480, 450], [750, 100],
        ].map(([cx, cy], i) => (
          <g key={`node-${i}`}>
            <circle cx={cx} cy={cy} r="3" fill="white" opacity="0.25" />
            <circle cx={cx} cy={cy} r="6" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2">
              <animate attributeName="r" from="6" to="18" dur={`${2.5 + i * 0.25}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.2" to="0" dur={`${2.5 + i * 0.25}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}

        {/* Circular orbit paths with tracing dots */}
        {[
          { cx: 200, cy: 150, r: 60 },
          { cx: 550, cy: 300, r: 45 },
          { cx: 400, cy: 100, r: 35 },
        ].map((orbit, i) => (
          <g key={`orbit-${i}`}>
            <circle
              cx={orbit.cx} cy={orbit.cy} r={orbit.r}
              fill="none" stroke="white" strokeWidth="0.4" opacity="0.15"
            />
            <circle r="2.5" fill="white" opacity="0.5">
              <animateMotion
                dur={`${6 + i * 2}s`}
                repeatCount="indefinite"
                path={`M${orbit.cx + orbit.r},${orbit.cy} A${orbit.r},${orbit.r} 0 1,1 ${orbit.cx + orbit.r - 0.01},${orbit.cy}`}
              />
            </circle>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default HeroIllustration;
