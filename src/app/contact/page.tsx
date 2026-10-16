import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { ContactPageClient } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Us — Let's Plan Your Next Adventure | QbicTravel",
  description:
    "Have questions or need help? Contact our travel specialists at QBIC Travel. We offer personalized tour planning, booking assistance, and local expert support in Phuket, Thailand.",
  openGraph: {
    title: "Contact QBIC Travel — Let's Plan Your Next Adventure",
    description:
      "Reach out to QBIC Travel. Our Phuket-based specialists are ready to help you plan your dream Southeast Asian holiday.",
    images: [
      {
        url: "/images/contact/contact-hero.jpg",
        width: 1200,
        height: 630,
        alt: "QBIC Travel Contact Us",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FDFCFD] flex flex-col items-center justify-start relative w-full m-0 p-0">
      {/* Shared Navbar (Transparent over hero banner, transitions smoothly on scroll) */}
      <Navbar />

      {/* Main Contact Us Experience */}
      <div className="w-full flex-1">
        <ContactPageClient />
      </div>

      {/* Shared Footer */}
      <Footer />
    </main>
  );
}
