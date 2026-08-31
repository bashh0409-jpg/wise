import React from "react";
import type { Metadata } from "next";
import LegalPage from "./LegalPage";

export const metadata: Metadata = {
  title: "Legal ",
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
  // legal pages generally shouldn't rank in search or get link previews as "content"
  robots: {
    index: true,
    follow: true,
  },
};

const page = () => {
  return (
    <div>
      <LegalPage />
    </div>
  );
};

export default page;
