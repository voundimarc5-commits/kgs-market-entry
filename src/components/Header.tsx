import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";
import KGSCoin from "./KGSCoin";

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { key: "nav.scope", href: "#scope" },
    { key: "nav.payment", href: "#payment" },
    { key: "nav.contact", href: "#contact" },
    { key: "nav.faq", href: "#faq" },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 min-w-0">
          <KGSCoin size={44} className="md:w-12 md:h-12 shrink-0" />
          <div className="flex flex-col leading-none min-w-0">
            <span className="font-serif-display text-sm md:text-lg font-bold text-foreground tracking-wide truncate">KGS FLOW</span>
            <span className="text-[8px] md:text-[10px] font-sans-body text-muted-foreground tracking-widest uppercase truncate">Kora Global Systems</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollTo(item.href)}
              className="text-sm font-sans-body text-muted-foreground hover:text-primary transition-colors"
            >
              {t(item.key)}
            </button>
          ))}

          <div className="flex items-center gap-1 border border-border rounded-full px-1 py-0.5">
            <button
              onClick={() => setLang("fr")}
              className={`text-xs px-2 py-1 rounded-full transition-colors ${
                lang === "fr" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLang("en")}
              className={`text-xs px-2 py-1 rounded-full transition-colors ${
                lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => scrollTo("#contact")}
            className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2 rounded-sm hover:bg-primary/90 transition-colors"
          >
            {t("nav.cta")}
          </button>
        </nav>

        <div className="flex md:hidden items-center gap-3">
          <div className="flex items-center gap-1 border border-border rounded-full px-1 py-0.5">
            <button
              onClick={() => setLang("fr")}
              className={`text-[10px] px-2 py-0.5 rounded-full transition-colors ${
                lang === "fr" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLang("en")}
              className={`text-[10px] px-2 py-0.5 rounded-full transition-colors ${
                lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              EN
            </button>
          </div>
          <button className="text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 pb-5 pt-3 space-y-3 animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollTo(item.href)}
              className="block w-full text-left text-sm font-sans-body text-muted-foreground hover:text-primary transition-colors py-1.5 border-b border-border/30 last:border-0"
            >
              {t(item.key)}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="block w-full text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-sm mt-2"
          >
            {t("nav.cta")}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
