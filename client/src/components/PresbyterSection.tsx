import { useEffect, useState } from "react";
import GlassCard from "./GlassCard";
import presbyterImage from "@assets/generated_images/Presbyter_portrait_photo_ff6b5582.png";

export default function PresbyterSection() {
  const [isShimmering, setIsShimmering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsShimmering(true);
      setTimeout(() => setIsShimmering(false), 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="presbyter"
      className="py-20 px-4 bg-gradient-to-br from-purple-50 to-amber-50 dark:from-purple-950/20 dark:to-amber-950/20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-12"
          data-testid="text-presbyter-heading"
        >
          Our Presbyter
        </h2>

        <div className="flex justify-center mb-8">
          <div className="relative">
            <GlassCard
              className={`p-2 rounded-full transition-all duration-1000 ${
                isShimmering ? "shadow-2xl shadow-primary/50 scale-105" : ""
              }`}
            >
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white/40">
                <img
                  src={presbyterImage}
                  alt="Presbyter Portrait"
                  className="w-full h-full object-cover"
                  data-testid="img-presbyter"
                />
              </div>
            </GlassCard>
          </div>
        </div>

        <GlassCard className="p-8 max-w-2xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4" data-testid="text-presbyter-name">
            Rev. Dr. Samuel Wesley
          </h3>
          <p className="text-lg text-foreground italic leading-relaxed" data-testid="text-presbyter-message">
            "Dear beloved congregation, it is my honor and privilege to serve as your presbyter. Together, we
            walk in faith, united in Christ's love, and committed to building a community that reflects His
            grace and compassion. May God's blessings be upon each one of you."
          </p>
        </GlassCard>
      </div>
    </section>
  );
}
