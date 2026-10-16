import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { BlogPageClient } from "@/components/blog";

export const metadata: Metadata = {
  title: "Travel Stories & Inspiration | QbicTravel Blog",
  description:
    "Tips, guides and stories to help you explore the world with confidence. Discover destination guides, planning tips, culinary adventures, and travel stories.",
  openGraph: {
    title: "Travel Stories & Inspiration | QbicTravel Blog",
    description:
      "Tips, guides and stories to help you explore the world with confidence.",
    type: "website",
    url: "https://qbictravel.com/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-primary-subtle selection:text-primary">
      {/* Shared Global Navbar */}
      <Navbar />

      {/* Main Blog Client Application */}
      <BlogPageClient />

      {/* Shared Global Footer */}
      <Footer />
    </div>
  );
}
