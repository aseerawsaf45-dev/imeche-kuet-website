"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Clock, CheckCircle2, Sparkles, ExternalLink } from "lucide-react";
import { events } from "@/data/mock";

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<"all" | "upcoming" | "past">("all");

  const upcomingEvents = events.filter((e) => e.registrationStatus === "OPEN");
  const pastEvents = events.filter((e) => e.registrationStatus === "COMPLETED");

  const displayedEvents =
    activeTab === "upcoming"
      ? upcomingEvents
      : activeTab === "past"
      ? pastEvents
      : events;

  return (
    <div className="min-h-screen pt-32 pb-28 bg-[#0D0D0D] text-foreground bg-cad-grid relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C8102E]/10 border border-[#C8102E]/30 rounded text-xs font-mono tracking-widest uppercase text-[#FF4D6D] font-semibold mb-4">
            <Sparkles size={14} /> Activities, Competitions & Archives
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl mb-6 text-white tracking-tight">
            Chapter Events
          </h1>
          <p className="text-neutral text-base sm:text-lg leading-relaxed">
            Discover upcoming engineering heats, national design competitions, and browse our past hands-on seminars, industrial tours, and technical symposiums extracted from our official chapter archive.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-10 pb-4 border-b border-white/10">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center gap-2 ${
              activeTab === "all"
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : "bg-white/5 text-neutral hover:bg-white/10 hover:text-white border border-white/10"
            }`}
          >
            All Initiatives ({events.length})
          </button>
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center gap-2 ${
              activeTab === "upcoming"
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : "bg-white/5 text-neutral hover:bg-white/10 hover:text-white border border-white/10"
            }`}
          >
            Upcoming & Open ({upcomingEvents.length})
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center gap-2 ${
              activeTab === "past"
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : "bg-white/5 text-neutral hover:bg-white/10 hover:text-white border border-white/10"
            }`}
          >
            Past Archives ({pastEvents.length})
          </button>

          <div className="ml-auto hidden sm:flex items-center gap-2 text-xs font-mono text-neutral/70">
            <span>LIVE TELEMETRY // FACEBOOK SYNCHRONIZED</span>
          </div>
        </div>

        {/* Events Listing */}
        <div className="flex flex-col gap-4">
          {displayedEvents.map((event) => {
            const isCompleted = event.registrationStatus === "COMPLETED";

            return (
              <div
                key={event.id}
                className="group relative border border-white/10 rounded-2xl bg-[#141414]/90 hover:bg-[#191919] hover:border-primary/50 transition-all p-6 sm:p-8 reticle-corner shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Date column */}
                  <div className="lg:col-span-2 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 pb-4 lg:pb-0 lg:pr-6">
                    <span className="font-display text-2xl sm:text-3xl text-white tracking-tight">
                      {event.date}
                    </span>
                    <span className="font-mono text-xs text-neutral tracking-widest uppercase">
                      {event.year}
                    </span>
                  </div>

                  {/* Metadata & Title */}
                  <div className="lg:col-span-8 flex flex-col justify-center space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-[11px] uppercase tracking-widest font-semibold text-primary font-mono px-2.5 py-0.5 rounded bg-primary/10 border border-primary/25">
                        {event.category}
                      </span>
                      {isCompleted ? (
                        <span className="text-[11px] uppercase tracking-widest font-mono text-neutral-400 flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-white/5 border border-white/10">
                          <CheckCircle2 size={12} className="text-neutral-400" />
                          Concluded / Archive
                        </span>
                      ) : (
                        <span className="text-[11px] uppercase tracking-widest font-mono text-emerald-400 flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Open for Registration / Abstract
                        </span>
                      )}
                    </div>

                    <Link href={`/events/${event.id}`}>
                      <h3 className="font-display text-2xl sm:text-3xl text-white group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                    </Link>

                    <p className="text-sm text-neutral leading-relaxed line-clamp-2">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral/80 pt-1">
                      {event.venue && (
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-primary" />
                          {event.venue}
                        </span>
                      )}
                      {event.time && (
                        <span className="flex items-center gap-1.5">
                          <Clock size={13} className="text-primary" />
                          {event.time}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Link Button */}
                  <div className="lg:col-span-2 flex items-center justify-start lg:justify-end gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/10">
                    <Link
                      href={`/events/${event.id}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 text-xs font-mono uppercase tracking-wider text-white hover:bg-primary hover:border-primary transition-all group-hover:border-primary/60"
                    >
                      <span>Telemetry</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Official Facebook Community Link */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-[#181818] to-transparent border border-primary/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-xl text-white mb-2">Want to see more live photos and updates?</h4>
            <p className="text-neutral text-sm">
              Visit our official Facebook page for real-time photo galleries, competition rulebooks, and announcement circulars.
            </p>
          </div>
          <a
            href="https://www.facebook.com/IMechE.KUET"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-primary hover:bg-[#a60d26] text-white text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-2 transition-all shrink-0"
          >
            <span>Facebook Page</span>
            <ExternalLink size={14} />
          </a>
        </div>

      </div>
    </div>
  );
}
