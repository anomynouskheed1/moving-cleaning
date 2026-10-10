import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const body = Barlow({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });
const head = Barlow_Condensed({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-head" });

export const metadata: Metadata = {
  title: "Shammah Movers & Cleaners | Moving and Cleaning in Nairobi",
  description:
    "House moving, office relocation, deep cleaning, sofa and carpet cleaning. Available 7 days a week. Get a free quote today.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${head.variable}`}>
      <body>{children}</body>
    </html>
  );
}
