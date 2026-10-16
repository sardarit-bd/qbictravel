/**
 * Contact Us Domain Types
 *
 * Strongly-typed domain models for QBIC Travel Contact Us feature.
 */

export interface ContactInfoCardItem {
  id: string;
  iconName: "Phone" | "Mail" | "MapPin" | "MessageCircle";
  title: string;
  primaryValue: string;
  secondaryValue: string;
  actionHref?: string;
  isActionable?: boolean;
}

export interface ContactFormValues {
  fullName: string;
  email: string;
  phone?: string;
  countryCode?: string;
  subject: string;
  message: string;
}

export interface ContactSubmissionResponse {
  success: boolean;
  message: string;
  ticketId?: string;
  timestamp?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface SocialLink {
  platform: "facebook" | "instagram" | "youtube" | "tiktok" | "linkedin";
  label: string;
  href: string;
}

export interface OfficeHoursItem {
  days: string;
  hours: string;
}

export interface OfficeLocationInfo {
  companyName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  country: string;
  postalCode: string;
  directionsUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  officeHours: OfficeHoursItem[];
  timezoneNotice: string;
}
