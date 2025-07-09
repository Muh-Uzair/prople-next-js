import React, { useState } from "react";
import SignUp from "@/features/building-manager-signup/SignUp";
import SignIn from "@/features/landing-page/SignIn";
import PropleLogoText from "@/components/PropleLogoText";
import { useBuildingManagerStore } from "@/stores/buildingManagerStore";
import { AlignJustify } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LogoutConfirmDialog from "@/features/building-manager-logout/LogoutConfirmDialog";

const BottomNav = () => {
  // VARS
  const { isAuthBuildingManager } = useBuildingManagerStore();
  const [openDialog, setOpenDialog] = useState(false);

  // JSX
  return (
    <nav
      className="border-brand-color-300/80 bg-nav-bar-bg fixed right-0 bottom-0 left-0 flex h-[50px] items-center justify-between border-t-[1px] p-[10px]"
      aria-label="Bottom Navigation"
    >
      <div aria-label="Logo">
        <PropleLogoText />
      </div>

      {isAuthBuildingManager && (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <AlignJustify className="text-primary cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Dashboard</DropdownMenuItem>

              {/* Log out triggers the dialog */}
              <DropdownMenuItem onClick={() => setOpenDialog(true)}>
                Log out
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

      {!isAuthBuildingManager && (
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

export default BottomNav;
