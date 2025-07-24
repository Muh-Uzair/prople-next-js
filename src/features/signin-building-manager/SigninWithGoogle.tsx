"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { signIn } from "next-auth/react";

const SignInWithGoogle = () => {
  return (
    <div className="mt-[10px] w-full">
      <Button onClick={() => signIn("google")} className="w-full">
        Sign in with Google
      </Button>
    </div>
  );
};

export default SignInWithGoogle;
