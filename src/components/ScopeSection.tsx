import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, X } from "lucide-react";

const ScopeSection = () => {
  const { t } = useLanguage();
  const ref = useScrollReveal();

  const doItems = ["scope.do.1", "scope.do.2", "scope.do.3"];
  const dontItems = ["scope.dont.1", "scope.dont.2", "scope.dont.3"];

  return (
    <section id="scope" className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-xs font-sans-body text-primary tracking-widest uppercase mb-4 block">
            {t("scope.title")}
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl font-semibold text-foreground">
            {t("scope.title")}
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-primary/40" />
            <div className="w-1.5 h-1.5 rotate-45 border border-primary/50" />
            <div className="w-12 h-px bg-primary/40" />
          </div>
        </div>

        {/* Positioning statement */}
        <div className="max-w-3xl mx-auto mb-16 scroll-reveal">
          <div className="border border-primary/20 rounded-sm p-8 text-center bg-card">
            <p className="text-foreground font-serif-display text-base md:text-lg leading-relaxed font-bold uppercase tracking-wide">
              "{t("positioning")}"
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* What we do */}
          <div className="scroll-reveal border border-primary/20 rounded-sm p-8 bg-card">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Check size={16} className="text-primary" />
              </div>
              <h3 className="font-serif-display text-xl font-semibold text-foreground text-center">
                {t("scope.do.title")}
              </h3>
            </div>
            <ul className="space-y-4">
              {doItems.map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground font-sans-body">{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What we don't do */}
          <div className="scroll-reveal border border-border rounded-sm p-8 bg-card" style={{ transitionDelay: "0.15s" }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <X size={16} className="text-muted-foreground" />
              </div>
              <h3 className="font-serif-display text-xl font-semibold text-foreground text-center">
                {t("scope.dont.title")}
              </h3>
            </div>
            <ul className="space-y-4">
              {dontItems.map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <X size={16} className="text-muted-foreground mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground font-sans-body">{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScopeSection;
