import React from "react";
import SignUp from "@/features/signup/SignUp";
import SignIn from "@/features/landing-page/SignIn";
import PropleLogoText from "@/components/PropleLogoText";

const BottomNav = () => {
  return (
    <nav
      className="border-brand-color-300/80 bg-nav-bar-bg fixed right-0 bottom-0 left-0 flex h-[50px] items-center justify-between border-t-[1px] p-[10px]"
      aria-label="Bottom Navigation"
    >
      <div aria-label="Logo">
        <PropleLogoText />
      </div>

      <div
        className="flex items-center gap-[10px]"
        aria-label="Authentication actions"
      >
        <SignUp />
        <SignIn />
      </div>
    </nav>
  );
};

export default BottomNav;
