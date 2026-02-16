const KGSCoin = ({ size = 40, className = "" }: { size?: number; className?: string }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer coin edge with ridges */}
      <defs>
        <linearGradient id="coinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(43 52% 70%)" />
          <stop offset="30%" stopColor="hsl(43 52% 54%)" />
          <stop offset="50%" stopColor="hsl(43 52% 75%)" />
          <stop offset="70%" stopColor="hsl(43 52% 50%)" />
          <stop offset="100%" stopColor="hsl(43 52% 65%)" />
        </linearGradient>
        <linearGradient id="coinFace" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="hsl(43 52% 62%)" />
          <stop offset="40%" stopColor="hsl(43 52% 50%)" />
          <stop offset="60%" stopColor="hsl(43 52% 58%)" />
          <stop offset="100%" stopColor="hsl(43 52% 45%)" />
        </linearGradient>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(43 52% 80%)" />
          <stop offset="50%" stopColor="hsl(43 52% 55%)" />
          <stop offset="100%" stopColor="hsl(43 52% 75%)" />
        </linearGradient>
        <filter id="coinShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="hsl(43 52% 54%)" floodOpacity="0.3" />
        </filter>
        <filter id="innerShadow">
          <feOffset dx="0" dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite operator="out" in="SourceGraphic" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feBlend in="SourceGraphic" />
        </filter>
      </defs>

      {/* Outer ring with coin-edge ridges */}
      <circle cx="100" cy="100" r="96" fill="url(#coinGradient)" filter="url(#coinShadow)" />
      
      {/* Coin ridges (serrated edge) */}
      {Array.from({ length: 72 }).map((_, i) => {
        const angle = (i * 5 * Math.PI) / 180;
        const x1 = 100 + 96 * Math.cos(angle);
        const y1 = 100 + 96 * Math.sin(angle);
        const x2 = 100 + 90 * Math.cos(angle);
        const y2 = 100 + 90 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="hsl(43 52% 40%)"
            strokeWidth="0.8"
            opacity="0.5"
          />
        );
      })}

      {/* Inner coin face */}
      <circle cx="100" cy="100" r="88" fill="url(#coinFace)" />
      
      {/* Decorative inner ring */}
      <circle cx="100" cy="100" r="82" fill="none" stroke="hsl(43 52% 68%)" strokeWidth="1" opacity="0.6" />
      <circle cx="100" cy="100" r="78" fill="none" stroke="hsl(43 52% 40%)" strokeWidth="0.5" opacity="0.4" />
      
      {/* Decorative dots around inner ring */}
      {Array.from({ length: 36 }).map((_, i) => {
        const angle = (i * 10 * Math.PI) / 180;
        const x = 100 + 80 * Math.cos(angle);
        const y = 100 + 80 * Math.sin(angle);
        return (
          <circle
            key={`dot-${i}`}
            cx={x}
            cy={y}
            r="1"
            fill="hsl(43 52% 70%)"
            opacity="0.5"
          />
        );
      })}

      {/* Star/cross decorative elements at cardinal points */}
      {[0, 90, 180, 270].map((deg) => {
        const angle = (deg * Math.PI) / 180;
        const x = 100 + 74 * Math.cos(angle);
        const y = 100 + 74 * Math.sin(angle);
        return (
          <g key={`star-${deg}`}>
            <circle cx={x} cy={y} r="2.5" fill="hsl(43 52% 72%)" opacity="0.7" />
            <circle cx={x} cy={y} r="1" fill="hsl(43 52% 85%)" />
          </g>
        );
      })}

      {/* KGS text - engraved style */}
      <text
        x="100"
        y="108"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontSize="48"
        fontWeight="700"
        fill="url(#textGradient)"
        letterSpacing="8"
        filter="url(#innerShadow)"
      >
        KGS
      </text>

      {/* Subtle engraved lines above and below text */}
      <line x1="55" y1="75" x2="145" y2="75" stroke="hsl(43 52% 65%)" strokeWidth="1" opacity="0.5" />
      <line x1="60" y1="80" x2="140" y2="80" stroke="hsl(43 52% 60%)" strokeWidth="0.5" opacity="0.3" />
      <line x1="55" y1="130" x2="145" y2="130" stroke="hsl(43 52% 65%)" strokeWidth="1" opacity="0.5" />
      <line x1="60" y1="125" x2="140" y2="125" stroke="hsl(43 52% 60%)" strokeWidth="0.5" opacity="0.3" />

      {/* FLOW text below */}
      <text
        x="100"
        y="148"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontSize="14"
        fontWeight="400"
        fill="hsl(43 52% 65%)"
        letterSpacing="6"
      >
        FLOW
      </text>

      {/* Coin shine/highlight */}
      <ellipse cx="75" cy="65" rx="30" ry="20" fill="hsl(43 52% 90%)" opacity="0.08" transform="rotate(-30 75 65)" />
    </svg>
  );
};

export default KGSCoin;
