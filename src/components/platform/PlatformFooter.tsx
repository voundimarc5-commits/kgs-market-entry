import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import kgsLogo from "@/assets/kgs-market-entry-logo.png";

const PlatformFooter = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={kgsLogo} alt="KGS Market Entry" className="w-20 h-20 object-contain logo-spin-slow" />
              <div className="flex flex-col">
                <span className="text-base font-bold text-foreground">KGS Market Entry</span>
                <span className="text-[9px] text-muted-foreground tracking-[0.12em] uppercase">Kora Global Systems</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t("pfooter.tagline")}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">{t("pfooter.platform")}</h4>
            <div className="space-y-2">
              <Link to="/opportunities" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">{t("pfooter.link_opps")}</Link>
              <Link to="/countries" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">{t("pfooter.link_countries")}</Link>
              <Link to="/events" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">{t("pfooter.link_events")}</Link>
              <Link to="/insights" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">{t("pfooter.link_insights")}</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">{t("pfooter.company")}</h4>
            <div className="space-y-2">
              <Link to="/services" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">{t("pfooter.link_services")}</Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">{t("pfooter.link_about")}</Link>
              <Link to="/newsletter" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">{t("pfooter.link_newsletter")}</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">{t("pfooter.legal")}</h4>
            <div className="space-y-2">
              <Link to="/legal-notice" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">{t("pfooter.link_legal")}</Link>
              <Link to="/terms-of-use" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">{t("pfooter.link_terms")}</Link>
              <Link to="/privacy-policy" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">{t("pfooter.link_privacy")}</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Kora Global Systems. {t("pfooter.rights")}
          </p>
          <p className="text-xs text-muted-foreground">
            {t("pfooter.disclaimer")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PlatformFooter;
