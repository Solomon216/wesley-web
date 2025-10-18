import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Sunday Service",
    time: "9:00 AM - 10:30 AM",
    address: "C.S.I. Wesley Church, Main Road, Poonamallee, Chennai - 600056",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1!2d80.09!3d13.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzAwLjAiTiA4MMKwMDUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
  },
  {
    title: "Weekday Prayer",
    time: "Wednesday 6:00 PM - 7:00 PM",
    address: "C.S.I. Wesley Church, Main Road, Poonamallee, Chennai - 600056",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1!2d80.09!3d13.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzAwLjAiTiA4MMKwMDUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
  },
];

export default function ServicesSection() {
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
