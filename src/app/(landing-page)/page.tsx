"use client";

import React from "react";
import LandingPage from "@/pages/landing-page";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import LandingPageLayout from "@/components/LandingPageLayout";

const Page: React.FC = () => {
  // JSX

  return (
    <SessionProvider refetchOnWindowFocus={false}>
      {" "}
      <LandingPageLayout>
        <LandingPage />
      </LandingPageLayout>
      <Toaster richColors position="top-center" />
    </SessionProvider>
  );
};

export default Page;
