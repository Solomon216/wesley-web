import { useEffect, useRef, useState } from "react";
import GlassCard from "./GlassCard";
import church1 from "@assets/churches/church1.jpg";
import church2 from "@assets/churches/church2.jpg";
import church3 from "@assets/generated_images/Historical_church_photo_three_83c2db23.png";

const historyImages = [
  { 
    src: church1, 
    year: "1900", 
    title: "First Church Building", 
    description: "The first physical church building was erected, establishing a permanent home for worship after decades of preaching on open ground."
  },
  { 
    src: church2, 
    year: "1932", 
    title: "Second Church Building", 
    description: "Constructed to accommodate a growing congregation, this building served as our spiritual sanctuary for nearly eighty years."
  },
  { 
    src: church3, 
    year: "2010", 
    title: "Third Church Building", 
    description: "A beautiful, modern church designed to welcome future generations, standing proud as our current center of worship and ministry."
  },
];

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-br from-purple-50 via-white to-amber-50/30 dark:from-purple-950/10 dark:via-background dark:to-amber-950/10"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-serif text-4xl sm:text-5xl font-bold text-center text-foreground mb-4"
          data-testid="text-about-heading"
        >
          About Our Church
        </h2>
        <p className="text-center text-muted-foreground italic mb-12 max-w-2xl mx-auto" data-testid="text-about-subtitle">
          A legacy of faith, unity, and service
        </p>

        <div className="mb-16">
          <GlassCard className="p-8 border-l-4 border-l-primary bg-gradient-to-br from-white/95 to-purple-50/40 dark:from-white/5 dark:to-purple-950/5 shadow-lg shadow-purple-900/5">
            <p className="text-lg text-foreground leading-relaxed mb-4" data-testid="text-about-description">
              C.S.I. Wesley Church stands as a testament to the power of unity and shared faith. Our church was
              formed through the blessed merger of three historic congregations, each bringing their unique
              heritage and spiritual traditions together under one roof.
            </p>
            <p className="text-lg text-foreground leading-relaxed" data-testid="text-about-description-2">
              Today, we continue the legacy of our founding churches, serving the community of Poonamallee with
              dedication, compassion, and unwavering faith. Our doors are open to all who seek spiritual growth,
              fellowship, and a deeper connection with God.
            </p>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {historyImages.map((image, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <GlassCard className="group overflow-hidden border border-purple-200/50 hover:border-amber-400/60 dark:border-white/10 dark:hover:border-amber-400/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)] flex flex-col h-full bg-white dark:bg-card">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.year}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-testid={`img-history-${index + 1}`}
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground font-serif font-bold text-sm px-3.5 py-1 rounded-full shadow-md">
                    {image.year}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif font-bold text-xl text-foreground mb-3" data-testid={`text-history-title-${index + 1}`}>
                    {image.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow" data-testid={`text-history-${index + 1}`}>
                    {image.description}
                  </p>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

