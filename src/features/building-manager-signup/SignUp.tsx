"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import OrSeparator from "@/components/OrSeparator";
import { DialogDescription } from "@radix-ui/react-dialog";
import SignUpForm from "./SignUpForm";

import SignUpWithGoogle from "./SignUpWithGoogle";

// CMP CMP CMP
const SignUp: React.FC = () => {
  // VARS

  // FUNCTIONS

  // JSX JSX JSX
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Sign Up</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create your building manager account</DialogTitle>
          <DialogDescription>
            Fill in the details below to create your building manager account.
          </DialogDescription>
        </DialogHeader>

        <SignUpWithGoogle />

        <OrSeparator />

        <SignUpForm />
      </DialogContent>
    </Dialog>
  );
};

export default SignUp;
