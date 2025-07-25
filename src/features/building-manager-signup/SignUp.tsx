"use client";

import React, { useState } from "react";
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

const SignUp: React.FC = () => {
  // State to control dialog
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          Sign Up
        </Button>
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

        <SignUpForm setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default SignUp;
