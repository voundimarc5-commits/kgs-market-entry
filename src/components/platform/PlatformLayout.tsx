import { ReactNode } from "react";
import PlatformHeader from "./PlatformHeader";
import PlatformFooter from "./PlatformFooter";

const PlatformLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <PlatformHeader />
      <main className="pt-16">{children}</main>
      <PlatformFooter />
    </div>
  );
};

export default PlatformLayout;
