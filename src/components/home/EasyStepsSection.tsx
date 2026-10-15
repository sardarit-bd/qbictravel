import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BookingStepItem {
  id: string;
  number: string;
  strokeColor: string;
  numberBg: string;
  accentBorder: string;
  arrowStyle: string;
  title: string;
  description: string;
  illustration: string;
  alt: string;
  href: string;
}

const BOOKING_STEPS: BookingStepItem[] = [
  {
    id: "step-1",
    number: "01",
    strokeColor: "#EC407A",
    numberBg: "bg-[#EC407A]",
    accentBorder: "border-b-[#EC407A]",
    arrowStyle:
      "bg-pink-50/80 border-pink-100 text-[#EC407A] group-hover:bg-[#EC407A] group-hover:text-white group-hover:border-[#EC407A]",
    title: "Choose Your Destination",
    description:
      "Select from a variety of destinations to plan your next adventure.",
    illustration: "/images/easy-steps/destination-map-1.png",
    alt: "Destination world map with 3D map pin illustration",
    href: "/destinations",
  },
  {
    id: "step-2",
    number: "02",
    strokeColor: "#F59E0B",
    numberBg: "bg-[#F59E0B]",
    accentBorder: "border-b-[#FBBF24]",
    arrowStyle:
      "bg-amber-50/80 border-amber-100 text-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-white group-hover:border-[#F59E0B]",
    title: "Make Your Payment",
    description: "Complete your secure payment with ease.",
    illustration: "/images/easy-steps/payment-card-shield-1.png",
    alt: "Payment credit card with verified security shield illustration",
    href: "/booking",
  },
  {
    id: "step-3",
    number: "03",
    strokeColor: "#EC407A",
    numberBg: "bg-[#EC407A]",
    accentBorder: "border-b-[#EC407A]",
    arrowStyle:
      "bg-pink-50/80 border-pink-100 text-[#EC407A] group-hover:bg-[#EC407A] group-hover:text-white group-hover:border-[#EC407A]",
    title: "Enjoy Your Trip",
    description: "Pack your bags and create unforgettable memories.",
    illustration: "/images/easy-steps/travel-backpack-camera-1.png",
    alt: "Travel backpack with straw hat, camera, and map illustration",
    href: "/tours",
  },
];

export function EasyStepsSection() {
  return (
    <section
      aria-label="Easy Steps For Booking"
      className="w-full bg-white relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none"
    >
      {/* =======================================================================
          BACKGROUND AMBIENT DECORATIVE GLOWS
          ======================================================================= */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-pink-100/40 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-pink-100/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full max-w-[1280px] mx-auto relative z-10">
        {/* =====================================================================
            SECTION HEADER WITH DECORATIVE FLIGHT PATH & EXPLORE THE WORLD
            ===================================================================== */}
        <div className="relative text-center max-w-2xl mx-auto mb-12 sm:mb-14 md:mb-16">
          {/* Small Uppercase Label with Thin Horizontal Lines */}
          <div className="inline-flex items-center justify-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
            <span
              className="w-8 sm:w-12 h-[1.5px] bg-[#EC407A]/50 rounded-full"
              aria-hidden="true"
            />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-slate-700 uppercase">
              HOW IT WORKS
            </span>
            <span
              className="w-8 sm:w-12 h-[1.5px] bg-[#EC407A]/50 rounded-full"
              aria-hidden="true"
            />
          </div>

          {/* Main Heading: "Easy Steps For Booking" */}
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
            Easy Steps{" "}
            <span className="relative inline-block font-script text-[#EC407A] text-4xl sm:text-5xl md:text-[3.25rem] lg:text-6xl font-normal ml-1">
              For Booking
              {/* Subtle pink brush / underline stroke accent */}
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-2.5 text-[#EC407A]/90 pointer-events-none"
                viewBox="0 0 160 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 7.5C45 2.5 115 2 158 8.5C120 6 50 6 10 9"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 sm:mt-3.5 text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-lg mx-auto">
            Follow the simple steps and book your dream tour package now!
          </p>
        </div>

        {/* =====================================================================
            THREE BOOKING STEP CARDS (HORIZONTAL ON DESKTOP)
            ===================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 items-stretch">
          {BOOKING_STEPS.map((step) => (
            <div
              key={step.id}
              className={cn(
                "group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden border-b-[3px]",
                step.accentBorder,
              )}
            >
              {/* Upper Section: Top Row (Number + Illustration) and Expanded Content */}
              <div>
                {/* Top Row: Outlined Number on Left & 3D Illustration on Right */}
                <div className="flex items-center justify-between">
                  {/* Step Number: Large Oversized Thin-Outlined Typography */}
                  <div className="select-none flex items-center leading-none">
                    <span
                      className="font-black text-4xl sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem] tracking-tight leading-none text-transparent inline-block font-sans"
                      style={{
                        WebkitTextStroke: `1.8px ${step.strokeColor}`,
                        WebkitTextFillColor: "transparent",
                        color: "transparent",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Right Side: Step 3D Illustration Asset */}
                  <div className="relative shrink-0 w-18 h-18 sm:w-20 sm:h-20 lg:w-22 lg:h-22 flex items-center justify-center">
                    <Image
                      src={step.illustration}
                      alt={step.alt}
                      width={88}
                      height={88}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-xs"
                    />
                  </div>
                </div>

                {/* Content: Title & Description Spanning the Full Available Card Width */}
                <div className="mt-5 sm:mt-6">
                  {/* Step Title */}
                  <h3 className="text-base sm:text-lg lg:text-[1.125rem] font-bold text-[#0F172A] leading-snug group-hover:text-[#EC407A] transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description: Wide, comfortable natural wrapping */}
                  <p className="mt-2 text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Bottom Area: Small Circular Arrow Button (Aligned at exact bottom across all cards) */}
              <div className="mt-6 sm:mt-8 pt-1 flex items-center justify-start">
                <Link
                  href={step.href}
                  aria-label={`${step.title} details`}
                  className={cn(
                    "w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 group-hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC407A]",
                    step.arrowStyle,
                  )}
                >
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================================
            SPECIAL OFFER PROMOTIONAL BANNER
            ===================================================================== */}
        <div className="mt-10 sm:mt-12 md:mt-14 relative w-full rounded-[26px] sm:rounded-full overflow-hidden shadow-xl shadow-pink-500/15 min-h-[88px] sm:min-h-[92px] flex flex-col md:flex-row items-center justify-between px-6 sm:px-8 md:px-10 lg:px-12 py-5 sm:py-5 bg-gradient-to-r from-[#D81B60] via-[#EC407A] to-[#F06292]">
          {/* Scenic Travel Destination Background on Right Half */}
          <div className="absolute inset-y-0 right-0 w-full md:w-3/5 pointer-events-none select-none overflow-hidden">
            <Image
              src="/images/easy-steps/banner-bg.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-right opacity-90 mix-blend-screen"
            />
            {/* Smooth gradient blend so photograph flows seamlessly into brand pink */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D81B60] via-[#EC407A]/50 to-transparent" />
          </div>

          {/* Left Content Area: Flight Trail Graphic + Discount Offer */}
          <div className="relative z-10 flex items-center gap-4 sm:gap-5 text-white shrink-0 text-center sm:text-left">
            {/* Airplane with Heart Flight Trail Graphic */}
            <div className="relative w-16 sm:w-20 md:w-24 lg:w-28 h-9 sm:h-11 md:h-12 lg:h-14 shrink-0 select-none flex items-center justify-center">
              <Image
                src="/images/easy-steps/airplane-with-heart-2.png"
                alt="Airplane with heart flight path"
                width={140}
                height={68}
                className="w-full h-full object-contain"
                priority
              />
            </div>

            {/* Special Offer Label & Discount Text */}
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-white/90">
                SPECIAL OFFER
              </span>
              <div className="text-2xl sm:text-3xl md:text-[2rem] lg:text-4xl font-black text-white tracking-tight leading-none mt-0.5">
                Get <span className="text-[#FFD54F] drop-shadow-xs">48%</span>{" "}
                Off
              </div>
            </div>
          </div>

          {/* Middle Content Area: Vertical Divider & Script Headline */}
          <div className="relative z-10 flex items-center gap-4 lg:gap-6 my-3 md:my-0">
            <div
              className="hidden md:block w-px h-10 bg-white/35"
              aria-hidden="true"
            />
            <div className="text-center md:text-left">
              <p className="text-white font-script text-xl sm:text-2xl md:text-[1.75rem] leading-tight select-none">
                Tour and Trip Packages,
                <span className="block font-script relative">
                  Globally
                  <svg
                    className="absolute -bottom-1 left-0 w-20 h-1.5 text-white/70"
                    viewBox="0 0 80 8"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 5C25 2 55 2 78 5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </div>

          {/* Right Content Area: CTA Button with Golden Spark Accent */}
          <div className="relative z-10 shrink-0 mt-3 md:mt-0">
            {/* Subtle Golden Ray Spark Decoration above Button */}
            <div className="absolute -top-3.5 right-6 pointer-events-none select-none">
              <svg
                className="w-5 h-3.5 text-[#FFD54F]"
                viewBox="0 0 24 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="4" y1="12" x2="1" y2="4" />
                <line x1="12" y1="14" x2="12" y2="2" />
                <line x1="20" y1="12" x2="23" y2="4" />
              </svg>
            </div>

            <Link
              href="/tours"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white text-[#EC407A] font-extrabold text-xs sm:text-sm shadow-lg shadow-black/10 hover:bg-slate-50 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
            >
              <span>Discover More</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EasyStepsSection;
