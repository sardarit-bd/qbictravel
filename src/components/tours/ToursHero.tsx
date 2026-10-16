import * as React from "react";
import Image from "next/image";

export interface ToursHeroProps {
  children?: React.ReactNode;
}

export function ToursHero({ children }: ToursHeroProps) {
  return (
    <section
      aria-label="Tours Hero Section"
      className="relative w-full bg-white overflow-visible"
    >
      {/* =========================================================================
          HERO BACKGROUND IMAGE & CONTRAST OVERLAYS
          ========================================================================= */}
      <div className="relative w-full min-h-[460px] sm:min-h-[490px] md:min-h-[520px] lg:min-h-[550px] flex flex-col justify-between overflow-hidden">
        {/* Full-bleed scenic travel photograph */}
        <Image
          src="/images/tours/hero-tours.jpg"
          alt="Scenic tropical turquoise water and towering limestone cliffs"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] select-none pointer-events-none"
        />

        {/* Restrained dark gradient overlay for crisp text contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/15 pointer-events-none z-1"
          aria-hidden="true"
        />

        {/* Top vignette to ensure Navbar links and logo are readable */}
        <div
          className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/50 via-black/20 to-transparent pointer-events-none z-1"
          aria-hidden="true"
        />

        {/* =======================================================================
            HERO TEXT CONTENT (Left-Aligned, Responsive Container)
            ======================================================================= */}
        <div className="relative z-10 w-full max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12 xl:px-16 pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-20 sm:pb-24 md:pb-28">
          <div className="max-w-2xl text-left">
            {/* Eyebrow: Pink Line + "EXPLORE THE WORLD" */}
            <div className="inline-flex items-center gap-2.5 mb-2.5 sm:mb-3">
              <span
                className="w-6 sm:w-8 h-1 bg-primary rounded-full inline-block"
                aria-hidden="true"
              />
              <span className="text-xs sm:text-sm font-bold text-white tracking-widest uppercase drop-shadow-sm">
                Explore The World
              </span>
            </div>

            {/* Main Headline: "Discover Your Next Adventure" */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] font-black text-white tracking-tight leading-[1.06] drop-shadow-md">
              Discover Your <br className="hidden sm:inline" />
              <span className="text-primary font-black">Next</span> Adventure
            </h1>

            {/* Supporting Subtitle */}
            <p className="mt-3.5 sm:mt-4 text-sm sm:text-base md:text-[17px] text-white/95 font-normal leading-relaxed max-w-xl drop-shadow-sm">
              Explore handpicked tours to the most breathtaking destinations designed
              for unforgettable experiences.
            </p>
          </div>
        </div>

        {/* =======================================================================
            GENTLE CONVEX UPWARD WHITE ARCH DIVIDER
            Arches smoothly upward in the center where the search bar sits
            ======================================================================= */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none z-10 leading-none"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-8 sm:h-12 md:h-16 text-white"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 Q720,2 1440,60 L1440,60 L0,60 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* =========================================================================
          FLOATING SEARCH BAR SLOT (Overlaps the bottom edge of hero)
          ========================================================================= */}
      {children && (
        <div className="relative z-20 -mt-8 sm:-mt-10 md:-mt-12 px-4 sm:px-6 md:px-8">
          {children}
        </div>
      )}
    </section>
  );
}

export default ToursHero;
