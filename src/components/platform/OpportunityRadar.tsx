import { useState } from "react";
import { opportunities, sectors } from "@/data/mockData";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const OpportunityRadar = () => {
  const [selectedSector, setSelectedSector] = useState("All");

  const filtered = selectedSector === "All"
    ? opportunities
    : opportunities.filter((o) => o.sector === selectedSector);

  return (
    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
            Africa Opportunity Radar
          </h2>
          <p className="text-sm text-muted-foreground">
            The latest economic opportunities and programs across African markets.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {sectors.map((sector) => (
            <button
              key={sector}
              onClick={() => setSelectedSector(sector)}
              className={`text-xs px-3 py-1.5 rounded-md transition-colors ${
                selectedSector === sector
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {sector}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="glass-card rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-[10px] uppercase tracking-wider text-muted-foreground font-medium px-4 py-3">Country</th>
                  <th className="text-left text-[10px] uppercase tracking-wider text-muted-foreground font-medium px-4 py-3">Opportunity</th>
                  <th className="text-left text-[10px] uppercase tracking-wider text-muted-foreground font-medium px-4 py-3 hidden md:table-cell">Sector</th>
                  <th className="text-left text-[10px] uppercase tracking-wider text-muted-foreground font-medium px-4 py-3 hidden md:table-cell">Deadline</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((opp) => (
                  <tr key={opp.id} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5 text-sm text-foreground">
                        <MapPin size={12} className="text-primary" />
                        {opp.country}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-foreground">{opp.title}</td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="text-xs text-muted-foreground">{opp.sector}</span>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar size={11} />
                        {new Date(opp.deadline).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <Link to={`/opportunities/${opp.id}`} className="text-primary hover:text-primary/80">
                        <ArrowRight size={14} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link to="/opportunities" className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all">
            View all opportunities <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OpportunityRadar;
