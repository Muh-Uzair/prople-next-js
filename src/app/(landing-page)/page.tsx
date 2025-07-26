"use client";

import React from "react";
import LandingPage from "@/pages/landing-page";
import { QueryClient } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import LandingPageLayout from "@/components/LandingPageLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, //
    },
  },
});

const Page: React.FC = () => {
  // JSX

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider refetchOnWindowFocus={false}>
        {" "}
        <LandingPageLayout>
          <LandingPage />
        </LandingPageLayout>
        <Toaster richColors position="top-center" />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default Page;
