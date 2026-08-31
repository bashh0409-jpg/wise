import React from "react";
import type { Metadata } from "next";
import LegalPage from "./LegalPage";
import TabTitle from "../components/tab-title";

export const metadata: Metadata = {
  title: "Legal",
  description: "Privacy policy and legal notices for Wise Studios.",
  openGraph: {
    title: "Legal | Wise Studios",
    description: "Privacy policy and legal notices for Wise Studios.",
    url: "https://wisestudios.fyi/legal",
    siteName: "Wise Studios",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal | Wise Studios",
    description: "Privacy policy and legal notices for Wise Studios.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <TabTitle />
      <LegalPage />
    </>
  );
}
