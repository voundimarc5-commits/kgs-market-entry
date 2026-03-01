import { useLanguage } from "@/contexts/LanguageContext";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import kgsCoinLogo from "@/assets/kgs-coin-logo.png";

const Footer = () => {
  const { t } = useLanguage();

  const navItems = [
    { key: "nav.about", href: "#about" },
    { key: "nav.method", href: "#process" },
    { key: "nav.scope", href: "#scope" },
    { key: "nav.engagement", href: "#engagement" },
    { key: "nav.contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-border/50 bg-secondary/20">
      <div className="container mx-auto px-6 py-14">
        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <img 
            src={kgsCoinLogo} 
            alt="KGS Market Entry" 
            className="w-12 h-12 mx-auto mb-4 animate-spin-pause"
          />
          <p className="text-[11px] text-muted-foreground/70 font-sans-body leading-relaxed tracking-wide">
            {t("footer.disclaimer")}
          </p>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-[11px] text-muted-foreground/60 hover:text-primary transition-colors font-sans-body tracking-wider uppercase"
            >
              {t(item.key)}
            </a>
          ))}
        </div>

        {/* Presence + Contact row */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <p className="text-[11px] text-muted-foreground/50 font-sans-body tracking-[0.15em]">
            {t("footer.presence")}
          </p>
          <a
            href="mailto:contact@koraglobalsystems.com"
            className="inline-flex items-center gap-2 text-[11px] text-muted-foreground/60 hover:text-primary transition-colors font-sans-body tracking-wider"
          >
            <Mail size={12} strokeWidth={1.5} />
            contact@koraglobalsystems.com
          </a>
        </div>

        {/* Legal page links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <Link to="/legal-notice" className="text-[10px] text-muted-foreground/50 hover:text-primary transition-colors font-sans-body tracking-wider underline underline-offset-2">
            {t("footer.link_legal")}
          </Link>
          <Link to="/terms-of-use" className="text-[10px] text-muted-foreground/50 hover:text-primary transition-colors font-sans-body tracking-wider underline underline-offset-2">
            {t("footer.link_terms")}
          </Link>
          <Link to="/privacy-policy" className="text-[10px] text-muted-foreground/50 hover:text-primary transition-colors font-sans-body tracking-wider underline underline-offset-2">
            {t("footer.link_privacy")}
          </Link>
        </div>

        {/* Bottom line */}
        <div className="text-center space-y-1 pt-6 border-t border-border/30">
          <p className="text-[10px] text-muted-foreground/40 font-sans-body tracking-[0.12em]">
            {t("footer.division")}
          </p>
          <p className="text-[10px] text-muted-foreground/30 font-sans-body tracking-wider">
            © 2024 KGS Market Entry. {t("footer.rights")}
          </p>
        </div>
      </div>

      {/* Legal Notice — static block at the very bottom */}
      <div className="w-full bg-primary/5 border-t border-primary/10 px-6 py-6">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <p className="text-[11px] text-primary/70 font-sans-body font-medium tracking-widest uppercase">
            {t("footer.legal_title")}
          </p>
          <p className="text-[10px] text-muted-foreground/60 font-sans-body leading-relaxed tracking-wide">
            {t("footer.legal_text")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
