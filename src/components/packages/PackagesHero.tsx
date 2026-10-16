import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PackagesHero() {
  return (
    <section
      aria-label="Packages Hero Banner"
      className="relative w-full overflow-hidden bg-brand-navy"
    >
      {/* Full-bleed scenic travel photograph */}
      <div className="relative w-full min-h-[240px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[300px] flex items-center">
        <Image
          src="/images/packages/hero-packages.jpg"
          alt="Scenic tropical turquoise water and limestone islands"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] select-none pointer-events-none"
        />

        {/* Restrained dark gradient overlay for crisp text contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20 pointer-events-none z-1"
          aria-hidden="true"
        />

        {/* Top vignette to keep Navbar text and logo readable */}
        <div
          className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 via-black/20 to-transparent pointer-events-none z-1"
          aria-hidden="true"
        />

        {/* Hero Content Container Aligned with Page Max-Width */}
        <div className="relative z-10 w-full max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12 xl:px-16 pt-24 sm:pt-28 pb-8 sm:pb-10">
          <div className="max-w-3xl text-left space-y-2 sm:space-y-3">
            {/* Breadcrumb: Home › Packages */}
            <nav
              aria-label="Breadcrumb"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium"
            >
              <Link
                href="/"
                className="text-primary hover:text-primary-hover hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/50" />
              <span className="text-white/90">Packages</span>
            </nav>

            {/* Main Heading: Our Travel Packages */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Our Travel <span className="text-primary">Packages</span>
            </h1>

            {/* Supporting Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-white/90 font-normal leading-relaxed max-w-xl drop-shadow-sm">
              Choose from a wide range of travel packages, carefully designed for unforgettable experiences around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PackagesHero;
