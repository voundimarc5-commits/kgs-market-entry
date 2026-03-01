import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AlertTriangle } from "lucide-react";

const WhyStructureSection = () => {
  const { t } = useLanguage();
  const ref = useScrollReveal();

  const reasons = [
    "whystructure.reason1",
    "whystructure.reason2",
    "whystructure.reason3",
    "whystructure.reason4",
    "whystructure.reason5",
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 scroll-reveal">
          <span className="text-xs font-sans-body text-primary tracking-widest uppercase mb-4 block">
            {t("whystructure.label")}
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl font-semibold text-foreground uppercase tracking-wide">
            {t("whystructure.title")}
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-primary/40" />
            <div className="w-1.5 h-1.5 rotate-45 border border-primary/50" />
            <div className="w-12 h-px bg-primary/40" />
          </div>
        </div>

        <div className="max-w-2xl mx-auto scroll-reveal">
          <p className="text-muted-foreground font-sans-body text-sm md:text-base leading-relaxed mb-8 text-center">
            {t("whystructure.intro")}
          </p>

          <div className="space-y-4 mb-10">
            {reasons.map((key, i) => (
              <div
                key={key}
                className="flex items-center gap-4 scroll-reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-8 h-8 shrink-0 rounded-full border border-primary/30 flex items-center justify-center">
                  <AlertTriangle size={14} className="text-primary" strokeWidth={1.5} />
                </div>
                <span className="text-sm text-foreground font-sans-body">{t(key)}</span>
              </div>
            ))}
          </div>

          <div className="border border-primary/20 rounded-sm p-8 bg-card text-center">
            <p className="text-foreground font-serif-display text-base md:text-lg leading-relaxed font-bold uppercase tracking-wide">
              {t("whystructure.conclusion")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyStructureSection;
