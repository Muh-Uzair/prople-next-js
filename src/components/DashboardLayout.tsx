import React, { ReactNode } from "react";
import DashBoardHeader from "./DashBoardHeader";
import { buildingManagerNavItems } from "@/lib/constants";
import { IBuildingManagerNavItems } from "@/types/constants-types";
import Link from "next/link";

interface IDashboardLayout {
  children: ReactNode;
  userRole: string | null;
  slug: string;
}

const DashboardLayout: React.FC<IDashboardLayout> = async ({
  children,
  userRole,
  slug,
}) => {
  // VARS
  const navArr = userRole === "buildingManager" ? buildingManagerNavItems : [];

  // JSX
  return (
    <div>
      <DashBoardHeader userRole={userRole} />
      <section className="bp-[50px] tab:pl-[80px] laptopM:pl-[200px] h-screen pt-[50px]">
        <main className="px-[10px]">{children}</main>
      </section>{" "}
      <DashboardSideBar navArrSidebar={navArr} slug={slug} />
      <DashboardBottomNav navArrBottom={navArr} slug={slug} />
    </div>
  );
};

export default DashboardLayout;

interface IDashboardSideBar {
  navArrSidebar: IBuildingManagerNavItems[];
  slug: string;
}

const DashboardSideBar: React.FC<IDashboardSideBar> = ({
  navArrSidebar,
  slug,
}) => {
  // Helper function to check if nav item is active
  const isActiveNav = (navUrl: string) => {
    const urlSegments = navUrl.split("/");
    const lastSegment = urlSegments[urlSegments.length - 1];
    return lastSegment === slug;
  };

  return (
    <aside>
      <nav className="bg-primary laptopM:w-[200px] tab:block fixed top-[50px] bottom-0 left-0 hidden w-[80px] pt-[10px]">
        <ul className="flex flex-col space-y-4 p-2 text-white">
          {navArrSidebar?.map((item, index) => {
            const IconComponent = item.navIcon;
            const isActive = isActiveNav(item.navUrl);

            return (
              <li
                key={index}
                className={`hover:text-accent cursor-pointer ${
                  isActive ? "rounded-md bg-sky-800" : ""
                }`}
              >
                <Link
                  href={item.navUrl}
                  className={`laptopM:gap-2 laptopM:justify-start flex items-center justify-center p-2 ${
                    isActive ? "text-white" : ""
                  }`}
                >
                  <IconComponent size={20} />
                  <span className="laptopM:inline hidden">{item.navLabel}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

interface IDashboardBottomNav {
  navArrBottom: IBuildingManagerNavItems[];
  slug: string;
}

const DashboardBottomNav: React.FC<IDashboardBottomNav> = ({
  navArrBottom,
  slug,
}) => {
  // Helper function to check if nav item is active (first 4 items)
  const isActiveBottomNav = (navUrl: string) => {
    const urlSegments = navUrl.split("/");
    const lastSegment = urlSegments[urlSegments.length - 1];
    return lastSegment === slug;
  };

  return (
    <footer>
      <nav
        className="border-brand-color-300/80 bg-brand-color-500 tab:hidden fixed right-0 bottom-0 left-0 h-[50px] border-t-[1px] p-[10px]"
        aria-label="Bottom Navigation"
      >
        <ul className="flex items-center justify-evenly">
          {navArrBottom?.map((item, index) => {
            const IconComponent = item.navIcon;

            if (index <= 4) {
              const isActive = isActiveBottomNav(item.navUrl);

              return (
                <li
                  key={index}
                  className={`cursor-pointer ${
                    isActive ? "font-extrabold text-sky-800" : "text-white"
                  }`}
                >
                  <Link
                    href={item.navUrl}
                    className="flex flex-col items-center gap-1"
                  >
                    <IconComponent size={18} />
                    <span className="text-[10px]">{item.navLabel}</span>
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </footer>
  );
};
