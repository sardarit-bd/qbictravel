"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";

// Clean, semantic SVG social icons matching the reference
function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// Instagram gallery items: 5 curated travel destinations + 1 branded social tile matching reference
const INSTAGRAM_GALLERY = [
  {
    id: "greece",
    src: "/images/destinations/greece.jpg",
    alt: "Tropical beach resort and azure waters in Santorini, Greece",
    href: "/destinations#greece",
    isBrandedTile: false,
  },
  {
    id: "switzerland",
    src: "/images/destinations/switzerland.jpg",
    alt: "Hiker overlooking alpine mountain peaks in Switzerland",
    href: "/destinations#switzerland",
    isBrandedTile: false,
  },
  {
    id: "japan",
    src: "/images/destinations/japan.jpg",
    alt: "Historic landmarks and scenic pagoda in Kyoto, Japan",
    href: "/destinations#japan",
    isBrandedTile: false,
  },
  {
    id: "thailand",
    src: "/images/destinations/thailand.jpg",
    alt: "Sunset coastal longtail boats and limestone cliffs in Phuket, Thailand",
    href: "/destinations#thailand",
    isBrandedTile: false,
  },
  {
    id: "instagram-brand",
    src: "",
    alt: "Follow QbicTravel on Instagram",
    href: siteConfig.links.instagram,
    isBrandedTile: true,
  },
  {
    id: "italy",
    src: "/images/destinations/italy.jpg",
    alt: "Colorful cliffside coastal village in Cinque Terre, Italy",
    href: "/destinations#italy",
    isBrandedTile: false,
  },
];

const ABOUT_LINKS = [
  { label: "About Us", href: "/#about" },
  { label: "Tours", href: "/tours" },
  { label: "Packages", href: "/tours#packages" },
  { label: "Travel Tips", href: "/travel-tips" },
  { label: "Contact Us", href: "/contact" },
];

const QUICK_LINKS = [
  { label: "Latest News", href: "/blog" },
  { label: "Popular Destinations", href: "/destinations" },
  { label: "FAQs", href: "/#faq" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export function Footer() {
  const currentYear = 2026;

  return (
    <footer
      className="relative w-full bg-white border-t border-[#F2E5D8] overflow-hidden text-slate-800"
      aria-label="Site Footer"
    >
      {/* Decorative Dot Matrix on Left Margin (Matching Reference Screenshot) */}
      <div
        className="absolute left-2.5 sm:left-4 xl:left-8 top-1/2 -translate-y-1/2 hidden xl:grid grid-cols-3 gap-2 opacity-30 pointer-events-none select-none"
        aria-hidden="true"
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-[#E07A5F]"
          />
        ))}
      </div>

      {/* Main Footer Container */}
      <div className="w-full max-w-[1400px] 2xl:max-w-[1536px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 pt-16 sm:pt-20 pb-8 sm:pb-10">
        {/* Top Multi-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 lg:gap-0 items-start">
          
          {/* ========================================================= */}
          {/* COLUMN 1: Brand Logo, Description & Contact Details       */}
          {/* ========================================================= */}
          <div className="md:col-span-1 lg:col-span-4 lg:pr-10 xl:pr-14 lg:border-r lg:border-[#EADCCF]">
            {/* QbicTravel Brand Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
              aria-label="QbicTravel Home"
            >
              <Image
                src="/images/brand/qbic-icon.png"
                alt="QbicTravel Icon"
                width={44}
                height={44}
                className="h-10 sm:h-11 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-200"
              />
              <span className="text-2xl sm:text-[26px] font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors">
                Qbic<span className="text-primary">Travel</span>
              </span>
            </Link>

            {/* Travel-focused Description */}
            <p className="mt-4 text-[14.5px] leading-relaxed text-slate-600 max-w-sm">
              Discover world-class travel experiences, handpicked adventure tours, and authentic destination guides across the globe.
            </p>

            {/* Company Address */}
            <div className="mt-5 text-[14px] leading-snug text-slate-600 font-medium space-y-0.5">
              <p>7298 The Westheimer Road, Suite 400,</p>
              <p>Houston, TX 77063, USA</p>
            </div>

            {/* Highlighted Phone Number */}
            <div className="mt-4">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-block text-[15px] font-semibold text-primary hover:text-primary-hover hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                {siteConfig.contact.phone}
              </a>
            </div>

            {/* Email Address */}
            <div className="mt-1.5">
              <a
                href={`mailto:${siteConfig.contact.supportEmail}`}
                className="text-[14px] text-slate-600 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                {siteConfig.contact.supportEmail}
              </a>
            </div>

            {/* Social Media Circular Buttons */}
            <div className="mt-6 flex items-center gap-3" aria-label="Social Media Links">
              {/* Twitter / X */}
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit QbicTravel on Twitter"
                className="w-10 h-10 rounded-full bg-white border border-[#E8DACB] shadow-sm flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary hover:shadow-md transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/qbictravel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit QbicTravel on LinkedIn"
                className="w-10 h-10 rounded-full bg-white border border-[#E8DACB] shadow-sm flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary hover:shadow-md transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              {/* Facebook (Highlighted Primary Accent matching reference screenshot) */}
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit QbicTravel on Facebook"
                className="w-10 h-10 rounded-full bg-primary text-white shadow-md shadow-primary/30 flex items-center justify-center hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/40 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              {/* Instagram */}
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit QbicTravel on Instagram"
                className="w-10 h-10 rounded-full bg-white border border-[#E8DACB] shadow-sm flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary hover:shadow-md transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ========================================================= */}
          {/* COLUMNS 2 & 3: About Us & Quick Links Side-by-Side        */}
          {/* ========================================================= */}
          <div className="md:col-span-1 lg:col-span-5 grid grid-cols-2 gap-6 sm:gap-8 lg:px-8 xl:px-12 lg:border-r lg:border-[#EADCCF]">
            {/* Column 2: About Us */}
            <div>
              <h2 className="text-[17px] sm:text-[18px] font-bold text-slate-900 mb-4 sm:mb-5 tracking-tight whitespace-nowrap">
                About Us
              </h2>
              <ul className="space-y-2.5 sm:space-y-3">
                {ABOUT_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-[14.5px] text-slate-600 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-150 shrink-0" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              <h2 className="text-[17px] sm:text-[18px] font-bold text-slate-900 mb-4 sm:mb-5 tracking-tight whitespace-nowrap">
                Quick Links
              </h2>
              <ul className="space-y-2.5 sm:space-y-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-[14.5px] text-slate-600 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-150 shrink-0" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ========================================================= */}
          {/* COLUMN 4: Instagram Gallery                               */}
          {/* ========================================================= */}
          <div className="md:col-span-2 lg:col-span-3 md:mt-2 lg:mt-0 lg:pl-8 xl:pl-12">
            <h2 className="text-[17px] sm:text-[18px] font-bold text-slate-900 mb-4 sm:mb-5 tracking-tight">
              Instagram Post
            </h2>

            {/* 3 Columns x 2 Rows Compact Gallery */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 max-w-[280px]">
              {INSTAGRAM_GALLERY.map((item) => {
                if (item.isBrandedTile) {
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow QbicTravel on Instagram"
                      className="group relative aspect-square rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30 hover:bg-primary-hover hover:scale-105 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-95"
                    >
                      <InstagramIcon className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-sm group-hover:rotate-6 transition-transform duration-200" />
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-200 shadow-sm border border-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    aria-label={`View ${item.alt}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 25vw, (max-width: 1024px) 15vw, 90px"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Subtle hover overlay with Instagram icon */}
                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center text-white">
                      <InstagramIcon className="w-4 h-4 drop-shadow" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>

        {/* Thin Horizontal Divider Above Copyright Bar */}
        <div className="w-full border-t border-[#EADCCF] mt-12 sm:mt-16 mb-6 sm:mb-8" />

        {/* Centered Dynamic Copyright */}
        <div className="text-center">
          <p className="text-[13px] sm:text-[14px] text-slate-500 font-normal">
            &copy; {currentYear} QbicTravel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
