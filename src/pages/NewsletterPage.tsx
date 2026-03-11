import PlatformLayout from "@/components/platform/PlatformLayout";
import { Check } from "lucide-react";

const NewsletterPage = () => {
  return (
    <PlatformLayout>
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">The African Opportunity Brief</h1>
          <p className="text-sm text-muted-foreground mb-12 max-w-xl">
            Curated intelligence on African opportunities, delivered to your inbox.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Free Tier */}
            <div className="glass-card rounded-lg p-8">
              <h3 className="text-lg font-semibold text-foreground mb-1">Free</h3>
              <p className="text-3xl font-bold text-foreground mb-1">€0<span className="text-sm font-normal text-muted-foreground"> /month</span></p>
              <p className="text-xs text-muted-foreground mb-6">Essential opportunity updates</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-muted-foreground"><Check size={14} className="text-primary shrink-0" /> Weekly opportunity highlights</li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground"><Check size={14} className="text-primary shrink-0" /> Event updates</li>
              </ul>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button className="bg-secondary text-foreground border border-border px-4 py-2.5 rounded-md text-sm font-medium hover:bg-secondary/80 transition-colors">
                  Subscribe Free
                </button>
              </div>
            </div>

            {/* Premium Tier */}
            <div className="glass-card rounded-lg p-8 border-primary/30 glow-gold relative">
              <span className="absolute -top-3 left-6 text-[10px] uppercase tracking-wider text-primary-foreground bg-primary px-3 py-1 rounded-full font-medium">Recommended</span>
              <h3 className="text-lg font-semibold text-foreground mb-1">Premium</h3>
              <p className="text-3xl font-bold text-foreground mb-1">€8<span className="text-sm font-normal text-muted-foreground"> /month</span></p>
              <p className="text-xs text-muted-foreground mb-1">or €70 /year</p>
              <p className="text-xs text-muted-foreground mb-6">Full intelligence access</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-muted-foreground"><Check size={14} className="text-primary shrink-0" /> Early access opportunities</li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground"><Check size={14} className="text-primary shrink-0" /> Market intelligence insights</li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground"><Check size={14} className="text-primary shrink-0" /> Opportunity alerts</li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground"><Check size={14} className="text-primary shrink-0" /> Priority event notifications</li>
              </ul>
              <button className="w-full bg-primary text-primary-foreground px-4 py-2.5 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                Get Premium
              </button>
            </div>
          </div>
        </div>
      </section>
    </PlatformLayout>
  );
};

export default NewsletterPage;
