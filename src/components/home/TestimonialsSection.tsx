"use client";

import * as React from "react";
import Image from "next/image";
import { Star, MapPin, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export interface TestimonialItem {
  id: string;
  name: string;
  destination: string;
  quote: string;
  rating: number;
  portrait: string;
  avatar: string;
  alt: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "brice-martin",
    name: "Brice Martin",
    destination: "Interlaken, Switzerland",
    quote:
      "“The best travel experience I've ever had! Everything was well organized, and the team made our trip unforgettable.”",
    rating: 5.0,
    portrait: "/images/testimonials/brice-martin.jpg",
    avatar: "/images/testimonials/brice-martin.jpg",
    alt: "Brice Martin smiling in front of Swiss alpine mountains and turquoise lake in Interlaken",
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    destination: "Santorini, Greece",
    quote:
      "“Exploring the hidden gems and breathtaking sunsets was a dream come true. QbicTravel curated every detail to absolute perfection!”",
    rating: 5.0,
    portrait: "/images/testimonials/elena-rostova.jpg",
    avatar: "/images/testimonials/elena-rostova.jpg",
    alt: "Elena Rostova smiling in front of whitewashed Mediterranean architecture in Santorini",
  },
  {
    id: "david-chen",
    name: "David Chen",
    destination: "Kyoto, Japan",
    quote:
      "“Impeccable guides, authentic local food recommendations, and seamless transitions between cities. Couldn't have asked for a better trip!”",
    rating: 5.0,
    portrait: "/images/testimonials/david-chen.jpg",
    avatar: "/images/testimonials/david-chen.jpg",
    alt: "David Chen exploring traditional landmarks and temple pagoda in Kyoto, Japan",
  },
];

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => {
    mediaQuery.removeEventListener("change", callback);
  };
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function subscribeVisibility(callback: () => void) {
  if (typeof document === "undefined") return () => {};
  document.addEventListener("visibilitychange", callback);
  return () => {
    document.removeEventListener("visibilitychange", callback);
  };
}

function getVisibilitySnapshot() {
  if (typeof document === "undefined") return true;
  return document.visibilityState === "visible";
}

function getVisibilityServerSnapshot() {
  return true;
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [resetKey, setResetKey] = React.useState(0);

  const isTabVisible = React.useSyncExternalStore(
    subscribeVisibility,
    getVisibilitySnapshot,
    getVisibilityServerSnapshot,
  );

  const prefersReducedMotion = React.useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  const activeTestimonial = TESTIMONIALS_DATA[currentIndex];

  const handlePrev = React.useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1,
    );
    setResetKey((k) => k + 1);
  }, []);

  const handleNext = React.useCallback(() => {
    setCurrentIndex((prev) =>
      prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1,
    );
    setResetKey((k) => k + 1);
  }, []);

  const handleSelect = React.useCallback((index: number) => {
    setCurrentIndex(index);
    setResetKey((k) => k + 1);
  }, []);

  // Autoplay effect (5 seconds interval, resets on manual interaction, pauses on hover, tab hidden, or reduced motion)
  React.useEffect(() => {
    if (prefersReducedMotion || isHovered || !isTabVisible) {
      return;
    }

    const intervalId = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, resetKey, prefersReducedMotion, isHovered, isTabVisible]);

  return (
    <section
      id="testimonials"
      aria-label="Travelers' Stories and Client Testimonials"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full bg-white overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="relative z-10 w-full max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* ===================================================================
            SECTION HEADER: Centered Eyebrow, Main Heading & Subtitle
            =================================================================== */}
        <div className="text-center max-w-2xl mx-auto">
          {/* Eyebrow: "TRAVELERS' STORIES —" */}
          <div className="flex items-center justify-center gap-2.5">
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-primary uppercase">
              TRAVELERS&apos; STORIES
            </span>
            <span
              className="w-8 sm:w-10 h-[2px] bg-primary rounded-full"
              aria-hidden="true"
            />
          </div>

          {/* Main Heading: "Our Clients Say!" */}
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.12]">
            Our Clients Say!
          </h2>

          {/* Supporting Subtitle */}
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto font-normal">
            Hear what our happy travelers have to say about their QbicTravel
            experiences.
          </p>
        </div>

        {/* ===================================================================
            MAIN TESTIMONIAL CONTAINER (2-Column Desktop, Stacked Mobile)
            =================================================================== */}
        <div className="mt-12 sm:mt-16 relative">
          {/* Side Navigation Buttons (Desktop Floating Arrows) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="hidden xl:flex absolute -left-6 2xl:-left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg border border-slate-100 items-center justify-center text-foreground hover:text-primary active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="hidden xl:flex absolute -right-6 2xl:-right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg border border-slate-100 items-center justify-center text-foreground hover:text-primary active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.2]" />
          </button>

          {/* 2-Column Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center max-w-5xl mx-auto">
            {/* ===============================================================
                LEFT COLUMN: Traveler Portrait with Soft Accent Backdrop
                =============================================================== */}
            <div className="lg:col-span-5 w-full flex justify-center items-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]">
                {/* Decorative Sunburst / Sparkle Accent (Top-Left) */}
                <div
                  className="absolute -top-6 -left-5 sm:-top-8 sm:-left-7 lg:-top-9 lg:-left-8 pointer-events-none select-none z-10"
                  aria-hidden="true"
                >
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 text-primary"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <line x1="16" y1="4" x2="16" y2="10" />
                    <line x1="8" y1="7" x2="12" y2="12" />
                    <line x1="5" y1="16" x2="11" y2="16" />
                  </svg>
                </div>

                {/* Soft Brand Offset Backdrop Badge (Enlarged by ~25% to extend slightly beyond portrait edges) */}
                <div
                  className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 lg:-top-7 lg:-left-7 w-[94%] sm:w-[95%] h-[94%] sm:h-[95%] rounded-[28px] sm:rounded-[36px] bg-primary-subtle -z-10 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Main Traveler Portrait Card */}
                <div className="relative aspect-square w-full rounded-[28px] sm:rounded-[36px] border-[5px] sm:border-[7px] border-white shadow-[0_16px_45px_rgba(15,23,42,0.12)] overflow-hidden bg-slate-100">
                  <Image
                    key={activeTestimonial.id}
                    src={activeTestimonial.portrait}
                    alt={activeTestimonial.alt}
                    fill
                    sizes="(max-width: 768px) 90vw, 420px"
                    className="object-cover object-center transition-all duration-500 animate-in fade-in zoom-in-95"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* ===============================================================
                RIGHT COLUMN: Testimonial Quote, Rating & Traveler Info
                =============================================================== */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              {/* Soft Brand Accent Quote Mark */}
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-primary mb-4 sm:mb-5"
                aria-hidden="true"
              >
                <Quote className="w-6 h-6 sm:w-7 sm:h-7 fill-current stroke-[1.5]" />
              </div>

              {/* Testimonial Quote Text */}
              <blockquote className="min-h-[90px] sm:min-h-[100px] flex items-center">
                <p className="text-base sm:text-lg md:text-xl lg:text-[1.35rem] font-semibold text-foreground leading-snug sm:leading-relaxed transition-all duration-300">
                  {activeTestimonial.quote}
                </p>
              </blockquote>

              {/* Traveler Info and Rating Row */}
              <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-between gap-4">
                {/* Traveler Name & Destination */}
                <div className="flex flex-col">
                  <span className="text-base sm:text-lg font-extrabold text-foreground leading-snug">
                    {activeTestimonial.name}
                  </span>
                  <div className="flex items-center gap-1.5 mt-1 text-muted-foreground text-xs sm:text-sm font-medium">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                    <span>{activeTestimonial.destination}</span>
                  </div>
                </div>

                {/* Star Rating and Score */}
                <div
                  className="flex items-center gap-1.5"
                  aria-label={`Rating: ${activeTestimonial.rating.toFixed(1)} out of 5 stars`}
                >
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="font-extrabold text-foreground text-sm sm:text-base ml-1">
                    {activeTestimonial.rating.toFixed(1)}
                  </span>
                </div>
              </div>

              {/* Subtle Horizontal Divider */}
              <div
                className="w-full h-[1px] bg-slate-200/80 my-6 sm:my-7"
                aria-hidden="true"
              />

              {/* ===============================================================
                  BOTTOM CONTROLS: 3 Traveler Avatars & Nav Indicators
                  =============================================================== */}
              <div className="flex items-center justify-between gap-4 select-none">
                {/* Traveler Avatar Selector */}
                <div
                  className="flex items-center gap-3 sm:gap-3.5"
                  role="tablist"
                  aria-label="Select traveler testimonial"
                >
                  {TESTIMONIALS_DATA.map((item, index) => {
                    const isSelected = index === currentIndex;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        aria-label={`View testimonial from ${item.name}`}
                        onClick={() => handleSelect(index)}
                        className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                          isSelected
                            ? "ring-3 ring-primary ring-offset-2 scale-105 shadow-sm"
                            : "opacity-60 hover:opacity-100 hover:scale-102"
                        }`}
                      >
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Pagination Dots (Active Indicator) & Mobile Prev/Next */}
                <div className="flex items-center gap-3">
                  {/* Indicators for current slide */}
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    {TESTIMONIALS_DATA.map((_, index) => (
                      <span
                        key={index}
                        className={`transition-all duration-300 rounded-full ${
                          index === currentIndex
                            ? "w-5 h-2 bg-primary"
                            : "w-2 h-2 bg-slate-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Mobile & Tablet Prev/Next Controls */}
                  <div className="flex xl:hidden items-center gap-1.5 ml-2">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous testimonial"
                      className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-foreground hover:text-primary active:scale-95 transition-all shadow-xs"
                    >
                      <ChevronLeft className="w-4 h-4 stroke-[2]" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next testimonial"
                      className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-foreground hover:text-primary active:scale-95 transition-all shadow-xs"
                    >
                      <ChevronRight className="w-4 h-4 stroke-[2]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
