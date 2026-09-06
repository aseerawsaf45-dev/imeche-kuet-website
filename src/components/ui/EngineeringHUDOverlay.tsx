"use client";

import React, { useEffect, useState } from "react";

export function EngineeringHUDOverlay() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(Math.round(window.scrollY));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside aria-label="Engineering Telemetry HUD" className="pointer-events-none fixed inset-0 z-40 overflow-hidden select-none">
      {/* 4 Corner Technical Registration Reticles */}
      {/* Top Left */}
      <div className="absolute top-3 left-4 flex items-center gap-1.5 opacity-20 hover:opacity-70 transition-opacity">
        <div className="w-2.5 h-2.5 border-t-2 border-l-2 border-primary" />
        <span className="font-mono text-[8px] text-white tracking-widest uppercase hidden lg:inline">
          REF // 001
        </span>
      </div>

      {/* Top Right */}
      <div className="absolute top-3 right-4 flex items-center gap-1.5 opacity-20 hover:opacity-70 transition-opacity">
        <span className="font-mono text-[8px] text-white tracking-widest uppercase hidden lg:inline">
          KUET.ENG // 2018
        </span>
        <div className="w-2.5 h-2.5 border-t-2 border-r-2 border-primary" />
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-3 left-4 flex items-center gap-2 opacity-25 hover:opacity-70 transition-opacity">
        <div className="w-2.5 h-2.5 border-b-2 border-l-2 border-primary" />
        <div className="hidden sm:flex items-center gap-2 font-mono text-[9px] text-white/70 tracking-wider">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>IMechE KUET</span>
          <span className="text-white/30">|</span>
          <span>POS: {scrollY}px</span>
        </div>
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-3 right-4 flex items-center gap-2 opacity-25 hover:opacity-70 transition-opacity">
        <span className="hidden sm:inline font-mono text-[9px] text-white/70 tracking-widest uppercase">
          KUET &middot; 22.8998° N 89.5024° E
        </span>
        <div className="w-2.5 h-2.5 border-b-2 border-r-2 border-primary" />
      </div>
    </aside>
  );
}
