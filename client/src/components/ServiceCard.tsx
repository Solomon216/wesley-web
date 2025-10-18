import { MapPin, Clock } from "lucide-react";
import GlassCard from "./GlassCard";

interface ServiceCardProps {
  title: string;
  time: string;
  address: string;
  mapUrl: string;
}

export default function ServiceCard({ title, time, address, mapUrl }: ServiceCardProps) {
  return (
    <GlassCard className="p-6 hover-elevate transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <h3 className="font-serif text-2xl font-bold text-foreground mb-4" data-testid={`text-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        {title}
      </h3>
      
      <div className="space-y-3 mb-4">
        <div className="flex items-start gap-2">
          <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
          <p className="text-foreground" data-testid={`text-time-${title.toLowerCase().replace(/\s+/g, '-')}`}>{time}</p>
        </div>
        
        <div className="flex items-start gap-2">
          <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
          <p className="text-foreground" data-testid={`text-address-${title.toLowerCase().replace(/\s+/g, '-')}`}>{address}</p>
        </div>
      </div>

      <div className="mt-4 rounded-md overflow-hidden h-48 bg-muted">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          data-testid={`map-${title.toLowerCase().replace(/\s+/g, '-')}`}
        />
      </div>
    </GlassCard>
  );
}
