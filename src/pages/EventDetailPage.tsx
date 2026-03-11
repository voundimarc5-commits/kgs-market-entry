import { useParams, Link } from "react-router-dom";
import PlatformLayout from "@/components/platform/PlatformLayout";
import ScrollReveal from "@/components/platform/ScrollReveal";
import { events } from "@/data/mockData";
import ParallaxHero from "@/components/platform/ParallaxHero";
import { ArrowLeft, MapPin, Calendar, Users, Briefcase, Globe, CheckCircle, ExternalLink } from "lucide-react";

const images = import.meta.glob("@/assets/*.jpg", { eager: true, import: "default" }) as Record<string, string>;

const getImageForEvent = (sector: string): string | undefined => {
  const mapping: Record<string, string> = {
    "Finance & Investment": "financial-district",
    Technology: "nairobi-tech-hub",
    "Innovation & Tech": "kigali-innovation",
    "Energy & Climate": "solar-farm-morocco",
    Startup: "nairobi-tech-hub",
    "Digital Economy": "smart-city",
    "AI & Robotics": "smart-city",
    "Venture Capital": "financial-district",
    "Mining & Resources": "mining-tech",
    Infrastructure: "port-infrastructure",
  };
  const key = mapping[sector];
  if (!key) return undefined;
  const match = Object.entries(images).find(([path]) => path.includes(key));
  return match?.[1];
};

const EventDetailPage = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <PlatformLayout>
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Event not found</h1>
          <Link to="/events" className="text-primary text-sm">← Back to events</Link>
        </div>
      </PlatformLayout>
    );
  }

  const bgImage = getImageForEvent(event.sector);

  return (
    <PlatformLayout>
      <ParallaxHero image={bgImage}>
        <div className="container mx-auto max-w-4xl">
          <Link to="/events" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft size={14} /> Back to events
          </Link>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] uppercase tracking-wider text-primary-foreground font-semibold bg-primary px-2.5 py-1 rounded-sm">
              {event.sector}
            </span>
            {event.badge && (
              <span className="text-[10px] uppercase tracking-wider font-medium bg-accent/80 text-accent-foreground px-2 py-1 rounded-sm">
                {event.badge}
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">{event.name}</h1>
        </div>
      </ParallaxHero>

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Event Overview */}
          <ScrollReveal>
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-foreground mb-3">Event Overview</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {event.description || `${event.name} is a premier gathering of industry leaders, investors, entrepreneurs and policymakers in ${event.city}, ${event.country}. The event brings together key stakeholders from the ${event.sector.toLowerCase()} sector to explore partnerships, share insights and drive economic growth across Africa.`}
              </p>
            </div>
          </ScrollReveal>

          {/* Key Information */}
          <ScrollReveal delay={100}>
            <div className="glass-card rounded-lg p-6 mb-8">
              <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Key Information</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1"><MapPin size={12} /> Location</div>
                  <p className="text-sm font-medium text-foreground">{event.city}, {event.country}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1"><Calendar size={12} /> Date</div>
                  <p className="text-sm font-medium text-foreground">
                    {new Date(event.date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1"><Users size={12} /> Organizer</div>
                  <p className="text-sm font-medium text-foreground">{event.organizer}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1"><Briefcase size={12} /> Sector</div>
                  <p className="text-sm font-medium text-foreground">{event.sector}</p>
                </div>
                {event.website && (
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1"><Globe size={12} /> Website</div>
                    <a href={event.website} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline">{event.website}</a>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Why Attend */}
          <ScrollReveal delay={200}>
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-foreground mb-3">Why Attend</h2>
              <ul className="space-y-3">
                {(event.whyAttend || [
                  `Connect with leading ${event.sector.toLowerCase()} stakeholders across Africa`,
                  `Discover investment opportunities and strategic partnerships in ${event.country}`,
                  "Access exclusive market intelligence and trend analysis from industry experts",
                  "Network with entrepreneurs, institutional investors and government representatives",
                ]).map((reason, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Who Should Attend */}
          <ScrollReveal delay={300}>
            <div className="mb-10">
              <h2 className="text-lg font-semibold text-foreground mb-3">Who Should Attend</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {(event.audience || ["Entrepreneurs", "Investors", "Startups", "Corporates"]).map((type) => (
                  <div key={type} className="glass-card rounded-lg p-4 text-center">
                    <p className="text-sm font-medium text-foreground">{type}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Registration CTA */}
          <ScrollReveal delay={400}>
            <div className="glass-card rounded-xl p-8 text-center animate-glow-pulse">
              <h2 className="text-xl font-bold text-foreground mb-3">Interested in attending?</h2>
              <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                Register for {event.name} or contact KGS Market Entry for assistance with event access and introductions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {event.website && (
                  <a
                    href={event.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glow inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-semibold transition-all"
                  >
                    <ExternalLink size={14} /> Visit Official Website
                  </a>
                )}
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 bg-secondary text-foreground px-6 py-3 rounded-md text-sm font-medium hover:bg-secondary/80 transition-colors border border-border"
                >
                  Contact KGS Market Entry
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PlatformLayout>
  );
};

export default EventDetailPage;
