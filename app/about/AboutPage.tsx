"use client";

import Lenis from "lenis";
import { useEffect, useState } from "react";
import MuxVideo from "@mux/mux-video-react";
import Navbar from "../components/Navbar";
import { ResumeDetails } from "../components/ResumeDetails";
import Footer from "../components/Footer";
import { getMuxPlaybackId } from "../mux";
import Introduction from "../components/Introduction";

const Page = () => {
  const [imageHovered, setImageHovered] = useState(false);
  const aboutVideo = getMuxPlaybackId("about");

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="w-full scrollbar-hide bg-white">
      <Introduction videoKey="kunye" description=" about The Wise Studio." />

      <Navbar />
      <div className="mt-40 grid w-full grid-cols-1 gap-10 p-6 md:grid-cols-2">
        <h1 className="mb-4 text-3xl font-semibold tracking-tighter text-[#999] md:text-5xl">
          About The Wise Studio
        </h1>

        <div>
          <p className="indent-8 font-medium leading-tight tracking-tighter md:text-md">
            <span className="-mr-0.5 text-3xl">W</span>ise Studios is a software
            engineering studio founded by Wandile Yanda Langa, focused on
            designing and building thoughtful digital products, platforms and
            experiences. We work across software engineering, product design and
            emerging technologies to turn ideas into reliable, scalable
            software.
          </p>

          <p className="indent- mt-4 text-base font-medium leading-tight tracking-tighter md:text-md">
            We work closely with founders, businesses and creative teams from
            the earliest stages of an idea through to launch and beyond. Our
            approach combines engineering discipline with creative thinking,
            allowing us to build products that are technically sound, visually
            considered and genuinely useful.
          </p>

          <p className="indent-8 mt-4 text-base font-medium leading-tight tracking-tighter md:text-">
            Our work spans web applications, SaaS platforms, AI-powered
            products, internal tools and digital experiences. We design systems
            around the needs of the people using them, with an emphasis on
            performance, maintainability, accessibility and long-term
            scalability.
          </p>

          <p className="indent- mt-4 text-base font-medium leading-tight tracking-tighter md:text-l">
            Technology is central to our practice, but it is never the objective
            on its own. We use modern engineering tools, frameworks and AI to
            solve meaningful problems, simplify complex workflows and create
            software that feels intuitive from the first interaction.
          </p>

          <p className="indent- mt-4 text-base font-medium leading-tight tracking-tighter md:text-">
            The Wise Studio operates as a small, independent engineering studio,
            allowing us to stay close to the work and move quickly. Every
            project is approached with curiosity, technical rigor and a
            commitment to building something that can evolve with its users.
          </p>

          {/* col-start-2/col-span-3 = 75% width, offset 25% from left, on mobile.
    lg:col-start-3/col-span-2 = 50% width, offset 50%, on desktop. */}
          <div className="mt-10 grid w-full grid-cols-4 gap-4">
            <div className="col-span-3 col-start-2 flex flex-col lg:col-span-2 lg:col-start-3">
              <div className="flex w-full items-center justify-between text-sm font-semibold tracking-tight">
                <span className="text-[#999]">Mail:</span>

                <a
                  href="mailto:info@thewisestudio.xyz"
                  className="text-black  hover:underline"
                >
                  info@thewisestudio.xyz
                </a>
              </div>
              <div className="flex w-full items-center -mt-1 justify-between text-sm font-semibold tracking-tight">
                <span className="text-[#999]">Phone:</span>
                <a
                  href="tel:+27815909191"
                  className="text-black hover:underline"
                >
                  +27 (81) 590-9191
                </a>
              </div>
              <div className="flex w-full items-center -mt-1 justify-between text-sm font-semibold tracking-tight">
                <span className="text-[#999]">Instagram:</span>

                <a
                  href="https://www.instagram.com/wisestudios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline"
                >
                  @wisee_
                </a>
              </div>

              <div
                className="relative cursor-pointer mt-4 aspect-[4/5] w-full overflow-hidden bg-gray-200"
                onMouseEnter={() => setImageHovered(true)}
                onMouseLeave={() => setImageHovered(false)}
              >
                <img
                  src="/images/user.avif"
                  alt="The Wise Studio"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
                    imageHovered && aboutVideo ? "opacity-0" : "opacity-100"
                  }`}
                />
                {aboutVideo && (
                  <div>
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
                    <MuxVideo
                      playbackId={aboutVideo}
                      autoPlay
                      muted={!imageHovered}
                      loop
                      playsInline
                      metadata={{
                        video_id: "about",
                        video_title: "The Wise Studio",
                      }}
                      preload="metadata"
                      streamType="on-demand"
                      capRenditionToPlayerSize
                      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
                        imageHovered ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>
                )}
              </div>

              <span className="mt-1 flex flex-col items-end justify-end gap-1 font-mono text-xs font-medium uppercase leading-4 tracking-tighter text-[#999]">
                Elona Hanna Hayes, founding member.
              </span>

              <div className="mb-4 flex w-full flex-col text-sm">
                <span className="mt-4 font-medium tracking-tight text-[#999]">
                  Location
                </span>
                <a
                  href="https://maps.app.goo.gl/3eLcwYFzWXMgxSZ66"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col font-semibold tracking-tighter"
                >
                  <span>The Wise Studio</span>
                  <span>Falcon Crescent</span>
                  <span className="mt-2">Woodlands</span>
                  <span>Pietermaritzburg</span>
                  <span>3201</span>
                </a>
              </div>
            </div>
          </div>

          <ResumeDetails />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
