import { useLocation } from "wouter";
import { ArrowLeft, BookOpen, Building, Hammer, Church, Sparkles, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import church1 from "@assets/churches/church1.jpg";
import church2 from "@assets/churches/church2.jpg";
import church3 from "@assets/generated_images/Historical_church_photo_three_83c2db23.png";

interface MilestoneItem {
  year: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  image?: string;
  details: string[];
}

export default function Milestones() {
  const [_, setLocation] = useLocation();

  const timelineItems: MilestoneItem[] = [
    {
      year: "1826",
      title: "Humble Beginnings & Open Ground Preaching",
      icon: <BookOpen className="w-5 h-5 text-primary-foreground" />,
      description: "The CSI Wesley Church community was founded. Without a physical structure, the early congregation gathered faithfully in the open air, preaching on the ground, united purely by spirit.",
      details: [
        "Founded in Poonamallee area",
        "Preaching led on open ground spaces",
        "Pioneering early congregation built on prayer and devotion"
      ]
    },
    {
      year: "1900",
      title: "Construction of the First Church",
      icon: <Building className="w-5 h-5 text-primary-foreground" />,
      description: "After decades of open-air congregation, the church community celebrated a major milestone by constructing its very first physical chapel building.",
      image: church1,
      details: [
        "Permanent brick-and-mortar foundation laid",
        "Erected to house the growing local congregation",
        "Dedicated as a sanctuary for prayer, worship, and gathering"
      ]
    },
    {
      year: "1932",
      title: "The Second Church Building",
      icon: <Hammer className="w-5 h-5 text-primary-foreground" />,
      description: "As the congregation multiplied, a second, larger church building was erected to accommodate more worshippers and expand local community ministries.",
      image: church2,
      details: [
        "Expanded seating capacity and structural redesign",
        "Stood as the spiritual center of Poonamallee for nearly 80 years",
        "Bridges the gap between historical origins and the modern era"
      ]
    },
    {
      year: "2010",
      title: "The Third Modern Sanctuary",
      icon: <Church className="w-5 h-5 text-primary-foreground" />,
      description: "A state-of-the-art modern church sanctuary was constructed to carry the legacy forward, offering a majestic place of worship and community support.",
      image: church3,
      details: [
        "Reconstructed with modern architectures and acoustics",
        "Blessed and dedicated by the CSI Diocese",
        "Equipped to support extensive local community development projects"
      ]
    },
    {
      year: "2026",
      title: "The Bicentennial Jubilee (200 Years)",
      icon: <Sparkles className="w-5 h-5 text-primary-foreground" />,
      description: "Celebrating two centuries of unwavering faith, gospel preaching, community empowerment, and spiritual legacy. C.S.I. Wesley Church steps forward into a blessed future.",
      details: [
        "Jubilee theme: '200 Years of Grace and Unity'",
        "Special community outreach initiatives launched",
        "Honoring the faith of our pioneers and guiding the youth"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      {/* Reusable Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 pb-16">
        {/* Parallax Hero Header */}
        <div className="relative bg-gradient-to-b from-purple-100/50 via-purple-50/20 to-background dark:from-purple-950/20 dark:to-background py-16 px-4 text-center overflow-hidden border-b border-border/20">
          <div className="absolute inset-0 z-0 opacity-15">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -ml-20 -mt-20" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl -mr-20 -mb-20" />
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setLocation("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="mb-6 hover:translate-x-[-4px] transition-transform duration-300 text-muted-foreground hover:text-foreground cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Button>

            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-foreground mb-4">
              Our 200-Year Journey
            </h1>
            <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto leading-relaxed">
              "Remembering the days of old, meditating on all Your works, and musing on the work of Your hands." — Psalm 143:5
            </p>
          </div>
        </div>

        {/* Milestone Timeline Section */}
        <div className="max-w-6xl mx-auto px-4 mt-16 relative">
          
          {/* Vertical central line (desktop) / left line (mobile) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-300/60 to-amber-300 transform -translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative grid grid-cols-1 md:grid-cols-9 gap-8 items-center w-full min-h-[160px]">
                  
                  {/* Timeline Node Icon (Gold Circle) */}
                  <div className="absolute left-6 md:left-1/2 w-10 h-10 rounded-full bg-primary border-4 border-background flex items-center justify-center transform -translate-x-1/2 z-10 shadow-md">
                    {/* Ring glow pulse */}
                    <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping -z-10" />
                    {item.icon}
                  </div>

                  {/* Year & Title Info Block */}
                  <div className={`col-span-1 md:col-span-4 pl-14 md:pl-0 flex flex-col order-1 ${
                    isEven 
                      ? "md:items-end md:text-right" 
                      : "md:items-start md:text-left md:order-3"
                  }`}>
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-bold bg-primary/10 text-primary border border-primary/20 mb-3 shadow-sm font-serif w-fit">
                      <Calendar className="w-3.5 h-3.5" /> {item.year}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground leading-tight max-w-lg">
                      {item.title}
                    </h2>
                  </div>

                  {/* Col 5 Spacer (visible only on desktop to push the card opposite) */}
                  <div className="hidden md:block col-span-1 order-2" />

                  {/* Card Block */}
                  <div className={`col-span-1 md:col-span-4 pl-14 md:pl-0 flex flex-col order-2 ${
                    isEven 
                      ? "md:order-3" 
                      : "md:order-1"
                  }`}>
                    <GlassCard className="group overflow-hidden border border-purple-200/50 hover:border-amber-400/50 dark:border-white/10 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(107,33,168,0.06)] bg-white dark:bg-card h-full flex flex-col justify-between">
                      <div>
                        {item.image && (
                          <div className="relative h-56 w-full overflow-hidden border-b border-border/20">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        )}
                        
                        <div className="p-6">
                          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                            {item.description}
                          </p>

                          <div className="space-y-2.5">
                            {item.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                <p>{detail}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Reusable Footer */}
      <ContactFooter />
    </div>
  );
}
