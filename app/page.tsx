// app/page.tsx
"use client";

import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import SplitScramble, { SplitScrambleHandle } from "./components/SplitScramble";

const defaultBackground = "/qyPgzVEHPMykvrKPpxbAMzv7Jk0.avif";
const bookingUrl = "https://calendar.app.google/Ky91ZmnvcKwghU6D8";

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
    image: "/zane-winter-zTMkVbpzFd8-unsplash.avif",
  },
];

const ProjectCard = ({
  title,
  description,
  category,
  year,
  image,
  onHover,
  onLeave,
}: Project & {
  onHover: (image: string) => void;
  onLeave: () => void;
}) => {
  const projectRef = useRef<HTMLDivElement>(null);
  const titleScrambleRef = useRef<SplitScrambleHandle>(null);
  const descScrambleRef = useRef<SplitScrambleHandle>(null);
  const catScrambleRef = useRef<SplitScrambleHandle>(null);

  const animateProject = (color: string, stagger: number) => {
    if (!projectRef.current) return;

    titleScrambleRef.current?.scramble();
    descScrambleRef.current?.scramble();
    catScrambleRef.current?.scramble();

    gsap.to(projectRef.current.children, {
      color,
      duration: 1,
      stagger,
      ease: "power2.inOut",
      overwrite: "auto",
    });
  };

  return (
    <div
      ref={projectRef}
      onMouseEnter={() => {
        onHover(image);
        animateProject("#6ff45d", 0.1);
      }}
      onMouseLeave={() => {
        onLeave();
        animateProject("#ffffff", 0.1);
      }}
      className=" flex w-full max-w-60 cursor-pointer flex-col p-2 text-sm font-medium leading-tight tracking-tight mix-blend-difference hover:mix-blend-normal sm:mx-0"
    >
      <SplitScramble
        ref={titleScrambleRef}
        text={title}
        className="inline-block w-full"
      />
      <SplitScramble
        ref={descScrambleRef}
        text={description}
        className="mt-0.5 block w-full leading-4"
      />
      <span className="mt-2 flex flex-col">
        <SplitScramble
          ref={catScrambleRef}
          text={category}
          className="inline-block w-full"
        />

        <span className=" text-[14px]">{year}</span>
      </span>
    </div>
  );
};

const Page = () => {
  const [southAfricaTime, setSouthAfricaTime] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  // stack of background layers so rapid hovers crossfade correctly — each new
  // target gets its own layer stacked on top; once it's fully opaque it fully
  // covers everything beneath, so those can be dropped with no visible pop
  const [layers, setLayers] = useState<BackgroundLayer[]>([
    { id: 0, src: defaultBackground, visible: true },
  ]);
  const layerIdRef = useRef(0);

  const transitionToBackground = (image: string) => {
    setLayers((prev) => {
      const top = prev[prev.length - 1];
      if (top.src === image) return prev; // already showing/animating to this image
      layerIdRef.current += 1;
      return [...prev, { id: layerIdRef.current, src: image, visible: false }];
    });
  };

  // flips the newest layer to visible on the next frame so the opacity change
  // is picked up as a transition rather than an instant style on mount
  useEffect(() => {
    const top = layers[layers.length - 1];
    if (top.visible) return;

    const raf = window.requestAnimationFrame(() => {
      setLayers((prev) =>
        prev.map((layer) =>
          layer.id === top.id ? { ...layer, visible: true } : layer,
        ),
      );
    });

    return () => window.cancelAnimationFrame(raf);
  }, [layers]);

  // once a layer finishes fading in, it fully occludes every layer behind it —
  // safe to drop those now; skip if a newer layer has since been queued on top
  const handleLayerTransitionEnd = (id: number) => {
    setLayers((prev) => {
      const top = prev[prev.length - 1];
      if (top.id !== id) return prev;
      return [top];
    });
  };

  useEffect(() => {
    const intro = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
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

      return () => timeline.kill();
    });

    return () => intro.revert();
  }, []);

  useEffect(() => {
    const updateTime = () => {
      setSouthAfricaTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Africa/Johannesburg",
          hour: "numeric",
          minute: "2-digit",

          hour12: true,
        }).format(new Date()),
      );
    };

    updateTime();
    const interval = window.setInterval(updateTime, 1_000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        ref={revealRef}
        className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-white text-black [clip-path:inset(0%_0%_0%_0%)]"
      >
        <span className="text-sm font-bold  italic tracking-tight">WISE</span>
      </div>
      {layers.map((layer) => (
        <div
          key={layer.id}
          data-background
          onTransitionEnd={() => handleLayerTransitionEnd(layer.id)}
          className={`absolute inset-0 bg-cover bg-top bg-no-repeat transition-opacity duration-600 ease-in-out ${
            layer.visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${layer.src}')` }}
        />
      ))}
      <div className="absolute inset-0 z-1 bg-black/30" />
      <div
        ref={headerRef}
        className="relative z-20 flex w-full flex-col gap-2 p-4 font-medium tracking-tight text-white mix-blend-difference sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex max-w-80 justify-between w-full">
          <span className="font-bold tracking-tighter   italic">WISE</span>{" "}
          <span>
            <span className=""> {southAfricaTime}</span>
          </span>
        </div>

        <button
          type="button"
          aria-expanded={navOpen}
          aria-controls="main-navigation"
          onClick={() => setNavOpen((open) => !open)}
          className="self-end text-sm font-medium sm:hidden"
        >
          {navOpen ? "Close" : "Menu"}
        </button>
        <div
          id="main-navigation"
          
          className={`${navOpen ? "flex" : "hidden"} absolute right-4 top-full z-30 flex-col gap-2 bg-black/60 p-4 font-medium text-white mix-blend-normal sm:static sm:flex sm:flex-row sm:gap-2 sm:bg-transparent sm:p-0 sm:mix-blend-difference`}
        >
          <Link href="/" className="cursor hover:underline">
            Selected,
          </Link>
          <a href="/work" className="hover:underline cursor">
            Work,
          </a>
          <a href="/about" className="hover:underline cursor">
            About,
          </a>
          <a href="/legal" className="hover:underline cursor">
            Legal,
          </a>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="cursor hover:underline"
          >
            Consult
          </a>
        </div>
      </div>
      <div
        ref={projectsRef}
        className="relative z-2 grid w-full grid-cols-1 gap-6 px-4 pb-8 pt-16 text-white sm:absolute sm:inset-0 sm:grid-cols-2 sm:content-center sm:gap-8 sm:py-20 md:grid-cols-3 lg:grid-cols-5 lg:gap-2"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={`${project.title}-${index}`}
            {...project}
            onHover={transitionToBackground}
            onLeave={() => transitionToBackground(defaultBackground)}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
