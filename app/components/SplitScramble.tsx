// components/SplitScramble.tsx
"use client";

import gsap from "gsap";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

export interface SplitScrambleHandle {
  scramble: () => void;
}

interface SplitScrambleProps {
  text: string;
  className?: string;
  charDuration?: number; // total flicker time per letter before it resolves
  stagger?: number; // delay between each letter starting
  steps?: number; // how many random swaps happen per letter — lower = calmer
}

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const SYMBOLS = "!@#$%^&*";

// matches the scrambled char's case/type to the original so digits stay digits, etc.
function randomCharLike(original: string): string {
  if (/[A-Z]/.test(original))
    return UPPER[Math.floor(Math.random() * UPPER.length)];
  if (/[a-z]/.test(original))
    return LOWER[Math.floor(Math.random() * LOWER.length)];
  if (/[0-9]/.test(original)) return String(Math.floor(Math.random() * 10));
  return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
}

const SplitScramble = forwardRef<SplitScrambleHandle, SplitScrambleProps>(
  (
    { text, className, charDuration = 0.2, stagger = 0.01, steps = 3 },
    ref,
  ) => {
    const containerRef = useRef<HTMLSpanElement>(null);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    useImperativeHandle(ref, () => ({
      scramble: () => {
        const container = containerRef.current;
        if (!container) return;

        const chars =
          container.querySelectorAll<HTMLSpanElement>("[data-char]");
        timelineRef.current?.kill(); // avoid overlapping runs on fast re-hover

        const tl = gsap.timeline();

        chars.forEach((el, i) => {
          const original = el.dataset.char ?? "";
          if (original === " ") return; // spaces have nothing to scramble

          const proxy = { value: 0 };
          tl.to(
            proxy,
            {
              value: 1,
              duration: charDuration,
              // steps() caps onUpdate firings to `steps` discrete jumps instead of
              // one per rendered frame — that's what made it feel like "too much" before
              ease: `steps(${steps})`,
              onUpdate: () => {
                el.textContent = randomCharLike(original);
              },
              onComplete: () => {
                el.textContent = original; // settle back to the real letter
              },
            },
            i * stagger, // ripple left-to-right instead of firing all at once
          );
        });

        timelineRef.current = tl;
      },
    }));

    useEffect(() => {
      return () => {
        timelineRef.current?.kill();
      };
    }, []);

    return (
      <span ref={containerRef} className={className} aria-label={text}>
        {text.split("").map((char, i) => (
          <span key={i} data-char={char} aria-hidden="true">
            {char}
          </span>
        ))}
      </span>
    );
  },
);

SplitScramble.displayName = "SplitScramble";

export default SplitScramble;
