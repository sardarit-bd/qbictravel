import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { TravelTipsPageClient } from "@/components/travel-tips";

export const metadata: Metadata = {
  title: "Essential Travel Tips & Information | QbicTravel",
  description:
    "Everything you need to know before, during and after your trip. Browse travel tips by category, quick travel checklists, airport reminders, and essential destination advice.",
  openGraph: {
    title: "Essential Travel Tips & Information | QbicTravel",
    description:
      "Everything you need to know before, during and after your trip. Expert travel tips, checklists, and guides.",
    type: "website",
    url: "https://qbictravel.com/travel-tips",
  },
};

export default function TravelTipsPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-primary-subtle selection:text-primary">
      {/* Shared Global Navbar */}
      <Navbar variant="solid" />

      {/* Main Travel Tips Content Client */}
      <TravelTipsPageClient />

      {/* Shared Global Footer */}
      <Footer />
    </div>
  );
}
