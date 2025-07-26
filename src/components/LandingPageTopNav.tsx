"use client";

import React, { useState } from "react";
import SignUp from "@/features/building-manager-signup/SignUp";
import SignIn from "@/features/signin-building-manager/SignIn";
import PropleLogoText from "@/components/PropleLogoText";

import { AlignJustify } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LogoutConfirmDialog from "@/features/building-manager-signout/SignoutConfirmDialog";
import { useAuthBuildingManager } from "@/hooks/useAuthBuildingManager";
import Link from "next/link";

const LandingPageTopNav = () => {
  // VARS

  const [openDialog, setOpenDialog] = useState(false);
  const {
    dataBuildingManager = {},
    statusBuildingManagerEmail,
    statusBuildingManagerJwt,
  } = useAuthBuildingManager();

  // JSX
  return (
    <nav
      className="border-brand-color-300/80 bg-nav-bar-bg fixed top-0 right-0 left-0 flex h-[50px] items-center justify-between border-b-[1px] p-[10px]"
      aria-label="Top Navigation"
    >
      <div aria-label="Logo">
        <PropleLogoText />
      </div>

      {dataBuildingManager?.buildingManager?.role === "buildingManager" && (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <AlignJustify className="text-primary cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/building-manager/dashboard/home">Dashboard</Link>
              </DropdownMenuItem>

              {/* Log out triggers the dialog */}
              <DropdownMenuItem onClick={() => setOpenDialog(true)}>
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* ShadCN Dialog */}
          <LogoutConfirmDialog
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
          />
        </div>
      )}

      {(statusBuildingManagerEmail === "error" ||
        statusBuildingManagerJwt === "error") && (
        <div
          className="flex items-center gap-[10px]"
          aria-label="Authentication actions"
        >
          <SignUp />
          <SignIn />
        </div>
      )}
    </nav>
  );
};

export default LandingPageTopNav;
