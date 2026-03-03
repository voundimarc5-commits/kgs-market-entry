import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Home, Store, Monitor } from "lucide-react";
import hospitalityImg from "@/assets/hospitality-interior.jpg";
import cityscapeImg from "@/assets/africa-cityscape.jpg";
import digitalImg from "@/assets/digital-structuring.jpg";

const ProjectTypesSection = () => {
  const { t } = useLanguage();
  const ref = useScrollReveal();

  const types = [
    { icon: Home, titleKey: "projecttypes.type1.title", descKey: "projecttypes.type1.desc", image: hospitalityImg },
    { icon: Store, titleKey: "projecttypes.type2.title", descKey: "projecttypes.type2.desc", image: cityscapeImg },
    { icon: Monitor, titleKey: "projecttypes.type3.title", descKey: "projecttypes.type3.desc", image: digitalImg },
  ];

  return (
    <section className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 scroll-reveal">
          <span className="text-xs font-sans-body text-primary tracking-widest uppercase mb-4 block">
            {t("projecttypes.label")}
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl font-semibold text-foreground uppercase tracking-wide">
            {t("projecttypes.title")}
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-primary/40" />
            <div className="w-1.5 h-1.5 rotate-45 border border-primary/50" />
            <div className="w-12 h-px bg-primary/40" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {types.map((type, i) => (
            <div
              key={i}
              className="scroll-reveal text-center group cursor-pointer transition-all duration-500 ease-out hover:scale-110 hover:-translate-y-2 active:scale-110 active:-translate-y-2"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {type.image && (
                <div className="w-full h-40 mb-4 rounded-sm overflow-hidden border border-border">
                  <img
                    src={type.image}
                    alt={t(type.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              )}
              {!type.image && (
                <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-primary/30 flex items-center justify-center transition-all duration-500 group-hover:border-primary group-hover:bg-primary/10 group-hover:shadow-[0_0_20px_hsl(38_55%_42%/0.2)]">
                  <type.icon size={22} className="text-primary transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                </div>
              )}
              <h3 className="font-serif-display text-xl font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
                {t(type.titleKey)}
              </h3>
              <p className="text-sm text-muted-foreground font-sans-body leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">
                {t(type.descKey)}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground font-sans-body mt-10 italic scroll-reveal">
          {t("projecttypes.footer")}
        </p>
      </div>
    </section>
  );
};

export default ProjectTypesSection;
