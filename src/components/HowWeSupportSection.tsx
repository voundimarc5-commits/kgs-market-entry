import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Eye, Workflow, Shield } from "lucide-react";

const HowWeSupportSection = () => {
  const { t } = useLanguage();
  const ref = useScrollReveal();

  const pillars = [
    { icon: Eye, titleKey: "support.pillar1.title", descKey: "support.pillar1.desc" },
    { icon: Workflow, titleKey: "support.pillar2.title", descKey: "support.pillar2.desc" },
    { icon: Shield, titleKey: "support.pillar3.title", descKey: "support.pillar3.desc" },
  ];

  return (
    <section id="support" className="py-24 md:py-32 bg-flow-surface" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 scroll-reveal">
          <span className="text-xs font-body text-primary tracking-widest uppercase mb-4 block">
            {t("support.label")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t("support.title")}
          </h2>
          <p className="text-muted-foreground font-body text-base leading-relaxed">
            {t("support.intro")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="scroll-reveal text-center"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <pillar.icon size={24} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {t(pillar.titleKey)}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {t(pillar.descKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Positioning statement */}
        <div className="max-w-2xl mx-auto mt-16 scroll-reveal">
          <div className="border border-border rounded-xl p-8 bg-card text-center">
            <p className="text-sm text-muted-foreground font-body leading-relaxed italic">
              "{t("positioning")}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeSupportSection;
