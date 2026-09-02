import React from "react";
import NewsletterSignup from "./NewsletterSignup";

interface ContactLink {
  label: string;
  value: string;
  href: string;
}

interface SocialLink {
  label: string;
  href: string;
}

const BUSINESS_CONTACTS: ContactLink[] = [
  {
    label: "Business",
    value: "hello@thewisestudio.xyz",
    href: "mailto:hello@thewisestudio.xyz",
  },
  {
    label: "Careers",
    value: "careers@thewisestudio.xyz",
    href: "mailto:careers@thewisestudio.xyz",
  },
];

const GENERAL_CONTACTS: ContactLink[] = [
  { label: "Tel", value: "+27 (81) 590-9191", href: "tel:+27815909191" },
  {
    label: "Mail",
    value: "info@thewisestudio.xyz",
    href: "mailto:info@thewisestudio.xyz",
  },
  {
    label: "Instagram",
    value: "@wisee_",
    href: "https://www.instagram.com/wisestudios/",
  },
];

const SOCIALS: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/wisestudios/" },
  { label: "X", href: "https://x.com/wisee_" },
  { label: "Threads", href: "https://www.threads.net/@wisee_" },
];

const ContactColumn = ({
  title,
  contacts,
}: {
  title: string;
  contacts: ContactLink[];
}) => (
  <div className="grid grid-cols-2 tracking-tighter md:grid-cols-3">
    <span className="text-[#999] font-semibold">{title}</span>
    <ul className="flex w-full flex-col justify-between">
      {contacts.map((contact) => (
        <li key={contact.label} className="font-semibold">
          <a
            href={contact.href}
            className="flex w-full  justify-between hover:underline"
          >
            <span className="text-[#999]">{contact.label}: </span>
            {contact.value}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="mt-32 grid w-full grid-cols-1 gap-10 p-4 text-sm font-medium md:grid-cols-2">
      <div className="flex flex-col gap-2 sm:gap-6 md:flex-col">
        <ContactColumn
          title="Business Enquiries"
          contacts={BUSINESS_CONTACTS}
        />
        <ContactColumn title="General Enquiries" contacts={GENERAL_CONTACTS} />
        <NewsletterSignup />
      </div>

      <div className="grid grid-cols-2 items-end tracking-tighter md:grid-cols-3">
        <span className="font-semibold text-[#999]">Socials</span>
        <ul className="flex w-full gap-4">
          {SOCIALS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 font-semibold hover:underline"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-2 items-end tracking-tighter md:grid-cols-3">
        <span className="font-semibold text-[#999]">
          © Wisee. All rights reserved
        </span>
        <div className="flex w-full flex-col justify-between">
          <a
            href="/legal"
            className="flex w-full justify-between font-semibold hover:text-blue-500 hover:underline"
          >
            Legal Notice
          </a>
          <span className="text-[#999]">(Pty) Ltd Reg No: 2026/______/07</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
