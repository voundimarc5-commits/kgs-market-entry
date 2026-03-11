import { Link } from "react-router-dom";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import type { Opportunity } from "@/data/mockData";

const images = import.meta.glob("@/assets/*.jpg", { eager: true, import: "default" }) as Record<string, string>;

const getImageForSector = (sector: string): string | undefined => {
  const mapping: Record<string, string> = {
    Finance: "financial-district",
    Energy: "solar-farm-morocco",
    "Renewable Energy": "solar-farm-morocco",
    Technology: "nairobi-tech-hub",
    "Real Estate": "kigali-innovation",
    Agriculture: "agribusiness",
    Mining: "mining-tech",
    Infrastructure: "port-infrastructure",
    "Artificial Intelligence": "smart-city",
  };
  const key = mapping[sector];
  if (!key) return undefined;
  const match = Object.entries(images).find(([path]) => path.includes(key));
  return match?.[1];
};

const OpportunityCard = ({ opportunity }: { opportunity: Opportunity }) => {
  const bgImage = getImageForSector(opportunity.sector);

  return (
    <Link
      to={`/opportunities/${opportunity.id}`}
      className="group relative rounded-lg overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_hsl(0_0%_0%/0.4),0_0_20px_hsl(43_65%_55%/0.12)] block"
    >
      {bgImage && (
        <div className="absolute inset-0">
          <img src={bgImage} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/60" />
        </div>
      )}
      {!bgImage && <div className="absolute inset-0 bg-card" />}

      <div className="relative z-10 p-5 min-h-[220px] flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <span className="text-[10px] uppercase tracking-wider text-primary-foreground font-semibold bg-primary px-2.5 py-1 rounded-sm">
            {opportunity.type}
          </span>
          <span className="text-[10px] uppercase tracking-wider font-medium bg-accent/80 text-accent-foreground px-2 py-1 rounded-sm">
            {opportunity.country}
          </span>
        </div>

        <h3 className="text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
          {opportunity.title}
        </h3>

        <p className="text-xs text-muted-foreground mb-4 line-clamp-2 flex-1">{opportunity.summary}</p>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin size={12} />
            {opportunity.sector}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar size={12} />
            {new Date(opportunity.deadline).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold group-hover:gap-2.5 transition-all">
          View Opportunity <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
};

export default OpportunityCard;
