import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Nav
  "nav.process": { fr: "Processus", en: "Process" },
  "nav.scope": { fr: "Services", en: "Services" },
  "nav.payment": { fr: "Modalités", en: "Payment" },
  "nav.contact": { fr: "Contact", en: "Contact" },
  "nav.cta": { fr: "Soumettre une demande", en: "Submit a request" },

  // Hero
  "hero.title": {
    fr: "Assistance et facilitation de paiements, en toute confiance.",
    en: "Payment assistance and facilitation, with complete confidence.",
  },
  "hero.subtitle": {
    fr: "Un accompagnement structuré et humain pour organiser et exécuter vos paiements, en toute simplicité.",
    en: "Structured and personalized support to organize and execute your payments, with complete simplicity.",
  },
  "hero.cta": { fr: "Soumettre une demande", en: "Submit a request" },

  // Process
  "process.title": { fr: "Comment ça fonctionne", en: "How it works" },
  "process.step1.title": { fr: "Soumission", en: "Submission" },
  "process.step1.desc": {
    fr: "Soumettez votre demande via notre formulaire ou WhatsApp.",
    en: "Submit your request via our form or WhatsApp.",
  },
  "process.step2.title": { fr: "Analyse", en: "Analysis" },
  "process.step2.desc": {
    fr: "Nous analysons et validons votre demande.",
    en: "We analyze and validate your request.",
  },
  "process.step3.title": { fr: "Instructions", en: "Instructions" },
  "process.step3.desc": {
    fr: "Transmission des instructions de paiement.",
    en: "Payment instructions are transmitted.",
  },
  "process.step4.title": { fr: "Exécution", en: "Execution" },
  "process.step4.desc": {
    fr: "Exécution et suivi du paiement.",
    en: "Payment execution and follow-up.",
  },

  // Scope
  "scope.title": { fr: "Notre périmètre", en: "Our scope" },
  "scope.do.title": { fr: "Ce que nous faisons", en: "What we do" },
  "scope.do.1": {
    fr: "Assistance à l'exécution de paiements",
    en: "Payment execution assistance",
  },
  "scope.do.2": {
    fr: "Organisation et coordination des opérations",
    en: "Operations organization and coordination",
  },
  "scope.do.3": {
    fr: "Suivi, communication et accompagnement client",
    en: "Follow-up, communication and client support",
  },
  "scope.dont.title": { fr: "Ce que nous ne faisons pas", en: "What we don't do" },
  "scope.dont.1": {
    fr: "Transfert d'argent pour le compte de tiers",
    en: "Money transfers on behalf of third parties",
  },
  "scope.dont.2": {
    fr: "Services bancaires ou financiers réglementés",
    en: "Regulated banking or financial services",
  },
  "scope.dont.3": {
    fr: "Services de change, remittance ou exchange",
    en: "Currency exchange or remittance services",
  },

  // Payment
  "payment.title": { fr: "Modalités de paiement", en: "Payment terms" },
  "payment.text": {
    fr: "Les moyens de paiement disponibles (carte bancaire, virement, Mobile Money) sont communiqués après validation de la demande, selon le contexte de la prestation.",
    en: "Available payment methods (bank card, wire transfer, Mobile Money) are communicated after request validation, depending on the context of the service.",
  },

  // Contact
  "contact.title": { fr: "Soumettre une demande", en: "Submit a request" },
  "contact.name": { fr: "Nom complet", en: "Full name" },
  "contact.type": { fr: "Type de demande", en: "Request type" },
  "contact.type.payment": { fr: "Assistance paiement", en: "Payment assistance" },
  "contact.type.info": { fr: "Demande d'information", en: "Information request" },
  "contact.type.other": { fr: "Autre", en: "Other" },
  "contact.amount": { fr: "Montant approximatif", en: "Approximate amount" },
  "contact.country": { fr: "Pays de destination", en: "Destination country" },
  "contact.message": { fr: "Message", en: "Message" },
  "contact.submit": { fr: "Envoyer la demande", en: "Send request" },
  "contact.whatsapp": { fr: "Ou contactez-nous via WhatsApp", en: "Or contact us via WhatsApp" },

  // Footer
  "footer.disclaimer": {
    fr: "KGS Flow est un service d'assistance et de facilitation de paiement. Nous ne sommes pas une institution financière et ne fournissons pas de services de transfert d'argent.",
    en: "KGS Flow is a payment assistance and facilitation service. We are not a financial institution and do not provide money transfer services.",
  },
  "footer.division": {
    fr: "Division opérationnelle de Kora Global Systems",
    en: "Operational division of Kora Global Systems",
  },
  "footer.rights": {
    fr: "Tous droits réservés.",
    en: "All rights reserved.",
  },

  // Positioning statement
  "positioning": {
    fr: "KGS Flow est un service d'assistance et de facilitation de paiement. Nous accompagnons nos clients dans l'organisation, l'exécution et le suivi de paiements vers des tiers, dans le cadre de prestations de service. KGS Flow n'est pas une institution financière, ni un service de transfert d'argent.",
    en: "KGS Flow is a payment assistance and facilitation service. We support our clients in organizing, executing, and tracking payments to third parties, within the framework of service provisions. KGS Flow is not a financial institution, nor a money transfer service.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
