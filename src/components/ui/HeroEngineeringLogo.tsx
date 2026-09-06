"use client";

import React from "react";
import Image from "next/image";

export default function HeroEngineeringLogo({ className = "" }: { className?: string }) {
  // Generate 36 outer graduation ticks
  const ticks = Array.from({ length: 36 }).map((_, i) => {
    const angle = (i * 360) / 36;
    const isMajor = i % 3 === 0;
    return { angle, isMajor };
  });

  // Generate 20 gear teeth for outer ring
  const outerGearTeeth = Array.from({ length: 20 }).map((_, i) => (i * 360) / 20);

  // Generate 12 gear teeth for inner planetary gear
  const innerGearTeeth = Array.from({ length: 12 }).map((_, i) => (i * 360) / 12);

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Background Soft Red Halo Glow */}
      <div 
        className="absolute w-[80%] h-[80%] rounded-full bg-primary/20 blur-3xl pointer-events-none animate-pulse-glow" 
        style={{ willChange: "transform, opacity" }}
      />

      {/* Main SVG Composition */}
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full max-w-[520px] max-h-[520px] drop-shadow-[0_0_35px_rgba(200,16,46,0.25)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <radialGradient id="engRedGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C8102E" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#C8102E" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#151515" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="metallicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F6F5F2" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#7A7A7A" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#F6F5F2" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="primaryRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E61E3D" />
            <stop offset="100%" stopColor="#9B0B21" />
          </linearGradient>

          {/* Filter for subtle neon line glow */}
          <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- LAYER 0: Ambient Background Center Glow --- */}
        <circle cx="250" cy="250" r="180" fill="url(#engRedGlow)" />

        {/* --- LAYER 1: Static Outer Compass & Coordinate Calibration Dial --- */}
        <g opacity="0.65">
          {/* Static outer thin boundary circles */}
          <circle cx="250" cy="250" r="238" stroke="#7A7A7A" strokeWidth="0.75" strokeDasharray="3 6" opacity="0.6" />
          <circle cx="250" cy="250" r="230" stroke="#F6F5F2" strokeWidth="1" opacity="0.3" />

          {/* Graduation Ticks (360 degrees) */}
          {ticks.map(({ angle, isMajor }, idx) => (
            <line
              key={idx}
              x1="250"
              y1={isMajor ? 14 : 20}
              x2="250"
              y2={isMajor ? 28 : 26}
              stroke={isMajor ? "#C8102E" : "#7A7A7A"}
              strokeWidth={isMajor ? "2" : "1"}
              opacity={isMajor ? "1" : "0.5"}
              transform={`rotate(${angle} 250 250)`}
            />
          ))}

          {/* 4 Cardinal Crosshairs */}
          <line x1="250" y1="4" x2="250" y2="16" stroke="#C8102E" strokeWidth="2.5" />
          <line x1="250" y1="484" x2="250" y2="496" stroke="#C8102E" strokeWidth="2.5" />
          <line x1="4" y1="250" x2="16" y2="250" stroke="#C8102E" strokeWidth="2.5" />
          <line x1="484" y1="250" x2="496" y2="250" stroke="#C8102E" strokeWidth="2.5" />

          {/* Micro Telemetry Labels */}
          <text x="250" y="44" fill="#C8102E" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="2">
            000° // NORTH
          </text>
          <text x="450" y="253" fill="#7A7A7A" fontSize="8" fontFamily="monospace" textAnchor="end" letterSpacing="1">
            090°
          </text>
          <text x="250" y="468" fill="#7A7A7A" fontSize="8" fontFamily="monospace" textAnchor="middle" letterSpacing="1">
            180° // KUET 22.8998°N 89.5024°E
          </text>
          <text x="50" y="253" fill="#7A7A7A" fontSize="8" fontFamily="monospace" textAnchor="start" letterSpacing="1">
            270°
          </text>
        </g>

        {/* --- LAYER 2: Outer Spur Gear (Rotates Clockwise Slowly) --- */}
        <g className="animate-spin-clockwise-slow svg-origin-center">
          {/* Main Gear Ring Rim */}
          <circle cx="250" cy="250" r="200" stroke="#F6F5F2" strokeWidth="3" opacity="0.85" />
          <circle cx="250" cy="250" r="186" stroke="#7A7A7A" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5" />

          {/* Gear Teeth (Involute Spur Teeth around r=200) */}
          {outerGearTeeth.map((angle, i) => (
            <path
              key={i}
              d="M 244 50 L 246 36 L 254 36 L 256 50 Z"
              fill={i % 2 === 0 ? "url(#primaryRedGrad)" : "#F6F5F2"}
              stroke="#151515"
              strokeWidth="1"
              transform={`rotate(${angle} 250 250)`}
            />
          ))}

          {/* 6 Structural Web Spoke Cutouts */}
          {[0, 60, 120, 180, 240, 300].map((angle, idx) => (
            <g key={idx} transform={`rotate(${angle} 250 250)`}>
              <circle cx="250" cy="95" r="12" fill="#151515" stroke="#7A7A7A" strokeWidth="1.5" />
              <line x1="250" y1="110" x2="250" y2="140" stroke="#F6F5F2" strokeWidth="2" opacity="0.4" />
            </g>
          ))}
        </g>

        {/* --- LAYER 3: Intermediate Counter-Rotating HUD Caliper Ring --- */}
        <g className="animate-spin-counterclockwise-slow svg-origin-center">
          {/* Segmented Arcs with Neon Red Highlights */}
          <circle
            cx="250"
            cy="250"
            r="162"
            stroke="#C8102E"
            strokeWidth="2.5"
            strokeDasharray="40 18 8 18"
            filter="url(#subtleGlow)"
            opacity="0.9"
          />
          <circle
            cx="250"
            cy="250"
            r="152"
            stroke="#F6F5F2"
            strokeWidth="1"
            strokeDasharray="12 8"
            opacity="0.5"
          />

          {/* 4 Sensor Nodes on Caliper Ring */}
          {[45, 135, 225, 315].map((angle, idx) => (
            <g key={idx} transform={`rotate(${angle} 250 250)`}>
              <circle cx="250" cy="88" r="4" fill="#C8102E" />
              <circle cx="250" cy="88" r="7" stroke="#F6F5F2" strokeWidth="1" opacity="0.8" />
            </g>
          ))}
        </g>

        {/* --- LAYER 4: Inner High-Speed Planetary Drive Gear --- */}
        <g className="animate-spin-clockwise-fast svg-origin-center">
          <circle cx="250" cy="250" r="128" stroke="#F6F5F2" strokeWidth="2" opacity="0.75" />
          <circle cx="250" cy="250" r="114" stroke="#C8102E" strokeWidth="1" strokeDasharray="4 4" opacity="0.8" />

          {/* 12 Inner Gear Teeth */}
          {innerGearTeeth.map((angle, i) => (
            <rect
              key={i}
              x="245"
              y="118"
              width="10"
              height="14"
              rx="2"
              fill={i % 3 === 0 ? "#C8102E" : "#F6F5F2"}
              transform={`rotate(${angle} 250 250)`}
            />
          ))}

          {/* Planetary Pinion Wheels */}
          {[0, 90, 180, 270].map((angle, idx) => (
            <g key={idx} transform={`rotate(${angle} 250 250)`}>
              <circle cx="250" cy="155" r="14" fill="#151515" stroke="#C8102E" strokeWidth="2" />
              <circle cx="250" cy="155" r="5" fill="#F6F5F2" />
            </g>
          ))}
        </g>

        {/* --- LAYER 5: Central Institutional Mechanical Emblem Hub --- */}
        <g>
          {/* Heavy Beveled Central Glass Core */}
          <circle
            cx="250"
            cy="250"
            r="82"
            fill="#151515"
            stroke="url(#metallicGrad)"
            strokeWidth="3.5"
            className="drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
          />
          <circle
            cx="250"
            cy="250"
            r="74"
            fill="#1E1E1E"
            stroke="#C8102E"
            strokeWidth="2"
            strokeDasharray="8 4"
            opacity="0.85"
          />

          {/* Stylized Engineering Calipers / Compass & Crest Symbol */}
          {/* Compass / Caliper Legs */}
          <path
            d="M 250 196 L 224 286 M 250 196 L 276 286"
            stroke="#F6F5F2"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Compass Hinge / Top Cap */}
          <circle cx="250" cy="196" r="8" fill="#C8102E" stroke="#F6F5F2" strokeWidth="2" />
          <circle cx="250" cy="196" r="3" fill="#FFFFFF" />

          {/* Caliper Measuring Arc Gauge */}
          <path
            d="M 230 262 Q 250 270 270 262"
            stroke="#C8102E"
            strokeWidth="2.5"
            fill="none"
          />

          {/* Center Micro Gear Core */}
          <circle cx="250" cy="235" r="16" fill="#151515" stroke="#F6F5F2" strokeWidth="2" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <rect
              key={i}
              x="248"
              y="216"
              width="4"
              height="5"
              fill="#C8102E"
              transform={`rotate(${angle} 250 235)`}
            />
          ))}
          <circle cx="250" cy="235" r="7" fill="#C8102E" />

          {/* Emblem Typography */}
          <text
            x="250"
            y="298"
            fill="#F6F5F2"
            fontSize="10"
            fontWeight="bold"
            fontFamily="sans-serif"
            textAnchor="middle"
            letterSpacing="2.5"
          >
            IMechE
          </text>
          <text
            x="250"
            y="310"
            fill="#C8102E"
            fontSize="7"
            fontWeight="bold"
            fontFamily="monospace"
            textAnchor="middle"
            letterSpacing="1.5"
          >
            KUET CHAPTER
          </text>
        </g>
      </svg>



      <div className="hidden sm:flex absolute -bottom-4 -right-4 px-3 py-1.5 bg-[#151515]/90 border border-primary/30 rounded backdrop-blur-md items-center gap-2 shadow-lg">
        <span className="font-mono text-[10px] text-neutral tracking-wider">
          IMechE &middot; KUET &middot; BANGLADESH
        </span>
      </div>
    </div>
  );
}
