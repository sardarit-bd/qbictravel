export const ROUTES = {
  HOME: "/",
  TOURS: {
    ROOT: "/tours",
    DETAILS: (slugOrId: string) => `/tours/${slugOrId}`,
  },
  PACKAGES: {
    ROOT: "/packages",
    DETAILS: (slugOrId: string) => `/packages/${slugOrId}`,
  },
  BLOG: {
    ROOT: "/blog",
    DETAILS: (slugOrId: string) => `/blog/${slugOrId}`,
  },
  TRAVEL_TIPS: {
    ROOT: "/travel-tips",
    DETAILS: (slugOrId: string) => `/travel-tips/${slugOrId}`,
  },
  DESTINATIONS: {
    ROOT: "/destinations",
    DETAILS: (slugOrId: string) => `/destinations/${slugOrId}`,
  },
  BOOKING: {
    ROOT: "/booking",
    CHECKOUT: (bookingId: string) => `/booking/${bookingId}/checkout`,
    CONFIRMATION: (bookingId: string) => `/booking/${bookingId}/confirmation`,
  },
  SEARCH: "/search",
  WISHLIST: "/wishlist",
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
  },
  USER: {
    PROFILE: "/profile",
    BOOKINGS: "/profile/bookings",
    SETTINGS: "/profile/settings",
  },
  CONTACT: "/contact",
} as const;
