"use client";

import * as React from "react";
import { SearchX, RotateCcw } from "lucide-react";
import { TourCard } from "./TourCard";
import { TourCategoryFilters } from "./TourCategoryFilters";
import { TourItem } from "@/features/tours/types";
import { TourSearchParamsState } from "./TourSearchBar";
import { cn } from "@/lib/utils";

export interface ToursListingProps {
  tours: TourItem[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  searchParams: TourSearchParamsState;
  onResetFilters: () => void;
  className?: string;
}

export function ToursListing({
  tours,
  activeCategory,
  onSelectCategory,
  searchParams,
  onResetFilters,
  className,
}: ToursListingProps) {
  // Client-side composite filtering across category pills + search bar fields
  const filteredTours = React.useMemo(() => {
    return tours.filter((tour) => {
      // 1. Category Filter (from pills or search bar tour type)
      const effectiveCategory =
        activeCategory && activeCategory !== "all"
          ? activeCategory
          : searchParams.tourType !== "All Types"
          ? searchParams.tourType
          : "all";

      if (
        effectiveCategory !== "all" &&
        tour.category.toLowerCase() !== effectiveCategory.toLowerCase()
      ) {
        return false;
      }

      // 2. Destination Filter
      if (
        searchParams.destination &&
        searchParams.destination !== "All Destinations"
      ) {
        const dest = searchParams.destination.toLowerCase();
        const matchesLocation =
          tour.location.toLowerCase().includes(dest) ||
          dest.includes(tour.location.toLowerCase()) ||
          tour.name.toLowerCase().includes(dest);
        if (!matchesLocation) return false;
      }

      // 3. Duration Filter
      if (searchParams.duration && searchParams.duration !== "all") {
        if (searchParams.duration === "1-3") {
          if (tour.durationDays < 1 || tour.durationDays > 3) return false;
        } else if (searchParams.duration === "4-7") {
          if (tour.durationDays < 4 || tour.durationDays > 7) return false;
        } else if (searchParams.duration === "8+") {
          if (tour.durationDays < 8) return false;
        }
      }

      return true;
    });
  }, [tours, activeCategory, searchParams]);

  const hasActiveFilters =
    (activeCategory && activeCategory !== "all") ||
    searchParams.destination !== "All Destinations" ||
    searchParams.tourType !== "All Types" ||
    searchParams.duration !== "all";

  return (
    <section
      aria-label="Tours Listing Section"
      className={cn("w-full bg-white pt-10 sm:pt-14 md:pt-16 pb-20 sm:pb-28", className)}
    >
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12 xl:px-16">
        {/* =====================================================================
            SECTION HEADER: Two-sided layout matching reference
            Left: Eyebrow + Heading + Subtitle
            Right: Category Filter Pills
            ===================================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-slate-100">
          {/* Left: Section Headings */}
          <div className="max-w-2xl text-left space-y-2">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span
                className="w-5 sm:w-6 h-0.5 bg-primary rounded-full inline-block"
                aria-hidden="true"
              />
              <span className="text-xs sm:text-sm font-bold text-slate-400 tracking-wider uppercase">
                Popular Tours
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
              Explore Our Tours
            </h2>

            {/* Supporting Text */}
            <p className="text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed max-w-xl">
              Discover amazing destinations and create unforgettable memories with our
              carefully curated tour packages.
            </p>
          </div>

          {/* Right: Category Filter Pills */}
          <div className="shrink-0 self-start lg:self-center">
            <TourCategoryFilters
              selectedCategory={activeCategory}
              onSelectCategory={onSelectCategory}
            />
          </div>
        </div>

        {/* =====================================================================
            ACTIVE FILTER BADGE & RESULTS BAR (When filters applied)
            ===================================================================== */}
        {hasActiveFilters && (
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-800">
                Found {filteredTours.length}{" "}
                {filteredTours.length === 1 ? "tour" : "tours"}
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500">
                Filters:{" "}
                {[
                  activeCategory !== "all" && `Category: ${activeCategory}`,
                  searchParams.destination !== "All Destinations" &&
                    `Destination: ${searchParams.destination}`,
                  searchParams.tourType !== "All Types" &&
                    `Type: ${searchParams.tourType}`,
                  searchParams.duration !== "all" &&
                    `Duration: ${searchParams.duration} days`,
                ]
                  .filter(Boolean)
                  .join(", ")}
              </span>
            </div>

            <button
              type="button"
              onClick={onResetFilters}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover hover:underline transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset all filters</span>
            </button>
          </div>
        )}

        {/* =====================================================================
            TOUR CARDS GRID: 3 columns desktop, 2 tablet, 1 mobile
            ===================================================================== */}
        {filteredTours.length > 0 ? (
          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {filteredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        ) : (
          /* =====================================================================
              EMPTY STATE: Friendly reset prompt
              ===================================================================== */
          <div className="mt-12 py-16 px-6 text-center rounded-2xl bg-slate-50 border border-dashed border-slate-200 max-w-xl mx-auto space-y-4">
            <div className="w-14 h-14 rounded-full bg-primary-subtle text-primary mx-auto flex items-center justify-center">
              <SearchX className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-800">
                No tours match your criteria
              </h3>
              <p className="text-sm text-slate-500 max-w-sm mx-auto">
                We couldn&apos;t find any tour packages matching your active filters. Try
                broadening your search or reset all filters.
              </p>
            </div>
            <button
              type="button"
              onClick={onResetFilters}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover active:bg-primary-active text-white font-semibold text-sm shadow-md transition-all active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset Filters</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ToursListing;
