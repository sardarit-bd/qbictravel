import type { Metadata } from "next";
import { HeroSection, EasyStepsSection } from "@/components/home";

export const metadata: Metadata = {
  title: "QbicTravel — Explore The World",
  description:
    "Your gateway to unforgettable journeys and life changing travel experiences. Curated tours, adventure packages, and authentic destination guides.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-start">
      {/* Hero Section Container */}
      <div className="w-full max-w-[1440px] mx-auto ">
        <HeroSection />
      </div>

      {/* Easy Steps For Booking Section */}
      <EasyStepsSection />
    </main>
  );
}
