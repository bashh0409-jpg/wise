"use client";

import Lenis from "lenis";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full mt-40 p-6">
        <h1 className="text-5xl mb-4 justify- tracking-tighter text-[#999] font-semibold">
          About Wise Studios
        </h1>
        <span>
          <h1 className="text-6xl hidden mb-4 ml-15 tracking-tighter text-[#999] font-semibold">
            Information
          </h1>
          <p className="font-semibold leading-tight justify- text-lg tracking-tighter">
            <span className="opacity-0">______</span>
            <span className="text-4xl">W</span>ise Studios is a software
            engineering studio founded by Wandile Yanda Langa, focused on
            designing and building thoughtful digital products, platforms and
            experiences. We work across software engineering, product design and
            emerging technologies to turn ideas into reliable, scalable
            software.
          </p>

          <p className="font-semibold leading-tight text-lg tracking-tighter">
            <span className="opacity-0">______</span>
            We work closely with founders, businesses and creative teams from
            the earliest stages of an idea through to launch and beyond. Our
            approach combines engineering discipline with creative thinking,
            allowing us to build products that are technically sound, visually
            considered and genuinely useful.
          </p>

          <p className="font-semibold leading-tight mt-4 text-lg tracking-tighter">
            <span className="opacity-0">______</span>{" "}
            <span className="text-4xl">O</span>ur work spans web applications,
            SaaS platforms, AI-powered products, internal tools and digital
            experiences. We design systems around the needs of the people using
            them, with an emphasis on performance, maintainability,
            accessibility and long-term scalability.
          </p>

          <p className="font-semibold leading-tight text-lg tracking-tighter">
            <span className="opacity-0">______</span>
            Technology is central to our practice, but it is never the objective
            on its own. We use modern engineering tools, frameworks and AI to
            solve meaningful problems, simplify complex workflows and create
            software that feels intuitive from the first interaction.
          </p>

          <p className="font-semibold leading-tight text-lg tracking-tighter">
            <span className="opacity-0">______</span>
            Wise Studios operates as a small, independent engineering studio,
            allowing us to stay close to the work and move quickly. Every
            project is approached with curiosity, technical rigor and a
            commitment to building something that can evolve with its users.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <div></div>
            <div className="flex flex-col">
              <div className="flex w-full font-semibold text-sm tracking-tight justify-between items-center">
                <span className="text-[#999]  ">Email:</span>
                <a
                  href="mailto:hello@wisestudios.com"
                  className="text-[#000] hover:underline"
                >
                  hello@wisestudios.com
                </a>
              </div>
              <div className="flex w-full font-semibold text-sm tracking-tight justify-between items-center">
                <span className="text-[#999]  ">Phone:</span>
                <a
                  href="tel:+27815909191"
                  className="text-[#000] hover:underline"
                >
                  +27 (81) 590-9191
                </a>
              </div>
              <div className="flex w-full font-semibold text-sm tracking-tight justify-between items-center">
                <span className="text-[#999]  ">Instagram:</span>
                <a
                  href="https://www.instagram.com/wisee_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000] hover:underline"
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
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${imageHovered ? "opacity-0" : "opacity-100"}`}
                />
                <video
                  src="/cosmos_1964321209.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${imageHovered ? "opacity-100" : "opacity-0"}`}
                />
              </div>{" "}
              <span className="text-[#999] flex flex-col gap-1 text-sm leading-4 mt-1 font-medium tracking-tight ">
                Founders & Co-Founders:
                 <span className="">Wandile Yanda Langa, Chloe Paige, Eleanor Hanna Hayes</span>
              </span>
              <div className="flex w-full  mb-4 text-sm flex-col">
                <span className="text-[#999] mt-4 font-medium tracking-tight ">
                  Location
                </span>
                <a
                  href="https://maps.app.goo.gl/3eLcwYFzWXMgxSZ66"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" font-semibold flex flex-col ml-8 tracking-tighter"
                >
                  <span>WISE Studio</span>
                  <span>Falcon Crescent</span>
                  <span className="mt-2 "> Woodlands</span>
                  <span className=" "> Pietermaritzburg</span>
                  <span> 3201</span>
                </a>
              </div>
            </div>

            <div></div>
          </div>
          <div className="grid grid-cols-2 mt-10 gap-4 w-full">
            <div className="flex  mb-4 text-sm flex-col">
              <span className="text-[#999] font-medium tracking-tight ">
                Selected Clients
              </span>
              <span className=" font-semibold px-8 flex flex-col ml-8 tracking-tighter">
                <span>Northern Lights Gallery (NY-10001)</span>
                <span>Horizon Thread Foundation (SI-Dolina)</span>
                <span>Paper Moon Bureau (LU-Eichenfels)</span>
                <span>Parallel Echo Gallery (IS-Sandvik)</span>
                <span>Iron Bloom House (PL-Mostowo)</span>
                <span>White Quarry Studio (RO-Valeasca)</span>
                <span>Neon Harbour Society (US-Alder City)</span>
                <span>Wolf & Sparrow Office (GB-Ashbourne)</span>
                <span>Nova Terrain Center (ES-Sierra Azul)</span>
                <span>Northern Lights Gallery (NY-10001)</span>
                <span>Horizon Thread Foundation (SI-Dolina)</span>
                <span>Paper Moon Bureau (LU-Eichenfels)</span>
                <span>Parallel Echo Gallery (IS-Sandvik)</span>
                <span>Iron Bloom House (PL-Mostowo)</span>
                <span>White Quarry Studio (RO-Valeasca)</span>
                <span>Neon Harbour Society (US-Alder City)</span>
                <span>Wolf & Sparrow Office (GB-Ashbourne)</span>
                <span>Nova Terrain Center (ES-Sierra Azul)</span>
                <span>Northern Lights Gallery (NY-10001)</span>
                <span>Horizon Thread Foundation (SI-Dolina)</span>
                <span>Paper Moon Bureau (LU-Eichenfels)</span>
                <span>Parallel Echo Gallery (IS-Sandvik)</span>
                <span>Iron Bloom House (PL-Mostowo)</span>
                <span>White Quarry Studio (RO-Valeasca)</span>
                <span>Neon Harbour Society (US-Alder City)</span>
                <span>Wolf & Sparrow Office (GB-Ashbourne)</span>
                <span>Nova Terrain Center (ES-Sierra Azul)</span>
              </span>
            </div>{" "}
            <div className="flex  mb-4 text-sm flex-col">
              <span className="text-[#999] font-medium tracking-tight ">
                Talks and workshops
              </span>
              <span className=" font-semibold flex px-8 flex-col ml-8 tracking-tighter">
                <span> Aurora Institute, Copenhagen </span>
                <span> Northbridge Creative Arts, Chicago </span>
                <span> Visionary Forum, Lisbon </span>
                <span> Design Futures Collective, Vancouver </span>
                <span> Westlake School of Arts, Boston </span>
                <span> Harbor Institute of Design, Providence </span>
                <span> MakeLab, Austin </span>
                <span> Signal Festival </span>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-10 gap-4 w-full">
            <div className="flex  mb-4 text-sm flex-col">
              <span className="text-[#999] font-medium tracking-tight ">
                Work Experiences
              </span>
              <span className=" font-semibold gap-2 flex flex-col ml-8 tracking-tighter">
                <div className="flex flex-col">
                  <span>2025-2026</span>
                  <span className="px-8">
                    Northline Creative, Berlin Creative Director / Director
                  </span>
                </div>
                <div className="flex flex-col">
                  <span>2024-2025</span>
                  <span className="px-8">
                    Northline Creative, Berlin Creative Director / Director
                  </span>
                </div>
                <div className="flex flex-col">
                  <span>2023-2024</span>
                  <span className="px-8">
                    Northline Creative, Berlin Creative Director / Director
                  </span>
                </div>
                <div className="flex flex-col">
                  <span>2021-2023</span>
                  <span className="px-8">
                    Northline Creative, Berlin Creative Director / Director
                  </span>
                </div>
              </span>
            </div>
          </div>
        </span>
      </div>{" "}
      <footer className="mt-50 grid w-full grid-cols-1 gap-10 p-4 text-sm font-medium md:grid-cols-2">
        <div className="flex gap-6">
          <span className="text-[#999] tracking-tight">General enquiries</span>
          <div className="flex tracking-tight flex-col">
            <a href="mailto:hello@wisestudios.com" className="hover:underline">
              <span className="text-[#999]">Mail: </span>hello@wisestudios.com
            </a>
            <a href="tel:+27815909191" className="hover:underline">
              <span className="text-[#999]">Tel: </span>+27 (81) 590-9191
            </a>
            <a
              href="https://www.instagram.com/wisestudios/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              <span className="text-[#999]">Instagram: </span>@wisee_
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
  );
};

export default Page;
