"use client";

import * as React from "react";
import { SearchX, RotateCcw, AlertTriangle, RefreshCw } from "lucide-react";
import { PackageCard } from "./PackageCard";
import { PackageGridSkeleton } from "./PackageCardSkeleton";
import { Package } from "@/features/booking/types/packages";
import { cn } from "@/lib/utils";

export interface PackageGridProps {
  packages: Package[];
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  onRetry?: () => void;
  onResetFilters?: () => void;
  className?: string;
}

export function PackageGrid({
  packages,
  isLoading = false,
  isError = false,
  errorMessage,
  onRetry,
  onResetFilters,
  className,
}: PackageGridProps) {
  // 1. Loading State (Zero layout shift with skeleton cards)
  if (isLoading) {
    return <PackageGridSkeleton count={4} />;
  }

  // 2. Server Error State (Never mask API errors as empty zero results)
  if (isError) {
    return (
      <div
        role="alert"
        aria-live="assertive"
        className="py-16 px-6 text-center rounded-2xl bg-rose-50/70 border border-rose-200/80 max-w-lg mx-auto space-y-4 my-8"
      >
        <div className="w-14 h-14 rounded-full bg-rose-100 text-rose-600 mx-auto flex items-center justify-center">
          <AlertTriangle className="w-7 h-7" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-slate-900">
            Unable to load packages
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
            {errorMessage ||
              "We encountered an issue communicating with the packages service. Please check your connection or retry."}
          </p>
        </div>
        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover active:bg-primary-active text-white font-semibold text-xs sm:text-sm shadow-md shadow-pink-500/20 transition-all active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
        )}
      </div>
    );
  }

  // 3. Genuine Empty Results State
  if (packages.length === 0) {
    return (
      <div className="py-16 px-6 text-center rounded-2xl bg-slate-50 border border-dashed border-slate-200 max-w-lg mx-auto space-y-4 my-8">
        <div className="w-14 h-14 rounded-full bg-primary-subtle text-primary mx-auto flex items-center justify-center">
          <SearchX className="w-7 h-7" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-slate-800">
            No packages match your criteria
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
            We couldn&apos;t find any travel packages matching your active filters. Try
            adjusting your search keywords or browsing another category.
          </p>
        </div>
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover active:bg-primary-active text-white font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset All Filters</span>
          </button>
        )}
      </div>
    );
  }

  // 4. Success State
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6",
        className
      )}
    >
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} pkg={pkg} />
      ))}
    </div>
  );
}

export default PackageGrid;
