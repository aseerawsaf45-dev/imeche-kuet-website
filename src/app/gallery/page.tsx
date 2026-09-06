import { ArrowRight, Camera } from "lucide-react";

export default function GalleryPage() {
  const moments = [
    {
      title: "Speak Out for Engineering (SOfE) Heats",
      date: "OCTOBER 2024",
      tag: "Global Competition",
      speaker: "Keynote & Judging by KUET ME Faculty",
      aspect: "aspect-[4/5]"
    },
    {
      title: "Mechanical Tech Day & Freshers' Reception",
      date: "DECEMBER 2024",
      tag: "Flagship Event",
      speaker: "Auditorium Complex, KUET",
      aspect: "aspect-square"
    },
    {
      title: "Industrial Tour: Khulna Shipyard & Power Plant",
      date: "MARCH 2024",
      tag: "Industrial Tour",
      speaker: "Khulna Shipyard & Rampal Thermal Station",
      aspect: "aspect-square"
    },
    {
      title: "SolidWorks & Ansys Simulation Sprint",
      date: "FEBRUARY 2024",
      tag: "CAD / FEA Masterclass",
      speaker: "Mechanical CAD Lab, KUET",
      aspect: "aspect-square"
    },
    {
      title: "KUET Rover Autonomous Field Trials",
      date: "NOVEMBER 2023",
      tag: "Field Testing",
      speaker: "KUET Central Playground & Prototyping Workshop",
      aspect: "aspect-[4/5]"
    },
    {
      title: "Women in Engineering & STEM Leadership",
      date: "SEPTEMBER 2023",
      tag: "Keynote Sharing",
      speaker: "Mechanical Engineering Seminar Hall",
      aspect: "aspect-square"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="mb-20 max-w-3xl">
          <p className="font-sans text-xs tracking-widest uppercase font-semibold text-primary mb-4">
            Visual Archive
          </p>
          <h1 className="font-display text-5xl md:text-7xl mb-6">Chapter Gallery</h1>
          <p className="text-foreground/75 text-lg leading-relaxed">
            Moments capturing technical development, industrial plant visits, Speak Out for Engineering (SOfE), and the vibrant mechanical community of the IMechE KUET Student Chapter.
          </p>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {moments.map((item, i) => (
            <div 
              key={i} 
              className={`w-full bg-[#151515] relative overflow-hidden group cursor-pointer border border-secondary/20 reticle-corner engineering-card shadow-sm ${item.aspect}`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <Camera size={28} className="text-neutral/40 mb-3 group-hover:text-primary transition-colors" />
                <span className="text-white/80 font-display text-lg mb-1">{item.title}</span>
                <span className="text-neutral text-xs font-mono">{item.date}</span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/90 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white/80 font-mono text-[11px] uppercase tracking-widest mb-1">{item.tag}</span>
                <h3 className="text-white font-display text-2xl mb-2">{item.title}</h3>
                <p className="text-white/90 text-xs leading-relaxed">{item.speaker}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
