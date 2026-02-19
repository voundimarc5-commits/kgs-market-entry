import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const { t } = useLanguage();
  const ref = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "faq.q1", a: "faq.a1" },
    { q: "faq.q2", a: "faq.a2" },
    { q: "faq.q3", a: "faq.a3" },
  ];

  return (
    <section id="faq" className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 scroll-reveal">
          <span className="text-xs font-sans-body text-primary tracking-widest uppercase mb-4 block">
            {t("faq.label")}
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl font-semibold text-foreground uppercase tracking-wide">
            {t("faq.title")}
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-primary/40" />
            <div className="w-1.5 h-1.5 rotate-45 border border-primary/50" />
            <div className="w-12 h-px bg-primary/40" />
          </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="scroll-reveal border border-border rounded-sm bg-card overflow-hidden"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-serif-display text-base md:text-lg font-semibold text-foreground pr-4">
                  {t(faq.q)}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-primary shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-sm text-muted-foreground font-sans-body leading-relaxed">
                  {t(faq.a)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
