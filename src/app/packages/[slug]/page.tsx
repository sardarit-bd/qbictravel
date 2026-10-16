import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Clock,
  Star,
  ArrowLeft,
  CheckCircle2,
  Car,
  Utensils,
  User,
} from "lucide-react";
import { Navbar, Footer } from "@/components/layout";
import {
  DEMO_PACKAGES,
  formatPrice,
} from "@/features/booking/data/packages";

interface PackageDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return DEMO_PACKAGES.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({
  params,
}: PackageDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = DEMO_PACKAGES.find((p) => p.slug === slug);
  if (!pkg) return { title: "Package Not Found | QbicTravel" };

  return {
    title: `${pkg.title} | QbicTravel Packages`,
    description: pkg.description,
  };
}

export default async function PackageDetailPage({
  params,
}: PackageDetailPageProps) {
  const { slug } = await params;
  const pkg = DEMO_PACKAGES.find((p) => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  const imageUrl = pkg.image.url;
  const priceAmount = pkg.pricing.amount;
  const currencyCode = pkg.pricing.currency;
  const durationText = pkg.duration.display;
  const includedText =
    pkg.includedServices?.join(", ") ||
    pkg.includedServiceSummary ||
    "Roundtrip hotel transfers & equipment";
  const ratingValue = pkg.rating.average;
  const reviewTotal = pkg.rating.reviewCount;
  const locationText = pkg.location;

  const isLunchIncluded =
    includedText.toLowerCase().includes("lunch") ||
    includedText.toLowerCase().includes("breakfast");

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-start relative w-full">
      <Navbar />

      <div className="w-full pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          {/* Back link */}
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to all packages</span>
          </Link>

          {/* Package Card Detail Sheet */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            {/* Banner Image */}
            <div className="relative w-full h-[300px] sm:h-[400px]">
              <Image
                src={imageUrl}
                alt={pkg.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
              <div className="absolute left-6 bottom-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span>{locationText}</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                    {pkg.title}
                  </h1>
                </div>

                <div className="text-right sm:self-end">
                  <span className="text-xs text-white/80 block">From</span>
                  <span className="text-3xl font-black text-primary">
                    {formatPrice(priceAmount, currencyCode)}
                  </span>
                  <span className="text-xs text-white/80 block">per person</span>
                </div>
              </div>
            </div>

            {/* Details Body */}
            <div className="p-6 sm:p-10 space-y-8">
              {/* Metadata Highlights */}
              <div className="flex flex-wrap gap-4 sm:gap-6 py-4 px-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Duration</span>
                    <span className="text-sm font-bold text-slate-800">{durationText}</span>
                  </div>
                </div>

                <div className="w-px h-8 bg-slate-200 hidden sm:block" />

                <div className="flex items-center gap-2">
                  {isLunchIncluded ? (
                    <Utensils className="w-4 h-4 text-primary" />
                  ) : (
                    <Car className="w-4 h-4 text-primary" />
                  )}
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Inclusions</span>
                    <span className="text-sm font-bold text-slate-800">{includedText}</span>
                  </div>
                </div>

                {pkg.hasGuide && (
                  <>
                    <div className="w-px h-8 bg-slate-200 hidden sm:block" />
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      <div>
                        <span className="text-xs text-slate-400 block font-medium">Guide</span>
                        <span className="text-sm font-bold text-slate-800">Licensed Guide Included</span>
                      </div>
                    </div>
                  </>
                )}

                <div className="w-px h-8 bg-slate-200 hidden sm:block" />

                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Rating</span>
                    <span className="text-sm font-bold text-slate-800">
                      {ratingValue.toFixed(1)} ({reviewTotal} reviews)
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900">Package Overview</h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* What's Included */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900">Package Inclusions</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Complimentary roundtrip hotel transfers in Phuket</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Full safety briefing & high-spec protective equipment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Comprehensive accident travel insurance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Bottled water, tropical seasonal fruits & soft drinks</span>
                  </li>
                </ul>
              </div>

              {/* Booking CTA Footer */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Total Price</span>
                  <div className="text-3xl font-extrabold text-primary">
                    {formatPrice(priceAmount, currencyCode)}
                    <span className="text-sm font-normal text-slate-500 ml-1">/ person</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover active:bg-primary-active text-white font-bold text-sm sm:text-base shadow-lg shadow-pink-500/25 transition-all duration-200 active:scale-95"
                >
                  Book This Package
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
