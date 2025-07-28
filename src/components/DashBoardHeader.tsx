import React from "react";
import PropleLogoText from "./PropleLogoText";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { AlignJustify } from "lucide-react";

interface IDashBoardHeader {
  userRole: string | null;
}

const DashBoardHeader = ({ userRole }: IDashBoardHeader) => {
  // VARS
  console.log(userRole);

  // FUNCTIONS

  // JSX
  return (
    <header className="border-brand-color-300/80 bg-nav-bar-bg fixed top-0 right-0 left-0 flex h-[50px] items-center justify-between border-b-[1px] p-[10px]">
      <PropleLogoText />
      <div className="tab:hidden flex">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <AlignJustify className="text-primary cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>Dashboard</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/">Landing page</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashBoardHeader;
