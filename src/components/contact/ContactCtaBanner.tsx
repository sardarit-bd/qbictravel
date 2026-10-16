import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/constants/routes";

interface ContactCtaBannerProps {
  eyebrow?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function ContactCtaBanner({
  eyebrow = "READY FOR YOUR NEXT TRIP?",
  titlePrefix = "Get Expert",
  titleHighlight = "Travel Advice Today",
  description = "Our team is here to help you create unforgettable travel experiences.",
  ctaText = "Start Planning",
  ctaHref = ROUTES.PACKAGES.ROOT,
}: ContactCtaBannerProps) {
  return (
    <section
      aria-label="Plan Your Trip Call to Action"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 mb-16 sm:mb-20"
    >
      <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-100 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.08)] bg-slate-900 min-h-[220px] sm:min-h-[260px] flex items-center">
        {/* Background Tropical Resort Image */}
        <Image
          src="/images/contact/contact-cta-banner.jpg"
          alt="Tropical resort pool overlooking calm sea and limestone mountains"
          fill
          className="object-cover object-right md:object-center"
          sizes="(max-width: 1280px) 100vw, 1280px"
          quality={85}
        />

        {/* Soft, readable gradient overlay from left */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-100 via-white/95 sm:via-white/90 md:via-white/80 to-transparent w-full md:w-3/4 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent sm:hidden pointer-events-none"
          aria-hidden="true"
        />

        {/* Content Container */}
        <div className="relative z-10 p-6 sm:p-10 md:p-12 max-w-xl">
          {/* Eyebrow */}
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            {eyebrow}
          </span>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            {titlePrefix} <span className="text-primary">{titleHighlight}</span>
          </h2>

          {/* Supporting description */}
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {description}
          </p>

          {/* CTA Action Button */}
          <div className="mt-5 sm:mt-6">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover active:bg-primary-active text-white text-xs sm:text-sm font-bold shadow-[0_4px_16px_rgba(236,0,140,0.35)] hover:shadow-[0_6px_22px_rgba(236,0,140,0.45)] transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
