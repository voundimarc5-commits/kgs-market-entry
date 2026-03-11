export interface Opportunity {
  id: string;
  title: string;
  country: string;
  sector: string;
  type: string;
  summary: string;
  deadline: string;
  featured?: boolean;
  investmentSize?: string;
  source?: string;
  overview?: string;
  howToParticipate?: string[];
  image?: string;
}

export interface AfricaEvent {
  id: string;
  name: string;
  city: string;
  country: string;
  date: string;
  sector: string;
  organizer: string;
  image?: string;
  badge?: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
  author?: string;
}

export interface CountryData {
  code: string;
  name: string;
  overview: string;
  keySectors: string[];
  opportunities: number;
  events: number;
}

// Image mapping by sector
export const SECTOR_IMAGES: Record<string, string> = {
  Finance: "financial-district",
  Energy: "solar-farm-morocco",
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
};

export const opportunities: Opportunity[] = [
  {
    id: "1",
    title: "Gabon Sovereign Infrastructure Bond",
    country: "Gabon",
    sector: "Finance",
    type: "Sovereign Bond",
    summary: "Government-backed infrastructure bond program for transport and energy development across Gabon.",
    deadline: "2026-06-30",
    featured: true,
    investmentSize: "$50M — $500M",
    source: "Ministry of Finance, Gabon",
    overview: "The Republic of Gabon has announced a new sovereign bond issuance dedicated to financing critical infrastructure projects. The program targets transport modernization, energy transition, and urban development in Libreville and Port-Gentil.",
    howToParticipate: [
      "Register as a qualified institutional investor",
      "Submit expression of interest through the Ministry of Finance portal",
      "Complete due diligence documentation",
      "Participate in the bond subscription window",
    ],
  },
  {
    id: "2",
    title: "Kenya Renewable Energy Innovation Program",
    country: "Kenya",
    sector: "Energy",
    type: "Innovation Program",
    summary: "National program supporting clean energy startups and renewable infrastructure investment in East Africa.",
    deadline: "2026-09-15",
    featured: true,
    investmentSize: "$5M — $50M",
    source: "Kenya Investment Authority",
    overview: "Kenya's Energy Innovation Program seeks to accelerate the adoption of clean energy technologies. The initiative provides funding, technical support, and market access for startups and established companies in solar, wind, and geothermal sectors.",
    howToParticipate: [
      "Apply through the Kenya Investment Authority portal",
      "Submit a project proposal and business plan",
      "Complete technical and financial assessment",
      "Attend selection committee review",
    ],
  },
  {
    id: "3",
    title: "Nigeria Fintech Startup Acceleration Program",
    country: "Nigeria",
    sector: "Technology",
    type: "Startup Initiative",
    summary: "Lagos-based fintech acceleration program connecting startups with institutional capital and Pan-African banking partners.",
    deadline: "2026-05-01",
    featured: true,
    investmentSize: "$500K — $5M",
    source: "Lagos State Innovation Hub",
    overview: "Nigeria's leading fintech acceleration program provides seed funding, mentorship, and access to banking partnerships for early-stage fintech companies operating across West Africa.",
    howToParticipate: [
      "Apply online with pitch deck and financial projections",
      "Complete the screening interview",
      "Join the 12-week acceleration cohort",
      "Present at Demo Day to investors",
    ],
  },
  {
    id: "4",
    title: "Morocco Green Hydrogen Investment Initiative",
    country: "Morocco",
    sector: "Energy",
    type: "Investment Program",
    summary: "Strategic green hydrogen production and export facility development in southern Morocco.",
    deadline: "2026-12-31",
    featured: true,
    investmentSize: "$100M+",
    source: "MASEN (Moroccan Agency for Sustainable Energy)",
    overview: "Morocco is positioning itself as a global leader in green hydrogen. This initiative supports the development of production facilities, export infrastructure, and R&D partnerships for clean hydrogen fuel.",
    howToParticipate: [
      "Submit an expression of interest to MASEN",
      "Provide technical capabilities and financial capacity proof",
      "Participate in partnership matchmaking sessions",
      "Finalize joint venture or concession agreements",
    ],
  },
  {
    id: "5",
    title: "Rwanda Smart City Development Program",
    country: "Rwanda",
    sector: "Real Estate",
    type: "Investment Program",
    summary: "Kigali Innovation City — a mixed-use technology and education hub attracting global investors.",
    deadline: "2026-08-15",
    investmentSize: "$10M — $100M",
    source: "Rwanda Development Board",
    overview: "Kigali Innovation City is a flagship smart city development integrating technology companies, universities, and innovation centers into a world-class urban ecosystem.",
    howToParticipate: [
      "Contact Rwanda Development Board for investment prospectus",
      "Submit investment proposal and partnership model",
      "Attend investor site visits and due diligence sessions",
      "Finalize development agreements",
    ],
  },
  {
    id: "6",
    title: "Côte d'Ivoire Agribusiness Development Fund",
    country: "Côte d'Ivoire",
    sector: "Agriculture",
    type: "Financial Program",
    summary: "National fund supporting cocoa value chain modernization and agricultural technology adoption.",
    deadline: "2026-07-01",
    investmentSize: "$2M — $20M",
    source: "CEPICI",
    overview: "This fund targets the modernization of Côte d'Ivoire's agricultural sector, with a focus on cocoa processing, sustainable farming practices, and agritech solutions.",
    howToParticipate: [
      "Register with CEPICI investment portal",
      "Submit project proposal aligned with national agri-strategy",
      "Complete environmental and social impact assessment",
      "Participate in fund allocation rounds",
    ],
  },
  {
    id: "7",
    title: "South Africa Mining Tech Investment Forum",
    country: "South Africa",
    sector: "Mining",
    type: "Business Event",
    summary: "Annual gathering of mining technology innovators and institutional investors in Johannesburg.",
    deadline: "2026-04-15",
    investmentSize: "$1M — $50M",
    source: "Mining Indaba Group",
    overview: "South Africa's premier mining technology event connects investors with innovative mining solutions, from AI-driven exploration to sustainable extraction technologies.",
    howToParticipate: [
      "Register for the annual Mining Tech Forum",
      "Submit technology showcase applications",
      "Schedule one-on-one investor meetings",
      "Participate in deal-making roundtables",
    ],
  },
  {
    id: "8",
    title: "Senegal Digital Economy Innovation Program",
    country: "Senegal",
    sector: "Technology",
    type: "Innovation Program",
    summary: "Government-led program to position Dakar as a West African technology and digital services hub.",
    deadline: "2026-10-01",
    investmentSize: "$1M — $15M",
    source: "Senegal Ministry of Digital Economy",
    overview: "Senegal's digital economy strategy aims to create 35,000 tech jobs and attract $500M in digital infrastructure investment by 2028.",
    howToParticipate: [
      "Apply through the Ministry of Digital Economy platform",
      "Submit digital infrastructure or services proposal",
      "Complete technical evaluation process",
      "Sign partnership agreements with government agencies",
    ],
  },
  {
    id: "9",
    title: "Ghana Infrastructure Investment Program",
    country: "Ghana",
    sector: "Infrastructure",
    type: "Investment Program",
    summary: "Multi-billion dollar program for roads, ports, and railway modernization across Ghana.",
    deadline: "2026-11-30",
    featured: true,
    investmentSize: "$20M — $200M",
    source: "Ghana Investment Promotion Centre",
    overview: "Ghana's Infrastructure Investment Program targets critical transport corridors, port expansion, and railway connectivity to boost regional trade and economic growth.",
    howToParticipate: [
      "Register with Ghana Investment Promotion Centre",
      "Submit infrastructure project proposals",
      "Participate in public-private partnership tenders",
      "Complete feasibility and environmental assessments",
    ],
  },
  {
    id: "10",
    title: "Egypt AI Innovation Challenge",
    country: "Egypt",
    sector: "Artificial Intelligence",
    type: "Innovation Program",
    summary: "National AI challenge supporting startups building intelligent solutions for healthcare, agriculture, and smart cities.",
    deadline: "2026-09-30",
    investmentSize: "$500K — $10M",
    source: "Egypt National AI Strategy Office",
    overview: "Egypt's AI Innovation Challenge seeks to accelerate artificial intelligence adoption across key economic sectors, with prize funding, incubation support, and government procurement pathways.",
    howToParticipate: [
      "Submit AI solution proposal and prototype",
      "Complete technical evaluation and demo rounds",
      "Join the 6-month AI incubation program",
      "Present at the National AI Summit",
    ],
  },
];

export const events: AfricaEvent[] = [
  {
    id: "1",
    name: "Africa Investment Forum",
    city: "Abidjan",
    country: "Côte d'Ivoire",
    date: "2026-06-12",
    sector: "Finance & Investment",
    organizer: "African Development Bank",
    badge: "INVESTMENT",
  },
  {
    id: "2",
    name: "Lagos Fintech Summit",
    city: "Lagos",
    country: "Nigeria",
    date: "2026-05-20",
    sector: "Technology",
    organizer: "Fintech Association of Nigeria",
    badge: "TECH",
  },
  {
    id: "3",
    name: "Kigali Innovation Week",
    city: "Kigali",
    country: "Rwanda",
    date: "2026-07-08",
    sector: "Innovation & Tech",
    organizer: "Rwanda ICT Chamber",
    badge: "STARTUP",
  },
  {
    id: "4",
    name: "Nairobi Startup Festival",
    city: "Nairobi",
    country: "Kenya",
    date: "2026-09-03",
    sector: "Startup",
    organizer: "Kenya Startup Association",
    badge: "STARTUP",
  },
  {
    id: "5",
    name: "Morocco Renewable Energy Forum",
    city: "Casablanca",
    country: "Morocco",
    date: "2026-04-22",
    sector: "Energy & Climate",
    organizer: "MASEN & Morocco Trade",
    badge: "ENERGY",
  },
  {
    id: "6",
    name: "Cape Town Venture Capital Summit",
    city: "Cape Town",
    country: "South Africa",
    date: "2026-08-18",
    sector: "Venture Capital",
    organizer: "SA Venture Capital Association",
    badge: "INVESTMENT",
  },
  {
    id: "7",
    name: "Dakar Digital Economy Conference",
    city: "Dakar",
    country: "Senegal",
    date: "2026-10-14",
    sector: "Digital Economy",
    organizer: "Senegal Ministry of Digital Economy",
    badge: "TECH",
  },
  {
    id: "8",
    name: "Accra Tech and Investment Summit",
    city: "Accra",
    country: "Ghana",
    date: "2026-11-05",
    sector: "Technology",
    organizer: "Ghana Tech Foundation",
    badge: "TECH",
  },
  {
    id: "9",
    name: "Cairo AI and Robotics Expo",
    city: "Cairo",
    country: "Egypt",
    date: "2026-09-20",
    sector: "AI & Robotics",
    organizer: "Egypt National AI Office",
    badge: "TECH",
  },
  {
    id: "10",
    name: "Johannesburg Mining Innovation Forum",
    city: "Johannesburg",
    country: "South Africa",
    date: "2026-08-25",
    sector: "Mining & Resources",
    organizer: "Mining Indaba Group",
    badge: "INVESTMENT",
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
    summary: "An analysis of the top investment trends driving capital flows into African markets, from fintech to green energy. Institutional investors are increasingly diversifying portfolios with African sovereign bonds and tech-driven infrastructure.",
    category: "Investment",
    date: "2026-03-01",
    readTime: "6 min",
    image: "financial-district",
    author: "KGS Research",
  },
  {
    id: "2",
    title: "Emerging Tech Ecosystems Across the Continent",
    summary: "How Lagos, Nairobi, Kigali, and Cape Town are building competitive tech ecosystems attracting global talent. A deep dive into the infrastructure, policies, and venture capital fueling Africa's digital transformation.",
    category: "Technology",
    date: "2026-02-18",
    readTime: "5 min",
    image: "nairobi-tech-hub",
    author: "KGS Intelligence",
  },
  {
    id: "3",
    title: "Where Capital is Flowing in Africa",
    summary: "Mapping institutional and venture capital movements across key African markets and sectors. From fintech to agritech, discover which verticals are attracting the most funding in 2026.",
    category: "Finance",
    date: "2026-02-05",
    readTime: "7 min",
    image: "lagos-skyline",
    author: "KGS Market Desk",
  },
  {
    id: "4",
    title: "The Rise of African Sovereign Wealth Funds",
    summary: "How African nations are leveraging sovereign wealth funds to attract foreign direct investment and stabilize economies against commodity price volatility.",
    category: "Finance",
    date: "2026-01-20",
    readTime: "8 min",
    image: "financial-district",
    author: "KGS Research",
  },
  {
    id: "5",
    title: "Green Hydrogen: Africa's Next Energy Frontier",
    summary: "Morocco, Namibia and Egypt lead Africa's green hydrogen race. Explore how the continent's renewable energy abundance positions it as a global clean fuel exporter.",
    category: "Energy",
    date: "2026-01-10",
    readTime: "6 min",
    image: "solar-farm-morocco",
    author: "KGS Energy Desk",
  },
  {
    id: "6",
    title: "Port Infrastructure Modernization in West Africa",
    summary: "Billions in investment are transforming West African ports into global logistics hubs. From Abidjan to Lagos, a look at the projects reshaping continental trade corridors.",
    category: "Infrastructure",
    date: "2025-12-15",
    readTime: "5 min",
    image: "port-infrastructure",
    author: "KGS Infrastructure",
  },
  {
    id: "7",
    title: "AI Adoption Across African Economies",
    summary: "Egypt, Kenya and South Africa lead artificial intelligence adoption in healthcare, agriculture and fintech. An analysis of policy frameworks and startup ecosystems driving AI growth.",
    category: "Technology",
    date: "2025-12-01",
    readTime: "7 min",
    image: "smart-city",
    author: "KGS Intelligence",
  },
  {
    id: "8",
    title: "African Mining Sector: Technology-Driven Transformation",
    summary: "From autonomous drilling in South Africa to AI-powered exploration in the DRC, mining technology is revolutionizing resource extraction across the continent.",
    category: "Market Analysis",
    date: "2025-11-18",
    readTime: "6 min",
    image: "mining-tech",
    author: "KGS Market Desk",
  },
];

export const countries: CountryData[] = [
  { code: "NG", name: "Nigeria", overview: "Africa's largest economy with a thriving fintech ecosystem.", keySectors: ["Technology", "Oil & Gas", "Agriculture"], opportunities: 3, events: 1 },
  { code: "KE", name: "Kenya", overview: "East Africa's innovation hub with strong mobile and fintech sectors.", keySectors: ["Technology", "Energy", "Agriculture"], opportunities: 2, events: 1 },
  { code: "ZA", name: "South Africa", overview: "Continent's most industrialized economy with deep capital markets.", keySectors: ["Mining", "Finance", "Technology"], opportunities: 1, events: 2 },
  { code: "GA", name: "Gabon", overview: "Resource-rich Central African nation focused on diversification.", keySectors: ["Oil & Gas", "Mining", "Infrastructure"], opportunities: 1, events: 0 },
  { code: "MA", name: "Morocco", overview: "North Africa's gateway with strong automotive and renewable energy sectors.", keySectors: ["Energy", "Manufacturing", "Real Estate"], opportunities: 1, events: 1 },
  { code: "RW", name: "Rwanda", overview: "Africa's most business-friendly nation with ambitious tech vision.", keySectors: ["Technology", "Tourism", "Real Estate"], opportunities: 1, events: 1 },
  { code: "CI", name: "Côte d'Ivoire", overview: "West Africa's francophone economic hub with strong agricultural sector.", keySectors: ["Agriculture", "Finance", "Infrastructure"], opportunities: 1, events: 1 },
  { code: "SN", name: "Senegal", overview: "Emerging West African economy with oil & gas discoveries.", keySectors: ["Energy", "Technology", "Agriculture"], opportunities: 1, events: 1 },
  { code: "GH", name: "Ghana", overview: "Stable democracy with growing tech scene and natural resources.", keySectors: ["Mining", "Technology", "Infrastructure"], opportunities: 1, events: 1 },
  { code: "ET", name: "Ethiopia", overview: "Africa's fastest-growing economy with massive infrastructure development.", keySectors: ["Manufacturing", "Agriculture", "Infrastructure"], opportunities: 0, events: 0 },
  { code: "EG", name: "Egypt", overview: "North Africa's largest economy with growing AI and tech sector.", keySectors: ["Technology", "Tourism", "Manufacturing"], opportunities: 1, events: 1 },
];

export const sectors = ["All", "Finance", "Energy", "Technology", "Real Estate", "Agriculture", "Mining", "Infrastructure", "Artificial Intelligence"];
export const opportunityTypes = ["All", "Sovereign Bond", "Innovation Program", "Startup Initiative", "Investment Program", "Financial Program", "Business Event"];
