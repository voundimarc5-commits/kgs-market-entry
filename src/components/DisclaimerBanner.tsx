import { useLanguage } from "@/contexts/LanguageContext";

const DisclaimerBanner = () => {
  const { t } = useLanguage();

  const text = t("banner.disclaimer");

  return (
    <div className="w-full bg-muted border-b border-border overflow-hidden py-1.5 fixed top-0 left-0 z-[60]">
      <div className="animate-scroll-x whitespace-nowrap">
        <span className="text-[11px] text-muted-foreground font-sans-body tracking-wide mx-8">
          {text}
        </span>
        <span className="text-[11px] text-muted-foreground font-sans-body tracking-wide mx-8">
          {text}
        </span>
        <span className="text-[11px] text-muted-foreground font-sans-body tracking-wide mx-8">
          {text}
        </span>
      </div>
    </div>
  );
};

export default DisclaimerBanner;
