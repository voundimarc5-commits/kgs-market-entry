import { useLanguage } from "@/contexts/LanguageContext";
import { Mail } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  const navItems = [
    { key: "nav.process", href: "#process" },
    { key: "nav.scope", href: "#scope" },
    { key: "nav.payment", href: "#payment" },
    { key: "nav.contact", href: "#contact" },
    { key: "nav.faq", href: "#faq" },
  ];

  return (
    <footer className="border-t border-border/50 py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="w-10 h-10 mx-auto mb-5 rounded-full border border-primary/20 flex items-center justify-center">
            <span className="font-serif-display text-primary font-bold text-[10px] tracking-[0.2em]">KGS</span>
          </div>
          <p className="text-xs text-muted-foreground/80 font-sans-body leading-relaxed tracking-wide">
            {t("footer.disclaimer")}
          </p>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-[11px] text-muted-foreground/70 hover:text-primary transition-colors font-sans-body tracking-wider uppercase"
            >
              {t(item.key)}
            </a>
          ))}
        </div>

        {/* Presence */}
        <div className="text-center mb-6">
          <p className="text-[11px] text-muted-foreground/60 font-sans-body tracking-[0.15em]">
            {t("footer.presence")}
          </p>
        </div>

        {/* Contact */}
        <div className="flex justify-center mb-12">
          <a
            href="mailto:contact@koraglobalsystems.com"
            className="inline-flex items-center gap-2.5 text-[11px] text-muted-foreground/70 hover:text-primary transition-colors font-sans-body tracking-wider"
          >
            <Mail size={13} strokeWidth={1.5} />
            contact@koraglobalsystems.com
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-16 h-px bg-border/50" />
          <div className="w-1.5 h-1.5 rotate-45 border border-primary/30" />
          <div className="w-16 h-px bg-border/50" />
        </div>

        {/* Legal Notice */}
        <div className="max-w-3xl mx-auto mb-14">
          <h3 className="font-serif-display text-sm font-semibold text-foreground/80 text-center mb-6 tracking-[0.15em] uppercase">
            {t("footer.legal_title")}
          </h3>
          <div className="text-[11px] text-muted-foreground/60 font-sans-body leading-[1.8] whitespace-pre-line text-center tracking-wide">
            {t("footer.legal_text")}
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center space-y-2 pt-4 border-t border-border/30">
          <p className="text-[11px] text-muted-foreground/50 font-sans-body tracking-[0.12em] pt-6">
            {t("footer.division")}
          </p>
          <p className="text-[10px] text-muted-foreground/35 font-sans-body tracking-wider">
            © 2024 KGS Flow. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
