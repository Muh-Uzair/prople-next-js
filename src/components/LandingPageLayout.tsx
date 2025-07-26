import React, { ReactNode } from "react";
import LandingPageTopNav from "@/components/LandingPageTopNav";

interface ILandingPageLayout {
  children: ReactNode;
}

const LandingPageLayout = ({ children }: ILandingPageLayout) => {
  return (
    <div>
      <LandingPageTopNav />
      {children}
    </div>
  );
};

export default LandingPageLayout;
