"use client";

import * as React from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PackageSearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearchSubmit?: () => void;
  className?: string;
}

export function PackageSearchBar({
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  className,
}: PackageSearchBarProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit?.();
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      aria-label="Search packages"
      className={cn(
        "relative w-full bg-white rounded-2xl border border-slate-200/90 shadow-sm p-1.5 sm:p-2 flex items-center gap-2",
        className
      )}
    >
      {/* Search Icon */}
      <div className="pl-3 sm:pl-3.5 flex items-center justify-center text-slate-400 shrink-0 pointer-events-none">
        <Search className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
      </div>

      {/* Input Field */}
      <input
        type="search"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search packages, tours or activities..."
        aria-label="Search packages, tours or activities"
        className="w-full min-w-0 bg-transparent px-2 py-2 sm:py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
      />

      {/* Clear Button (When query is active) */}
      {searchQuery && (
        <button
          type="button"
          onClick={() => onSearchChange("")}
          aria-label="Clear search"
          className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      {/* Search CTA Button */}
      <button
        type="submit"
        className="shrink-0 px-4 sm:px-7 py-2 sm:py-2.5 rounded-xl bg-primary hover:bg-primary-hover active:bg-primary-active text-white text-xs sm:text-sm font-bold shadow-sm shadow-pink-500/20 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
      >
        Search
      </button>
    </form>
  );
}

export default PackageSearchBar;
