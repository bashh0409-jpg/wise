"use client";

import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import SplitScramble, { SplitScrambleHandle } from "./components/SplitScramble";

const defaultBackground = "/qyPgzVEHPMykvrKPpxbAMzv7Jk0.avif";

interface Project {
  title: string;
  description: string;
  category: string;
  year: string;
  image: string;
}

interface BackgroundLayer {
  id: number;
  src: string;
  visible: boolean;
}

const projects: Project[] = [
  {
    title: "Kinder",
    description: "Building a lifestyle brand rooted in community and culture",
    category: "Education",
    year: "2026",
    image: "/K1z8mV8TAFVjZBpOYWvGpV130Kw.avif",
  },
  {
    title: "Luma",
    description: "A digital-first identity for a fast-growing skincare label",
    category: "Fashion & Beauty",
    year: "2025",
    image: "/suvI3NLr8X1VCgPDJ5pLgxWxU.avif",
  },
  {
    title: "Just Do It",
    description: "Nike's first-ever global campaign for the Paralympics",
    category: "Sports & Fitness",
    year: "2025",
    image: "/jadon-johnson-wdJGAQYf4G0-unsplash.avif",
  },
  {
    title: "Aster",
    description: "A playful commerce experience for a modern flower studio",
    category: "Retail & E-commerce",
    year: "2024",
    image: "/markus-spiske-HYUXBWVyh14-unsplash.avif",
  },
  {
    title: "Field Notes",
    description: "An independent publishing system for slow travel stories",
    category: "Editorial & Publishing",
    year: "2024",
    image: "/cosmos_945699821.avif",
  },
];

const ProjectCard = ({
  project,
  onHover,
  onLeave,
}: {
  project: Project;
  onHover: (image: string) => void;
  onLeave: () => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<SplitScrambleHandle>(null);
  const descriptionRef = useRef<SplitScrambleHandle>(null);

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
    <div
      ref={cardRef}
      onMouseEnter={() => {
        onHover(project.image);
        animateText("#6ff45d");
      }}
      onMouseLeave={() => {
        onLeave();
        animateText("#ffffff");
      }}
      className="flex w-full max-w-60 cursor-pointer flex-col p-2 text-sm font-medium leading-tight tracking-tight mix-blend-difference hover:mix-blend-normal sm:mx-0"
    >
      <SplitScramble
        ref={titleRef}
        text={project.title}
        className="inline-block w-full"
      />
      <SplitScramble
        ref={descriptionRef}
        text={project.description}
        className="mt-0.5 block w-full leading-4"
      />
      <span className="mt-2 flex flex-col">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </span>
    </div>
  );
};

const Page = () => {
  const [southAfricaTime, setSouthAfricaTime] = useState("");
  const [layers, setLayers] = useState<BackgroundLayer[]>([
    { id: 0, src: defaultBackground, visible: true },
  ]);
  const headerRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const layerIdRef = useRef(0);

  const transitionToBackground = (image: string) => {
    setLayers((current) => {
      if (current[current.length - 1].src === image) return current;
      layerIdRef.current += 1;
      return [
        ...current,
        { id: layerIdRef.current, src: image, visible: false },
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
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(revealRef.current, {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 2,
          ease: "power4.inOut",
        })
        .fromTo(
          "[data-background]",
          { scale: 1.98, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" },
        )
        .fromTo(
          headerRef.current,
          { y: -18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=1",
        )
        .fromTo(
          projectsRef.current?.children ?? [],
          { y: 24, opacity: 0, filter: "blur(8px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.9,
            stagger: 0.1,
          },
        );
    });
    return () => intro.revert();
  }, []);

  useEffect(() => {
    const updateTime = () =>
      setSouthAfricaTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Africa/Johannesburg",
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date()),
      );
    updateTime();
    const interval = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        ref={revealRef}
        className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-white text-black [clip-path:inset(0%_0%_0%_0%)]"
      >
        <span className="text-sm font-bold italic tracking-tight">WISE</span>
      </div>
      {layers.map((layer) => (
        <div
          key={layer.id}
          data-background
          onTransitionEnd={() => handleLayerTransitionEnd(layer.id)}
          className={`absolute inset-0 bg-cover bg-top bg-no-repeat transition-opacity duration-600 ease-in-out ${layer.visible ? "opacity-100" : "opacity-0"}`}
              style={{ backgroundImage: `url('${layer.src}')` }}
              
        />
      ))}
          <div className="absolute inset-0 z-10 bg-black/30" />
         
      <Navbar
        ref={headerRef}
        className="relative z-50"
        currentTime={southAfricaTime}
      />
      <div
        ref={projectsRef}
        className="relative z-20 grid w-full grid-cols-1 gap-6 px-4 pb-8 pt-16 text-white sm:absolute sm:inset-0 sm:grid-cols-2 sm:content-center sm:gap-8 sm:py-20 md:grid-cols-3 lg:grid-cols-5 lg:gap-2"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onHover={transitionToBackground}
            onLeave={() => transitionToBackground(defaultBackground)}
          />
        ))}
          </div>
         
    </div>
  );
};

export default Page;
