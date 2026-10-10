import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Plane } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSearchPanel } from "./HeroSearchPanel";

export interface HeroSectionProps {
  travelerImage?: string;
  onCtaClick?: () => void;
}

// Mathematically generated natural ripped-paper paths (viewBox: 0 0 1000 600)
const ORANGE_TORN_PATH =
  "M 760 0 L 1000 0 L 1000 600 L 370 600 L 370 600 L 386 584 L 395 569 L 416 556 L 426 542 L 440 523 L 434 509 L 449 495 L 468 480 L 473 467 L 469 449 L 477 437 L 478 419 L 495 407 L 503 391 L 497 376 L 505 360 L 527 343 L 530 329 L 547 315 L 547 298 L 560 284 L 585 269 L 592 255 L 606 239 L 626 223 L 628 211 L 645 197 L 660 179 L 663 166 L 672 151 L 690 134 L 682 120 L 702 104 L 698 91 L 708 74 L 714 59 L 713 46 L 731 30 L 742 13 L 760 0 Z";

const WHITE_TORN_FRINGE =
  "M 750 0 L 1000 0 L 1000 600 L 360 600 L 360 600 L 377 584 L 381 569 L 402 556 L 414 542 L 431 523 L 424 509 L 438 495 L 457 480 L 461 467 L 457 449 L 463 437 L 466 419 L 482 407 L 490 391 L 484 376 L 495 360 L 513 343 L 520 329 L 537 315 L 538 298 L 549 284 L 572 269 L 582 255 L 593 239 L 615 223 L 616 211 L 636 197 L 648 179 L 655 166 L 663 151 L 681 134 L 669 120 L 692 104 L 684 91 L 699 74 L 704 59 L 703 46 L 719 30 L 728 13 L 750 0 Z";

function SoftCloud({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 50"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M25 40 C12 40 5 30 10 20 C14 10 26 8 32 15 C38 4 56 3 66 12 C74 4 92 6 96 18 C108 16 118 25 114 35 C118 40 110 40 105 40 Z"
        opacity="0.88"
        filter="blur(1px)"
      />
    </svg>
  );
}

export function HeroSection({
  travelerImage = "/images/hero-traveler.png",
}: HeroSectionProps) {
  return (
    <section
      aria-label="Hero Section"
      className="relative w-full overflow-hidden bg-brand-navy min-h-[640px] md:min-h-[680px] lg:min-h-[720px] flex flex-col justify-between"
    >
      {/* =========================================================================
          BACKGROUND ARCHITECTURE: DARK NAVY + TORN PAPER DIVIDER + PINK/MAGENTA
          ========================================================================= */}
      {/* Layer 1: Dark Navy Base & Subtle Atmospheric Mountain Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-brand-navy-dark">
        {/* Subtle Nature Landscape Overlay */}
        <div
          className="absolute inset-0 opacity-15 mix-blend-overlay bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
          }}
        />
      </div>

      {/* Layer 2: Torn Paper SVG Divider with Realistic White Ripped Fringe */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="pinkMagentaGradient"
            x1="500"
            y1="0"
            x2="1000"
            y2="600"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#F472B6" />
            <stop offset="50%" stopColor="#EC407A" />
            <stop offset="100%" stopColor="#DB2777" />
          </linearGradient>

          {/* Paper Edge Drop Shadow */}
          <filter id="tornShadow" x="-5%" y="-5%" width="110%" height="110%">
            <feDropShadow
              dx="-4"
              dy="2"
              stdDeviation="4"
              floodColor="#000000"
              floodOpacity="0.25"
            />
          </filter>
        </defs>

        {/* White Ripped Paper Edge */}
        <path
          d={WHITE_TORN_FRINGE}
          fill="#ffffff"
          opacity="0.95"
          filter="url(#tornShadow)"
        />

        {/* Pink/Magenta Right Side Panel */}
        <path d={ORANGE_TORN_PATH} fill="url(#pinkMagentaGradient)" />

        {/* Dashed Flight Trajectory Path from Airplane to Right */}
        <path
          d="M 335 155 C 410 185, 520 280, 640 285"
          stroke="#ffffff"
          strokeDasharray="6 6"
          strokeWidth="2"
          opacity="0.75"
        />
      </svg>

      {/* Layer 3: Floating Clouds */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Cloud near airplane */}
        <SoftCloud className="absolute top-28 left-[310px] w-20 h-10 opacity-70 hidden md:block" />
        {/* Cloud on torn border */}
        <SoftCloud className="absolute top-16 right-[240px] lg:right-[300px] w-28 h-12 opacity-80 hidden sm:block" />
        {/* Cloud near top right corner */}
        <SoftCloud className="absolute top-10 right-16 w-32 h-14 opacity-75" />
      </div>

      {/* =========================================================================
          TOP NAVBAR: Seamlessly Integrated Inside Hero Banner
          ========================================================================= */}
      <Navbar />

      {/* =========================================================================
          HERO MAIN CONTENT AREA: SPLIT COMPOSITION
          ========================================================================= */}
      <div className="relative z-20 flex-1 px-5 sm:px-8 md:px-12 py-6 md:py-8 grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
        {/* -----------------------------------------------------------------------
            LEFT COLUMN: Copy, CTA, and Search Panel (Dark Navy Side)
            ----------------------------------------------------------------------- */}
        <div className="lg:col-span-7 flex flex-col justify-center items-start text-left pt-2 md:pt-4">
          {/* Eyebrow & Airplane Header */}
          <div className="relative flex items-center gap-3">
            <span className="text-2xl sm:text-3xl md:text-4xl text-white font-medium drop-shadow-sm font-script">
              Discover
            </span>

            {/* White Airplane Flying Icon with Motion Angle */}
            <div className="relative flex items-center justify-center text-white ml-2 transform -rotate-12 hover:scale-110 transition-transform">
              <Plane className="w-6 h-6 md:w-7 md:h-7 fill-white text-white drop-shadow" />
            </div>
          </div>

          {/* Main Headline: "The World" */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-bold text-white tracking-tight leading-[0.95] drop-shadow-md select-none mt-1 font-script">
            The World
          </h1>

          {/* Supporting Text */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-white/90 font-normal leading-relaxed max-w-sm sm:max-w-md">
            Your gateway to unforgettable journeys and life changing travel
            experiences.
          </p>

          {/* Primary CTA Button: Brand Pink */}
          <div className="mt-6 sm:mt-8">
            <Link
              href="/tours"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-primary hover:bg-primary-hover active:bg-primary-active text-primary-foreground font-extrabold text-sm sm:text-base shadow-lg shadow-pink-500/25 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 active:scale-95"
            >
              Book Now
            </Link>
          </div>

          {/* Bottom Overlapping Search Panel */}
          <div className="mt-8 sm:mt-12 w-full">
            <HeroSearchPanel />
          </div>
        </div>

        {/* -----------------------------------------------------------------------
            RIGHT COLUMN: Traveler Image & 60% Discount Badge (Orange Side)
            ----------------------------------------------------------------------- */}
        <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end min-h-[340px] sm:min-h-[420px] lg:min-h-[520px]">
          {/* Promotional Discount Typography */}
          <div className="absolute left-0 sm:left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-30 flex flex-col items-start select-none drop-shadow-lg">
            <div className="relative">
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none">
                60%
              </span>
              <span className="block text-sm sm:text-base md:text-lg font-extrabold uppercase tracking-widest text-white/95 mt-0.5 ml-1">
                Discount
              </span>
            </div>
          </div>

          {/* Prominent Traveler Image */}
          <div className="relative z-20 w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[500px] flex items-center justify-center lg:translate-x-6">
            <Image
              src={travelerImage}
              alt="Happy female adventure traveler sitting on red suitcase with mountain backpack"
              width={560}
              height={560}
              priority
              className="w-full h-auto object-contain drop-shadow-2xl hover:scale-102 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
