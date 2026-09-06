"use client";

import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { events, projects, team } from "@/data/mock";

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeSearch = () => setIsOpen(false);

  // Simple mock search implementation
  const lowerQuery = query.toLowerCase();
  
  const filteredEvents = query ? events.filter((e) => e.title.toLowerCase().includes(lowerQuery)) : [];
  const filteredProjects = query ? projects.filter((p) => p.title.toLowerCase().includes(lowerQuery)) : [];
  const filteredTeam = query ? team.filter((t) => t.name.toLowerCase().includes(lowerQuery)) : [];

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors group px-4 py-2 border border-white/20 rounded-full hover:border-primary/50 bg-white/5"
      >
        <Search size={16} className="text-neutral group-hover:text-primary transition-colors" />
        <span>Search</span>
        <kbd className="ml-2 px-2 py-0.5 bg-white/10 border border-white/15 text-xs font-mono text-white/80 rounded">⌘K</kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#101010]/95 backdrop-blur-md flex flex-col items-center pt-24 px-6 md:px-12 text-white"
          >
            <div className="absolute top-8 left-6 md:left-12">
              <div className="relative h-10 w-48 opacity-90">
                <img src="/logo.png" alt="IMechE Logo" className="object-contain object-left w-full h-full" />
              </div>
            </div>
            
            <div className="w-full max-w-4xl">
              <div className="relative mb-8">
                <Search size={24} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search events, team members..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-[#1e1e1e] border-b-2 border-primary/50 p-6 pl-14 text-2xl font-display text-white placeholder:text-neutral/50 focus:outline-none focus:border-primary transition-colors rounded-t-lg shadow-2xl"
                />
                <button onClick={closeSearch} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral hover:text-primary">
                  <X size={24} />
                </button>
              </div>

              {query && (
                <div className="space-y-12 max-h-[60vh] overflow-y-auto pb-24 no-scrollbar">
                  {filteredEvents.length > 0 && (
                    <div>
                      <h3 className="text-xs tracking-widest uppercase font-semibold text-primary mb-4 border-b border-white/10 pb-2 font-mono">Events</h3>
                      <ul className="space-y-4">
                        {filteredEvents.map(e => (
                          <li key={e.id}>
                            <Link href={`/events/${e.id}`} onClick={closeSearch} className="group block p-2 hover:bg-white/5 rounded">
                              <span className="font-display text-2xl text-white group-hover:text-primary transition-colors">{e.title}</span>
                              <span className="ml-4 text-xs font-mono text-neutral">{e.date} {e.year}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {filteredTeam.length > 0 && (
                    <div>
                      <h3 className="text-xs tracking-widest uppercase font-semibold text-primary mb-4 border-b border-white/10 pb-2 font-mono">Team Members</h3>
                      <ul className="space-y-4">
                        {filteredTeam.map(t => (
                          <li key={t.id}>
                            <Link href={`/team/${t.id}`} onClick={closeSearch} className="group block p-2 hover:bg-white/5 rounded">
                              <span className="font-display text-2xl text-white group-hover:text-primary transition-colors">{t.name}</span>
                              <span className="ml-4 text-xs uppercase tracking-widest text-neutral font-mono">{t.position}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {filteredEvents.length === 0 && filteredProjects.length === 0 && filteredTeam.length === 0 && (
                    <div className="text-center py-12">
                       <p className="text-xl text-neutral">No results found for &quot;{query}&quot;.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
