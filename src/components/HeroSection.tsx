import { useLanguage } from "@/contexts/LanguageContext";
import QuoteRequestForm from "./QuoteRequestForm";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToForm = () => {
    const el = document.getElementById("quote-form");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-flow-line" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-flow-line animation-delay-400" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent animate-flow-line animation-delay-800" />

        {/* Corner decorations */}
        <div className="absolute top-20 left-8 w-24 h-24 border-l border-t border-primary/20" />
        <div className="absolute bottom-20 right-8 w-24 h-24 border-r border-b border-primary/20" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left max-w-xl">
            {/* Small badge */}
            <div className="inline-flex items-center gap-2 border border-primary/30 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-xs font-sans-body text-primary tracking-widest uppercase">KGS Flow</span>
            </div>

            <h1 className="font-serif-display text-[2.1rem] md:text-5xl lg:text-6xl font-black text-foreground leading-[1.05] mb-3 animate-fade-in-up animation-delay-200 uppercase tracking-[0.04em]">
              {t("hero.title")}
            </h1>
            <p className="font-serif-display text-[1.4rem] md:text-3xl lg:text-4xl font-semibold text-primary leading-tight mb-6 animate-fade-in-up animation-delay-300 tracking-wide">
              {t("hero.title2")}
            </p>

            <p className="text-base md:text-lg text-muted-foreground font-sans-body max-w-lg mb-8 animate-fade-in-up animation-delay-400 leading-relaxed">
              {t("hero.subtitle")}
            </p>

            {/* CTA button */}
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 text-sm font-bold tracking-widest hover:bg-primary/90 transition-all duration-300 rounded-sm animate-fade-in-up animation-delay-600"
            >
              {t("hero.cta")}
            </button>

            {/* Micro-text */}
            <p className="text-xs text-muted-foreground/60 font-sans-body animate-fade-in-up animation-delay-700 mt-4">
              {t("hero.micro")}
            </p>
          </div>

          {/* Right: Quote Form */}
          <div className="flex-1 w-full max-w-lg">
            <QuoteRequestForm />
          </div>
        </div>

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
