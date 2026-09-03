"use client";

import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import MuxVideo from "@mux/mux-video-react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import SplitScramble, { SplitScrambleHandle } from "./components/SplitScramble";
import { projects, type ProjectDetail } from "@/lib/projects";

const SLAT_COUNT = 1;
const featuredProjectIds = [
  "Just_Do_It",
  "Redline",
  "Hearth",
  "Honorable",
  "echelon",
] as const;
const featuredProjects = featuredProjectIds.flatMap((id) => {
  const project = projects.find((item) => item.id === id);
  return project ? [project] : [];
});
const defaultProject =
  featuredProjects.find((project) => project.id === "Just_Do_It") ??
  featuredProjects[0];
const featuredVideos = featuredProjects.filter(
  (project): project is ProjectDetail & { video: string } =>
    Boolean(project.video),
);

interface BackgroundLayer {
  id: number;
  image?: string;
  playbackId?: string;
  visible: boolean;
}

const ProjectCard = ({
  project,
  onHover,
  onLeave,
}: {
  project: ProjectDetail;
  onHover: (project: ProjectDetail) => void;
  onLeave: () => void;
}) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const titleRef = useRef<SplitScrambleHandle>(null);
  const descriptionRef = useRef<SplitScrambleHandle>(null);

  useEffect(() => {
    if (!window.matchMedia("(max-width: 639px)").matches || !cardRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onHover(project);
      },
      { rootMargin: "-49% 0px -49% 0px", threshold: 0 },
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [onHover, project]);

  const animateText = (color: string) => {
    titleRef.current?.scramble();
    descriptionRef.current?.scramble();
    if (cardRef.current) {
      gsap.to(cardRef.current.children, {
        color,
        duration: 1,
        stagger: 0.1,
        ease: "power2.inOut",
        overwrite: "auto",
      });
    }
  };

  return (
    <Link
      ref={cardRef}
      href={`/work/project/${project.id}`}
      onMouseEnter={() => {
        onHover(project);
        animateText("#6ff45d");
      }}
      onMouseLeave={() => {
        onLeave();
        animateText("#ffffff");
      }}
      className="flex w-full max-w-60  cursor-pointer flex-col p-2 text-sm font-medium leading-tight tracking-tight mix-blend-difference hover:mix-blend-normal sm:mx-0"
    >
      <SplitScramble
        ref={titleRef}
        text={project.title}
        className="inline-block font-semibold tracking-tighter w-full"
      />
      <SplitScramble
        ref={descriptionRef}
        text={project.description}
        className="mt-0.5 line-clamp-2 max-h-8 block w-full font-semibold leading-4 tracking-tighter"
      />
      <span className="mt-2 flex flex-col">
        <span className=" font-semibold tracking-tighter ">
          {project.category}
        </span>
        <span className="text-xs tracking-tighter">{project.year}</span>
      </span>
    </Link>
  );
};

const Page = () => {
  const [southAfricaTime, setSouthAfricaTime] = useState("");
  const [layers, setLayers] = useState<BackgroundLayer[]>([
    {
      id: 0,
      image: defaultProject.image,
      playbackId: defaultProject.video,
      visible: true,
    },
  ]);
  const headerRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const introTextRef = useRef<HTMLSpanElement>(null);
  const layerIdRef = useRef(0);

  const transitionToBackground = (project: ProjectDetail) => {
    setLayers((current) => {
      const activeLayer = current[current.length - 1];
      if (
        activeLayer.image === project.image &&
        activeLayer.playbackId === project.video
      ) {
        return current;
      }

      layerIdRef.current += 1;
      return [
        ...current,
        {
          id: layerIdRef.current,
          image: project.image,
          playbackId: project.video,
          visible: false,
        },
      ];
    });
  };

  const handleLayerTransitionEnd = (id: number) => {
    setLayers((current) =>
      current[current.length - 1].id === id
        ? [current[current.length - 1]]
        : current,
    );
  };

  useEffect(() => {
    const top = layers[layers.length - 1];
    if (top.visible) return;
    const frame = requestAnimationFrame(() => {
      setLayers((current) =>
        current.map((layer) =>
          layer.id === top.id ? { ...layer, visible: true } : layer,
        ),
      );
    });
    return () => cancelAnimationFrame(frame);
  }, [layers]);

  useEffect(() => {
    const intro = gsap.context(() => {
      const slats = gsap.utils.toArray<HTMLDivElement>("[data-slat]");
      // Origin alternates per slat so neighbouring strips retract in opposite
      // directions (top vs bottom) — avoids the "single guillotine" look of a
      // uniform wipe and reads as a more deliberate, editorial motion.
      slats.forEach((slat, i) => {
        gsap.set(slat, { transformOrigin: i % 2 === 0 ? "top" : "bottom" });
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        introTextRef.current,
        { opacity: 0, letterSpacing: "0.4em", filter: "blur(6px)" },
        {
          opacity: 1,
          letterSpacing: "-0.05em",
          filter: "blur(0px)",
          duration: 0.6,
          ease: "power4.out",
        },
      )
        .to(
          introTextRef.current,
          { opacity: 0, duration: 0.3, ease: "power2.in" },
          "+=0.3",
        )
        // Slats retract from the center outward — the wave direction gives the
        // reveal a focal point instead of a flat left-to-right sweep.
        .to(
          slats,
          {
            scaleY: 0,
            duration: 0.9,
            ease: "power4.inOut",
            stagger: { each: 0.07, from: "center" },
          },
          "-=0.1",
        )
        .fromTo(
          "[data-background]",
          { scale: 1.12, filter: "blur(8px)" },
          { scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power2.out" },
          "-=0.9",
        )
        .fromTo(
          headerRef.current,
          { y: -16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.8",
        )
        .fromTo(
          projectsRef.current?.children ?? [],
          { y: 28, opacity: 0, filter: "blur(8px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.9,
            stagger: 0.08,
          },
          "-=0.45",
        );
    });

    return () => intro.revert();
  }, []);

  return (
    <div className="relative bg-white min-h-screen overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 opacity-0"
      >
        {featuredVideos.map((project) => (
          <MuxVideo
            key={project.id}
            playbackId={project.video}
            poster={project.image}
            autoPlay
            muted
            loop
            playsInline
            metadata={{ video_id: project.id, video_title: project.title }}
            preload="auto"
            streamType="on-demand"
            capRenditionToPlayerSize={false}
            className="h-full w-full object-cover"
          />
        ))}
      </div>
      <div
        ref={revealRef}
        className="pointer-events-none  fixed inset-0 z-51 flex"
      >
        {Array.from({ length: SLAT_COUNT }).map((_, i) => (
          <div
            key={i}
            data-slat
            className="h-full flex-1 z-100 bg-white will-change-transform"
          />
        ))}
      </div>
      <span
        ref={introTextRef}
        className="pointer-events-none flex flex-col uppercas fixed inset-0 z-[60] flex items-center justify-center text-lg font-semibold tracking-tight text-black"
      >
        <img src="/images/user.avif" alt="loader" className="w-40" />
        <span></span>
      </span>
      {layers.map((layer) => (
        <div
          key={layer.id}
          data-background
          onTransitionEnd={() => handleLayerTransitionEnd(layer.id)}
          className={`fixed inset-0 overflow-hidden transition-opacity duration-600 ease-in-out ${layer.visible ? "opacity-100" : "opacity-0"}`}
        >
          {layer.playbackId ? (
            <MuxVideo
              playbackId={layer.playbackId}
              poster={layer.image}
              autoPlay
              muted
              loop
              playsInline
              metadata={{
                video_id: layer.id.toString(),
                video_title: "Home background",
              }}
              preload="auto"
              streamType="on-demand"
              capRenditionToPlayerSize
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div
              className="h-full w-full bg-cover bg-top bg-no-repeat"
              style={{ backgroundImage: `url('${layer.image}')` }}
            />
          )}
        </div>
      ))}
      <div className="absolute inset-0 z-10 bg-black/30" />

      <Navbar ref={headerRef} className="z-50" currentTime={southAfricaTime} />
      <div
        ref={projectsRef}
        className="relative z-20 grid w-full grid-cols-1 gap-6 px-4 pb-[50vh] pt-[45vh] text-white sm:absolute sm:inset-0 sm:grid-cols-2 sm:content-center sm:gap-8 sm:py-20 md:grid-cols-3 lg:grid-cols-5 lg:gap-2"
      >
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onHover={transitionToBackground}
            onLeave={() => transitionToBackground(defaultProject)}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
