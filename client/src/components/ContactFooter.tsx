import { MapPin, Phone, Mail } from "lucide-react";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";
import GlassCard from "./GlassCard";

const socialLinks = [
  { icon: SiFacebook, href: "#", label: "Facebook" },
  { icon: SiInstagram, href: "#", label: "Instagram" },
  { icon: SiYoutube, href: "#", label: "YouTube" },
];

export default function ContactFooter() {
  return (
    <footer
      id="contact"
      className="relative py-20 px-4 bg-gradient-to-br from-purple-100 to-amber-100 dark:from-purple-950/30 dark:to-amber-950/30"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-serif text-4xl sm:text-5xl font-bold text-center text-foreground mb-12"
          data-testid="text-contact-heading"
        >
          Get In Touch
        </h2>

        <GlassCard className="p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-serif font-bold text-lg text-foreground">Location</h3>
              </div>
              <p className="text-foreground" data-testid="text-contact-address">
                C.S.I. Wesley Church<br />
                20/14, SH 113, Sheesha Nagar<br />
                Poonamallee, Chennai<br />
                Tamil Nadu - 600056
              </p>
            </div>

            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <Phone className="w-5 h-5 text-primary" />
                <h3 className="font-serif font-bold text-lg text-foreground">Phone</h3>
              </div>
              <p className="text-foreground" data-testid="text-contact-phone">
                +91 44 1234 5678<br />
                +91 98765 43210
              </p>
            </div>

            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <Mail className="w-5 h-5 text-primary" />
                <h3 className="font-serif font-bold text-lg text-foreground">Email</h3>
              </div>
              <p className="text-foreground" data-testid="text-contact-email">
                info@csiwesley.org<br />
                presbyter@csiwesley.org
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <h3 className="font-serif font-bold text-lg text-center text-foreground mb-4">
              Connect With Us
            </h3>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="hover-elevate w-12 h-12 rounded-full backdrop-blur-sm bg-white/20 flex items-center justify-center transition-all duration-300 hover:bg-primary/20 hover:scale-110"
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`${social.label} clicked`);
                  }}
                >
                  <social.icon className="w-5 h-5 text-foreground" />
                </a>
              ))}
            </div>
          </div>
        </GlassCard>

        <div className="relative overflow-hidden rounded-md">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/60 to-amber-400/60 backdrop-blur-sm" />
          <div className="relative py-6 px-4 text-center">
            <p className="font-serif text-white text-lg font-medium" data-testid="text-footer-copyright">
              © 2025 C.S.I. Wesley Church, Poonamallee. All rights reserved.
            </p>
            <p className="text-white/90 italic mt-2 text-sm" data-testid="text-footer-tagline">
              Walking in faith, united in love
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
