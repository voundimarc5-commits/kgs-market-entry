import { useLanguage } from "@/contexts/LanguageContext";
import KGSCoin from "./KGSCoin";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-flow-line" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-flow-line animation-delay-400" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent animate-flow-line animation-delay-800" />

        {/* KGS Coin watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]">
          <KGSCoin size={500} className="animate-[spin_120s_linear_infinite]" />
        </div>

        {/* Corner decorations */}
        <div className="absolute top-20 left-8 w-24 h-24 border-l border-t border-primary/20" />
        <div className="absolute bottom-20 right-8 w-24 h-24 border-r border-b border-primary/20" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        {/* Small badge */}
        <div className="inline-flex items-center gap-2 border border-primary/30 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-xs font-sans-body text-primary tracking-widest uppercase">KGS Flow</span>
        </div>

        <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-[1.05] mb-3 animate-fade-in-up animation-delay-200 uppercase tracking-tight">
          {t("hero.title")}
        </h1>
        <p className="font-serif-display text-3xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight mb-6 animate-fade-in-up animation-delay-300">
          {t("hero.title2")}
        </p>

        <p className="text-lg md:text-xl text-muted-foreground font-sans-body max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-400 leading-relaxed">
          {t("hero.subtitle")}
        </p>

        <button
          onClick={scrollToContact}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 text-sm font-bold tracking-widest hover:bg-primary/90 transition-all duration-300 rounded-sm animate-fade-in-up animation-delay-600"
        >
          {t("hero.cta")}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
            <path d="M8 3v10M8 13l4-4M8 13L4 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Micro-text */}
        <p className="mt-4 text-xs text-muted-foreground/60 font-sans-body animate-fade-in-up animation-delay-700">
          {t("hero.micro")}
        </p>

        {/* Decorative divider */}
        <div className="mt-16 flex items-center justify-center gap-4 animate-fade-in-up animation-delay-800">
          <div className="w-16 h-px bg-primary/30" />
          <div className="w-2 h-2 rotate-45 border border-primary/40" />
          <div className="w-16 h-px bg-primary/30" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
