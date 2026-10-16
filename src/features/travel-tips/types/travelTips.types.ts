/**
 * Travel Tips Domain Types
 *
 * Strongly-typed domain models for QbicTravel Travel Tips feature.
 */

export interface TravelTipImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface TravelTipTopic {
  id: string;
  slug: string;
  name: string;
  iconName: string;
  image: TravelTipImage;
  description?: string;
  itemCount?: number;
}

export interface TravelTipAccordionItem {
  id: string;
  order: number;
  title: string;
  summary?: string;
  image?: TravelTipImage;
  paragraphs: string[];
  highlights?: string[];
  checklists?: string[];
  topicId?: string;
}

export interface TravelChecklistItem {
  id: string;
  label: string;
  isDefaultChecked?: boolean;
  category?: string;
}

export interface PopularTravelTip {
  id: string;
  slug: string;
  title: string;
  image: TravelTipImage;
  readTime?: string;
  category?: string;
}

export interface TravelTipsTopicsResponse {
  topics: TravelTipTopic[];
}

export interface TravelTipsAccordionResponse {
  items: TravelTipAccordionItem[];
}

export interface PopularTravelTipsResponse {
  popularTips: PopularTravelTip[];
}

export interface TravelChecklistResponse {
  checklist: TravelChecklistItem[];
}
