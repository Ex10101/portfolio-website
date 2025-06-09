
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Optimize for text display
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevDuo - Digital Experience Agency",
  description:
    "We craft digital experiences, transforming ideas into stunning, functional websites and applications",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  keywords: ["web development", "portfolio", "nextjs", "react", "frontend", "backend"],
  robots: "index, follow",
  themeColor: "#0c0c14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased m-0 p-0 overflow-x-hidden bg-[#0c0c14] text-white`}>
        <CustomCursor />
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}