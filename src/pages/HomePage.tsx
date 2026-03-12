import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, TrendingUp, Shield, Zap, BarChart3, Clock, Calendar, MapPin, BookOpen, Radar, Lock } from "lucide-react";
import AfricaGlobe from "@/components/platform/AfricaGlobe";
import AfricaSVGMap from "@/components/platform/AfricaSVGMap";
import OpportunityCard from "@/components/platform/OpportunityCard";
import EventCard from "@/components/platform/EventCard";
import PlatformLayout from "@/components/platform/PlatformLayout";
import ScrollReveal from "@/components/platform/ScrollReveal";
import { opportunities, events, insights, sectors, countries } from "@/data/mockData";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocalizedData } from "@/hooks/useLocalizedData";
import { useCountUp } from "@/hooks/useCountUp";

import heroAfricaModern from "@/assets/hero-africa-modern.jpg";
import financialDistrict from "@/assets/financial-district.jpg";
import nairobiTechHub from "@/assets/nairobi-tech-hub.jpg";

const IMAGE_MAP: Record<string, string> = {
  "financial-district": financialDistrict,
  "nairobi-tech-hub": nairobiTechHub,
  "lagos-skyline": heroAfricaModern,
};

const HomePage = () => {
  const { t } = useLanguage();
  const { localizeInsight, localizeCategory, localizeSector, dateLocale } = useLocalizedData();
  const [selectedSector, setSelectedSector] = useState("All");

  const totalOpps = opportunities.length;
  const totalCountries = countries.length;
  const totalEvents = events.length;

  const animOpps = useCountUp(totalOpps, 2000, 600);
  const animCountries = useCountUp(totalCountries, 2000, 800);
  const animEvents = useCountUp(totalEvents, 2000, 1000);

  const filteredOpps = selectedSector === "All"
    ? opportunities
    : opportunities.filter((o) => o.sector === selectedSector);

  const localizedInsights = insights.map(localizeInsight);

  return (
    <PlatformLayout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroAfricaModern} alt="African metropolis" className="w-full h-full object-cover hero-3d-pan" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal delay={150}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6">
                  {t("home.hero.title")}{" "}
                  <span className="text-gradient-gold">{t("home.hero.title_highlight")}</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={250}>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                  {t("home.hero.subtitle")}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={350}>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/opportunities"
                    className="btn-glow inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-md text-sm font-semibold transition-all"
                  >
                    {t("home.hero.cta_explore")} <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/newsletter"
                    className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm text-foreground px-7 py-3.5 rounded-md text-sm font-medium hover:bg-secondary transition-colors border border-border"
                  >
                    {t("home.hero.cta_newsletter")}
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <div className="flex items-center gap-8 mt-10">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={14} className="text-primary" />
                    <span className="text-xs text-muted-foreground"><strong className="text-foreground tabular-nums">{animOpps}</strong> {t("home.hero.stat_opps")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield size={14} className="text-primary" />
                    <span className="text-xs text-muted-foreground"><strong className="text-foreground tabular-nums">{animCountries}</strong> {t("home.hero.stat_countries")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap size={14} className="text-primary" />
                    <span className="text-xs text-muted-foreground"><strong className="text-foreground tabular-nums">{animEvents}</strong> {t("home.hero.stat_events")}</span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <div className="inline-flex items-center gap-2 text-[10px] text-muted-foreground tracking-widest uppercase mt-8 opacity-60">
                  <Globe size={10} />
                  {t("home.hero.tagline")}
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={400} className="hidden lg:block">
              <AfricaGlobe />
            </ScrollReveal>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Interactive Africa Map */}
      <section className="relative py-20 section-divider overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float animation-delay-400" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/3 rounded-full blur-2xl animate-float animation-delay-700" />
          <div className="absolute top-10 right-1/4 w-px h-40 bg-gradient-to-b from-transparent via-primary/15 to-transparent animate-float animation-delay-200" />
          <div className="absolute bottom-20 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-accent/15 to-transparent animate-float animation-delay-600" />
          <div className="absolute top-1/3 right-10 w-40 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-float animation-delay-800" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                  <BarChart3 size={12} />
                  {t("home.map.badge")}
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{t("home.map.title")}</h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {t("home.map.desc")}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="flex items-center gap-6 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-accent animate-dot-blink" /> {t("home.map.legend_opps")}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-primary animate-dot-blink animation-delay-300" /> {t("home.map.legend_events")}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm bg-secondary border border-border" /> {t("home.map.legend_untracked")}
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={200}>
              <AfricaSVGMap compact />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Africa Opportunity Radar — Featured Opportunities */}
      <section className="relative py-20 section-divider overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={financialDistrict} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                  <Radar size={12} />
                  {t("home.featured.badge")}
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-2">{t("radar.title")}</h2>
                <p className="text-sm text-muted-foreground">{t("radar.desc")}</p>
              </div>
              <Link to="/opportunities" className="hidden md:inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:gap-2.5 transition-all">
                {t("home.featured.view_all")} <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex flex-wrap gap-2 mb-8">
              {sectors.map((sector) => (
                <button
                  key={sector}
                  onClick={() => setSelectedSector(sector)}
                  className={`text-xs px-4 py-2 rounded-md transition-all font-medium ${
                    selectedSector === sector
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {localizeSector(sector)}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredOpps.slice(0, 6).map((opp, i) => (
              <ScrollReveal key={opp.id} delay={i * 120}>
                <OpportunityCard opportunity={opp} />
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/opportunities" className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all">
              {t("radar.view_all")} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 section-divider">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="inline-flex items-center gap-2 text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                  <Calendar size={12} />
                  {t("home.events.badge")}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{t("home.events.title")}</h2>
                <p className="text-sm text-muted-foreground">{t("home.events.desc")}</p>
              </div>
              <Link to="/events" className="hidden md:inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:gap-2.5 transition-all">
                {t("home.events.view_all")} <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.slice(0, 4).map((evt, i) => (
              <ScrollReveal key={evt.id} delay={i * 120}>
                <EventCard event={evt} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="relative py-20 section-divider overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <img src={nairobiTechHub} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="inline-flex items-center gap-2 text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                  <BookOpen size={12} />
                  {t("home.insights.badge")}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{t("home.insights.title")}</h2>
                <p className="text-sm text-muted-foreground">{t("home.insights.desc")}</p>
              </div>
              <Link to="/insights" className="hidden md:inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:gap-2.5 transition-all">
                {t("home.insights.view_all")} <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Link to="/newsletter" className="glass-card rounded-xl overflow-hidden mb-6 group cursor-pointer card-lift block hover:border-primary/30">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-48 md:h-auto overflow-hidden">
                  <img
                    src={IMAGE_MAP[localizedInsights[0].image || "financial-district"]}
                    alt={localizedInsights[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card md:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent md:hidden" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                   <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] uppercase tracking-wider text-primary font-bold bg-primary/10 px-2 py-1 rounded border border-primary/20">{t("insights.featured")}</span>
                    <span className="text-[10px] uppercase tracking-wider text-accent font-semibold">{localizeCategory(localizedInsights[0].category)}</span>
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-primary-foreground font-bold bg-primary px-2 py-1 rounded">
                      <Lock size={9} /> Premium
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{localizedInsights[0].title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-3 mb-4">{localizedInsights[0].summary}</p>
                  <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                    <span className="font-medium text-foreground/70">{localizedInsights[0].author}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1"><Clock size={9} /> {localizedInsights[0].readTime}</div>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {localizedInsights.slice(1, 4).map((article, i) => (
              <ScrollReveal key={article.id} delay={200 + i * 100}>
                <Link to="/newsletter" className="glass-card rounded-lg overflow-hidden group card-lift hover:border-primary/30 cursor-pointer h-full flex flex-col block">
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={IMAGE_MAP[article.image || "financial-district"]}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                     <span className="absolute top-2 left-2 text-[9px] uppercase tracking-wider text-primary font-bold bg-background/80 backdrop-blur-sm px-2 py-0.5 rounded">
                       {localizeCategory(article.category)}
                     </span>
                     <span className="absolute top-2 right-2 inline-flex items-center gap-1 text-[9px] uppercase tracking-wider text-primary-foreground font-bold bg-primary px-2 py-0.5 rounded">
                       <Lock size={9} /> Premium
                     </span>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-sm font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">{article.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 flex-1">{article.summary}</p>
                    <div className="flex items-center gap-2 mt-3 text-[10px] text-muted-foreground">
                      <Clock size={9} /> {article.readTime}
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 section-divider">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="glass-card rounded-xl p-10 md:p-16 text-center animate-glow-pulse">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                {t("home.newsletter.title")}
              </h2>
              <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
                {t("home.newsletter.desc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t("home.newsletter.placeholder")}
                  className="flex-1 bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
                <button className="btn-glow bg-primary text-primary-foreground px-6 py-2.5 rounded-md text-sm font-semibold transition-all">
                  {t("home.newsletter.subscribe")}
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PlatformLayout>
  );
};

export default HomePage;
