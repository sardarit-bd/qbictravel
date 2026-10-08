export interface UserPreferences {
  currency: string;
  language: string;
  emailNotifications: boolean;
  marketingEmails: boolean;
}

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  phone?: string;
  avatarUrl?: string;
  dateOfBirth?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
  };
  preferences: UserPreferences;
}
