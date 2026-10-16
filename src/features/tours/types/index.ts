export type TourDifficulty = "easy" | "moderate" | "challenging" | "expert";

export type TourCategory = "Adventure" | "Cultural" | "Beach" | "Nature";

export type DurationFilterOption = "all" | "1-3" | "4-7" | "8+";

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

export interface TourItem {
  id: string;
  slug: string;
  name: string;
  location: string;
  duration: string;
  durationDays: number;
  maxGroupSize: string;
  groupSizeMax: number;
  rating: number;
  reviewCount: number;
  description: string;
  price: number;
  currency: string;
  category: TourCategory;
  image: string;
  isFeatured?: boolean;
}

export interface TourSearchParams {
  destination?: string;
  tourType?: string;
  duration?: DurationFilterOption;
  category?: string;
}

export interface TourFilters {
  destinationId?: string;
  durationMin?: number;
  durationMax?: number;
  priceMin?: number;
  priceMax?: number;
  difficulty?: TourDifficulty;
  category?: TourCategory;
}
