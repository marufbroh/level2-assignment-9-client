import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pet Harmony",
  description: "A pet adoption platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></Script>
      <body className={`${inter.className}`}>
      <Toaster />
        {children}</body>
      

    </html>
  );
}
