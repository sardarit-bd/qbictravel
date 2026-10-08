import { z } from "zod";
import { paginationQuerySchema } from "@/schemas";

export const destinationQuerySchema = paginationQuerySchema.extend({
  region: z.string().optional(),
  country: z.string().optional(),
  featuredOnly: z.coerce.boolean().optional(),
});

export type DestinationQueryParams = z.infer<typeof destinationQuerySchema>;
