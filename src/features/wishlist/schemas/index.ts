import { z } from "zod";

export const toggleWishlistSchema = z.object({
  tourId: z.string().min(1, "Tour ID is required"),
});

export type ToggleWishlistInput = z.infer<typeof toggleWishlistSchema>;
