import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import GlassCard from "./GlassCard";
import heroImage from "@assets/generated_images/Church_exterior_hero_banner_b1d5b7aa.png";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/40 via-purple-300/30 to-amber-200/40" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 italic drop-shadow-lg"
          data-testid="text-hero-verse"
        >
          "Let all that you do be done in love."
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-12 drop-shadow-md" data-testid="text-hero-subtitle">
          1 Corinthians 16:14
        </p>

        <GlassCard className="inline-block p-8 hover-elevate transition-all duration-300">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4" data-testid="text-hero-cta-title">
            Join Us This Sunday
          </h2>
          <p className="text-white/90 mb-6 italic" data-testid="text-hero-cta-subtitle">
            Experience worship, fellowship, and spiritual growth
          </p>
          <Button
            size="lg"
            variant="default"
            className="bg-primary text-primary-foreground hover:scale-105 transition-transform"
            data-testid="button-join-us"
            onClick={() => console.log('Join Us clicked')}
          >
            Learn More
          </Button>
        </GlassCard>
      </div>
    </section>
  );
}
