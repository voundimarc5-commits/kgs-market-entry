import { Link } from "react-router-dom";
import { ArrowRight, Globe, TrendingUp, Shield, Zap, BarChart3 } from "lucide-react";
import AfricaGlobe from "@/components/platform/AfricaGlobe";
import AfricaSVGMap from "@/components/platform/AfricaSVGMap";
import OpportunityRadar from "@/components/platform/OpportunityRadar";
import OpportunityCard from "@/components/platform/OpportunityCard";
import EventCard from "@/components/platform/EventCard";
import PlatformLayout from "@/components/platform/PlatformLayout";
import { opportunities, events, insights } from "@/data/mockData";
import { Calendar, MapPin } from "lucide-react";

import lagosSkyline from "@/assets/lagos-skyline.jpg";
import financialDistrict from "@/assets/financial-district.jpg";

const HomePage = () => {
  const featuredOpps = opportunities.filter((o) => o.featured);

  return (
    <PlatformLayout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Hero background */}
        <div className="absolute inset-0">
          <img src={lagosSkyline} alt="African metropolis at night" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs text-primary bg-primary/10 backdrop-blur-sm px-3 py-1.5 rounded-full mb-6 border border-primary/20 animate-fade-in-up">
                <Globe size={12} />
                African Market Intelligence Platform
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6 animate-fade-in-up animation-delay-200">
                Discover Opportunities{" "}
                <span className="text-gradient-gold">Across Africa</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg animate-fade-in-up animation-delay-300">
                Explore investments, economic programs, business events and market opportunities across the African continent.
              </p>
              <div className="flex flex-wrap gap-3 animate-fade-in-up animation-delay-400">
                <Link
                  to="/opportunities"
                  className="btn-glow inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-md text-sm font-semibold transition-all"
                >
                  Explore Opportunities <ArrowRight size={16} />
                </Link>
                <Link
                  to="/newsletter"
                  className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm text-foreground px-7 py-3.5 rounded-md text-sm font-medium hover:bg-secondary transition-colors border border-border"
                >
                  Join the Opportunity Brief
                </Link>
              </div>

              <div className="flex items-center gap-8 mt-10 animate-fade-in-up animation-delay-600">
                <div className="flex items-center gap-2">
                  <TrendingUp size={14} className="text-primary" />
                  <span className="text-xs text-muted-foreground"><strong className="text-foreground">10</strong> Active Opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield size={14} className="text-primary" />
                  <span className="text-xs text-muted-foreground"><strong className="text-foreground">11</strong> Countries Tracked</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={14} className="text-primary" />
                  <span className="text-xs text-muted-foreground"><strong className="text-foreground">10</strong> Business Events</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block animate-fade-in-up animation-delay-400">
              <AfricaGlobe />
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Interactive Africa Map */}
      <section className="py-20 section-divider">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                <BarChart3 size={12} />
                Market Intelligence
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Interactive Africa Map</h2>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Click on any highlighted country to explore active opportunities, events and market insights. Our coverage spans 11 key African economies.
              </p>
              <div className="flex items-center gap-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-accent animate-dot-blink" /> Active opportunities
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary animate-dot-blink animation-delay-300" /> Upcoming events
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-secondary border border-border" /> Untracked
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
      <section className="relative py-20 section-divider overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={financialDistrict} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                <TrendingUp size={12} />
                Featured
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Featured Opportunities</h2>
              <p className="text-sm text-muted-foreground">High-impact programs and investments across the continent.</p>
            </div>
            <Link to="/opportunities" className="hidden md:inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:gap-2.5 transition-all">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredOpps.map((opp) => (
              <OpportunityCard key={opp.id} opportunity={opp} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 section-divider">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                <Calendar size={12} />
                Events
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Upcoming African Business Events</h2>
              <p className="text-sm text-muted-foreground">Key conferences, summits, and networking opportunities.</p>
            </div>
            <Link to="/events" className="hidden md:inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:gap-2.5 transition-all">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.slice(0, 3).map((evt) => (
              <EventCard key={evt.id} event={evt} />
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="py-20 section-divider">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Market Insights</h2>
              <p className="text-sm text-muted-foreground">Intelligence and analysis on African markets.</p>
            </div>
            <Link to="/insights" className="hidden md:inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:gap-2.5 transition-all">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {insights.map((article) => (
              <div key={article.id} className="glass-card rounded-lg p-5 group card-lift hover:border-primary/30">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] uppercase tracking-wider text-primary font-semibold">{article.category}</span>
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
      <section className="py-20 section-divider">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-xl p-10 md:p-16 text-center animate-glow-pulse">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Stay Ahead of African Opportunities
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
              Receive curated opportunities, business events and investment insights across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              />
              <button className="btn-glow bg-primary text-primary-foreground px-6 py-2.5 rounded-md text-sm font-semibold transition-all">
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
