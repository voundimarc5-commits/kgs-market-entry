import kgsCoinLogo from "@/assets/kgs-coin-logo.png";

const KGSCoin = ({ size = 40, className = "" }: { size?: number; className?: string }) => {
  return (
    <img
      src={kgsCoinLogo}
      alt="KGS Flow"
      width={size}
      height={size}
      className={`rounded-full drop-shadow-[0_0_8px_hsl(40_60%_30%/0.5)] ${className}`}
      style={{ width: size, height: size }}
    />
  );
};

export default KGSCoin;
