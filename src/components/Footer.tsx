import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const navItems = [
    { key: "nav.process", href: "#process" },
    { key: "nav.scope", href: "#scope" },
    { key: "nav.payment", href: "#payment" },
    { key: "nav.contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="w-10 h-10 mx-auto mb-4 rounded-full border border-primary/30 flex items-center justify-center">
            <span className="font-serif-display text-primary font-bold text-[10px] tracking-widest">KGS</span>
          </div>
          <p className="text-xs text-muted-foreground font-sans-body leading-relaxed">
            {t("footer.disclaimer")}
          </p>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-xs text-muted-foreground hover:text-primary transition-colors font-sans-body"
            >
              {t(item.key)}
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="text-center space-y-2">
          <p className="text-xs text-muted-foreground/60 font-sans-body">
            {t("footer.division")}
          </p>
          <p className="text-xs text-muted-foreground/40 font-sans-body">
            © {new Date().getFullYear()} KGS Flow. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
