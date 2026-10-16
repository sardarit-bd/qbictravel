import * as React from "react";
import Link from "next/link";
import { Plane } from "lucide-react";
import { HeroSearchPanel } from "./HeroSearchPanel";
import fs from "node:fs";
import path from "node:path";

export interface HeroSectionProps {
  travelerImage?: string;
  travelerVideo?: string;
  onCtaClick?: () => void;
}

const LOCAL_VIDEO_PATH = "/videos/hero-traveler.mp4";

function checkLocalVideoExists(relativePath: string): boolean {
  try {
    const fullPath = path.join(process.cwd(), "public", relativePath.replace(/^\//, ""));
    return fs.existsSync(fullPath);
  } catch {
    return false;
  }
}

export function HeroSection({
  travelerVideo,
}: HeroSectionProps) {
  const hasLocalVideo = checkLocalVideoExists(LOCAL_VIDEO_PATH);
  const resolvedVideo = travelerVideo ?? (hasLocalVideo ? LOCAL_VIDEO_PATH : undefined);

  return (
    <section
      aria-label="Hero Section"
      className="relative w-full overflow-hidden bg-brand-navy min-h-screen min-h-[100svh] flex flex-col justify-between items-center"
    >
      {/* =========================================================================
          LAYER 1: BASE BACKGROUND (Dark Navy fallback)
          ========================================================================= */}
      <div className="absolute inset-0 bg-[#0F172A] z-0" />

      {/* =========================================================================
          LAYER 2: FULL-SECTION VIDEO BACKGROUND (Edge-to-Edge)
          ========================================================================= */}
      {resolvedVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover object-[center_35%] pointer-events-none select-none z-0 motion-reduce:hidden"
          aria-label="Hero background travel video"
        >
          <source src={resolvedVideo} type="video/mp4" />
        </video>
      )}

      {/* =========================================================================
          LAYER 3: MINIMAL CONTRAST TREATMENT (Soft localized gradient)
          ========================================================================= */}
      {/* Gentle horizontal gradient behind text on the left; center & right remain clear, bright, and vibrant */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />
      {/* Subtle top vignette only behind header bar for crisp logo and nav legibility */}
      <div
        className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/35 to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* =========================================================================
          LAYER 4: HERO MAIN CONTENT (Responsive Container Aligned with Navbar)
          ========================================================================= */}
      <div className="relative z-20 flex-1 w-full max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12 xl:px-16 pt-24 sm:pt-28 md:pt-30 2xl:pt-36 pb-8 sm:pb-10 md:pb-12 2xl:pb-16 flex flex-col justify-center items-start">
        <div className="w-full max-w-2xl 2xl:max-w-3xl flex flex-col items-start text-left">
          {/* Eyebrow & Airplane Header */}
          <div className="relative flex items-center gap-3">
            <span className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl text-white font-medium drop-shadow-sm font-script">
              Discover
            </span>

            {/* White Airplane Flying Icon with Motion Angle */}
            <div className="relative flex items-center justify-center text-white ml-2 transform -rotate-12 hover:scale-110 transition-transform">
              <Plane className="w-6 h-6 md:w-7 md:h-7 2xl:w-8 2xl:h-8 fill-white text-white drop-shadow" />
            </div>
          </div>

          {/* Main Headline: "The World" */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] 2xl:text-[7.5rem] font-bold text-white tracking-tight leading-[0.95] drop-shadow-md select-none mt-1 font-script">
            The World
          </h1>

          {/* Supporting Text */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg 2xl:text-xl text-white/90 font-normal leading-relaxed max-w-lg 2xl:max-w-xl drop-shadow-sm">
            Your gateway to unforgettable journeys and life changing travel
            experiences.
          </p>

          {/* Primary CTA Button: Brand Pink */}
          <div className="mt-6 sm:mt-8 2xl:mt-10">
            <Link
              href="/tours"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-3.5 2xl:px-12 2xl:py-4 rounded-full bg-primary hover:bg-primary-hover active:bg-primary-active text-primary-foreground font-extrabold text-sm sm:text-base 2xl:text-lg shadow-lg shadow-pink-500/25 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 active:scale-95"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Bottom Search Panel */}
        <div className="mt-8 sm:mt-10 2xl:mt-12 w-full max-w-2xl 2xl:max-w-3xl">
          <HeroSearchPanel />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
