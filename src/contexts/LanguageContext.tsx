import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Banner
  "banner.static_disclaimer": {
    fr: "KGS Market Entry fournit uniquement des services de conseil et de structuration. L'exécution relève de prestataires tiers indépendants.",
    en: "KGS Market Entry provides advisory and structuring services only. Execution remains the responsibility of independent third-party providers.",
  },

  // Nav
  "nav.about": { fr: "Notre approche", en: "Our approach" },
  "nav.method": { fr: "Méthode", en: "Method" },
  "nav.scope": { fr: "Périmètre", en: "Scope" },
  "nav.engagement": { fr: "Engagement", en: "Engagement" },
  "nav.contact": { fr: "Contact", en: "Contact" },
  "nav.cta": { fr: "Clarity Review", en: "Clarity Review" },

  // Hero
  "hero.title": { fr: "STRUCTURATION STRATÉGIQUE", en: "STRATEGIC STRUCTURING" },
  "hero.title2": { fr: "pour vos projets en Afrique.", en: "for Projects in Africa." },
  "hero.subtitle": {
    fr: "KGS Market Entry est un cabinet de structuration moderne pour les clients internationaux qui lancent ou sécurisent des projets concrets en Afrique.\n\nNous définissons le périmètre. Nous réduisons l'exposition. Nous structurons avant l'exécution.",
    en: "KGS Market Entry is a modern structuring advisory for international clients launching or securing concrete projects across Africa.\n\nWe define scope. We reduce exposure. We structure before execution.",
  },
  "hero.cta": { fr: "PROJECT CLARITY REVIEW", en: "START WITH A PROJECT CLARITY REVIEW" },
  "hero.cta2": { fr: "COMPRENDRE NOTRE CADRE", en: "UNDERSTAND OUR FRAMEWORK" },
  "hero.micro": {
    fr: "Engagement sélectif • Structuration avant exécution • Cadre défini",
    en: "Selective engagement • Structure before execution • Defined framework",
  },

  // Clarity Review Form
  "clarity.form_title": { fr: "Project Clarity Review", en: "Project Clarity Review" },
  "clarity.form_helper": {
    fr: "Décrivez brièvement votre projet pour recevoir une évaluation structurée écrite. Engagement : 90€ – 150€.",
    en: "Briefly describe your project to receive a structured written assessment. Engagement: €90 – €150.",
  },
  "clarity.name": { fr: "Nom complet", en: "Full name" },
  "clarity.email": { fr: "Email", en: "Email" },
  "clarity.project_type": { fr: "Type de projet", en: "Project type" },
  "clarity.type.realestate": { fr: "Immobilier léger & Hôtellerie", en: "Light Real Estate & Hospitality" },
  "clarity.type.business": { fr: "Business physique", en: "Physical Business" },
  "clarity.type.digital": { fr: "Structuration digitale", en: "Digital Structuring" },
  "clarity.type.other": { fr: "Autre", en: "Other" },
  "clarity.country": { fr: "Pays cible", en: "Target country" },
  "clarity.budget": { fr: "Budget estimé (optionnel)", en: "Estimated budget (optional)" },
  "clarity.description": { fr: "Description du projet", en: "Project description" },
  "clarity.description_placeholder": { fr: "Décrivez brièvement votre projet, vos objectifs et vos contraintes.", en: "Briefly describe your project, goals, and constraints." },
  "clarity.submit": { fr: "DEMANDER UNE CLARITY REVIEW", en: "REQUEST CLARITY REVIEW" },
  "clarity.submit_note": { fr: "Demande non contraignante. Évaluation structurée après examen contextuel.", en: "Non-binding request. Structured assessment after contextual review." },
  "clarity.disclaimer": {
    fr: "Cette demande est à des fins d'évaluation et de cadrage uniquement. Aucune exécution n'est initiée sur cette plateforme. Les conditions définitives sont confirmées manuellement.",
    en: "This request is for assessment and framing purposes only. No execution is initiated on this platform. Final terms are confirmed manually.",
  },
  "clarity.success_title": { fr: "Demande reçue", en: "Request received" },
  "clarity.success_text": {
    fr: "Un membre de notre équipe examinera votre projet et vous fournira une évaluation structurée.",
    en: "A member of our team will review your project and provide a structured assessment.",
  },
  "clarity.another": { fr: "Nouvelle demande", en: "Submit another request" },
  "clarity.contact_us": { fr: "Nous contacter", en: "Contact us" },

  // About / What We Are
  "about.label": { fr: "Qui nous sommes", en: "What we are" },
  "about.title": { fr: "Un cabinet de structuration stratégique moderne", en: "A Modern Strategic Structuring Office" },
  "about.text1": {
    fr: "KGS Market Entry opère comme une couche de conseil structuré entre les clients internationaux et l'exécution locale.",
    en: "KGS Market Entry operates as a structured advisory layer between international clients and local execution.",
  },
  "about.text2": {
    fr: "Nous ne construisons pas.\nNous ne gérons pas les opérations quotidiennes.\nNous n'exécutons pas sur le terrain.\n\nNous définissons le périmètre, sélectionnons les prestataires pertinents et créons des cadres d'engagement structurés avant le déploiement du capital.",
    en: "We do not build.\nWe do not manage daily operations.\nWe do not execute on the ground.\n\nWe define scope, select relevant providers and create structured engagement frameworks before capital is deployed.",
  },

  // Why Structure Matters
  "whystructure.label": { fr: "Pourquoi structurer", en: "Why structure matters" },
  "whystructure.title": { fr: "Pourquoi la structuration est essentielle", en: "Why Structure Matters" },
  "whystructure.intro": {
    fr: "Les projets échouent à distance pour des raisons prévisibles :",
    en: "Projects fail at distance for predictable reasons:",
  },
  "whystructure.reason1": { fr: "Périmètre non défini", en: "Undefined scope" },
  "whystructure.reason2": { fr: "Mauvais prestataires", en: "Wrong providers" },
  "whystructure.reason3": { fr: "Accords informels", en: "Informal agreements" },
  "whystructure.reason4": { fr: "Absence de reporting", en: "Lack of reporting" },
  "whystructure.reason5": { fr: "Décisions émotionnelles", en: "Emotional decisions" },
  "whystructure.conclusion": {
    fr: "KGS Market Entry existe pour introduire de la clarté avant l'exposition.",
    en: "KGS Market Entry exists to introduce clarity before exposure.",
  },

  // Project Types
  "projecttypes.label": { fr: "Types de projets", en: "Project types" },
  "projecttypes.title": { fr: "Types de projets", en: "Project Types" },
  "projecttypes.type1.title": { fr: "Immobilier léger & Hôtellerie", en: "Light Real Estate & Hospitality" },
  "projecttypes.type1.desc": {
    fr: "Rénovations, aménagements Airbnb, modernisation de villas, intégration d'accès structurés.",
    en: "Renovations, Airbnb upgrades, villa modernisation, structured access integration.",
  },
  "projecttypes.type2.title": { fr: "Business physiques", en: "Physical Businesses" },
  "projecttypes.type2.desc": {
    fr: "Restaurants, boutiques, espaces beauté, petites opérations structurées.",
    en: "Restaurants, boutiques, beauty spaces, small structured operations.",
  },
  "projecttypes.type3.title": { fr: "Couche de structuration digitale", en: "Digital Structuring Layer" },
  "projecttypes.type3.desc": {
    fr: "Outils, automatisation, reporting, cadres opérationnels.",
    en: "Tools, automation, reporting, operational frameworks.",
  },
  "projecttypes.footer": {
    fr: "Nous nous concentrons sur la clarté et la viabilité — pas sur le volume.",
    en: "We focus on clarity and viability — not volume.",
  },

  // Process / Method
  "process.label": { fr: "Méthode", en: "Method" },
  "process.title": { fr: "Modèle de structuration en trois étapes", en: "Three-Step Structuring Model" },
  "process.step1.title": { fr: "Définir", en: "Define" },
  "process.step1.desc": { fr: "Périmètre du projet, risques, alignement budgétaire.", en: "Project perimeter, risks, budget alignment." },
  "process.step2.title": { fr: "Connecter", en: "Connect" },
  "process.step2.desc": { fr: "Shortlist structurée de prestataires pertinents.", en: "Structured shortlist of relevant providers." },
  "process.step3.title": { fr: "Sécuriser", en: "Secure" },
  "process.step3.desc": { fr: "Flux de communication défini et visibilité structurée.", en: "Defined communication flow and structured visibility." },

  // Engagement Path
  "engagement.label": { fr: "Parcours d'engagement", en: "Engagement path" },
  "engagement.title": { fr: "Parcours d'engagement", en: "Engagement Path" },

  "engagement.tier1.title": { fr: "Project Clarity Review", en: "Project Clarity Review" },
  "engagement.tier1.subtitle": { fr: "Le point d'entrée.", en: "The entry point." },
  "engagement.tier1.desc": {
    fr: "Une évaluation écrite structurée de votre projet.",
    en: "A structured written assessment of your project.",
  },
  "engagement.tier1.includes": {
    fr: "Analyse structurée de l'intake\nVisibilité des risques\nOrientation de faisabilité\nCatégories de prestataires\nProchaines étapes stratégiques",
    en: "Structured intake analysis\nRisk visibility\nFeasibility orientation\nProvider categories\nStrategic next steps",
  },
  "engagement.tier1.price": { fr: "Engagement : 90€ – 150€", en: "Engagement: €90 – €150" },
  "engagement.tier1.cta": { fr: "Demander une Clarity Review", en: "Request Clarity Review" },

  "engagement.tier2.title": { fr: "Partner Match & Structure", en: "Partner Match & Structure" },
  "engagement.tier2.desc": {
    fr: "Pour les clients prêts à avancer.\nShortlist structurée, introduction contrôlée, périmètre d'engagement défini.\n\nEngagement défini après la phase de clarté.",
    en: "For clients ready to move forward.\nStructured shortlist, controlled introduction, defined engagement perimeter.\n\nEngagement defined after clarity phase.",
  },

  "engagement.tier3.title": { fr: "Project Oversight", en: "Project Oversight" },
  "engagement.tier3.desc": {
    fr: "Supervision structurée légère pour les clients opérant à distance.\nDisponible après la phase de structuration.",
    en: "Light structured supervision for clients operating at distance.\nAvailable after structuring phase.",
  },

  // Scope
  "scope.label": { fr: "Périmètre", en: "Scope" },
  "scope.title": { fr: "Ce que nous faisons / Ce que nous ne faisons pas", en: "What We Do / What We Don't" },
  "scope.do.title": { fr: "Ce que nous faisons", en: "We do" },
  "scope.do.1": { fr: "Cadrage stratégique", en: "Strategic framing" },
  "scope.do.2": { fr: "Définition du périmètre", en: "Scope definition" },
  "scope.do.3": { fr: "Introductions structurées", en: "Structured introductions" },
  "scope.do.4": { fr: "Visibilité à distance légère", en: "Light remote visibility" },
  "scope.do.5": { fr: "Réduction des risques", en: "Risk reduction" },
  "scope.dont.title": { fr: "Ce que nous ne faisons pas", en: "We do not" },
  "scope.dont.1": { fr: "Exécuter la construction", en: "Execute construction" },
  "scope.dont.2": { fr: "Gérer les paiements", en: "Manage payments" },
  "scope.dont.3": { fr: "Garantir des résultats", en: "Guarantee outcomes" },
  "scope.dont.4": { fr: "Remplacer les prestataires locaux", en: "Replace local contractors" },
  "scope.closing": {
    fr: "Nous sommes la structure. Pas l'opérateur.",
    en: "We are the structure. Not the operator.",
  },

  // Positioning
  "positioning": {
    fr: "KGS Market Entry est une couche de confiance stratégique au sein de l'écosystème KGS.\nNous opérons avec un engagement sélectif.\nTous les projets ne sont pas acceptés.",
    en: "KGS Market Entry is a strategic trust layer within the KGS ecosystem.\nWe operate with selective engagement.\nNot all projects are accepted.",
  },

  // Contact
  "contact.label": { fr: "Contact", en: "Contact" },
  "contact.title": { fr: "Discutons de votre projet", en: "Let's discuss your project" },
  "contact.intro": { fr: "Chaque demande est analysée individuellement pour garantir un cadrage adapté.", en: "Each request is individually analyzed to ensure appropriate framing." },
  "contact.name": { fr: "Nom complet", en: "Full name" },
  "contact.whatsapp_number": { fr: "Numéro WhatsApp", en: "WhatsApp number" },
  "contact.type": { fr: "Type de demande", en: "Request type" },
  "contact.type.clarity": { fr: "Project Clarity Review", en: "Project Clarity Review" },
  "contact.type.info": { fr: "Demande d'information", en: "Information request" },
  "contact.type.other": { fr: "Autre", en: "Other" },
  "contact.country": { fr: "Pays cible", en: "Target country" },
  "contact.message": { fr: "Message", en: "Message" },
  "contact.submit": { fr: "Envoyer", en: "Send" },
  "contact.whatsapp": { fr: "Ou contactez-nous directement via WhatsApp", en: "Or contact us directly via WhatsApp" },

  // Footer
  "footer.disclaimer": {
    fr: "KGS Market Entry fournit uniquement des services de conseil et de structuration. L'exécution relève de la responsabilité de prestataires tiers indépendants.",
    en: "KGS Market Entry provides advisory and structuring services only. Execution remains the responsibility of independent third-party providers.",
  },
  "footer.division": { fr: "Division stratégique de Kora Global Systems", en: "Strategic division of Kora Global Systems" },
  "footer.rights": { fr: "Tous droits réservés.", en: "All rights reserved." },
  "footer.presence": { fr: "Zone d'activité principale : Afrique", en: "Primary area of activity: Africa" },
  "footer.legal_title": { fr: "Mentions légales", en: "Legal Notice" },
  "footer.legal_text": {
    fr: "KGS Market Entry fournit uniquement des services de conseil et de structuration.\nL'exécution relève de la responsabilité de prestataires tiers indépendants.",
    en: "KGS Market Entry provides advisory and structuring services only.\nExecution remains the responsibility of independent third-party providers.",
  },
  "footer.link_legal": { fr: "Mentions légales", en: "Legal Notice" },
  "footer.link_terms": { fr: "Conditions d'utilisation", en: "Terms of Use" },
  "footer.link_privacy": { fr: "Politique de confidentialité", en: "Privacy Policy" },

  // Legal pages shared
  "legal.back": { fr: "Retour à l'accueil", en: "Back to home" },

  // Legal Notice page
  "legalnotice.title": { fr: "Mentions légales — KGS Market Entry", en: "Legal Notice — KGS Market Entry" },
  "legalnotice.intro": {
    fr: "KGS Market Entry est une solution de structuration opérationnelle au sein de l'écosystème Kora Global Systems.",
    en: "KGS Market Entry is an operational structuring solution within the Kora Global Systems ecosystem.",
  },
  "legalnotice.entity_label": { fr: "Entité juridique :", en: "Legal Entity:" },
  "legalnotice.jurisdiction_label": { fr: "Juridiction :", en: "Jurisdiction:" },
  "legalnotice.jurisdiction": { fr: "États-Unis d'Amérique — Wyoming (WY)", en: "United States of America — Wyoming (WY)" },
  "legalnotice.nature_label": { fr: "Nature de KGS Market Entry :", en: "Nature of KGS Market Entry:" },
  "legalnotice.nature": {
    fr: "Structuration opérationnelle, coordination et conseil en matière de projets internationaux.",
    en: "Operational structuring, coordination, and advisory support for international projects.",
  },
  "legalnotice.not_label": { fr: "KGS Market Entry NE fait PAS :", en: "KGS Market Entry does NOT:" },
  "legalnotice.not1": { fr: "Fournir des services financiers", en: "Provide financial services" },
  "legalnotice.not2": { fr: "Exécuter des paiements ou des transferts", en: "Execute payments or transfers" },
  "legalnotice.not3": { fr: "Détenir, conserver, convertir ou gérer des fonds", en: "Custody, hold, convert, or manage funds" },
  "legalnotice.not4": { fr: "Agir en tant qu'intermédiaire financier", en: "Act as a financial intermediary" },
  "legalnotice.thirdparty": {
    fr: "Toutes les opérations d'exécution sont réalisées exclusivement par des prestataires tiers indépendants.",
    en: "All execution operations are carried out exclusively by independent third-party providers.",
  },

  // Terms of Use page
  "terms.title": { fr: "Conditions d'utilisation — KGS Market Entry", en: "Terms of Use — KGS Market Entry" },
  "terms.s1.title": { fr: "1. Usage informatif uniquement", en: "1. Informational Purpose Only" },
  "terms.s1.text": {
    fr: "Ce site web est fourni uniquement à des fins d'information, de structuration et de pré-engagement.\nAucun contenu de ce site ne constitue une offre, une instruction d'exécution ou un accord contraignant.",
    en: "This website is provided solely for informational, structural, and pre-engagement purposes.\nNo content on this site constitutes an offer, execution instruction, or binding agreement.",
  },
  "terms.s2.title": { fr: "2. Nature de KGS Market Entry", en: "2. Nature of KGS Market Entry" },
  "terms.s2.text": {
    fr: "KGS Market Entry opère strictement comme une couche de conseil et de structuration.\nSon rôle se limite à :",
    en: "KGS Market Entry operates strictly as an advisory and structuring layer.\nIts role is limited to:",
  },
  "terms.s2.list": {
    fr: "Analyser les besoins opérationnels\nStructurer des parcours conformes\nCoordonner la communication entre les parties",
    en: "Analyzing operational needs\nStructuring compliant pathways\nCoordinating communication between parties",
  },
  "terms.s3.title": { fr: "3. Aucun service financier", en: "3. No Financial Services" },
  "terms.s3.text": {
    fr: "KGS Market Entry n'est pas une banque, un prestataire de services de paiement, un courtier ou un intermédiaire financier.\n\nKGS Market Entry ne fait pas :",
    en: "KGS Market Entry is not a bank, payment service provider, broker, or financial intermediary.\n\nKGS Market Entry does not:",
  },
  "terms.s3.list": {
    fr: "Collecter des fonds\nDétenir des actifs clients\nExécuter des transferts\nGarantir des résultats",
    en: "Collect funds\nHold client assets\nExecute transfers\nGuarantee outcomes",
  },
  "terms.s4.title": { fr: "4. Prestataires tiers", en: "4. Third-Party Providers" },
  "terms.s4.text": {
    fr: "Toute exécution ou activité opérationnelle est réalisée exclusivement par des prestataires tiers indépendants opérant sous leurs propres licences.\n\nKGS Market Entry n'assume aucune responsabilité pour les actions ou résultats des prestataires tiers.",
    en: "All execution or operational activities are carried out exclusively by independent third-party providers operating under their own licenses.\n\nKGS Market Entry assumes no responsibility for third-party actions or outcomes.",
  },
  "terms.s5.title": { fr: "5. Aucune automatisation ni exécution instantanée", en: "5. No Automation or Instant Execution" },
  "terms.s5.text": {
    fr: "Toutes les interactions sur cette plateforme sont non automatisées.\nTout engagement potentiel est confirmé manuellement, en dehors de la plateforme, après examen contextuel.",
    en: "All interactions on this platform are non-automated.\nAny potential engagement is confirmed manually, outside the platform, after contextual review.",
  },
  "terms.s6.title": { fr: "6. Limitation de responsabilité", en: "6. Limitation of Liability" },
  "terms.s6.text": {
    fr: "KGS Market Entry ne saurait être tenu responsable de toute perte directe ou indirecte découlant de l'utilisation de ce site web.",
    en: "KGS Market Entry shall not be liable for any direct or indirect loss arising from the use of this website.",
  },
  "terms.s7.title": { fr: "7. Droit applicable", en: "7. Governing Law" },
  "terms.s7.text": {
    fr: "Ces conditions sont régies par les lois de l'État du Wyoming, États-Unis d'Amérique.",
    en: "These Terms are governed by the laws of the State of Wyoming, United States of America.",
  },

  // Privacy Policy page
  "privacy.title": { fr: "Politique de confidentialité — KGS Market Entry", en: "Privacy Policy — KGS Market Entry" },
  "privacy.s1.title": { fr: "1. Collecte de données", en: "1. Data Collection" },
  "privacy.s1.text": {
    fr: "KGS Market Entry peut collecter des informations de contact et contextuelles limitées lorsque les utilisateurs soumettent des formulaires ou des demandes.",
    en: "KGS Market Entry may collect limited contact and contextual information when users submit forms or inquiries.",
  },
  "privacy.s2.title": { fr: "2. Finalité", en: "2. Purpose" },
  "privacy.s2.text": { fr: "Les informations sont utilisées uniquement pour :", en: "Information is used solely for:" },
  "privacy.s2.list": {
    fr: "Analyse opérationnelle préliminaire\nCommunication\nÉvaluation contextuelle",
    en: "Preliminary operational analysis\nCommunication\nContextual evaluation",
  },
  "privacy.s3.title": { fr: "3. Aucune donnée financière", en: "3. No Financial Data" },
  "privacy.s3.text": { fr: "KGS Market Entry ne demande, ne stocke et ne traite pas :", en: "KGS Market Entry does not request, store, or process:" },
  "privacy.s3.list": {
    fr: "Identifiants bancaires\nInformations de paiement\nDonnées financières sensibles",
    en: "Banking credentials\nPayment information\nSensitive financial data",
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
  "governance.title": { fr: "Positionnement — KGS Market Entry", en: "Positioning — KGS Market Entry" },
  "governance.text": {
    fr: "KGS Market Entry est une couche de confiance stratégique au sein de l'écosystème KGS.\n\nNous opérons avec un engagement sélectif.\nTous les projets ne sont pas acceptés.",
    en: "KGS Market Entry is a strategic trust layer within the KGS ecosystem.\n\nWe operate with selective engagement.\nNot all projects are accepted.",
  },
  "governance.disclaimer": {
    fr: "KGS Market Entry fournit uniquement des services de conseil et de structuration. L'exécution relève de prestataires tiers indépendants.",
    en: "KGS Market Entry provides advisory and structuring services only. Execution remains the responsibility of independent third-party providers.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");

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
