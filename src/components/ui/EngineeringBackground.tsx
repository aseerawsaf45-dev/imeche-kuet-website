"use client";

import React from "react";

export function EngineeringBackground({
  children,
  className = "",
  showGears = true,
  showGrid = true,
}: {
  children?: React.ReactNode;
  className?: string;
  showGears?: boolean;
  showGrid?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* CAD Coordinate Dot / Blueprint Grid */}
      {showGrid && (
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      )}

      {/* Subtle Rotating Engineering Watermark Gears in Background */}
      {showGears && (
        <>
          <div className="absolute -top-32 -left-32 w-96 h-96 opacity-[0.035] pointer-events-none animate-spin-clockwise-slow svg-origin-center">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-white">
              <circle cx="100" cy="100" r="90" strokeWidth="1.5" strokeDasharray="6 4" />
              <circle cx="100" cy="100" r="75" strokeWidth="2" />
              <circle cx="100" cy="100" r="40" strokeWidth="1.5" />
              <line x1="100" y1="10" x2="100" y2="190" strokeWidth="1" />
              <line x1="10" y1="100" x2="190" y2="100" strokeWidth="1" />
              {Array.from({ length: 12 }).map((_, i) => (
                <rect
                  key={i}
                  x="96"
                  y="6"
                  width="8"
                  height="14"
                  rx="1"
                  fill="white"
                  transform={`rotate(${(i * 360) / 12} 100 100)`}
                />
              ))}
            </svg>
          </div>

          <div className="absolute -bottom-40 -right-40 w-[460px] h-[460px] opacity-[0.03] pointer-events-none animate-spin-counterclockwise-slow svg-origin-center">
            <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-white">
              <circle cx="120" cy="120" r="110" strokeWidth="2" strokeDasharray="12 6" />
              <circle cx="120" cy="120" r="95" strokeWidth="1.5" />
              <circle cx="120" cy="120" r="50" strokeWidth="2" />
              {Array.from({ length: 16 }).map((_, i) => (
                <rect
                  key={i}
                  x="115"
                  y="5"
                  width="10"
                  height="18"
                  rx="2"
                  fill="white"
                  transform={`rotate(${(i * 360) / 16} 120 120)`}
                />
              ))}
            </svg>
          </div>
        </>
      )}

      {/* Crosshair Corner Markers */}
      <div className="absolute top-4 left-6 pointer-events-none opacity-30 flex items-center gap-1">
        <span className="text-[9px] font-mono text-primary font-bold">+</span>
        <span className="text-[8px] font-mono tracking-widest text-neutral uppercase hidden md:inline">
          SYS // 01
        </span>
      </div>
      <div className="absolute top-4 right-6 pointer-events-none opacity-30 flex items-center gap-1">
        <span className="text-[8px] font-mono tracking-widest text-neutral uppercase hidden md:inline">
          3.1209°N
        </span>
        <span className="text-[9px] font-mono text-primary font-bold">+</span>
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
