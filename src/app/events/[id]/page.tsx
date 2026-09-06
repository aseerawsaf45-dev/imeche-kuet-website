import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, MapPin, Clock, Users } from "lucide-react";
import Link from "next/link";
import { events } from "@/data/mock";

export default async function EventDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = events.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <Link href="/events" className="inline-flex items-center gap-2 text-sm text-neutral-gray hover:text-primary transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Events
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <span className="text-xs uppercase tracking-widest font-semibold text-primary mb-4 block">
              {event.category}
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-8 leading-[1.1]">
              {event.title}
            </h1>
            
            <div className="w-full aspect-[21/9] bg-[#111] mb-12 flex flex-col items-center justify-center border border-secondary/20 reticle-corner relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: "linear-gradient(rgba(200, 16, 46, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(200, 16, 46, 0.25) 1px, transparent 1px)",
                  backgroundSize: "32px 32px"
                }}
              />
              <div className="relative z-10 text-center space-y-2">
                <span className="text-primary text-xs tracking-widest uppercase font-mono block">IMechE KUET STUDENT CHAPTER EVENT</span>
                <span className="text-white text-2xl font-display">{event.title}</span>
                <span className="text-neutral text-xs font-mono block">VENUE: {event.venue} &middot; STATUS: {event.registrationStatus}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none prose-p:text-foreground/80 prose-headings:font-display">
              <div className="bg-[#151515] p-8 border border-secondary/20 rounded-lg reticle-corner text-white mb-12">
                <h2 className="text-2xl mb-4 font-display text-white">About This Event</h2>
                <p className="text-base text-neutral leading-relaxed">
                  {event.description}
                </p>
              </div>

              {event.schedule && (
                <div className="bg-[#151515] p-8 border border-secondary/20 rounded-lg reticle-corner text-white">
                  <h2 className="text-2xl mb-6 font-display text-white">Event Schedule</h2>
                  <div className="border-l-2 border-primary/40 pl-6 space-y-6">
                    {event.schedule.map((item, i) => (
                      <div key={i}>
                        <div className="text-xs font-mono text-primary mb-1">{item.time}</div>
                        <div className="text-lg font-medium text-white">{item.activity}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-[#151515] text-white p-8 border border-secondary/20 reticle-corner rounded-lg sticky top-32 shadow-xl">
              <h3 className="font-display text-2xl mb-8 border-b border-white/10 pb-4 text-white">Event Telemetry</h3>
              
              <ul className="space-y-6 mb-8">
                <li className="flex items-start gap-4">
                  <Calendar className="text-primary mt-1 shrink-0" size={18} />
                  <div>
                    <div className="text-xs font-semibold text-neutral uppercase font-mono tracking-widest mb-1">Date</div>
                    <div className="font-medium text-base text-white">{event.date} {event.year}</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock className="text-primary mt-1 shrink-0" size={18} />
                  <div>
                    <div className="text-xs font-semibold text-neutral uppercase font-mono tracking-widest mb-1">Time</div>
                    <div className="font-medium text-base text-white">{event.time}</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1 shrink-0" size={18} />
                  <div>
                    <div className="text-xs font-semibold text-neutral uppercase font-mono tracking-widest mb-1">Venue</div>
                    <div className="font-medium text-base text-white">{event.venue}</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Users className="text-primary mt-1 shrink-0" size={18} />
                  <div>
                    <div className="text-xs font-semibold text-neutral uppercase font-mono tracking-widest mb-1">Organizers</div>
                    <div className="font-medium text-base text-white">{event.organizers}</div>
                  </div>
                </li>
              </ul>

              {event.registrationStatus === "OPEN" ? (
                <Link 
                  href="/join"
                  className="block text-center w-full py-4 bg-primary text-white font-medium hover:bg-primary/90 transition-colors uppercase font-mono text-xs tracking-wider rounded"
                >
                  Register For Event
                </Link>
              ) : (
                <div className="text-center w-full py-4 bg-white/10 text-neutral font-medium uppercase font-mono text-xs tracking-wider rounded border border-white/10 cursor-not-allowed">
                  Registration Concluded
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
