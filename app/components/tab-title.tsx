"use client";

import { useEffect } from "react";

type TabTitleProps = {
  awayTitle?: string;
};

export default function TabTitle({
  awayTitle = "🙈Come back | Wise Studios",
}: TabTitleProps) {
  useEffect(() => {
    const originalTitle = document.title;

    const handleVisibilityChange = () => {
      document.title = document.hidden ? awayTitle : originalTitle;
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.title = originalTitle;
    };
  }, [awayTitle]);

  return null;
}
