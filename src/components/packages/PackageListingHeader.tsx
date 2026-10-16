"use client";

import * as React from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type PackageSortOption =
  | "popular"
  | "price-asc"
  | "price-desc"
  | "rating"
  | "name";

export interface PackageListingHeaderProps {
  title?: string;
  eyebrow?: string;
  description?: string;
  resultsCount: number;
  sortBy: PackageSortOption;
  onSortChange: (option: PackageSortOption) => void;
  className?: string;
}

const SORT_OPTIONS: { id: PackageSortOption; label: string }[] = [
  { id: "popular", label: "Popular" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Rating" },
  { id: "name", label: "Name" },
];

export function PackageListingHeader({
  title = "Phuket Tours, Shows & Transport",
  eyebrow = "PHUKET TOURS, SHOWS & TRANSPORT",
  description = "Explore the best tours, shows and transport services in Phuket. From island hopping to exciting water activities, we have a wide range of packages to make your trip unforgettable.",
  resultsCount,
  sortBy,
  onSortChange,
  className,
}: PackageListingHeaderProps) {
  const [isSortOpen, setIsSortOpen] = React.useState(false);
  const sortRef = React.useRef<HTMLDivElement>(null);

  // Close sort menu on click outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentSortLabel =
    SORT_OPTIONS.find((s) => s.id === sortBy)?.label || "Popular";

  return (
    <div className={cn("space-y-4 pt-2", className)}>
      {/* Top Row: Category Headings (Left) & Result Count (Right) */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        {/* Left: Eyebrow + Heading + Subtitle */}
        <div className="space-y-1.5 max-w-2xl text-left">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <span
              className="w-5 sm:w-6 h-0.5 bg-primary rounded-full inline-block"
              aria-hidden="true"
            />
            <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">
              {eyebrow}
            </span>
          </div>

          {/* Main Category Heading */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {title}
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl">
            {description}
          </p>
        </div>

        {/* Right: Results Count */}
        <div className="shrink-0 self-start sm:self-center">
          <span className="text-xs sm:text-sm text-slate-500 font-medium">
            <strong className="text-slate-800 font-bold">{resultsCount}</strong>{" "}
            {resultsCount === 1 ? "Package Found" : "Packages Found"}
          </span>
        </div>
      </div>

      {/* Bottom Row: Sort by Control */}
      <div className="flex justify-end pt-2">
        <div ref={sortRef} className="relative inline-flex items-center gap-2 text-xs sm:text-sm">
          <span className="text-slate-500 font-medium">Sort by:</span>

          <button
            type="button"
            onClick={() => setIsSortOpen(!isSortOpen)}
            aria-expanded={isSortOpen}
            aria-haspopup="listbox"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/90 text-slate-800 font-bold hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-2xs transition-colors cursor-pointer"
          >
            <span>{currentSortLabel}</span>
            <ChevronDown
              className={cn(
                "w-3.5 h-3.5 text-slate-400 transition-transform duration-200",
                isSortOpen && "rotate-180 text-primary"
              )}
            />
          </button>

          {/* Sort Dropdown Menu */}
          {isSortOpen && (
            <div
              role="listbox"
              className="absolute right-0 top-full mt-1.5 w-48 rounded-xl bg-white border border-slate-100 shadow-xl py-1.5 z-40 animate-in fade-in slide-in-from-top-1 duration-150"
            >
              {SORT_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  role="option"
                  aria-selected={sortBy === opt.id}
                  onClick={() => {
                    onSortChange(opt.id);
                    setIsSortOpen(false);
                  }}
                  className={cn(
                    "w-full px-3.5 py-2 text-left text-xs sm:text-sm font-medium flex items-center justify-between hover:bg-primary-subtle/40 transition-colors cursor-pointer",
                    sortBy === opt.id
                      ? "text-primary font-bold bg-primary-subtle/20"
                      : "text-slate-700"
                  )}
                >
                  <span>{opt.label}</span>
                  {sortBy === opt.id && <Check className="w-3.5 h-3.5 text-primary" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PackageListingHeader;
