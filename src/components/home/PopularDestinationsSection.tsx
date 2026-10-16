"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";

export interface DestinationItem {
  id: string;
  name: string;
  image: string;
  alt: string;
  href: string;
}

export const POPULAR_DESTINATIONS: DestinationItem[] = [
  {
    id: "dest-greece",
    name: "Greece",
    image: "/images/destinations/greece.jpg",
    alt: "Greece - Santorini whitewashed cliffside village and blue Aegean sea",
    href: "/destinations/greece",
  },
  {
    id: "dest-switzerland",
    name: "Switzerland",
    image: "/images/destinations/switzerland.jpg",
    alt: "Switzerland - Lauterbrunnen valley with Swiss chalets and alpine waterfall",
    href: "/destinations/switzerland",
  },
  {
    id: "dest-japan",
    name: "Japan",
    image: "/images/destinations/japan.jpg",
    alt: "Japan - Historic pagoda and traditional illuminated street in Kyoto",
    href: "/destinations/japan",
  },
  {
    id: "dest-thailand",
    name: "Thailand",
    image: "/images/destinations/thailand.jpg",
    alt: "Thailand - Tropical Railay bay with traditional longtail boats and limestone cliffs",
    href: "/destinations/thailand",
  },
  {
    id: "dest-italy",
    name: "Italy",
    image: "/images/destinations/italy.jpg",
    alt: "Italy - Manarola Cinque Terre colorful pastel cliffside village",
    href: "/destinations/italy",
  },
  {
    id: "dest-france",
    name: "France",
    image: "/images/destinations/france.jpg",
    alt: "France - Iconic Eiffel Tower in Paris over the Seine River",
    href: "/destinations/france",
  },
  {
    id: "dest-bali",
    name: "Bali",
    image: "/images/destinations/bali.jpg",
    alt: "Bali - Sacred Ulun Danu Beratan water temple on tranquil lake",
    href: "/destinations/bali",
  },
  {
    id: "dest-canada",
    name: "Canada",
    image: "/images/destinations/canada.jpg",
    alt: "Canada - Moraine Lake turquoise alpine water and Banff Rocky Mountains",
    href: "/destinations/canada",
  },
];

export function PopularDestinationsSection() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  // Check scroll position to update arrow disabled states
  const checkScroll = React.useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  }, []);

  React.useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scrollBy = (offset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => scrollBy(-320);
  const handleNext = () => scrollBy(320);

  return (
    <section
      id="popular-destinations"
      aria-label="Popular Travel Destinations"
      className="relative w-full bg-white overflow-hidden py-8 sm:py-12"
    >
      <div className="relative z-10 w-full max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* ===================================================================
            PALE PINK CONTAINER WITH ROUNDED CORNERS (Matching Reference)
            =================================================================== */}
        <div className="w-full bg-[#FFF5F7] rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] p-6 sm:p-8 md:p-10 lg:p-12 border border-primary-subtle/50 shadow-[0_4px_24px_rgba(236,64,122,0.04)]">
          {/* Header Row: Eyebrow + Main Heading (Left) & Navigation Arrows (Right) */}
          <div className="flex items-center justify-between gap-4 mb-8 sm:mb-10">
            {/* Left Header */}
            <div>
              {/* Eyebrow: "EXPLORE THE WORLD —" */}
              <div className="flex items-center gap-2.5">
                <span className="text-xs sm:text-sm font-extrabold tracking-widest text-primary uppercase">
                  EXPLORE THE WORLD
                </span>
                <span
                  className="w-8 sm:w-10 h-[2px] bg-primary rounded-full"
                  aria-hidden="true"
                />
              </div>

              {/* Main Heading */}
              <h2 className="mt-2.5 text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold text-foreground tracking-tight leading-[1.15]">
                Popular Destinations
              </h2>
            </div>

            {/* Upper-Right Navigation Arrows */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              <button
                type="button"
                onClick={handlePrev}
                disabled={!canScrollLeft}
                aria-label="Scroll previous destinations"
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-100 flex items-center justify-center text-foreground transition-all duration-200 ${
                  canScrollLeft
                    ? "hover:text-primary hover:shadow-md hover:border-primary-subtle active:scale-95 shadow-xs cursor-pointer"
                    : "opacity-40 cursor-not-allowed shadow-none"
                }`}
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={!canScrollRight}
                aria-label="Scroll next destinations"
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-100 flex items-center justify-center text-foreground transition-all duration-200 ${
                  canScrollRight
                    ? "hover:text-primary hover:shadow-md hover:border-primary-subtle active:scale-95 shadow-xs cursor-pointer"
                    : "opacity-40 cursor-not-allowed shadow-none"
                }`}
              >
                <ChevronRight className="w-5 h-5 stroke-[2.2]" />
              </button>
            </div>
          </div>

          {/* ===================================================================
              DESTINATION GALLERY (8 items in 1 row on desktop, scrollable)
              =================================================================== */}
          <div
            ref={scrollContainerRef}
            className="flex items-start gap-4 sm:gap-5 lg:gap-3.5 xl:gap-4.5 overflow-x-auto scrollbar-none snap-x snap-mandatory py-2 px-1 -mx-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {POPULAR_DESTINATIONS.map((item) => (
              <div
                key={item.id}
                className="group snap-start shrink-0 flex flex-col items-center w-[125px] sm:w-[138px] md:w-[145px] lg:w-[calc((100%-7*0.75rem)/8)] xl:w-[calc((100%-7*1rem)/8)] min-w-[125px] lg:min-w-0 max-w-[160px] cursor-pointer"
              >
                {/* Destination Photograph Card */}
                <Link
                  href={item.href}
                  className="relative aspect-[3/4] w-full rounded-[18px] sm:rounded-[22px] overflow-hidden shadow-xs group-hover:shadow-md transition-all duration-300 group-hover:scale-[1.03] bg-slate-100"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 130px, (max-width: 1024px) 150px, 160px"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  />
                </Link>

                {/* Destination Location Label Row below Card */}
                <Link
                  href={item.href}
                  className="flex items-center justify-center gap-1.5 mt-3 group-hover:opacity-100 transition-opacity"
                >
                  <MapPin className="w-3.5 h-3.5 fill-primary text-primary shrink-0" />
                  <span className="text-xs sm:text-sm font-extrabold text-foreground group-hover:text-primary transition-colors tracking-tight text-center">
                    {item.name}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularDestinationsSection;
