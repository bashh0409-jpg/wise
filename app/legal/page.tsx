import React from "react";
import type { Metadata } from "next";
import LegalPage from "./LegalPage";
import TabTitle from "../components/tab-title";

export const metadata: Metadata = {
  title: "Legal",
  description: "Privacy policy and legal notices for The Wise Studio.",
  openGraph: {
    title: "Legal | The Wise Studio",
    description: "Privacy policy and legal notices for The Wise Studio.",
    url: "https://thewisestudio.xyz/legal",
    siteName: "The Wise Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal | The Wise Studio",
    description: "Privacy policy and legal notices for The Wise Studio.",
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
