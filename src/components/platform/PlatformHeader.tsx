import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import kgsLogo from "@/assets/kgs-market-entry-logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Opportunities", path: "/opportunities" },
  { label: "Countries", path: "/countries" },
  { label: "Events", path: "/events" },
  { label: "Insights", path: "/insights" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
];

const PlatformHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={kgsLogo} alt="KGS Market Entry" className="w-20 h-20 object-contain logo-spin-slow" />
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-wide text-foreground">KGS Market Entry</span>
            <span className="text-[9px] text-muted-foreground tracking-[0.12em] uppercase">Kora Global Systems</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm transition-colors ${
                location.pathname === item.path
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/newsletter"
            className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Join Brief
          </Link>
        </nav>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-5 pt-3 space-y-2">
          {navItems.map((item) => (
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
              {item.label}
            </Link>
          ))}
          <Link
            to="/newsletter"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-sm font-medium bg-primary text-primary-foreground px-4 py-2.5 rounded-md mt-3 text-center"
          >
            Join the Opportunity Brief
          </Link>
        </div>
      )}
    </header>
  );
};

export default PlatformHeader;
