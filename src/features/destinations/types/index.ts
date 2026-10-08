export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  region: string;
  tagline: string;
  description: string;
  coverImage: string;
  galleryImages: string[];
  popularTourCount: number;
  averageRating: number;
  reviewCount: number;
  bestTimeToVisit?: string;
  isFeatured: boolean;
}

export interface DestinationFilterParams {
  region?: string;
  country?: string;
  isFeatured?: boolean;
}
