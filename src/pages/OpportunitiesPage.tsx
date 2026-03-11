import { useState } from "react";
import PlatformLayout from "@/components/platform/PlatformLayout";
import OpportunityCard from "@/components/platform/OpportunityCard";
import { opportunities, sectors, opportunityTypes } from "@/data/mockData";
import { Search } from "lucide-react";

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
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Opportunities</h1>
          <p className="text-sm text-muted-foreground mb-8">
            Explore investment opportunities, programs and initiatives across African markets.
          </p>

          {/* Search & Filters */}
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

          <p className="text-xs text-muted-foreground mb-6">{filtered.length} opportunities found</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((opp) => (
              <OpportunityCard key={opp.id} opportunity={opp} />
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
