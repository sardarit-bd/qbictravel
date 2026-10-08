export type BookingStatus =
  | "pending"
  | "confirmed"
  | "cancelled"
  | "completed";

export type PaymentStatus = "pending" | "paid" | "failed" | "refunded";

export interface BookingPassenger {
  fullName: string;
  email: string;
  phone: string;
  passportNumber?: string;
  specialRequests?: string;
}

export interface Booking {
  id: string;
  bookingReference: string;
  userId: string;
  tourId: string;
  tourTitle: string;
  departureDate: string;
  passengerCount: number;
  totalPrice: number;
  currency: string;
  bookingStatus: BookingStatus;
  paymentStatus: PaymentStatus;
  leadPassenger: BookingPassenger;
  createdAt: string;
  updatedAt: string;
}
