import PlatformLayout from "@/components/platform/PlatformLayout";
import ScrollReveal from "@/components/platform/ScrollReveal";
import { insights } from "@/data/mockData";
import { Clock, ArrowRight, TrendingUp, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocalizedData } from "@/hooks/useLocalizedData";

import financialDistrict from "@/assets/financial-district.jpg";
import nairobiTechHub from "@/assets/nairobi-tech-hub.jpg";
import lagosSkyline from "@/assets/lagos-skyline.jpg";
import solarFarm from "@/assets/solar-farm-morocco.jpg";
import portInfra from "@/assets/port-infrastructure.jpg";
import smartCity from "@/assets/smart-city.jpg";
import miningTech from "@/assets/mining-tech.jpg";

const IMAGE_MAP: Record<string, string> = {
  "financial-district": financialDistrict,
  "nairobi-tech-hub": nairobiTechHub,
  "lagos-skyline": lagosSkyline,
  "solar-farm-morocco": solarFarm,
  "port-infrastructure": portInfra,
  "smart-city": smartCity,
  "mining-tech": miningTech,
};

const InsightsPage = () => {
  const { t } = useLanguage();
  const { localizeInsight, localizeCategory, dateLocale } = useLocalizedData();

  const localizedInsights = insights.map(localizeInsight);
  const featured = localizedInsights[0];
  const rest = localizedInsights.slice(1);

  return (
    <PlatformLayout>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={lagosSkyline} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-4 border border-primary/20">
              <BookOpen size={12} />
              {t("insights.badge")}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-3xl md:text-5xl font-black text-foreground mb-3">
              {t("insights.title")} <span className="text-gradient-gold">{t("insights.title_highlight")}</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed">
              {t("insights.desc")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 section-divider">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <article className="relative rounded-xl overflow-hidden group cursor-pointer card-lift">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[360px]">
                <div className="relative overflow-hidden">
                  <img
                    src={IMAGE_MAP[featured.image || "financial-district"]}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card lg:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent lg:hidden" />
                </div>
                <div className="bg-card p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] uppercase tracking-widest text-primary font-bold bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                      {t("insights.featured")}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-accent font-semibold bg-accent/10 px-2 py-1 rounded">
                      {localizeCategory(featured.category)}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{featured.summary}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{featured.author}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock size={10} /> {featured.readTime}
                      </div>
                      <span>•</span>
                      <span>{new Date(featured.date).toLocaleDateString(dateLocale, { month: "short", day: "numeric", year: "numeric" })}</span>
                    </div>
                    <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      {t("insights.read")} <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 section-divider">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <TrendingUp size={16} className="text-primary" />
              <h2 className="text-xl font-bold text-foreground">{t("insights.latest")}</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article, i) => (
              <ScrollReveal key={article.id} delay={i * 100}>
                <article className="glass-card rounded-xl overflow-hidden group cursor-pointer card-lift h-full flex flex-col">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={IMAGE_MAP[article.image || "financial-district"]}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="text-[10px] uppercase tracking-wider text-primary font-bold bg-background/80 backdrop-blur-sm px-2 py-1 rounded border border-primary/20">
                        {localizeCategory(article.category)}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4 flex-1">
                      {article.summary}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                        <span className="font-medium text-foreground/70">{article.author}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Clock size={9} /> {article.readTime}
                        </div>
                      </div>
                      <span className="text-[10px] text-muted-foreground">
                        {new Date(article.date).toLocaleDateString(dateLocale, { month: "short", day: "numeric" })}
                      </span>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 section-divider">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="glass-card rounded-xl p-10 md:p-16 text-center animate-glow-pulse">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                {t("insights.newsletter_title")}
              </h2>
              <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
                {t("insights.newsletter_desc")}
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

export default InsightsPage;
