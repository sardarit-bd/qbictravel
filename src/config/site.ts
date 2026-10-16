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
  media: {
    heroVideoUrl:
      "https://res.cloudinary.com/dg83pvgls/video/upload/v1792153468/Thailand_By_Drone_-_Phuket_Phi_Phi_Islands_Krabi_-_4K_Travel_Video_1080p_rmzlup.mp4",
    heroPosterImage: "/images/contact/contact-hero.jpg",
  },
} as const;

export type SiteConfig = typeof siteConfig;
