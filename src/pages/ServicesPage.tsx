import PlatformLayout from "@/components/platform/PlatformLayout";
import { Link } from "react-router-dom";
import { Target, Compass, Brain, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Project Structuring",
    description: "Define scope, reduce exposure, and create structured engagement frameworks before capital is deployed.",
  },
  {
    icon: Compass,
    title: "Market Entry Strategy",
    description: "Navigate regulatory environments, identify market positioning, and develop actionable go-to-market strategies across African markets.",
  },
  {
    icon: Brain,
    title: "Opportunity Intelligence",
    description: "Access curated intelligence on investment programs, sovereign bonds, innovation initiatives, and business events.",
  },
  {
    icon: Users,
    title: "Partner Identification",
    description: "Identify and vet potential partners, service providers, and institutional stakeholders for your project.",
  },
];

const ServicesPage = () => {
  return (
    <PlatformLayout>
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Market Entry Services</h1>
          <p className="text-sm text-muted-foreground mb-12 max-w-xl">
            Strategic structuring and advisory services for organizations entering or expanding across African markets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {services.map((service) => (
              <div key={service.title} className="glass-card rounded-lg p-6 hover:border-primary/30 transition-all">
                <service.icon size={24} className="text-primary mb-4" />
                <h3 className="text-base font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="glass-card rounded-xl p-10 text-center glow-gold">
            <h2 className="text-2xl font-semibold text-foreground mb-3">Ready to enter the African market?</h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
              Our team provides structured advisory to help you navigate opportunities with clarity.
            </p>
            <a
              href="mailto:contact@koraglobalsystems.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Request Consultation <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </PlatformLayout>
  );
};

export default ServicesPage;
