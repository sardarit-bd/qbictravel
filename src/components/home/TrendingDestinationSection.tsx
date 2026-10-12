"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mountain,
  Gift,
  Binoculars,
  Tent,
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/**
 * Filter Categories according to visual reference
 */
const CATEGORIES = [
  "All",
  "Mountains",
  "Beaches",
  "Cities",
  "Forests",
  "Islands",
] as const;

type Category = (typeof CATEGORIES)[number];

/**
 * Destination Item definition
 */
interface DestinationItem {
  id: string;
  name: string;
  image: string;
  categories: Category[];
}

/**
 * Destination datasets with category tags matching reference assets
 */
const ALL_DESTINATIONS: DestinationItem[] = [
  {
    id: "phuket",
    name: "Phuket, Thailand",
    image: "/images/destinations/phuket-thailand.jpg",
    categories: ["All", "Beaches", "Islands"],
  },
  {
    id: "interlaken",
    name: "Interlaken, Switzerland",
    image: "/images/destinations/interlaken-switzerland.jpg",
    categories: ["All", "Mountains"],
  },
  {
    id: "santorini",
    name: "Santorini, Greece",
    image: "/images/destinations/santorini-greece.jpg",
    categories: ["All", "Beaches", "Islands", "Cities"],
  },
];

/**
 * TrendingDestinationSection
 * Pixel-accurate reproduction of the QbicTravel Trending Destinations section:
 * - Left column (~60%):
 *   - "EXPLORE NOW —" eyebrow badge
 *   - Expressive two-line split heading: "Trending" (script pink) + "Destinations" (bold dark navy)
 *   - Compact descriptive paragraph
 *   - 2x2 Feature tiles (Scenic Places, Interesting Trips, Adventure, Amazing Nature)
 *   - 6 Filter pill controls with client filtering
 *   - 3 Landscape destination cards with pin badge, gradient overlay, and interactive arrow button
 *   - Carousel controls (prev arrow, 3 pagination dots, next arrow)
 * - Right column (~40%):
 *   - Organic travel collage with mountain viewpoint, traveler with hat and backpack,
 *     "Travel More Explore Beyond" handwritten accent, pink airplane + flight path,
 *     overlapping Polaroid prints, and circular adventure stamp
 * - Ambient canvas: subtle cool pale blue tint, torn paper decorative borders, soft corner palm leaves
 */
export function TrendingDestinationSection() {
  const [selectedCategory, setSelectedCategory] = React.useState<Category>("All");
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);

  // Filter destinations based on category
  const filteredDestinations = React.useMemo(() => {
    if (selectedCategory === "All") {
      return ALL_DESTINATIONS;
    }
    return ALL_DESTINATIONS.filter((item) =>
      item.categories.includes(selectedCategory)
    );
  }, [selectedCategory]);

  // Rotate/shift cards based on slide pagination
  const displayedDestinations = React.useMemo(() => {
    if (filteredDestinations.length === 0) return [];
    if (filteredDestinations.length <= 3 && currentSlide === 0) {
      return filteredDestinations;
    }
    // For carousel sliding effect: cycle items according to active slide offset
    const offset = currentSlide % filteredDestinations.length;
    return [
      ...filteredDestinations.slice(offset),
      ...filteredDestinations.slice(0, offset),
    ].slice(0, 3);
  }, [filteredDestinations, currentSlide]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  return (
    <section
      id="trending-destinations"
      aria-label="Trending Destinations"
      className="relative w-full bg-white overflow-hidden py-14 sm:py-18 lg:py-22 text-foreground"
    >
      {/* =========================================================================
          DECORATIVE OUTER CANVAS & TORN PAPER EDGES
          ========================================================================= */}

      {/* Subtle cool pale blue tint on the left side of the canvas */}
      <div
        className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#F0F7FC]/70 via-[#F8FBFE]/40 to-transparent pointer-events-none select-none z-0"
        aria-hidden="true"
      />

      {/* Top irregular paper-like decorative border */}
      <div
        className="absolute top-0 inset-x-0 h-3 sm:h-4 overflow-hidden pointer-events-none select-none z-20"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 18"
          preserveAspectRatio="none"
          className="w-full h-full text-white fill-current filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.03)]"
        >
          <path d="M0,0 L1440,0 L1440,6 C1350,11 1280,5 1200,9 C1120,13 1040,6 960,11 C880,16 800,8 720,12 C640,16 560,9 480,14 C400,18 320,8 240,12 C160,16 80,6 0,11 Z" />
        </svg>
      </div>

      {/* Bottom irregular paper-like decorative border */}
      <div
        className="absolute bottom-0 inset-x-0 h-3 sm:h-4 overflow-hidden pointer-events-none select-none z-20"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 18"
          preserveAspectRatio="none"
          className="w-full h-full text-white fill-current filter drop-shadow-[0_-2px_4px_rgba(0,0,0,0.03)]"
        >
          <path d="M0,18 L1440,18 L1440,12 C1350,7 1280,13 1200,9 C1120,5 1040,12 960,7 C880,2 800,10 720,6 C640,2 560,9 480,4 C400,0 320,10 240,6 C160,2 80,12 0,7 Z" />
        </svg>
      </div>

      {/* Top-left blurred tropical foliage accent */}
      <div
        className="absolute top-0 left-0 w-16 sm:w-20 md:w-24 h-24 sm:h-32 md:h-36 pointer-events-none select-none z-10 opacity-80 mix-blend-multiply"
        aria-hidden="true"
      >
        <Image
          src="/images/destinations/leaf-top-left.png"
          alt=""
          fill
          sizes="96px"
          className="object-contain object-top-left"
          priority
        />
      </div>

      {/* Faint aqua/cyan watercolor wash curve near bottom-left */}
      <div
        className="absolute -bottom-14 -left-14 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-cyan-100/35 blur-3xl pointer-events-none select-none z-0"
        aria-hidden="true"
      />

      {/* =========================================================================
          MAIN EDITORIAL GRID CONTAINER (3:2 Content Balance)
          ========================================================================= */}
      <div className="relative z-10 w-full max-w-[1440px] 2xl:max-w-[1536px] mx-auto px-5 sm:px-8 md:px-12 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* =====================================================================
              LEFT COLUMN: Editorial Content & Cards (~60-63% canvas width / 7 cols)
              ===================================================================== */}
          <div className="lg:col-span-7 flex flex-col items-start text-left relative z-10">
            {/* Eyebrow: EXPLORE NOW + pink horizontal line */}
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.22em] text-primary">
                EXPLORE NOW
              </span>
              <span
                className="inline-block w-8 sm:w-10 h-[2px] bg-primary rounded-full"
                aria-hidden="true"
              />
            </div>

            {/* Split Two-Line Headline: "Trending" (script) + "Destinations" (bold sans) */}
            <h2 className="mt-1.5 sm:mt-2 flex flex-col text-left">
              <span className="font-script text-primary text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-bold leading-[0.92] drop-shadow-xs -rotate-[2deg] origin-left select-none">
                Trending
              </span>
              <span className="font-sans font-extrabold text-foreground text-4xl sm:text-5xl md:text-[3.25rem] lg:text-[3.65rem] tracking-tight leading-[1.02] -mt-1 sm:-mt-2">
                Destinations
              </span>
            </h2>

            {/* Supporting Paragraph */}
            <p className="mt-3 sm:mt-3.5 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-[390px] sm:max-w-[410px]">
              Discover incredible destinations and unforgettable travel experiences around the world. Explore stunning landscapes, exciting adventures, and beautiful places waiting to be discovered.
            </p>

            {/* 4 Feature Tiles (2 × 2 Grid) */}
            <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 w-full max-w-[440px]">
              {/* Tile 1: Scenic Places */}
              <div className="bg-white rounded-2xl p-2.5 sm:p-3 shadow-xs border border-slate-100 flex items-center gap-3 hover:shadow-md transition-shadow duration-200">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-xs shadow-pink-500/20">
                  <Mountain className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-foreground leading-tight truncate">
                    Scenic Places
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-muted-foreground leading-snug mt-0.5 line-clamp-1">
                    Explore beautiful natural destinations.
                  </p>
                </div>
              </div>

              {/* Tile 2: Interesting Trips */}
              <div className="bg-white rounded-2xl p-2.5 sm:p-3 shadow-xs border border-slate-100 flex items-center gap-3 hover:shadow-md transition-shadow duration-200">
                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white shrink-0 shadow-xs shadow-amber-500/20">
                  <Gift className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-foreground leading-tight truncate">
                    Interesting Trips
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-muted-foreground leading-snug mt-0.5 line-clamp-1">
                    Discover memorable travel experiences.
                  </p>
                </div>
              </div>

              {/* Tile 3: Adventure */}
              <div className="bg-white rounded-2xl p-2.5 sm:p-3 shadow-xs border border-slate-100 flex items-center gap-3 hover:shadow-md transition-shadow duration-200">
                <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white shrink-0 shadow-xs shadow-sky-500/20">
                  <Binoculars className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-foreground leading-tight truncate">
                    Adventure
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-muted-foreground leading-snug mt-0.5 line-clamp-1">
                    Find outdoor experiences and new challenges.
                  </p>
                </div>
              </div>

              {/* Tile 4: Amazing Nature */}
              <div className="bg-white rounded-2xl p-2.5 sm:p-3 shadow-xs border border-slate-100 flex items-center gap-3 hover:shadow-md transition-shadow duration-200">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-xs shadow-emerald-500/20">
                  <Tent className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-foreground leading-tight truncate">
                    Amazing Nature
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-muted-foreground leading-snug mt-0.5 line-clamp-1">
                    Enjoy extraordinary landscapes.
                  </p>
                </div>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div
              className="mt-6 sm:mt-7 flex items-center gap-2 overflow-x-auto w-full max-w-[580px] pb-1 scrollbar-none"
              role="tablist"
              aria-label="Destination category filters"
            >
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentSlide(0);
                    }}
                    className={`shrink-0 rounded-full px-3.5 sm:px-4 py-1 text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      isActive
                        ? "bg-primary text-white border border-primary shadow-xs"
                        : "bg-white text-foreground border border-slate-200/90 hover:border-primary/40 hover:text-primary active:scale-95"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Three Destination Image Cards */}
            <div className="mt-5 sm:mt-6 w-full max-w-[620px]">
              {displayedDestinations.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5">
                  {displayedDestinations.map((item) => (
                    <div
                      key={item.id}
                      className="group relative aspect-[4/3] w-full max-w-[280px] sm:max-w-none overflow-hidden rounded-xl bg-slate-100 shadow-md border border-slate-100/90 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 30vw, 200px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Dark gradient for text and button contrast */}
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none"
                        aria-hidden="true"
                      />

                      {/* Card Content & Interactive Arrow */}
                      <div className="absolute inset-x-0 bottom-0 p-2 sm:p-2.5 flex items-center justify-between z-10 gap-1.5">
                        <div className="flex items-center gap-1 text-white min-w-0">
                          <MapPin className="w-3.5 h-3.5 text-primary fill-primary shrink-0" />
                          <span className="text-[10px] sm:text-[10.5px] md:text-[11px] font-bold tracking-tight drop-shadow-sm truncate">
                            {item.name}
                          </span>
                        </div>

                        <Link
                          href="/tours"
                          className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-primary shadow-md hover:scale-110 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shrink-0"
                          aria-label={`Explore tours in ${item.name}`}
                        >
                          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white/80 rounded-xl p-6 text-center border border-slate-100 text-muted-foreground text-xs">
                  No destinations found for &quot;{selectedCategory}&quot;. Try selecting{" "}
                  <button
                    onClick={() => setSelectedCategory("All")}
                    className="text-primary font-bold hover:underline"
                  >
                    All
                  </button>
                  .
                </div>
              )}
            </div>

            {/* Carousel Controls (Aligned toward the left under destination cards) */}
            <div className="mt-4 sm:mt-5 flex items-center gap-3">
              {/* Previous Slide Button */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous destination slide"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-slate-200/90 shadow-xs flex items-center justify-center text-foreground hover:text-primary hover:border-primary/40 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2.2]" />
              </button>

              {/* 3 Pagination Dots */}
              <div
                className="flex items-center gap-1.5"
                role="tablist"
                aria-label="Destination slide pagination"
              >
                {[0, 1, 2].map((idx) => {
                  const isActive = currentSlide === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Go to slide ${idx + 1}`}
                      onClick={() => setCurrentSlide(idx)}
                      className={`rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                        isActive
                          ? "w-4 h-2 bg-primary rounded-full"
                          : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  );
                })}
              </div>

              {/* Next Slide Button */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next destination slide"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-slate-200/90 shadow-xs flex items-center justify-center text-foreground hover:text-primary hover:border-primary/40 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <ChevronRight className="w-4 h-4 stroke-[2.2]" />
              </button>
            </div>
          </div>

          {/* =====================================================================
              RIGHT COLUMN: Multi-Layer Editorial Travel Collage (~37-40% canvas width)
              ===================================================================== */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end select-none mt-8 lg:mt-0">
            {/* Stage — overflow-visible so floating layers can bleed outside bounds */}
            <div
              className="relative w-full max-w-[520px] lg:max-w-none overflow-visible"
              style={{ aspectRatio: "530 / 662" }}
            >
              {/* ── Layer 0: Ambient radial glow behind the organic blob ── */}
              <div
                className="absolute inset-[8%] rounded-full bg-gradient-to-br from-sky-100/60 via-cyan-50/30 to-transparent blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              {/* ── Layer 1: Main traveler collage (organic blob, transparent bg) ── */}
              <div className="absolute inset-0 z-10">
                <Image
                  src="/images/destinations/trending-collage-traveler-v2.png"
                  alt="Traveler with backpack looking out over panoramic tropical mountain bay"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-contain object-center lg:object-right"
                  priority
                />
              </div>

              {/* ── Layer 2: Pink dot-scatter decoration (top-right, behind polaroid) ── */}
              <div
                aria-hidden="true"
                className="absolute z-10 w-[22%] h-[18%] pointer-events-none"
                style={{
                  top: "3%",
                  right: "-2%",
                  backgroundImage:
                    "radial-gradient(circle, #f9a8d4 1.5px, transparent 1.5px)",
                  backgroundSize: "9px 9px",
                  opacity: 0.65,
                }}
              />

              {/* ── Layer 3: Floating Polaroid card — mountain scene (top-right) ── */}
              <div
                aria-hidden="true"
                className="absolute z-20 w-[38%]"
                style={{ top: "-3%", right: "-8%", transform: "rotate(6deg)" }}
              >
                <div
                  className="bg-white rounded-[3px]"
                  style={{
                    padding: "5px 5px 22px 5px",
                    boxShadow:
                      "0 10px 40px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.09)",
                  }}
                >
                  <div
                    className="relative w-full overflow-hidden bg-slate-100"
                    style={{ aspectRatio: "4/3" }}
                  >
                    <Image
                      src="/images/destinations/card-mountain.png"
                      alt=""
                      fill
                      sizes="180px"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-center text-[7px] sm:text-[8px] font-semibold text-slate-400 leading-tight mt-[3px] tracking-widest uppercase">
                    Mountain Views ✦
                  </p>
                </div>
              </div>

              {/* ── Layer 4: Location info badge (left edge, lower-mid) ── */}
              <div
                aria-hidden="true"
                className="absolute z-20 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-100/80"
                style={{
                  bottom: "28%",
                  left: "-4%",
                  padding: "6px 11px 6px 7px",
                }}
              >
                <div className="w-[22px] h-[22px] rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-3 h-3 text-primary fill-primary/10" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[7px] font-medium text-muted-foreground leading-none">
                    Location
                  </span>
                  <span className="text-[9px] font-bold text-foreground leading-tight mt-0.5">
                    Phi Phi Islands
                  </span>
                </div>
              </div>

              {/* ── Layer 5: Traveler count badge (right edge, lower) ── */}
              <div
                aria-hidden="true"
                className="absolute z-20 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-100/80"
                style={{
                  bottom: "13%",
                  right: "-5%",
                  padding: "6px 11px 6px 7px",
                }}
              >
                {/* Stacked avatar initials */}
                <div className="flex -space-x-1.5 shrink-0">
                  {(
                    [
                      { bg: "bg-primary", letter: "A" },
                      { bg: "bg-amber-400", letter: "M" },
                      { bg: "bg-sky-400", letter: "K" },
                    ] as const
                  ).map(({ bg, letter }) => (
                    <div
                      key={letter}
                      className={`w-5 h-5 rounded-full ${bg} border-2 border-white flex items-center justify-center`}
                    >
                      <span className="text-white text-[6px] font-extrabold leading-none">
                        {letter}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-foreground leading-none">
                    120+ Travelers
                  </span>
                  <span className="text-[7px] font-medium text-muted-foreground mt-[3px] leading-none">
                    This month
                  </span>
                </div>
              </div>

              {/* ── Layer 6: ★ Rating pill (left edge, mid-height) ── */}
              <div
                aria-hidden="true"
                className="absolute z-20 flex items-center gap-1 bg-primary text-white rounded-full shadow-lg"
                style={{ top: "48%", left: "1%", padding: "5px 10px 5px 8px" }}
              >
                <svg
                  className="w-3 h-3 fill-white shrink-0"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-[10px] font-bold leading-none">4.9</span>
                <span className="text-[8px] opacity-75 leading-none ml-0.5">
                  / 5.0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendingDestinationSection;
