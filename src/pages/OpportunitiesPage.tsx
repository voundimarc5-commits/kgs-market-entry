import { useState } from "react";
import PlatformLayout from "@/components/platform/PlatformLayout";
import ScrollReveal from "@/components/platform/ScrollReveal";
import OpportunityCard from "@/components/platform/OpportunityCard";
import { opportunities, sectors, opportunityTypes } from "@/data/mockData";
import { Search, TrendingUp } from "lucide-react";

import financialDistrict from "@/assets/financial-district.jpg";

const OpportunitiesPage = () => {
  const [selectedSector, setSelectedSector] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = opportunities.filter((o) => {
    const matchSector = selectedSector === "All" || o.sector === selectedSector;
    const matchType = selectedType === "All" || o.type === selectedType;
    const matchSearch = !search || o.title.toLowerCase().includes(search.toLowerCase()) || o.country.toLowerCase().includes(search.toLowerCase());
    return matchSector && matchType && matchSearch;
  });

  return (
    <PlatformLayout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={financialDistrict} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-4 border border-primary/20">
              <TrendingUp size={12} />
              Investment & Programs
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-3xl md:text-5xl font-black text-foreground mb-3">
              <span className="text-gradient-gold">Opportunities</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl">
              Explore investment opportunities, programs and initiatives across African markets.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 section-divider">
        <div className="container mx-auto px-6">
          {/* Filters */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search opportunities..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-secondary border border-border rounded-md pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="bg-secondary border border-border rounded-md px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {sectors.map((s) => <option key={s} value={s}>{s === "All" ? "All Sectors" : s}</option>)}
              </select>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-secondary border border-border rounded-md px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {opportunityTypes.map((t) => <option key={t} value={t}>{t === "All" ? "All Types" : t}</option>)}
              </select>
            </div>
          </ScrollReveal>

          <p className="text-xs text-muted-foreground mb-6">{filtered.length} opportunities found</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((opp, i) => (
              <ScrollReveal key={opp.id} delay={i * 80}>
                <OpportunityCard opportunity={opp} />
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No opportunities match your filters.</p>
            </div>
          )}
        </div>
      </section>
    </PlatformLayout>
  );
};

export default OpportunitiesPage;
