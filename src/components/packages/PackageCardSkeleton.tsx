import * as React from "react";

export function PackageCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden animate-pulse flex flex-col"
    >
      {/* Image Skeleton */}
      <div className="w-full aspect-[16/10] bg-slate-200" />

      {/* Card Content Skeleton */}
      <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          {/* Location badge skeleton */}
          <div className="w-24 h-3.5 bg-slate-200 rounded-md" />

          {/* Title skeleton */}
          <div className="w-4/5 h-5 bg-slate-200 rounded-md" />

          {/* Description lines skeleton */}
          <div className="w-full h-3 bg-slate-100 rounded-md" />
          <div className="w-3/4 h-3 bg-slate-100 rounded-md" />

          {/* Metadata chips */}
          <div className="flex items-center gap-4 pt-2">
            <div className="w-16 h-3.5 bg-slate-100 rounded-md" />
            <div className="w-20 h-3.5 bg-slate-100 rounded-md" />
            <div className="w-14 h-3.5 bg-slate-100 rounded-md" />
          </div>
        </div>

        {/* Card Footer skeleton */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="w-16 h-6 bg-slate-200 rounded-md" />
          <div className="w-28 h-9 bg-slate-200 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function PackageGridSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <PackageCardSkeleton key={`pkg-skeleton-${i}`} />
      ))}
    </div>
  );
}
