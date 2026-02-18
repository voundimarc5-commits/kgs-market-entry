import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/447404062008";

const CTASection = () => {
  const { t } = useLanguage();
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center scroll-reveal">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-muted-foreground font-body text-base leading-relaxed mb-10">
            {t("cta.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 text-sm font-medium rounded-lg hover:bg-primary/90 transition-all duration-300"
            >
              <MessageCircle size={18} />
              {t("cta.discussion")}
            </a>
            <button
              onClick={() => {
                const msg = encodeURIComponent(t("cta.review_message"));
                window.open(`${WHATSAPP_LINK}?text=${msg}`, "_blank");
              }}
              className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3.5 text-sm font-medium rounded-lg hover:bg-secondary transition-all duration-300"
            >
              {t("cta.review")}
            </button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground/60 font-body">
            {t("cta.note")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
