import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PresbyterSection from "@/components/PresbyterSection";
import EventsSection from "@/components/EventsSection";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PresbyterSection />
        <EventsSection />
        <ContactFooter />
      </main>
    </div>
  );
}
