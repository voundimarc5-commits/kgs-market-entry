import { useLanguage } from "@/contexts/LanguageContext";

const DisclaimerBanner = () => {
  const { t } = useLanguage();

  const text = t("banner.disclaimer");

  return (
    <div className="w-full bg-secondary/80 border-b border-border/50 overflow-hidden py-1.5 fixed top-0 left-0 z-[60]">
      <div className="animate-scroll-x whitespace-nowrap">
        <span className="text-[10px] text-muted-foreground/80 font-sans-body tracking-wider mx-12">
          {text}
        </span>
        <span className="text-[10px] text-muted-foreground/80 font-sans-body tracking-wider mx-12">
          {text}
        </span>
        <span className="text-[10px] text-muted-foreground/80 font-sans-body tracking-wider mx-12">
          {text}
        </span>
      </div>
    </div>
  );
};

export default DisclaimerBanner;
