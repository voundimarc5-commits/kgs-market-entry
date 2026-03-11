import PlatformLayout from "@/components/platform/PlatformLayout";
import AfricaSVGMap from "@/components/platform/AfricaSVGMap";
import { countries } from "@/data/mockData";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CountriesPage = () => {
  return (
    <PlatformLayout>
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Countries</h1>
          <p className="text-sm text-muted-foreground mb-10">
            Explore African markets with active opportunities and business events.
          </p>

          {/* Interactive Map */}
          <div className="mb-12 glass-card rounded-xl p-6">
            <AfricaSVGMap />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {countries.map((country) => (
              <Link
                key={country.code}
                to={`/countries/${country.code}`}
                className="glass-card rounded-lg p-5 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-primary" />
                    <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">{country.name}</h3>
                  </div>
                  <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-xs text-muted-foreground mb-4">{country.overview}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {country.keySectors.map((s) => (
                    <span key={s} className="text-[10px] bg-secondary text-muted-foreground px-2 py-0.5 rounded">{s}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{country.opportunities} opportunities</span>
                  <span>{country.events} events</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PlatformLayout>
  );
};

export default CountriesPage;
