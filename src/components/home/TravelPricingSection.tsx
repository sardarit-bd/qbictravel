"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Moon, Building2, Utensils, Plane } from "lucide-react";

/**
 * Centralized typed configuration for all image assets.
 * Allows easy replacement of every image later without modifying layout code.
 */
export interface TravelPricingAssetConfig {
  background: {
    mountainPanorama: string;
    hotAirBalloon?: string;
    travelers?: string;
  };
  packages: {
    basic: string;
    standard: string;
    premium: string;
  };
}

export const DEFAULT_PRICING_ASSETS: TravelPricingAssetConfig = {
  background: {
    mountainPanorama: "/images/pricing/mountain-panorama.jpg",
  },
  packages: {
    basic: "/images/pricing/basic-package.jpg",
    standard: "/images/pricing/standard-package.png",
    premium: "/images/pricing/premium-package.jpg",
  },
};

export type FeatureIconType = "days" | "nights" | "hotel" | "meals" | "pickup";

export interface PricingFeature {
  icon: FeatureIconType;
  label: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  billingLabel: string;
  image: string;
  imageAlt: string;
  features: PricingFeature[];
}

export interface TravelPricingSectionProps {
  assets?: TravelPricingAssetConfig;
}

/**
 * Feature Icon renderer consuming brand primary tokens
 */
function FeatureIcon({ type }: { type: FeatureIconType }) {
  const iconProps = {
    className: "w-2.5 h-2.5 text-primary shrink-0 stroke-[2.2]",
  };
  switch (type) {
    case "days":
      return <Calendar {...iconProps} />;
    case "nights":
      return <Moon {...iconProps} />;
    case "hotel":
      return <Building2 {...iconProps} />;
    case "meals":
      return <Utensils {...iconProps} />;
    case "pickup":
      return <Plane {...iconProps} />;
  }
}

/**
 * TravelPricingSection
 *
 * Pixel-accurate implementation of the "Price For Travel The World" section:
 * - Pale cyan/ice-blue ambient background (#EEF7FB)
 * - Torn-paper top edge with soft drop shadow
 * - Centered two-tone heading: "Price For" (brand pink script) + "Travel The World" (bold dark navy)
 * - Supporting descriptive subtitle
 * - Three tall, capsule-rounded white pricing cards (rounded-[38px] to rounded-[42px])
 * - Landscape header images in capsule frames
 * - Clear package name & price layout
 * - Five compact feature rows with brand pink accent icons
 * - Pill-shaped "Book Now" CTA buttons aligned with dynamic brand primary tokens
 * - Scenic mountain background illustration layering behind cards
 * - Clean bottom wavy transition
 */
export function TravelPricingSection({
  assets = DEFAULT_PRICING_ASSETS,
}: TravelPricingSectionProps) {
  const packages: PricingPackage[] = React.useMemo(
    () => [
      {
        id: "basic",
        name: "Basic Travel",
        price: "$499",
        billingLabel: "/ Per Person",
        image: assets.packages.basic,
        imageAlt:
          "Tropical coastline and turquoise waters for basic travel package",
        features: [
          { icon: "days", label: "3 Days" },
          { icon: "nights", label: "2 Nights" },
          { icon: "hotel", label: "Hotel Stay" },
          { icon: "meals", label: "Meals" },
          { icon: "pickup", label: "Airport Pickup" },
        ],
      },
      {
        id: "standard",
        name: "Standard Travel",
        price: "$899",
        billingLabel: "/ Per Person",
        image: assets.packages.standard,
        imageAlt: "Lush green mountain landscape for standard travel package",
        features: [
          { icon: "days", label: "5 Days" },
          { icon: "nights", label: "4 Nights" },
          { icon: "hotel", label: "Hotel Stay" },
          { icon: "meals", label: "Meals" },
          { icon: "pickup", label: "Airport Pickup" },
        ],
      },
      {
        id: "premium",
        name: "Premium Travel",
        price: "$1499",
        billingLabel: "/ Per Person",
        image: assets.packages.premium,
        imageAlt:
          "Snow-capped alpine mountain range for premium travel package",
        features: [
          { icon: "days", label: "7 Days" },
          { icon: "nights", label: "6 Nights" },
          { icon: "hotel", label: "Luxury Hotel Stay" },
          { icon: "meals", label: "Meals" },
          { icon: "pickup", label: "Airport Pickup" },
        ],
      },
    ],
    [assets],
  );

  return (
    <section
      id="travel-pricing"
      aria-label="Price For Travel The World"
      className="relative w-full bg-[#EEF7FB] overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32 text-foreground"
    >
      {/* =========================================================================
          TOP DECORATIVE TORN PAPER EDGE (Overhanging from white section above)
          ========================================================================= */}
      <div
        className="absolute top-0 inset-x-0 h-4 sm:h-6 overflow-hidden pointer-events-none select-none z-20"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 24"
          preserveAspectRatio="none"
          className="w-full h-full text-white fill-current filter drop-shadow-[0_4px_6px_rgba(15,23,42,0.06)]"
        >
          <path d="M0,0 L1440,0 L1440,8 C1400,12 1370,6 1330,11 C1290,15 1260,8 1220,13 C1180,18 1140,7 1100,12 C1060,17 1020,9 980,14 C940,19 900,8 860,13 C820,18 780,7 740,12 C700,17 660,8 620,14 C580,20 540,9 500,13 C460,17 420,7 380,12 C340,17 300,9 260,14 C220,19 180,8 140,13 C100,18 60,7 20,12 L0,9 Z" />
        </svg>
      </div>

      {/* =========================================================================
          SCENIC BACKGROUND LAYERING (Mountains, Ambient Glow)
          ========================================================================= */}

      {/* Ambient white halo glow behind central cards */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[480px] bg-white/60 blur-3xl rounded-full pointer-events-none select-none z-0"
        aria-hidden="true"
      />

      {/* Panoramic Mountain Landscape (Lower 45% of section) */}
      <div
        className="absolute bottom-0 inset-x-0 h-[320px] sm:h-[400px] md:h-[480px] lg:h-[520px] pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Soft top gradient blend for mountain sky */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#EEF7FB] via-[#EEF7FB]/70 to-transparent z-10" />

        <Image
          src={assets.background.mountainPanorama}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom opacity-90"
          priority
        />
      </div>

      {/* Bottom organic wavy transition curve */}
      <div
        className="absolute bottom-0 inset-x-0 h-8 sm:h-12 md:h-16 overflow-hidden pointer-events-none select-none z-20"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-full text-white fill-current filter drop-shadow-[0_-2px_6px_rgba(15,23,42,0.03)]"
        >
          <path d="M0,60 L1440,60 L1440,28 C1240,55 1060,15 820,38 C580,61 380,18 0,38 Z" />
        </svg>
      </div>

      {/* =========================================================================
          FOREGROUND CONTENT: Heading & Three Pricing Cards
          ========================================================================= */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Centered Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="flex items-center justify-center flex-wrap gap-x-2.5 gap-y-1">
            <span className="font-script text-primary text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-tight -rotate-1 select-none">
              Price For
            </span>
            <span className="font-sans font-extrabold text-foreground text-2xl sm:text-3xl md:text-[2.35rem] tracking-tight leading-tight">
              Travel The World
            </span>
          </h2>

          <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm text-muted-foreground font-medium max-w-md mx-auto leading-relaxed">
            Explore five destinations with budget-friendly travel packages.
          </p>
        </div>

        {/* =====================================================================
            THREE TRAVEL PRICING CARDS (Horizontal row on desktop)
            ===================================================================== */}
        <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="group relative w-full max-w-[240px] bg-card text-card-foreground rounded-[38px] sm:rounded-[42px] border border-border shadow-[0_12px_36px_rgba(15,23,42,0.08)] hover:shadow-[0_20px_48px_rgba(15,23,42,0.14)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col p-3 sm:p-3.5"
            >
              {/* Header Image (Landscape inset inside capsule frame) */}
              <div className="relative w-full aspect-[16/10] rounded-[26px] sm:rounded-[28px] overflow-hidden bg-muted shrink-0">
                <Image
                  src={pkg.image}
                  alt={pkg.imageAlt}
                  fill
                  sizes="240px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Package Title & Price Header */}
              <div className="mt-3 px-1 flex items-baseline justify-between gap-1.5">
                <h3 className="font-bold text-card-foreground text-[13px] sm:text-[14px] tracking-tight truncate">
                  {pkg.name}
                </h3>

                <div className="flex flex-col items-end shrink-0">
                  <span className="font-black text-card-foreground text-base sm:text-lg leading-none tracking-tight">
                    {pkg.price}
                  </span>
                  <span className="text-[9px] text-muted-foreground font-medium leading-none mt-0.5">
                    {pkg.billingLabel}
                  </span>
                </div>
              </div>

              {/* Five Feature Rows */}
              <div className="mt-3.5 px-1 space-y-1.5 flex-1">
                {pkg.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-muted-foreground text-[11px] sm:text-[12px] font-medium leading-none"
                  >
                    <div className="w-4 h-4 rounded-full bg-primary-subtle flex items-center justify-center shrink-0">
                      <FeatureIcon type={feature.icon} />
                    </div>
                    <span className="truncate">{feature.label}</span>
                  </div>
                ))}
              </div>

              {/* Book Now Button (Brand Primary CTA Pill) */}
              <div className="mt-4 pt-1 pb-0.5 flex justify-center">
                <Link
                  href="/tours"
                  aria-label={`Book ${pkg.name} package`}
                  className="inline-flex items-center justify-center w-full max-w-[170px] py-2 px-5 rounded-full bg-primary hover:bg-primary-hover active:bg-primary-active text-primary-foreground text-xs font-bold tracking-wide shadow-xs hover:shadow-md active:scale-95 transition-all duration-200 select-none text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TravelPricingSection;
