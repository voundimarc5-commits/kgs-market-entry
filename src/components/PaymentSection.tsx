import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Info } from "lucide-react";

const PaymentSection = () => {
  const { t } = useLanguage();
  const ref = useScrollReveal();

  return (
    <section id="payment" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-xs font-sans-body text-primary tracking-widest uppercase mb-4 block">
            {t("payment.title")}
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl font-semibold text-foreground">
            {t("payment.title")}
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-primary/40" />
            <div className="w-1.5 h-1.5 rotate-45 border border-primary/50" />
            <div className="w-12 h-px bg-primary/40" />
          </div>
        </div>

        <div className="max-w-2xl mx-auto scroll-reveal">
          <div className="border border-primary/20 rounded-sm p-10 bg-card text-center">
            <div className="w-12 h-12 mx-auto mb-6 rounded-full border border-primary/30 flex items-center justify-center">
              <Info size={20} className="text-primary" strokeWidth={1.5} />
            </div>
            <p className="text-muted-foreground font-sans-body text-sm md:text-base leading-relaxed">
              {t("payment.text")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
