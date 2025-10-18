import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import churchLogo from "@assets/generated_images/Church_logo_design_234cd840.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Presbyter", href: "#presbyter" },
  { name: "Events", href: "#events" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-background/80 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={churchLogo} alt="CSI Wesley Church Logo" className="h-10 w-10" data-testid="img-logo" />
            <span className="font-serif text-lg sm:text-xl font-bold text-foreground" data-testid="text-church-name">
              C.S.I. Wesley Church
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="sm"
                onClick={() => handleNavClick(link.href)}
                className="text-foreground"
                data-testid={`link-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Button>
            ))}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden backdrop-blur-md bg-white/95 dark:bg-background/95 border-t border-white/20">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                onClick={() => handleNavClick(link.href)}
                className="w-full justify-start text-foreground"
                data-testid={`link-nav-mobile-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
