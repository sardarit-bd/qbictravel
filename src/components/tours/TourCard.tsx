"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Heart, Clock, Users, Star, ArrowRight } from "lucide-react";
import { TourItem } from "@/features/tours/types";
import { formatCurrency } from "@/features/tours/data/tours";
import { cn } from "@/lib/utils";

export interface TourCardProps {
  tour: TourItem;
  className?: string;
}

export function TourCard({ tour, className }: TourCardProps) {
  const [isWishlisted, setIsWishlisted] = React.useState(false);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted((prev) => !prev);
  };

  return (
    <article
      className={cn(
        "group relative flex flex-col bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden",
        className
      )}
    >
      {/* =========================================================================
          TOP IMAGE & OVERLAYS
          ========================================================================= */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={tour.image}
          alt={tour.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          priority={tour.isFeatured}
        />

        {/* Subtle top and bottom dark gradient for badge readability */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none"
          aria-hidden="true"
        />

        {/* Location Badge (Lower-Left) */}
        <div className="absolute left-3.5 bottom-3.5 z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="truncate max-w-[170px]">{tour.location}</span>
          </div>
        </div>

        {/* Wishlist Button (Upper-Right) */}
        <button
          type="button"
          onClick={toggleWishlist}
          aria-label={
            isWishlisted
              ? `Remove ${tour.name} from wishlist`
              : `Add ${tour.name} to wishlist`
          }
          className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm text-slate-700 shadow-md flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Heart
            className={cn(
              "w-4 h-4 transition-colors",
              isWishlisted
                ? "fill-primary text-primary"
                : "text-slate-600 group-hover:text-primary"
            )}
          />
        </button>
      </div>

      {/* =========================================================================
          CARD CONTENT & DETAILS
          ========================================================================= */}
      <div className="flex-1 flex flex-col justify-between p-5 sm:p-6">
        <div className="space-y-3">
          {/* Row 1: Tour Title & Rating */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-[17px] sm:text-[18px] font-bold text-slate-900 tracking-tight leading-snug line-clamp-1 group-hover:text-primary transition-colors">
              <Link href={`/tours/${tour.slug}`}>{tour.name}</Link>
            </h3>

            {/* Rating & Review Count Stack */}
            <div className="flex flex-col items-end shrink-0 text-right">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-sm font-bold text-slate-900">
                  {tour.rating.toFixed(1)}
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-normal">
                ({tour.reviewCount} reviews)
              </span>
            </div>
          </div>

          {/* Row 2: Duration and Group Size Metadata */}
          <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-600 font-medium">
            <div className="flex items-center gap-1.5 shrink-0">
              <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>{tour.duration}</span>
            </div>
            <span className="text-slate-300 select-none">|</span>
            <div className="flex items-center gap-1.5 shrink-0">
              <Users className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>{tour.maxGroupSize}</span>
            </div>
          </div>

          {/* Row 3: Short Description */}
          <p className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed line-clamp-2">
            {tour.description}
          </p>
        </div>

        {/* =====================================================================
            CARD FOOTER: PRICE & VIEW TOUR ACTION
            ===================================================================== */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          {/* Price Stack */}
          <div>
            <div className="text-xl sm:text-2xl font-extrabold text-primary tracking-tight">
              {formatCurrency(tour.price, tour.currency)}
            </div>
            <span className="text-[11.5px] text-slate-400 font-normal block -mt-0.5">
              per person
            </span>
          </div>

          {/* View Tour CTA Button */}
          <Link
            href={`/tours/${tour.slug}`}
            className="group/btn inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full border border-primary text-primary font-semibold text-xs sm:text-sm hover:bg-primary hover:text-white transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-xs"
          >
            <span>View Tour</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default TourCard;
