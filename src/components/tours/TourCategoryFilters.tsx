"use client";

import * as React from "react";
import { Compass, Landmark, Palmtree, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CategoryFilterItem {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export const CATEGORIES: CategoryFilterItem[] = [
  { id: "all", label: "All Tours" },
  { id: "Adventure", label: "Adventure", icon: Compass },
  { id: "Cultural", label: "Cultural", icon: Landmark },
  { id: "Beach", label: "Beach", icon: Palmtree },
  { id: "Nature", label: "Nature", icon: Leaf },
];

export interface TourCategoryFiltersProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  className?: string;
}

export function TourCategoryFilters({
  selectedCategory,
  onSelectCategory,
  className,
}: TourCategoryFiltersProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter tours by category"
      className={cn("flex flex-wrap items-center gap-2 sm:gap-2.5", className)}
    >
      {CATEGORIES.map((cat) => {
        const isActive =
          (cat.id === "all" && (!selectedCategory || selectedCategory === "all")) ||
          selectedCategory.toLowerCase() === cat.id.toLowerCase();
        const Icon = cat.icon;

        return (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectCategory(cat.id)}
            className={cn(
              "inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-2xs cursor-pointer select-none",
              isActive
                ? "bg-primary text-white shadow-md shadow-primary/25 border border-primary font-bold"
                : "bg-white text-slate-700 border border-slate-200/90 hover:border-primary/50 hover:bg-primary-subtle/30 hover:text-slate-900"
            )}
          >
            {Icon && (
              <Icon
                className={cn(
                  "w-4 h-4 transition-colors shrink-0",
                  isActive ? "text-white" : "text-primary"
                )}
              />
            )}
            <span>{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default TourCategoryFilters;
