"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, UserRound } from "lucide-react";
import SigninBuildingManager from "../signin-building-manager/SigninBuildingManager";
import SigninTenant from "../signin-tenant/SigninTenant";

const SignIn: React.FC = () => {
  const [identity, setIdentity] = useState<
    "buildingManager" | "tenant" | "idle"
  >("idle");

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) {
          setTimeout(() => {
            setIdentity("idle");
          }, 300);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button>Sign in</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        {identity === "idle" && (
          <>
            <DialogHeader>
              <DialogTitle>Sign in as</DialogTitle>
              <DialogDescription>
                Choose your role to proceed with login.
              </DialogDescription>
            </DialogHeader>

            <div className="tab:grid-cols-2 grid grid-cols-1 gap-4">
              <Card
                onClick={() => setIdentity("buildingManager")}
                className="cursor-pointer transition hover:shadow-md"
              >
                <CardContent className="flex flex-col items-center py-6 text-center">
                  <Building2 className="text-primary mb-2" size={42} />
                  <h3 className="text-lg font-semibold">Building Manager</h3>
                  <p className="text-muted-foreground text-sm">
                    Manage tenants, units, and building tasks.
                  </p>
                </CardContent>
              </Card>

              <Card
                onClick={() => setIdentity("tenant")}
                className="cursor-pointer transition hover:shadow-md"
              >
                <CardContent className="flex flex-col items-center py-6 text-center">
                  <UserRound className="text-primary mb-2" size={42} />
                  <h3 className="text-lg font-semibold">Tenant</h3>
                  <p className="text-muted-foreground text-sm">
                    View rent details and send maintenance requests.
                  </p>
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {identity === "buildingManager" && (
          <SigninBuildingManager setIdentity={setIdentity} />
        )}

        {identity === "tenant" && <SigninTenant setIdentity={setIdentity} />}
      </DialogContent>
    </Dialog>
  );
};

export default SignIn;
