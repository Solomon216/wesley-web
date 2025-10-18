import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "./GlassCard";
import { useState } from "react";

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  description: string;
}

export default function EventCard({ image, title, date, description }: EventCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <GlassCard
      className="overflow-hidden hover-elevate transition-all duration-300 hover:-translate-y-2 hover:shadow-xl min-w-[280px] sm:min-w-[320px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          data-testid={`img-event-${title.toLowerCase().replace(/\s+/g, '-')}`}
        />
      </div>
      
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-foreground mb-2 italic" data-testid={`text-event-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h3>
        
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground" data-testid={`text-event-date-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {date}
          </span>
        </div>

        <div
          className={`transition-all duration-500 overflow-hidden ${
            isHovered ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-sm text-foreground mb-4" data-testid={`text-event-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {description}
          </p>
          <Button
            size="sm"
            variant="default"
            className={`transition-all duration-300 ${
              isHovered ? "shadow-lg shadow-primary/50" : ""
            }`}
            data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={() => console.log(`Learn more about ${title}`)}
          >
            Learn More
          </Button>
        </div>
      </div>
    </GlassCard>
  );
}
