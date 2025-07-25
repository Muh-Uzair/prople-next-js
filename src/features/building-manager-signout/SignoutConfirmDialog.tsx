import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { usePerformSignout } from "./usePerformSignout";
import LoadingSpinner from "@/components/spinner-02";

interface ILogoutConfirmDialog {
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignoutConfirmDialog: React.FC<ILogoutConfirmDialog> = ({
  openDialog,
  setOpenDialog,
}) => {
  // VARS
  const { mutateSignout, statusSignout } = usePerformSignout({ setOpenDialog });

  // FUNCTIONS
  const handleLogout = () => {
    mutateSignout();
  };

  // JSX
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Confirm Sign out</DialogTitle>
          <DialogDescription>
            Are you sure you want to log out? You will need to sign in again to
            access your dashboard.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="destructive" onClick={handleLogout}>
            {statusSignout === "pending" && (
              <>
                <LoadingSpinner />
              </>
            )}
            Sign out
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SignoutConfirmDialog;
