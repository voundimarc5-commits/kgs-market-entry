import { Link } from "react-router-dom";
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import type { AfricaEvent } from "@/data/mockData";

const images = import.meta.glob("@/assets/*.jpg", { eager: true, import: "default" }) as Record<string, string>;

const getImageForEvent = (sector: string): string | undefined => {
  const mapping: Record<string, string> = {
    "Finance & Investment": "financial-district",
    Technology: "nairobi-tech-hub",
    "Innovation & Tech": "kigali-innovation",
    "Energy & Climate": "solar-farm-morocco",
    Startup: "nairobi-tech-hub",
    "Digital Economy": "smart-city",
    "AI & Robotics": "smart-city",
    "Venture Capital": "financial-district",
    "Mining & Resources": "mining-tech",
    Infrastructure: "port-infrastructure",
  };
  const key = mapping[sector];
  if (!key) return undefined;
  const match = Object.entries(images).find(([path]) => path.includes(key));
  return match?.[1];
};

const BADGE_COLORS: Record<string, string> = {
  TECH: "bg-accent text-accent-foreground",
  INVESTMENT: "bg-primary text-primary-foreground",
  ENERGY: "bg-accent text-accent-foreground",
  STARTUP: "bg-primary/80 text-primary-foreground",
};

const EventCard = ({ event }: { event: AfricaEvent }) => {
  const bgImage = getImageForEvent(event.sector);

  return (
    <Link
      to={`/events/${event.id}`}
      className="group relative rounded-lg overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_hsl(0_0%_0%/0.4),0_0_20px_hsl(43_65%_55%/0.12)] block"
    >
      {bgImage && (
        <div className="absolute inset-0">
          <img src={bgImage} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/50" />
        </div>
      )}
      {!bgImage && <div className="absolute inset-0 bg-card" />}

      <div className="relative z-10 p-6 min-h-[200px] flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] uppercase tracking-wider text-primary font-medium bg-primary/10 backdrop-blur-sm px-2 py-1 rounded">
            {event.sector}
          </span>
          {event.badge && (
            <span className={`text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-sm ${BADGE_COLORS[event.badge] || "bg-secondary text-foreground"}`}>
              {event.badge}
            </span>
          )}
        </div>

        <h3 className="text-base font-bold text-foreground mt-1 mb-3 group-hover:text-primary transition-colors">
          {event.name}
        </h3>

        <div className="space-y-2 mb-4 flex-1">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={13} className="text-primary/70" /> {event.city}, {event.country}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar size={13} className="text-primary/70" />
            {new Date(event.date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users size={13} className="text-primary/70" /> {event.organizer}
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold group-hover:gap-2.5 transition-all">
          View Event <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
};

export default EventCard;
