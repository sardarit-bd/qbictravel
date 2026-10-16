"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function BlogPagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  // Generate page numbers array (up to 4 or 5 shown as in the screenshot)
  const pages: number[] = [];
  const maxShown = Math.min(totalPages, 5);
  for (let i = 1; i <= maxShown; i++) {
    pages.push(i);
  }

  return (
    <nav
      aria-label="Blog pagination"
      className={cn("flex items-center justify-center gap-1.5 sm:gap-2 pt-8 sm:pt-10", className)}
    >
      {/* Previous Button */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Previous page"
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors cursor-pointer"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Numbered Page Buttons */}
      {pages.map((page) => {
        const isActive = page === currentPage;
        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer select-none",
              isActive
                ? "bg-primary text-white shadow-md shadow-pink-500/25 scale-105"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
            )}
          >
            {page}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Next page"
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors cursor-pointer"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </nav>
  );
}
