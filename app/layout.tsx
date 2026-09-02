import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CookieConsent from "./components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Wise Studio",
  description:
    "The Wise Studio — creative direction and design studio based in Woodlands, 3201.",
  openGraph: {
    title: "The Wise Studio",
    description:
      "The Wise Studio — creative direction and design studio based in Woodlands, 3201.",
    url: "https://thewisestudio.xyz",
    siteName: "The Wise Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Wise Studio",
    description:
      "The Wise Studio — creative direction and design studio based in Woodlands, 3201.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsent />
        <SpeedInsights />
      </body>
    </html>
  );
}
