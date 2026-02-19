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

  // Combine legal text into a single scrolling line
  const legalScrollText = t("footer.legal_text").replace(/\n\n/g, " — ");

  return (
    <footer className="border-t border-border/50 bg-secondary/20">
      <div className="container mx-auto px-6 py-14">
        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="w-10 h-10 mx-auto mb-4 rounded-full border border-primary/20 flex items-center justify-center">
            <span className="font-serif-display text-primary font-bold text-[10px] tracking-[0.2em]">KGS</span>
          </div>
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

        {/* Bottom line */}
        <div className="text-center space-y-1 pt-6 border-t border-border/30">
          <p className="text-[10px] text-muted-foreground/40 font-sans-body tracking-[0.12em]">
            {t("footer.division")}
          </p>
          <p className="text-[10px] text-muted-foreground/30 font-sans-body tracking-wider">
            © 2024 KGS Flow. {t("footer.rights")}
          </p>
        </div>
      </div>

      {/* Legal Notice — scrolling banner at the very bottom */}
      <div className="w-full bg-primary/5 border-t border-primary/10 overflow-hidden py-2.5">
        <div className="animate-scroll-x whitespace-nowrap">
          <span className="text-[11px] text-primary/60 font-sans-body tracking-wide mx-16">
            {t("footer.legal_title")} — {legalScrollText}
          </span>
          <span className="text-[11px] text-primary/60 font-sans-body tracking-wide mx-16">
            {t("footer.legal_title")} — {legalScrollText}
          </span>
          <span className="text-[11px] text-primary/60 font-sans-body tracking-wide mx-16">
            {t("footer.legal_title")} — {legalScrollText}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
