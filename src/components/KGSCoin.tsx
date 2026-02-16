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
        {/* Thick 3D rim gradient - dark bottom, bright top edge */}
        <linearGradient id={`${id}-rim3d`} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="hsl(43 65% 72%)" />
          <stop offset="30%" stopColor="hsl(43 60% 58%)" />
          <stop offset="70%" stopColor="hsl(43 45% 35%)" />
          <stop offset="100%" stopColor="hsl(43 35% 22%)" />
        </linearGradient>

        {/* Flat gold face - uniform, like the reference coin */}
        <radialGradient id={`${id}-face`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(43 55% 58%)" />
          <stop offset="80%" stopColor="hsl(43 52% 52%)" />
          <stop offset="100%" stopColor="hsl(43 48% 46%)" />
        </radialGradient>

        {/* Text metallic fill - high contrast for readability */}
        <linearGradient id={`${id}-text`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(43 70% 85%)" />
          <stop offset="40%" stopColor="hsl(43 60% 68%)" />
          <stop offset="60%" stopColor="hsl(43 55% 55%)" />
          <stop offset="100%" stopColor="hsl(43 65% 78%)" />
        </linearGradient>

        {/* Emboss for raised text */}
        <filter id={`${id}-emboss`}>
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.2" result="blur" />
          <feOffset in="blur" dx="-1.5" dy="-1.5" result="offsetLight" />
          <feOffset in="blur" dx="1.5" dy="1.5" result="offsetDark" />
          <feFlood floodColor="hsl(43 60% 82%)" floodOpacity="0.7" result="lightColor" />
          <feFlood floodColor="hsl(43 30% 15%)" floodOpacity="0.8" result="darkColor" />
          <feComposite in="lightColor" in2="offsetLight" operator="in" result="lightShadow" />
          <feComposite in="darkColor" in2="offsetDark" operator="in" result="darkShadow" />
          <feMerge>
            <feMergeNode in="lightShadow" />
            <feMergeNode in="darkShadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Drop shadow for entire coin */}
        <filter id={`${id}-shadow`} x="-20%" y="-15%" width="140%" height="140%">
          <feDropShadow dx="2" dy="4" stdDeviation="5" floodColor="hsl(0 0% 0%)" floodOpacity="0.55" />
        </filter>

        {/* Subtle specular highlight - small, top-left like real coin */}
        <radialGradient id={`${id}-shine`} cx="38%" cy="30%" r="35%">
          <stop offset="0%" stopColor="hsl(43 80% 95%)" stopOpacity="0.22" />
          <stop offset="60%" stopColor="hsl(43 60% 80%)" stopOpacity="0.05" />
          <stop offset="100%" stopColor="hsl(43 60% 70%)" stopOpacity="0" />
        </radialGradient>

        {/* 3D bevel ring - the thick raised edge */}
        <linearGradient id={`${id}-bevelTop`} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="hsl(43 65% 75%)" />
          <stop offset="100%" stopColor="hsl(43 40% 30%)" />
        </linearGradient>
        <linearGradient id={`${id}-bevelInner`} x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="hsl(43 60% 68%)" />
          <stop offset="100%" stopColor="hsl(43 40% 32%)" />
        </linearGradient>
      </defs>

      <g filter={`url(#${id}-shadow)`}>
        {/* Bottom edge for 3D thickness */}
        <circle cx="100" cy="103" r="94" fill="hsl(43 35% 20%)" />

        {/* Outer rim - thick 3D bevel */}
        <circle cx="100" cy="100" r="94" fill={`url(#${id}-rim3d)`} />

        {/* Serrated edge ridges */}
        {Array.from({ length: 120 }).map((_, i) => {
          const angle = (i * 3 * Math.PI) / 180;
          const x1 = 100 + 94 * Math.cos(angle);
          const y1 = 100 + 94 * Math.sin(angle);
          const x2 = 100 + 90 * Math.cos(angle);
          const y2 = 100 + 90 * Math.sin(angle);
          return (
            <line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={i % 2 === 0 ? "hsl(43 58% 65%)" : "hsl(43 38% 28%)"}
              strokeWidth="0.7"
              opacity="0.6"
            />
          );
        })}

        {/* Inner raised bevel ring - top lit */}
        <circle cx="100" cy="100" r="88" fill={`url(#${id}-bevelTop)`} />
        {/* Inner bevel ring shadow */}
        <circle cx="100" cy="100" r="85" fill={`url(#${id}-bevelInner)`} />

        {/* Main flat coin face */}
        <circle cx="100" cy="100" r="82" fill={`url(#${id}-face)`} />

        {/* Inner decorative ring */}
        <circle cx="100" cy="100" r="78" fill="none" stroke="hsl(43 48% 45%)" strokeWidth="0.8" opacity="0.5" />
        <circle cx="100" cy="100" r="75" fill="none" stroke="hsl(43 42% 38%)" strokeWidth="0.5" opacity="0.4" />

        {/* Beading */}
        {Array.from({ length: 48 }).map((_, i) => {
          const angle = (i * 7.5 * Math.PI) / 180;
          const x = 100 + 76.5 * Math.cos(angle);
          const y = 100 + 76.5 * Math.sin(angle);
          return (
            <circle
              key={`bead-${i}`}
              cx={x} cy={y} r="1.1"
              fill="hsl(43 50% 55%)"
              opacity="0.45"
            />
          );
        })}

        {/* Cardinal point diamonds */}
        {[0, 90, 180, 270].map((deg) => {
          const angle = (deg * Math.PI) / 180;
          const x = 100 + 71 * Math.cos(angle);
          const y = 100 + 71 * Math.sin(angle);
          return (
            <g key={`diamond-${deg}`} transform={`translate(${x},${y}) rotate(45)`}>
              <rect x="-2.5" y="-2.5" width="5" height="5" fill="hsl(43 50% 50%)" opacity="0.5" />
              <rect x="-1.5" y="-1.5" width="3" height="3" fill="hsl(43 55% 65%)" opacity="0.4" />
            </g>
          );
        })}

        {/* Decorative arcs */}
        <path d="M 52 76 Q 76 72 100 74 Q 124 72 148 76" fill="none" stroke="hsl(43 45% 48%)" strokeWidth="0.8" opacity="0.4" />
        <path d="M 52 128 Q 76 132 100 130 Q 124 132 148 128" fill="none" stroke="hsl(43 45% 48%)" strokeWidth="0.8" opacity="0.4" />

        {/* KORA GLOBAL top text */}
        <text
          x="100" y="60"
          textAnchor="middle"
          fontFamily="'Inter', sans-serif"
          fontSize="7"
          fontWeight="400"
          fill="hsl(43 42% 45%)"
          letterSpacing="3"
          opacity="0.55"
        >
          ★ KORA GLOBAL ★
        </text>

        {/* KGS main text - bold, engraved, prominent */}
        <text
          x="100" y="106"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="'Cormorant Garamond', serif"
          fontSize="62"
          fontWeight="900"
          fill={`url(#${id}-text)`}
          stroke="hsl(43 35% 28%)"
          strokeWidth="1.2"
          letterSpacing="10"
          filter={`url(#${id}-emboss)`}
        >
          KGS
        </text>

        {/* FLOW sub-text */}
        <text
          x="100" y="148"
          textAnchor="middle"
          fontFamily="'Inter', sans-serif"
          fontSize="12"
          fontWeight="600"
          fill="hsl(43 48% 52%)"
          letterSpacing="10"
          filter={`url(#${id}-emboss)`}
        >
          FLOW
        </text>

        {/* Very subtle specular highlight */}
        <circle cx="100" cy="100" r="82" fill={`url(#${id}-shine)`} />

        {/* Outer rim highlight line */}
        <circle cx="100" cy="100" r="93.5" fill="none" stroke="hsl(43 60% 70%)" strokeWidth="0.5" opacity="0.3" />
      </g>
    </svg>
  );
};

export default KGSCoin;
