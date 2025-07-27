import React, { ReactNode } from "react";
import PropleLogoText from "./PropleLogoText";
// import { headers } from "next/headers";

interface IDashboardLayout {
  children: ReactNode;
  userRole: string | null;
}

const DashboardLayout: React.FC<IDashboardLayout> = async ({
  children,
  userRole,
}) => {
  // VARS
  console.log(userRole);

  // FUNCTIONS

  // JSX
  return (
    <div>
      <header className="border-brand-color-300/80 bg-nav-bar-bg fixed top-0 right-0 left-0 flex h-[50px] items-center justify-start border-b-[1px] p-[10px]">
        <PropleLogoText />
      </header>
      {children}
      <DashboardSideBar />
      <DashboardBottomNav />
    </div>
  );
};

export default DashboardLayout;

const DashboardSideBar: React.FC = () => {
  return (
    <aside>
      <nav className="bg-primary laptopM:w-[200px] tab:block fixed top-[50px] bottom-0 left-0 hidden w-[80px]">
        {" "}
        <ul className="flex-col">
          <li>home</li>
          <li>home</li>
        </ul>
      </nav>
    </aside>
  );
};

const DashboardBottomNav: React.FC = () => {
  // VARS

  // FUNCTIONS

  // JSX
  return (
    <footer>
      <nav
        className="border-brand-color-300/80 bg-nav-bar-bg tab:hidden fixed right-0 bottom-0 left-0 h-[50px] border-t-[1px] p-[10px]"
        aria-label="Bottom Navigation"
      >
        <ul className="flex items-center justify-evenly">
          <li>home</li>
          <li>home</li>
        </ul>
      </nav>
    </footer>
  );
};
