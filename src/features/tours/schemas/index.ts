import { z } from "zod";
import { paginationQuerySchema } from "@/schemas";

export const tourQuerySchema = paginationQuerySchema.extend({
  destinationId: z.string().optional(),
  durationMin: z.coerce.number().min(1).optional(),
  durationMax: z.coerce.number().max(90).optional(),
  priceMin: z.coerce.number().min(0).optional(),
  priceMax: z.coerce.number().positive().optional(),
  difficulty: z.enum(["easy", "moderate", "challenging", "expert"]).optional(),
  featuredOnly: z.coerce.boolean().optional(),
});

export type TourQueryParams = z.infer<typeof tourQuerySchema>;
