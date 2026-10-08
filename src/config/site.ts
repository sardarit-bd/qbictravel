import { env } from "@/lib/env";

export const siteConfig = {
  name: "QbicTravel",
  title: "QbicTravel — Explore Curated Tours & Unforgettable Destinations",
  description:
    "Discover world-class travel experiences, curated tour packages, seamless bookings, and authentic destination guides with QbicTravel.",
  url: env.NEXT_PUBLIC_SITE_URL,
  ogImage: `${env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`,
  links: {
    twitter: "https://twitter.com/qbictravel",
    facebook: "https://facebook.com/qbictravel",
    instagram: "https://instagram.com/qbictravel",
  },
  contact: {
    supportEmail: "support@qbictravel.com",
    phone: "+1 (800) 555-0199",
  },
} as const;

export type SiteConfig = typeof siteConfig;
