"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PackagePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function PackagePagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PackagePaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Packages pagination"
      className={cn("flex items-center justify-center gap-2 pt-8 sm:pt-10", className)}
    >
      {/* Previous Button */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Previous page"
        className="w-9 h-9 rounded-xl bg-white border border-slate-200/90 text-slate-600 flex items-center justify-center transition-all hover:bg-slate-50 hover:border-slate-300 disabled:opacity-40 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-2xs"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Numbered Page Buttons */}
      <div className="flex items-center gap-1.5">
        {pages.map((p) => {
          const isActive = p === currentPage;
          return (
            <button
              key={p}
              type="button"
              onClick={() => onPageChange(p)}
              aria-current={isActive ? "page" : undefined}
              aria-label={`Go to page ${p}`}
              className={cn(
                "w-9 h-9 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-2xs",
                isActive
                  ? "bg-primary text-white shadow-md shadow-pink-500/25 border border-primary"
                  : "bg-white border border-slate-200/90 text-slate-700 hover:border-primary/50 hover:text-primary"
              )}
            >
              {p}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Next page"
        className="w-9 h-9 rounded-xl bg-white border border-slate-200/90 text-slate-600 flex items-center justify-center transition-all hover:bg-slate-50 hover:border-slate-300 disabled:opacity-40 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-2xs"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}

export default PackagePagination;
