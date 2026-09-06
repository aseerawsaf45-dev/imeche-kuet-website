import Link from "next/link";
import { ArrowRight, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { events } from "@/data/mock";

export default function EventsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="mb-20 max-w-3xl">
          <p className="font-sans text-xs tracking-widest uppercase font-semibold text-primary mb-4">
            Activities & Initiatives
          </p>
          <h1 className="font-display text-5xl md:text-7xl mb-6">Chapter Events</h1>
          <p className="text-foreground/75 text-lg leading-relaxed">
            From technical symposiums, SOfE heats, and SolidWorks CAD masterclasses to industrial plant visits and team orientations organized by the IMechE KUET Student Chapter.
          </p>
        </div>

        <div className="flex flex-col gap-0 border-y border-white/10">
          {events.map((event) => (
            <Link 
              href={`/events/${event.id}`} 
              key={event.id} 
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 py-10 border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors px-4 sm:px-6 text-white"
            >
              <div className="md:col-span-2 flex flex-col justify-center">
                <span className="font-display text-2xl md:text-3xl text-white">{event.date}</span>
                <span className="font-mono text-sm text-neutral">{event.year}</span>
              </div>

              <div className="md:col-span-3 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-widest font-semibold text-primary mb-1 font-mono">
                  {event.category}
                </span>
                {event.venue && (
                  <span className="text-xs text-neutral flex items-center gap-1">
                    <MapPin size={12} className="text-primary" /> {event.venue}
                  </span>
                )}
              </div>

              <div className="md:col-span-6 flex flex-col justify-center">
                <h3 className="font-display text-2xl md:text-3xl text-white group-hover:text-primary transition-colors mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-neutral line-clamp-2 leading-relaxed">
                  {event.description}
                </p>
              </div>

              <div className="md:col-span-1 flex items-center justify-end">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary transition-all">
                  <ArrowRight size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
