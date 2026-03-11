import PlatformLayout from "@/components/platform/PlatformLayout";
import { Link } from "react-router-dom";
import { Target, Compass, Brain, Users, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesPage = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Target, titleKey: "services.s1.title", descKey: "services.s1.desc" },
    { icon: Compass, titleKey: "services.s2.title", descKey: "services.s2.desc" },
    { icon: Brain, titleKey: "services.s3.title", descKey: "services.s3.desc" },
    { icon: Users, titleKey: "services.s4.title", descKey: "services.s4.desc" },
  ];

  return (
    <PlatformLayout>
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{t("services.title")}</h1>
          <p className="text-sm text-muted-foreground mb-12 max-w-xl">
            {t("services.desc")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {services.map((service) => (
              <div key={service.titleKey} className="glass-card rounded-lg p-6 hover:border-primary/30 transition-all">
                <service.icon size={24} className="text-primary mb-4" />
                <h3 className="text-base font-semibold text-foreground mb-2">{t(service.titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(service.descKey)}</p>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-xl p-10 text-center glow-gold">
            <h2 className="text-2xl font-semibold text-foreground mb-3">{t("services.cta_title")}</h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
              {t("services.cta_desc")}
            </p>
            <a
              href="mailto:contact@koraglobalsystems.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              {t("services.cta_button")} <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </PlatformLayout>
  );
};

export default ServicesPage;
