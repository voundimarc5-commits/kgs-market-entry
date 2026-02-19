import { useLanguage } from "@/contexts/LanguageContext";

const DisclaimerBanner = () => {
  const { t } = useLanguage();

  const text = t("banner.disclaimer");

  return (
    <div className="w-full bg-primary/10 border-b border-primary/20 overflow-hidden py-1.5">
      <div className="animate-scroll-x whitespace-nowrap">
        <span className="text-[10px] text-primary/90 font-sans-body tracking-wider mx-12">
          {text}
        </span>
        <span className="text-[10px] text-primary/90 font-sans-body tracking-wider mx-12">
          {text}
        </span>
        <span className="text-[10px] text-primary/90 font-sans-body tracking-wider mx-12">
          {text}
        </span>
      </div>
    </div>
  );
};

export default DisclaimerBanner;
