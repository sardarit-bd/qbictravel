import { z } from "zod";

export const updateUserProfileSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z.string().optional(),
  avatarUrl: z.string().url("Must be a valid URL").optional(),
  dateOfBirth: z.string().optional(),
  preferences: z
    .object({
      currency: z.string().default("USD"),
      language: z.string().default("en"),
      emailNotifications: z.boolean().default(true),
      marketingEmails: z.boolean().default(false),
    })
    .optional(),
});

export type UpdateUserProfileInput = z.infer<typeof updateUserProfileSchema>;
