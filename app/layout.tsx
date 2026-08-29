import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Wise Studios",
  description:
    "Wise Studios — creative direction and design studio based in Woodlands, 3201.",
  openGraph: {
    title: "Wise Studios",
    description:
      "Wise Studios — creative direction and design studio based in Woodlands, 3201.",
    url: "https://wisestudios.com",
    siteName: "Wise Studios",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wise Studios",
    description:
      "Wise Studios — creative direction and design studio based in Woodlands, 3201.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
