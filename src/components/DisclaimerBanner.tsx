import { useLanguage } from "@/contexts/LanguageContext";

const DisclaimerBanner = () => {
  const { t } = useLanguage();

  const text = t("banner.disclaimer");

  return (
    <div className="w-full bg-primary/10 border-b border-primary/20 overflow-hidden py-0.5">
      <div className="animate-scroll-x whitespace-nowrap">
        <span className="text-[8px] text-primary/70 font-sans-body tracking-wider mx-10">
          {text}
        </span>
        <span className="text-[8px] text-primary/70 font-sans-body tracking-wider mx-10">
          {text}
        </span>
        <span className="text-[8px] text-primary/70 font-sans-body tracking-wider mx-10">
          {text}
        </span>
      </div>
    </div>
  );
};

export default DisclaimerBanner;
