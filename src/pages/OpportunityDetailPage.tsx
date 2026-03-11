import { useParams, Link } from "react-router-dom";
import PlatformLayout from "@/components/platform/PlatformLayout";
import ScrollReveal from "@/components/platform/ScrollReveal";
import LeadCaptureForm from "@/components/platform/LeadCaptureForm";
import { opportunities } from "@/data/mockData";
import ParallaxHero from "@/components/platform/ParallaxHero";
import { ArrowLeft, MapPin, Calendar, DollarSign, Briefcase, ExternalLink, TrendingUp, Lightbulb, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocalizedData } from "@/hooks/useLocalizedData";

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

const OpportunityDetailPage = () => {
  const { id } = useParams();
  const { t } = useLanguage();
  const { localizeOpp, localizeSector, localizeType, dateLocale } = useLocalizedData();
  const rawOpportunity = opportunities.find((o) => o.id === id);

  if (!rawOpportunity) {
    return (
      <PlatformLayout>
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">{t("opp.not_found")}</h1>
          <Link to="/opportunities" className="text-primary text-sm">← {t("opp.back")}</Link>
        </div>
      </PlatformLayout>
    );
  }

  const opportunity = localizeOpp(rawOpportunity);
  const bgImage = getImageForSector(rawOpportunity.sector);

  return (
    <PlatformLayout>
      <ParallaxHero image={bgImage}>
        <div className="container mx-auto max-w-4xl">
          <Link to="/opportunities" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft size={14} /> {t("opp.back")}
          </Link>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] uppercase tracking-wider text-primary-foreground font-semibold bg-primary px-2.5 py-1 rounded-sm">
              {localizeType(rawOpportunity.type)}
            </span>
            <span className="text-[10px] uppercase tracking-wider font-medium bg-accent/80 text-accent-foreground px-2 py-1 rounded-sm">
              {rawOpportunity.country}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">{opportunity.title}</h1>
        </div>
      </ParallaxHero>

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal>
            <p className="text-base text-muted-foreground mb-8">{opportunity.summary}</p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="glass-card rounded-lg p-6 mb-8">
              <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">{t("opp.key_info")}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1"><MapPin size={12} /> {t("opp.country")}</div>
                  <p className="text-sm font-medium text-foreground">{rawOpportunity.country}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1"><Briefcase size={12} /> {t("opp.sector")}</div>
                  <p className="text-sm font-medium text-foreground">{localizeSector(rawOpportunity.sector)}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1"><Calendar size={12} /> {t("opp.deadline")}</div>
                  <p className="text-sm font-medium text-foreground">{new Date(rawOpportunity.deadline).toLocaleDateString(dateLocale, { month: "long", day: "numeric", year: "numeric" })}</p>
                </div>
                {rawOpportunity.investmentSize && (
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1"><DollarSign size={12} /> {t("opp.investment_size")}</div>
                    <p className="text-sm font-medium text-foreground">{rawOpportunity.investmentSize}</p>
                  </div>
                )}
                {rawOpportunity.website && (
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1"><Globe size={12} /> {t("opp.website")}</div>
                    <a href={rawOpportunity.website} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline">{rawOpportunity.website}</a>
                  </div>
                )}
              </div>
              {rawOpportunity.source && (
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <ExternalLink size={12} /> {t("opp.source")}: {rawOpportunity.source}
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>

          {opportunity.overview && (
            <ScrollReveal delay={200}>
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-foreground mb-3">{t("opp.overview")}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{opportunity.overview}</p>
              </div>
            </ScrollReveal>
          )}

          {opportunity.investmentContext && (
            <ScrollReveal delay={250}>
              <div className="glass-card rounded-lg p-6 mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={16} className="text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">{t("opp.investment_context")}</h2>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{opportunity.investmentContext}</p>
              </div>
            </ScrollReveal>
          )}

          {opportunity.howToParticipate && (
            <ScrollReveal delay={300}>
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb size={16} className="text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">{t("opp.how_to_participate")}</h2>
                </div>
                <ol className="space-y-3">
                  {opportunity.howToParticipate.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-medium shrink-0 mt-0.5">{i + 1}</span>
                      <span className="text-sm text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </ScrollReveal>
          )}

          <ScrollReveal delay={350}>
            <div className="glass-card rounded-xl p-8 text-center animate-glow-pulse mb-8">
              <h2 className="text-xl font-bold text-foreground mb-3">{t("opp.need_help")}</h2>
              <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                {t("opp.need_help_desc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {rawOpportunity.website && (
                  <a
                    href={rawOpportunity.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glow inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-semibold transition-all"
                  >
                    <ExternalLink size={14} /> {t("opp.visit_website")}
                  </a>
                )}
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 bg-secondary text-foreground px-6 py-3 rounded-md text-sm font-medium hover:bg-secondary/80 transition-colors border border-border"
                >
                  {t("opp.contact_kgs")}
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <LeadCaptureForm opportunityTitle={opportunity.title} />
          </ScrollReveal>
        </div>
      </section>
    </PlatformLayout>
  );
};

export default OpportunityDetailPage;
