import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import {
  HeroSection,
  EasyStepsSection,
  EditorialTravelSection,
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

      {/* Editorial Travel Section (Left side: handwritten headline, pink strokes, flight path, Santorini card) */}
      <EditorialTravelSection />
    </main>
  );
}
