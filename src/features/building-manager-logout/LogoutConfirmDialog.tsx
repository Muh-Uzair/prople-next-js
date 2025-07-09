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
import { usePerformLogout } from "./usePerformLogout";
import LoadingSpinner from "@/components/spinner-02";

interface ILogoutConfirmDialog {
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogoutConfirmDialog: React.FC<ILogoutConfirmDialog> = ({
  openDialog,
  setOpenDialog,
}) => {
  // VARS
  const { mutateLogout, statusLogout } = usePerformLogout();

  // FUNCTIONS
  const handleLogout = () => {
    mutateLogout();
    if (statusLogout === "success") {
      setOpenDialog(false);
    }
  };

  // JSX
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Confirm Logout</DialogTitle>
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
            {statusLogout === "pending" && (
              <>
                <LoadingSpinner />
              </>
            )}
            Log out
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LogoutConfirmDialog;
