import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ROUTES } from "@/constants/routes";

interface ContactHeroProps {
  titlePrefix?: string;
  titleHighlight?: string;
  description?: string;
}

export function ContactHero({
  titlePrefix = "Let's Plan Your",
  titleHighlight = "Adventure",
  description = "Have questions or need help? Our travel experts are here to assist you with personalized advice and recommendations.",
}: ContactHeroProps) {
  return (
    <section
      aria-label="Contact QBIC Travel Hero"
      className="relative w-full overflow-hidden bg-brand-navy min-h-[300px] sm:min-h-[340px] lg:min-h-[380px] flex items-center pt-24 sm:pt-28 pb-16 sm:pb-20"
    >
      {/* Background Image with optimized Next.js Image */}
      <Image
        src="/images/contact/contact-hero.jpg"
        alt="Tropical beach with limestone cliffs and traditional boats"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={90}
      />

      {/* Subtle directional gradient overlay ensuring readable white text */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Centered content aligned to container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80 font-medium mb-3 sm:mb-4"
          >
            <Link
              href={ROUTES.HOME}
              className="hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/60" aria-hidden="true" />
            <span className="text-white" aria-current="page">
              Contact Us
            </span>
          </nav>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {titlePrefix} <br className="hidden sm:inline" />
            <span className="text-white">Next </span>
            <span className="text-primary">{titleHighlight}</span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
