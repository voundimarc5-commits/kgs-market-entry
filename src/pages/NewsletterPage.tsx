import PlatformLayout from "@/components/platform/PlatformLayout";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const NewsletterPage = () => {
  const { t } = useLanguage();

  return (
    <PlatformLayout>
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{t("newsletter.title")}</h1>
          <p className="text-sm text-muted-foreground mb-12 max-w-xl">
            {t("newsletter.desc")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Free Tier */}
            <div className="glass-card rounded-lg p-8">
              <h3 className="text-lg font-semibold text-foreground mb-1">{t("newsletter.free")}</h3>
              <p className="text-3xl font-bold text-foreground mb-1">{t("newsletter.free_price")}<span className="text-sm font-normal text-muted-foreground"> {t("newsletter.free_period")}</span></p>
              <p className="text-xs text-muted-foreground mb-6">{t("newsletter.free_desc")}</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-muted-foreground"><Check size={14} className="text-primary shrink-0" /> {t("newsletter.free_f1")}</li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground"><Check size={14} className="text-primary shrink-0" /> {t("newsletter.free_f2")}</li>
              </ul>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder={t("newsletter.email_placeholder")}
                  className="bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button className="bg-secondary text-foreground border border-border px-4 py-2.5 rounded-md text-sm font-medium hover:bg-secondary/80 transition-colors">
                  {t("newsletter.free_cta")}
                </button>
              </div>
            </div>

            {/* Premium Tier */}
            <div className="glass-card rounded-lg p-8 border-primary/30 glow-gold relative">
              <span className="absolute -top-3 left-6 text-[10px] uppercase tracking-wider text-primary-foreground bg-primary px-3 py-1 rounded-full font-medium">{t("newsletter.recommended")}</span>
              <h3 className="text-lg font-semibold text-foreground mb-1">{t("newsletter.premium")}</h3>
              <p className="text-3xl font-bold text-foreground mb-1">{t("newsletter.premium_price")}<span className="text-sm font-normal text-muted-foreground"> {t("newsletter.free_period")}</span></p>
              <p className="text-xs text-muted-foreground mb-1">{t("newsletter.premium_year")}</p>
              <p className="text-xs text-muted-foreground mb-6">{t("newsletter.premium_desc")}</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-muted-foreground"><Check size={14} className="text-primary shrink-0" /> {t("newsletter.premium_f1")}</li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground"><Check size={14} className="text-primary shrink-0" /> {t("newsletter.premium_f2")}</li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground"><Check size={14} className="text-primary shrink-0" /> {t("newsletter.premium_f3")}</li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground"><Check size={14} className="text-primary shrink-0" /> {t("newsletter.premium_f4")}</li>
              </ul>
              <button className="w-full bg-primary text-primary-foreground px-4 py-2.5 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                {t("newsletter.premium_cta")}
              </button>
            </div>
          </div>
        </div>
      </section>
    </PlatformLayout>
  );
};

export default NewsletterPage;
