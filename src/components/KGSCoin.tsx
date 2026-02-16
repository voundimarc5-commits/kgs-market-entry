import kgsCoinLogo from "@/assets/kgs-coin-logo.png";

const KGSCoin = ({ size = 40, className = "" }: { size?: number; className?: string }) => {
  return (
    <img
      src={kgsCoinLogo}
      alt="KGS Flow"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
};

export default KGSCoin;
