import { Link } from "react-router-dom";
import { ArrowRight, Globe, TrendingUp, Shield, Zap, BarChart3, Clock, Calendar, MapPin, BookOpen } from "lucide-react";
import AfricaGlobe from "@/components/platform/AfricaGlobe";
import AfricaSVGMap from "@/components/platform/AfricaSVGMap";
import OpportunityRadar from "@/components/platform/OpportunityRadar";
import OpportunityCard from "@/components/platform/OpportunityCard";
import EventCard from "@/components/platform/EventCard";
import PlatformLayout from "@/components/platform/PlatformLayout";
import ScrollReveal from "@/components/platform/ScrollReveal";
import { opportunities, events, insights } from "@/data/mockData";

import heroAfricaModern from "@/assets/hero-africa-modern.jpg";
import financialDistrict from "@/assets/financial-district.jpg";
import nairobiTechHub from "@/assets/nairobi-tech-hub.jpg";

const IMAGE_MAP: Record<string, string> = {
  "financial-district": financialDistrict,
  "nairobi-tech-hub": nairobiTechHub,
  "lagos-skyline": heroAfricaModern,
};

const HomePage = () => {
  const featuredOpps = opportunities.filter((o) => o.featured);

  return (
    <PlatformLayout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroAfricaModern} alt="African metropolis" className="w-full h-full object-cover hero-3d-pan" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal delay={150}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6">
                  Discover Opportunities{" "}
                  <span className="text-gradient-gold">Across Africa</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={250}>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                  Explore investments, economic programs, business events and market opportunities across the African continent.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={350}>
                <div className="flex flex-wrap gap-3">
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
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <div className="flex items-center gap-8 mt-10">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={14} className="text-primary" />
                    <span className="text-xs text-muted-foreground"><strong className="text-foreground">13</strong> Active Opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield size={14} className="text-primary" />
                    <span className="text-xs text-muted-foreground"><strong className="text-foreground">12</strong> Countries Tracked</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap size={14} className="text-primary" />
                    <span className="text-xs text-muted-foreground"><strong className="text-foreground">11</strong> Business Events</span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <div className="inline-flex items-center gap-2 text-[10px] text-muted-foreground tracking-widest uppercase mt-8 opacity-60">
                  <Globe size={10} />
                  African Market Intelligence Platform
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={400} className="hidden lg:block">
              <AfricaGlobe />
            </ScrollReveal>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Interactive Africa Map */}
      <section className="relative py-20 section-divider overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float animation-delay-400" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/3 rounded-full blur-2xl animate-float animation-delay-700" />
          <div className="absolute top-10 right-1/4 w-px h-40 bg-gradient-to-b from-transparent via-primary/15 to-transparent animate-float animation-delay-200" />
          <div className="absolute bottom-20 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-accent/15 to-transparent animate-float animation-delay-600" />
          <div className="absolute top-1/3 right-10 w-40 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-float animation-delay-800" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                  <BarChart3 size={12} />
                  Market Intelligence
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Interactive Africa Map</h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Click on any highlighted country to explore active opportunities, events and market insights. Our coverage spans 11 key African economies.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
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
              </ScrollReveal>
            </div>
            <ScrollReveal delay={200}>
              <AfricaSVGMap compact />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Opportunity Radar */}
      <ScrollReveal>
        <OpportunityRadar />
      </ScrollReveal>

      {/* Featured Opportunities */}
      <section className="relative py-20 section-divider overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={financialDistrict} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
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
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredOpps.map((opp, i) => (
              <ScrollReveal key={opp.id} delay={i * 120}>
                <OpportunityCard opportunity={opp} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 section-divider">
        <div className="container mx-auto px-6">
          <ScrollReveal>
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
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.slice(0, 3).map((evt, i) => (
              <ScrollReveal key={evt.id} delay={i * 120}>
                <EventCard event={evt} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Insights — visually enriched */}
      <section className="relative py-20 section-divider overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <img src={nairobiTechHub} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="inline-flex items-center gap-2 text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                  <BookOpen size={12} />
                  Intelligence
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Market Insights</h2>
                <p className="text-sm text-muted-foreground">Intelligence and analysis on African markets.</p>
              </div>
              <Link to="/insights" className="hidden md:inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:gap-2.5 transition-all">
                View all <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          {/* Featured insight large card */}
          <ScrollReveal delay={100}>
            <div className="glass-card rounded-xl overflow-hidden mb-6 group cursor-pointer card-lift">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-48 md:h-auto overflow-hidden">
                  <img
                    src={IMAGE_MAP[insights[0].image || "financial-district"]}
                    alt={insights[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card md:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent md:hidden" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] uppercase tracking-wider text-primary font-bold bg-primary/10 px-2 py-1 rounded border border-primary/20">Featured</span>
                    <span className="text-[10px] uppercase tracking-wider text-accent font-semibold">{insights[0].category}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{insights[0].title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-3 mb-4">{insights[0].summary}</p>
                  <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                    <span className="font-medium text-foreground/70">{insights[0].author}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1"><Clock size={9} /> {insights[0].readTime}</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {insights.slice(1, 4).map((article, i) => (
              <ScrollReveal key={article.id} delay={200 + i * 100}>
                <div className="glass-card rounded-lg overflow-hidden group card-lift hover:border-primary/30 cursor-pointer h-full flex flex-col">
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={IMAGE_MAP[article.image || "financial-district"]}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    <span className="absolute top-2 left-2 text-[9px] uppercase tracking-wider text-primary font-bold bg-background/80 backdrop-blur-sm px-2 py-0.5 rounded">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-sm font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">{article.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 flex-1">{article.summary}</p>
                    <div className="flex items-center gap-2 mt-3 text-[10px] text-muted-foreground">
                      <Clock size={9} /> {article.readTime}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 section-divider">
        <div className="container mx-auto px-6">
          <ScrollReveal>
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
          </ScrollReveal>
        </div>
      </section>
    </PlatformLayout>
  );
};

export default HomePage;
