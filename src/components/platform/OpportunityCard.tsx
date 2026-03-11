import { Link } from "react-router-dom";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import type { Opportunity } from "@/data/mockData";

const OpportunityCard = ({ opportunity }: { opportunity: Opportunity }) => {
  return (
    <div className="glass-card rounded-lg p-5 hover:border-primary/30 transition-all group">
      <div className="flex items-start justify-between mb-3">
        <span className="text-[10px] uppercase tracking-wider text-primary font-medium bg-primary/10 px-2 py-1 rounded">
          {opportunity.type}
        </span>
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{opportunity.sector}</span>
      </div>

      <h3 className="text-sm font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {opportunity.title}
      </h3>

      <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{opportunity.summary}</p>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin size={12} />
          {opportunity.country}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Calendar size={12} />
          {new Date(opportunity.deadline).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
        </div>
      </div>

      <Link
        to={`/opportunities/${opportunity.id}`}
        className="inline-flex items-center gap-1.5 text-xs text-primary font-medium hover:gap-2.5 transition-all"
      >
        View Opportunity <ArrowRight size={12} />
      </Link>
    </div>
  );
};

export default OpportunityCard;
