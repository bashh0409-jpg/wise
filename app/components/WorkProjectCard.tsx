"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import MuxVideo from "@mux/mux-video-react";
import gsap from "gsap";
import { getMuxThumbnailUrl } from "../mux";

export interface WorkProject {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  client: string;
  challenge: string;
  identity: string;
  year: string;
  visit: string;
  deliverables: string;
  image?: string;
  video?: string;
  alt: string;
  index?: number;
  view?: "grid" | "list";
  onHover?: (project: WorkProject, element: HTMLElement) => void;
  onLeave?: () => void;
}

const WorkProjectCard = (project: WorkProject) => {
  const {
    id,
    title,
    description,
    category,
    status,
    year,
    image,
    video,
    alt,
    index,
    onHover,
    onLeave,
    view = "list",
  } = project;
  const videoPoster = video ? getMuxThumbnailUrl(video) : undefined;

  const cursorRef = useRef<HTMLSpanElement>(null);
  // quickTo setters avoid re-rendering React on every mousemove — gsap drives the transform directly
  const xTo = useRef<((value: number) => void) | null>(null);
  const yTo = useRef<((value: number) => void) | null>(null);

  useEffect(() => {
    if (!cursorRef.current) return;

    gsap.set(cursorRef.current, {
      xPercent: 0,
      yPercent: -50,
      scale: 0,
      opacity: 0,
    });
    xTo.current = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.5,
      ease: "power3",
    });
    yTo.current = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.5,
      ease: "power3",
    });

    return () => {
      if (cursorRef.current) gsap.killTweensOf(cursorRef.current);
    };
  }, []);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    if (cursorRef.current) {
      // snap to the entry point instantly so it doesn't glide in from the last position
      gsap.set(cursorRef.current, { x: event.clientX + 14, y: event.clientY });
      gsap.to(cursorRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.35,
        ease: "back.out(2)",
      });
    }
    onHover?.(project, event.currentTarget);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    xTo.current?.(event.clientX + 14);
    yTo.current?.(event.clientY);
  };

  const handleMouseLeave = () => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
      });
    }
    onLeave?.();
  };

  const cursorLabel = (
    <span
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center gap-1 rounded-full bg-[#f9fe01] font-mono text-[10px] font-semibold uppercase tracking-tight text-black opacity-0 [will-change:transform]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20px"
        viewBox="0 -960 960 960"
        width="20px"
        fill="#000"
      >
        <path d="M260-260v-220h52v168h168v52H260Zm388-220v-168H480v-52h220v220h-52Z" />
      </svg>
    </span>
  );

  const cardContent =
    view === "grid" ? (
      <>
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/5">
          {/* Centered loading indicator over the media area */}
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-1 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="#999"
              className="animate-spin"
            >
              <path d="M332.55-129.9q-69.29-29.9-121.02-81.63-51.73-51.73-81.63-121.02-29.9-69.3-29.9-147.8 0-78.51 29.96-147.5 29.96-69 81.58-120.61 51.61-51.62 121.04-81.58T480-860q12.75 0 21.37 8.63 8.63 8.63 8.63 21.38 0 12.76-8.63 21.37Q492.75-800 480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-12.77 8.63-21.38 8.63-8.62 21.38-8.62 12.76 0 21.37 8.63Q860-492.75 860-480q0 77.99-29.96 147.42-29.96 69.43-81.58 121.04-51.61 51.62-120.61 81.58Q558.86-100 480.35-100q-78.5 0-147.8-29.9Z" />
            </svg>
          </span>

          {video ? (
            <div>
              <span className="absolute transition-colors duration-400 left-2 hover:bg-black/20 font-mono z-1 top-2 bg-black/10 px-1 tracking-tight font-semibold uppercase text-[11px] text-white backdrop-blur-md">
                {status}
              </span>
            </div>
          ) : image ? (
            <span className="absolute transition-colors duration-400 left-2 hover:bg-black/20 font-mono z-1 top-2 bg-black/10 px-1 tracking-tight font-semibold uppercase text-[11px] text-white backdrop-blur-md">
              {status}
            </span>
          ) : (
            <div className="h-full w-full bg-black/5" aria-label={alt} />
          )}

          {video ? (
            <MuxVideo
              playbackId={video}
              poster={videoPoster}
              autoPlay
              muted
              loop
              playsInline
              aria-label={alt}
              metadata={{ video_id: id, video_title: title }}
              preload="metadata"
              streamType="on-demand"
              capRenditionToPlayerSize
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-101"
            />
          ) : image ? (
            <Image
              src={image}
              alt={alt}
              loading="eager"
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-101"
            />
          ) : (
            <div className="h-full w-full bg-black/5" aria-label={alt} />
          )}
        </div>

        <div className="mt-4 flex flex-col leading-3 text-xs uppercase tracking-tight">
          <span className="font-semibold">{title}</span>
          <span className="font-semibold text-black/40">{category}</span>
        </div>
      </>
    ) : (
      <>
        <span className="font-semibold tracking-tight text-black">
          {index ?? ""}
        </span>

        <span className="flex w-full flex-col font-semibold tracking-tighter">
          {title}

          <span className="mt-1 block w-full text-[#999] sm:hidden">
            {description} - <span className="ml-1">[ {category} ]</span>
          </span>
        </span>

        <span className="hidden font-semibold tracking-tighter text-[#999] sm:block">
          {description}
        </span>

        <span className="hidden font-semibold tracking-tight text-[#999] sm:block">
          {category}
        </span>

        <span className="text-right font-semibold  tracking-tighter text-[#999]">
          {year}
        </span>
      </>
    );

  if (view === "grid") {
    return (
      <Link
        href={`/work/project/${id}`}
        className="group mb-4 block no-underline"
      >
        <article
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="cursor-pointer"
        >
          {cardContent}
          {cursorLabel}
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/work/project/${id}`} className="group block no-underline">
      <article
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="grid grid-cols-[2rem_minmax(0,1fr)_4rem] items-center gap-3 border-t border-black/10 py-6 text-sm transition-colors duration-400 hover:bg-black/[0.03] sm:grid-cols-[2rem_minmax(7rem,1fr)_minmax(12rem,2fr)_minmax(8rem,1fr)_4rem] sm:gap-6"
      >
        {cardContent}
        {cursorLabel}
      </article>
    </Link>
  );
};

export default WorkProjectCard;
