import EventCard from "./EventCard";
import eventImage from "@assets/generated_images/Church_event_placeholder_photo_7d4c3727.png";

const events = [
  {
    image: eventImage,
    title: "Youth Fellowship",
    date: "January 28, 2025",
    description: "Join us for an inspiring evening of worship, games, and fellowship with young believers.",
  },
  {
    image: eventImage,
    title: "Prayer Meeting",
    date: "February 5, 2025",
    description: "A special prayer gathering for healing, guidance, and spiritual renewal.",
  },
  {
    image: eventImage,
    title: "Community Outreach",
    date: "February 15, 2025",
    description: "Serving our community with love through food distribution and support services.",
  },
  {
    image: eventImage,
    title: "Bible Study",
    date: "February 20, 2025",
    description: "Deepen your understanding of Scripture through interactive group discussions.",
  },
];

export default function EventsSection() {
  return (
    <section
      id="events"
      className="py-20 px-4 bg-gradient-to-br from-amber-50 to-purple-50 dark:from-amber-950/20 dark:to-purple-950/20"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-serif text-4xl sm:text-5xl font-bold text-center text-foreground mb-4"
          data-testid="text-events-heading"
        >
          Upcoming Events
        </h2>
        <p className="text-center text-muted-foreground italic mb-12 max-w-2xl mx-auto" data-testid="text-events-subtitle">
          Join us for fellowship and spiritual growth
        </p>

        <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
