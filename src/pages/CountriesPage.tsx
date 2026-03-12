import PlatformLayout from "@/components/platform/PlatformLayout";
import ScrollReveal from "@/components/platform/ScrollReveal";
import AfricaSVGMap from "@/components/platform/AfricaSVGMap";
import { countries, opportunities, events } from "@/data/mockData";
import { MapPin, ArrowRight, Globe, Users, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocalizedData } from "@/hooks/useLocalizedData";

import africaCityscape from "@/assets/africa-cityscape.jpg";

const CountriesPage = () => {
  const { t } = useLanguage();
  const { localizeCountry } = useLocalizedData();

  return (
    <PlatformLayout>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={africaCityscape} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-4 border border-primary/20">
              <Globe size={12} />
              {t("countries.badge")}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-3xl md:text-5xl font-black text-foreground mb-3">
              {t("countries.title")} <span className="text-gradient-gold">{t("countries.title_highlight")}</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl">
              {t("countries.desc")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 section-divider">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="mb-12 glass-card rounded-xl p-6">
              <AfricaSVGMap />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {countries.map((rawCountry, i) => {
              const country = localizeCountry(rawCountry);
              return (
                <ScrollReveal key={rawCountry.code} delay={i * 70}>
                  <Link
                    to={`/countries/${rawCountry.code}`}
                    className="glass-card rounded-lg p-5 hover:border-primary/30 transition-all group card-lift block"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={`https://flagcdn.com/w40/${rawCountry.code.toLowerCase()}.png`}
                          srcSet={`https://flagcdn.com/w80/${rawCountry.code.toLowerCase()}.png 2x`}
                          alt={`${country.name} flag`}
                          className="w-8 h-6 object-cover rounded shadow-sm border border-border"
                        />
                        <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">{country.name}</h3>
                      </div>
                      <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">{country.overview}</p>

                    {rawCountry.capital && (
                      <div className="flex items-center gap-4 text-[11px] text-muted-foreground mb-3">
                        <span className="flex items-center gap-1"><MapPin size={10} /> {country.capital}</span>
                        {rawCountry.population && <span className="flex items-center gap-1"><Users size={10} /> {rawCountry.population}</span>}
                        {rawCountry.gdp && <span className="flex items-center gap-1"><DollarSign size={10} /> {rawCountry.gdp}</span>}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {country.keySectors.map((s) => (
                        <span key={s} className="text-[10px] bg-secondary text-muted-foreground px-2 py-0.5 rounded">{s}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{opportunities.filter(o => o.country === rawCountry.name).length} {t("countries.opportunities")}</span>
                      <span>{events.filter(e => e.country === rawCountry.name).length} {t("countries.events")}</span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </PlatformLayout>
  );
};

export default CountriesPage;
