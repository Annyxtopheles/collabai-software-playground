import { useScrollReveal } from "@/hooks/useScrollReveal";

const standardSteps = [
  "Client Request",
  "API Gateway",
  "Route Handler",
  "JWT Auth",
  "Validation",
  "Controller → Service",
  "Supabase Query",
  "JSON Response",
];

const streamingSteps = [
  "Chat Message",
  "Load Config",
  "Format Request",
  "Streaming Call",
  "Parse SSE",
  "Stream to Client",
  "Save to DB",
  "Update UI",
];

const RequestFlowPath = () => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <div ref={ref} className="rounded-2xl p-8 lg:p-12 mt-12 border border-border">
      <h3 className="text-xl font-semibold text-brand-primary mb-8">Request Flow</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Standard API */}
        <div>
          <h4 className="font-semibold text-brand-primary mb-6">Standard API Request</h4>
          <div className="relative">
            {/* Vertical flow line */}
            <div className="absolute left-[14px] top-4 bottom-4 w-px bg-[hsl(var(--brand-secondary))]/20" />
            {/* Animated dot on line */}
            <div
              className="absolute left-[11px] w-[7px] h-[7px] rounded-full bg-[hsl(var(--brand-secondary))]"
              style={{
                animation: "flowDown 3s ease-in-out infinite",
              }}
            />
            <div className="space-y-3">
              {standardSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 relative"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(-12px)",
                    transition: `opacity 0.3s ${i * 0.08}s, transform 0.3s ${i * 0.08}s`,
                  }}
                >
                  <div className="w-7 h-7 rounded-full bg-[hsl(var(--brand-secondary))]/10 flex items-center justify-center text-xs font-bold text-[hsl(var(--brand-secondary))] flex-shrink-0 z-10 relative">
                    {i + 1}
                  </div>
                  <div className="flex-1 text-sm text-muted-foreground bg-background border border-border rounded-lg px-3 py-2">
                    {step}
                  </div>
                  {i < standardSteps.length - 1 && (
                    <svg className="absolute left-[10px] top-[28px] w-[9px] h-3 text-[hsl(var(--brand-secondary))]/30" viewBox="0 0 9 12">
                      <path d="M4.5 0 L4.5 12 M1 8 L4.5 12 L8 8" stroke="currentColor" strokeWidth="1" fill="none" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Streaming */}
        <div>
          <h4 className="font-semibold text-brand-primary mb-6">Chat / Streaming Request</h4>
          <div className="relative">
            <div className="absolute left-[14px] top-4 bottom-4 w-px bg-[hsl(var(--brand-secondary))]/20" />
            <div
              className="absolute left-[11px] w-[7px] h-[7px] rounded-full bg-[hsl(var(--brand-secondary))]"
              style={{
                animation: "flowDown 3.5s ease-in-out infinite 0.5s",
              }}
            />
            <div className="space-y-3">
              {streamingSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 relative"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(-12px)",
                    transition: `opacity 0.3s ${0.3 + i * 0.08}s, transform 0.3s ${0.3 + i * 0.08}s`,
                  }}
                >
                  <div className="w-7 h-7 rounded-full bg-[hsl(var(--brand-secondary))]/10 flex items-center justify-center text-xs font-bold text-[hsl(var(--brand-secondary))] flex-shrink-0 z-10 relative">
                    {i + 1}
                  </div>
                  <div className="flex-1 text-sm text-muted-foreground bg-background border border-border rounded-lg px-3 py-2">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes flowDown {
          0% { top: 16px; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: calc(100% - 16px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default RequestFlowPath;
