import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React, { Dispatch, SetStateAction } from "react";

interface ISigninTenant {
  setIdentity: Dispatch<SetStateAction<"buildingManager" | "tenant" | "idle">>;
}

const SigninTenant: React.FC<ISigninTenant> = ({ setIdentity }) => {
  // VARS

  // FUNCTIONS

  // JSX
  return (
    <div className="space-y-4">
      <DialogHeader>
        <DialogTitle>Tenant Sign In</DialogTitle>
        <DialogDescription>
          Enter your credentials to continue.
        </DialogDescription>
      </DialogHeader>
      {/* Replace this with your actual form */}
      <p className="text-muted-foreground text-sm">[Form goes here]</p>
      <div className="flex justify-between">
        <Button variant="ghost" onClick={() => setIdentity("idle")}>
          Back
        </Button>
        <Button>Sign In</Button>
      </div>
    </div>
  );
};

export default SigninTenant;
