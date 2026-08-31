import React from "react";
import type { Metadata } from "next";
import WorkPage from "./WorkPage";
import TabTitle from "../components/tab-title";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected client work and case studies from Wise Studios.",
  openGraph: {
    title: "Work | Wise Studios",
    description: "Selected client work and case studies from Wise Studios.",
    url: "https://wisestudios.fyi/work",
    siteName: "Wise Studios",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work | Wise Studios",
    description: "Selected client work and case studies from Wise Studios.",
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
