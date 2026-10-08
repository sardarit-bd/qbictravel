export type TourDifficulty = "easy" | "moderate" | "challenging" | "expert";

export interface TourItineraryDay {
  day: number;
  title: string;
  description: string;
  mealsIncluded?: string[];
  accommodation?: string;
}

export interface TourPricing {
  currency: string;
  regularPrice: number;
  discountedPrice?: number;
  depositRequired?: number;
}

export interface Tour {
  id: string;
  slug: string;
  title: string;
  destinationId: string;
  destinationName: string;
  durationDays: number;
  groupSizeMax: number;
  difficulty: TourDifficulty;
  pricing: TourPricing;
  heroImage: string;
  galleryImages: string[];
  overview: string;
  highlights: string[];
  itinerary: TourItineraryDay[];
  included: string[];
  excluded: string[];
  averageRating: number;
  reviewCount: number;
  isFeatured: boolean;
  upcomingDepartureDates: string[];
}

export interface TourFilters {
  destinationId?: string;
  durationMin?: number;
  durationMax?: number;
  priceMin?: number;
  priceMax?: number;
  difficulty?: TourDifficulty;
}
