import { useParams, Link } from "react-router-dom";
import PlatformLayout from "@/components/platform/PlatformLayout";
import { opportunities } from "@/data/mockData";
import { ArrowLeft, MapPin, Calendar, DollarSign, Briefcase, ExternalLink } from "lucide-react";

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

  return (
    <PlatformLayout>
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link to="/opportunities" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft size={14} /> Back to opportunities
          </Link>

          <div className="mb-8">
            <span className="text-[10px] uppercase tracking-wider text-primary font-medium bg-primary/10 px-2 py-1 rounded">
              {opportunity.type}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">{opportunity.title}</h1>
            <p className="text-base text-muted-foreground">{opportunity.summary}</p>
          </div>

          {/* Key Info */}
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

          {/* Overview */}
          {opportunity.overview && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-foreground mb-3">Opportunity Overview</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{opportunity.overview}</p>
            </div>
          )}

          {/* How to Participate */}
          {opportunity.howToParticipate && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-foreground mb-3">How to Participate</h2>
              <ol className="space-y-3">
                {opportunity.howToParticipate.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-medium shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-sm text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* CTA */}
          <div className="glass-card rounded-lg p-8 text-center glow-gold">
            <h3 className="text-lg font-semibold text-foreground mb-2">Need help entering this market?</h3>
            <p className="text-sm text-muted-foreground mb-4">Our team can help you navigate this opportunity.</p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Contact KGS Market Entry
            </Link>
          </div>
        </div>
      </section>
    </PlatformLayout>
  );
};

export default OpportunityDetailPage;
