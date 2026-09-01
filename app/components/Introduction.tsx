"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import MuxVideo from "@mux/mux-player-react";
import { getMuxPlaybackId, type MuxVideoKey } from "@/app/mux";
import Link from "next/link";

const STORAGE_KEY = "introduction-seen";

export interface IntroductionProps {
  /** Key into muxPlaybackIds — resolved to a playback ID and poster internally. */
  videoKey: MuxVideoKey;
  /** One or two lines of supporting copy, shown under the video. */
  description: string;
  /** Optional project link shown under the description when provided. */
  href?: string;
  /** Called after the user dismisses the card. */
  onDismiss?: () => void;
}

export interface IntroductionHandle {
  /** Re-open the card even if it was already dismissed this session. */
  reopen: () => void;
}

const Introduction = forwardRef<IntroductionHandle, IntroductionProps>(
  ({ videoKey, description, href, onDismiss }, ref) => {
    // Null while we haven't checked storage yet, to avoid a flash of the
    // card before we know whether it was already dismissed.
    const [visible, setVisible] = useState(false);
    // Starts muted to match the existing autoplay behavior (autoplay
    // with sound is blocked by most browsers anyway); the button flips
    // this, which drives the `muted` prop below.
    const [isMuted, setIsMuted] = useState(true);
    const cardRef = useRef<HTMLDivElement>(null);
    // Moved out of dismiss() — hooks must be called unconditionally at
    // the top of the component, not inside a nested function, and
    // handleMaximise needs to be in scope for the maximise button below.
    const playerRef = useRef<React.ComponentRef<typeof MuxVideo>>(null);

    const playbackId = getMuxPlaybackId(videoKey);

    useEffect(() => {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    }, []);

    useEffect(() => {
      if (!visible || !cardRef.current) return;

      const ctx = gsap.context(() => {
        gsap.fromTo(
          cardRef.current,
          { y: 24, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" },
        );
      }, cardRef);

      return () => ctx.revert();
    }, [visible]);

    const handleMaximise = () => {
      playerRef.current?.requestFullscreen();
    };

    const toggleSound = () => {
      setIsMuted((prev) => !prev);
    };

    useEffect(() => {
      const weekMs = 7 * 24 * 60 * 60 * 1000;
      const stored = window.localStorage.getItem(STORAGE_KEY);
      const dismissedAt = stored ? Number(stored) : null;
      const expired = dismissedAt !== null && Date.now() - dismissedAt > weekMs;

      if (!stored || expired) setVisible(true);
    }, []);

    const dismiss = () => {
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
      onDismiss?.();

      // Animate out before unmounting so dismissal doesn't feel abrupt.
      if (cardRef.current) {
        gsap.to(cardRef.current, {
          y: 24,
          opacity: 0,
          scale: 0.98,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => setVisible(false),
        });
      } else {
        setVisible(false);
      }
    };

    // Exposed for cases like a "watch intro again" link elsewhere on the
    // page — bypasses the storage check entirely.
    useImperativeHandle(ref, () => ({
      reopen: () => setVisible(true),
    }));

    if (!visible || !playbackId) return null;

    return (
      <div
        ref={cardRef}
        role="dialog"
        aria-label="Introduction"
        className="fixed bottom-6 left-6 z-50 flex w-72 flex-col overflow-hidden rounded-md bg-black shadow-xl"
      >
        <div className="absolute z-100 backdrop-blur-md flex items-center rounded-full right-2 bottom-6 p-0.5 gap-0.5 bg-black/10">
          <button
            type="button"
            onClick={handleMaximise}
            aria-label="Maximise video"
            className="z-20 cursor-pointer rounded-full bg-black/1 backdrop-blur-md p-0.5 transition-all duration-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15px"
              viewBox="0 -960 960 960"
              width="15px"
              fill="#fff"
            >
              <path d="M200-200v-240h80v160h160v80H200Zm480-320v-160H520v-80h240v240h-80Z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="z-20 cursor-pointer rounded-full bg-black/1 backdrop-blur-md p-0.5 transition-all duration-500"
          >
            {isMuted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="15px"
                viewBox="0 -960 960 960"
                width="15px"
                fill="#fff"
              >
                <path d="M240-384v-192h144l192-192v576L384-384H240Zm408 55v-302q46 19 71 61t25 90q0 48-25 89.5T648-329ZM504-594l-90 90H312v48h102l90 90v-228Zm-97 114Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="15px"
                viewBox="0 -960 960 960"
                width="15px"
                fill="#fff"
              >
                <path d="M552-152v-75q86-23 139-93.26 53-70.25 53-159.5 0-89.24-53.5-158.74Q637-708 552-734v-75q116 25 190 117t74 211q0 119-73.5 211.5T552-152ZM144-385v-192h144l192-192v576L288-385H144Zm408 55v-302q45.12 20.4 70.56 61.2Q648-530 648-480.52q0 48.52-25.44 89.23Q597.12-350.59 552-330ZM408-595l-90 90H216v48h102l90 90v-228Zm-91 113Z" />
              </svg>
            )}
          </button>
        </div>

        <button
          type="button"
          onClick={dismiss}
          aria-label="Close introduction"
          className="absolute right-2 top-2 z-20 cursor-pointer rounded-full p-0.5 transition-all duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18px"
            viewBox="0 -960 960 960"
            width="18px"
            fill="#fff"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>

        <div className="relative aspect-video rounded p-2 w-full overflow-hidden">
          <MuxVideo
            ref={playerRef}
            playbackId={playbackId}
            poster=""
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
            streamType="on-demand"
            capRenditionToPlayerSize
            className=" w-full object-cover rounded -z-1 cursor-pointer transition-transform duration-700 group-hover:scale-101"
          />
        </div>

        <div className="flex cursor-pointer items-center justify-between gap-2 p-1 px-2">
          <p className=" text-xs font-mono font-medium uppercase tracking-tight text-white">
            {description}
          </p>
          {href ? (
            <Link
              className="text-xs font-mono font-medium uppercase tracking-tight text-white"
              href={href}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="14px"
                viewBox="0 -960 960 960"
                width="14px"
                fill="#000"
              >
                <path d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z" />
              </svg>
            </Link>
          ) : null}
        </div>
      </div>
    );
  },
);

Introduction.displayName = "Introduction";

export default Introduction;
