"use client";

import { IBuildingManagerNavItems } from "@/types/constants-types";
import { Link } from "lucide-react";
import { buildingManagerNavItems } from "@/lib/constants";
import { usePathname } from "next/navigation";

export const DashboardSideBar: React.FC = () => {
  // VARS
  const navArrSidebar: IBuildingManagerNavItems[] = buildingManagerNavItems;
  const pathname = usePathname();
  console.log(pathname);

  // JSX JSX JSX
  return (
    <aside>
      <nav className="bg-primary laptopM:w-[200px] tab:block fixed top-[50px] bottom-0 left-0 hidden w-[80px]">
        <ul className="mt-[20px] flex flex-col space-y-4 bg-red-400 p-2 text-white">
          {navArrSidebar?.map((item, index) => {
            const IconComponent = item.navIcon;
            return (
              <li key={index} className="hover:text-accent cursor-pointer">
                <Link
                  href={item.navUrl}
                  className="flex items-center justify-center gap-2"
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
