export interface Opportunity {
  id: string;
  title: string;
  title_fr?: string;
  country: string;
  sector: string;
  type: string;
  summary: string;
  summary_fr?: string;
  deadline: string;
  featured?: boolean;
  investmentSize?: string;
  source?: string;
  overview?: string;
  overview_fr?: string;
  investmentContext?: string;
  investmentContext_fr?: string;
  howToParticipate?: string[];
  howToParticipate_fr?: string[];
  image?: string;
  website?: string;
}

export interface AfricaEvent {
  id: string;
  name: string;
  name_fr?: string;
  city: string;
  country: string;
  date: string;
  sector: string;
  organizer: string;
  image?: string;
  badge?: string;
  description?: string;
  description_fr?: string;
  whyAttend?: string[];
  whyAttend_fr?: string[];
  audience?: string[];
  audience_fr?: string[];
  website?: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  title_fr?: string;
  summary: string;
  summary_fr?: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
  author?: string;
}

export interface CountryData {
  code: string;
  name: string;
  name_fr?: string;
  overview: string;
  overview_fr?: string;
  description?: string;
  description_fr?: string;
  keySectors: string[];
  keySectors_fr?: string[];
  opportunities: number;
  events: number;
  flag?: string;
  gdp?: string;
  population?: string;
  capital?: string;
  capital_fr?: string;
  topRanking?: string;
  topRanking_fr?: string;
  investmentRange?: string;
  investmentRange_fr?: string;
}

// Image mapping by sector
export const SECTOR_IMAGES: Record<string, string> = {
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

export const EVENT_IMAGES: Record<string, string> = {
  "Finance & Investment": "financial-district",
  Technology: "nairobi-tech-hub",
  "Innovation & Tech": "kigali-innovation",
  "Energy & Climate": "solar-farm-morocco",
  "Real Estate": "kigali-innovation",
  "Mining & Resources": "mining-tech",
  Startup: "nairobi-tech-hub",
  "Digital Economy": "smart-city",
  "AI & Robotics": "smart-city",
  "Venture Capital": "financial-district",
  Infrastructure: "port-infrastructure",
};

export const opportunities: Opportunity[] = [
  {
    id: "1",
    title: "Gabon Sovereign Infrastructure Bond",
    title_fr: "Obligation souveraine d'infrastructure du Gabon",
    country: "Gabon",
    sector: "Finance",
    type: "Sovereign Bond",
    summary: "Government-backed infrastructure bond program for transport and energy development across Gabon.",
    summary_fr: "Programme d'obligations d'infrastructure soutenu par le gouvernement pour le développement des transports et de l'énergie au Gabon.",
    deadline: "2026-06-30",
    featured: true,
    investmentSize: "$50M — $500M",
    source: "Ministry of Finance, Gabon",
    overview: "The Republic of Gabon has announced a new sovereign bond issuance dedicated to financing critical infrastructure projects. The program targets transport modernization, energy transition, and urban development in Libreville and Port-Gentil.",
    overview_fr: "La République du Gabon a annoncé une nouvelle émission d'obligations souveraines dédiée au financement de projets d'infrastructure critiques. Le programme cible la modernisation des transports, la transition énergétique et le développement urbain à Libreville et Port-Gentil.",
    investmentContext: "Gabon is diversifying its economy beyond oil dependency. With a GDP per capita among the highest in Sub-Saharan Africa, the country is channeling resources into infrastructure modernization to attract foreign investment and boost non-oil sectors. The bond program is backed by the government's 2025–2030 economic diversification strategy.",
    investmentContext_fr: "Le Gabon diversifie son économie au-delà de la dépendance au pétrole. Avec un PIB par habitant parmi les plus élevés d'Afrique subsaharienne, le pays canalise ses ressources vers la modernisation des infrastructures pour attirer les investissements étrangers et stimuler les secteurs non pétroliers. Le programme obligataire est soutenu par la stratégie de diversification économique 2025-2030 du gouvernement.",
    howToParticipate: [
      "Register as a qualified institutional investor",
      "Submit expression of interest through the Ministry of Finance portal",
      "Complete due diligence documentation",
      "Participate in the bond subscription window",
    ],
    howToParticipate_fr: [
      "S'inscrire en tant qu'investisseur institutionnel qualifié",
      "Soumettre une expression d'intérêt via le portail du Ministère des Finances",
      "Compléter la documentation de due diligence",
      "Participer à la fenêtre de souscription des obligations",
    ],
    website: "https://www.tresor.economie.gouv.ga",
  },
  {
    id: "2",
    title: "Kenya Renewable Energy Innovation Program",
    title_fr: "Programme d'innovation en énergie renouvelable du Kenya",
    country: "Kenya",
    sector: "Energy",
    type: "Innovation Program",
    summary: "National program supporting clean energy startups and renewable infrastructure investment in East Africa.",
    summary_fr: "Programme national soutenant les startups d'énergie propre et l'investissement dans les infrastructures renouvelables en Afrique de l'Est.",
    deadline: "2026-09-15",
    featured: true,
    investmentSize: "$5M — $50M",
    source: "Kenya Investment Authority",
    overview: "Kenya's Energy Innovation Program seeks to accelerate the adoption of clean energy technologies. The initiative provides funding, technical support, and market access for startups and established companies in solar, wind, and geothermal sectors.",
    overview_fr: "Le programme d'innovation énergétique du Kenya vise à accélérer l'adoption des technologies d'énergie propre. L'initiative fournit du financement, un support technique et un accès au marché pour les startups et entreprises établies dans les secteurs solaire, éolien et géothermique.",
    investmentContext: "Kenya generates over 90% of its electricity from renewables, making it a continental leader in clean energy. The country's geothermal potential is the largest in Africa, and government incentives — including tax breaks and feed-in tariffs — create a favorable investment environment for energy innovators.",
    investmentContext_fr: "Le Kenya génère plus de 90 % de son électricité à partir de sources renouvelables, ce qui en fait un leader continental en énergie propre. Le potentiel géothermique du pays est le plus important d'Afrique, et les incitations gouvernementales — y compris les exonérations fiscales et les tarifs de rachat — créent un environnement d'investissement favorable pour les innovateurs énergétiques.",
    howToParticipate: [
      "Apply through the Kenya Investment Authority portal",
      "Submit a project proposal and business plan",
      "Complete technical and financial assessment",
      "Attend selection committee review",
    ],
    howToParticipate_fr: [
      "Postuler via le portail de l'Autorité d'investissement du Kenya",
      "Soumettre une proposition de projet et un plan d'affaires",
      "Compléter l'évaluation technique et financière",
      "Participer à l'examen du comité de sélection",
    ],
    website: "https://www.investkenya.go.ke",
  },
  {
    id: "3",
    title: "Nigeria Fintech Startup Acceleration Program",
    title_fr: "Programme d'accélération Fintech du Nigeria",
    country: "Nigeria",
    sector: "Technology",
    type: "Startup Initiative",
    summary: "Lagos-based fintech acceleration program connecting startups with institutional capital and Pan-African banking partners.",
    summary_fr: "Programme d'accélération fintech basé à Lagos connectant les startups avec le capital institutionnel et les partenaires bancaires panafricains.",
    deadline: "2026-05-01",
    featured: true,
    investmentSize: "$500K — $5M",
    source: "Lagos State Innovation Hub",
    overview: "Nigeria's leading fintech acceleration program provides seed funding, mentorship, and access to banking partnerships for early-stage fintech companies operating across West Africa.",
    overview_fr: "Le programme d'accélération fintech leader du Nigeria fournit du financement d'amorçage, du mentorat et un accès à des partenariats bancaires pour les entreprises fintech en phase de démarrage opérant en Afrique de l'Ouest.",
    investmentContext: "Nigeria is home to Africa's largest fintech ecosystem, with over $2B in venture funding in 2024. Lagos has emerged as the continent's fintech capital, with major players like Flutterwave, Paystack, and Moniepoint driving financial inclusion for 200M+ consumers.",
    investmentContext_fr: "Le Nigeria abrite le plus grand écosystème fintech d'Afrique, avec plus de 2 milliards de dollars de financement en capital-risque en 2024. Lagos s'est imposée comme la capitale fintech du continent, avec des acteurs majeurs comme Flutterwave, Paystack et Moniepoint favorisant l'inclusion financière de plus de 200 millions de consommateurs.",
    howToParticipate: [
      "Apply online with pitch deck and financial projections",
      "Complete the screening interview",
      "Join the 12-week acceleration cohort",
      "Present at Demo Day to investors",
    ],
    howToParticipate_fr: [
      "Postuler en ligne avec le pitch deck et les projections financières",
      "Compléter l'entretien de sélection",
      "Rejoindre la cohorte d'accélération de 12 semaines",
      "Présenter lors du Demo Day aux investisseurs",
    ],
    website: "https://lagosinnovation.ng",
  },
  {
    id: "4",
    title: "Morocco Green Hydrogen Investment Initiative",
    title_fr: "Initiative d'investissement en hydrogène vert du Maroc",
    country: "Morocco",
    sector: "Energy",
    type: "Investment Program",
    summary: "Strategic green hydrogen production and export facility development in southern Morocco.",
    summary_fr: "Développement stratégique d'installations de production et d'exportation d'hydrogène vert dans le sud du Maroc.",
    deadline: "2026-12-31",
    featured: true,
    investmentSize: "$100M+",
    source: "MASEN (Moroccan Agency for Sustainable Energy)",
    overview: "Morocco is positioning itself as a global leader in green hydrogen. This initiative supports the development of production facilities, export infrastructure, and R&D partnerships for clean hydrogen fuel.",
    overview_fr: "Le Maroc se positionne comme un leader mondial de l'hydrogène vert. Cette initiative soutient le développement d'installations de production, d'infrastructures d'exportation et de partenariats R&D pour le combustible hydrogène propre.",
    investmentContext: "Morocco's proximity to Europe and its world-class solar and wind resources make it an ideal green hydrogen production hub. The country has already invested $13B in renewable energy infrastructure and aims to produce 52% of its energy from renewables by 2030.",
    investmentContext_fr: "La proximité du Maroc avec l'Europe et ses ressources solaires et éoliennes de classe mondiale en font un hub idéal de production d'hydrogène vert. Le pays a déjà investi 13 milliards de dollars dans les infrastructures d'énergie renouvelable et vise à produire 52 % de son énergie à partir de sources renouvelables d'ici 2030.",
    howToParticipate: [
      "Submit an expression of interest to MASEN",
      "Provide technical capabilities and financial capacity proof",
      "Participate in partnership matchmaking sessions",
      "Finalize joint venture or concession agreements",
    ],
    howToParticipate_fr: [
      "Soumettre une expression d'intérêt à MASEN",
      "Fournir les preuves de capacités techniques et financières",
      "Participer aux sessions de mise en relation de partenaires",
      "Finaliser les accords de coentreprise ou de concession",
    ],
    website: "https://www.masen.ma",
  },
  {
    id: "5",
    title: "Rwanda Smart City Development Program",
    title_fr: "Programme de développement de ville intelligente du Rwanda",
    country: "Rwanda",
    sector: "Real Estate",
    type: "Investment Program",
    summary: "Kigali Innovation City — a mixed-use technology and education hub attracting global investors.",
    summary_fr: "Kigali Innovation City — un hub technologique et éducatif à usage mixte attirant les investisseurs mondiaux.",
    deadline: "2026-08-15",
    investmentSize: "$10M — $100M",
    source: "Rwanda Development Board",
    overview: "Kigali Innovation City is a flagship smart city development integrating technology companies, universities, and innovation centers into a world-class urban ecosystem.",
    overview_fr: "Kigali Innovation City est un développement phare de ville intelligente intégrant des entreprises technologiques, des universités et des centres d'innovation dans un écosystème urbain de classe mondiale.",
    investmentContext: "Rwanda ranks as Africa's most business-friendly nation. Kigali Innovation City is part of a $2B vision to create a continental technology hub. The Rwandan government offers generous tax incentives, streamlined licensing, and strong IP protections for foreign investors.",
    investmentContext_fr: "Le Rwanda est classé comme le pays le plus propice aux affaires en Afrique. Kigali Innovation City fait partie d'une vision de 2 milliards de dollars pour créer un hub technologique continental. Le gouvernement rwandais offre des incitations fiscales généreuses, des licences simplifiées et une forte protection de la propriété intellectuelle pour les investisseurs étrangers.",
    howToParticipate: [
      "Contact Rwanda Development Board for investment prospectus",
      "Submit investment proposal and partnership model",
      "Attend investor site visits and due diligence sessions",
      "Finalize development agreements",
    ],
    howToParticipate_fr: [
      "Contacter le Rwanda Development Board pour le prospectus d'investissement",
      "Soumettre une proposition d'investissement et un modèle de partenariat",
      "Participer aux visites de site et sessions de due diligence",
      "Finaliser les accords de développement",
    ],
    website: "https://rdb.rw",
  },
  {
    id: "6",
    title: "Côte d'Ivoire Agribusiness Development Fund",
    title_fr: "Fonds de développement agroalimentaire de Côte d'Ivoire",
    country: "Côte d'Ivoire",
    sector: "Agriculture",
    type: "Financial Program",
    summary: "National fund supporting cocoa value chain modernization and agricultural technology adoption.",
    summary_fr: "Fonds national soutenant la modernisation de la chaîne de valeur du cacao et l'adoption de technologies agricoles.",
    deadline: "2026-07-01",
    investmentSize: "$2M — $20M",
    source: "CEPICI",
    overview: "This fund targets the modernization of Côte d'Ivoire's agricultural sector, with a focus on cocoa processing, sustainable farming practices, and agritech solutions.",
    overview_fr: "Ce fonds cible la modernisation du secteur agricole de la Côte d'Ivoire, avec un accent sur la transformation du cacao, les pratiques agricoles durables et les solutions agritech.",
    investmentContext: "Côte d'Ivoire is the world's largest cocoa producer, accounting for 40% of global supply. The government's plan to process 50% of cocoa domestically by 2030 creates massive investment opportunities in processing plants, logistics, and agricultural technology.",
    investmentContext_fr: "La Côte d'Ivoire est le plus grand producteur mondial de cacao, représentant 40 % de l'offre mondiale. Le plan du gouvernement de transformer 50 % du cacao localement d'ici 2030 crée d'énormes opportunités d'investissement dans les usines de transformation, la logistique et la technologie agricole.",
    howToParticipate: [
      "Register with CEPICI investment portal",
      "Submit project proposal aligned with national agri-strategy",
      "Complete environmental and social impact assessment",
      "Participate in fund allocation rounds",
    ],
    howToParticipate_fr: [
      "S'inscrire sur le portail d'investissement du CEPICI",
      "Soumettre une proposition de projet alignée avec la stratégie agricole nationale",
      "Compléter l'évaluation d'impact environnemental et social",
      "Participer aux cycles d'allocation de fonds",
    ],
    website: "https://cepici.ci",
  },
  {
    id: "7",
    title: "South Africa Mining Tech Investment Forum",
    title_fr: "Forum d'investissement en technologie minière d'Afrique du Sud",
    country: "South Africa",
    sector: "Mining",
    type: "Business Event",
    summary: "Annual gathering of mining technology innovators and institutional investors in Johannesburg.",
    summary_fr: "Rassemblement annuel d'innovateurs en technologie minière et d'investisseurs institutionnels à Johannesburg.",
    deadline: "2026-04-15",
    investmentSize: "$1M — $50M",
    source: "Mining Indaba Group",
    overview: "South Africa's premier mining technology event connects investors with innovative mining solutions, from AI-driven exploration to sustainable extraction technologies.",
    overview_fr: "Le principal événement de technologie minière d'Afrique du Sud connecte les investisseurs avec des solutions minières innovantes, de l'exploration assistée par IA aux technologies d'extraction durables.",
    investmentContext: "South Africa holds the world's largest reserves of platinum, manganese, and chromium. The mining sector contributes 8% of GDP and is undergoing a technology-driven transformation with autonomous equipment, AI exploration, and green mining practices attracting significant capital.",
    investmentContext_fr: "L'Afrique du Sud détient les plus grandes réserves mondiales de platine, manganèse et chrome. Le secteur minier contribue à 8 % du PIB et connaît une transformation technologique avec des équipements autonomes, l'exploration par IA et des pratiques minières durables attirant des capitaux importants.",
    howToParticipate: [
      "Register for the annual Mining Tech Forum",
      "Submit technology showcase applications",
      "Schedule one-on-one investor meetings",
      "Participate in deal-making roundtables",
    ],
    howToParticipate_fr: [
      "S'inscrire au Forum annuel de technologie minière",
      "Soumettre les candidatures pour la vitrine technologique",
      "Planifier des réunions individuelles avec les investisseurs",
      "Participer aux tables rondes de négociation",
    ],
    website: "https://miningindaba.com",
  },
  {
    id: "8",
    title: "Senegal Digital Economy Innovation Program",
    title_fr: "Programme d'innovation en économie numérique du Sénégal",
    country: "Senegal",
    sector: "Technology",
    type: "Innovation Program",
    summary: "Government-led program to position Dakar as a West African technology and digital services hub.",
    summary_fr: "Programme gouvernemental pour positionner Dakar comme hub technologique et de services numériques en Afrique de l'Ouest.",
    deadline: "2026-10-01",
    investmentSize: "$1M — $15M",
    source: "Senegal Ministry of Digital Economy",
    overview: "Senegal's digital economy strategy aims to create 35,000 tech jobs and attract $500M in digital infrastructure investment by 2028.",
    overview_fr: "La stratégie d'économie numérique du Sénégal vise à créer 35 000 emplois technologiques et attirer 500 millions de dollars d'investissement en infrastructure numérique d'ici 2028.",
    investmentContext: "Senegal is rapidly emerging as a West African digital hub, supported by new submarine cable infrastructure, government digital transformation programs, and a young tech-savvy population. The country's political stability and bilingual workforce make it attractive for international tech companies.",
    investmentContext_fr: "Le Sénégal émerge rapidement comme un hub numérique ouest-africain, soutenu par de nouvelles infrastructures de câbles sous-marins, des programmes gouvernementaux de transformation numérique et une population jeune et technophile. La stabilité politique du pays et sa main-d'œuvre bilingue le rendent attractif pour les entreprises technologiques internationales.",
    howToParticipate: [
      "Apply through the Ministry of Digital Economy platform",
      "Submit digital infrastructure or services proposal",
      "Complete technical evaluation process",
      "Sign partnership agreements with government agencies",
    ],
    howToParticipate_fr: [
      "Postuler via la plateforme du Ministère de l'Économie numérique",
      "Soumettre une proposition d'infrastructure ou de services numériques",
      "Compléter le processus d'évaluation technique",
      "Signer des accords de partenariat avec les agences gouvernementales",
    ],
    website: "https://www.numerique.gouv.sn",
  },
  {
    id: "9",
    title: "Ghana Infrastructure Investment Program",
    title_fr: "Programme d'investissement en infrastructure du Ghana",
    country: "Ghana",
    sector: "Infrastructure",
    type: "Investment Program",
    summary: "Multi-billion dollar program for roads, ports, and railway modernization across Ghana.",
    summary_fr: "Programme de plusieurs milliards de dollars pour la modernisation des routes, ports et chemins de fer au Ghana.",
    deadline: "2026-11-30",
    featured: true,
    investmentSize: "$20M — $200M",
    source: "Ghana Investment Promotion Centre",
    overview: "Ghana's Infrastructure Investment Program targets critical transport corridors, port expansion, and railway connectivity to boost regional trade and economic growth.",
    overview_fr: "Le programme d'investissement en infrastructure du Ghana cible les corridors de transport critiques, l'expansion portuaire et la connectivité ferroviaire pour stimuler le commerce régional et la croissance économique.",
    investmentContext: "Ghana is a gateway to the West African market of 400M consumers. The country's infrastructure modernization plan — anchored by the $16B Tema Port expansion and Western Railway Line — is creating opportunities across construction, logistics, and transportation sectors.",
    investmentContext_fr: "Le Ghana est une porte d'entrée vers le marché ouest-africain de 400 millions de consommateurs. Le plan de modernisation des infrastructures du pays — ancré par l'expansion du port de Tema à 16 milliards de dollars et la ligne ferroviaire occidentale — crée des opportunités dans les secteurs de la construction, de la logistique et des transports.",
    howToParticipate: [
      "Register with Ghana Investment Promotion Centre",
      "Submit infrastructure project proposals",
      "Participate in public-private partnership tenders",
      "Complete feasibility and environmental assessments",
    ],
    howToParticipate_fr: [
      "S'inscrire auprès du Ghana Investment Promotion Centre",
      "Soumettre des propositions de projets d'infrastructure",
      "Participer aux appels d'offres de partenariats public-privé",
      "Compléter les études de faisabilité et les évaluations environnementales",
    ],
    website: "https://gipc.gov.gh",
  },
  {
    id: "10",
    title: "Egypt AI Innovation Challenge",
    title_fr: "Défi d'innovation en IA de l'Égypte",
    country: "Egypt",
    sector: "Artificial Intelligence",
    type: "Innovation Program",
    summary: "National AI challenge supporting startups building intelligent solutions for healthcare, agriculture, and smart cities.",
    summary_fr: "Défi national d'IA soutenant les startups développant des solutions intelligentes pour la santé, l'agriculture et les villes intelligentes.",
    deadline: "2026-09-30",
    investmentSize: "$500K — $10M",
    source: "Egypt National AI Strategy Office",
    overview: "Egypt's AI Innovation Challenge seeks to accelerate artificial intelligence adoption across key economic sectors, with prize funding, incubation support, and government procurement pathways.",
    overview_fr: "Le défi d'innovation en IA de l'Égypte vise à accélérer l'adoption de l'intelligence artificielle dans les secteurs économiques clés, avec des prix, un soutien à l'incubation et des voies d'accès aux marchés publics.",
    investmentContext: "Egypt is positioning itself as the Middle East and North Africa AI hub. With 100M consumers, strong engineering talent from top universities, and government backing through the National AI Strategy, the country offers a large and underserved market for AI solutions.",
    investmentContext_fr: "L'Égypte se positionne comme le hub IA du Moyen-Orient et de l'Afrique du Nord. Avec 100 millions de consommateurs, un fort vivier de talents en ingénierie issus des meilleures universités et le soutien gouvernemental via la Stratégie nationale IA, le pays offre un marché vaste et sous-desservi pour les solutions d'IA.",
    howToParticipate: [
      "Submit AI solution proposal and prototype",
      "Complete technical evaluation and demo rounds",
      "Join the 6-month AI incubation program",
      "Present at the National AI Summit",
    ],
    howToParticipate_fr: [
      "Soumettre une proposition de solution IA et un prototype",
      "Compléter les tours d'évaluation technique et de démonstration",
      "Rejoindre le programme d'incubation IA de 6 mois",
      "Présenter au Sommet national de l'IA",
    ],
    website: "https://mcit.gov.eg/en",
  },
  {
    id: "11",
    title: "Cameroon Infrastructure Development Bond",
    title_fr: "Obligation de développement d'infrastructure du Cameroun",
    country: "Cameroon",
    sector: "Infrastructure",
    type: "Sovereign Bond",
    summary: "Government-backed bond supporting road and energy infrastructure projects across Cameroon.",
    summary_fr: "Obligation soutenue par le gouvernement pour des projets d'infrastructure routière et énergétique au Cameroun.",
    deadline: "2026-09-30",
    featured: false,
    investmentSize: "$30M — $300M",
    source: "Ministry of Economy, Cameroon",
    overview: "Cameroon is issuing infrastructure bonds to finance critical road networks connecting Douala's port to landlocked Central African nations, and energy projects including hydroelectric power expansion.",
    overview_fr: "Le Cameroun émet des obligations d'infrastructure pour financer des réseaux routiers critiques reliant le port de Douala aux nations enclavées d'Afrique centrale, ainsi que des projets énergétiques incluant l'expansion de l'énergie hydroélectrique.",
    investmentContext: "As Central Africa's largest economy, Cameroon serves as a trade corridor for Chad, Central African Republic, and northern Congo. The government's Vision 2035 plan prioritizes transport and energy infrastructure to support regional integration and economic diversification beyond oil.",
    investmentContext_fr: "En tant que plus grande économie d'Afrique centrale, le Cameroun sert de corridor commercial pour le Tchad, la République centrafricaine et le nord du Congo. Le plan Vision 2035 du gouvernement priorise les infrastructures de transport et d'énergie pour soutenir l'intégration régionale et la diversification économique au-delà du pétrole.",
    howToParticipate: [
      "Register as a qualified investor with the Ministry of Economy",
      "Review bond prospectus and terms",
      "Submit investment commitment through authorized intermediaries",
      "Participate in the bond issuance window",
    ],
    howToParticipate_fr: [
      "S'inscrire en tant qu'investisseur qualifié auprès du Ministère de l'Économie",
      "Examiner le prospectus et les conditions de l'obligation",
      "Soumettre un engagement d'investissement via des intermédiaires autorisés",
      "Participer à la fenêtre d'émission des obligations",
    ],
    website: "https://www.minepat.gov.cm",
  },
  {
    id: "12",
    title: "Ghana Fintech Innovation Program",
    title_fr: "Programme d'innovation Fintech du Ghana",
    country: "Ghana",
    sector: "Technology",
    type: "Innovation Program",
    summary: "Program supporting fintech startups developing financial inclusion solutions in Ghana.",
    summary_fr: "Programme soutenant les startups fintech développant des solutions d'inclusion financière au Ghana.",
    deadline: "2026-08-31",
    investmentSize: "$500K — $5M",
    source: "Ghana Fintech & Payments Association",
    overview: "This program supports early-stage fintech companies building solutions for mobile payments, microfinance, insurance, and remittances across Ghana and the broader West African market.",
    overview_fr: "Ce programme soutient les entreprises fintech en phase de démarrage construisant des solutions pour les paiements mobiles, la microfinance, l'assurance et les transferts d'argent au Ghana et sur le marché ouest-africain.",
    investmentContext: "Ghana's mobile money ecosystem has grown rapidly, with interoperability between mobile operators driving financial inclusion. The central bank's regulatory sandbox and progressive fintech policies make Ghana an attractive testing ground for financial innovation.",
    investmentContext_fr: "L'écosystème de mobile money du Ghana a connu une croissance rapide, avec l'interopérabilité entre les opérateurs mobiles favorisant l'inclusion financière. Le bac à sable réglementaire de la banque centrale et les politiques fintech progressives font du Ghana un terrain d'essai attractif pour l'innovation financière.",
    howToParticipate: [
      "Apply with product demo and business plan",
      "Complete regulatory compliance review",
      "Join the 6-month acceleration program",
      "Pitch to venture capital and banking partners",
    ],
    howToParticipate_fr: [
      "Postuler avec une démonstration produit et un plan d'affaires",
      "Compléter l'examen de conformité réglementaire",
      "Rejoindre le programme d'accélération de 6 mois",
      "Pitcher auprès de partenaires en capital-risque et bancaires",
    ],
    website: "https://gipc.gov.gh",
  },
  {
    id: "13",
    title: "Morocco Green Energy Investment Initiative",
    title_fr: "Initiative d'investissement en énergie verte du Maroc",
    country: "Morocco",
    sector: "Renewable Energy",
    type: "Investment Program",
    summary: "Large-scale investment initiative supporting solar and hydrogen infrastructure development.",
    summary_fr: "Initiative d'investissement à grande échelle soutenant le développement d'infrastructures solaires et hydrogène.",
    deadline: "2026-12-31",
    featured: true,
    investmentSize: "$50M — $500M",
    source: "MASEN",
    overview: "Morocco's Green Energy Initiative targets the next phase of renewable energy development, including the Noor-Midelt solar complex, offshore wind projects, and green hydrogen production facilities for European export markets.",
    overview_fr: "L'initiative d'énergie verte du Maroc cible la prochaine phase de développement des énergies renouvelables, incluant le complexe solaire Noor-Midelt, les projets éoliens offshore et les installations de production d'hydrogène vert pour les marchés d'exportation européens.",
    investmentContext: "Morocco has invested $13B in renewable energy and aims for 52% renewable electricity by 2030. The Noor solar complex is the world's largest concentrated solar power plant. Strategic proximity to Europe positions Morocco as a clean energy exporter via submarine power cables and hydrogen pipelines.",
    investmentContext_fr: "Le Maroc a investi 13 milliards de dollars dans les énergies renouvelables et vise 52 % d'électricité renouvelable d'ici 2030. Le complexe solaire Noor est la plus grande centrale solaire à concentration au monde. La proximité stratégique avec l'Europe positionne le Maroc comme exportateur d'énergie propre via des câbles électriques sous-marins et des pipelines d'hydrogène.",
    howToParticipate: [
      "Submit expression of interest to MASEN",
      "Provide technical and financial capacity documentation",
      "Attend investor matchmaking sessions",
      "Negotiate concession or joint venture agreements",
    ],
    howToParticipate_fr: [
      "Soumettre une expression d'intérêt à MASEN",
      "Fournir la documentation de capacité technique et financière",
      "Participer aux sessions de mise en relation investisseurs",
      "Négocier des accords de concession ou de coentreprise",
    ],
    website: "https://www.masen.ma",
  },
];

export const events: AfricaEvent[] = [
  {
    id: "1",
    name: "Africa Investment Forum",
    name_fr: "Forum d'investissement en Afrique",
    city: "Abidjan",
    country: "Côte d'Ivoire",
    date: "2026-06-12",
    sector: "Finance & Investment",
    organizer: "African Development Bank",
    badge: "INVESTMENT",
    description: "The Africa Investment Forum is the continent's premier investment marketplace, convening heads of state, pension funds, sovereign wealth funds, and private equity leaders to close deals on transformative projects across infrastructure, energy, agriculture, and technology.",
    description_fr: "Le Forum d'investissement en Afrique est le principal marché d'investissement du continent, réunissant des chefs d'État, des fonds de pension, des fonds souverains et des leaders du capital-investissement pour conclure des accords sur des projets transformateurs dans les domaines de l'infrastructure, de l'énergie, de l'agriculture et de la technologie.",
    whyAttend: [
      "Access $100B+ in investment deal flow across African markets",
      "Meet directly with heads of state and finance ministers from 40+ countries",
      "Participate in structured boardroom deal-making sessions",
      "Network with the African Development Bank's global partner ecosystem",
    ],
    whyAttend_fr: [
      "Accédez à plus de 100 milliards de dollars de flux d'investissements sur les marchés africains",
      "Rencontrez directement des chefs d'État et ministres des finances de plus de 40 pays",
      "Participez à des sessions structurées de négociation en salle de réunion",
      "Réseautez avec l'écosystème mondial de partenaires de la Banque africaine de développement",
    ],
    audience: ["Institutional Investors", "DFI Representatives", "Government Officials", "Corporate Executives"],
    audience_fr: ["Investisseurs institutionnels", "Représentants d'IFD", "Responsables gouvernementaux", "Dirigeants d'entreprise"],
    website: "https://www.africainvestmentforum.com",
  },
  {
    id: "2",
    name: "Lagos Fintech Summit",
    name_fr: "Sommet Fintech de Lagos",
    city: "Lagos",
    country: "Nigeria",
    date: "2026-05-20",
    sector: "Technology",
    organizer: "Fintech Association of Nigeria",
    badge: "TECH",
    description: "West Africa's largest fintech event, bringing together 3,000+ fintech founders, banking executives, regulators and investors to explore the future of financial services across the continent.",
    description_fr: "Le plus grand événement fintech d'Afrique de l'Ouest, réunissant plus de 3 000 fondateurs fintech, dirigeants bancaires, régulateurs et investisseurs pour explorer l'avenir des services financiers à travers le continent.",
    whyAttend: [
      "Discover the latest fintech innovations from Africa's largest market",
      "Connect with venture capitalists and corporate investors actively deploying capital",
      "Gain regulatory insights from the Central Bank of Nigeria and SEC",
      "Network with founders behind Africa's most successful fintech companies",
    ],
    whyAttend_fr: [
      "Découvrez les dernières innovations fintech du plus grand marché d'Afrique",
      "Connectez-vous avec des capital-risqueurs et investisseurs corporatifs déployant activement du capital",
      "Obtenez des perspectives réglementaires de la Banque centrale du Nigeria et de la SEC",
      "Réseautez avec les fondateurs des entreprises fintech les plus performantes d'Afrique",
    ],
    audience: ["Fintech Founders", "Investors", "Banking Executives", "Regulators"],
    audience_fr: ["Fondateurs Fintech", "Investisseurs", "Dirigeants bancaires", "Régulateurs"],
    website: "https://africafintechsummit.com",
  },
  {
    id: "3",
    name: "Kigali Innovation Week",
    name_fr: "Semaine de l'innovation de Kigali",
    city: "Kigali",
    country: "Rwanda",
    date: "2026-07-08",
    sector: "Innovation & Tech",
    organizer: "Rwanda ICT Chamber",
    badge: "STARTUP",
    description: "Rwanda's flagship innovation event showcasing the country's transformation into Africa's leading technology hub. Features startup pitches, smart city demonstrations, and investment roundtables.",
    description_fr: "L'événement phare d'innovation du Rwanda présentant la transformation du pays en hub technologique leader en Afrique. Comprend des pitchs de startups, des démonstrations de villes intelligentes et des tables rondes d'investissement.",
    whyAttend: [
      "Experience Kigali Innovation City's smart urban ecosystem firsthand",
      "Pitch to East African and international investors",
      "Learn from Rwanda's successful digital transformation model",
      "Explore partnership opportunities with government innovation programs",
    ],
    whyAttend_fr: [
      "Découvrez l'écosystème urbain intelligent de Kigali Innovation City",
      "Pitchez auprès d'investisseurs est-africains et internationaux",
      "Apprenez du modèle réussi de transformation numérique du Rwanda",
      "Explorez les opportunités de partenariat avec les programmes gouvernementaux d'innovation",
    ],
    audience: ["Entrepreneurs", "Tech Innovators", "Impact Investors", "Government Leaders"],
    audience_fr: ["Entrepreneurs", "Innovateurs tech", "Investisseurs à impact", "Dirigeants gouvernementaux"],
    website: "https://rdb.rw",
  },
  {
    id: "4",
    name: "Nairobi Startup Festival",
    name_fr: "Festival des startups de Nairobi",
    city: "Nairobi",
    country: "Kenya",
    date: "2026-09-03",
    sector: "Startup",
    organizer: "Kenya Startup Association",
    badge: "STARTUP",
    description: "East Africa's premier startup festival celebrating entrepreneurship, innovation and venture capital. Features pitch competitions, mentorship sessions and networking events across Nairobi's vibrant tech ecosystem.",
    description_fr: "Le premier festival de startups d'Afrique de l'Est célébrant l'entrepreneuriat, l'innovation et le capital-risque. Comprend des concours de pitch, des sessions de mentorat et des événements de réseautage au sein du vibrant écosystème tech de Nairobi.",
    whyAttend: [
      "Access East Africa's most dynamic startup ecosystem",
      "Participate in pitch competitions with $1M+ in prize funding",
      "Connect with accelerators, incubators and VC firms",
      "Explore Kenya's mobile-first innovation culture",
    ],
    whyAttend_fr: [
      "Accédez à l'écosystème startup le plus dynamique d'Afrique de l'Est",
      "Participez à des concours de pitch avec plus d'1M$ en prix",
      "Connectez-vous avec des accélérateurs, incubateurs et fonds de capital-risque",
      "Explorez la culture d'innovation mobile-first du Kenya",
    ],
    audience: ["Startups", "Angel Investors", "Accelerators", "Corporate Innovation Teams"],
    audience_fr: ["Startups", "Investisseurs providentiels", "Accélérateurs", "Équipes d'innovation corporate"],
    website: "https://kenyastartupfestival.com",
  },
  {
    id: "5",
    name: "Morocco Renewable Energy Forum",
    name_fr: "Forum des énergies renouvelables du Maroc",
    city: "Casablanca",
    country: "Morocco",
    date: "2026-04-22",
    sector: "Energy & Climate",
    organizer: "MASEN & Morocco Trade",
    badge: "ENERGY",
    description: "North Africa's leading renewable energy conference, showcasing Morocco's world-class solar and wind infrastructure, green hydrogen roadmap, and clean energy export strategy to Europe.",
    description_fr: "La principale conférence sur les énergies renouvelables en Afrique du Nord, présentant les infrastructures solaires et éoliennes de classe mondiale du Maroc, la feuille de route pour l'hydrogène vert et la stratégie d'exportation d'énergie propre vers l'Europe.",
    whyAttend: [
      "Explore investment opportunities in the Noor solar complex expansion",
      "Understand Morocco's green hydrogen export strategy",
      "Meet leading EPCs, developers and financiers in African clean energy",
      "Learn about cross-Mediterranean energy interconnection projects",
    ],
    whyAttend_fr: [
      "Explorez les opportunités d'investissement dans l'expansion du complexe solaire Noor",
      "Comprenez la stratégie d'exportation d'hydrogène vert du Maroc",
      "Rencontrez les principaux EPC, développeurs et financiers de l'énergie propre africaine",
      "Découvrez les projets d'interconnexion énergétique transméditerranéens",
    ],
    audience: ["Energy Investors", "Project Developers", "Policy Makers", "Technology Providers"],
    audience_fr: ["Investisseurs énergétiques", "Développeurs de projets", "Décideurs politiques", "Fournisseurs de technologie"],
    website: "https://www.masen.ma",
  },
  {
    id: "6",
    name: "Cape Town Venture Capital Summit",
    name_fr: "Sommet du capital-risque du Cap",
    city: "Cape Town",
    country: "South Africa",
    date: "2026-08-18",
    sector: "Venture Capital",
    organizer: "SA Venture Capital Association",
    badge: "INVESTMENT",
    description: "Southern Africa's premier venture capital event bringing together LP and GP communities, family offices, and institutional investors to discuss African tech investment strategies.",
    description_fr: "Le premier événement de capital-risque d'Afrique australe réunissant les communautés LP et GP, les family offices et les investisseurs institutionnels pour discuter des stratégies d'investissement tech en Afrique.",
    whyAttend: [
      "Meet Africa-focused VCs managing $5B+ in assets",
      "Attend LP-GP matchmaking sessions",
      "Explore co-investment and syndication opportunities",
      "Access data and insights on African VC performance benchmarks",
    ],
    whyAttend_fr: [
      "Rencontrez des VC axés sur l'Afrique gérant plus de 5 milliards de dollars d'actifs",
      "Participez à des sessions de mise en relation LP-GP",
      "Explorez les opportunités de co-investissement et de syndication",
      "Accédez aux données et analyses sur les benchmarks de performance du VC africain",
    ],
    audience: ["Venture Capitalists", "Limited Partners", "Family Offices", "Fund Managers"],
    audience_fr: ["Capital-risqueurs", "Limited Partners", "Family Offices", "Gestionnaires de fonds"],
    website: "https://savca.co.za",
  },
  {
    id: "7",
    name: "Dakar Digital Economy Conference",
    name_fr: "Conférence sur l'économie numérique de Dakar",
    city: "Dakar",
    country: "Senegal",
    date: "2026-10-14",
    sector: "Digital Economy",
    organizer: "Senegal Ministry of Digital Economy",
    badge: "TECH",
    description: "A government-led conference showcasing Senegal's digital transformation agenda, from submarine cable infrastructure to fintech regulation and digital public services.",
    description_fr: "Une conférence gouvernementale présentant l'agenda de transformation numérique du Sénégal, des infrastructures de câbles sous-marins à la réglementation fintech et aux services publics numériques.",
    whyAttend: [
      "Understand Senegal's digital economy strategy and investment incentives",
      "Meet government procurement decision-makers",
      "Explore partnerships in digital infrastructure and connectivity",
      "Network with Francophone Africa's growing tech community",
    ],
    whyAttend_fr: [
      "Comprenez la stratégie d'économie numérique et les incitations à l'investissement du Sénégal",
      "Rencontrez les décideurs des marchés publics gouvernementaux",
      "Explorez les partenariats en infrastructure numérique et connectivité",
      "Réseautez avec la communauté tech croissante de l'Afrique francophone",
    ],
    audience: ["Tech Companies", "Government Officials", "Telcos", "Digital Infrastructure Providers"],
    audience_fr: ["Entreprises tech", "Responsables gouvernementaux", "Opérateurs télécoms", "Fournisseurs d'infrastructure numérique"],
    website: "https://www.numerique.gouv.sn",
  },
  {
    id: "8",
    name: "Accra Tech and Investment Summit",
    name_fr: "Sommet Tech et Investissement d'Accra",
    city: "Accra",
    country: "Ghana",
    date: "2026-11-05",
    sector: "Technology",
    organizer: "Ghana Tech Foundation",
    badge: "TECH",
    description: "Ghana's premier technology and investment conference bringing together founders, investors and policymakers to advance the country's position as West Africa's tech innovation gateway.",
    description_fr: "La première conférence tech et investissement du Ghana réunissant fondateurs, investisseurs et décideurs politiques pour renforcer la position du pays comme porte d'entrée de l'innovation tech en Afrique de l'Ouest.",
    whyAttend: [
      "Discover Ghana's most promising tech startups and scale-ups",
      "Explore the country's progressive fintech regulatory framework",
      "Meet investors actively deploying in Anglophone West Africa",
      "Learn about Ghana's digital infrastructure expansion plans",
    ],
    whyAttend_fr: [
      "Découvrez les startups et scale-ups tech les plus prometteuses du Ghana",
      "Explorez le cadre réglementaire fintech progressif du pays",
      "Rencontrez des investisseurs déployant activement en Afrique de l'Ouest anglophone",
      "Découvrez les plans d'expansion de l'infrastructure numérique du Ghana",
    ],
    audience: ["Entrepreneurs", "Investors", "Tech Professionals", "Corporates"],
    audience_fr: ["Entrepreneurs", "Investisseurs", "Professionnels tech", "Entreprises"],
    website: "https://gipc.gov.gh",
  },
  {
    id: "9",
    name: "Cairo AI and Robotics Expo",
    name_fr: "Expo IA et Robotique du Caire",
    city: "Cairo",
    country: "Egypt",
    date: "2026-09-20",
    sector: "AI & Robotics",
    organizer: "Egypt National AI Office",
    badge: "TECH",
    description: "The largest AI and robotics exhibition in the Middle East and Africa, showcasing applications in healthcare, agriculture, logistics, and smart cities powered by Egyptian engineering talent.",
    description_fr: "La plus grande exposition d'IA et de robotique au Moyen-Orient et en Afrique, présentant des applications dans la santé, l'agriculture, la logistique et les villes intelligentes portées par les talents d'ingénierie égyptiens.",
    whyAttend: [
      "Experience cutting-edge AI and robotics demonstrations",
      "Meet the startups behind Egypt's AI revolution",
      "Explore government procurement pathways for AI solutions",
      "Connect with 100M-consumer market for intelligent products",
    ],
    whyAttend_fr: [
      "Découvrez des démonstrations d'IA et de robotique de pointe",
      "Rencontrez les startups derrière la révolution IA de l'Égypte",
      "Explorez les voies d'accès aux marchés publics pour les solutions IA",
      "Connectez-vous au marché de 100 millions de consommateurs pour les produits intelligents",
    ],
    audience: ["AI Startups", "Research Institutions", "Government Agencies", "Corporate R&D Teams"],
    audience_fr: ["Startups IA", "Institutions de recherche", "Agences gouvernementales", "Équipes R&D corporate"],
    website: "https://mcit.gov.eg/en",
  },
  {
    id: "10",
    name: "Johannesburg Mining Innovation Forum",
    name_fr: "Forum d'innovation minière de Johannesburg",
    city: "Johannesburg",
    country: "South Africa",
    date: "2026-08-25",
    sector: "Mining & Resources",
    organizer: "Mining Indaba Group",
    badge: "INVESTMENT",
    description: "The definitive mining innovation event in Africa, exploring autonomous mining, AI-driven exploration, sustainable extraction, and the future of critical minerals for the green energy transition.",
    description_fr: "L'événement de référence en innovation minière en Afrique, explorant l'exploitation minière autonome, l'exploration assistée par IA, l'extraction durable et l'avenir des minéraux critiques pour la transition énergétique verte.",
    whyAttend: [
      "Meet mining majors and junior explorers seeking technology partners",
      "Explore investment in critical minerals (lithium, cobalt, rare earths)",
      "Learn about ESG-compliant mining innovations",
      "Access deal flow in Africa's $300B+ mining sector",
    ],
    whyAttend_fr: [
      "Rencontrez les majors minières et explorateurs juniors à la recherche de partenaires technologiques",
      "Explorez l'investissement dans les minéraux critiques (lithium, cobalt, terres rares)",
      "Découvrez les innovations minières conformes ESG",
      "Accédez au flux d'opportunités du secteur minier africain de plus de 300 milliards de dollars",
    ],
    audience: ["Mining Companies", "Institutional Investors", "Technology Providers", "ESG Analysts"],
    audience_fr: ["Entreprises minières", "Investisseurs institutionnels", "Fournisseurs de technologie", "Analystes ESG"],
    website: "https://miningindaba.com",
  },
  {
    id: "11",
    name: "Cameroon Digital Economy Forum",
    name_fr: "Forum de l'économie numérique du Cameroun",
    city: "Douala",
    country: "Cameroon",
    date: "2026-10-15",
    sector: "Digital Economy",
    organizer: "Cameroon Ministry of Posts & Telecoms",
    badge: "TECH",
    description: "Central Africa's leading digital economy conference, showcasing Cameroon's digital infrastructure expansion, mobile banking innovations, and e-government transformation.",
    description_fr: "La principale conférence sur l'économie numérique d'Afrique centrale, présentant l'expansion de l'infrastructure numérique du Cameroun, les innovations en banque mobile et la transformation de l'e-gouvernement.",
    whyAttend: [
      "Explore Central Africa's largest digital market",
      "Meet government decision-makers driving digital transformation",
      "Discover partnership opportunities in mobile banking and e-commerce",
      "Network with Cameroon's growing tech entrepreneurship ecosystem",
    ],
    whyAttend_fr: [
      "Explorez le plus grand marché numérique d'Afrique centrale",
      "Rencontrez les décideurs gouvernementaux moteurs de la transformation numérique",
      "Découvrez les opportunités de partenariat en banque mobile et e-commerce",
      "Réseautez avec l'écosystème croissant d'entrepreneuriat tech du Cameroun",
    ],
    audience: ["Tech Companies", "Investors", "Government Officials", "Entrepreneurs"],
    audience_fr: ["Entreprises tech", "Investisseurs", "Responsables gouvernementaux", "Entrepreneurs"],
    website: "https://www.minpostel.gov.cm",
  },
];

export const INSIGHT_IMAGES: Record<string, string> = {
  Investment: "financial-district",
  Technology: "nairobi-tech-hub",
  Finance: "lagos-skyline",
  Energy: "solar-farm-morocco",
  Infrastructure: "port-infrastructure",
  "Market Analysis": "smart-city",
};

export const insights: InsightArticle[] = [
  {
    id: "1",
    title: "Investment Trends Reshaping Africa in 2026",
    title_fr: "Les tendances d'investissement qui transforment l'Afrique en 2026",
    summary: "An analysis of the top investment trends driving capital flows into African markets, from fintech to green energy. Institutional investors are increasingly diversifying portfolios with African sovereign bonds and tech-driven infrastructure.",
    summary_fr: "Une analyse des principales tendances d'investissement stimulant les flux de capitaux vers les marchés africains, de la fintech à l'énergie verte. Les investisseurs institutionnels diversifient de plus en plus leurs portefeuilles avec des obligations souveraines africaines et des infrastructures technologiques.",
    category: "Investment",
    date: "2026-03-01",
    readTime: "6 min",
    image: "financial-district",
    author: "KGS Research",
  },
  {
    id: "2",
    title: "Emerging Tech Ecosystems Across the Continent",
    title_fr: "Écosystèmes tech émergents à travers le continent",
    summary: "How Lagos, Nairobi, Kigali, and Cape Town are building competitive tech ecosystems attracting global talent. A deep dive into the infrastructure, policies, and venture capital fueling Africa's digital transformation.",
    summary_fr: "Comment Lagos, Nairobi, Kigali et Le Cap construisent des écosystèmes tech compétitifs attirant les talents mondiaux. Une analyse approfondie des infrastructures, politiques et capital-risque alimentant la transformation numérique de l'Afrique.",
    category: "Technology",
    date: "2026-02-18",
    readTime: "5 min",
    image: "nairobi-tech-hub",
    author: "KGS Intelligence",
  },
  {
    id: "3",
    title: "Where Capital is Flowing in Africa",
    title_fr: "Où les capitaux affluent en Afrique",
    summary: "Mapping institutional and venture capital movements across key African markets and sectors. From fintech to agritech, discover which verticals are attracting the most funding in 2026.",
    summary_fr: "Cartographie des mouvements de capitaux institutionnels et de capital-risque à travers les marchés et secteurs africains clés. De la fintech à l'agritech, découvrez quels secteurs attirent le plus de financement en 2026.",
    category: "Finance",
    date: "2026-02-05",
    readTime: "7 min",
    image: "lagos-skyline",
    author: "KGS Market Desk",
  },
  {
    id: "4",
    title: "The Rise of African Sovereign Wealth Funds",
    title_fr: "L'essor des fonds souverains africains",
    summary: "How African nations are leveraging sovereign wealth funds to attract foreign direct investment and stabilize economies against commodity price volatility.",
    summary_fr: "Comment les nations africaines utilisent les fonds souverains pour attirer les investissements directs étrangers et stabiliser les économies face à la volatilité des prix des matières premières.",
    category: "Finance",
    date: "2026-01-20",
    readTime: "8 min",
    image: "financial-district",
    author: "KGS Research",
  },
  {
    id: "5",
    title: "Green Hydrogen: Africa's Next Energy Frontier",
    title_fr: "Hydrogène vert : la prochaine frontière énergétique de l'Afrique",
    summary: "Morocco, Namibia and Egypt lead Africa's green hydrogen race. Explore how the continent's renewable energy abundance positions it as a global clean fuel exporter.",
    summary_fr: "Le Maroc, la Namibie et l'Égypte mènent la course à l'hydrogène vert en Afrique. Découvrez comment l'abondance d'énergie renouvelable du continent le positionne comme exportateur mondial de carburant propre.",
    category: "Energy",
    date: "2026-01-10",
    readTime: "6 min",
    image: "solar-farm-morocco",
    author: "KGS Energy Desk",
  },
  {
    id: "6",
    title: "Port Infrastructure Modernization in West Africa",
    title_fr: "Modernisation des infrastructures portuaires en Afrique de l'Ouest",
    summary: "Billions in investment are transforming West African ports into global logistics hubs. From Abidjan to Lagos, a look at the projects reshaping continental trade corridors.",
    summary_fr: "Des milliards d'investissements transforment les ports ouest-africains en hubs logistiques mondiaux. D'Abidjan à Lagos, un regard sur les projets qui remodèlent les corridors commerciaux continentaux.",
    category: "Infrastructure",
    date: "2025-12-15",
    readTime: "5 min",
    image: "port-infrastructure",
    author: "KGS Infrastructure",
  },
  {
    id: "7",
    title: "AI Adoption Across African Economies",
    title_fr: "Adoption de l'IA dans les économies africaines",
    summary: "Egypt, Kenya and South Africa lead artificial intelligence adoption in healthcare, agriculture and fintech. An analysis of policy frameworks and startup ecosystems driving AI growth.",
    summary_fr: "L'Égypte, le Kenya et l'Afrique du Sud mènent l'adoption de l'intelligence artificielle dans la santé, l'agriculture et la fintech. Une analyse des cadres politiques et des écosystèmes de startups stimulant la croissance de l'IA.",
    category: "Technology",
    date: "2025-12-01",
    readTime: "7 min",
    image: "smart-city",
    author: "KGS Intelligence",
  },
  {
    id: "8",
    title: "African Mining Sector: Technology-Driven Transformation",
    title_fr: "Secteur minier africain : transformation technologique",
    summary: "From autonomous drilling in South Africa to AI-powered exploration in the DRC, mining technology is revolutionizing resource extraction across the continent.",
    summary_fr: "Du forage autonome en Afrique du Sud à l'exploration assistée par IA en RDC, la technologie minière révolutionne l'extraction des ressources à travers le continent.",
    category: "Market Analysis",
    date: "2025-11-18",
    readTime: "6 min",
    image: "mining-tech",
    author: "KGS Market Desk",
  },
];

export const countries: CountryData[] = [
  {
    code: "NG", name: "Nigeria", name_fr: "Nigeria",
    overview: "Africa's largest economy with a thriving fintech ecosystem.",
    overview_fr: "La plus grande économie d'Afrique avec un écosystème fintech florissant.",
    description: "Nigeria is Africa's most populous nation and its largest economy, with a GDP exceeding $470 billion. Lagos, the commercial capital, hosts one of the most vibrant tech startup ecosystems on the continent, having produced multiple unicorns including Flutterwave and Interswitch. The country's oil and gas sector remains a major driver of revenue, while agriculture employs over 35% of the workforce. Nigeria's young, tech-savvy population of over 220 million represents a massive consumer market, attracting significant foreign direct investment in fintech, e-commerce, and digital infrastructure. The government's ongoing reforms in banking, telecoms deregulation, and the Startup Act are creating new opportunities for international investors and partners.",
    description_fr: "Le Nigeria est la nation la plus peuplée d'Afrique et sa plus grande économie, avec un PIB dépassant 470 milliards de dollars. Lagos, la capitale commerciale, abrite l'un des écosystèmes de startups tech les plus dynamiques du continent, ayant produit plusieurs licornes dont Flutterwave et Interswitch. Le secteur pétrolier et gazier du pays reste un moteur majeur de revenus, tandis que l'agriculture emploie plus de 35% de la main-d'œuvre. La population jeune et technophile de plus de 220 millions de personnes représente un marché de consommation massif, attirant d'importants investissements directs étrangers dans la fintech, le e-commerce et l'infrastructure numérique. Les réformes en cours du gouvernement dans la banque, la déréglementation des télécoms et la Startup Act créent de nouvelles opportunités pour les investisseurs et partenaires internationaux.",
    keySectors: ["Technology", "Oil & Gas", "Agriculture"], keySectors_fr: ["Technologie", "Pétrole & Gaz", "Agriculture"],
    opportunities: 3, events: 1, population: "220M+", gdp: "$470B+", capital: "Abuja", capital_fr: "Abuja",
    topRanking: "#1 African Fintech Ecosystem", topRanking_fr: "#1 Écosystème Fintech Africain",
    investmentRange: "$50M – $2B+", investmentRange_fr: "50M$ – 2Md$+"
  },
  {
    code: "KE", name: "Kenya", name_fr: "Kenya",
    overview: "East Africa's innovation hub with strong mobile and fintech sectors.",
    overview_fr: "Le hub d'innovation d'Afrique de l'Est avec de solides secteurs mobile et fintech.",
    description: "Kenya is East Africa's economic powerhouse and a global leader in mobile money innovation through M-Pesa. Nairobi, known as 'Silicon Savannah,' is home to hundreds of tech startups, major international tech offices, and Africa's most active venture capital ecosystem. The country's Vision 2030 strategy drives investment in infrastructure, green energy, and manufacturing. Kenya's geothermal energy capacity is among the world's largest, and its agricultural sector — particularly tea, coffee, and horticulture — remains vital. With a strategic position on the Indian Ocean and strong trade ties across East Africa, Kenya offers investors access to a rapidly growing regional market of over 300 million people through the East African Community.",
    description_fr: "Le Kenya est la puissance économique de l'Afrique de l'Est et un leader mondial de l'innovation en monnaie mobile grâce à M-Pesa. Nairobi, surnommée 'Silicon Savannah', abrite des centaines de startups tech, des bureaux de grandes entreprises technologiques internationales et l'écosystème de capital-risque le plus actif d'Afrique. La stratégie Vision 2030 du pays stimule l'investissement dans les infrastructures, l'énergie verte et l'industrie manufacturière. La capacité géothermique du Kenya est parmi les plus importantes au monde, et son secteur agricole — notamment le thé, le café et l'horticulture — reste vital. Avec une position stratégique sur l'océan Indien et de solides liens commerciaux à travers l'Afrique de l'Est, le Kenya offre aux investisseurs un accès à un marché régional en croissance rapide de plus de 300 millions de personnes via la Communauté d'Afrique de l'Est.",
    keySectors: ["Technology", "Energy", "Agriculture"], keySectors_fr: ["Technologie", "Énergie", "Agriculture"],
    opportunities: 2, events: 1, population: "55M+", gdp: "$110B+", capital: "Nairobi", capital_fr: "Nairobi",
    topRanking: "#1 Mobile Money Innovation (M-Pesa)", topRanking_fr: "#1 Innovation Mobile Money (M-Pesa)",
    investmentRange: "$10M – $500M", investmentRange_fr: "10M$ – 500M$"
  },
  {
    code: "ZA", name: "South Africa", name_fr: "Afrique du Sud",
    overview: "Continent's most industrialized economy with deep capital markets.",
    overview_fr: "L'économie la plus industrialisée du continent avec des marchés financiers profonds.",
    description: "South Africa is the continent's most industrialized and diversified economy, home to the Johannesburg Stock Exchange — Africa's largest. The country boasts world-class financial services, mining operations, and manufacturing capabilities. South Africa holds over 80% of the world's platinum reserves and is a major producer of gold, diamonds, and chromium. Johannesburg and Cape Town serve as continental headquarters for many multinational corporations. The country's advanced legal framework, sophisticated banking system, and deep capital markets make it a preferred entry point for institutional investors targeting African markets. Key growth sectors include renewable energy, fintech, and automotive manufacturing.",
    description_fr: "L'Afrique du Sud est l'économie la plus industrialisée et diversifiée du continent, abritant la Bourse de Johannesburg — la plus grande d'Afrique. Le pays possède des services financiers de classe mondiale, des opérations minières et des capacités manufacturières avancées. L'Afrique du Sud détient plus de 80% des réserves mondiales de platine et est un producteur majeur d'or, de diamants et de chrome. Johannesburg et Le Cap servent de sièges continentaux pour de nombreuses multinationales. Le cadre juridique avancé du pays, son système bancaire sophistiqué et ses marchés financiers profonds en font un point d'entrée privilégié pour les investisseurs institutionnels ciblant les marchés africains. Les secteurs de croissance clés incluent l'énergie renouvelable, la fintech et l'industrie automobile.",
    keySectors: ["Mining", "Finance", "Technology"], keySectors_fr: ["Mines", "Finance", "Technologie"],
    opportunities: 1, events: 2, population: "62M+", gdp: "$400B+", capital: "Pretoria", capital_fr: "Pretoria",
    topRanking: "#1 African Stock Exchange (JSE)", topRanking_fr: "#1 Bourse Africaine (JSE)",
    investmentRange: "$100M – $5B+", investmentRange_fr: "100M$ – 5Md$+"
  },
  {
    code: "GA", name: "Gabon", name_fr: "Gabon",
    overview: "Resource-rich Central African nation focused on diversification.",
    overview_fr: "Nation d'Afrique centrale riche en ressources axée sur la diversification.",
    description: "Gabon is one of Africa's most prosperous nations per capita, driven by its significant oil, manganese, and timber resources. The country is actively pursuing economic diversification through its Green Gabon initiative, focusing on eco-tourism, sustainable forestry, and agro-industry. Libreville, the capital, is emerging as a regional financial center for Central Africa. Gabon's strategic location on the Atlantic coast and membership in the CEMAC economic zone provide access to a regional market. The government's investment in Special Economic Zones and infrastructure modernization creates opportunities for foreign investors in logistics, processing, and green industries.",
    description_fr: "Le Gabon est l'une des nations les plus prospères d'Afrique par habitant, porté par ses importantes ressources pétrolières, de manganèse et de bois. Le pays poursuit activement la diversification économique à travers son initiative Gabon Vert, axée sur l'éco-tourisme, la foresterie durable et l'agro-industrie. Libreville, la capitale, émerge comme centre financier régional pour l'Afrique centrale. La position stratégique du Gabon sur la côte atlantique et son appartenance à la zone économique CEMAC offrent un accès au marché régional. Les investissements du gouvernement dans les Zones Économiques Spéciales et la modernisation des infrastructures créent des opportunités pour les investisseurs étrangers dans la logistique, la transformation et les industries vertes.",
    keySectors: ["Oil & Gas", "Mining", "Infrastructure"], keySectors_fr: ["Pétrole & Gaz", "Mines", "Infrastructure"],
    opportunities: 1, events: 0, population: "2.3M+", gdp: "$20B+", capital: "Libreville", capital_fr: "Libreville",
    topRanking: "#1 PIB/habitant Afrique Centrale", topRanking_fr: "#1 PIB/habitant Afrique Centrale",
    investmentRange: "$5M – $200M", investmentRange_fr: "5M$ – 200M$"
  },
  {
    code: "MA", name: "Morocco", name_fr: "Maroc",
    overview: "North Africa's gateway with strong automotive and renewable energy sectors.",
    overview_fr: "La porte d'entrée de l'Afrique du Nord avec de solides secteurs automobile et énergies renouvelables.",
    description: "Morocco has positioned itself as Africa's gateway to Europe and a continental manufacturing powerhouse. The country hosts major automotive plants for Renault and PSA, making it Africa's top car producer. Morocco's Noor-Ouarzazate solar complex is one of the world's largest concentrated solar power facilities, reflecting the country's ambitious renewable energy targets. Casablanca Finance City serves as a leading financial hub bridging Africa, Europe, and the Middle East. The Tanger Med port is the Mediterranean's largest container port. Morocco's stable political environment, extensive free trade agreements, and strategic geographic position make it exceptionally attractive for companies seeking to serve both European and African markets.",
    description_fr: "Le Maroc s'est positionné comme la porte d'entrée de l'Afrique vers l'Europe et une puissance manufacturière continentale. Le pays abrite d'importantes usines automobiles pour Renault et PSA, faisant de lui le premier producteur automobile d'Afrique. Le complexe solaire Noor-Ouarzazate est l'une des plus grandes installations d'énergie solaire concentrée au monde, reflétant les objectifs ambitieux du pays en matière d'énergies renouvelables. Casablanca Finance City sert de hub financier de premier plan reliant l'Afrique, l'Europe et le Moyen-Orient. Le port Tanger Med est le plus grand port à conteneurs de la Méditerranée. L'environnement politique stable du Maroc, ses nombreux accords de libre-échange et sa position géographique stratégique le rendent exceptionnellement attractif pour les entreprises souhaitant servir à la fois les marchés européens et africains.",
    keySectors: ["Energy", "Manufacturing", "Real Estate"], keySectors_fr: ["Énergie", "Industrie", "Immobilier"],
    opportunities: 2, events: 1, population: "37M+", gdp: "$140B+", capital: "Rabat", capital_fr: "Rabat",
    topRanking: "#1 African Car Producer", topRanking_fr: "#1 Producteur Automobile Africain",
    investmentRange: "$20M – $1B+", investmentRange_fr: "20M$ – 1Md$+"
  },
  {
    code: "RW", name: "Rwanda", name_fr: "Rwanda",
    overview: "Africa's most business-friendly nation with ambitious tech vision.",
    overview_fr: "Le pays le plus propice aux affaires en Afrique avec une vision tech ambitieuse.",
    description: "Rwanda has earned its reputation as Africa's most business-friendly country, consistently ranking at the top of the World Bank's Doing Business index for the continent. Kigali, the capital, is one of Africa's cleanest and safest cities, hosting major international conferences and serving as a continental hub for innovation. The country's ambitious Vision 2050 strategy focuses on transforming Rwanda into a knowledge-based economy through investments in ICT, fintech, and smart city infrastructure. Rwanda has attracted major tech investments, including Carnegie Mellon University's African campus and Volkswagen's first African assembly plant. The Kigali International Financial Centre and special economic zones offer competitive incentives for international businesses.",
    description_fr: "Le Rwanda a acquis sa réputation de pays le plus propice aux affaires en Afrique, se classant constamment en tête de l'indice Doing Business de la Banque mondiale pour le continent. Kigali, la capitale, est l'une des villes les plus propres et les plus sûres d'Afrique, accueillant d'importantes conférences internationales et servant de hub continental pour l'innovation. La stratégie ambitieuse Vision 2050 du pays vise à transformer le Rwanda en une économie basée sur la connaissance grâce à des investissements dans les TIC, la fintech et l'infrastructure des villes intelligentes. Le Rwanda a attiré d'importants investissements tech, notamment le campus africain de Carnegie Mellon University et la première usine d'assemblage africaine de Volkswagen. Le Centre Financier International de Kigali et les zones économiques spéciales offrent des incitations compétitives pour les entreprises internationales.",
    keySectors: ["Technology", "Tourism", "Real Estate"], keySectors_fr: ["Technologie", "Tourisme", "Immobilier"],
    opportunities: 1, events: 1, population: "14M+", gdp: "$12B+", capital: "Kigali", capital_fr: "Kigali"
  },
  {
    code: "CI", name: "Côte d'Ivoire", name_fr: "Côte d'Ivoire",
    overview: "West Africa's francophone economic hub with strong agricultural sector.",
    overview_fr: "Le hub économique francophone d'Afrique de l'Ouest avec un solide secteur agricole.",
    description: "Côte d'Ivoire is the economic engine of francophone West Africa and the world's largest cocoa producer, accounting for over 40% of global production. Abidjan, the economic capital, is a cosmopolitan city hosting the African Development Bank headquarters and numerous multinational regional offices. The country has experienced robust economic growth averaging 7% annually over the past decade, driven by infrastructure development, agro-industry expansion, and financial sector modernization. The Autonomous Port of Abidjan is West Africa's largest, serving as a vital trade gateway for landlocked Sahelian countries. Key investment opportunities span agribusiness processing, renewable energy, real estate development, and digital financial services.",
    description_fr: "La Côte d'Ivoire est le moteur économique de l'Afrique de l'Ouest francophone et le premier producteur mondial de cacao, représentant plus de 40% de la production mondiale. Abidjan, la capitale économique, est une ville cosmopolite abritant le siège de la Banque Africaine de Développement et de nombreux bureaux régionaux de multinationales. Le pays a connu une croissance économique robuste de 7% en moyenne par an au cours de la dernière décennie, portée par le développement des infrastructures, l'expansion agro-industrielle et la modernisation du secteur financier. Le Port Autonome d'Abidjan est le plus grand d'Afrique de l'Ouest, servant de porte d'entrée commerciale vitale pour les pays sahéliens enclavés. Les principales opportunités d'investissement couvrent la transformation agro-industrielle, les énergies renouvelables, le développement immobilier et les services financiers numériques.",
    keySectors: ["Agriculture", "Finance", "Infrastructure"], keySectors_fr: ["Agriculture", "Finance", "Infrastructure"],
    opportunities: 1, events: 1, population: "28M+", gdp: "$70B+", capital: "Yamoussoukro", capital_fr: "Yamoussoukro"
  },
  {
    code: "SN", name: "Senegal", name_fr: "Sénégal",
    overview: "Emerging West African economy with oil & gas discoveries.",
    overview_fr: "Économie émergente d'Afrique de l'Ouest avec des découvertes de pétrole et gaz.",
    description: "Senegal is experiencing a transformative period driven by major offshore oil and gas discoveries — the Sangomar field and the Grand Tortue Ahmeyim project — set to make the country a significant hydrocarbon producer. Dakar, the vibrant capital, is a cultural and economic hub for West Africa with a growing tech and creative industries ecosystem. The country's Plan Sénégal Émergent (PSE) is driving massive infrastructure investments including the new Blaise Diagne International Airport, the Dakar-Diamniadio toll highway, and the ambitious Diamniadio smart city project. Senegal's political stability, democratic traditions, and strategic Atlantic coast position make it an increasingly attractive destination for foreign investors seeking exposure to West Africa's growth story.",
    description_fr: "Le Sénégal connaît une période de transformation portée par d'importantes découvertes pétrolières et gazières offshore — le champ Sangomar et le projet Grand Tortue Ahmeyim — qui feront du pays un producteur d'hydrocarbures significatif. Dakar, la capitale dynamique, est un hub culturel et économique pour l'Afrique de l'Ouest avec un écosystème croissant de tech et d'industries créatives. Le Plan Sénégal Émergent (PSE) du pays conduit des investissements massifs en infrastructures incluant le nouvel aéroport international Blaise Diagne, l'autoroute à péage Dakar-Diamniadio et l'ambitieux projet de ville intelligente de Diamniadio. La stabilité politique du Sénégal, ses traditions démocratiques et sa position stratégique sur la côte atlantique en font une destination de plus en plus attractive pour les investisseurs étrangers cherchant une exposition à la croissance de l'Afrique de l'Ouest.",
    keySectors: ["Energy", "Technology", "Agriculture"], keySectors_fr: ["Énergie", "Technologie", "Agriculture"],
    opportunities: 1, events: 1, population: "18M+", gdp: "$28B+", capital: "Dakar", capital_fr: "Dakar"
  },
  {
    code: "GH", name: "Ghana", name_fr: "Ghana",
    overview: "Stable democracy with growing tech scene and natural resources.",
    overview_fr: "Démocratie stable avec une scène tech en croissance et des ressources naturelles.",
    description: "Ghana is one of Africa's most stable democracies and a major producer of gold, cocoa, and oil. Accra, the capital, has emerged as a key tech hub in West Africa, attracting major investments from Google, Twitter, and other global tech companies establishing their African operations. The country's gold mining sector is Africa's largest, while new oil production from the Jubilee and TEN fields has added a significant revenue stream. Ghana's AfCFTA headquarters location underscores its central role in continental trade integration. The government's digitalization drive, including the national digital ID system and mobile money interoperability platform, positions Ghana as a leader in Africa's digital economy transformation.",
    description_fr: "Le Ghana est l'une des démocraties les plus stables d'Afrique et un producteur majeur d'or, de cacao et de pétrole. Accra, la capitale, est devenue un hub tech clé en Afrique de l'Ouest, attirant d'importants investissements de Google, Twitter et d'autres entreprises tech mondiales établissant leurs opérations africaines. Le secteur aurifère du pays est le plus grand d'Afrique, tandis que la nouvelle production pétrolière des champs Jubilee et TEN a ajouté une source de revenus significative. La localisation du siège de la ZLECAf au Ghana souligne son rôle central dans l'intégration commerciale continentale. La dynamique de digitalisation du gouvernement, incluant le système national d'identité numérique et la plateforme d'interopérabilité de la monnaie mobile, positionne le Ghana comme leader de la transformation de l'économie numérique africaine.",
    keySectors: ["Mining", "Technology", "Infrastructure"], keySectors_fr: ["Mines", "Technologie", "Infrastructure"],
    opportunities: 2, events: 1, population: "33M+", gdp: "$75B+", capital: "Accra", capital_fr: "Accra"
  },
  {
    code: "ET", name: "Ethiopia", name_fr: "Éthiopie",
    overview: "Africa's fastest-growing economy with massive infrastructure development.",
    overview_fr: "L'économie à la croissance la plus rapide d'Afrique avec un développement massif d'infrastructures.",
    description: "Ethiopia is Africa's second most populous country and has been one of the fastest-growing economies globally over the past decade. Addis Ababa, the capital, hosts the African Union headquarters and serves as a diplomatic hub for the continent. The country's ambitious industrialization strategy has created multiple industrial parks attracting textile, leather, and pharmaceutical manufacturing. Ethiopia's Grand Ethiopian Renaissance Dam (GERD) is Africa's largest hydroelectric project. The recent partial liberalization of the telecoms sector and planned stock exchange launch signal major reforms opening the economy to foreign investment. With a domestic market of over 120 million people, Ethiopia represents one of Africa's most significant untapped consumer markets.",
    description_fr: "L'Éthiopie est le deuxième pays le plus peuplé d'Afrique et a été l'une des économies à la croissance la plus rapide au monde au cours de la dernière décennie. Addis-Abeba, la capitale, abrite le siège de l'Union Africaine et sert de hub diplomatique pour le continent. La stratégie ambitieuse d'industrialisation du pays a créé de multiples parcs industriels attirant la fabrication textile, du cuir et pharmaceutique. Le Grand Barrage de la Renaissance Éthiopienne (GERD) est le plus grand projet hydroélectrique d'Afrique. La libéralisation partielle récente du secteur des télécoms et le lancement prévu d'une bourse signalent des réformes majeures ouvrant l'économie aux investissements étrangers. Avec un marché intérieur de plus de 120 millions de personnes, l'Éthiopie représente l'un des marchés de consommation inexploités les plus importants d'Afrique.",
    keySectors: ["Manufacturing", "Agriculture", "Infrastructure"], keySectors_fr: ["Industrie", "Agriculture", "Infrastructure"],
    opportunities: 0, events: 0, population: "120M+", gdp: "$155B+", capital: "Addis Ababa", capital_fr: "Addis-Abeba"
  },
  {
    code: "EG", name: "Egypt", name_fr: "Égypte",
    overview: "North Africa's largest economy with growing AI and tech sector.",
    overview_fr: "La plus grande économie d'Afrique du Nord avec un secteur IA et tech en croissance.",
    description: "Egypt is Africa's third-largest economy and a strategic bridge between Africa, the Middle East, and Europe through the Suez Canal — one of the world's most vital trade arteries. Cairo is emerging as a major tech and AI hub, with the Egyptian government investing heavily in its national AI strategy. The New Administrative Capital project represents one of the world's largest urban development initiatives. Egypt's diversified economy spans tourism, manufacturing, natural gas production, and a rapidly growing tech startup ecosystem. The country's 105 million population makes it Africa's and the Middle East's largest consumer market. Recent economic reforms, currency liberalization, and IMF-backed programs have improved the investment climate significantly.",
    description_fr: "L'Égypte est la troisième plus grande économie d'Afrique et un pont stratégique entre l'Afrique, le Moyen-Orient et l'Europe grâce au Canal de Suez — l'une des artères commerciales les plus vitales au monde. Le Caire émerge comme un hub majeur de tech et d'IA, le gouvernement égyptien investissant massivement dans sa stratégie nationale d'IA. Le projet de Nouvelle Capitale Administrative représente l'une des plus grandes initiatives de développement urbain au monde. L'économie diversifiée de l'Égypte couvre le tourisme, l'industrie manufacturière, la production de gaz naturel et un écosystème de startups tech en pleine croissance. La population de 105 millions de personnes en fait le plus grand marché de consommation d'Afrique et du Moyen-Orient. Les récentes réformes économiques, la libéralisation monétaire et les programmes soutenus par le FMI ont considérablement amélioré le climat d'investissement.",
    keySectors: ["Technology", "Tourism", "Manufacturing"], keySectors_fr: ["Technologie", "Tourisme", "Industrie"],
    opportunities: 1, events: 1, population: "105M+", gdp: "$475B+", capital: "Cairo", capital_fr: "Le Caire"
  },
  {
    code: "CM", name: "Cameroon", name_fr: "Cameroun",
    overview: "Central Africa's largest economy and key trade corridor for landlocked nations.",
    overview_fr: "La plus grande économie d'Afrique centrale et corridor commercial clé pour les nations enclavées.",
    description: "Cameroon is often called 'Africa in miniature' due to its geographic and cultural diversity, spanning from coastal rainforests to northern savannahs. As Central Africa's largest economy, Cameroon serves as a critical trade corridor for landlocked neighbors Chad and Central African Republic through the port of Douala. The country's economy is diversified across agriculture (cocoa, coffee, bananas), oil production, and a growing services sector. The government's National Development Strategy 2030 prioritizes infrastructure modernization, digital transformation, and industrialization. Cameroon's bilingual advantage (French and English) and central geographic position make it a natural hub for businesses seeking to operate across both francophone and anglophone African markets.",
    description_fr: "Le Cameroun est souvent appelé 'l'Afrique en miniature' en raison de sa diversité géographique et culturelle, allant des forêts tropicales côtières aux savanes du nord. En tant que plus grande économie d'Afrique centrale, le Cameroun sert de corridor commercial critique pour ses voisins enclavés, le Tchad et la République centrafricaine, à travers le port de Douala. L'économie du pays est diversifiée entre l'agriculture (cacao, café, bananes), la production pétrolière et un secteur des services en croissance. La Stratégie Nationale de Développement 2030 du gouvernement priorise la modernisation des infrastructures, la transformation numérique et l'industrialisation. L'avantage bilingue du Cameroun (français et anglais) et sa position géographique centrale en font un hub naturel pour les entreprises cherchant à opérer à travers les marchés africains francophones et anglophones.",
    keySectors: ["Infrastructure", "Energy", "Agriculture"], keySectors_fr: ["Infrastructure", "Énergie", "Agriculture"],
    opportunities: 1, events: 1, population: "28M+", gdp: "$45B+", capital: "Yaoundé", capital_fr: "Yaoundé"
  },
];

export const sectors = ["All", "Finance", "Energy", "Renewable Energy", "Technology", "Real Estate", "Agriculture", "Mining", "Infrastructure", "Artificial Intelligence"];
export const opportunityTypes = ["All", "Sovereign Bond", "Innovation Program", "Startup Initiative", "Investment Program", "Financial Program", "Business Event"];

// Sector translations
export const SECTOR_TRANSLATIONS: Record<string, string> = {
  "All": "Tous",
  "Finance": "Finance",
  "Energy": "Énergie",
  "Renewable Energy": "Énergie renouvelable",
  "Technology": "Technologie",
  "Real Estate": "Immobilier",
  "Agriculture": "Agriculture",
  "Mining": "Mines",
  "Infrastructure": "Infrastructure",
  "Artificial Intelligence": "Intelligence artificielle",
  "Finance & Investment": "Finance & Investissement",
  "Innovation & Tech": "Innovation & Tech",
  "Energy & Climate": "Énergie & Climat",
  "Startup": "Startup",
  "Digital Economy": "Économie numérique",
  "AI & Robotics": "IA & Robotique",
  "Venture Capital": "Capital-risque",
  "Mining & Resources": "Mines & Ressources",
};

// Opportunity type translations
export const TYPE_TRANSLATIONS: Record<string, string> = {
  "All": "Tous",
  "Sovereign Bond": "Obligation souveraine",
  "Innovation Program": "Programme d'innovation",
  "Startup Initiative": "Initiative startup",
  "Investment Program": "Programme d'investissement",
  "Financial Program": "Programme financier",
  "Business Event": "Événement d'affaires",
};

// Category translations for insights
export const CATEGORY_TRANSLATIONS: Record<string, string> = {
  "Investment": "Investissement",
  "Technology": "Technologie",
  "Finance": "Finance",
  "Energy": "Énergie",
  "Infrastructure": "Infrastructure",
  "Market Analysis": "Analyse de marché",
};
