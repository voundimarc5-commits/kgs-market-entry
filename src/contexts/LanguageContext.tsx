import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Nav
  "nav.understanding": { fr: "Comprendre", en: "Understanding" },
  "nav.support": { fr: "Accompagnement", en: "Support" },
  "nav.contact": { fr: "Contact", en: "Contact" },
  "nav.cta": { fr: "Démarrer une discussion", en: "Start a discussion" },

  // Simulation
  "sim.badge": { fr: "Simulation de flux", en: "Flow simulation" },
  "sim.title": {
    fr: "Visualisez la complexité de vos flux de paiement",
    en: "Visualize the complexity of your payment flows",
  },
  "sim.subtitle": {
    fr: "Chaque paiement international traverse un réseau d'intermédiaires, de contrôles et de points de coordination. Explorez comment votre flux se comporte réellement.",
    en: "Every international payment traverses a network of intermediaries, controls, and coordination points. Explore how your flow actually behaves.",
  },
  "sim.cta": { fr: "Explorer votre flux", en: "Explore your flow" },
  "sim.origin": { fr: "Origine", en: "Origin" },
  "sim.inter1": { fr: "Vérification", en: "Verification" },
  "sim.inter2": { fr: "Coordination", en: "Coordination" },
  "sim.inter3": { fr: "Routage", en: "Routing" },
  "sim.dest": { fr: "Destination", en: "Destination" },
  "sim.indicator1": { fr: "Complexité du flux : Élevée", en: "Flow Complexity: Elevated" },
  "sim.indicator2": { fr: "Dépendance intermédiaire : Modérée", en: "Intermediary Dependency: Moderate" },
  "sim.indicator3": { fr: "Friction opérationnelle détectée", en: "Operational Friction Detected" },
  "sim.indicator4": { fr: "Coordination inter-régions requise", en: "Cross-region coordination required" },

  // Understanding
  "understand.label": { fr: "Comprendre le flux", en: "Understanding the flow" },
  "understand.title": { fr: "Ce que signifie la friction de paiement", en: "What payment friction means" },
  "understand.intro": {
    fr: "Derrière chaque paiement international se cache un réseau opérationnel complexe. Comprendre ces dynamiques est la première étape vers une meilleure maîtrise de vos flux.",
    en: "Behind every international payment lies a complex operational network. Understanding these dynamics is the first step toward better control of your flows.",
  },
  "understand.concept1.title": { fr: "Complexité des parcours", en: "Route complexity" },
  "understand.concept1.desc": {
    fr: "Les paiements traversent souvent plusieurs intermédiaires, chacun ajoutant ses propres délais et exigences de conformité.",
    en: "Payments often traverse multiple intermediaries, each adding their own delays and compliance requirements.",
  },
  "understand.concept2.title": { fr: "Latence et délais", en: "Latency and delays" },
  "understand.concept2.desc": {
    fr: "Les différences de fuseaux horaires, les cycles de traitement et les files d'attente créent des goulets d'étranglement imprevisibles.",
    en: "Time zone differences, processing cycles, and queues create unpredictable bottlenecks.",
  },
  "understand.concept3.title": { fr: "Dépendances opérationnelles", en: "Operational dependencies" },
  "understand.concept3.desc": {
    fr: "Chaque nœud du parcours représente un point de défaillance potentiel qui peut retarder ou bloquer l'ensemble du flux.",
    en: "Each node in the route represents a potential point of failure that can delay or block the entire flow.",
  },
  "understand.concept4.title": { fr: "Exposition au risque", en: "Risk exposure" },
  "understand.concept4.desc": {
    fr: "Sans visibilité sur l'ensemble du parcours, il est difficile d'anticiper les incidents et d'y répondre efficacement.",
    en: "Without visibility across the entire route, it's difficult to anticipate incidents and respond effectively.",
  },

  // How we support
  "support.label": { fr: "Notre approche", en: "Our approach" },
  "support.title": { fr: "Comment KGS Flow vous accompagne", en: "How KGS Flow supports you" },
  "support.intro": {
    fr: "Nous agissons comme architectes de vos flux — en apportant visibilité, coordination et simplification à chaque étape.",
    en: "We act as architects of your flows — bringing visibility, coordination, and simplification to every step.",
  },
  "support.pillar1.title": { fr: "Visibilité", en: "Visibility" },
  "support.pillar1.desc": {
    fr: "Nous cartographions l'ensemble de votre parcours de paiement pour identifier les points de friction et les opportunités d'optimisation.",
    en: "We map your entire payment route to identify friction points and optimization opportunities.",
  },
  "support.pillar2.title": { fr: "Orchestration", en: "Orchestration" },
  "support.pillar2.desc": {
    fr: "Nous coordonnons les différentes étapes et acteurs impliqués pour assurer la fluidité de l'exécution.",
    en: "We coordinate the various steps and actors involved to ensure smooth execution.",
  },
  "support.pillar3.title": { fr: "Simplification", en: "Simplification" },
  "support.pillar3.desc": {
    fr: "Nous réduisons la complexité opérationnelle en structurant et en accompagnant chaque flux de bout en bout.",
    en: "We reduce operational complexity by structuring and supporting each flow end-to-end.",
  },

  // CTA Section
  "cta.title": { fr: "Prêt à explorer vos flux ?", en: "Ready to explore your flows?" },
  "cta.subtitle": {
    fr: "Engagez une conversation exploratoire, sans engagement. Nous analysons votre situation et vous proposons un éclairage opérationnel.",
    en: "Start an exploratory conversation, no commitment required. We analyze your situation and provide operational insight.",
  },
  "cta.discussion": { fr: "Démarrer une discussion", en: "Start a flow discussion" },
  "cta.review": { fr: "Demander un audit opérationnel", en: "Request an operational review" },
  "cta.review_message": {
    fr: "Bonjour, je souhaiterais demander un audit opérationnel de mes flux de paiement.",
    en: "Hello, I would like to request an operational review of my payment flows.",
  },
  "cta.note": {
    fr: "Échange exploratoire • Sans engagement • Approche opérationnelle",
    en: "Exploratory discussion • No commitment • Operational approach",
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
  "footer.presence": {
    fr: "Europe · Afrique Centrale · Amérique du Nord",
    en: "Europe · Central Africa · North America",
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
