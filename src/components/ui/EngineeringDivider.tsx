import React from "react";

export function EngineeringDivider({ 
  className = "",
  label = "SECTION 0.0 // CALIBRATION"
}: { 
  className?: string;
  label?: string;
}) {
  return (
    <div className={`w-full py-8 overflow-hidden select-none opacity-40 hover:opacity-80 transition-opacity ${className}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center gap-4">
        {/* Left Ticks */}
        <div className="flex items-center gap-1.5 flex-1 overflow-hidden">
          <span className="text-[10px] font-mono text-primary font-bold tracking-widest shrink-0">+</span>
          <div className="h-[1px] bg-white/20 flex-1" />
          <div className="hidden sm:flex items-end gap-1 h-3 shrink-0">
            {Array.from({ length: 12 }).map((_, i) => (
              <div 
                key={i} 
                className={`w-[1px] bg-white/30 ${i % 3 === 0 ? "h-3 bg-primary/70" : "h-1.5"}`} 
              />
            ))}
          </div>
        </div>

        {/* Center Technical Readout Badge */}
        <div className="px-3 py-1 bg-[#151515] border border-white/15 rounded text-[10px] font-mono uppercase tracking-[0.25em] text-white/80 shrink-0 shadow-sm">
          {label}
        </div>

        {/* Right Ticks */}
        <div className="flex items-center gap-1.5 flex-1 overflow-hidden">
          <div className="hidden sm:flex items-end gap-1 h-3 shrink-0">
            {Array.from({ length: 12 }).map((_, i) => (
              <div 
                key={i} 
                className={`w-[1px] bg-white/30 ${i % 3 === 0 ? "h-3 bg-primary/70" : "h-1.5"}`} 
              />
            ))}
          </div>
          <div className="h-[1px] bg-white/20 flex-1" />
          <span className="text-[10px] font-mono text-primary font-bold tracking-widest shrink-0">+</span>
        </div>
      </div>
    </div>
  );
}
