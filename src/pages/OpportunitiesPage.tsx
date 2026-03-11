import { useState } from "react";
import PlatformLayout from "@/components/platform/PlatformLayout";
import ScrollReveal from "@/components/platform/ScrollReveal";
import OpportunityCard from "@/components/platform/OpportunityCard";
import { opportunities, sectors, opportunityTypes } from "@/data/mockData";
import { Search, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocalizedData } from "@/hooks/useLocalizedData";

import financialDistrict from "@/assets/financial-district.jpg";

const OpportunitiesPage = () => {
  const [selectedSector, setSelectedSector] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [search, setSearch] = useState("");
  const { t } = useLanguage();
  const { localizeSector, localizeType, localizeOpp } = useLocalizedData();

  const filtered = opportunities.filter((o) => {
    const matchSector = selectedSector === "All" || o.sector === selectedSector;
    const matchType = selectedType === "All" || o.type === selectedType;
    const lo = localizeOpp(o);
    const matchSearch = !search || lo.title.toLowerCase().includes(search.toLowerCase()) || o.country.toLowerCase().includes(search.toLowerCase());
    return matchSector && matchType && matchSearch;
  });

  return (
    <PlatformLayout>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={financialDistrict} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-4 border border-primary/20">
              <TrendingUp size={12} />
              {t("opps.badge")}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-3xl md:text-5xl font-black text-foreground mb-3">
              <span className="text-gradient-gold">{t("opps.title")}</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl">
              {t("opps.desc")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 section-divider">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={t("opps.search")}
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
                {sectors.map((s) => <option key={s} value={s}>{s === "All" ? t("opps.all_sectors") : localizeSector(s)}</option>)}
              </select>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-secondary border border-border rounded-md px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {opportunityTypes.map((tp) => <option key={tp} value={tp}>{tp === "All" ? t("opps.all_types") : localizeType(tp)}</option>)}
              </select>
            </div>
          </ScrollReveal>

          <p className="text-xs text-muted-foreground mb-6">{filtered.length} {t("opps.found")}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((opp, i) => (
              <ScrollReveal key={opp.id} delay={i * 80}>
                <OpportunityCard opportunity={opp} />
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">{t("opps.no_match")}</p>
            </div>
          )}
        </div>
      </section>
    </PlatformLayout>
  );
};

export default OpportunitiesPage;
