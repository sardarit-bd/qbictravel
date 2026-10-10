import * as React from "react";
import Link from "next/link";
import { MapPin, CreditCard, Luggage } from "lucide-react";

export interface BookingStep {
  number: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const BOOKING_STEPS: BookingStep[] = [
  {
    number: 1,
    title: "Choose Your Destination",
    description:
      "Select from a variety of destinations to plan your next adventure.",
    icon: MapPin,
  },
  {
    number: 2,
    title: "Make Your Payment",
    description: "Complete your secure payment with ease.",
    icon: CreditCard,
  },
  {
    number: 3,
    title: "Enjoy Your Trip",
    description: "Pack your bags and create unforgettable memories.",
    icon: Luggage,
  },
];

export function EasyStepsSection() {
  return (
    <section
      aria-label="Easy Steps For Booking"
      className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* =====================================================================
            SECTION HEADING
            ===================================================================== */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-foreground">Easy Steps </span>
            <span className="text-primary font-script font-normal">
              For Booking
            </span>
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-muted-foreground font-normal leading-relaxed">
            Follow the simple steps and book your dream tour package now!
          </p>
        </div>

        {/* =====================================================================
            THREE BOOKING STEP CARDS
            ===================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {BOOKING_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-100/90 shadow-md shadow-slate-200/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Upper Row: Step Number & Circular Pink Icon */}
                <div className="flex items-center justify-between">
                  {/* Step Number Badge */}
                  <div className="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center font-extrabold text-base shadow-sm shadow-pink-500/20">
                    {step.number}
                  </div>

                  {/* Circular Pink-Outlined Icon Badge */}
                  <div className="w-12 h-12 rounded-full border-2 border-primary/25 bg-primary-subtle flex items-center justify-center text-primary shadow-xs group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-200">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </div>

                {/* Content: Title & Description */}
                <div className="mt-7">
                  <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================================
            PROMOTIONAL BANNER
            ===================================================================== */}
        <div className="mt-8 sm:mt-10 md:mt-12 relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#F472B6] via-[#EC407A] to-[#DB2777] p-5 sm:p-6 md:p-8 shadow-lg shadow-pink-500/20">
          {/* Subtle Organic Background Waves */}
          <svg
            className="absolute -bottom-2 -left-4 w-full h-16 pointer-events-none opacity-20"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            fill="white"
            aria-hidden="true"
          >
            <path d="M0 50 Q 250 10, 500 50 T 1000 50 L 1000 100 L 0 100 Z" />
          </svg>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-center sm:text-left">
            {/* Left: 48 hr. Offer Number */}
            <div className="flex items-baseline gap-1.5 shrink-0">
              <span className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter leading-none drop-shadow-xs">
                48
              </span>
              <div className="flex flex-col items-start text-left">
                <span className="text-[10px] uppercase font-bold text-white/80 leading-tight">
                  Get Special
                </span>
                <span className="text-xs sm:text-sm font-extrabold uppercase text-white tracking-wider">
                  hr. Offer
                </span>
              </div>
            </div>

            {/* Center: Main Promotional Headline */}
            <div className="flex-1 px-0 sm:px-4">
              <p className="text-lg sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug drop-shadow-xs font-script">
                Tour and Trip Packages, Globally
              </p>
            </div>

            {/* Right: Discover More CTA Button */}
            <div className="shrink-0">
              <Link
                href="/tours"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white text-primary font-extrabold text-xs sm:text-sm shadow-md hover:bg-zinc-50 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EasyStepsSection;
