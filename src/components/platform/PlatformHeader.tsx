import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import kgsLogo from "@/assets/kgs-market-entry-logo.png";

const navKeys = [
  { key: "platform.nav.home", path: "/" },
  { key: "platform.nav.opportunities", path: "/opportunities" },
  { key: "platform.nav.countries", path: "/countries" },
  { key: "platform.nav.events", path: "/events" },
  { key: "platform.nav.insights", path: "/insights" },
  { key: "platform.nav.services", path: "/services" },
  { key: "platform.nav.about", path: "/about" },
];

const PlatformHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={kgsLogo} alt="KGS Market Entry" className="w-[108px] h-[108px] object-contain logo-rotate-slow" />
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-wide text-foreground">KGS Market Entry</span>
            <span className="text-[9px] text-muted-foreground tracking-[0.12em] uppercase">Kora Global Systems</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navKeys.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm transition-colors ${
                location.pathname === item.path
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
          <Link
            to="/newsletter"
            className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            {t("platform.nav.join_brief")}
          </Link>

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors border border-border rounded-md px-2.5 py-1.5"
          >
            <Globe size={12} />
            {lang === "en" ? "FR" : "EN"}
          </button>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          {/* Mobile language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            className="flex items-center gap-1 text-xs text-muted-foreground border border-border rounded-md px-2 py-1.5"
          >
            <Globe size={11} />
            {lang === "en" ? "FR" : "EN"}
          </button>
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-5 pt-3 space-y-2">
          {navKeys.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm py-2 border-b border-border/30 transition-colors ${
                location.pathname === item.path
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
          <Link
            to="/newsletter"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-sm font-medium bg-primary text-primary-foreground px-4 py-2.5 rounded-md mt-3 text-center"
          >
            {t("platform.nav.join_brief_full")}
          </Link>
        </div>
      )}
    </header>
  );
};

export default PlatformHeader;
