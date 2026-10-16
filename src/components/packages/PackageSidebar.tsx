"use client";

import * as React from "react";
import Link from "next/link";
import {
  LayoutGrid,
  ChevronDown,
  Palmtree,
  Mountain,
  Compass,
  Sparkles,
  Car,
  Truck,
  Clock,
  LifeBuoy,
  Waves,
  Landmark,
  Calendar,
  Package,
  Headphones,
  ArrowRight,
  Filter,
  X,
  RotateCcw,
} from "lucide-react";
import { PackageCategory } from "@/features/booking/types/packages";
import { PACKAGE_CATEGORIES } from "@/features/booking/data/packages";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Palmtree,
  Mountain,
  Compass,
  Sparkles,
  Car,
  Truck,
  Clock,
  LifeBuoy,
  Waves,
  Landmark,
  Calendar,
  Package,
};

export interface PackageSidebarProps {
  categories?: PackageCategory[];
  selectedCategory: string;
  selectedSubcategory?: string;
  onSelectCategory: (categoryId: string, subcategoryId?: string) => void;
  onResetFilters?: () => void;
  isLoading?: boolean;
  className?: string;
}

export function PackageSidebar({
  categories = PACKAGE_CATEGORIES,
  selectedCategory,
  selectedSubcategory,
  onSelectCategory,
  onResetFilters,
  isLoading = false,
  className,
}: PackageSidebarProps) {
  // Use a Set for accordion expansion so any category can open/close cleanly
  const [expandedCategoryIds, setExpandedCategoryIds] = React.useState<
    Set<string>
  >(() => new Set(["island-tours"]));

  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = React.useState(false);

  // Toggle category expansion
  const toggleCategory = (categoryId: string) => {
    setExpandedCategoryIds((prev) => {
      const next = new Set(prev);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
  };

  // Close mobile drawer on Escape key and prevent background scroll
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileDrawerOpen) {
        setIsMobileDrawerOpen(false);
      }
    };

    if (isMobileDrawerOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileDrawerOpen]);

  // Handle top category click
  const handleCategoryClick = (
    cat: (typeof PACKAGE_CATEGORIES)[number],
    isMobile = false,
  ) => {
    const hasSub = Boolean(cat.subcategories && cat.subcategories.length > 0);
    if (hasSub) {
      toggleCategory(cat.id);
      // If category wasn't expanded, select it to view all its packages
      if (!expandedCategoryIds.has(cat.id)) {
        onSelectCategory(cat.id, undefined);
      }
    } else {
      onSelectCategory(cat.id, undefined);
      if (isMobile) setIsMobileDrawerOpen(false);
    }
  };

  const handleSubcategoryClick = (
    catId: string,
    subId?: string,
    isMobile = false,
  ) => {
    onSelectCategory(catId, subId);
    if (isMobile) setIsMobileDrawerOpen(false);
  };

  // Renders the categories accordion list
  const renderCategoriesList = (isMobile = false) => (
    <div
      className={cn(
        "divide-y divide-slate-100/80 transition-opacity duration-200",
        isLoading && "opacity-60 animate-pulse pointer-events-none",
      )}
    >
      {categories.map((cat) => {
        const Icon = ICON_MAP[cat.iconName] || Package;
        const hasSub = Boolean(
          cat.subcategories && cat.subcategories.length > 0,
        );
        const isExpanded = expandedCategoryIds.has(cat.id);
        const isCategoryActive =
          selectedCategory === cat.id && !selectedSubcategory;

        return (
          <div key={cat.id} className="text-xs sm:text-[13px]">
            {/* Top-Level Category Item Row */}
            <button
              type="button"
              aria-expanded={hasSub ? isExpanded : undefined}
              aria-controls={hasSub ? `subcategories-${cat.id}` : undefined}
              onClick={() => handleCategoryClick(cat, isMobile)}
              className={cn(
                "w-full px-5 py-3 flex items-center justify-between text-left transition-colors cursor-pointer select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                isCategoryActive
                  ? "bg-primary-subtle/60 text-primary font-bold"
                  : "hover:bg-slate-50 text-slate-700 hover:text-slate-900",
              )}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Icon
                  className={cn(
                    "w-4 h-4 shrink-0 transition-transform group-hover:scale-110",
                    isCategoryActive || isExpanded
                      ? "text-primary"
                      : "text-primary/80",
                  )}
                />
                <span
                  className={cn(
                    "font-semibold transition-colors truncate",
                    isCategoryActive
                      ? "text-primary"
                      : "text-slate-800 group-hover:text-primary",
                  )}
                >
                  {cat.name}
                </span>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-[12px] font-medium text-slate-400">
                  ({cat.count})
                </span>
                {hasSub && (
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-200",
                      isExpanded
                        ? "rotate-180 text-primary"
                        : "rotate-0 text-slate-400",
                    )}
                    aria-hidden="true"
                  />
                )}
              </div>
            </button>

            {/* Expandable Subcategories */}
            {hasSub && isExpanded && (
              <div
                id={`subcategories-${cat.id}`}
                role="region"
                aria-label={`${cat.name} subcategories`}
                className="bg-slate-50/70 border-t border-slate-100 py-1.5 pl-9 pr-4 space-y-0.5 animate-in fade-in duration-150"
              >
                {cat.subcategories!.map((sub) => {
                  const isSubActive =
                    selectedCategory === cat.id &&
                    selectedSubcategory === sub.id;

                  return (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() =>
                        handleSubcategoryClick(cat.id, sub.id, isMobile)
                      }
                      className={cn(
                        "w-full px-2.5 py-1.5 rounded-lg flex items-center justify-between text-left text-xs transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                        isSubActive
                          ? "bg-primary-subtle text-primary font-bold shadow-2xs"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium",
                      )}
                    >
                      <span className="truncate pr-2">{sub.name}</span>
                      <span className="text-slate-400 text-[11px] shrink-0 font-normal">
                        ({sub.count})
                      </span>
                    </button>
                  );
                })}

                {/* "Show all [Category Name] ->" Link */}
                <button
                  type="button"
                  onClick={() =>
                    handleSubcategoryClick(cat.id, undefined, isMobile)
                  }
                  className="w-full pt-2 pb-1 px-2.5 text-left text-xs font-semibold text-primary hover:text-primary-hover hover:underline transition-colors flex items-center gap-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  <span>
                    Show all {cat.name} ({cat.count})
                  </span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <aside
      className={cn(
        "w-full lg:w-[280px] shrink-0 lg:sticky lg:top-24 lg:self-start space-y-6",
        className,
      )}
    >
      {/* =======================================================================
          MOBILE & TABLET TRIGGER BAR (< 1024px)
          ======================================================================= */}
      <div className="lg:hidden mb-4">
        <button
          type="button"
          onClick={() => setIsMobileDrawerOpen(true)}
          className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-white border border-slate-200 shadow-xs text-slate-800 font-semibold text-sm hover:border-primary/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
        >
          <div className="flex items-center gap-2 text-primary font-bold">
            <Filter className="w-4 h-4" />
            <span>Browse Categories & Filters</span>
          </div>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary-subtle text-primary">
            Browse
          </span>
        </button>
      </div>

      {/* =======================================================================
          MOBILE SLIDE-OVER DRAWER MODAL (< 1024px)
          ======================================================================= */}
      {isMobileDrawerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Filter packages by category"
          className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs lg:hidden animate-in fade-in duration-200"
        >
          {/* Backdrop Dismiss Area */}
          <div
            className="flex-1"
            onClick={() => setIsMobileDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="w-full max-w-sm h-full bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-250">
            {/* Drawer Header */}
            <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                <LayoutGrid className="w-5 h-5 text-primary" />
                <span>Browse Categories</span>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileDrawerOpen(false)}
                aria-label="Close categories panel"
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Scrollable Body */}
            <div className="flex-1 overflow-y-auto">
              {renderCategoriesList(true)}
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center gap-3">
              {onResetFilters && (
                <button
                  type="button"
                  onClick={() => {
                    onResetFilters();
                    setIsMobileDrawerOpen(false);
                  }}
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsMobileDrawerOpen(false)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-primary hover:bg-primary-hover active:bg-primary-active text-white text-xs font-bold shadow-md shadow-pink-500/20 text-center transition-all duration-200 active:scale-95"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =======================================================================
          DESKTOP SIDEBAR CONTENT (Visible only on 1024px+)
          Both Browse Packages and Help cards move together as one unit
          ======================================================================= */}
      <div className="hidden lg:block space-y-6">
        {/* Browse Packages Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          {/* Card Header: Browse Packages */}
          <div className="px-3.5 sm:px-4 py-3 sm:py-3.5 border-b border-slate-100 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-6.5 h-6.5 rounded-lg bg-primary-subtle text-primary flex items-center justify-center shrink-0">
                <LayoutGrid className="w-3.5 h-3.5" />
              </div>
              <h2 className="text-[14px] sm:text-[14.5px] font-bold text-slate-900 tracking-tight whitespace-nowrap">
                Browse Packages
              </h2>
            </div>
            <span className="text-[11px] font-semibold text-primary px-2 py-0.5 rounded-full bg-primary-subtle shrink-0 whitespace-nowrap">
              {categories.length}
            </span>
          </div>

          {/* Categories Accordion */}
          {renderCategoriesList(false)}
        </div>

        {/* Help & Assistance Card */}
        <div className="rounded-2xl bg-primary-subtle/90 border border-pink-200/70 p-5 sm:p-6 text-left space-y-3.5 shadow-2xs">
          {/* Headset Icon */}
          <div className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center shadow-xs">
            <Headphones className="w-5 h-5 text-primary" />
          </div>

          {/* Title & Description */}
          <div className="space-y-1">
            <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 leading-snug">
              Need Help Choosing a Package?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our travel experts are here to help you find the perfect
              experience.
            </p>
          </div>

          {/* Contact Team CTA Button */}
          <Link
            href="/contact"
            className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-primary hover:bg-primary-hover active:bg-primary-active text-white text-xs sm:text-sm font-bold shadow-md shadow-pink-500/25 transition-all duration-200 active:scale-95"
          >
            <span>Contact Our Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default PackageSidebar;
