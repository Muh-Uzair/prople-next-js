import type { Metadata } from "next";
import "@/styles/globals.css";
import roboto from "../../../public/fonts/roboto/roboto";
import React from "react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const experimental_ppr = true;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={roboto.variable}>
        <main>{children}</main>
      </body>
    </html>
  );
}
