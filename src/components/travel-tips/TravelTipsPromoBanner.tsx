"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TravelTipsPromoBannerProps {
  className?: string;
}

export function TravelTipsPromoBanner({ className }: TravelTipsPromoBannerProps) {
  return (
    <section
      aria-label="Explore our tour packages banner"
      className={cn(
        "relative w-full rounded-2xl sm:rounded-3xl overflow-hidden min-h-[220px] sm:min-h-[260px] md:min-h-[280px] flex items-center shadow-md",
        className,
      )}
    >
      {/* Background Image with Dark Contrast Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/travel-tips/promo-banner.jpg"
          alt="Longtail boats anchored in crystal clear turquoise lagoon"
          fill
          sizes="(max-width: 1440px) 100vw, 1440px"
          className="object-cover object-center"
        />
        {/* Controlled gradient overlay for optimal readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-12 py-8 sm:py-10 max-w-2xl space-y-3 sm:space-y-4">
        {/* Eyebrow */}
        <p className="text-white/80 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em]">
          Ready for your next adventure?
        </p>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Explore Our{" "}
          <span className="text-primary font-black">Tour Packages</span>
        </h2>

        {/* Supporting description */}
        <p className="text-white/85 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
          Turn your travel plans into unforgettable experiences with our
          carefully curated tour packages.
        </p>

        {/* CTA Button */}
        <div className="pt-2">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-primary hover:bg-primary-hover active:bg-primary-active text-white font-bold text-xs sm:text-sm shadow-lg shadow-pink-500/30 transition-all duration-200 active:scale-95"
          >
            <span>Browse Packages</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
