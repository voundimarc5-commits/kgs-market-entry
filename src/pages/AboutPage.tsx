import PlatformLayout from "@/components/platform/PlatformLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <PlatformLayout>
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{t("about_page.title")}</h1>
          
          <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
            <p>{t("about_page.p1")}</p>
            <p>{t("about_page.p2")}</p>
            <p>{t("about_page.p3")}</p>

            <div className="glass-card rounded-lg p-6 mt-8">
              <h2 className="text-base font-semibold text-foreground mb-3">{t("about_page.kgs_title")}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{t("about_page.kgs_desc")}</p>
            </div>

            <div className="glass-card rounded-lg p-6">
              <h2 className="text-base font-semibold text-foreground mb-3">{t("about_page.disclaimer_title")}</h2>
              <p className="text-xs text-muted-foreground leading-relaxed">{t("about_page.disclaimer_text")}</p>
            </div>
          </div>
        </div>
      </section>
    </PlatformLayout>
  );
};

export default AboutPage;
