export const ROUTES = {
  HOME: "/",
  TOURS: {
    ROOT: "/tours",
    DETAILS: (slugOrId: string) => `/tours/${slugOrId}`,
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
} as const;
