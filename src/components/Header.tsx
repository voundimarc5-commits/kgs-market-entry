import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";
import KGSCoin from "./KGSCoin";

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { key: "nav.process", href: "#process" },
    { key: "nav.scope", href: "#scope" },
    { key: "nav.payment", href: "#payment" },
    { key: "nav.contact", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <KGSCoin size={40} />
        </a>

        {/* Desktop nav */}
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

          {/* Language switcher */}
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

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollTo(item.href)}
              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t(item.key)}
            </button>
          ))}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang("fr")}
              className={`text-xs px-3 py-1 rounded-full border ${
                lang === "fr" ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLang("en")}
              className={`text-xs px-3 py-1 rounded-full border ${
                lang === "en" ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground"
              }`}
            >
              EN
            </button>
          </div>
          <button
            onClick={() => scrollTo("#contact")}
            className="block w-full text-sm font-medium bg-primary text-primary-foreground px-5 py-2 rounded-sm"
          >
            {t("nav.cta")}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
