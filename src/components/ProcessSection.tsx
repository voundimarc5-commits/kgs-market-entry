import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FileText, Search, Send, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const { t } = useLanguage();
  const ref = useScrollReveal();

  const steps = [
    { icon: FileText, titleKey: "process.step1.title", descKey: "process.step1.desc" },
    { icon: Search, titleKey: "process.step2.title", descKey: "process.step2.desc" },
    { icon: Send, titleKey: "process.step3.title", descKey: "process.step3.desc" },
    { icon: CheckCircle, titleKey: "process.step4.title", descKey: "process.step4.desc" },
  ];

  return (
    <section id="process" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-xs font-sans-body text-primary tracking-widest uppercase mb-4 block">
            {t("process.title")}
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl font-semibold text-foreground">
            {t("process.title")}
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-primary/40" />
            <div className="w-1.5 h-1.5 rotate-45 border border-primary/50" />
            <div className="w-12 h-px bg-primary/40" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="scroll-reveal text-center group" style={{ transitionDelay: `${i * 0.15}s` }}>
              {/* Step number */}
              <div className="text-5xl font-serif-display text-primary/20 font-bold mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-primary/60 transition-colors">
                <step.icon size={22} className="text-primary" strokeWidth={1.5} />
              </div>

              <h3 className="font-serif-display text-xl font-semibold text-foreground mb-2">
                {t(step.titleKey)}
              </h3>
              <p className="text-sm text-muted-foreground font-sans-body leading-relaxed">
                {t(step.descKey)}
              </p>

              {/* Connector line (not on last) */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-px bg-primary/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
