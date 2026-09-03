"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const STORAGE_KEY = "cookie-consent";

type ConsentValue = "accepted" | "declined";

interface CookieConsentProps {
  /** Called after the user makes a choice, with what they chose. */
  onConsent?: (value: ConsentValue) => void;
}

const CookieConsent = ({ onConsent }: CookieConsentProps) => {
  // Null while we haven't checked storage yet, to avoid a flash of the
  // banner before we know whether consent was already given.
  const [visible, setVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) return;

    const frame = window.requestAnimationFrame(() => setVisible(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!visible || !barRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        barRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.6, ease: "power3.out" },
      );
    }, barRef);

    return () => ctx.revert();
  }, [visible]);

  const handleChoice = (value: ConsentValue) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    onConsent?.(value);

    // Animate out before unmounting so dismissal doesn't feel abrupt.
    if (barRef.current) {
      gsap.to(barRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => setVisible(false),
      });
    } else {
      setVisible(false);
    }
  };

  if (!visible) return null;

  return (
    <div
      ref={barRef}
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      // left-1/2 + -translate-x-1/2 centers a fixed, auto-width element;
      // mx-auto alone has no effect here since a fixed element isn't
      // constrained by its parent's block width.
      className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] -translate-x-1/2 items-center justify-center rounded-2xl bg-[#999] p-2 sm:bottom-11 sm:w-max sm:rounded-full sm:p-1 sm:pl-2"
    >
      <div className="mx-auto flex flex-col items-stretch justify-between gap-2 sm:flex-row sm:items-center sm:gap-4">
        <span className="text-center text-sm font-medium leading-4 tracking-tight text-white sm:text-left">
          This site uses cookies. See{" "}
          <a href="/legal" className="cursor-pointer underline">
            Legal
          </a>{" "}
          for more info.
        </span>
        <button
            type="button"
            onClick={() => handleChoice("accepted")}
          className="w-full cursor-pointer rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-950 transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-100 sm:w-auto"
          >
            <span className="text-sm font-medium leading-4 tracking-tight">
              Accept
            </span>
          </button>

      </div>
    </div>
  );
};

export default CookieConsent;

