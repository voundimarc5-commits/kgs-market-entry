import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GitBranch, Clock, Layers, AlertTriangle } from "lucide-react";

const UnderstandingFlowSection = () => {
  const { t } = useLanguage();
  const ref = useScrollReveal();

  const concepts = [
    { icon: GitBranch, titleKey: "understand.concept1.title", descKey: "understand.concept1.desc" },
    { icon: Clock, titleKey: "understand.concept2.title", descKey: "understand.concept2.desc" },
    { icon: Layers, titleKey: "understand.concept3.title", descKey: "understand.concept3.desc" },
    { icon: AlertTriangle, titleKey: "understand.concept4.title", descKey: "understand.concept4.desc" },
  ];

  return (
    <section id="understanding" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 scroll-reveal">
          <span className="text-xs font-body text-primary tracking-widest uppercase mb-4 block">
            {t("understand.label")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t("understand.title")}
          </h2>
          <p className="text-muted-foreground font-body text-base leading-relaxed">
            {t("understand.intro")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {concepts.map((concept, i) => (
            <div
              key={i}
              className="scroll-reveal border border-border rounded-xl p-7 bg-card hover:border-primary/30 transition-colors group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <concept.icon size={20} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {t(concept.titleKey)}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {t(concept.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnderstandingFlowSection;
