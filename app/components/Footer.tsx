
import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <footer className="mt-32 grid w-full grid-cols-1 gap-10 p-4 text-sm font-medium md:grid-cols-2">
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
          <span className="text-[#999] tracking-tight">General enquiries</span>
          <div className="flex flex-col tracking-tight">
            <a href="mailto:hello@wisestudios.com" className="hover:underline">
              <span className="text-[#999]">Mail: </span>hello@wisestudios.com
            </a>
            <a href="tel:+27815909191" className="hover:underline">
              <span className="text-[#999]">Tel: </span>+27 (81) 590-9191
            </a>

            
             <a href="https://www.instagram.com/wisestudios/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              <span className="text-[#999]">Instagram: </span>@wisee_
            </a>

            
            <a  href="https://maps.app.goo.gl/3eLcwYFzWXMgxSZ66"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              <span className="text-[#999]">Location: </span>Woodlands, 3201
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-1 md:items-end md:text-right">
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
}

export default Footer
