import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { ToursPageClient } from "@/components/tours";
import { DEMO_TOURS } from "@/features/tours/data/tours";

export const metadata: Metadata = {
  title: "Tours & Adventure Packages | QbicTravel",
  description:
    "Explore handpicked tours to the most breathtaking destinations designed for unforgettable experiences. Maldives, Bali, Phuket, and more.",
  openGraph: {
    title: "Discover Your Next Adventure | QbicTravel Tours",
    description:
      "Explore handpicked tours to the most breathtaking destinations designed for unforgettable experiences.",
    images: [
      {
        url: "/images/tours/hero-tours.jpg",
        width: 1200,
        height: 630,
        alt: "QbicTravel Tours Showcase",
      },
    ],
  },
};

export default function ToursPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-start relative w-full m-0 p-0 overflow-x-hidden">
      {/* Shared Navbar (Displays active pink state on /tours) */}
      <Navbar />

      {/* Main Tours Page Composition */}
      <ToursPageClient initialTours={DEMO_TOURS} />

      {/* Shared Footer */}
      <Footer />
    </main>
  );
}
