"use client";

import Lenis from "lenis";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { ResumeDetails } from "../components/ResumeDetails";
import Footer from "../components/Footer";

const Page = () => {
  const [imageHovered, setImageHovered] = useState(false);

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
      <Navbar />
      <div className="mt-40 grid w-full grid-cols-1 gap-10 p-6 md:grid-cols-2">
        <h1 className="mb-4 text-3xl font-semibold tracking-tighter text-[#999] md:text-5xl">
          About Wise Studios
        </h1>

        <div>
          <p className="indent-8 text-base font-medium leading-tight tracking-tighter md:text-lg">
            <span className="-mr-1 text-4xl">W</span>ise Studios is a software
            engineering studio founded by Wandile Yanda Langa, focused on
            designing and building thoughtful digital products, platforms and
            experiences. We work across software engineering, product design
            and emerging technologies to turn ideas into reliable, scalable
            software.
          </p>

          <p className="indent-8 mt-4 text-base font-medium leading-tight tracking-tighter md:text-lg">
            We work closely with founders, businesses and creative teams from
            the earliest stages of an idea through to launch and beyond. Our
            approach combines engineering discipline with creative thinking,
            allowing us to build products that are technically sound,
            visually considered and genuinely useful.
          </p>

          <p className="indent-8 mt-4 text-base font-medium leading-tight tracking-tighter md:text-lg">
            <span className="text-4xl">O</span>ur work spans web applications,
            SaaS platforms, AI-powered products, internal tools and digital
            experiences. We design systems around the needs of the people
            using them, with an emphasis on performance, maintainability,
            accessibility and long-term scalability.
          </p>

          <p className="indent-8 mt-4 text-base font-medium leading-tight tracking-tighter md:text-lg">
            Technology is central to our practice, but it is never the
            objective on its own. We use modern engineering tools, frameworks
            and AI to solve meaningful problems, simplify complex workflows
            and create software that feels intuitive from the first
            interaction.
          </p>

          <p className="indent-8 mt-4 text-base font-medium leading-tight tracking-tighter md:text-lg">
            Wise Studios operates as a small, independent engineering studio,
            allowing us to stay close to the work and move quickly. Every
            project is approached with curiosity, technical rigor and a
            commitment to building something that can evolve with its users.
          </p>

         {/* col-start-2/col-span-3 = 75% width, offset 25% from left, on mobile.
    lg:col-start-3/col-span-2 = 50% width, offset 50%, on desktop. */}
<div className="mt-10 grid w-full grid-cols-4 gap-4">
  <div className="col-span-3 col-start-2 flex flex-col lg:col-span-2 lg:col-start-3">
    <div className="flex w-full items-center justify-between text-sm font-semibold tracking-tight">
      <span className="text-[#999]">Email:</span>
      
       <a href="mailto:hello@wisestudios.com"
        className="text-black hover:underline"
      >
        hello@wisestudios.com
      </a>
    </div>
    <div className="flex w-full items-center justify-between text-sm font-semibold tracking-tight">
      <span className="text-[#999]">Phone:</span>
      <a href="tel:+27815909191" className="text-black hover:underline">
        +27 (81) 590-9191
      </a>
    </div>
    <div className="flex w-full items-center justify-between text-sm font-semibold tracking-tight">
      <span className="text-[#999]">Instagram:</span>
      
      <a  href="https://www.instagram.com/wisestudios/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:underline"
      >
        @wisee_
      </a>
    </div>

    <div
      className="relative mt-4 aspect-[4/5] w-full overflow-hidden bg-gray-200"
      onMouseEnter={() => setImageHovered(true)}
      onMouseLeave={() => setImageHovered(false)}
    >
      <img
        src="/cosmos_43408050.avif"
        alt="Wise Studios"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
          imageHovered ? "opacity-0" : "opacity-100"
        }`}
      />
      <video
        src="/cosmos_1964321209.mp4"
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
          imageHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>

    <span className="mt-1 flex flex-col items-end justify-end gap-1 font-mono text-xs font-medium uppercase leading-4 tracking-tight text-[#999]">
      Eleanor Hanna Hayes
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
        <span>WISE Studio</span>
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