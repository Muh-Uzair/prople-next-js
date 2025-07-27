import React, { ReactNode } from "react";
import DashBoardHeader from "./DashBoardHeader";
import { buildingManagerNavItems } from "@/lib/constants";
import { IBuildingManagerNavItems } from "@/types/constants-types";
import Link from "next/link";
import { MoreVertical } from "lucide-react";

interface IDashboardLayout {
  children: ReactNode;
  userRole: string | null;
}

const DashboardLayout: React.FC<IDashboardLayout> = async ({
  children,
  userRole,
}) => {
  // VARS
  const navArr = userRole === "buildingManager" ? buildingManagerNavItems : [];

  // JSX
  return (
    <div>
      <DashBoardHeader userRole={userRole} />
      <main className="px-[10px]">{children}</main>
      <DashboardSideBar navArrSidebar={navArr} />
      <DashboardBottomNav navArrBottom={navArr} />
    </div>
  );
};

export default DashboardLayout;

interface IDashboardSideBar {
  navArrSidebar: IBuildingManagerNavItems[];
}

const DashboardSideBar: React.FC<IDashboardSideBar> = ({ navArrSidebar }) => {
  return (
    <aside>
      <nav className="bg-primary laptopM:w-[200px] tab:block fixed top-[50px] bottom-0 left-0 hidden w-[80px]">
        <ul className="flex flex-col space-y-4 p-2 text-white">
          {navArrSidebar?.map((item, index) => {
            const IconComponent = item.navIcon;
            return (
              <li key={index} className="hover:text-accent cursor-pointer">
                <Link href={item.navUrl} className="flex items-center gap-2">
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
}

const DashboardBottomNav: React.FC<IDashboardBottomNav> = ({
  navArrBottom,
}) => {
  return (
    <footer>
      <nav
        className="border-brand-color-300/80 bg-brand-color-500 tab:hidden fixed right-0 bottom-0 left-0 h-[50px] border-t-[1px] p-[10px]"
        aria-label="Bottom Navigation"
      >
        <ul className="flex items-center justify-evenly">
          {navArrBottom?.map((item, index) => {
            const IconComponent = item.navIcon;

            if (index <= 3) {
              return (
                <li key={index} className="cursor-pointer text-white">
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
          <li className="cursor-pointer text-white">
            <div className="flex flex-col items-center gap-1">
              <MoreVertical size={18} />
              <span className="text-[10px]">More</span>
            </div>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
