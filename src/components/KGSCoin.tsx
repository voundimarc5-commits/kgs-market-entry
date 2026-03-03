import kgsMarketEntryLogo from "@/assets/kgs-market-entry-logo.png";

const KGSCoin = ({ size = 40, className = "" }: { size?: number; className?: string }) => {
  return (
    <img
      src={kgsMarketEntryLogo}
      alt="KGS Market Entry"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
};

export default KGSCoin;
