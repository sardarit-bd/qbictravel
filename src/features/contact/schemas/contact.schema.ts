import { z } from "zod";

export const contactSubjectEnum = z.enum([
  "Tour Inquiry",
  "Package Inquiry",
  "Booking Support",
  "Custom Travel Planning",
  "Payment Question",
  "General Question",
  "Other",
]);

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name is too long"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .max(25, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  countryCode: z.string().optional(),
  subject: z
    .string()
    .min(1, "Please select a subject"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(3000, "Message cannot exceed 3000 characters"),
});

export const contactSubmissionResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  ticketId: z.string().optional(),
  timestamp: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type ContactSubmissionResponse = z.infer<typeof contactSubmissionResponseSchema>;

