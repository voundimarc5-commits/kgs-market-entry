import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Nav
  "nav.process": { fr: "Comment ça marche", en: "How it works" },
  "nav.scope": { fr: "Services", en: "Services" },
  "nav.payment": { fr: "Modalités", en: "Payment" },
  "nav.contact": { fr: "Demande", en: "Request" },
  "nav.faq": { fr: "FAQ", en: "FAQ" },
  "nav.cta": { fr: "Faire une demande", en: "Make a request" },

  // Hero
  "hero.title": {
    fr: "Besoin de faire un paiement à l'international ?",
    en: "Need to make an international payment?",
  },
  "hero.title2": {
    fr: "Nous vous accompagnons de A à Z.",
    en: "We support you every step of the way.",
  },
  "hero.subtitle": {
    fr: "KGS Flow vous aide à organiser, exécuter et suivre vos paiements vers des tiers, avec un accompagnement humain et un processus clair.",
    en: "KGS Flow helps you organize, execute and track your payments to third parties, with human support and a clear process.",
  },
  "hero.cta": { fr: "FAIRE UNE DEMANDE", en: "MAKE A REQUEST" },
  "hero.micro": {
    fr: "Réponse rapide • Accompagnement personnalisé • Processus encadré",
    en: "Quick response • Personalized support • Structured process",
  },

  // Devis calculator
  "devis.title": { fr: "Estimation rapide", en: "Quick estimate" },
  "devis.amount": { fr: "Montant à envoyer", en: "Amount to send" },
  "devis.from": { fr: "Depuis", en: "From" },
  "devis.to": { fr: "Vers", en: "To" },
  "devis.result_label": { fr: "Frais de service estimés", en: "Estimated service fee" },
  "devis.note": {
    fr: "Cette estimation est indicative. Les frais définitifs sont communiqués après analyse de votre demande.",
    en: "This estimate is indicative. Final fees are communicated after analysis of your request.",
  },
  "devis.cta": { fr: "Soumettre cette demande", en: "Submit this request" },

  // About / Donner du sens
  "about.label": { fr: "Pourquoi KGS Flow", en: "Why KGS Flow" },
  "about.title": { fr: "Donner du sens à votre paiement", en: "Making sense of your payment" },
  "about.text1": {
    fr: "Organiser un paiement à l'international peut vite devenir compliqué : procédures floues, erreurs possibles, manque de suivi.",
    en: "Organizing an international payment can quickly become complicated: unclear procedures, possible errors, lack of follow-up.",
  },
  "about.text2": {
    fr: "KGS Flow intervient comme service d'assistance : nous analysons votre besoin, vous expliquons la démarche, puis organisons et exécutons le paiement avec un suivi clair jusqu'à confirmation.",
    en: "KGS Flow acts as an assistance service: we analyze your needs, explain the process, then organize and execute the payment with clear follow-up until confirmation.",
  },

  // Process
  "process.label": { fr: "Processus", en: "Process" },
  "process.title": { fr: "Comment ça fonctionne ?", en: "How does it work?" },
  "process.step1.title": { fr: "Soumission", en: "Submission" },
  "process.step1.desc": {
    fr: "Vous soumettez votre demande via notre formulaire ou WhatsApp.",
    en: "You submit your request via our form or WhatsApp.",
  },
  "process.step2.title": { fr: "Analyse", en: "Analysis" },
  "process.step2.desc": {
    fr: "Nous analysons et cadrons la demande.",
    en: "We analyze and frame the request.",
  },
  "process.step3.title": { fr: "Procédure", en: "Procedure" },
  "process.step3.desc": {
    fr: "Nous vous indiquons la procédure à suivre.",
    en: "We guide you through the procedure to follow.",
  },
  "process.step4.title": { fr: "Exécution & Suivi", en: "Execution & Follow-up" },
  "process.step4.desc": {
    fr: "Nous exécutons le paiement et assurons le suivi.",
    en: "We execute the payment and ensure follow-up.",
  },

  // Contact
  "contact.label": { fr: "Demande", en: "Request" },
  "contact.title": { fr: "Faites votre demande en quelques minutes", en: "Make your request in minutes" },
  "contact.intro": {
    fr: "Chaque demande est analysée individuellement afin de garantir un traitement correct et adapté.",
    en: "Each request is individually analyzed to ensure correct and appropriate processing.",
  },
  "contact.name": { fr: "Nom complet", en: "Full name" },
  "contact.whatsapp_number": { fr: "Numéro WhatsApp", en: "WhatsApp number" },
  "contact.type": { fr: "Type de demande", en: "Request type" },
  "contact.type.payment": { fr: "Assistance paiement", en: "Payment assistance" },
  "contact.type.info": { fr: "Demande d'information", en: "Information request" },
  "contact.type.other": { fr: "Autre", en: "Other" },
  "contact.amount": { fr: "Montant approximatif", en: "Approximate amount" },
  "contact.country": { fr: "Pays de destination", en: "Destination country" },
  "contact.message": { fr: "Message libre", en: "Free message" },
  "contact.submit": { fr: "Envoyer la demande", en: "Send request" },
  "contact.whatsapp": { fr: "Ou contactez-nous directement via WhatsApp", en: "Or contact us directly via WhatsApp" },

  // Payment
  "payment.label": { fr: "Modalités", en: "Payment terms" },
  "payment.title": { fr: "Modalités de règlement", en: "Payment terms" },
  "payment.text": {
    fr: "Les modalités de règlement (carte bancaire, virement, Mobile Money) sont communiquées après validation de la demande, selon le contexte et la nature du paiement.",
    en: "Payment terms (bank card, wire transfer, Mobile Money) are communicated after request validation, depending on the context and nature of the payment.",
  },

  // Scope
  "scope.label": { fr: "Périmètre", en: "Scope" },
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
    fr: "Suivi et communication client",
    en: "Follow-up and client communication",
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

  // FAQ
  "faq.label": { fr: "Questions fréquentes", en: "Frequently asked questions" },
  "faq.title": { fr: "FAQ", en: "FAQ" },
  "faq.q1": { fr: "KGS Flow est-il une banque ?", en: "Is KGS Flow a bank?" },
  "faq.a1": {
    fr: "Non. KGS Flow est un service d'assistance et de facilitation de paiement.",
    en: "No. KGS Flow is a payment assistance and facilitation service.",
  },
  "faq.q2": { fr: "Puis-je payer directement sur le site ?", en: "Can I pay directly on the website?" },
  "faq.a2": {
    fr: "Non. Les modalités de règlement sont communiquées après validation de la demande.",
    en: "No. Payment terms are communicated after request validation.",
  },
  "faq.q3": { fr: "Ma demande est-elle automatique ?", en: "Is my request automatic?" },
  "faq.a3": {
    fr: "Non. Chaque demande est analysée et suivie individuellement.",
    en: "No. Each request is individually analyzed and followed up.",
  },

  // Positioning statement
  "positioning": {
    fr: "KGS Flow est un service d'assistance et de facilitation de paiement. Nous accompagnons nos clients dans l'organisation, l'exécution et le suivi de paiements vers des tiers, dans le cadre de prestations de service. KGS Flow n'est pas une institution financière, ni un service de transfert d'argent.",
    en: "KGS Flow is a payment assistance and facilitation service. We support our clients in organizing, executing, and tracking payments to third parties, within the framework of service provisions. KGS Flow is not a financial institution, nor a money transfer service.",
  },

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
