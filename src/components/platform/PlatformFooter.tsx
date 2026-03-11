import { Link } from "react-router-dom";
import kgsLogo from "@/assets/kgs-market-entry-logo.png";

const PlatformFooter = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">K</span>
              </div>
              <span className="text-sm font-semibold text-foreground">KGS Market Entry</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              African Market Intelligence & Opportunity Platform by Kora Global Systems.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Platform</h4>
            <div className="space-y-2">
              <Link to="/opportunities" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Opportunities</Link>
              <Link to="/countries" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Countries</Link>
              <Link to="/events" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Events</Link>
              <Link to="/insights" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Insights</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Company</h4>
            <div className="space-y-2">
              <Link to="/services" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Services</Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link to="/newsletter" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Newsletter</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Legal</h4>
            <div className="space-y-2">
              <Link to="/legal-notice" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Legal Notice</Link>
              <Link to="/terms-of-use" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Use</Link>
              <Link to="/privacy-policy" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Kora Global Systems. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            KGS Market Entry provides advisory and structuring services only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PlatformFooter;
