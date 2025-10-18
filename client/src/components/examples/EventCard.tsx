import EventCard from '../EventCard';
import eventImage from "@assets/generated_images/Church_event_placeholder_photo_7d4c3727.png";

export default function EventCardExample() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-amber-50 p-8">
      <EventCard
        image={eventImage}
        title="Youth Fellowship"
        date="January 28, 2025"
        description="Join us for an inspiring evening of worship, games, and fellowship with young believers."
      />
    </div>
  );
}
