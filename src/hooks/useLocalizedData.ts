import { useLanguage } from "@/contexts/LanguageContext";
import type { Opportunity, AfricaEvent, InsightArticle, CountryData } from "@/data/mockData";
import { SECTOR_TRANSLATIONS, TYPE_TRANSLATIONS, CATEGORY_TRANSLATIONS } from "@/data/mockData";

export const useLocalizedData = () => {
  const { lang } = useLanguage();
  const isFr = lang === "fr";

  const localizeOpp = (opp: Opportunity) => ({
    ...opp,
    title: (isFr ? opp.title_fr : undefined) || opp.title,
    summary: (isFr ? opp.summary_fr : undefined) || opp.summary,
    overview: (isFr ? opp.overview_fr : undefined) || opp.overview,
    investmentContext: (isFr ? opp.investmentContext_fr : undefined) || opp.investmentContext,
    howToParticipate: (isFr ? opp.howToParticipate_fr : undefined) || opp.howToParticipate,
  });

  const localizeEvent = (evt: AfricaEvent) => ({
    ...evt,
    name: (isFr ? evt.name_fr : undefined) || evt.name,
    description: (isFr ? evt.description_fr : undefined) || evt.description,
    whyAttend: (isFr ? evt.whyAttend_fr : undefined) || evt.whyAttend,
    audience: (isFr ? evt.audience_fr : undefined) || evt.audience,
  });

  const localizeInsight = (article: InsightArticle) => ({
    ...article,
    title: (isFr ? article.title_fr : undefined) || article.title,
    summary: (isFr ? article.summary_fr : undefined) || article.summary,
  });

  const localizeCountry = (country: CountryData) => ({
    ...country,
    name: (isFr ? country.name_fr : undefined) || country.name,
    overview: (isFr ? country.overview_fr : undefined) || country.overview,
    description: (isFr ? country.description_fr : undefined) || country.description,
    keySectors: (isFr ? country.keySectors_fr : undefined) || country.keySectors,
    capital: (isFr ? country.capital_fr : undefined) || country.capital,
    topRanking: (isFr ? country.topRanking_fr : undefined) || country.topRanking,
    investmentRange: (isFr ? country.investmentRange_fr : undefined) || country.investmentRange,
  });

  const localizeSector = (sector: string) => isFr ? (SECTOR_TRANSLATIONS[sector] || sector) : sector;
  const localizeType = (type: string) => isFr ? (TYPE_TRANSLATIONS[type] || type) : type;
  const localizeCategory = (category: string) => isFr ? (CATEGORY_TRANSLATIONS[category] || category) : category;

  const dateLocale = isFr ? "fr-FR" : "en-US";

  return {
    localizeOpp,
    localizeEvent,
    localizeInsight,
    localizeCountry,
    localizeSector,
    localizeType,
    localizeCategory,
    dateLocale,
  };
};
