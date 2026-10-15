import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import {
  HeroSection,
  EasyStepsSection,
  DestinationRecommendationsSection,
  TrendingDestinationSection,
  TravelPricingSection,
  TestimonialsSection,
  LatestNewsSection,
  PopularDestinationsSection,
  NewsletterSection,
} from "@/components/home";

export const metadata: Metadata = {
  title: "QbicTravel — Explore The World",
  description:
    "Your gateway to unforgettable journeys and life changing travel experiences. Curated tours, adventure packages, and authentic destination guides.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-navy flex flex-col items-center justify-start relative w-full m-0 p-0">
      {/* Sticky Navbar (Fixed to top, stays visible and readable throughout full page scroll) */}
      <Navbar />

      {/* Hero Section Container (Full-bleed edge-to-edge across 1440px, 1920px, and ultrawide displays) */}
      <HeroSection />

      {/* Easy Steps For Booking Section */}
      <EasyStepsSection />

      {/* Destination Recommendations Section ("We Recommend Beautiful Destinations Every Month") */}
      <DestinationRecommendationsSection />

      {/* Trending Destinations Editorial Collage Section */}
      <TrendingDestinationSection />

      {/* Travel Pricing Section ("Price For Travel The World") */}
      <TravelPricingSection />

      {/* Clients Testimonials Section ("Our Clients Say!") */}
      <TestimonialsSection />

      {/* Section One: Latest News Section ("Explore Latest News") */}
      <LatestNewsSection />

      {/* Section Two: Popular Destinations Section ("Popular Destinations") */}
      <PopularDestinationsSection />

      {/* Section Three: Newsletter Section ("Get Inspired. Travel More.") */}
      <NewsletterSection />

      {/* Modern Responsive Footer */}
      <Footer />
    </main>
  );
}
