import { useLanguage } from "@/contexts/LanguageContext";
import { AlertTriangle } from "lucide-react";

const DisclaimerBanner = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-background/80 border-b border-border/50 flex items-center justify-center gap-2 px-4 py-1.5" style={{ height: "30px" }}>
      <AlertTriangle size={12} className="text-muted-foreground/60 shrink-0" />
      <span className="text-[10px] text-muted-foreground/70 font-sans-body tracking-wide truncate">
        {t("banner.static_disclaimer")}
      </span>
    </div>
  );
};

export default DisclaimerBanner;
