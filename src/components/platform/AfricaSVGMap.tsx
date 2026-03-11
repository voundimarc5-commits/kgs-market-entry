import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { countries } from "@/data/mockData";

interface CountryPath {
  code: string;
  name: string;
  d: string;
}

const AFRICA_PATHS: CountryPath[] = [
  { code: "MA", name: "Morocco", d: "M200,80 L230,70 L260,75 L270,90 L265,110 L240,115 L220,110 L200,100 Z" },
  { code: "DZ", name: "Algeria", d: "M260,75 L310,65 L350,80 L360,120 L340,160 L300,170 L270,150 L265,110 Z" },
  { code: "TN", name: "Tunisia", d: "M310,65 L325,60 L330,75 L320,85 L310,80 Z" },
  { code: "LY", name: "Libya", d: "M330,75 L380,70 L410,90 L410,140 L380,170 L360,170 L360,120 L350,80 Z" },
  { code: "EG", name: "Egypt", d: "M410,90 L450,85 L460,100 L460,140 L440,160 L420,160 L410,140 Z" },
  { code: "MR", name: "Mauritania", d: "M170,140 L200,130 L240,135 L250,170 L240,200 L200,200 L180,180 Z" },
  { code: "ML", name: "Mali", d: "M200,200 L240,200 L270,190 L290,200 L280,240 L250,260 L220,250 L200,230 Z" },
  { code: "NE", name: "Niger", d: "M290,200 L340,180 L370,190 L370,220 L340,240 L310,240 L280,240 Z" },
  { code: "TD", name: "Chad", d: "M370,190 L400,180 L420,200 L420,250 L400,270 L370,260 L370,220 Z" },
  { code: "SD", name: "Sudan", d: "M420,160 L460,160 L470,200 L460,240 L440,260 L420,250 L420,200 Z" },
  { code: "SN", name: "Senegal", d: "M155,220 L180,215 L190,225 L180,235 L160,235 Z" },
  { code: "GN", name: "Guinea", d: "M160,240 L185,235 L200,245 L190,260 L170,255 Z" },
  { code: "CI", name: "Côte d'Ivoire", d: "M200,260 L225,255 L235,270 L225,290 L205,285 L195,275 Z" },
  { code: "GH", name: "Ghana", d: "M235,270 L250,265 L260,280 L255,300 L240,300 L225,290 Z" },
  { code: "NG", name: "Nigeria", d: "M280,260 L310,250 L340,260 L350,280 L340,310 L310,315 L280,300 L270,280 Z" },
  { code: "CM", name: "Cameroon", d: "M340,280 L370,270 L380,300 L370,320 L350,315 L340,310 Z" },
  { code: "GA", name: "Gabon", d: "M340,330 L365,325 L370,350 L350,365 L335,350 Z" },
  { code: "CG", name: "Congo", d: "M370,320 L395,310 L400,340 L385,360 L370,350 Z" },
  { code: "CD", name: "DR Congo", d: "M380,340 L420,330 L440,350 L450,380 L430,410 L400,400 L380,380 L375,360 Z" },
  { code: "ET", name: "Ethiopia", d: "M450,240 L490,230 L510,250 L500,280 L470,290 L450,275 Z" },
  { code: "SO", name: "Somalia", d: "M510,250 L535,240 L530,280 L510,310 L490,300 L500,280 Z" },
  { code: "KE", name: "Kenya", d: "M460,290 L490,300 L500,330 L480,350 L460,340 L455,310 Z" },
  { code: "UG", name: "Uganda", d: "M440,300 L460,290 L455,320 L440,330 L430,315 Z" },
  { code: "RW", name: "Rwanda", d: "M430,330 L445,325 L445,340 L430,345 Z" },
  { code: "TZ", name: "Tanzania", d: "M445,340 L480,350 L485,390 L465,410 L440,400 L435,370 Z" },
  { code: "AO", name: "Angola", d: "M330,370 L380,380 L390,420 L370,450 L340,445 L320,420 Z" },
  { code: "ZM", name: "Zambia", d: "M390,400 L430,410 L440,440 L420,460 L390,450 L380,430 Z" },
  { code: "MW", name: "Malawi", d: "M445,400 L455,395 L460,420 L450,440 L440,430 Z" },
  { code: "MZ", name: "Mozambique", d: "M460,410 L480,400 L490,440 L480,480 L460,500 L450,470 L455,440 Z" },
  { code: "ZW", name: "Zimbabwe", d: "M420,450 L445,440 L455,460 L440,480 L420,475 Z" },
  { code: "BW", name: "Botswana", d: "M390,460 L420,460 L425,490 L410,510 L385,500 Z" },
  { code: "NA", name: "Namibia", d: "M340,460 L380,450 L385,500 L370,530 L340,540 L330,500 Z" },
  { code: "ZA", name: "South Africa", d: "M370,520 L410,510 L440,520 L460,550 L440,580 L400,590 L370,570 L360,545 Z" },
  { code: "MG", name: "Madagascar", d: "M500,430 L520,420 L530,460 L520,500 L505,490 L495,460 Z" },
  { code: "ER", name: "Eritrea", d: "M460,220 L485,210 L490,230 L475,235 Z" },
  { code: "DJ", name: "Djibouti", d: "M500,240 L510,235 L510,248 L502,248 Z" },
];

interface AfricaSVGMapProps {
  compact?: boolean;
}

const AfricaSVGMap = ({ compact = false }: AfricaSVGMapProps) => {
  const navigate = useNavigate();
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const trackedCodes = new Set(countries.map((c) => c.code));

  const getCountryData = (code: string) => countries.find((c) => c.code === code);

  const handleClick = (code: string) => {
    if (trackedCodes.has(code)) {
      navigate(`/countries/${code}`);
    }
  };

  const getFill = (code: string) => {
    const isTracked = trackedCodes.has(code);
    const isHovered = hoveredCountry === code;
    if (isHovered && isTracked) return "hsl(43 65% 55%)";
    if (isTracked) return "hsl(155 40% 25%)";
    return "hsl(0 0% 14%)";
  };

  const getStroke = (code: string) => {
    const isTracked = trackedCodes.has(code);
    if (hoveredCountry === code && isTracked) return "hsl(43 65% 55%)";
    return "hsl(0 0% 22%)";
  };

  return (
    <div className={`relative ${compact ? "max-w-md mx-auto" : "max-w-2xl mx-auto"}`}>
      <svg
        viewBox="130 50 430 560"
        className="w-full h-auto"
        style={{ filter: "drop-shadow(0 0 30px hsl(43 65% 55% / 0.08))" }}
      >
        {/* Subtle grid background */}
        <defs>
          <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(43 65% 55%)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="130" y="50" width="430" height="560" fill="url(#mapGlow)" />

        {AFRICA_PATHS.map((cp) => {
          const isTracked = trackedCodes.has(cp.code);
          const data = getCountryData(cp.code);
          return (
            <g key={cp.code}>
              <path
                d={cp.d}
                fill={getFill(cp.code)}
                stroke={getStroke(cp.code)}
                strokeWidth={hoveredCountry === cp.code ? 1.8 : 0.8}
                className={`transition-all duration-300 ${isTracked ? "cursor-pointer" : "cursor-default"}`}
                onMouseEnter={() => setHoveredCountry(cp.code)}
                onMouseLeave={() => setHoveredCountry(null)}
                onClick={() => handleClick(cp.code)}
                style={{
                  filter: hoveredCountry === cp.code && isTracked ? "drop-shadow(0 0 8px hsl(43 65% 55% / 0.6))" : "none",
                }}
              />
              {/* Opportunity dot - green */}
              {isTracked && data && data.opportunities > 0 && (
                <>
                  <circle
                    cx={getCenter(cp.d).x}
                    cy={getCenter(cp.d).y}
                    r={4 + data.opportunities}
                    fill="hsl(155 40% 40%)"
                    opacity={hoveredCountry === cp.code ? 1 : 0.6}
                    className="pointer-events-none"
                  >
                    <animate attributeName="r" values={`${3 + data.opportunities};${5 + data.opportunities};${3 + data.opportunities}`} dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle
                    cx={getCenter(cp.d).x}
                    cy={getCenter(cp.d).y}
                    r={2}
                    fill="hsl(155 50% 50%)"
                    className="pointer-events-none"
                  />
                </>
              )}
              {/* Event dot - yellow/gold */}
              {isTracked && data && data.events > 0 && (
                <circle
                  cx={getCenter(cp.d).x + 10}
                  cy={getCenter(cp.d).y - 5}
                  r={3}
                  fill="hsl(43 65% 55%)"
                  opacity={hoveredCountry === cp.code ? 1 : 0.6}
                  className="pointer-events-none"
                >
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
                </circle>
              )}
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full" style={{ background: "hsl(155 50% 50%)" }} /> Active opportunities
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full" style={{ background: "hsl(43 65% 55%)" }} /> Upcoming events
        </div>
      </div>

      {/* Tooltip */}
      {hoveredCountry && trackedCodes.has(hoveredCountry) && (
        <div className="absolute top-4 right-4 bg-card/95 backdrop-blur-sm border border-border rounded-lg px-4 py-3 shadow-xl pointer-events-none">
          <p className="text-sm font-bold text-foreground">{countries.find(c => c.code === hoveredCountry)?.name}</p>
          <p className="text-xs text-primary mt-0.5">
            {countries.find(c => c.code === hoveredCountry)?.opportunities} opportunities
          </p>
          <p className="text-xs text-muted-foreground">
            {countries.find(c => c.code === hoveredCountry)?.events} events
          </p>
          <p className="text-[10px] text-primary/60 mt-1.5 font-medium">Click to explore →</p>
        </div>
      )}
    </div>
  );
};

function getCenter(d: string): { x: number; y: number } {
  const nums = d.match(/[\d.]+/g)?.map(Number) || [];
  let sumX = 0, sumY = 0, count = 0;
  for (let i = 0; i < nums.length - 1; i += 2) {
    sumX += nums[i];
    sumY += nums[i + 1];
    count++;
  }
  return { x: sumX / (count || 1), y: sumY / (count || 1) };
}

export default AfricaSVGMap;
