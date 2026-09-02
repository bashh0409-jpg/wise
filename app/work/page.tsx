import React from "react";
import type { Metadata } from "next";
import WorkPage from "./WorkPage";
import TabTitle from "../components/tab-title";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected client work and case studies from The Wise Studio.",
  openGraph: {
    title: "Work | The Wise Studio",
    description: "Selected client work and case studies from The Wise Studio.",
    url: "https://thewisestudio.xyz/work",
    siteName: "The Wise Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work | The Wise Studio",
    description: "Selected client work and case studies from The Wise Studio.",
  },
};

export default function Page() {
  return (
    <>
      <TabTitle />
      <WorkPage />
    </>
  );
}
