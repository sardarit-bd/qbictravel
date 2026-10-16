"use client";

import * as React from "react";
import Image from "next/image";
import { Search } from "lucide-react";

interface BlogHeroProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit?: () => void;
}

export function BlogHero({
  searchQuery,
  onSearchChange,
  onSearchSubmit,
}: BlogHeroProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit();
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-slate-900 min-h-[460px] sm:min-h-[500px] md:min-h-[540px] flex items-center">
      {/* Background Image with Dark Contrast Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/blog/hero-blog.jpg"
          alt="Scenic travel destination coastal bay and traveler"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        {/* Controlled gradient overlays for optimal text contrast without losing scenic beauty */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 xl:px-16 pt-28 sm:pt-32 pb-14 sm:pb-16 flex flex-col items-start justify-center">
        <div className="max-w-2xl w-full space-y-4 sm:space-y-5">
          {/* Eyebrow with pink accent bar */}
          <div className="inline-flex items-center gap-2.5">
            <span className="w-6 sm:w-8 h-[3px] bg-primary rounded-full inline-block" />
            <span className="text-white/90 text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em]">
              Travel Blog
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.12] tracking-tight">
            Travel Stories &amp;{" "}
            <span className="text-primary font-black block sm:inline">
              Inspiration
            </span>
          </h1>

          {/* Description */}
          <p className="text-white/85 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-xl">
            Tips, guides and stories to help you explore the world with
            confidence.
          </p>

          {/* Search Box Pill */}
          <form
            onSubmit={handleSubmit}
            className="pt-2 sm:pt-4 w-full max-w-xl"
            role="search"
            aria-label="Search travel articles"
          >
            <div className="relative flex items-center bg-white rounded-full p-1.5 sm:p-2 shadow-2xl shadow-black/30 border border-white/20 transition-all duration-200 focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent">
              <Search
                className="w-5 h-5 text-slate-400 ml-3 sm:ml-4 shrink-0"
                aria-hidden="true"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search articles, destinations, or travel tips..."
                className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm md:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                aria-label="Search articles, destinations, or travel tips"
              />
              <button
                type="submit"
                className="shrink-0 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-primary hover:bg-primary-hover active:bg-primary-active text-white text-xs sm:text-sm font-bold shadow-md shadow-pink-500/30 transition-all duration-200 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
