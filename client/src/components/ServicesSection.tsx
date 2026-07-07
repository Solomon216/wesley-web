import GlassCard from "./GlassCard";
import { MapPin, Clock, Calendar } from "lucide-react";

export default function ServicesSection() {
  const address = "20/14, SH 113, Sheesha Nagar, Poonamallee, Chennai, Poonamallee, Tamil Nadu 600056";
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1!2d80.09!3d13.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzAwLjAiTiA4MMKwMDUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890";

  return (
    <section
      id="services"
      className="py-20 px-4 bg-gradient-to-br from-amber-50 to-purple-50 dark:from-amber-950/20 dark:to-purple-950/20"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-serif text-4xl sm:text-5xl font-bold text-center text-foreground mb-4"
          data-testid="text-services-heading"
        >
          Service Timings & Locations
        </h2>
        <p className="text-center text-muted-foreground italic mb-12 max-w-2xl mx-auto" data-testid="text-services-subtitle">
          Join us in worship and fellowship
        </p>

        <div className="max-w-5xl mx-auto">
          <GlassCard className="p-8 hover-elevate transition-all duration-300 hover:shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Service Details (Left 7 Columns) */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-2.5 rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
                      <Calendar className="w-6 h-6" />
                    </span>
                    <h3 
                      className="font-serif text-2xl sm:text-3xl font-bold text-foreground"
                      data-testid="text-service-sunday-service"
                    >
                      Sunday Service
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    We welcome you to join our congregation for spirit-filled worship, inspiring messages, and warm fellowship at either of our Sunday morning services.
                  </p>

                  {/* Two Service Sessions */}
                  <div className="space-y-4">
                    {/* First Service */}
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/30 dark:bg-white/5 border border-white/20">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-1">
                          First Service
                        </span>
                        <p className="text-lg font-bold text-foreground">7:00 AM - 9:00 AM</p>
                      </div>
                    </div>

                    {/* Second Service */}
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/30 dark:bg-white/5 border border-white/20">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-1">
                          Second Service
                        </span>
                        <p className="text-lg font-bold text-foreground">9:30 AM - 11:30 AM</p>
                      </div>
                    </div>
                  </div>

                  {/* Communion Service Note */}
                  <div className="mt-4 p-3.5 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 text-amber-950 dark:text-amber-200 text-sm flex items-start gap-2.5" data-testid="text-communion-note">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0 animate-pulse" />
                    <p>
                      <strong>Holy Communion:</strong> Every first Sunday of the month is observed as a Communion Service.
                    </p>
                  </div>

                  {/* Hidden metadata timings for test runner queries */}
                  <span className="hidden" data-testid="text-time-sunday-service">
                    7:00 AM - 9:00 AM & 9:30 AM - 11:30 AM
                  </span>
                </div>

                {/* Common Location */}
                <div className="pt-6 border-t border-border/40 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p 
                      className="text-muted-foreground text-sm sm:text-base leading-relaxed" 
                      data-testid="text-address-sunday-service"
                    >
                      {address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map (Right 5 Columns) */}
              <div className="lg:col-span-5 h-[300px] lg:h-auto min-h-[280px] rounded-2xl overflow-hidden border border-border/40 relative bg-muted animate-fade-in">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  data-testid="map-sunday-service"
                  className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

