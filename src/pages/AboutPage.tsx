import PlatformLayout from "@/components/platform/PlatformLayout";

const AboutPage = () => {
  return (
    <PlatformLayout>
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About KGS Market Entry</h1>
          
          <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
            <p>
              KGS Market Entry is an African market intelligence platform designed to centralize economic opportunities, investment programs and strategic events across the continent.
            </p>
            <p>
              The platform serves as a discovery and intelligence hub for investors, institutions, and organizations seeking structured access to African markets. We aggregate, verify, and present opportunities spanning sovereign bonds, innovation programs, business events, and sector-specific initiatives.
            </p>
            <p>
              Our mission is to bring transparency, structure, and accessibility to the African opportunity landscape — enabling informed decision-making for those looking to invest, partner, or expand across the continent.
            </p>

            <div className="glass-card rounded-lg p-6 mt-8">
              <h2 className="text-base font-semibold text-foreground mb-3">Part of Kora Global Systems</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                KGS Market Entry operates as a strategic division of Kora Global Systems, a structuring and advisory ecosystem focused on connecting international stakeholders with African markets through clarity, compliance, and structured frameworks.
              </p>
            </div>

            <div className="glass-card rounded-lg p-6">
              <h2 className="text-base font-semibold text-foreground mb-3">Disclaimer</h2>
              <p className="text-xs text-muted-foreground leading-relaxed">
                KGS Market Entry provides advisory and structuring services only. The platform aggregates publicly available information and does not constitute financial advice. Investment decisions should be made with proper professional guidance. Execution remains the responsibility of independent third-party providers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PlatformLayout>
  );
};

export default AboutPage;
