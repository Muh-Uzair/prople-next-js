"use client";

import { buildingManagerNavItems } from "@/lib/constants";
import { IBuildingManagerNavItems } from "@/types/constants-types";
import { MoreVertical } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const DashboardBottomNav: React.FC = () => {
  // VARS
  const navArrBottom: IBuildingManagerNavItems[] = buildingManagerNavItems;
  const pathname = usePathname();
  console.log(pathname);

  // FUNCTION

  // JSX
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
                <li key={index} className={`cursor-pointer text-white`}>
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
