"use client";

import React, { useEffect } from "react";
import Link from "next/link";

import Lenis from "lenis";

const page = () => {
  const bookingUrl = "https://calendar.app.google/Ky91ZmnvcKwghU6D8";

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <div className="fixed top-0 left-0 z-20 flex text-white w-full flex-col gap-2 p-4  font-medium tracking-tight mix-blend-difference sm:flex-row sm:items-center sm:justify-between">
        <div className="flex max-w-80 justify-between w-full">
          <Link href="/" className="font-bold tracking-tighter  italic">
            WISE
          </Link>{" "}
        </div>

        <div className="flex gap-2   font-medium text-white mix-blend-difference">
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
            className="cursor hover:underline"
          >
            Consult
          </Link>
        </div>
      </div>

      <div className="grid  mt-20 grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div>
          {" "}
          <h1 className="text-5xl mt-10 mb-4 justify- tracking-tighter text-[#999] font-semibold">
            Terms / Privacy Policy
          </h1>
        </div>
        <div>
          <span className="text-[#999] font-medium tracking-tight ">
            Update: August 28, 2026
          </span>

          <div className="lg:grid-cols-2 grid-cols-1 grid mt-8 gap-4">
            <p className="font-medium text-lg  leading-6 tracking-tighter">
              Welcome to Wise Studios. These Terms of Service (“Terms”) govern
              your use of our website, products, and services. By accessing or
              using our services, you agree to comply with these Terms. If you
              do not agree, please do not use our website.
            </p>

            <div>
              <span className="flex flex-col  px-4">
                <span className="text-[#999]  text-sm mb-2 font-medium tracking-tight ">
                  1. Acceptance of Terms
                </span>

                <span className="font-medium text-sm leading-4 tracking-tight ">
                  <span className="opacity-0">______</span> By using our
                  services, you acknowledge that you have read, understood, and
                  agreed to these Terms. If you are using our services on behalf
                  of a company or organization, you represent that you have the
                  authority to bind them to these Terms.
                </span>
                <span className="font-medium text-sm leading-4 tracking-tight ">
                  <span className="opacity-0">______</span> We reserve the right
                  to update, modify, or change these Terms at any time. Changes
                  will be effective upon posting on our website. Continued use
                  of our services after changes are posted constitutes
                  acceptance of the updated Terms.
                </span>
                <span className="font-medium text-sm leading-4 tracking-tight ">
                  <span className="opacity-0">______</span> If you do not agree
                  to the modified Terms, you must stop using our services. We
                  encourage you to review these Terms periodically to stay
                  informed of any updates.
                </span>
              </span>
              <span className="flex flex-col mt-4  px-4">
                <span className="text-[#999]  text-sm mb-2 font-medium tracking-tight ">
                  2. User responsibilities
                </span>

                <span className="font-medium text-sm leading-4 tracking-tight ">
                  <span className="opacity-0">______</span> You agree to use our
                  services only for lawful purposes and in accordance with these
                  Terms. You must not engage in any activity that could damage,
                  disrupt, or interfere with the proper functioning of our
                  website or services.
                </span>
                <span className="font-medium text-sm leading-4 tracking-tight ">
                  <span className="opacity-0">______</span>You are responsible
                  for maintaining the confidentiality of your account
                  credentials and for all activities that occur under your
                  account. If you suspect unauthorized use of your account, you
                  must notify us immediately.
                </span>
                <span className="font-medium text-sm leading-4 tracking-tight ">
                  <span className="opacity-0">______</span> We reserve the right
                  to suspend or terminate your access if we determine that you
                  have violated these Terms, engaged in fraudulent activity, or
                  used our services in a way that may cause harm to others.
                </span>
                <span className="font-medium text-sm leading-4 tracking-tight ">
                  <span className="opacity-0">______</span> Misuse of our
                  services, including attempting to gain unauthorized access,
                  distributing harmful software, or violating intellectual
                  property rights, may result in legal action.
                </span>
              </span>
              <span className="flex flex-col mt-4  px-4">
                <span className="text-[#999]  text-sm mb-2 font-medium tracking-tight ">
                  3. Usage Data
                </span>

                <span className="font-medium text-sm leading-4 tracking-tight ">
                  <span className="opacity-0">______</span> By using our
                  services, you acknowledge that you have read, understood, and
                  agreed to these Terms. If you are using our services on behalf
                  of a company or organization, you represent that you have the
                  authority to bind them to these Terms.
                </span>
                <span className="font-medium text-sm leading-4 tracking-tight ">
                  <span className="opacity-0">______</span>We reserve the right
                  to update, modify, or change these Terms at any time. Changes
                  will be effective upon posting on our website. Continued use
                  of our services after changes are posted constitutes
                  acceptance of the updated Terms.
                </span>
                <span className="font-medium text-sm leading-4 tracking-tight ">
                  <span className="opacity-0">______</span> If you do not agree
                  to the modified Terms, you must stop using our services. We
                  encourage you to review these Terms periodically to stay
                  informed of any updates.
                </span>
              </span>
              <span className="flex flex-col mt-4  px-4">
                <span className="text-[#999]  text-sm mb-2 font-medium tracking-tight ">
                  4. What information do we collect?
                </span>

                <span className="font-medium text-sm leading-4 tracking-tight ">
                  <span className="opacity-0">______</span> We may update our
                  Privacy Policy from time to time and will notify users of any
                  changes by posting the new Privacy Policy on this page. You
                  are advised to revisit this page and review our Privacy Policy
                  periodically for any changes.
                </span>
              </span>
              <span className="flex flex-col mt-4  px-4">
                <span className="text-[#999]  text-sm mb-2 font-medium tracking-tight ">
                  5. Contact us?
                </span>

                <span className="font-medium text-sm leading-4 tracking-tight ">
                  <span className="opacity-0">______</span> If you have any
                  questions about this Privacy Policy, You can contact us by
                  email:{" "}
                  <a href="mailto:hello@website.com">hello@website.com</a>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
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

export default page;
