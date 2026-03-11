import { useParams, Link } from "react-router-dom";
import PlatformLayout from "@/components/platform/PlatformLayout";
import ScrollReveal from "@/components/platform/ScrollReveal";
import LeadCaptureForm from "@/components/platform/LeadCaptureForm";
import { opportunities } from "@/data/mockData";
import ParallaxHero from "@/components/platform/ParallaxHero";
import { ArrowLeft, MapPin, Calendar, DollarSign, Briefcase, ExternalLink, TrendingUp, Lightbulb } from "lucide-react";

const images = import.meta.glob("@/assets/*.jpg", { eager: true, import: "default" }) as Record<string, string>;

const getImageForSector = (sector: string): string | undefined => {
  const mapping: Record<string, string> = {
    Finance: "financial-district",
    Energy: "solar-farm-morocco",
    "Renewable Energy": "solar-farm-morocco",
    Technology: "nairobi-tech-hub",
    "Real Estate": "kigali-innovation",
    Agriculture: "agribusiness",
    Mining: "mining-tech",
    Infrastructure: "port-infrastructure",
    "Artificial Intelligence": "smart-city",
  };
  const key = mapping[sector];
  if (!key) return undefined;
  const match = Object.entries(images).find(([path]) => path.includes(key));
  return match?.[1];
};

const OpportunityDetailPage = () => {
  const { id } = useParams();
  const opportunity = opportunities.find((o) => o.id === id);

  if (!opportunity) {
    return (
      <PlatformLayout>
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Opportunity not found</h1>
          <Link to="/opportunities" className="text-primary text-sm">← Back to opportunities</Link>
        </div>
      </PlatformLayout>
    );
  }

  const bgImage = getImageForSector(opportunity.sector);

  return (
    <PlatformLayout>
      <ParallaxHero image={bgImage}>
        <div className="container mx-auto max-w-4xl">
          <Link to="/opportunities" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft size={14} /> Back to opportunities
          </Link>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] uppercase tracking-wider text-primary-foreground font-semibold bg-primary px-2.5 py-1 rounded-sm">
              {opportunity.type}
            </span>
            <span className="text-[10px] uppercase tracking-wider font-medium bg-accent/80 text-accent-foreground px-2 py-1 rounded-sm">
              {opportunity.country}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">{opportunity.title}</h1>
        </div>
      </ParallaxHero>

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal>
            <p className="text-base text-muted-foreground mb-8">{opportunity.summary}</p>
          </ScrollReveal>

          {/* Key Info */}
          <ScrollReveal delay={100}>
            <div className="glass-card rounded-lg p-6 mb-8">
              <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Key Information</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1"><MapPin size={12} /> Country</div>
                  <p className="text-sm font-medium text-foreground">{opportunity.country}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1"><Briefcase size={12} /> Sector</div>
                  <p className="text-sm font-medium text-foreground">{opportunity.sector}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1"><Calendar size={12} /> Deadline</div>
                  <p className="text-sm font-medium text-foreground">{new Date(opportunity.deadline).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
                </div>
                {opportunity.investmentSize && (
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1"><DollarSign size={12} /> Investment Size</div>
                    <p className="text-sm font-medium text-foreground">{opportunity.investmentSize}</p>
                  </div>
                )}
              </div>
              {opportunity.source && (
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <ExternalLink size={12} /> Source: {opportunity.source}
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Overview */}
          {opportunity.overview && (
            <ScrollReveal delay={200}>
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-foreground mb-3">Opportunity Overview</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{opportunity.overview}</p>
              </div>
            </ScrollReveal>
          )}

          {/* Investment Context */}
          {opportunity.investmentContext && (
            <ScrollReveal delay={250}>
              <div className="glass-card rounded-lg p-6 mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={16} className="text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">Investment Context</h2>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{opportunity.investmentContext}</p>
              </div>
            </ScrollReveal>
          )}

          {/* How to Participate */}
          {opportunity.howToParticipate && (
            <ScrollReveal delay={300}>
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb size={16} className="text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">How to Participate</h2>
                </div>
                <ol className="space-y-3">
                  {opportunity.howToParticipate.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-medium shrink-0 mt-0.5">{i + 1}</span>
                      <span className="text-sm text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </ScrollReveal>
          )}

          {/* Lead Capture Form */}
          <ScrollReveal delay={400}>
            <LeadCaptureForm opportunityTitle={opportunity.title} />
          </ScrollReveal>
        </div>
      </section>
    </PlatformLayout>
  );
};

export default OpportunityDetailPage;
