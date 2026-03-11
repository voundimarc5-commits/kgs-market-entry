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
}

export interface AfricaEvent {
  id: string;
  name: string;
  city: string;
  country: string;
  date: string;
  sector: string;
  organizer: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  readTime: string;
}

export interface CountryData {
  code: string;
  name: string;
  overview: string;
  keySectors: string[];
  opportunities: number;
  events: number;
}

export const opportunities: Opportunity[] = [
  {
    id: "1",
    title: "Gabon Sovereign Bond — Infrastructure Program",
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
      "Participate in the bond subscription window"
    ]
  },
  {
    id: "2",
    title: "Kenya Energy Innovation Program",
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
      "Attend selection committee review"
    ]
  },
  {
    id: "3",
    title: "Nigeria Fintech Acceleration Program",
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
      "Present at Demo Day to investors"
    ]
  },
  {
    id: "4",
    title: "Morocco Green Hydrogen Initiative",
    country: "Morocco",
    sector: "Energy",
    type: "Investment Program",
    summary: "Strategic green hydrogen production and export facility development in southern Morocco.",
    deadline: "2026-12-31",
    investmentSize: "$100M+",
    source: "MASEN (Moroccan Agency for Sustainable Energy)",
  },
  {
    id: "5",
    title: "Rwanda Smart City Development",
    country: "Rwanda",
    sector: "Real Estate",
    type: "Investment Program",
    summary: "Kigali Innovation City — a mixed-use technology and education hub attracting global investors.",
    deadline: "2026-08-15",
    investmentSize: "$10M — $100M",
    source: "Rwanda Development Board",
  },
  {
    id: "6",
    title: "Côte d'Ivoire Agribusiness Fund",
    country: "Côte d'Ivoire",
    sector: "Agriculture",
    type: "Financial Program",
    summary: "National fund supporting cocoa value chain modernization and agricultural technology adoption.",
    deadline: "2026-07-01",
    investmentSize: "$2M — $20M",
    source: "CEPICI",
  },
  {
    id: "7",
    title: "South Africa Mining Tech Conference",
    country: "South Africa",
    sector: "Mining",
    type: "Business Event",
    summary: "Annual gathering of mining technology innovators and institutional investors in Johannesburg.",
    deadline: "2026-04-15",
  },
  {
    id: "8",
    title: "Senegal Digital Economy Strategy",
    country: "Senegal",
    sector: "Technology",
    type: "Innovation Program",
    summary: "Government-led program to position Dakar as a West African technology and digital services hub.",
    deadline: "2026-10-01",
    investmentSize: "$1M — $15M",
    source: "Senegal Ministry of Digital Economy",
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
  },
  {
    id: "2",
    name: "Lagos Fintech Summit",
    city: "Lagos",
    country: "Nigeria",
    date: "2026-05-20",
    sector: "Technology",
    organizer: "Fintech Association of Nigeria",
  },
  {
    id: "3",
    name: "Kigali Innovation Week",
    city: "Kigali",
    country: "Rwanda",
    date: "2026-07-08",
    sector: "Innovation & Tech",
    organizer: "Rwanda ICT Chamber",
  },
  {
    id: "4",
    name: "Nairobi Climate Finance Forum",
    city: "Nairobi",
    country: "Kenya",
    date: "2026-09-03",
    sector: "Energy & Climate",
    organizer: "UNEP",
  },
  {
    id: "5",
    name: "Casablanca Real Estate Expo",
    city: "Casablanca",
    country: "Morocco",
    date: "2026-04-22",
    sector: "Real Estate",
    organizer: "Morocco Trade & Investment",
  },
  {
    id: "6",
    name: "Johannesburg Mining Indaba",
    city: "Johannesburg",
    country: "South Africa",
    date: "2026-08-18",
    sector: "Mining & Resources",
    organizer: "Mining Indaba Group",
  },
];

export const insights: InsightArticle[] = [
  {
    id: "1",
    title: "Investment Trends Reshaping Africa in 2026",
    summary: "An analysis of the top investment trends driving capital flows into African markets, from fintech to green energy.",
    category: "Investment",
    date: "2026-03-01",
    readTime: "6 min",
  },
  {
    id: "2",
    title: "Emerging Tech Ecosystems Across the Continent",
    summary: "How Lagos, Nairobi, Kigali, and Cape Town are building competitive tech ecosystems attracting global talent.",
    category: "Technology",
    date: "2026-02-18",
    readTime: "5 min",
  },
  {
    id: "3",
    title: "Where Capital is Flowing in Africa",
    summary: "Mapping institutional and venture capital movements across key African markets and sectors.",
    category: "Finance",
    date: "2026-02-05",
    readTime: "7 min",
  },
  {
    id: "4",
    title: "The Rise of African Sovereign Wealth Funds",
    summary: "How African nations are leveraging sovereign wealth funds to attract foreign direct investment.",
    category: "Finance",
    date: "2026-01-20",
    readTime: "8 min",
  },
];

export const countries: CountryData[] = [
  { code: "NG", name: "Nigeria", overview: "Africa's largest economy with a thriving fintech ecosystem.", keySectors: ["Technology", "Oil & Gas", "Agriculture"], opportunities: 3, events: 1 },
  { code: "KE", name: "Kenya", overview: "East Africa's innovation hub with strong mobile and fintech sectors.", keySectors: ["Technology", "Energy", "Agriculture"], opportunities: 2, events: 1 },
  { code: "ZA", name: "South Africa", overview: "Continent's most industrialized economy with deep capital markets.", keySectors: ["Mining", "Finance", "Technology"], opportunities: 1, events: 1 },
  { code: "GA", name: "Gabon", overview: "Resource-rich Central African nation focused on diversification.", keySectors: ["Oil & Gas", "Mining", "Infrastructure"], opportunities: 1, events: 0 },
  { code: "MA", name: "Morocco", overview: "North Africa's gateway with strong automotive and renewable energy sectors.", keySectors: ["Energy", "Manufacturing", "Real Estate"], opportunities: 1, events: 1 },
  { code: "RW", name: "Rwanda", overview: "Africa's most business-friendly nation with ambitious tech vision.", keySectors: ["Technology", "Tourism", "Real Estate"], opportunities: 1, events: 1 },
  { code: "CI", name: "Côte d'Ivoire", overview: "West Africa's francophone economic hub with strong agricultural sector.", keySectors: ["Agriculture", "Finance", "Infrastructure"], opportunities: 1, events: 1 },
  { code: "SN", name: "Senegal", overview: "Emerging West African economy with oil & gas discoveries.", keySectors: ["Energy", "Technology", "Agriculture"], opportunities: 1, events: 0 },
  { code: "GH", name: "Ghana", overview: "Stable democracy with growing tech scene and natural resources.", keySectors: ["Mining", "Technology", "Agriculture"], opportunities: 0, events: 0 },
  { code: "ET", name: "Ethiopia", overview: "Africa's fastest-growing economy with massive infrastructure development.", keySectors: ["Manufacturing", "Agriculture", "Infrastructure"], opportunities: 0, events: 0 },
];

export const sectors = ["All", "Finance", "Energy", "Technology", "Real Estate", "Agriculture", "Mining"];
export const opportunityTypes = ["All", "Sovereign Bond", "Innovation Program", "Startup Initiative", "Investment Program", "Financial Program", "Business Event"];
