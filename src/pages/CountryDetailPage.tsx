import { useParams, Link } from "react-router-dom";
import PlatformLayout from "@/components/platform/PlatformLayout";
import { countries, opportunities, events } from "@/data/mockData";
import { ArrowLeft, MapPin, Calendar, ArrowRight } from "lucide-react";

const CountryDetailPage = () => {
  const { code } = useParams();
  const country = countries.find((c) => c.code === code);

  if (!country) {
    return (
      <PlatformLayout>
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Country not found</h1>
          <Link to="/countries" className="text-primary text-sm">← Back to countries</Link>
        </div>
      </PlatformLayout>
    );
  }

  const countryOpps = opportunities.filter((o) => o.country === country.name);
  const countryEvents = events.filter((e) => e.country === country.name);

  return (
    <PlatformLayout>
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link to="/countries" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft size={14} /> Back to countries
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <MapPin size={20} className="text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">{country.name}</h1>
          </div>
          <p className="text-base text-muted-foreground mb-8">{country.overview}</p>

          {/* Key Sectors */}
          <div className="glass-card rounded-lg p-6 mb-8">
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Key Sectors</h2>
            <div className="flex flex-wrap gap-2">
              {country.keySectors.map((s) => (
                <span key={s} className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-md">{s}</span>
              ))}
            </div>
          </div>

          {/* Opportunities */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">Active Opportunities ({countryOpps.length})</h2>
            {countryOpps.length > 0 ? (
              <div className="space-y-3">
                {countryOpps.map((opp) => (
                  <Link key={opp.id} to={`/opportunities/${opp.id}`} className="glass-card rounded-lg p-4 flex items-center justify-between hover:border-primary/30 transition-all group block">
                    <div>
                      <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{opp.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{opp.sector} • Deadline: {new Date(opp.deadline).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</p>
                    </div>
                    <ArrowRight size={14} className="text-muted-foreground shrink-0" />
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No active opportunities at this time.</p>
            )}
          </div>

          {/* Events */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">Upcoming Events ({countryEvents.length})</h2>
            {countryEvents.length > 0 ? (
              <div className="space-y-3">
                {countryEvents.map((evt) => (
                  <div key={evt.id} className="glass-card rounded-lg p-4">
                    <h3 className="text-sm font-medium text-foreground">{evt.name}</h3>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground"><MapPin size={11} /> {evt.city}</div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar size={11} /> {new Date(evt.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No upcoming events at this time.</p>
            )}
          </div>
        </div>
      </section>
    </PlatformLayout>
  );
};

export default CountryDetailPage;
