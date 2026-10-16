import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PackagePromotion } from "@/features/booking/types/packages";
import { cn } from "@/lib/utils";

export interface PackagePromotionBannerProps {
  promotion?: PackagePromotion;
  discountPercent?: number;
  className?: string;
}

export function PackagePromotionBanner({
  promotion,
  discountPercent = 48,
  className,
}: PackagePromotionBannerProps) {
  const percent = promotion?.discountPercentage ?? discountPercent;
  const eyebrow = promotion?.eyebrow ?? "Special Offer";
  const subtext = promotion?.subtext ?? "On selected travel packages worldwide!";
  const ctaText = promotion?.ctaText ?? "View All Deals →";
  const ctaHref = promotion?.ctaHref ?? "/packages";
  const bgImage = promotion?.imageUrl ?? "/images/packages/promo-banner.jpg";

  return (
    <div
      className={cn(
        "relative w-full rounded-2xl overflow-hidden bg-gradient-to-r from-[#FDF2F8] via-[#FCE7F3]/70 to-[#FDF2F8]/40 border border-pink-200/60 shadow-xs flex flex-col sm:flex-row items-center justify-between p-5 sm:p-6 lg:p-7 min-h-[120px] sm:min-h-[130px]",
        className
      )}
    >
      {/* Background Image Texture on the Right */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 sm:w-2/5 pointer-events-none opacity-85 overflow-hidden">
        <Image
          src={bgImage}
          alt="Scenic tropical beach and islands"
          fill
          sizes="(max-width: 768px) 50vw, 30vw"
          className="object-cover object-right"
        />
        {/* Soft gradient mask over the image blending seamlessly into the pink background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDF2F8] via-[#FDF2F8]/70 to-transparent" />
      </div>

      {/* Left Text Block */}
      <div className="relative z-10 text-left space-y-1 max-w-md">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-primary">
          <ArrowRight className="w-3.5 h-3.5" />
          <span>{eyebrow}</span>
        </div>

        {/* Headline */}
        <h3 className="text-xl sm:text-2xl lg:text-[26px] font-black text-slate-900 tracking-tight leading-snug">
          Get Up to <span className="text-primary">{percent}% Off</span>
        </h3>

        {/* Subtext */}
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          {subtext}
        </p>
      </div>

      {/* Right CTA Button */}
      <div className="relative z-10 mt-4 sm:mt-0 shrink-0 self-start sm:self-center">
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-1.5 px-5 sm:px-6 py-2.5 rounded-full bg-white/95 hover:bg-white text-slate-900 font-bold text-xs sm:text-sm shadow-md hover:shadow-lg border border-slate-200/80 hover:text-primary transition-all duration-200 active:scale-95"
        >
          <span>{ctaText}</span>
        </Link>
      </div>
    </div>
  );
}

export default PackagePromotionBanner;
