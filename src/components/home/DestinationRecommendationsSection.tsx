"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, MapPin, Video, Compass, BadgeCheck, Users, ArrowRight } from "lucide-react";
import { cn } from "cn";

export interface DestinationMediaItem {
  id: string;
  name: string;
  duration: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  /**
   * Optional video URL. When provided in the future,
   * replace or stream destination video inside this card container.
   */
  videoUrl?: string;
}

export interface DestinationRecommendationsSectionProps {
  media?: {
    center?: DestinationMediaItem;
    topLeft?: DestinationMediaItem;
    bottomLeft?: DestinationMediaItem;
    right?: DestinationMediaItem;
  };
}

export const DEFAULT_DESTINATION_MEDIA: Record<
  "center" | "topLeft" | "bottomLeft" | "right",
  DestinationMediaItem
> = {
  center: {
    id: "phuket",
    name: "Phuket, Thailand",
    duration: "0:32",
    thumbnailUrl: "/images/destinations/phuket-thailand.jpg",
    thumbnailAlt: "Woman kayaking in crystal blue waters of Phuket, Thailand with limestone cliffs",
  },
  topLeft: {
    id: "interlaken",
    name: "Interlaken, Switzerland",
    duration: "0:28",
    thumbnailUrl: "/images/destinations/interlaken-switzerland.jpg",
    thumbnailAlt: "Hiker with backpack exploring alpine mountains of Interlaken, Switzerland",
  },
  bottomLeft: {
    id: "santorini",
    name: "Santorini, Greece",
    duration: "0:25",
    thumbnailUrl: "/images/destinations/santorini-greece.jpg",
    thumbnailAlt: "Whitewashed architecture and blue domes overlooking the Aegean sea in Santorini, Greece",
  },
  right: {
    id: "kyoto",
    name: "Kyoto, Japan",
    duration: "0:31",
    thumbnailUrl: "/images/destinations/kyoto-japan.jpg",
    thumbnailAlt: "Scenic view of traditional architecture and torii path in Kyoto, Japan",
  },
};

/**
 * Reusable Media Card for collage items.
 * Supports independent HTML5 video element with playback controls and poster thumbnail.
 */
function DestinationMediaCard({
  item,
  className,
  isCenter = false,
}: {
  item: DestinationMediaItem;
  className?: string;
  isCenter?: boolean;
}) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      if (item.videoUrl) {
        videoRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(true));
      } else {
        // When videoUrl is not yet provided, toggles playing state so controls are testable
        setIsPlaying(true);
      }
    }
  };

  return (
    <div
      onClick={handleTogglePlay}
      className={cn(
        "group relative overflow-hidden bg-slate-950 border-white transition-all duration-300 hover:shadow-2xl cursor-pointer select-none",
        isCenter
          ? "rounded-[22px] sm:rounded-[28px] md:rounded-[36px] border-[4px] sm:border-[5px] md:border-[7px] shadow-[0_20px_50px_rgba(15,23,42,0.18)]"
          : "rounded-[16px] sm:rounded-[20px] md:rounded-[26px] border-[3px] sm:border-[4px] md:border-[5px] shadow-[0_14px_36px_rgba(15,23,42,0.14)]",
        isPlaying ? "z-30 shadow-2xl scale-[1.02]" : isCenter ? "z-20 hover:scale-[1.02]" : "z-10 hover:scale-[1.02]",
        className
      )}
      aria-label={`${item.name} video card`}
    >
      {/* Individual Video Element with Controls */}
      <video
        ref={videoRef}
        src={item.videoUrl}
        poster={item.thumbnailUrl}
        playsInline
        controls={isPlaying}
        className="w-full h-full object-cover"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Thumbnail presentation when not actively playing */}
      {!isPlaying && (
        <Image
          src={item.thumbnailUrl}
          alt={item.thumbnailAlt}
          fill
          sizes={isCenter ? "(max-width: 768px) 60vw, 290px" : "(max-width: 768px) 40vw, 200px"}
          className="object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
          priority={isCenter}
        />
      )}

      {/* Subtle Bottom Gradient for text contrast (hidden when video controls are active) */}
      {!isPlaying && (
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent pointer-events-none transition-opacity duration-200"
          aria-hidden="true"
        />
      )}

      {/* Play Button Overlay */}
      {!isPlaying && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <button
            type="button"
            onClick={handleTogglePlay}
            aria-label={`Play ${item.name} video`}
            className={cn(
              "rounded-full bg-black/45 backdrop-blur-[2px] border-2 border-white/90 flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-black/60 pointer-events-auto",
              isCenter ? "w-11 h-11 sm:w-13 sm:h-13 md:w-16 md:h-16" : "w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10"
            )}
          >
            <Play
              className={cn(
                "text-white fill-white ml-0.5",
                isCenter ? "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" : "w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
              )}
            />
          </button>
        </div>
      )}

      {/* Bottom Meta Info: Location & Duration (hidden during playback to avoid covering video controls) */}
      {!isPlaying && (
        <div className="absolute inset-x-0 bottom-0 p-1.5 sm:p-2.5 md:p-3.5 flex items-center justify-between gap-1 z-10 pointer-events-none transition-opacity duration-200">
          <div className="flex items-center gap-0.5 sm:gap-1 min-w-0 text-white">
            <MapPin
              className={cn(
                "text-white fill-white/25 shrink-0",
                isCenter ? "w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" : "w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3.5 md:h-3.5"
              )}
            />
            <span
              className={cn(
                "font-bold truncate drop-shadow-sm",
                isCenter ? "text-[10px] sm:text-xs md:text-sm" : "text-[8px] sm:text-[9px] md:text-[11px]"
              )}
            >
              {item.name}
            </span>
          </div>

          <span
            className={cn(
              "rounded-full bg-black/60 backdrop-blur-xs text-white font-semibold shrink-0 px-1 sm:px-1.5 py-0.5 leading-none",
              isCenter ? "text-[9px] sm:text-[10px] md:text-xs" : "text-[7px] sm:text-[8px] md:text-[10px]"
            )}
          >
            {item.duration}
          </span>
        </div>
      )}
    </div>
  );
}

/**
 * DestinationRecommendationsSection
 *
 * Final refined implementation of the Destination Recommendations section:
 * - 4 staggered, well-spaced travel video cards with independent playback controls.
 * - Restored, clearly visible decorative leaves on the far-left edge behind cards.
 * - Realistic airplane asset (airplane.webp) positioned above and to the right of the collage.
 * - Curved dashed flight path flowing smoothly across the upper sky ending directly at the airplane tail.
 * - Soft watercolor backdrop wash.
 * - Preserved right-side content, typography, features, CTA, and brand tokens.
 */
export function DestinationRecommendationsSection({
  media,
}: DestinationRecommendationsSectionProps) {
  const centerItem = media?.center ?? DEFAULT_DESTINATION_MEDIA.center;
  const topLeftItem = media?.topLeft ?? DEFAULT_DESTINATION_MEDIA.topLeft;
  const bottomLeftItem = media?.bottomLeft ?? DEFAULT_DESTINATION_MEDIA.bottomLeft;
  const rightItem = media?.right ?? DEFAULT_DESTINATION_MEDIA.right;

  return (
    <section
      id="destination-recommendations"
      aria-label="Destination Recommendations"
      className="relative w-full bg-white overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="relative z-10 w-full max-w-[1340px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 xl:gap-14 items-center">
          {/* ===================================================================
              LEFT SIDE: DESTINATION VIDEO COLLAGE (~53% desktop width / 7 cols)
              =================================================================== */}
          <div className="xl:col-span-7 w-full flex items-center justify-center overflow-visible">
            {/* Collage Container with responsive proportions & comfortable card spacing */}
            <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[540px] md:max-w-[600px] xl:max-w-[670px] h-[360px] sm:h-[490px] md:h-[540px] lg:h-[570px] xl:h-[600px] select-none mx-auto">
              {/* Background Wash 1: Watercolor map texture */}
              <div
                className="absolute inset-0 pointer-events-none select-none z-0 opacity-70"
                aria-hidden="true"
              >
                <Image
                  src="/images/destinations/decorations/watercolor-map.svg"
                  alt=""
                  fill
                  className="object-contain object-center"
                />
              </div>

              {/* Background Wash 2: Soft watercolor shape blur wash */}
              <div
                className="absolute -left-3 sm:-left-6 md:-left-12 top-4 sm:top-6 md:top-10 w-44 sm:w-60 md:w-80 h-32 sm:h-44 md:h-52 pointer-events-none select-none z-0 opacity-55"
                aria-hidden="true"
              >
                <Image
                  src="/images/destinations/decorations/soft-shape.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              {/* Decorative Leaves: Clearly visible botanical framing along far-left edge behind cards */}
              <div
                className="absolute -left-5 sm:-left-12 md:-left-16 lg:-left-20 xl:-left-24 top-[18%] sm:top-[20%] md:top-[22%] w-24 sm:w-36 md:w-48 lg:w-56 xl:w-60 h-24 sm:h-36 md:h-48 lg:h-56 xl:h-60 pointer-events-none select-none z-0 opacity-85 -rotate-12"
                aria-hidden="true"
              >
                <Image
                  src="/images/destinations/decorations/tropical-leaves.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              {/* ===============================================================
                  UPPER FLIGHT PATH, SUNBURST & REALISTIC AIRPLANE
                  - Smooth, natural curved flight path with gentle rises and dips
                  - Decorative sunburst accent in the upper composition
                  - Enlarged realistic airplane aligned to the flight path
                  =============================================================== */}
              <div
                className="absolute -top-3 sm:-top-5 md:-top-6 inset-x-0 w-full h-[75px] sm:h-[90px] md:h-[110px] lg:h-[130px] xl:h-[140px] pointer-events-none select-none z-0 overflow-visible"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 650 190"
                  fill="none"
                  preserveAspectRatio="none"
                  className="w-full h-full overflow-visible"
                >
                  <path
                    d="M 25 125 C 75 75, 135 40, 205 50 C 260 58, 295 82, 345 76 C 390 70, 425 54, 462 46"
                    stroke="#94A3B8"
                    strokeWidth="2.5"
                    strokeDasharray="6 7"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                </svg>
              </div>

              {/* Decorative Sunburst SVG: Subtle accent in upper flight path / airplane composition */}
              <div
                className="absolute right-[95%] sm:right-[95%] md:right-[95%] w-7 sm:w-8 md:w-10 xl:w-12 pointer-events-none select-none z-0 drop-shadow-2xs opacity-90"
                aria-hidden="true"
              >
                <Image
                  src="/images/destinations/decorations/sunburst.svg"
                  alt=""
                  width={180}
                  height={130}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Realistic Airplane Asset: Rendered at ~1.6x size, aligned with flight route endpoint */}
              <div
                className="absolute right-[2%] sm:right-[4%] md:right-[5%] top-[-8%] sm:top-[-9%] md:top-[-11%] w-24 sm:w-30 md:w-36 lg:w-40 xl:w-44 pointer-events-none select-none z-0 drop-shadow-sm transform -rotate-[13deg]"
                aria-hidden="true"
              >
                <Image
                  src="/images/destinations/decorations/airplane.webp"
                  alt="Airplane"
                  width={280}
                  height={95}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>

              {/* ===============================================================
                  THE 4 LAYERED DESTINATION MEDIA CARDS
                  Arranged in a balanced, staggered composition with unobstructed
                  play buttons, location labels, and duration indicators.
                  =============================================================== */}

              {/* CARD 1: Upper-left card (Interlaken, Switzerland) — Staggered upper-left */}
              <DestinationMediaCard
                item={topLeftItem}
                className="absolute left-[1%] top-[4%] sm:top-[5%] w-[30%] sm:w-[29%] max-w-[180px] aspect-[9/13] -rotate-[4deg]"
              />

              {/* CARD 2: Lower-left card (Santorini, Greece) — Staggered lower-left, apart vertically */}
              <DestinationMediaCard
                item={bottomLeftItem}
                className="absolute left-[2%] sm:left-[3%] bottom-[3%] sm:bottom-[4%] w-[30%] sm:w-[29%] max-w-[180px] aspect-[9/13] -rotate-[1deg]"
              />

              {/* CARD 3: Center Primary Card (Phuket, Thailand) — Prominent vertical focal point */}
              <DestinationMediaCard
                item={centerItem}
                isCenter
                className="absolute left-[28%] sm:left-[28%] top-[6%] sm:top-[7%] w-[44%] sm:w-[44%] max-w-[270px] aspect-[9/13]"
              />

              {/* CARD 4: Right Card (Kyoto, Japan) — Staggered right, fully visible playable area */}
              <DestinationMediaCard
                item={rightItem}
                className="absolute right-[1%] top-[24%] sm:top-[27%] w-[30%] sm:w-[29%] max-w-[180px] aspect-[9/13] rotate-[4deg]"
              />
            </div>
          </div>

          {/* ===================================================================
              RIGHT SIDE: CONTENT (~47% desktop width / 5 cols)
              =================================================================== */}
          <div className="xl:col-span-5 w-full flex flex-col justify-center text-left">
            {/* Eyebrow: "TRAVEL MORE —" */}
            <div className="flex items-center gap-2.5">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-primary uppercase">
                TRAVEL MORE
              </span>
              <span className="w-8 sm:w-10 h-[2px] bg-primary rounded-full" />
            </div>

            {/* Main Heading: "We Recommend Beautiful Destinations Every Month" */}
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] xl:text-[2.9rem] font-extrabold text-foreground tracking-tight leading-[1.12]">
              <span>We Recommend </span>
              <br className="hidden sm:inline" />
              <span>Beautiful </span>
              <span className="relative inline-block">
                <span className="font-script text-primary font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.15rem] xl:text-[3.5rem] select-none inline-block transform -rotate-[2deg]">
                  Destinations
                </span>
                {/* Small accent quotation marks */}
                <span className="absolute -top-1 -right-3 text-primary text-sm sm:text-base font-bold select-none">
                  &apos;&apos;
                </span>
                {/* Subtle curved underline underneath Destinations */}
                <svg
                  viewBox="0 0 160 12"
                  fill="none"
                  className="absolute -bottom-1 left-0 w-full h-auto text-primary"
                  aria-hidden="true"
                >
                  <path
                    d="M 2 4 C 50 10, 110 10, 158 3"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              <span>Every Month</span>
            </h2>

            {/* Supporting Description */}
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl font-normal">
              Discover inspiring destinations, unique cultures, and unforgettable experiences shared by our travel community.
            </p>

            {/* 4 Feature Items (2x2 Grid) */}
            <div className="mt-6 sm:mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-xl">
              {/* Feature 1: Authentic Travel Videos */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-foreground shrink-0 shadow-2xs">
                  <Video className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xs sm:text-sm font-bold text-foreground leading-snug">
                    Authentic Travel Videos
                  </h3>
                  <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5 leading-snug">
                    Real experiences from real travelers.
                  </p>
                </div>
              </div>

              {/* Feature 2: Handpicked Destinations */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-foreground shrink-0 shadow-2xs">
                  <Compass className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xs sm:text-sm font-bold text-foreground leading-snug">
                    Handpicked Destinations
                  </h3>
                  <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5 leading-snug">
                    Explore hidden gems and famous landmarks.
                  </p>
                </div>
              </div>

              {/* Feature 3: Trusted Recommendations */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-foreground shrink-0 shadow-2xs">
                  <BadgeCheck className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xs sm:text-sm font-bold text-foreground leading-snug">
                    Trusted Recommendations
                  </h3>
                  <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5 leading-snug">
                    Discover places worth visiting.
                  </p>
                </div>
              </div>

              {/* Feature 4: Inspiring Travel Community */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-foreground shrink-0 shadow-2xs">
                  <Users className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xs sm:text-sm font-bold text-foreground leading-snug">
                    Inspiring Travel Community
                  </h3>
                  <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5 leading-snug">
                    Join a community of passionate travelers.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Row: CTA Button & 2.3K+ Happy Travelers */}
            <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7">
              {/* Primary Brand CTA */}
              <Link
                href="/tours"
                className="inline-flex items-center gap-3.5 pl-6 pr-2 py-2 rounded-full bg-primary hover:bg-primary-hover active:bg-primary-active text-primary-foreground font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 group select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shrink-0"
              >
                <span>Explore Destinations</span>
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-brand-navy flex items-center justify-center text-white shrink-0 group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </Link>

              {/* Traveler Avatar Group with 2.3K+ Social Proof */}
              <div className="flex items-center gap-3 select-none shrink-0">
                <div className="flex -space-x-2.5 overflow-hidden py-1">
                  <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full ring-2 ring-white overflow-hidden shadow-xs shrink-0">
                    <Image
                      src="/images/avatars/avatar-1.jpg"
                      alt="Happy traveler"
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full ring-2 ring-white overflow-hidden shadow-xs shrink-0">
                    <Image
                      src="/images/avatars/avatar-2.jpg"
                      alt="Happy traveler"
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full ring-2 ring-white overflow-hidden shadow-xs shrink-0">
                    <Image
                      src="/images/avatars/avatar-3.jpg"
                      alt="Happy traveler"
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="font-extrabold text-foreground text-sm sm:text-base leading-none">
                    2.3K+
                  </span>
                  <span className="text-[11px] sm:text-xs text-muted-foreground font-medium mt-1 leading-none">
                    Happy Travelers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DestinationRecommendationsSection;
