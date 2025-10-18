import { useEffect, useRef, useState } from "react";
import GlassCard from "./GlassCard";
import church1 from "@assets/generated_images/Historical_church_photo_one_b0adb110.png";
import church2 from "@assets/generated_images/Historical_church_photo_two_e3af3c00.png";
import church3 from "@assets/generated_images/Historical_church_photo_three_83c2db23.png";

const historyImages = [
  { src: church1, alt: "First Heritage Church" },
  { src: church2, alt: "Second Heritage Church" },
  { src: church3, alt: "Third Heritage Church" },
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
      className="py-20 px-4 bg-gradient-to-br from-purple-50 to-amber-50 dark:from-purple-950/20 dark:to-amber-950/20"
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
          <GlassCard className="p-8">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {historyImages.map((image, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <GlassCard className="overflow-hidden hover-elevate transition-all duration-300 hover:-translate-y-1">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                  data-testid={`img-history-${index + 1}`}
                />
                <div className="p-4 backdrop-blur-sm bg-white/20">
                  <p className="font-serif font-semibold text-foreground text-center" data-testid={`text-history-${index + 1}`}>
                    {image.alt}
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
