import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FinancialBackground from "@/components/FinancialBackground";
import AboutSection from "@/components/AboutSection";
import WhyStructureSection from "@/components/WhyStructureSection";
import ProjectTypesSection from "@/components/ProjectTypesSection";
import ProcessSection from "@/components/ProcessSection";
import EngagementSection from "@/components/EngagementSection";
import ScopeSection from "@/components/ScopeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import ScopeGovernance from "@/components/ScopeGovernance";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FinancialBackground />
      <Header />
      <div className="pt-16" />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyStructureSection />
        <ProjectTypesSection />
        <ProcessSection />
        <EngagementSection />
        <ScopeSection />
        <ContactSection />
      </main>
      <ScopeGovernance />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
