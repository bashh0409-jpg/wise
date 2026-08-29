"use client";

import Image from "next/image";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import Navbar from "../components/Navbar";
import WorkProjectCard, { WorkProject } from "../components/WorkProjectCard";
import Footer from "../components/Footer";

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
    title: "Don't look away",
    description: "An independent publishing system for slow travel stories",
    category: "Editorial & Publishing",
    video: "/cosmos_1964321209.mp4",
    alt: "Field Notes project",
    status: "In progress",
    year: "2024",
  },
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
    title: "911 concept",
    description: "A digital-first identity for a fast-growing skincare label",
    category: "Sport & cars",
    image: "/suvI3NLr8X1VCgPDJ5pLgxWxU.avif",
    video: "/cosmos_1100859839.mp4",
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
    title: "still tv",
    description: "A visual identity for a studio making everyday objects",
    category: "Product & Design",
    video: "/cosmos_941935399.mp4",
    alt: "Still Life project",
    status: "In progress",
    year: "2025",
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
    video: "/SM9hHChcDvagce2VKpv41kGI3g.mp4",
    alt: "Onda project",
    status: "Coming soon",
    year: "2024",
  },
  {
    title: "911 gt3rs",
    description: "Repositioning a heritage outerwear brand for a new audience",
    category: "Sport & cars",
    image: "/user.avif",
    video: "/cosmos_436860355.mp4",
    alt: "Northbound project",
    status: "Complete",
    year: "2025",
  },
  {
    title: "nokta",
    description: "A campaign-led rebrand for a contemporary fashion label",
    category: "Fashion & Beauty",
    image: "/gylain-omer-SEHB67NK4Wg-unsplash.avif",
    alt: "Cinder project",
    status: "Complete",
    year: "2024",
  },
  {
    title: "Life",
    description: "A visual identity for a studio making everyday objects",
    category: "Product & Design",
    video: "/4YRBCPlg5XRd9JNVEthezMkdmQ.mp4",
    alt: "Still Life project",
    status: "In progress",
    year: "2025",
  },
  {
    title: "Good Form",
    description: "A fresh platform for independent makers and creative work",
    category: "Community & Culture",
    image: "/cosmos_1219871018.avif",
    alt: "Good Form project",
    status: "Idea",
    year: "2024",
  },
  {
    title: "Afterglow",
    description: "An atmospheric campaign for a new independent film festival",
    category: "Film & Entertainment",
    image: "/premium_photo-1786925954093-59bcd63365ed.avif",
    alt: "Afterglow project",
    status: "Complete",
    year: "2023",
  },
  {
    title: "Common Thread",
    description:
      "A collaborative identity for a sustainable textile collective",
    category: "Sustainability & Craft",
    image: "/markus-spiske-HYUXBWVyh14-unsplash.avif",
    alt: "Common Thread project",
    status: "Coming soon",
    year: "2026",
  },
  {
    title: "Orbit",
    description: "A bold launch system for a next-generation creative tool",
    category: "Technology & Innovation",
    image: "/user.avif",
    alt: "Orbit project",
    status: "In progress",
    year: "2026",
  },
  {
    title: "Casa Norte",
    description:
      "A hospitality experience shaped by local food and slow living",
    category: "Travel & Hospitality",
    image: "/cosmos_945699821.avif",
    alt: "Casa Norte project",
    status: "Idea",
    year: "2025",
  },
  {
    title: "Open Water",
    description: "A campaign platform for a community-led ocean initiative",
    category: "Environment & Sport",
    video: "/cosmos_420240096.mp4",
    alt: "Open Water project",
    status: "Complete",
    year: "2024",
  },
  {
    title: "Noma Radio",
    description: "A distinct sonic world for an independent broadcast platform",
    category: "Music & Events",
    video: "/cosmos_69270702.mp4",
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
  const previewMediaRef = useRef<HTMLElement>(null);

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
      previewMediaRef.current,
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
      <Navbar />

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
                {activeProject.video ? (
                  <video
                    key={activeProject.video}
                    ref={(element) => {
                      previewMediaRef.current = element;
                    }}
                    src={activeProject.video}
                    poster={activeProject.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label={activeProject.alt}
                    className="h-full w-full object-cover mix-blend-difference"
                  />
                ) : activeProject.image ? (
                  <Image
                    key={activeProject.image}
                    ref={(element) => {
                      previewMediaRef.current = element;
                    }}
                    src={activeProject.image}
                    alt={activeProject.alt}
                    fill
                    sizes="20vw"
                    className="object-cover mix-blend-difference"
                  />
                ) : (
                  <div className="h-full w-full bg-black/5" />
                )}
              </div>
            )}
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Page;
