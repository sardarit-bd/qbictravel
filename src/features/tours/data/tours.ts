import { TourItem } from "../types";

/**
 * Centralized demonstration tour inventory for the QbicTravel Tours page.
 * These demonstration records represent realistic UI mock data and keep image paths,
 * pricing, and metadata strictly centralized and configurable.
 */
export const DEMO_TOURS: TourItem[] = [
  {
    id: "maldives-island-escape",
    slug: "maldives-island-escape",
    name: "Maldives Island Escape",
    location: "Maldives",
    duration: "5 Days 4 Nights",
    durationDays: 5,
    maxGroupSize: "20 People",
    groupSizeMax: 20,
    rating: 4.8,
    reviewCount: 320,
    description:
      "Experience crystal clear waters, white sandy beaches and luxurious island resorts in the Maldives.",
    price: 1299,
    currency: "USD",
    category: "Beach",
    image: "/images/tours/tour-maldives.jpg",
    isFeatured: true,
  },
  {
    id: "bali-cultural-paradise",
    slug: "bali-cultural-paradise",
    name: "Bali Cultural Paradise",
    location: "Bali, Indonesia",
    duration: "6 Days 5 Nights",
    durationDays: 6,
    maxGroupSize: "16 People",
    groupSizeMax: 16,
    rating: 4.7,
    reviewCount: 280,
    description:
      "Explore ancient temples, lush landscapes and vibrant local culture in the Island of Gods.",
    price: 899,
    currency: "USD",
    category: "Cultural",
    image: "/images/tours/tour-bali.jpg",
    isFeatured: true,
  },
  {
    id: "phuket-adventure-tour",
    slug: "phuket-adventure-tour",
    name: "Phuket Adventure Tour",
    location: "Phuket, Thailand",
    duration: "4 Days 3 Nights",
    durationDays: 4,
    maxGroupSize: "18 People",
    groupSizeMax: 18,
    rating: 4.6,
    reviewCount: 210,
    description:
      "Discover stunning beaches, island hopping and thrilling adventures in Phuket.",
    price: 699,
    currency: "USD",
    category: "Adventure",
    image: "/images/tours/tour-phuket.jpg",
    isFeatured: true,
  },
  {
    id: "swiss-alps-nature-trek",
    slug: "swiss-alps-nature-trek",
    name: "Swiss Alps Alpine Trek",
    location: "Lauterbrunnen, Switzerland",
    duration: "7 Days 6 Nights",
    durationDays: 7,
    maxGroupSize: "12 People",
    groupSizeMax: 12,
    rating: 4.9,
    reviewCount: 185,
    description:
      "Hike through iconic alpine valleys, cascading waterfalls and glacial meadows in the heart of Switzerland.",
    price: 1549,
    currency: "USD",
    category: "Nature",
    image: "/images/tours/tour-switzerland.jpg",
    isFeatured: false,
  },
  {
    id: "santorini-sunset-coastal-escape",
    slug: "santorini-sunset-coastal-escape",
    name: "Santorini Sunset & Caldera Escape",
    location: "Santorini, Greece",
    duration: "5 Days 4 Nights",
    durationDays: 5,
    maxGroupSize: "14 People",
    groupSizeMax: 14,
    rating: 4.8,
    reviewCount: 245,
    description:
      "Sail past volcanic caldera cliffs, relax on sun-drenched beaches, and enjoy world-famous Aegean sunsets.",
    price: 1199,
    currency: "USD",
    category: "Beach",
    image: "/images/destinations/greece.jpg",
    isFeatured: false,
  },
  {
    id: "kyoto-heritage-trail",
    slug: "kyoto-heritage-trail",
    name: "Kyoto Heritage & Zen Temple Trail",
    location: "Kyoto, Japan",
    duration: "6 Days 5 Nights",
    durationDays: 6,
    maxGroupSize: "15 People",
    groupSizeMax: 15,
    rating: 4.9,
    reviewCount: 310,
    description:
      "Wander through serene bamboo groves, sacred torii gates, and centuries-old UNESCO Zen gardens.",
    price: 1099,
    currency: "USD",
    category: "Cultural",
    image: "/images/destinations/japan.jpg",
    isFeatured: false,
  },
];

/**
 * Centralized currency formatting utility.
 */
export function formatCurrency(amount: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Filter destination choices extracted dynamically from demo tours.
 */
export const AVAILABLE_DESTINATIONS = [
  "All Destinations",
  "Maldives",
  "Bali, Indonesia",
  "Phuket, Thailand",
  "Lauterbrunnen, Switzerland",
  "Santorini, Greece",
  "Kyoto, Japan",
];

export const TOUR_TYPES = [
  "All Types",
  "Adventure",
  "Cultural",
  "Beach",
  "Nature",
];

export const DURATION_OPTIONS = [
  { label: "Any Duration", value: "all" },
  { label: "1–3 Days", value: "1-3" },
  { label: "4–7 Days", value: "4-7" },
  { label: "8+ Days", value: "8+" },
];
