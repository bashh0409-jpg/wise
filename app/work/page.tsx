"use client";

import Image from "next/image";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Lenis from "lenis";
import WorkProjectCard, { WorkProject } from "../components/WorkProjectCard";

const bookingUrl = "https://calendar.app.google/Ky91ZmnvcKwghU6D8";
const statuses = [
  "All",
  "Idea",
  "Complete",
  "In progress",
  "Coming soon",
] as const;
type StatusFilter = (typeof statuses)[number];

const projects: WorkProject[] = [
  {
    title: "Moya House",
    description: "A warm editorial platform for contemporary African interiors",
    category: "Architecture & Culture",
    image: "/qyPgzVEHPMykvrKPpxbAMzv7Jk0.avif",
    alt: "Moya House project",
    status: "Complete",
    year: "2025",
  },
  {
    title: "Luma",
    description: "A digital-first identity for a fast-growing skincare label",
    category: "Fashion & Beauty",
    image: "/suvI3NLr8X1VCgPDJ5pLgxWxU.avif",
    alt: "Luma project",
    status: "Complete",
    year: "2025",
  },
  {
    title: "Aster",
    description: "A playful commerce experience for a modern flower studio",
    category: "Retail & E-commerce",
    image: "/K1z8mV8TAFVjZBpOYWvGpV130Kw.avif",
    alt: "Aster project",
    status: "Idea",
    year: "2024",
  },

  {
    title: "Field Notes",
    description: "An independent publishing system for slow travel stories",
    category: "Editorial & Publishing",
    image: "/zane-winter-zTMkVbpzFd8-unsplash.avif",
    alt: "Field Notes project",
    status: "In progress",
    year: "2024",
  },
  {
    title: "Just Do It",
    description: "A global campaign built around movement and possibility",
    category: "Sports & Fitness",
    image: "/jadon-johnson-wdJGAQYf4G0-unsplash.avif",
    alt: "Just Do It project",
    status: "Complete",
    year: "2025",
  },
  {
    title: "Onda",
    description: "A fresh visual language for a coastal food journal",
    category: "Food & Hospitality",
    image: "/markus-spiske-HYUXBWVyh14-unsplash.avif",
    alt: "Onda project",
    status: "Coming soon",
    year: "2024",
  },
  {
    title: "Northbound",
    description: "Repositioning a heritage outerwear brand for a new audience",
    category: "Fashion & Retail",
    image: "/gylain-omer-SEHB67NK4Wg-unsplash.avif",
    alt: "Northbound project",
    status: "Complete",
    year: "2025",
  },
  {
    title: "Cinder",
    description: "A campaign-led rebrand for a contemporary fashion label",
    category: "Fashion & Beauty",
    image: "/suvI3NLr8X1VCgPDJ5pLgxWxU.avif",
    alt: "Cinder project",
    status: "Complete",
    year: "2024",
  },
  {
    title: "Echelon",
    description: "Reframing a consulting firm for a new generation of clients",
    category: "Arts & Culture",
    image: "/qyPgzVEHPMykvrKPpxbAMzv7Jk0.avif",
    alt: "Echelon project",
    status: "In progress",
    year: "2025",
  },
  {
    title: "Brim",
    description: "A product-focused identity for a direct-to-consumer startup",
    category: "Technology",
    image: "/K1z8mV8TAFVjZBpOYWvGpV130Kw.avif",
    alt: "Brim project",
    status: "Idea",
    year: "2023",
  },
  {
    title: "Pillar",
    description: "A cohesive brand system for a scaling technology company",
    category: "Technology & Strategy",
    image: "/jadon-johnson-wdJGAQYf4G0-unsplash.avif",
    alt: "Pillar project",
    status: "Coming soon",
    year: "2023",
  },
  {
    title: "Morrow",
    description: "A calm digital home for a contemporary wellness practice",
    category: "Health & Wellness",
    image: "/markus-spiske-HYUXBWVyh14-unsplash.avif",
    alt: "Morrow project",
    status: "Complete",
    year: "2024",
  },
  {
    title: "Still Life",
    description: "A visual identity for a studio making everyday objects",
    category: "Product & Design",
    image: "/zane-winter-zTMkVbpzFd8-unsplash.avif",
    alt: "Still Life project",
    status: "In progress",
    year: "2025",
  },
  {
    title: "Good Form",
    description: "A fresh platform for independent makers and creative work",
    category: "Community & Culture",
    image: "/gylain-omer-SEHB67NK4Wg-unsplash.avif",
    alt: "Good Form project",
    status: "Idea",
    year: "2024",
  },
  {
    title: "Afterglow",
    description: "An atmospheric campaign for a new independent film festival",
    category: "Film & Entertainment",
    image: "/qyPgzVEHPMykvrKPpxbAMzv7Jk0.avif",
    alt: "Afterglow project",
    status: "Complete",
    year: "2023",
  },
  {
    title: "Common Thread",
    description:
      "A collaborative identity for a sustainable textile collective",
    category: "Sustainability & Craft",
    image: "/suvI3NLr8X1VCgPDJ5pLgxWxU.avif",
    alt: "Common Thread project",
    status: "Coming soon",
    year: "2026",
  },
  {
    title: "Orbit",
    description: "A bold launch system for a next-generation creative tool",
    category: "Technology & Innovation",
    image: "/K1z8mV8TAFVjZBpOYWvGpV130Kw.avif",
    alt: "Orbit project",
    status: "In progress",
    year: "2026",
  },
  {
    title: "Casa Norte",
    description:
      "A hospitality experience shaped by local food and slow living",
    category: "Travel & Hospitality",
    image: "/markus-spiske-HYUXBWVyh14-unsplash.avif",
    alt: "Casa Norte project",
    status: "Idea",
    year: "2025",
  },
  {
    title: "Open Water",
    description: "A campaign platform for a community-led ocean initiative",
    category: "Environment & Sport",
    image: "/jadon-johnson-wdJGAQYf4G0-unsplash.avif",
    alt: "Open Water project",
    status: "Complete",
    year: "2024",
  },
  {
    title: "Noma Radio",
    description: "A distinct sonic world for an independent broadcast platform",
    category: "Music & Events",
    image: "/zane-winter-zTMkVbpzFd8-unsplash.avif",
    alt: "Noma Radio project",
    status: "Coming soon",
    year: "2026",
  },
];

const Page = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");
  const [activeProject, setActiveProject] = useState<WorkProject | null>(null);
  const [previewPosition, setPreviewPosition] = useState({ top: 0, left: 0 });
  const previewRef = useRef<HTMLDivElement>(null);
  const previewImageRef = useRef<HTMLImageElement>(null);

  const handleProjectHover = (project: WorkProject, element: HTMLElement) => {
    const bounds = element.getBoundingClientRect();
    const previewWidth = Math.min(window.innerWidth * 0.2, 320);
    const gap = 24;
    const left =
      bounds.right + previewWidth + gap <= window.innerWidth
        ? bounds.right + gap
        : Math.max(gap, bounds.left - previewWidth - gap);

    setPreviewPosition({
      top: bounds.top + bounds.height / 2,
      left,
    });
    setActiveProject(project);
  };

  const filteredProjects =
    statusFilter === "All"
      ? projects
      : projects.filter((project) => project.status === statusFilter);

  useEffect(() => {
    if (!activeProject || !previewRef.current) return;

    gsap.fromTo(
      previewRef.current,
      { opacity: 0, scale: 0.92, filter: "blur(12px)" },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.65,
        ease: "power3.out",
        overwrite: "auto",
      },
    );
    gsap.fromTo(
      previewImageRef.current,
      { scale: 1.12, opacity: 0, filter: "blur(10px)" },
      {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power3.out",
        overwrite: "auto",
      },
    );
  }, [activeProject]);

  useEffect(() => {
    const lenis = new Lenis();
    let frameId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <nav className="fixed left-0 top-0 z-20 flex w-full flex-col gap-2 p-4 font-medium tracking-tight mix-blend-difference sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="font-bold italic tracking-tighter text-white">
          WISE
        </Link>
        <div className="flex gap-2 text-white">
          <Link href="/" className="hover:underline">
            Selected,
          </Link>
          <Link href="/work" className="hover:underline">
            Work,
          </Link>
          <Link href="/about" className="hover:underline">
            About,
          </Link>
          <Link href="/legal" className="hover:underline">
            Legal,
          </Link>
          <Link
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Consult
          </Link>
        </div>
      </nav>

      <main className="mt-50 flex flex-col p-4">
        <button
          onClick={() => {
            setActiveProject(null);
            setStatusFilter("All");
          }}
          className={
            statusFilter === "All"
              ? "text-black flex cursor-pointer items-center gap-1 text-2xl font-bold tracking-tighter text-black"
              : "hover:text-black flex cursor-pointer items-center gap-1 text-2xl font-bold tracking-tighter text-[#999]"
          }
        >
          <span aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              width="18px"
              fill="currentColor"
            >
              <path d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z" />
            </svg>
          </span>
          All Projects ( {projects.length} )
        </button>

        <div className="mt-8 flex grid flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium uppercase tracking-tight text-[#999]">
              View
            </span>
            <button
              type="button"
              aria-label="Grid view"
              aria-pressed={viewMode === "grid"}
              onClick={() => {
                setActiveProject(null);
                setViewMode("grid");
              }}
              className={`cursor-pointer rounded px-1 ${viewMode === "grid" ? "text-black" : "text-[#999] hover:text-black"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="14px"
                viewBox="0 -960 960 960"
                width="14px"
                fill="currentColor"
              >
                <path d="M120-120v-720h720v720H120Zm640-80v-240H520v240h240Zm0-560H520v240h240v-240Zm-560 0v240h240v-240H200Zm0 560h240v-240H200v240Z" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="List view"
              aria-pressed={viewMode === "list"}
              onClick={() => {
                setActiveProject(null);
                setViewMode("list");
              }}
              className={`cursor-pointer rounded px-1 ${viewMode === "list" ? "text-black" : "text-[#999] hover:text-black"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="14px"
                viewBox="0 -960 960 960"
                width="14px"
                fill="currentColor"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </button>
          </div>
          <div className="flex flex-wrap gap-4 overflow-y-auto text-xs font-semibold uppercase tracking-tight text-[#999]">
            {statuses.slice(1).map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => {
                  setActiveProject(null);
                  setStatusFilter(status);
                }}
                className={
                  statusFilter === status
                    ? "text-black cursor-pointer"
                    : "hover:text-black cursor-pointer "
                }
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mt-12 sm:mt-20">
          <div
            className={
              viewMode === "list"
                ? "border-b border-black/10"
                : "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            }
          >
            {filteredProjects.map((project, index) => (
              <WorkProjectCard
                key={project.title}
                {...project}
                index={index + 1}
                view={viewMode}
                onHover={handleProjectHover}
                onLeave={() => setActiveProject(null)}
              />
            ))}
          </div>
          <div
            className={`pointer-events-none fixed z-10 hidden aspect-[4/5] w-[min(20vw,20rem)] -translate-y-1/2 overflow-hidden transition-opacity duration-500 md:block ${viewMode === "list" && activeProject ? "opacity-100" : "opacity-0"}`}
            style={{ top: previewPosition.top, left: previewPosition.left }}
          >
            {activeProject && (
              <div ref={previewRef} className="absolute inset-0">
                <Image
                  key={activeProject.title}
                  ref={previewImageRef}
                  src={activeProject.image}
                  alt={activeProject.alt}
                  fill
                  sizes="20vw"
                  className="object-cover  mix-blend-difference"
                />
              </div>
            )}
          </div>
          <footer className="mt-24 grid w-full grid-cols-1 gap-10 p-4 text-sm font-medium md:mt-50 md:grid-cols-2">
            <div className="flex gap-6">
              <span className="text-[#999] tracking-tight">
                General enquiries
              </span>
              <div className="flex tracking-tight flex-col">
                <a
                  href="mailto:hello@wisestudios.com"
                  className="hover:underline"
                >
                  <span className="text-[#999]">Mail: </span>
                  hello@wisestudios.com
                </a>
                <a
                  href="tel:+27815909191"
                  className="hover:underline tracking-tight"
                >
                  <span className="text-[#999]">Tel: </span>+27 (81) 590-9191
                </a>
                <a
                  href="https://www.instagram.com/wisestudios/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  <span className="text-[#999] tracking-tight">
                    Instagram:{" "}
                  </span>
                  @wisee_
                </a>
                <a
                  href="https://maps.app.goo.gl/3eLcwYFzWXMgxSZ66"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  <span className="text-[#999]">Location: </span>Woodlands, 3201
                </a>
              </div>
            </div>
            <div className="flex flex-col md:items-end">
              <span>Legal notice</span>
              <span className="text-[#999]">
                ©2026 Wise Studios. All rights reserved
              </span>
              <div className="flex gap-4">
                <Link href="/legal" className="text-[#999] hover:text-black">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Page;
