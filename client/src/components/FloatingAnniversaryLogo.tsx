import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "./GlassCard";
import logo200 from "@assets/churches/200-logo.png";

interface ConfettiParticle {
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  shape: "circle" | "square" | "triangle" | "cross";
  opacity: number;
}

export default function FloatingAnniversaryLogo() {
  const [isOpen, setIsOpen] = useState(false);
  const [_, setLocation] = useLocation();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<ConfettiParticle[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  // Initialize and run confetti animation
  const triggerConfetti = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = [
      "#F5C03A", // Divine Gold
      "#E2B338", // Warm Gold
      "#8B5CF6", // Peaceful Lavender/Purple
      "#A78BFA", // Light Lavender
      "#DDD6FE", // Soft Purple
    ];

    const shapes: ("circle" | "square" | "triangle" | "cross")[] = [
      "circle",
      "square",
      "triangle",
      "cross",
    ];

    const particles: ConfettiParticle[] = [];

    // Left cannon
    for (let i = 0; i < 75; i++) {
      particles.push({
        x: 0,
        y: canvas.height,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: Math.random() * 15 + 10,
        speedY: -(Math.random() * 20 + 15),
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 8 - 4,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        opacity: 1,
      });
    }

    // Right cannon
    for (let i = 0; i < 75; i++) {
      particles.push({
        x: canvas.width,
        y: canvas.height,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: -(Math.random() * 15 + 10),
        speedY: -(Math.random() * 20 + 15),
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 8 - 4,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        opacity: 1,
      });
    }

    particlesRef.current = particles;

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let activeParticles = 0;

      particlesRef.current.forEach((p) => {
        if (p.opacity <= 0 || p.y > canvas.height) return;
        activeParticles++;

        // Apply physics
        p.x += p.speedX;
        p.y += p.speedY;
        p.speedY += 0.45; // Gravity
        p.speedX *= 0.98; // Friction
        p.rotation += p.rotationSpeed;

        // Fade out as it descends
        if (p.speedY > 2) {
          p.opacity -= 0.015;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;

        ctx.beginPath();
        if (p.shape === "circle") {
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === "square") {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        } else if (p.shape === "triangle") {
          ctx.moveTo(0, -p.size / 2);
          ctx.lineTo(p.size / 2, p.size / 2);
          ctx.lineTo(-p.size / 2, p.size / 2);
          ctx.closePath();
          ctx.fill();
        } else if (p.shape === "cross") {
          // Draw cross
          ctx.fillRect(-p.size / 2, -p.size / 8, p.size, p.size / 4);
          ctx.fillRect(-p.size / 8, -p.size / 2, p.size / 4, p.size);
        }
        ctx.restore();
      });

      if (activeParticles > 0) {
        animationFrameRef.current = requestAnimationFrame(update);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    update();
  };

  // Resize canvas handler
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handleLogoClick = () => {
    setIsOpen(true);
    // Add small delay to ensure modal open or trigger immediately
    setTimeout(() => {
      triggerConfetti();
    }, 100);
  };

  const handleViewMilestones = () => {
    setIsOpen(false);
    setLocation("/milestones");
    // Scroll to top of window when navigating
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Badge */}
      <div className="fixed bottom-6 right-6 z-40 group animate-bounce hover:animate-none">
        <div className="absolute inset-0 bg-primary/30 rounded-full blur-md group-hover:bg-primary/50 transition-all duration-300 animate-pulse" />
        <button
          onClick={handleLogoClick}
          className="relative bg-white dark:bg-card border-2 border-primary/65 hover:border-primary p-1.5 rounded-full shadow-[0_10px_30px_rgba(245,158,11,0.25)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.4)] transition-all duration-300 hover:scale-110 flex items-center justify-center cursor-pointer"
          aria-label="Celebrate 200 Years Logo"
          data-testid="floating-200-logo"
        >
          <img
            src={logo200}
            alt="Celebrating 200 Years Logo"
            className="w-14 h-14 object-contain rounded-full"
          />
          {/* Subtle label hover tooltip */}
          <span className="absolute right-20 bg-white/95 dark:bg-card text-foreground border border-purple-200/50 text-xs font-serif font-bold py-1.5 px-3.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-md">
            Celebrating 200 Years! 🎉
          </span>
        </button>
      </div>

      {/* Confetti Fullscreen Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[99999]"
      />

      {/* Celebration Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
          <GlassCard className="relative w-full max-w-md p-8 border-2 border-primary bg-gradient-to-b from-white to-purple-50/20 dark:from-card dark:to-purple-950/10 shadow-2xl animate-zoom-in overflow-hidden">
            {/* Corner Decorative Shimmers */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -ml-16 -mb-16 pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Body */}
            <div className="text-center relative z-10">
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-pulse" />
                <img
                  src={logo200}
                  alt="200th anniversary logo"
                  className="w-full h-full object-contain rounded-full border-2 border-primary/50 bg-white"
                />
              </div>

              <h3 className="font-serif text-3xl font-bold text-foreground mb-2">
                200 Years of Grace
              </h3>
              <p className="text-primary font-serif font-bold text-lg tracking-widest mb-5">
                1826 - 2026
              </p>

              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-5" />

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 italic">
                "From our humble beginnings of preaching on open ground in 1826 to the present sanctuary, we look back with thanksgiving and forward with hope."
              </p>

              <Button
                onClick={handleViewMilestones}
                className="w-full font-serif font-bold py-6 text-base tracking-wider hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
                data-testid="btn-view-milestones"
              >
                Explore Our Milestones Journey
              </Button>
            </div>
          </GlassCard>
        </div>
      )}
    </>
  );
}
