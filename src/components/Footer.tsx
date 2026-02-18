import { useLanguage } from "@/contexts/LanguageContext";
import KGSCoin from "./KGSCoin";

const Footer = () => {
  const { t } = useLanguage();

  const navItems = [
    { key: "nav.understanding", href: "#understanding" },
    { key: "nav.support", href: "#support" },
    { key: "nav.contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-border py-16 bg-card">
      <div className="container mx-auto px-6">
        {/* Logo + Disclaimer */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <KGSCoin size={32} className="mx-auto mb-4" />
          <p className="text-xs text-muted-foreground font-body leading-relaxed mb-4">
            {t("footer.disclaimer")}
          </p>
          <p className="text-xs text-muted-foreground/70 font-body">
            {t("footer.presence")}
          </p>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-xs text-muted-foreground hover:text-primary transition-colors font-body"
            >
              {t(item.key)}
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="text-center space-y-2">
          <p className="text-xs text-muted-foreground/60 font-body">
            {t("footer.division")}
          </p>
          <p className="text-xs text-muted-foreground/40 font-body">
            © 2024 KGS Flow. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
