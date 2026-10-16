"use client";

import * as React from "react";
import {
  LayoutGrid,
  Compass,
  MapPin,
  BookOpen,
  Calendar,
  UtensilsCrossed,
  Mountain,
  Bell,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BlogCategory } from "@/features/blog/types/blog.types";
import { FIXTURE_CATEGORIES } from "@/features/blog/data/blogFixture";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  LayoutGrid,
  Compass,
  MapPin,
  BookOpen,
  Calendar,
  UtensilsCrossed,
  Mountain,
  Bell,
};

interface BlogCategoryNavProps {
  categories?: BlogCategory[];
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
  isLoading?: boolean;
}

export function BlogCategoryNav({
  categories = FIXTURE_CATEGORIES,
  activeCategory = "all",
  onSelectCategory,
  isLoading = false,
}: BlogCategoryNavProps) {
  return (
    <nav
      aria-label="Blog categories"
      className="w-full bg-white border-b border-slate-100/80 py-4 sm:py-5 shadow-xs sticky top-[68px] sm:top-[74px] z-30 backdrop-blur-md bg-white/95"
    >
      <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 xl:px-16">
        <div
          className={cn(
            "flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar scroll-smooth py-1",
            isLoading && "opacity-75 pointer-events-none",
          )}
          role="tablist"
        >
          {categories.map((cat) => {
            const isActive =
              activeCategory === cat.id ||
              (activeCategory === "" && cat.id === "all");
            const Icon = CATEGORY_ICONS[cat.iconName] || LayoutGrid;

            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectCategory(cat.id)}
                className={cn(
                  "shrink-0 inline-flex items-center gap-2 px-4 sm:px-4.5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                  isActive
                    ? "bg-primary text-white shadow-sm shadow-pink-500/25 border border-primary scale-[1.02]"
                    : "bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 shadow-2xs",
                )}
              >
                <Icon
                  className={cn(
                    "w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-colors",
                    isActive ? "text-white" : "text-primary",
                  )}
                  aria-hidden="true"
                />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
