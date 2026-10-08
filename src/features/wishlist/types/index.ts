export interface WishlistItem {
  id: string;
  tourId: string;
  title: string;
  slug: string;
  heroImage: string;
  price: number;
  durationDays: number;
  destinationName: string;
  addedAt: string;
}

export interface WishlistState {
  items: WishlistItem[];
  totalItems: number;
}
