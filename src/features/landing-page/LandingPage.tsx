import PropleLogoText from "@/components/PropleLogoText";
import React from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const LandingPage: React.FC = () => {
  // VARS

  // FUNCTIONS

  // JSX
  return (
    <div>
      <header className="border-brand-color-300/80 bg-nav-bar-bg fixed right-0 bottom-0 left-0 flex h-[50px] items-center justify-between border-t-[1px] p-[10px]">
        <div>
          <PropleLogoText />
        </div>
        <div className="flex items-center gap-[10px]">
          <SignUp />
          <SignIn />
        </div>
      </header>
      <main className="pb-[50px]">main body</main>
    </div>
  );
};

export default LandingPage;
