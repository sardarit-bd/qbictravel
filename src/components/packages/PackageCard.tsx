"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Heart,
  Clock,
  Car,
  Utensils,
  User,
  Star,
  ArrowRight,
} from "lucide-react";
import { Package, formatPrice } from "@/features/booking/types/packages";
import { cn } from "@/lib/utils";

export interface PackageCardProps {
  pkg: Package;
  className?: string;
}

export function PackageCard({ pkg, className }: PackageCardProps) {
  const [isWishlisted, setIsWishlisted] = React.useState(false);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted((prev) => !prev);
  };

  // Safe data accessors
  const imageUrl = typeof pkg.image === "string" ? pkg.image : pkg.image?.url || "/images/packages/hero-packages.jpg";
  const imageAlt = typeof pkg.image === "string" ? pkg.title : (pkg.image?.alt || pkg.title);
  const displayPrice = pkg.pricing?.amount ?? pkg.price ?? 0;
  const displayCurrency = pkg.pricing?.currency ?? pkg.currency ?? "USD";
  const displayDuration = typeof pkg.duration === "string" ? pkg.duration : (pkg.duration?.display ?? "Full Day");
  const displayService = pkg.includedServiceSummary ?? pkg.includedService ?? (pkg.includedServices?.[0] ?? "Hotel Transfer");
  const displayRating = pkg.rating ? (typeof pkg.rating === "number" ? pkg.rating : pkg.rating.average) : 4.8;
  const displayReviews = pkg.reviewsCount ?? (typeof pkg.rating === "object" ? pkg.rating.reviewCount : 0);

  const isLunchIncluded =
    displayService.toLowerCase().includes("lunch") ||
    displayService.toLowerCase().includes("breakfast");

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
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Subtle contrast gradient over image */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20 pointer-events-none"
          aria-hidden="true"
        />

        {/* Optional Bestseller Badge (Upper-Left) */}
        {pkg.isBestseller && (
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-white text-xs font-bold shadow-md shadow-pink-500/20">
              Bestseller
            </span>
          </div>
        )}

        {/* Wishlist Heart Button (Upper-Right) */}
        <button
          type="button"
          onClick={toggleWishlist}
          aria-label={
            isWishlisted
              ? `Remove ${pkg.title} from wishlist`
              : `Add ${pkg.title} to wishlist`
          }
          className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm text-slate-700 shadow-md flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
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

        {/* Location Badge (Lower-Left of Image) */}
        <div className="absolute left-3.5 bottom-3.5 z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="truncate max-w-[180px]">{pkg.location}</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          PACKAGE CARD BODY
          ========================================================================= */}
      <div className="flex-1 flex flex-col justify-between p-5 sm:p-6 space-y-4">
        <div className="space-y-2.5">
          {/* Location text label */}
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
            <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
            <span>{pkg.location}</span>
          </div>

          {/* Package Title */}
          <h3 className="text-[17px] sm:text-[18px] font-bold text-slate-900 tracking-tight leading-snug group-hover:text-primary transition-colors">
            <Link href={`/packages/${pkg.slug}`}>{pkg.title}</Link>
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed line-clamp-2">
            {pkg.description}
          </p>

          {/* Metadata Row: Duration | Included Service | Guide */}
          <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>{displayDuration}</span>
            </div>

            {displayService && (
              <div className="flex items-center gap-1.5">
                {isLunchIncluded ? (
                  <Utensils className="w-3.5 h-3.5 text-primary shrink-0" />
                ) : (
                  <Car className="w-3.5 h-3.5 text-primary shrink-0" />
                )}
                <span>{displayService}</span>
              </div>
            )}

            {pkg.hasGuide && (
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>Guide</span>
              </div>
            )}
          </div>

          {/* Rating & Review Count */}
          <div className="flex items-center gap-1.5 text-xs">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-bold text-slate-900">{displayRating.toFixed(1)}</span>
            <span className="text-slate-400 font-normal">
              ({displayReviews} reviews)
            </span>
          </div>
        </div>

        {/* =====================================================================
            CARD FOOTER: PRICE & VIEW DETAILS BUTTON
            ===================================================================== */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          {/* Price Stack */}
          <div>
            <div className="text-xl sm:text-2xl font-black text-primary tracking-tight">
              {formatPrice(displayPrice, displayCurrency)}
            </div>
            <span className="text-[11px] text-slate-400 font-normal block -mt-0.5">
              per person
            </span>
          </div>

          {/* View Details CTA Button */}
          <Link
            href={`/packages/${pkg.slug}`}
            className="group/btn inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full border border-primary text-primary font-semibold text-xs sm:text-sm hover:bg-primary hover:text-white transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-2xs"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default PackageCard;
