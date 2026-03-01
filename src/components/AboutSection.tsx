import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { t } = useLanguage();
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 scroll-reveal">
          <span className="text-xs font-sans-body text-primary tracking-widest uppercase mb-4 block">
            {t("about.label")}
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl font-semibold text-foreground uppercase tracking-wide">
            {t("about.title")}
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-primary/40" />
            <div className="w-1.5 h-1.5 rotate-45 border border-primary/50" />
            <div className="w-12 h-px bg-primary/40" />
          </div>
        </div>

        <div className="max-w-3xl mx-auto scroll-reveal">
          <div className="border border-primary/20 rounded-sm p-8 md:p-12 bg-card space-y-6">
            <p className="text-muted-foreground font-sans-body text-sm md:text-base leading-relaxed">
              {t("about.text1")}
            </p>
            <p className="text-foreground font-sans-body text-sm md:text-base leading-relaxed font-medium whitespace-pre-line">
              {t("about.text2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
