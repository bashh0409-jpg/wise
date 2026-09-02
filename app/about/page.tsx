import React from "react";
import type { Metadata } from "next";
import AboutPage from "./AboutPage";
import TabTitle from "../components/tab-title";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Wise Studio — creative direction and design studio based in Woodlands, 3201.",
  openGraph: {
    title: "About | The Wise Studio",
    description:
      "The Wise Studio — creative direction and design studio based in Woodlands, 3201.",
    url: "https://thewisestudio.xyz/about",
    siteName: "The Wise Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | The Wise Studio",
    description:
      "The Wise Studio — creative direction and design studio based in Woodlands, 3201.",
  },
};

const page = () => {
  return (
    <div>
      <TabTitle />
      <AboutPage />
    </div>
  );
};

export default page;
