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
import { cn } from "@/lib/utils";
import DriftWall, { DriftWallItem } from "@/components/DriftWall";

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
 * Vertical Marquee Gallery Card Definition
 */
interface GalleryCardItem {
  id: string;
  name: string;
  country: string;
  image: string;
  tag: string;
  heightClass: string;
}

/**
 * First vertical marquee column images (diverse landscapes & varied heights)
 */
const MARQUEE_COLUMN_1: GalleryCardItem[] = [
  {
    id: "col1-santorini",
    name: "Santorini",
    country: "Greece",
    image: "/images/destinations/santorini-greece.jpg",
    tag: "Coastal Town",
    heightClass: "h-[125px] sm:h-[160px] md:h-[200px] lg:h-[250px]",
  },
  {
    id: "col1-interlaken",
    name: "Interlaken",
    country: "Switzerland",
    image: "/images/destinations/interlaken-switzerland.jpg",
    tag: "Alpine Lakes",
    heightClass: "h-[155px] sm:h-[195px] md:h-[240px] lg:h-[305px]",
  },
  {
    id: "col1-bali",
    name: "Ulun Danu",
    country: "Bali, Indonesia",
    image: "/images/destinations/bali.jpg",
    tag: "Tropical Haven",
    heightClass: "h-[135px] sm:h-[170px] md:h-[210px] lg:h-[265px]",
  },
  {
    id: "col1-kyoto",
    name: "Yasaka Pagoda",
    country: "Kyoto, Japan",
    image: "/images/destinations/kyoto-japan.jpg",
    tag: "Historic Heritage",
    heightClass: "h-[120px] sm:h-[150px] md:h-[190px] lg:h-[235px]",
  },
  {
    id: "col1-canada",
    name: "Moraine Lake",
    country: "Banff, Canada",
    image: "/images/destinations/canada.jpg",
    tag: "Glacial Wonder",
    heightClass: "h-[150px] sm:h-[190px] md:h-[230px] lg:h-[295px]",
  },
];

/**
 * Second vertical marquee column images (diverse landmarks & staggered heights)
 */
const MARQUEE_COLUMN_2: GalleryCardItem[] = [
  {
    id: "col2-phuket",
    name: "Phuket Bay",
    country: "Thailand",
    image: "/images/destinations/phuket-thailand.jpg",
    tag: "Emerald Waters",
    heightClass: "h-[150px] sm:h-[190px] md:h-[230px] lg:h-[295px]",
  },
  {
    id: "col2-amalfi",
    name: "Manarola",
    country: "Cinque Terre, Italy",
    image: "/images/destinations/italy.jpg",
    tag: "Cliffside Village",
    heightClass: "h-[130px] sm:h-[165px] md:h-[205px] lg:h-[255px]",
  },
  {
    id: "col2-switzerland",
    name: "Lauterbrunnen",
    country: "Switzerland",
    image: "/images/destinations/switzerland.jpg",
    tag: "Waterfall Valley",
    heightClass: "h-[160px] sm:h-[200px] md:h-[250px] lg:h-[310px]",
  },
  {
    id: "col2-france",
    name: "Eiffel Tower",
    country: "Paris, France",
    image: "/images/destinations/france.jpg",
    tag: "Famous Landmark",
    heightClass: "h-[125px] sm:h-[155px] md:h-[195px] lg:h-[240px]",
  },
  {
    id: "col2-railay",
    name: "Railay Beach",
    country: "Krabi, Thailand",
    image: "/images/destinations/thailand.jpg",
    tag: "Tropical Beach",
    heightClass: "h-[145px] sm:h-[180px] md:h-[225px] lg:h-[285px]",
  },
];

/**
 * React Bits DriftWall Items:
 * Interleaved items so that Column 0 receives Column 1 items and Column 1 receives Column 2 items.
 * With columns={2} and direction="up", DriftWall automatically animates:
 * - Column 0 (left): UPWARD
 * - Column 1 (right): DOWNWARD
 */
const DRIFT_WALL_ITEMS: DriftWallItem[] = [
  { image: MARQUEE_COLUMN_1[0].image, title: `${MARQUEE_COLUMN_1[0].name}, ${MARQUEE_COLUMN_1[0].country}`, href: "/tours" },
  { image: MARQUEE_COLUMN_2[0].image, title: `${MARQUEE_COLUMN_2[0].name}, ${MARQUEE_COLUMN_2[0].country}`, href: "/tours" },
  { image: MARQUEE_COLUMN_1[1].image, title: `${MARQUEE_COLUMN_1[1].name}, ${MARQUEE_COLUMN_1[1].country}`, href: "/tours" },
  { image: MARQUEE_COLUMN_2[1].image, title: `${MARQUEE_COLUMN_2[1].name}, ${MARQUEE_COLUMN_2[1].country}`, href: "/tours" },
  { image: MARQUEE_COLUMN_1[2].image, title: `${MARQUEE_COLUMN_1[2].name}, ${MARQUEE_COLUMN_1[2].country}`, href: "/tours" },
  { image: MARQUEE_COLUMN_2[2].image, title: `${MARQUEE_COLUMN_2[2].name}, ${MARQUEE_COLUMN_2[2].country}`, href: "/tours" },
  { image: MARQUEE_COLUMN_1[3].image, title: `${MARQUEE_COLUMN_1[3].name}, ${MARQUEE_COLUMN_1[3].country}`, href: "/tours" },
  { image: MARQUEE_COLUMN_2[3].image, title: `${MARQUEE_COLUMN_2[3].name}, ${MARQUEE_COLUMN_2[3].country}`, href: "/tours" },
  { image: MARQUEE_COLUMN_1[4].image, title: `${MARQUEE_COLUMN_1[4].name}, ${MARQUEE_COLUMN_1[4].country}`, href: "/tours" },
  { image: MARQUEE_COLUMN_2[4].image, title: `${MARQUEE_COLUMN_2[4].name}, ${MARQUEE_COLUMN_2[4].country}`, href: "/tours" },
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

  const totalSlides = Math.min(3, Math.max(1, filteredDestinations.length));

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1));
  };

  // Touch swipe gesture support for mobile carousel
  const touchStartXRef = React.useRef<number | null>(null);
  const touchEndXRef = React.useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    if (distance > 40) {
      handleNext();
    } else if (distance < -40) {
      handlePrev();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
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



      {/* =========================================================================
          MAIN EDITORIAL GRID CONTAINER (3:2 Content Balance)
          ========================================================================= */}
      <div className="relative z-10 w-full max-w-[1440px] 2xl:max-w-[1536px] mx-auto px-4 sm:px-8 md:px-12 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* =====================================================================
              LEFT COLUMN: Editorial Content & Cards (~60-63% canvas width / 7 cols)
              ===================================================================== */}
          <div className="lg:col-span-7 flex flex-col items-start text-left relative z-10 w-full min-w-0">
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
              <span className="font-script text-primary text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-bold leading-[0.92] drop-shadow-xs -rotate-[2deg] origin-left select-none">
                Trending
              </span>
              <span className="font-sans font-extrabold text-foreground text-[2rem] sm:text-5xl md:text-[3.25rem] lg:text-[3.65rem] tracking-tight leading-[1.02] -mt-1 sm:-mt-2">
                Destinations
              </span>
            </h2>

            {/* Supporting Paragraph */}
            <p className="mt-3 sm:mt-3.5 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-full sm:max-w-[420px] md:max-w-[460px] lg:max-w-[410px]">
              Discover incredible destinations and unforgettable travel experiences around the world. Explore stunning landscapes, exciting adventures, and beautiful places waiting to be discovered.
            </p>

            {/* 4 Feature Tiles (2 × 2 Grid) */}
            <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 w-full max-w-full sm:max-w-[480px] lg:max-w-[440px]">
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

            {/* Category Filter Pills (Smooth horizontal scroll without page overflow or clipping) */}
            <div
              className="mt-5 sm:mt-6 flex items-center gap-2 overflow-x-auto w-full max-w-full lg:max-w-[580px] pb-1.5 scrollbar-none no-scrollbar touch-pan-x select-none"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
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

            {/* Destination Image Cards:
                - Mobile (< sm): 1-card responsive swipe carousel
                - Tablet & Desktop (>= sm): 3-card proportional grid */}
            <div className="mt-5 sm:mt-6 w-full max-w-full sm:max-w-[620px] md:max-w-[660px] lg:max-w-[620px]">
              {filteredDestinations.length > 0 ? (
                <>
                  {/* Mobile 1-Card Swipe Carousel (< sm / < 640px) */}
                  <div
                    className="block sm:hidden w-full overflow-hidden rounded-xl touch-pan-y"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    <div
                      className="flex transition-transform duration-300 ease-out"
                      style={{
                        transform: `translateX(-${(currentSlide % Math.max(1, filteredDestinations.length)) * 100}%)`,
                      }}
                    >
                      {filteredDestinations.map((item) => (
                        <div
                          key={item.id}
                          className="w-full shrink-0 px-0.5"
                        >
                          <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100 shadow-md border border-slate-100/90">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              sizes="92vw"
                              className="object-cover"
                              priority
                            />

                            {/* Dark gradient for text and button contrast */}
                            <div
                              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none"
                              aria-hidden="true"
                            />

                            {/* Card Content & Interactive Arrow */}
                            <div className="absolute inset-x-0 bottom-0 p-3 flex items-center justify-between z-10 gap-2">
                              <div className="flex items-center gap-1.5 text-white min-w-0">
                                <MapPin className="w-4 h-4 text-primary fill-primary shrink-0" />
                                <span className="text-xs font-bold tracking-tight drop-shadow-sm truncate">
                                  {item.name}
                                </span>
                              </div>

                              <Link
                                href="/tours"
                                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary shadow-md active:scale-95 transition-all duration-200 shrink-0"
                                aria-label={`Explore tours in ${item.name}`}
                              >
                                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tablet & Desktop 3-Card Grid (>= sm / >= 640px) */}
                  <div className="hidden sm:grid sm:grid-cols-3 gap-3 sm:gap-3.5">
                    {displayedDestinations.map((item) => (
                      <div
                        key={item.id}
                        className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 shadow-md border border-slate-100/90 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 1024px) 30vw, 200px"
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
                </>
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

            {/* Carousel Controls (Aligned under destination cards) */}
            <div className="mt-4 sm:mt-5 flex items-center gap-3">
              {/* Previous Slide Button */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous destination slide"
                disabled={filteredDestinations.length <= 1}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-slate-200/90 shadow-xs flex items-center justify-center text-foreground hover:text-primary hover:border-primary/40 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-40 disabled:pointer-events-none"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2.2]" />
              </button>

              {/* Pagination Dots */}
              <div
                className="flex items-center gap-1.5"
                role="tablist"
                aria-label="Destination slide pagination"
              >
                {Array.from({ length: totalSlides }).map((_, idx) => {
                  const isActive = (currentSlide % totalSlides) === idx;
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
                disabled={filteredDestinations.length <= 1}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-slate-200/90 shadow-xs flex items-center justify-center text-foreground hover:text-primary hover:border-primary/40 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-40 disabled:pointer-events-none"
              >
                <ChevronRight className="w-4 h-4 stroke-[2.2]" />
              </button>
            </div>
          </div>

          {/* =====================================================================
              RIGHT COLUMN: Vertical Travel Image Marquee Gallery (~37-40% canvas width)
              ===================================================================== */}
          <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end justify-center select-none mt-6 sm:mt-8 lg:mt-0 w-full min-w-0">
            {/* Ambient soft glow behind the marquee viewport */}
            <div
              className="absolute -inset-3 sm:-inset-4 rounded-3xl bg-gradient-to-tr from-pink-100/40 via-sky-100/30 to-amber-100/20 blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            {/* React Bits DriftWall Gallery Viewport */}
            <div className="relative w-full max-w-[480px] sm:max-w-[540px] md:max-w-[580px] lg:max-w-none h-[340px] sm:h-[400px] md:h-[480px] lg:h-[640px] xl:h-[660px] overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-900/5 p-1 border border-slate-100/80 shadow-sm">
              <DriftWall
                items={DRIFT_WALL_ITEMS}
                columns={2}
                tileWidth={195}
                tileHeight={140}
                gap={14}
                radius={16}
                tilt={14}
                turn={-12}
                roll={0}
                perspective={1200}
                depth={80}
                speed={32}
                direction="up"
                variance={0.05}
                parallax={0.4}
                pauseOnHover={true}
                lift={48}
                dim={0.78}
                fade={0.55}
                overlayColor="#0b0818"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default TrendingDestinationSection;
