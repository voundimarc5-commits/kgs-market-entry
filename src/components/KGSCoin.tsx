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
          <stop offset="0%" stopColor="hsl(40 50% 48%)" />
          <stop offset="30%" stopColor="hsl(40 45% 38%)" />
          <stop offset="70%" stopColor="hsl(40 35% 24%)" />
          <stop offset="100%" stopColor="hsl(40 30% 15%)" />
        </linearGradient>

        {/* Flat gold face */}
        <radialGradient id={`${id}-face`} cx="45%" cy="42%" r="55%">
          <stop offset="0%" stopColor="hsl(40 48% 42%)" />
          <stop offset="60%" stopColor="hsl(40 44% 36%)" />
          <stop offset="100%" stopColor="hsl(40 38% 30%)" />
        </radialGradient>

        {/* Text fill - engraved dark look, no shiny reflections */}
        <linearGradient id={`${id}-text`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(40 42% 48%)" />
          <stop offset="50%" stopColor="hsl(40 38% 38%)" />
          <stop offset="100%" stopColor="hsl(40 42% 45%)" />
        </linearGradient>

        {/* 3D bevel ring - the thick raised edge */}
        <linearGradient id={`${id}-bevelTop`} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="hsl(40 50% 48%)" />
          <stop offset="100%" stopColor="hsl(40 30% 20%)" />
        </linearGradient>
        <linearGradient id={`${id}-bevelInner`} x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="hsl(40 45% 40%)" />
          <stop offset="100%" stopColor="hsl(40 30% 22%)" />
        </linearGradient>
      </defs>

      <g filter={`url(#${id}-shadow)`}>
        {/* Bottom edge for 3D thickness */}
        <circle cx="100" cy="103" r="94" fill="hsl(40 28% 12%)" />

        {/* Outer rim */}
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
              stroke={i % 2 === 0 ? "hsl(40 42% 42%)" : "hsl(40 30% 18%)"}
              strokeWidth="0.7"
              opacity="0.6"
            />
          );
        })}

        {/* Inner raised bevel ring */}
        <circle cx="100" cy="100" r="88" fill={`url(#${id}-bevelTop)`} />
        <circle cx="100" cy="100" r="85" fill={`url(#${id}-bevelInner)`} />

        {/* Main flat coin face */}
        <circle cx="100" cy="100" r="82" fill={`url(#${id}-face)`} />

        {/* Inner decorative ring */}
        <circle cx="100" cy="100" r="78" fill="none" stroke="hsl(40 38% 32%)" strokeWidth="0.8" opacity="0.5" />
        <circle cx="100" cy="100" r="75" fill="none" stroke="hsl(40 34% 28%)" strokeWidth="0.5" opacity="0.4" />

        {/* Beading */}
        {Array.from({ length: 48 }).map((_, i) => {
          const angle = (i * 7.5 * Math.PI) / 180;
          const x = 100 + 76.5 * Math.cos(angle);
          const y = 100 + 76.5 * Math.sin(angle);
          return (
            <circle
              key={`bead-${i}`}
              cx={x} cy={y} r="1.1"
              fill="hsl(40 40% 36%)"
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
              <rect x="-2.5" y="-2.5" width="5" height="5" fill="hsl(40 40% 32%)" opacity="0.5" />
              <rect x="-1.5" y="-1.5" width="3" height="3" fill="hsl(40 42% 40%)" opacity="0.4" />
            </g>
          );
        })}

        {/* Decorative arcs */}
        <path d="M 52 76 Q 76 72 100 74 Q 124 72 148 76" fill="none" stroke="hsl(40 36% 32%)" strokeWidth="0.8" opacity="0.4" />
        <path d="M 52 128 Q 76 132 100 130 Q 124 132 148 128" fill="none" stroke="hsl(40 36% 32%)" strokeWidth="0.8" opacity="0.4" />

        {/* KORA GLOBAL top text */}
        <text
          x="100" y="60"
          textAnchor="middle"
          fontFamily="'Inter', sans-serif"
          fontSize="7"
          fontWeight="400"
          fill="hsl(40 35% 35%)"
          letterSpacing="3"
          opacity="0.55"
        >
          ★ KORA GLOBAL ★
        </text>

        {/* KGS main text - engraved, no reflections */}
        <text
          x="100" y="106"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="'Cormorant Garamond', serif"
          fontSize="62"
          fontWeight="900"
          fill={`url(#${id}-text)`}
          stroke="hsl(40 28% 18%)"
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
          fill="hsl(40 38% 36%)"
          letterSpacing="10"
          filter={`url(#${id}-emboss)`}
        >
          FLOW
        </text>

        {/* Outer rim highlight line */}
        <circle cx="100" cy="100" r="93.5" fill="none" stroke="hsl(40 42% 42%)" strokeWidth="0.5" opacity="0.2" />
      </g>
    </svg>
  );
};

export default KGSCoin;
