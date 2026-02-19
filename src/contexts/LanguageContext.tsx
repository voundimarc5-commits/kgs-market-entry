import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Banner
  "banner.disclaimer": {
    fr: "Avertissement : KGS Flow ne fournit pas de services financiers, n'exécute pas de transactions et ne détient pas de fonds. Toutes les opérations financières sont menées exclusivement par des prestataires tiers agréés.",
    en: "Disclaimer: KGS Flow does not provide financial services, does not execute transactions, and does not custody funds. All financial operations are conducted exclusively by licensed third-party providers.",
  },

  // Nav
  "nav.process": { fr: "Comment ça marche", en: "How it works" },
  "nav.scope": { fr: "Services", en: "Services" },
  "nav.payment": { fr: "Modalités", en: "Terms" },
  "nav.contact": { fr: "Demande", en: "Request" },
  "nav.faq": { fr: "FAQ", en: "FAQ" },
  "nav.cta": { fr: "Demander un devis", en: "Request a quote" },

  // Hero
  "hero.title": {
    fr: "VOS FLUX INTERNATIONAUX",
    en: "YOUR INTERNATIONAL FLOWS",
  },
  "hero.title2": {
    fr: "structurés de A à Z.",
    en: "structured from A to Z.",
  },
  "hero.subtitle": {
    fr: "Nous analysons votre besoin, structurons le parcours optimal et coordonnons chaque étape jusqu'à confirmation. Vous restez informé tout au long du processus.",
    en: "We analyze your needs, structure the optimal path and coordinate every step until confirmation. You stay informed throughout the process.",
  },
  "hero.cta": { fr: "DEMANDER UN DEVIS", en: "REQUEST A QUOTE" },
  "hero.micro": {
    fr: "Réponse sous quelques heures • Accompagnement personnalisé • Processus encadré",
    en: "Response within hours • Personalized support • Structured process",
  },

  // Quote form
  "quote.form_title": { fr: "Demande de devis", en: "Quote Request" },
  "quote.form_helper": {
    fr: "Renseignez quelques détails ci-dessous pour recevoir un devis indicatif. Les conditions définitives sont confirmées avant toute mise en œuvre.",
    en: "Provide a few details below to receive an indicative quote. Final terms are confirmed prior to any execution.",
  },
  "quote.direction": { fr: "Direction", en: "Direction" },
  "quote.direction_send": { fr: "Je souhaite envoyer", en: "I want to send" },
  "quote.direction_receive": { fr: "Le destinataire doit recevoir", en: "Recipient should receive" },
  "quote.amount": { fr: "Montant", en: "Amount" },
  "quote.from": { fr: "Devise d'envoi", en: "From currency" },
  "quote.to": { fr: "Devise de destination", en: "To currency" },
  "quote.email": { fr: "Email", en: "Email" },
  "quote.optional": { fr: "Optionnel mais recommandé", en: "Optional but recommended" },
  "quote.payment_method": { fr: "Moyen de paiement préféré", en: "Preferred payment method" },
  "quote.client_type": { fr: "Type de client", en: "Client type" },
  "quote.urgency": { fr: "Urgence", en: "Urgency" },
  "quote.purpose": { fr: "Contexte", en: "Purpose" },
  "quote.purpose_placeholder": { fr: "Contexte bref (optionnel)", en: "Brief context (optional)" },
  "quote.submit": { fr: "SOUMETTRE LA DEMANDE", en: "SUBMIT REQUEST" },
  "quote.disclaimer": {
    fr: "Cette demande est à des fins d'estimation et de discussion uniquement. Aucun paiement n'est initié sur cette plateforme. Les conditions définitives sont confirmées manuellement avant mise en œuvre.",
    en: "This request is for estimation and discussion purposes only. No payment is initiated on this platform. Final terms are confirmed manually prior to execution.",
  },
  "quote.success_title": { fr: "Demande reçue", en: "Request received" },
  "quote.success_text": {
    fr: "Un membre de notre équipe examinera votre scénario et vous fournira une réponse, généralement sous quelques heures.",
    en: "A member of our team will review your scenario and provide a response, typically within a few hours.",
  },
  "quote.another": { fr: "Nouvelle demande", en: "Submit another request" },
  "quote.contact_us": { fr: "Nous contacter", en: "Contact us" },

  // About
  "about.label": { fr: "Pourquoi KGS Flow", en: "Why KGS Flow" },
  "about.title": { fr: "Donner du sens à vos opérations", en: "Bringing clarity to your operations" },
  "about.text1": {
    fr: "Organiser un flux financier international peut vite devenir complexe : procédures floues, manque de visibilité, coordination difficile entre les parties.",
    en: "Organizing an international financial flow can quickly become complex: unclear procedures, lack of visibility, difficult coordination between parties.",
  },
  "about.text2": {
    fr: "KGS Flow intervient comme couche structurelle : nous analysons votre besoin, clarifions le parcours, puis coordonnons l'ensemble avec un suivi clair jusqu'à confirmation par les prestataires compétents.",
    en: "KGS Flow acts as a structural layer: we analyze your needs, clarify the path, then coordinate the entire process with clear follow-up until confirmation by the relevant providers.",
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
    fr: "Nous analysons et structurons la demande.",
    en: "We analyze and structure the request.",
  },
  "process.step3.title": { fr: "Coordination", en: "Coordination" },
  "process.step3.desc": {
    fr: "Nous coordonnons le parcours et vous guidons à chaque étape.",
    en: "We coordinate the path and guide you through each step.",
  },
  "process.step4.title": { fr: "Suivi & Confirmation", en: "Follow-up & Confirmation" },
  "process.step4.desc": {
    fr: "Nous assurons le suivi jusqu'à confirmation par les prestataires.",
    en: "We ensure follow-up until confirmation by the providers.",
  },

  // Contact
  "contact.label": { fr: "Demande", en: "Request" },
  "contact.title": { fr: "Faites votre demande en quelques minutes", en: "Make your request in minutes" },
  "contact.intro": {
    fr: "Chaque demande est analysée individuellement afin de garantir un cadrage correct et adapté.",
    en: "Each request is individually analyzed to ensure correct and appropriate framing.",
  },
  "contact.name": { fr: "Nom complet", en: "Full name" },
  "contact.whatsapp_number": { fr: "Numéro WhatsApp", en: "WhatsApp number" },
  "contact.type": { fr: "Type de demande", en: "Request type" },
  "contact.type.payment": { fr: "Assistance structurelle", en: "Structural assistance" },
  "contact.type.info": { fr: "Demande d'information", en: "Information request" },
  "contact.type.other": { fr: "Autre", en: "Other" },
  "contact.amount": { fr: "Montant approximatif", en: "Approximate amount" },
  "contact.country": { fr: "Pays de destination", en: "Destination country" },
  "contact.message": { fr: "Message libre", en: "Free message" },
  "contact.submit": { fr: "Envoyer la demande", en: "Send request" },
  "contact.whatsapp": { fr: "Ou contactez-nous directement via WhatsApp", en: "Or contact us directly via WhatsApp" },

  // Payment
  "payment.label": { fr: "Modalités", en: "Terms" },
  "payment.title": { fr: "Modalités d'engagement", en: "Engagement terms" },
  "payment.text": {
    fr: "Les modalités d'engagement et les conditions de service sont communiquées après analyse de la demande, selon le contexte et la nature de l'opération. KGS Flow ne collecte aucun fonds directement.",
    en: "Engagement terms and service conditions are communicated after request analysis, depending on the context and nature of the operation. KGS Flow does not collect any funds directly.",
  },

  // Scope
  "scope.label": { fr: "Périmètre", en: "Scope" },
  "scope.title": { fr: "Notre périmètre", en: "Our scope" },
  "scope.do.title": { fr: "Ce que nous faisons", en: "What we do" },
  "scope.do.1": { fr: "Structuration et coordination de flux", en: "Flow structuring and coordination" },
  "scope.do.2": { fr: "Orchestration opérationnelle et cadrage", en: "Operational orchestration and framing" },
  "scope.do.3": { fr: "Suivi et communication client", en: "Follow-up and client communication" },
  "scope.dont.title": { fr: "Ce que nous ne faisons pas", en: "What we don't do" },
  "scope.dont.1": { fr: "Exécution de transactions ou transferts de fonds", en: "Transaction execution or fund transfers" },
  "scope.dont.2": { fr: "Services bancaires ou financiers réglementés", en: "Regulated banking or financial services" },
  "scope.dont.3": { fr: "Détention, conservation ou conversion de fonds", en: "Fund custody, holding, or conversion" },

  // FAQ
  "faq.label": { fr: "Questions fréquentes", en: "Frequently asked questions" },
  "faq.title": { fr: "FAQ", en: "FAQ" },
  "faq.q1": { fr: "KGS Flow est-il une banque ou un prestataire de paiement ?", en: "Is KGS Flow a bank or payment provider?" },
  "faq.a1": { fr: "Non. KGS Flow est une solution structurelle et d'orchestration. Toutes les opérations financières sont réalisées par des prestataires tiers agréés.", en: "No. KGS Flow is a structural and orchestration solution. All financial operations are carried out by licensed third-party providers." },
  "faq.q2": { fr: "Puis-je effectuer un paiement sur ce site ?", en: "Can I make a payment on this website?" },
  "faq.a2": { fr: "Non. Aucun paiement n'est initié, collecté ou traité sur cette plateforme.", en: "No. No payment is initiated, collected, or processed on this platform." },
  "faq.q3": { fr: "Ma demande est-elle traitée automatiquement ?", en: "Is my request processed automatically?" },
  "faq.a3": { fr: "Non. Chaque demande est analysée et suivie individuellement par notre équipe.", en: "No. Each request is individually analyzed and followed up by our team." },

  // Positioning statement
  "positioning": {
    fr: "KGS Flow est une solution structurelle et d'orchestration opérationnelle au sein de l'écosystème Kora Global Systems. Nous accompagnons nos clients dans la structuration, la coordination et le suivi de leurs flux internationaux. KGS Flow n'est pas une institution financière, ne détient pas de fonds et n'exécute aucune transaction.",
    en: "KGS Flow is a structural and operational orchestration solution within the Kora Global Systems ecosystem. We support our clients in structuring, coordinating, and monitoring their international flows. KGS Flow is not a financial institution, does not custody funds, and does not execute transactions.",
  },

  // Footer
  "footer.disclaimer": {
    fr: "KGS Flow est une solution structurelle et d'orchestration opérationnelle au sein de l'écosystème Kora Global Systems. Nous accompagnons nos clients dans la structuration, la coordination et le suivi de leurs flux internationaux. KGS Flow n'est pas une institution financière, ne détient pas de fonds et n'exécute aucune transaction.",
    en: "KGS Flow is a structural and operational orchestration solution within the Kora Global Systems ecosystem. We support our clients in structuring, coordinating, and monitoring their international flows. KGS Flow is not a financial institution, does not custody funds, and does not execute transactions.",
  },
  "footer.division": {
    fr: "Division opérationnelle de Kora Global Systems",
    en: "Operational division of Kora Global Systems",
  },
  "footer.rights": { fr: "Tous droits réservés.", en: "All rights reserved." },
  "footer.presence": {
    fr: "Présence : Europe • Afrique Centrale • Amérique du Nord",
    en: "Presence: Europe • Central Africa • North America",
  },
  "footer.legal_title": { fr: "Mentions légales", en: "Legal Notice" },
  "footer.legal_text": {
    fr: "KGS Flow est une solution structurelle et d'orchestration consultative opérée au sein de l'écosystème Kora Global Systems.\n\nKGS Flow n'agit pas en tant que prestataire de services de paiement, intermédiaire financier, transmetteur de fonds ou dépositaire.\n\nKGS Flow ne reçoit, ne détient, n'exécute, ne convertit ni ne transfère de fonds ou d'actifs numériques pour le compte de clients.\n\nToutes les transactions, règlements et opérations financières restent sous la responsabilité exclusive de prestataires tiers agréés sélectionnés indépendamment par les utilisateurs.\n\nKGS Flow fournit uniquement des cadres structurels non contraignants, un accompagnement de processus et une coordination de systèmes.",
    en: "KGS Flow is a structural and advisory orchestration solution operated within the Kora Global Systems ecosystem.\n\nKGS Flow does not act as a payment service provider, financial intermediary, money transmitter, or custodian.\n\nKGS Flow does not receive, hold, execute, convert, or transfer funds or digital assets on behalf of clients.\n\nAll transactions, settlements, and financial operations remain the sole responsibility of licensed third-party providers selected independently by users.\n\nKGS Flow provides non-binding structural frameworks, process guidance, and system coordination only.",
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
