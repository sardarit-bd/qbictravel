import { z } from "zod";

export const passengerSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().min(7, "Please provide a valid phone number"),
  passportNumber: z.string().optional(),
  specialRequests: z.string().max(500).optional(),
});

export const createBookingSchema = z.object({
  tourId: z.string().min(1, "Tour ID is required"),
  departureDate: z.string().min(1, "Departure date is required"),
  passengerCount: z.number().int().min(1).max(20),
  leadPassenger: passengerSchema,
});

export type PassengerInput = z.infer<typeof passengerSchema>;
export type CreateBookingInput = z.infer<typeof createBookingSchema>;
