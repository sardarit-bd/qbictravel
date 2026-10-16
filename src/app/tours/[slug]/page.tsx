import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Clock, Users, Star, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Navbar, Footer } from "@/components/layout";
import { DEMO_TOURS, formatCurrency } from "@/features/tours/data/tours";

interface TourDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: TourDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = DEMO_TOURS.find((t) => t.slug === slug);
  if (!tour) return { title: "Tour Not Found | QbicTravel" };

  return {
    title: `${tour.name} | QbicTravel Tours`,
    description: tour.description,
  };
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const { slug } = await params;
  const tour = DEMO_TOURS.find((t) => t.slug === slug);

  if (!tour) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-start relative w-full">
      <Navbar />

      <div className="w-full pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          {/* Back to Tours link */}
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to all tours</span>
          </Link>

          {/* Tour Card Detail Sheet */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            {/* Scenic Image Banner */}
            <div className="relative w-full h-[320px] sm:h-[420px]">
              <Image
                src={tour.image}
                alt={tour.name}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute left-6 bottom-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span>{tour.location}</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                    {tour.name}
                  </h1>
                </div>

                <div className="text-right sm:self-end">
                  <span className="text-xs text-white/80 block">Starting from</span>
                  <span className="text-3xl font-black text-primary">
                    {formatCurrency(tour.price, tour.currency)}
                  </span>
                  <span className="text-xs text-white/80 block">per person</span>
                </div>
              </div>
            </div>

            {/* Tour Body Details */}
            <div className="p-6 sm:p-10 space-y-8">
              {/* Metadata Badges */}
              <div className="flex flex-wrap gap-4 sm:gap-6 py-4 px-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Duration</span>
                    <span className="text-sm font-bold text-slate-800">{tour.duration}</span>
                  </div>
                </div>
                <div className="w-px h-8 bg-slate-200 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Group Size</span>
                    <span className="text-sm font-bold text-slate-800">{tour.maxGroupSize}</span>
                  </div>
                </div>
                <div className="w-px h-8 bg-slate-200 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Rating</span>
                    <span className="text-sm font-bold text-slate-800">
                      {tour.rating.toFixed(1)} ({tour.reviewCount} reviews)
                    </span>
                  </div>
                </div>
              </div>

              {/* Overview Description */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900">Tour Overview</h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  {tour.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900">Tour Highlights</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Personalized concierge & expert local guide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>All luxury resort transfers & taxes included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Curated cultural dining & excursion passes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Free cancellation up to 14 days before departure</span>
                  </li>
                </ul>
              </div>

              {/* Booking CTA */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Total Price</span>
                  <div className="text-3xl font-extrabold text-primary">
                    {formatCurrency(tour.price, tour.currency)}
                    <span className="text-sm font-normal text-slate-500 ml-1">/ person</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover active:bg-primary-active text-white font-bold text-sm sm:text-base shadow-lg shadow-pink-500/25 transition-all duration-200 active:scale-95"
                >
                  Book This Tour
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
