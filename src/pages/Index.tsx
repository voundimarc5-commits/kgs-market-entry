import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FinancialBackground from "@/components/FinancialBackground";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import PaymentSection from "@/components/PaymentSection";
import ScopeSection from "@/components/ScopeSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FinancialBackground />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProcessSection />
        <ContactSection />
        <PaymentSection />
        <ScopeSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
