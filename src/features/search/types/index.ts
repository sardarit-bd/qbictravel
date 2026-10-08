export interface SearchSuggestion {
  id: string;
  type: "destination" | "tour";
  title: string;
  subtitle?: string;
  url: string;
}

export interface SearchResult {
  totalResults: number;
  destinations: {
    id: string;
    name: string;
    country: string;
    slug: string;
    coverImage: string;
  }[];
  tours: {
    id: string;
    title: string;
    slug: string;
    price: number;
    durationDays: number;
    heroImage: string;
  }[];
}
