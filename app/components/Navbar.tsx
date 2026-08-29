"use client";

import Link from "next/link";
import { gsap } from "gsap";
import {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const bookingUrl = "https://calendar.app.google/Ky91ZmnvcKwghU6D8";

const links = [
  { href: "/", label: "Selected," },
  { href: "/work", label: "Work," },
  { href: "/about", label: "About," },
  { href: "/legal", label: "Legal" },
];

const Navbar = forwardRef<
  HTMLElement,
  { className?: string; currentTime?: string }
>(({ className = "", currentTime }, ref) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [localTime, setLocalTime] = useState("");

  const asideRef = useRef<HTMLDivElement>(null);
  const linksContainerRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true); // skip animating the panel into place on initial mount

  const closeSidebar = () => {
    const panel = asideRef.current;
    const items = linksContainerRef.current
      ? Array.from(linksContainerRef.current.querySelectorAll("a"))
      : [];

    if (!panel || !sidebarOpen) return;

    gsap
      .timeline({
        defaults: { ease: "power3.inOut" },
        onComplete: () => setSidebarOpen(false),
      })
      .to(items, {
        y: 14,
        opacity: 0,
        filter: "blur(4px)",
        duration: 0.25,
        stagger: 0.03,
      })
      .to(
        panel,
        {
          clipPath: "inset(0% 0% 0% 100%)",
          duration: 0.65,
        },
        "-=0.08",
      );
  };

  useEffect(() => {
    const updateTime = () => {
      setLocalTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Africa/Johannesburg",
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    };

    updateTime();
    const interval = window.setInterval(updateTime, 1_000);
    return () => window.clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    const panel = asideRef.current;
    if (!panel) return;

    if (isFirstRender.current) {
      gsap.set(panel, { clipPath: "inset(0% 0% 0% 100%)" });
      isFirstRender.current = false;
      return;
    }

    const items = linksContainerRef.current
      ? Array.from(linksContainerRef.current.querySelectorAll("a"))
      : [];

    // scoped context so revert() only kills tweens this effect created
    const ctx = gsap.context(() => {
      if (sidebarOpen) {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        tl.to(panel, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.8,
        }).fromTo(
          items,
          { y: 20, opacity: 0, filter: "blur(6px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.55,
            stagger: 0.06,
          },
          "-=0.4",
        );
      }
    });

    return () => ctx.revert();
  }, [sidebarOpen]);

  return (
    <>
      <nav
        ref={ref}
        className={`fixed left-0 top-0 z-20 flex w-full items-center justify-between p-4 font-medium tracking-tight mix-blend-difference ${className}`}
      >
        <Link href="/" className="font-bold italic tracking-tighter text-white">
          WISE
        </Link>
        <span className="w-[6rem] tracking-tighter whitespace-nowrap text-right tabular-nums text-white">
          {currentTime || localTime}
        </span>
        <div className="hidden gap-2 text-white sm:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}

          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Consult
          </a>
        </div>
        <button
          type="button"
          aria-label={sidebarOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={sidebarOpen}
          onClick={() => (sidebarOpen ? closeSidebar() : setSidebarOpen(true))}
          className="flex h-9 w-9 items-center justify-center text-white sm:hidden"
        >
          <span className="sr-only">
            {sidebarOpen ? "Close navigation" : "Open navigation"}
          </span>
          <span className="flex flex-col gap-1">
            <span className="h-px w-5 bg-current" />
            <span className="h-px w-5 bg-current" />
          </span>
        </button>
      </nav>
      <aside
        ref={asideRef}
        aria-hidden={!sidebarOpen}
        className={`fixed right-0 top-0 z-40 flex h-full w-full flex-col bg-white p-6 text-black sm:hidden ${sidebarOpen ? "" : "pointer-events-none"}`}
      >
        <div className="flex items-center justify-between">
          <span className="font-bold italic tracking-tighter">WISE</span>
          <button
            type="button"
            aria-label="Close navigation"
            onClick={closeSidebar}
            className="text-2xl leading-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#"
            >
              <path d="M256-213.85 213.85-256l224-224-224-224L256-746.15l224 224 224-224L746.15-704l-224 224 224 224L704-213.85l-224-224-224 224Z" />
            </svg>
          </button>
        </div>
        <div
          ref={linksContainerRef}
          className="my-auto flex flex-col uppercase text-2xl font-medium tracking-tighter"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeSidebar}>
              {link.label}
            </Link>
          ))}

          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            onClick={closeSidebar}
          >
            Consult
          </a>
        </div>
        <div className="flex w-full text-sm justify-between items-center font-medium tracking-tight">
          <div className="flex  flex-col">
            <span>Software engrineer </span>
            <span className="-mt-1">South Africa, PMB </span>
          </div>
          <span>©2026 Wise</span>
        </div>
      </aside>
    </>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;

// Design note: replaced the CSS transition-transform with GSAP so the panel slide
// and link stagger can overlap ("-=0.35") instead of firing sequentially — reads
// as one continuous motion rather than "panel stops, then text pops in."
