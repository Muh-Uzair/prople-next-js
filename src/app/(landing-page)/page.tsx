"use client";

import React from "react";
import LandingPage from "@/pages/landing-page";
import { QueryClient } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import LandingPageTopNav from "@/components/LandingPageTopNav";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // 👈 This stops refetching on tab switch
    },
  },
});

const Page: React.FC = () => {
  // JSX

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider refetchOnWindowFocus={false}>
        <main>
          {" "}
          <LandingPage />
          <LandingPageTopNav />
        </main>
        <Toaster richColors position="top-center" />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default Page;
