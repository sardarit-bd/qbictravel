"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Headphones, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TripPlanningHelpProps {
  className?: string;
}

export function TripPlanningHelp({ className }: TripPlanningHelpProps) {
  return (
    <div
      className={cn(
        "relative bg-gradient-to-br from-pink-50/70 via-white to-pink-50/40 rounded-2xl sm:rounded-3xl border border-pink-100 shadow-xs p-6 sm:p-7 overflow-hidden space-y-5",
        className,
      )}
    >
      {/* Decorative traveler portrait on top-right */}
      <div className="absolute top-4 right-4 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-xs border-2 border-white pointer-events-none select-none shrink-0 hidden sm:block">
        <Image
          src="/images/travel-tips/help-traveler.jpg"
          alt="Friendly QbicTravel expert traveler"
          fill
          sizes="96px"
          className="object-cover"
        />
      </div>

      {/* Headset Icon */}
      <div className="w-10 h-10 rounded-xl bg-white text-primary flex items-center justify-center shadow-xs border border-pink-100 shrink-0">
        <Headphones className="w-5 h-5" />
      </div>

      {/* Text Copy */}
      <div className="space-y-1.5 max-w-[200px] sm:max-w-[220px]">
        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
          Need Help Planning Your Trip?
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed">
          Our travel experts are here to help you with personalized advice and
          recommendations.
        </p>
      </div>

      {/* Contact Team CTA Button */}
      <div className="pt-1">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 py-2.5 px-6 rounded-full bg-primary hover:bg-primary-hover active:bg-primary-active text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-500/25 transition-all duration-200 active:scale-95"
        >
          <span>Contact Our Team</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
