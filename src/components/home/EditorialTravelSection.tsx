import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

/**
 * EditorialTravelSection
 * Recreates the left side of the QbicTravel editorial travel section:
 * - 4-line handwritten cursive headline: "Travel More Explore Beyond"
 * - Pink decorative double brush underline
 * - Curved dashed flight path with pink airplane silhouette
 * - High-quality Santorini, Greece destination preview card
 * - Clean white background with intentional editorial whitespace
 * - Two-column desktop grid reserving ~58% on the right for future scenic composition
 */
export function EditorialTravelSection() {
  return (
    <section
      aria-label="Editorial Travel Section"
      className="relative w-full bg-white overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* =========================================================================
          DECORATIVE BACKGROUND ELEMENTS
          ========================================================================= */}

      {/* Floating soft white organic shapes along far-left edge */}
      <div
        className="absolute -left-10 top-1/4 w-20 h-44 rounded-full bg-slate-50/80 shadow-lg shadow-slate-200/50 pointer-events-none opacity-60 blur-[1px] hidden sm:block"
        aria-hidden="true"
      />
      <div
        className="absolute -left-8 top-2/3 w-16 h-28 rounded-full bg-slate-50/80 shadow-md shadow-slate-200/50 pointer-events-none opacity-50 blur-[1px] hidden sm:block"
        aria-hidden="true"
      />

      {/* Curved dashed flight path with pink airplane leading toward right scenic area */}
      <div
        className="absolute top-10 sm:top-14 left-4 sm:left-12 lg:left-24 w-[320px] sm:w-[460px] lg:w-[540px] h-[220px] pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 540 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          {/* Dashed flight trail in dark teal */}
          <path
            d="M 20 180 C 70 120, 180 40, 420 30 C 470 28, 510 38, 535 50"
            stroke="#06373b"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            strokeOpacity="0.3"
            fill="none"
          />

          {/* Bright pink airplane silhouette along the flight path */}
          <g transform="translate(420, 24) rotate(-10) scale(0.95)">
            <path
              d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
              fill="#EC407A"
            />
          </g>
        </svg>
      </div>

      {/* =========================================================================
          MAIN EDITORIAL CONTAINER (Two-Column Desktop Grid)
          ========================================================================= */}
      <div className="relative z-10 w-full max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 min-h-[540px] sm:min-h-[580px] lg:min-h-[640px]">
          {/* =====================================================================
              LEFT COLUMN: Editorial Composition (~42% desktop width / 5 cols)
              ===================================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between items-start text-left relative z-10">
            {/* Top Area: 4-Line Handwritten Headline with Brush Underlines */}
            <div className="w-full max-w-sm sm:max-w-md pt-2 sm:pt-4">
              {/* Handwritten Headline Container with subtle counter-clockwise tilt */}
              <div className="inline-block transform -rotate-[3deg] origin-top-left select-none">
                <h2 className="font-script text-[#06373b] font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.25rem] leading-[0.88] tracking-tight drop-shadow-xs">
                  <span className="block">Travel</span>
                  <span className="block">More</span>
                  <span className="block">Explore</span>
                  <span className="block">Beyond</span>
                </h2>
              </div>

              {/* Pink Decorative Double Brush Underline beneath "Beyond" */}
              <div className="mt-2 ml-1 sm:ml-2">
                <svg
                  viewBox="0 0 130 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-28 sm:w-32 md:w-36 h-auto text-[#EC407A] transform -rotate-1"
                  aria-hidden="true"
                >
                  {/* Primary upper stroke */}
                  <path
                    d="M 4 8 C 30 4, 75 5, 124 10"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  {/* Secondary lower accent stroke */}
                  <path
                    d="M 18 16 C 45 12, 85 13, 116 18"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeOpacity="0.85"
                  />
                </svg>
              </div>
            </div>

            {/* Bottom-Left Area: Santorini Destination Preview Card */}
            <div className="w-full max-w-[340px] sm:max-w-[380px] md:max-w-[400px] mt-10 sm:mt-12 lg:mt-16">
              <div className="group relative aspect-[1.6/1] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-lg shadow-black/8 border border-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* High-quality Santorini Photograph */}
                <Image
                  src="/images/destinations/santorini-greece.jpg"
                  alt="Santorini, Greece with iconic whitewashed buildings, blue domes, and coastline"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />

                {/* Subtle gradient overlay at bottom for optimal text contrast */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Card Bottom Overlay: Destination info on left, navigation button on right */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-4.5 flex items-center justify-between z-10">
                  {/* Location Pin & Destination Label */}
                  <div className="flex items-center gap-1.5 text-white">
                    <MapPin className="w-4 h-4 text-white fill-white/20 shrink-0" />
                    <span className="text-sm sm:text-base font-bold tracking-wide drop-shadow-sm">
                      Santorini, Greece
                    </span>
                  </div>

                  {/* Circular White Navigation Button with Pink Arrow */}
                  <Link
                    href="/tours"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC407A]"
                    aria-label="Explore tours in Santorini, Greece"
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#EC407A] stroke-[2.5]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================================
              RIGHT COLUMN: Reserved for scenic travel composition (~58% width)
              ===================================================================== */}
          <div
            className="lg:col-span-7 hidden lg:flex items-center justify-center relative min-h-[400px]"
            aria-hidden="true"
          >
            {/* Reserved whitespace area for the separate scenic travel-image composition */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditorialTravelSection;
