import { useLanguage } from "@/contexts/LanguageContext";

const ScopeGovernance = () => {
  const { t } = useLanguage();

  return (
    <section className="border-t border-border/30 bg-secondary/10">
      <div className="container mx-auto px-6 py-12 max-w-3xl text-center space-y-4">
        <h2 className="text-xs font-medium text-primary/70 tracking-widest uppercase font-sans-body">
          {t("governance.title")}
        </h2>
        <p className="text-[11px] text-muted-foreground/70 font-sans-body leading-relaxed tracking-wide">
          {t("governance.text")}
        </p>
        <p className="text-[10px] text-muted-foreground/50 font-sans-body leading-relaxed tracking-wide pt-2 border-t border-border/20">
          {t("governance.disclaimer")}
        </p>
      </div>
    </section>
  );
};

export default ScopeGovernance;
