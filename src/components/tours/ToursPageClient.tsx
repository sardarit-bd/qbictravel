"use client";

import * as React from "react";
import { ToursHero } from "./ToursHero";
import { TourSearchBar, TourSearchParamsState } from "./TourSearchBar";
import { ToursListing } from "./ToursListing";
import { DEMO_TOURS } from "@/features/tours/data/tours";
import { TourItem } from "@/features/tours/types";

export interface ToursPageClientProps {
  initialTours?: TourItem[];
}

export function ToursPageClient({
  initialTours = DEMO_TOURS,
}: ToursPageClientProps) {
  const [activeCategory, setActiveCategory] = React.useState<string>("all");
  const [searchParams, setSearchParams] = React.useState<TourSearchParamsState>({
    destination: "All Destinations",
    tourType: "All Types",
    duration: "all",
  });

  const handleSearch = (newParams: TourSearchParamsState) => {
    setSearchParams(newParams);
    // If user picked a tour type in the search bar, harmonize category pill
    if (newParams.tourType !== "All Types") {
      setActiveCategory(newParams.tourType);
    } else {
      setActiveCategory("all");
    }
  };

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
    // Harmonize tour type in search params
    setSearchParams((prev) => ({
      ...prev,
      tourType: category === "all" ? "All Types" : category,
    }));
  };

  const handleResetFilters = () => {
    setActiveCategory("all");
    setSearchParams({
      destination: "All Destinations",
      tourType: "All Types",
      duration: "all",
    });
  };

  return (
    <div className="w-full flex flex-col items-center justify-start">
      {/* =====================================================================
          1. HERO SECTION WITH EMBEDDED OVERLAPPING FLOATING SEARCH PANEL
          ===================================================================== */}
      <ToursHero>
        <TourSearchBar
          initialValues={searchParams}
          onSearch={handleSearch}
        />
      </ToursHero>

      {/* =====================================================================
          2. TOURS LISTING & FILTERING SECTION
          ===================================================================== */}
      <ToursListing
        tours={initialTours}
        activeCategory={activeCategory}
        onSelectCategory={handleCategorySelect}
        searchParams={searchParams}
        onResetFilters={handleResetFilters}
      />
    </div>
  );
}

export default ToursPageClient;
