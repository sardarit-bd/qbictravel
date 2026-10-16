"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PopularTravelTip } from "@/features/travel-tips/types/travelTips.types";
import { FIXTURE_POPULAR_TIPS } from "@/features/travel-tips/data/travelTipsFixture";

interface PopularTravelTipsProps {
  tips?: PopularTravelTip[];
  className?: string;
  onViewAllClick?: () => void;
}

export function PopularTravelTips({
  tips = FIXTURE_POPULAR_TIPS,
  className,
  onViewAllClick,
}: PopularTravelTipsProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-xs p-6 sm:p-7 space-y-4",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-1">
        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
          Popular Travel Tips
        </h3>
        {onViewAllClick ? (
          <button
            type="button"
            onClick={onViewAllClick}
            className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover transition-colors cursor-pointer group"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        ) : (
          <Link
            href="/travel-tips"
            className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover transition-colors group"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        )}
      </div>

      {/* 5 Compact List Items */}
      <div className="space-y-3.5 divide-y divide-slate-100">
        {tips.map((tip) => (
          <Link
            key={tip.id}
            href={`/travel-tips#${tip.slug}`}
            className="flex items-center gap-3.5 group pt-3.5 first:pt-0 hover:bg-slate-50/60 rounded-xl p-1.5 -mx-1.5 transition-colors"
          >
            {/* Thumbnail */}
            <div className="relative w-14 h-12 sm:w-16 sm:h-14 rounded-xl overflow-hidden bg-slate-100 shrink-0 shadow-2xs">
              <Image
                src={tip.image.url}
                alt={tip.image.alt || tip.title}
                fill
                sizes="64px"
                className="object-cover transition-transform duration-300 group-hover:scale-108"
              />
            </div>

            {/* Title & Metadata */}
            <div className="min-w-0 flex-1 space-y-0.5">
              <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                {tip.title}
              </h4>
              {tip.category && (
                <span className="text-[11px] text-slate-400 font-medium block">
                  {tip.category}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
