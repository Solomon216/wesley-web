import { useEffect, useState } from "react";
import GlassCard from "./GlassCard";
import presbyterImage from "@assets/churches/presbyter.jpg";

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
      className="py-24 px-4 bg-gradient-to-br from-purple-50 via-white to-amber-50/30 dark:from-purple-950/10 dark:via-background dark:to-amber-950/10"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-12"
          data-testid="text-presbyter-heading"
        >
          Our Presbyter
        </h2>

        <div className="flex justify-center mb-10">
          <div className="relative">
            <GlassCard
              className={`p-2.5 rounded-full border-2 border-purple-200/60 dark:border-white/10 transition-all duration-1000 shadow-md ${
                isShimmering ? "shadow-2xl shadow-primary/50 scale-105 border-primary/60" : "hover:border-primary/50 hover:shadow-lg"
              }`}
            >
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white/65 dark:border-background shadow-inner">
                <img
                  src={presbyterImage}
                  alt="Presbyter Portrait"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  data-testid="img-presbyter"
                />
              </div>
            </GlassCard>
          </div>
        </div>

        <GlassCard className="p-8 max-w-2xl mx-auto border-purple-200/50 bg-white/95 dark:bg-card hover:shadow-[0_20px_50px_rgba(245,158,11,0.08)] hover:border-amber-300/50 transition-all duration-300">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4" data-testid="text-presbyter-name">
            Revd. C.R. Samson Rasa
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

