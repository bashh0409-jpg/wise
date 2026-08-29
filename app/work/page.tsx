import React from 'react'
import type { Metadata } from "next";
import WorkPage from "./WorkPage"

export const metadata: Metadata = {
  title: "Work",
  description: "Selected client work and case studies from Wise Studios.",
  openGraph: {
    title: "Work | Wise Studios",
    description: "Selected client work and case studies from Wise Studios.",
    url: "https://wisestudios.com/work",
    siteName: "Wise Studios",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work | Wise Studios",
    description: "Selected client work and case studies from Wise Studios.",
  },
};

const page = () => {
  return (
    <div><WorkPage/></div>
  )
}

export default page