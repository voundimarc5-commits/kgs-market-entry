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
    fr: "Avertissement — KGS Flow est une solution structurelle d'orchestration. Elle ne fournit pas de services financiers, n'exécute pas de transactions et ne détient aucun fonds. Toutes les opérations financières sont réalisées par des prestataires tiers agréés.",
    en: "Disclaimer — KGS Flow is a structural orchestration solution. It does not provide financial services, does not execute transactions, and does not custody any funds. All financial operations are carried out by licensed third-party providers.",
  },
  "banner.static_disclaimer": {
    fr: "KGS Flow ne fournit pas de services financiers, n'exécute pas de transactions et ne détient aucun fonds. Toutes les opérations financières sont réalisées exclusivement par des prestataires tiers agréés.",
    en: "KGS Flow does not provide financial services, execute transactions, or hold funds. All financial operations are performed exclusively by licensed third-party providers.",
  },

  // Nav
  "nav.process": { fr: "Comment ça marche", en: "How it works" },
  "nav.scope": { fr: "Services", en: "Services" },
  "nav.payment": { fr: "Modalités", en: "Terms" },
  "nav.contact": { fr: "Demande", en: "Request" },
  "nav.faq": { fr: "FAQ", en: "FAQ" },
  "nav.cta": { fr: "Demander un devis", en: "Request a quote" },

  // Hero
  "hero.title": { fr: "VOS FLUX INTERNATIONAUX", en: "YOUR INTERNATIONAL FLOWS" },
  "hero.title2": { fr: "structurés de A à Z.", en: "structured from A to Z." },
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
  "quote.payment_method": { fr: "Canal envisagé (indicatif)", en: "Preferred channel (indicative)" },
  "quote.payment_method_note": { fr: "À titre informatif uniquement. KGS Flow ne traite aucun paiement.", en: "For informational purposes only. KGS Flow does not process any payments." },
  "quote.client_type": { fr: "Type de client", en: "Client type" },
  "quote.urgency": { fr: "Urgence", en: "Urgency" },
  "quote.purpose": { fr: "Contexte", en: "Purpose" },
  "quote.purpose_placeholder": { fr: "Contexte bref (optionnel)", en: "Brief context (optional)" },
  "quote.submit": { fr: "SOUMETTRE LA DEMANDE", en: "SUBMIT REQUEST" },
  "quote.submit_note": { fr: "Demande non contraignante à des fins de cadrage et de structuration uniquement.", en: "Non-binding request for framing and structuring purposes only." },
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
  "process.step1.desc": { fr: "Vous soumettez votre demande via notre formulaire ou WhatsApp.", en: "You submit your request via our form or WhatsApp." },
  "process.step2.title": { fr: "Analyse", en: "Analysis" },
  "process.step2.desc": { fr: "Nous analysons et structurons la demande.", en: "We analyze and structure the request." },
  "process.step3.title": { fr: "Coordination", en: "Coordination" },
  "process.step3.desc": { fr: "Nous coordonnons le parcours et vous guidons à chaque étape.", en: "We coordinate the path and guide you through each step." },
  "process.step4.title": { fr: "Suivi & Confirmation", en: "Follow-up & Confirmation" },
  "process.step4.desc": { fr: "Nous assurons le suivi jusqu'à confirmation par les prestataires.", en: "We ensure follow-up until confirmation by the providers." },

  // Contact
  "contact.label": { fr: "Demande", en: "Request" },
  "contact.title": { fr: "Faites votre demande en quelques minutes", en: "Make your request in minutes" },
  "contact.intro": { fr: "Chaque demande est analysée individuellement afin de garantir un cadrage correct et adapté.", en: "Each request is individually analyzed to ensure correct and appropriate framing." },
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
  "footer.division": { fr: "Division opérationnelle de Kora Global Systems", en: "Operational division of Kora Global Systems" },
  "footer.rights": { fr: "Tous droits réservés.", en: "All rights reserved." },
  "footer.presence": { fr: "Zone d'activité principale : Afrique centrale", en: "Primary area of activity: Central Africa" },
  "footer.legal_title": { fr: "Mentions légales", en: "Legal Notice" },
  "footer.legal_text": {
    fr: "KGS Flow est une solution structurelle et d'orchestration opérationnelle opérée au sein de l'écosystème Kora Global Systems.\nKGS Flow n'est pas une institution financière, ne fournit aucun service bancaire ou de paiement, ne détient aucun fonds et n'exécute aucune transaction.\nToutes les opérations financières sont réalisées exclusivement par des prestataires tiers indépendants et agréés.",
    en: "KGS Flow is a structural and operational orchestration solution operated within the Kora Global Systems ecosystem.\nKGS Flow is not a financial institution, does not provide any banking or payment services, does not hold any funds, and does not execute any transactions.\nAll financial operations are carried out exclusively by independent and licensed third-party providers.",
  },
  "footer.link_legal": { fr: "Mentions légales", en: "Legal Notice" },
  "footer.link_terms": { fr: "Conditions d'utilisation", en: "Terms of Use" },
  "footer.link_privacy": { fr: "Politique de confidentialité", en: "Privacy Policy" },

  // Legal pages shared
  "legal.back": { fr: "Retour à l'accueil", en: "Back to home" },

  // Legal Notice page
  "legalnotice.title": { fr: "Mentions légales — KGS Flow", en: "Legal Notice — KGS Flow" },
  "legalnotice.intro": {
    fr: "KGS Flow est une solution d'orchestration opérationnelle au sein de l'écosystème Kora Global Systems.",
    en: "KGS Flow is an operational orchestration solution within the Kora Global Systems ecosystem.",
  },
  "legalnotice.entity_label": { fr: "Entité juridique :", en: "Legal Entity:" },
  "legalnotice.jurisdiction_label": { fr: "Juridiction :", en: "Jurisdiction:" },
  "legalnotice.jurisdiction": { fr: "États-Unis d'Amérique — Wyoming (WY)", en: "United States of America — Wyoming (WY)" },
  "legalnotice.nature_label": { fr: "Nature de KGS Flow :", en: "Nature of KGS Flow:" },
  "legalnotice.nature": {
    fr: "Structuration opérationnelle, coordination et conseil en matière de flux opérationnels internationaux.",
    en: "Operational structuring, coordination, and advisory support for international operational flows.",
  },
  "legalnotice.not_label": { fr: "KGS Flow NE fait PAS :", en: "KGS Flow does NOT:" },
  "legalnotice.not1": { fr: "Fournir des services financiers", en: "Provide financial services" },
  "legalnotice.not2": { fr: "Exécuter des paiements ou des transferts", en: "Execute payments or transfers" },
  "legalnotice.not3": { fr: "Détenir, conserver, convertir ou gérer des fonds", en: "Custody, hold, convert, or manage funds" },
  "legalnotice.not4": { fr: "Agir en tant qu'intermédiaire de paiement, courtier ou institution financière", en: "Act as a payment intermediary, broker, or financial institution" },
  "legalnotice.thirdparty": {
    fr: "Toutes les opérations financières sont exécutées exclusivement par des prestataires tiers indépendants et agréés.",
    en: "All financial operations are executed exclusively by independent, licensed third-party providers.",
  },

  // Terms of Use page
  "terms.title": { fr: "Conditions d'utilisation — KGS Flow", en: "Terms of Use — KGS Flow" },
  "terms.s1.title": { fr: "1. Usage informatif uniquement", en: "1. Informational Purpose Only" },
  "terms.s1.text": {
    fr: "Ce site web est fourni uniquement à des fins d'information, de structuration et de pré-engagement.\nAucun contenu de ce site ne constitue une offre, une instruction d'exécution, un service financier ou un accord contraignant.",
    en: "This website is provided solely for informational, structural, and pre-engagement purposes.\nNo content on this site constitutes an offer, execution instruction, financial service, or binding agreement.",
  },
  "terms.s2.title": { fr: "2. Nature de KGS Flow", en: "2. Nature of KGS Flow" },
  "terms.s2.text": {
    fr: "KGS Flow opère strictement comme une couche structurelle et de coordination.\nSon rôle se limite à :",
    en: "KGS Flow operates strictly as a structural and coordination layer.\nIts role is limited to:",
  },
  "terms.s2.list": {
    fr: "Analyser les besoins opérationnels\nStructurer des parcours conformes\nCoordonner la communication entre les parties",
    en: "Analyzing operational needs\nStructuring compliant pathways\nCoordinating communication between parties",
  },
  "terms.s3.title": { fr: "3. Aucun service financier", en: "3. No Financial Services" },
  "terms.s3.text": {
    fr: "KGS Flow n'est pas une banque, un prestataire de services de paiement, un transmetteur de fonds, une plateforme d'échange, un courtier ou un intermédiaire financier.\n\nKGS Flow ne fait pas :",
    en: "KGS Flow is not a bank, payment service provider, money transmitter, exchange, broker, or financial intermediary.\n\nKGS Flow does not:",
  },
  "terms.s3.list": {
    fr: "Collecter des fonds\nDétenir des actifs clients\nConvertir des devises\nExécuter des transferts\nGarantir des résultats",
    en: "Collect funds\nHold client assets\nConvert currencies\nExecute transfers\nGuarantee outcomes",
  },
  "terms.s4.title": { fr: "4. Prestataires tiers", en: "4. Third-Party Providers" },
  "terms.s4.text": {
    fr: "Toute exécution, paiement ou activité transactionnelle est réalisée exclusivement par des prestataires tiers indépendants opérant sous leurs propres licences et cadres réglementaires.\n\nKGS Flow n'assume aucune responsabilité pour les actions, la conformité, la disponibilité ou les résultats des prestataires tiers.",
    en: "All execution, payment, or transactional activities are carried out exclusively by independent third-party providers operating under their own licenses and regulatory frameworks.\n\nKGS Flow assumes no responsibility for third-party actions, compliance, availability, or outcomes.",
  },
  "terms.s5.title": { fr: "5. Aucune automatisation ni exécution instantanée", en: "5. No Automation or Instant Execution" },
  "terms.s5.text": {
    fr: "Toutes les interactions sur cette plateforme sont non automatisées.\nTout engagement potentiel est confirmé manuellement, en dehors de la plateforme, après examen contextuel.",
    en: "All interactions on this platform are non-automated.\nAny potential engagement is confirmed manually, outside the platform, after contextual review.",
  },
  "terms.s6.title": { fr: "6. Limitation de responsabilité", en: "6. Limitation of Liability" },
  "terms.s6.text": {
    fr: "KGS Flow ne saurait être tenu responsable de toute perte directe ou indirecte, retard, malentendu ou résultat opérationnel découlant de l'utilisation de ce site web.",
    en: "KGS Flow shall not be liable for any direct or indirect loss, delay, misunderstanding, or operational outcome arising from the use of this website.",
  },
  "terms.s7.title": { fr: "7. Droit applicable", en: "7. Governing Law" },
  "terms.s7.text": {
    fr: "Ces conditions sont régies par les lois de l'État du Wyoming, États-Unis d'Amérique.",
    en: "These Terms are governed by the laws of the State of Wyoming, United States of America.",
  },

  // Privacy Policy page
  "privacy.title": { fr: "Politique de confidentialité — KGS Flow", en: "Privacy Policy — KGS Flow" },
  "privacy.s1.title": { fr: "1. Collecte de données", en: "1. Data Collection" },
  "privacy.s1.text": {
    fr: "KGS Flow peut collecter des informations de contact et contextuelles limitées lorsque les utilisateurs soumettent des formulaires ou des demandes.",
    en: "KGS Flow may collect limited contact and contextual information when users submit forms or inquiries.",
  },
  "privacy.s2.title": { fr: "2. Finalité", en: "2. Purpose" },
  "privacy.s2.text": { fr: "Les informations sont utilisées uniquement pour :", en: "Information is used solely for:" },
  "privacy.s2.list": {
    fr: "Analyse opérationnelle préliminaire\nCommunication\nÉvaluation contextuelle",
    en: "Preliminary operational analysis\nCommunication\nContextual evaluation",
  },
  "privacy.s3.title": { fr: "3. Aucune donnée financière", en: "3. No Financial Data" },
  "privacy.s3.text": { fr: "KGS Flow ne demande, ne stocke et ne traite pas :", en: "KGS Flow does not request, store, or process:" },
  "privacy.s3.list": {
    fr: "Identifiants bancaires\nInformations de paiement\nAdresses de portefeuille\nDonnées financières sensibles",
    en: "Banking credentials\nPayment information\nWallet addresses\nSensitive financial data",
  },
  "privacy.s4.title": { fr: "4. Partage de données", en: "4. Data Sharing" },
  "privacy.s4.text": {
    fr: "Les données peuvent être partagées avec des prestataires de confiance strictement à des fins de coordination opérationnelle.",
    en: "Data may be shared with trusted service providers strictly for operational coordination purposes.",
  },
  "privacy.s5.title": { fr: "5. Droits des utilisateurs", en: "5. User Rights" },
  "privacy.s5.text": {
    fr: "Les utilisateurs peuvent demander l'accès ou la suppression de leurs données en contactant contact@koraglobalsystems.com.",
    en: "Users may request access or deletion of their data by contacting contact@koraglobalsystems.com.",
  },

  // Scope & Governance block
  "governance.title": { fr: "Périmètre & Gouvernance — KGS Flow", en: "Scope & Governance — KGS Flow" },
  "governance.text": {
    fr: "KGS Flow est une solution d'orchestration opérationnelle non exécutive au sein de l'écosystème Kora Global Systems.\n\nSon rôle se limite à la structuration, la coordination et la clarification de parcours opérationnels internationaux.\n\nKGS Flow n'exécute pas de transactions, ne gère pas de fonds et ne se substitue pas aux institutions financières agréées.\n\nCette séparation structurelle garantit la clarté réglementaire, la sécurité juridictionnelle et la transparence opérationnelle.",
    en: "KGS Flow is a non-executive operational orchestration solution within the Kora Global Systems ecosystem.\n\nIts role is limited to structuring, coordinating, and clarifying international operational pathways.\n\nKGS Flow does not execute transactions, does not handle funds, and does not replace licensed financial institutions.\n\nThis structural separation ensures regulatory clarity, jurisdictional safety, and operational transparency.",
  },
  "governance.disclaimer": {
    fr: "KGS Flow ne fournit pas de services financiers, n'exécute pas de transactions et ne détient aucun fonds. Toutes les opérations financières sont réalisées exclusivement par des prestataires tiers agréés.",
    en: "KGS Flow does not provide financial services, execute transactions, or hold funds. All financial operations are performed exclusively by licensed third-party providers.",
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
