"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

const SignInWithGoogle = () => {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    await signIn("google", { callbackUrl: "/building-manager/dashboard/home" });
  };

  return (
    <div className="mt-[10px] w-full">
      <Button
        onClick={handleGoogleSignIn}
        className="w-full"
        disabled={loading}
      >
        {loading ? "Signing in..." : "Sign in with Google"}
      </Button>
    </div>
  );
};

export default SignInWithGoogle;
