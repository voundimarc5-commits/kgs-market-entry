import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FileSearch, Users, Eye } from "lucide-react";

const EngagementSection = () => {
  const { t } = useLanguage();
  const ref = useScrollReveal();

  const scrollToForm = () => {
    const el = document.getElementById("clarity-form");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="engagement" className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 scroll-reveal">
          <span className="text-xs font-sans-body text-primary tracking-widest uppercase mb-4 block">
            {t("engagement.label")}
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl font-semibold text-foreground uppercase tracking-wide">
            {t("engagement.title")}
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-primary/40" />
            <div className="w-1.5 h-1.5 rotate-45 border border-primary/50" />
            <div className="w-12 h-px bg-primary/40" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Tier 1 — Clarity Review (highlighted) */}
          <div className="scroll-reveal border-2 border-primary/40 rounded-sm p-8 md:p-10 bg-card transition-all duration-500 hover:border-primary/60 hover:shadow-[0_0_30px_hsl(38_55%_52%/0.1)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <FileSearch size={20} className="text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif-display text-xl font-semibold text-foreground">
                  {t("engagement.tier1.title")}
                </h3>
                <p className="text-xs text-primary font-sans-body font-medium">{t("engagement.tier1.subtitle")}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-sans-body leading-relaxed mb-4">
              {t("engagement.tier1.desc")}
            </p>
            <p className="text-xs text-muted-foreground/70 font-sans-body mb-1 tracking-wide uppercase">Includes:</p>
            <ul className="space-y-1.5 mb-6">
              {t("engagement.tier1.includes").split("\n").map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground font-sans-body">
                  <span className="text-primary mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm font-semibold text-foreground font-sans-body mb-5">
              {t("engagement.tier1.price")}
            </p>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 text-sm font-bold tracking-widest hover:bg-primary/90 hover:shadow-[0_0_25px_hsl(38_55%_52%/0.4)] hover:scale-105 active:scale-105 transition-all duration-300 rounded-sm"
            >
              {t("engagement.tier1.cta")}
            </button>
          </div>

          {/* Tier 2 — Partner Match */}
          <div className="scroll-reveal border border-border rounded-sm p-8 bg-card transition-all duration-500 hover:border-primary/30" style={{ transitionDelay: "0.15s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <Users size={20} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif-display text-xl font-semibold text-foreground">
                {t("engagement.tier2.title")}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground font-sans-body leading-relaxed whitespace-pre-line">
              {t("engagement.tier2.desc")}
            </p>
          </div>

          {/* Tier 3 — Project Oversight */}
          <div className="scroll-reveal border border-border rounded-sm p-8 bg-card transition-all duration-500 hover:border-primary/30" style={{ transitionDelay: "0.3s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <Eye size={20} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif-display text-xl font-semibold text-foreground">
                {t("engagement.tier3.title")}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground font-sans-body leading-relaxed whitespace-pre-line">
              {t("engagement.tier3.desc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;
