import { ReactNode } from "react";
import PlatformHeader from "./PlatformHeader";
import PlatformFooter from "./PlatformFooter";
import FinancialBackground from "./FinancialBackground";

const PlatformLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background relative">
      <FinancialBackground />
      <PlatformHeader />
      <main className="pt-16 relative z-10">{children}</main>
      <PlatformFooter />
    </div>
  );
};

export default PlatformLayout;
