import { useParams, Link } from "react-router-dom";
import PlatformLayout from "@/components/platform/PlatformLayout";
import ScrollReveal from "@/components/platform/ScrollReveal";
import { countries, opportunities, events } from "@/data/mockData";
import { ArrowLeft, MapPin, DollarSign, Trophy, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocalizedData } from "@/hooks/useLocalizedData";
import EventCard from "@/components/platform/EventCard";
import OpportunityCard from "@/components/platform/OpportunityCard";

import heroNG from "@/assets/country-hero-ng.jpg";
import heroKE from "@/assets/country-hero-ke.jpg";
import heroZA from "@/assets/country-hero-za.jpg";
import heroGA from "@/assets/country-hero-ga.jpg";
import heroMA from "@/assets/country-hero-ma.jpg";
import heroRW from "@/assets/country-hero-rw.jpg";
import heroCI from "@/assets/country-hero-ci.jpg";
import heroSN from "@/assets/country-hero-sn.jpg";
import heroGH from "@/assets/country-hero-gh.jpg";
import heroET from "@/assets/country-hero-et.jpg";
import heroEG from "@/assets/country-hero-eg.jpg";
import heroCM from "@/assets/country-hero-cm.jpg";
import heroTN from "@/assets/country-hero-tn.jpg";

const COUNTRY_HERO_IMAGES: Record<string, string> = {
  NG: heroNG, KE: heroKE, ZA: heroZA, GA: heroGA, MA: heroMA,
  RW: heroRW, CI: heroCI, SN: heroSN, GH: heroGH, ET: heroET,
  EG: heroEG, CM: heroCM, TN: heroTN,
};

const CountryDetailPage = () => {
  const { code } = useParams();
  const { t } = useLanguage();
  const { localizeCountry, dateLocale } = useLocalizedData();
  const rawCountry = countries.find((c) => c.code === code);

  if (!rawCountry) {
    return (
      <PlatformLayout>
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">{t("country.not_found")}</h1>
          <Link to="/countries" className="text-primary text-sm">← {t("country.back")}</Link>
        </div>
      </PlatformLayout>
    );
  }

  const country = localizeCountry(rawCountry);
  const countryOpps = opportunities.filter((o) => o.country === rawCountry.name);
  const countryEvents = events.filter((e) => e.country === rawCountry.name);
  const heroImage = COUNTRY_HERO_IMAGES[rawCountry.code];

  return (
    <PlatformLayout>
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          {heroImage && (
            <img src={heroImage} alt={`${country.name} skyline`} className="w-full h-full object-cover" loading="eager" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <Link to="/countries" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft size={14} /> {t("country.back")}
          </Link>

          <ScrollReveal>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={`https://flagcdn.com/w80/${rawCountry.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w160/${rawCountry.code.toLowerCase()}.png 2x`}
                alt={`${country.name} flag`}
                className="w-16 h-12 object-cover rounded-lg shadow-md border border-border"
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-foreground">{country.name}</h1>
                <p className="text-sm text-muted-foreground mt-1">{country.overview}</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Key stats */}
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {country.topRanking && (
                <div className="glass-card rounded-lg p-4 text-center">
                  <Trophy size={16} className="text-primary mx-auto mb-2" />
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">{t("country.top_ranking")}</p>
                  <p className="text-xs font-semibold text-foreground">{country.topRanking}</p>
                </div>
              )}
              {rawCountry.gdp && (
                <div className="glass-card rounded-lg p-4 text-center">
                  <DollarSign size={16} className="text-primary mx-auto mb-2" />
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">PIB / GDP</p>
                  <p className="text-sm font-semibold text-foreground">{rawCountry.gdp}</p>
                </div>
              )}
              {country.investmentRange && (
                <div className="glass-card rounded-lg p-4 text-center">
                  <TrendingUp size={16} className="text-primary mx-auto mb-2" />
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">{t("country.investment_range")}</p>
                  <p className="text-xs font-semibold text-foreground">{country.investmentRange}</p>
                </div>
              )}
              <div className="glass-card rounded-lg p-4 text-center">
                <MapPin size={16} className="text-primary mx-auto mb-2" />
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">{t("countries.opportunities")}</p>
                <p className="text-sm font-semibold text-foreground">{countryOpps.length}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Opportunities */}
          <div className="mb-10">
            <ScrollReveal>
              <h2 className="text-xl font-bold text-foreground mb-6">{t("country.active_opps")} ({countryOpps.length})</h2>
            </ScrollReveal>
            {countryOpps.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {countryOpps.map((opp, i) => (
                  <ScrollReveal key={opp.id} delay={i * 80}>
                    <OpportunityCard opportunity={opp} />
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">{t("country.no_opps")}</p>
            )}
          </div>

          {/* Events */}
          <div className="mb-10">
            <ScrollReveal>
              <h2 className="text-xl font-bold text-foreground mb-6">{t("country.upcoming_events")} ({countryEvents.length})</h2>
            </ScrollReveal>
            {countryEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {countryEvents.map((evt, i) => (
                  <ScrollReveal key={evt.id} delay={i * 80}>
                    <EventCard event={evt} />
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">{t("country.no_events")}</p>
            )}
          </div>

          {/* Description */}
          {country.description && (
            <ScrollReveal>
              <div className="glass-card rounded-xl p-6 md:p-8 mb-10">
                <h2 className="text-lg font-bold text-foreground mb-4">{t("country.about")} {country.name}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{country.description}</p>
              </div>
            </ScrollReveal>
          )}

          {/* Key Sectors */}
          <ScrollReveal delay={100}>
            <div className="glass-card rounded-xl p-6 mb-10">
              <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">{t("country.key_sectors")}</h2>
              <div className="flex flex-wrap gap-2">
                {country.keySectors.map((s) => (
                  <span key={s} className="text-xs bg-primary/10 text-primary px-4 py-2 rounded-md font-medium">{s}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PlatformLayout>
  );
};

export default CountryDetailPage;
