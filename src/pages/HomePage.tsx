import { Link } from "react-router-dom";
import { ArrowRight, Globe, TrendingUp, Shield } from "lucide-react";
import AfricaGlobe from "@/components/platform/AfricaGlobe";
import AfricaSVGMap from "@/components/platform/AfricaSVGMap";
import OpportunityRadar from "@/components/platform/OpportunityRadar";
import OpportunityCard from "@/components/platform/OpportunityCard";
import PlatformLayout from "@/components/platform/PlatformLayout";
import { opportunities, events, insights } from "@/data/mockData";
import { Calendar, MapPin } from "lucide-react";

const HomePage = () => {
  const featuredOpps = opportunities.filter((o) => o.featured);

  return (
    <PlatformLayout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-6">
                <Globe size={12} />
                African Market Intelligence Platform
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Discover Opportunities{" "}
                <span className="text-gradient-gold">Across Africa</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Explore investments, economic programs, business events and market opportunities across the African continent.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/opportunities"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Explore Opportunities <ArrowRight size={16} />
                </Link>
                <Link
                  to="/newsletter"
                  className="inline-flex items-center gap-2 bg-secondary text-foreground px-6 py-3 rounded-md text-sm font-medium hover:bg-secondary/80 transition-colors border border-border"
                >
                  Join the Opportunity Brief
                </Link>
              </div>

              <div className="flex items-center gap-6 mt-10">
                <div className="flex items-center gap-2">
                  <TrendingUp size={14} className="text-primary" />
                  <span className="text-xs text-muted-foreground">8 Active Opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield size={14} className="text-primary" />
                  <span className="text-xs text-muted-foreground">10 Countries Tracked</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <AfricaGlobe />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Africa Map */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">Interactive Africa Map</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Click on any highlighted country to explore active opportunities, events and market insights.
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-accent" /> Tracked markets
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-primary animate-pulse" /> Active opportunities
                </div>
              </div>
            </div>
            <AfricaSVGMap compact />
          </div>
        </div>
      </section>

      {/* Opportunity Radar */}
      <OpportunityRadar />

      {/* Featured Opportunities */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">Featured Opportunities</h2>
              <p className="text-sm text-muted-foreground">High-impact programs and investments across the continent.</p>
            </div>
            <Link to="/opportunities" className="hidden md:inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:gap-2.5 transition-all">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredOpps.map((opp) => (
              <OpportunityCard key={opp.id} opportunity={opp} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">Upcoming African Business Events</h2>
              <p className="text-sm text-muted-foreground">Key conferences, summits, and networking opportunities.</p>
            </div>
            <Link to="/events" className="hidden md:inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:gap-2.5 transition-all">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {events.slice(0, 3).map((evt) => (
              <div key={evt.id} className="glass-card rounded-lg p-5">
                <span className="text-[10px] uppercase tracking-wider text-primary font-medium bg-primary/10 px-2 py-1 rounded">{evt.sector}</span>
                <h3 className="text-sm font-semibold text-foreground mt-3 mb-2">{evt.name}</h3>
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin size={11} /> {evt.city}, {evt.country}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar size={11} /> {new Date(evt.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Organized by {evt.organizer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">Market Insights</h2>
              <p className="text-sm text-muted-foreground">Intelligence and analysis on African markets.</p>
            </div>
            <Link to="/insights" className="hidden md:inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:gap-2.5 transition-all">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {insights.map((article) => (
              <div key={article.id} className="glass-card rounded-lg p-5 group hover:border-primary/30 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] uppercase tracking-wider text-primary">{article.category}</span>
                  <span className="text-[10px] text-muted-foreground">• {article.readTime}</span>
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-3">{article.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-xl p-10 md:p-16 text-center glow-gold">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
              Stay Ahead of African Opportunities
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
              Receive curated opportunities, business events and investment insights across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </PlatformLayout>
  );
};

export default HomePage;
