import Header from "@/components/Header";
import FlowSimulation from "@/components/FlowSimulation";
import UnderstandingFlowSection from "@/components/UnderstandingFlowSection";
import HowWeSupportSection from "@/components/HowWeSupportSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <main>
        <FlowSimulation />
        <UnderstandingFlowSection />
        <HowWeSupportSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
