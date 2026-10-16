import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { PackagesHero, PackagesPageClient } from "@/components/packages";

export const metadata: Metadata = {
  title: "Travel Packages & Excursions | QbicTravel",
  description:
    "Choose from a wide range of travel packages, carefully designed for unforgettable experiences around the world. Phuket, Phi Phi, James Bond Island, and more.",
  openGraph: {
    title: "Our Travel Packages | QbicTravel",
    description:
      "Choose from a wide range of travel packages, carefully designed for unforgettable experiences around the world.",
    images: [
      {
        url: "/images/packages/hero-packages.jpg",
        width: 1200,
        height: 630,
        alt: "QbicTravel Packages",
      },
    ],
  },
};

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-slate-50/50 flex flex-col items-center justify-start relative w-full m-0 p-0">
      {/* Shared Navbar (Displays active pink state on /packages) */}
      <Navbar />

      {/* Packages Hero Section */}
      <PackagesHero />

      {/* Main Two-Column Packages Directory & Filters */}
      <PackagesPageClient />

      {/* Shared Footer */}
      <Footer />
    </main>
  );
}
