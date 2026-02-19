import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AnimatedCheck = ({ delay = 0 }: { delay?: number }) => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }, 3000 + delay * 400);
    return () => clearInterval(interval);
  }, [delay]);

  return (
    <div className={`transition-all duration-500 ${pulse ? "scale-125 rotate-12" : "scale-100 rotate-0"}`}>
      <Check size={16} className={`text-primary transition-all duration-500 ${pulse ? "drop-shadow-[0_0_6px_hsl(38_55%_52%/0.6)]" : ""}`} />
    </div>
  );
};

const AnimatedX = ({ delay = 0 }: { delay?: number }) => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }, 3500 + delay * 400);
    return () => clearInterval(interval);
  }, [delay]);

  return (
    <div className={`transition-all duration-500 ${pulse ? "scale-125 -rotate-12" : "scale-100 rotate-0"}`}>
      <X size={16} className={`text-muted-foreground transition-all duration-500 ${pulse ? "opacity-60" : ""}`} />
    </div>
  );
};

const ScopeSection = () => {
  const { t } = useLanguage();
  const ref = useScrollReveal();

  const doItems = ["scope.do.1", "scope.do.2", "scope.do.3"];
  const dontItems = ["scope.dont.1", "scope.dont.2", "scope.dont.3"];

  return (
    <section id="scope" className="py-16 md:py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 scroll-reveal">
          <span className="text-xs font-sans-body text-primary tracking-widest uppercase mb-4 block">
            {t("scope.title")}
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl font-semibold text-foreground uppercase tracking-wide">
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
          <div className="scroll-reveal border border-primary/20 rounded-sm p-8 bg-card transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(38_55%_52%/0.08)]">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <AnimatedCheck />
              </div>
              <h3 className="font-serif-display text-xl font-semibold text-foreground text-center">
                {t("scope.do.title")}
              </h3>
            </div>
            <ul className="space-y-4">
              {doItems.map((key, i) => (
                <li key={key} className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-300">
                  <div className="mt-0.5 shrink-0">
                    <AnimatedCheck delay={i} />
                  </div>
                  <span className="text-sm text-muted-foreground font-sans-body transition-colors duration-300 group-hover/item:text-foreground/80">{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What we don't do */}
          <div className="scroll-reveal border border-border rounded-sm p-8 bg-card transition-all duration-500 hover:border-muted-foreground/30" style={{ transitionDelay: "0.15s" }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <AnimatedX />
              </div>
              <h3 className="font-serif-display text-xl font-semibold text-foreground text-center">
                {t("scope.dont.title")}
              </h3>
            </div>
            <ul className="space-y-4">
              {dontItems.map((key, i) => (
                <li key={key} className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-300">
                  <div className="mt-0.5 shrink-0">
                    <AnimatedX delay={i} />
                  </div>
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
