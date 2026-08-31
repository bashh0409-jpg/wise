import React from "react";
import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Wise Studios — creative direction and design studio based in Woodlands, 3201.",
  openGraph: {
    title: "About | Wise Studios",
    description:
      "Wise Studios — creative direction and design studio based in Woodlands, 3201.",
    url: "https://wisestudios.fyi/about",
    siteName: "Wise Studios",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Wise Studios",
    description:
      "Wise Studios — creative direction and design studio based in Woodlands, 3201.",
  },
};

const page = () => {
  return (
    <div>
      <AboutPage />
    </div>
  );
};

export default page;
