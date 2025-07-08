"use client";

import React from "react";
import LandingPage from "@/pages/landing-page";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import BottomNav from "@/components/BottomNav";
import { Toaster } from "@/components/ui/sonner";

export const queryClient = new QueryClient();

const page: React.FC = () => {
  // VARS

  // FUNCTIONS

  // JSX

  return (
    <QueryClientProvider client={queryClient}>
      <main>
        {" "}
        <LandingPage />
        <BottomNav />
      </main>
      <Toaster richColors position="top-center" />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default page;
