import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { twMerge } from "tailwind-merge";

import { Toaster } from "@/components/ui/sonner";
import { Provider } from "@/components/provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={twMerge(fontSans.className)}>
        <Provider>{children}</Provider>
        <Toaster />
      </body>
    </html>
  );
}
