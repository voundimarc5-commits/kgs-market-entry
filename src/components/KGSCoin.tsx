const KGSCoin = ({ size = 40, className = "" }: { size?: number; className?: string }) => {
  const id = `coin-${Math.random().toString(36).slice(2, 8)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* 3D edge gradient - dark to light for depth */}
        <radialGradient id={`${id}-edge`} cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="hsl(43 60% 65%)" />
          <stop offset="50%" stopColor="hsl(43 55% 50%)" />
          <stop offset="100%" stopColor="hsl(43 40% 28%)" />
        </radialGradient>

        {/* Main face 3D gradient - top-left highlight */}
        <radialGradient id={`${id}-face`} cx="38%" cy="32%" r="65%">
          <stop offset="0%" stopColor="hsl(43 60% 72%)" />
          <stop offset="25%" stopColor="hsl(43 58% 60%)" />
          <stop offset="55%" stopColor="hsl(43 52% 50%)" />
          <stop offset="80%" stopColor="hsl(43 48% 40%)" />
          <stop offset="100%" stopColor="hsl(43 40% 30%)" />
        </radialGradient>

        {/* Inner ring bevel */}
        <radialGradient id={`${id}-bevel`} cx="42%" cy="35%" r="55%">
          <stop offset="0%" stopColor="hsl(43 55% 62%)" />
          <stop offset="50%" stopColor="hsl(43 50% 48%)" />
          <stop offset="100%" stopColor="hsl(43 42% 32%)" />
        </radialGradient>

        {/* Text metallic fill - higher contrast */}
        <linearGradient id={`${id}-text`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(43 70% 90%)" />
          <stop offset="30%" stopColor="hsl(43 65% 78%)" />
          <stop offset="50%" stopColor="hsl(43 60% 65%)" />
          <stop offset="70%" stopColor="hsl(43 65% 75%)" />
          <stop offset="100%" stopColor="hsl(43 70% 88%)" />
        </linearGradient>

        {/* Emboss / raised text effect */}
        <filter id={`${id}-emboss`}>
          <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
          <feOffset in="blur" dx="-1" dy="-1" result="offsetLight" />
          <feOffset in="blur" dx="1" dy="1" result="offsetDark" />
          <feFlood floodColor="hsl(43 60% 85%)" floodOpacity="0.6" result="lightColor" />
          <feFlood floodColor="hsl(43 40% 20%)" floodOpacity="0.7" result="darkColor" />
          <feComposite in="lightColor" in2="offsetLight" operator="in" result="lightShadow" />
          <feComposite in="darkColor" in2="offsetDark" operator="in" result="darkShadow" />
          <feMerge>
            <feMergeNode in="lightShadow" />
            <feMergeNode in="darkShadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Drop shadow for the whole coin */}
        <filter id={`${id}-shadow`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="3" dy="5" stdDeviation="6" floodColor="hsl(0 0% 0%)" floodOpacity="0.5" />
        </filter>

        {/* Specular highlight */}
        <radialGradient id={`${id}-shine`} cx="35%" cy="28%" r="40%">
          <stop offset="0%" stopColor="hsl(43 80% 95%)" stopOpacity="0.35" />
          <stop offset="50%" stopColor="hsl(43 60% 80%)" stopOpacity="0.1" />
          <stop offset="100%" stopColor="hsl(43 60% 70%)" stopOpacity="0" />
        </radialGradient>

        {/* Rim light gradient */}
        <linearGradient id={`${id}-rim`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(43 60% 75%)" stopOpacity="0.8" />
          <stop offset="50%" stopColor="hsl(43 50% 45%)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(43 40% 25%)" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Main coin body with 3D shadow */}
      <g filter={`url(#${id}-shadow)`}>
        {/* Outer edge / rim - creates thickness illusion */}
        <circle cx="100" cy="102" r="94" fill="hsl(43 40% 25%)" />
        <circle cx="100" cy="100" r="94" fill={`url(#${id}-edge)`} />

        {/* Serrated edge ridges */}
        {Array.from({ length: 120 }).map((_, i) => {
          const angle = (i * 3 * Math.PI) / 180;
          const x1 = 100 + 94 * Math.cos(angle);
          const y1 = 100 + 94 * Math.sin(angle);
          const x2 = 100 + 89 * Math.cos(angle);
          const y2 = 100 + 89 * Math.sin(angle);
          return (
            <line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={i % 2 === 0 ? "hsl(43 55% 60%)" : "hsl(43 40% 30%)"}
              strokeWidth="0.6"
              opacity="0.7"
            />
          );
        })}

        {/* Raised inner rim ring */}
        <circle cx="100" cy="100" r="86" fill={`url(#${id}-bevel)`} />
        <circle cx="100" cy="100" r="86" fill="none" stroke="hsl(43 60% 68%)" strokeWidth="1.2" opacity="0.5" />

        {/* Main coin face */}
        <circle cx="100" cy="100" r="82" fill={`url(#${id}-face)`} />

        {/* Inner decorative rings */}
        <circle cx="100" cy="100" r="78" fill="none" stroke="hsl(43 55% 60%)" strokeWidth="0.8" opacity="0.4" />
        <circle cx="100" cy="100" r="75" fill="none" stroke="hsl(43 40% 35%)" strokeWidth="0.5" opacity="0.5" />

        {/* Decorative beading around inner circle */}
        {Array.from({ length: 48 }).map((_, i) => {
          const angle = (i * 7.5 * Math.PI) / 180;
          const x = 100 + 76.5 * Math.cos(angle);
          const y = 100 + 76.5 * Math.sin(angle);
          return (
            <circle
              key={`bead-${i}`}
              cx={x} cy={y} r="1.2"
              fill="hsl(43 55% 60%)"
              opacity="0.5"
            />
          );
        })}

        {/* Cardinal point decorations (small diamonds) */}
        {[0, 90, 180, 270].map((deg) => {
          const angle = (deg * Math.PI) / 180;
          const x = 100 + 71 * Math.cos(angle);
          const y = 100 + 71 * Math.sin(angle);
          return (
            <g key={`diamond-${deg}`} transform={`translate(${x},${y}) rotate(45)`}>
              <rect x="-2.5" y="-2.5" width="5" height="5" fill="hsl(43 55% 62%)" opacity="0.6" />
              <rect x="-1.5" y="-1.5" width="3" height="3" fill="hsl(43 60% 78%)" opacity="0.5" />
            </g>
          );
        })}

        {/* Engraved lines above and below text */}
        <path d="M 52 76 Q 76 72 100 74 Q 124 72 148 76" fill="none" stroke="hsl(43 50% 55%)" strokeWidth="1" opacity="0.5" />
        <path d="M 55 80 Q 77 77 100 78 Q 123 77 145 80" fill="none" stroke="hsl(43 40% 35%)" strokeWidth="0.5" opacity="0.4" />

        <path d="M 52 128 Q 76 132 100 130 Q 124 132 148 128" fill="none" stroke="hsl(43 50% 55%)" strokeWidth="1" opacity="0.5" />
        <path d="M 55 124 Q 77 127 100 126 Q 123 127 145 124" fill="none" stroke="hsl(43 40% 35%)" strokeWidth="0.5" opacity="0.4" />

        {/* KGS main text - embossed, larger and bolder */}
        <text
          x="100" y="104"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="'Cormorant Garamond', serif"
          fontSize="58"
          fontWeight="800"
          fill={`url(#${id}-text)`}
          stroke="hsl(43 40% 30%)"
          strokeWidth="0.8"
          letterSpacing="8"
          filter={`url(#${id}-emboss)`}
        >
          KGS
        </text>

        {/* FLOW sub-text - brighter */}
        <text
          x="100" y="148"
          textAnchor="middle"
          fontFamily="'Inter', sans-serif"
          fontSize="13"
          fontWeight="600"
          fill="hsl(43 60% 72%)"
          letterSpacing="10"
          filter={`url(#${id}-emboss)`}
        >
          FLOW
        </text>

        {/* Year / detail marks */}
        <text
          x="100" y="60"
          textAnchor="middle"
          fontFamily="'Inter', sans-serif"
          fontSize="7"
          fontWeight="400"
          fill="hsl(43 45% 50%)"
          letterSpacing="3"
          opacity="0.6"
        >
          ★ KORA GLOBAL ★
        </text>

        {/* Specular highlight overlay for 3D pop */}
        <circle cx="100" cy="100" r="82" fill={`url(#${id}-shine)`} />

        {/* Subtle rim light */}
        <circle cx="100" cy="100" r="93" fill="none" stroke={`url(#${id}-rim)`} strokeWidth="1.5" />
      </g>
    </svg>
  );
};

export default KGSCoin;
