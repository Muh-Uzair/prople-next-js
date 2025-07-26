"use client";

import React from "react";
import BridgingGap from "./BridgingGap";
import PropleDoes from "./PropleDoes";
import OnProple from "./OnProple";
import PropleCriteria from "./PropleCriteria";
import LandingPageFooter from "./LandingPageFooter";

const LandingPage: React.FC = () => {
  console.log();
  return (
    <div>
      <main className="ta pt-[50px]">
        <BridgingGap />
        <PropleDoes />
        <OnProple />
        <PropleCriteria />
        <LandingPageFooter />
      </main>
    </div>
  );
};

export default LandingPage;
