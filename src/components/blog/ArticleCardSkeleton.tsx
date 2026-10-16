import * as React from "react";

export function ArticleCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs animate-pulse flex flex-col h-full">
      {/* Thumbnail skeleton */}
      <div className="relative w-full aspect-[16/10] bg-slate-200" />
      {/* Content skeleton */}
      <div className="p-5 sm:p-6 space-y-3.5 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          {/* Meta row */}
          <div className="flex items-center gap-2">
            <div className="w-20 h-3 bg-slate-200 rounded" />
            <div className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
            <div className="w-16 h-3 bg-slate-200 rounded" />
          </div>
          {/* Title */}
          <div className="space-y-1.5">
            <div className="w-full h-4.5 bg-slate-200 rounded" />
            <div className="w-3/4 h-4.5 bg-slate-200 rounded" />
          </div>
          {/* Excerpt */}
          <div className="space-y-1 pt-1">
            <div className="w-full h-3 bg-slate-100 rounded" />
            <div className="w-5/6 h-3 bg-slate-100 rounded" />
          </div>
        </div>
        {/* Link */}
        <div className="w-24 h-4 bg-slate-200 rounded pt-2" />
      </div>
    </div>
  );
}

export function FeaturedArticlesSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 animate-pulse">
      {/* Left Large Card Skeleton (7 cols) */}
      <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs flex flex-col">
        <div className="w-full aspect-[16/11] bg-slate-200" />
        <div className="p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-24 h-3.5 bg-slate-200 rounded" />
            <div className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
            <div className="w-20 h-3.5 bg-slate-200 rounded" />
          </div>
          <div className="w-full h-7 bg-slate-200 rounded" />
          <div className="space-y-1.5">
            <div className="w-full h-3.5 bg-slate-100 rounded" />
            <div className="w-4/5 h-3.5 bg-slate-100 rounded" />
          </div>
          <div className="w-28 h-4 bg-slate-200 rounded pt-2" />
        </div>
      </div>

      {/* Right Stacked 2 Cards Skeleton (5 cols) */}
      <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-7">
        {[1, 2].map((idx) => (
          <div
            key={idx}
            className="flex-1 bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs flex flex-col sm:flex-row lg:flex-col"
          >
            <div className="w-full sm:w-2/5 lg:w-full aspect-[16/9] sm:aspect-auto lg:aspect-[16/9] bg-slate-200 shrink-0" />
            <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-20 h-3 bg-slate-200 rounded" />
                  <div className="w-16 h-3 bg-slate-200 rounded" />
                </div>
                <div className="w-full h-5 bg-slate-200 rounded" />
                <div className="w-full h-3 bg-slate-100 rounded" />
              </div>
              <div className="w-24 h-3.5 bg-slate-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
