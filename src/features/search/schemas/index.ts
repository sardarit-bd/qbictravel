import { z } from "zod";

export const globalSearchSchema = z.object({
  q: z.string().min(1, "Search term cannot be empty"),
  category: z.enum(["all", "destinations", "tours"]).default("all"),
  limit: z.coerce.number().int().positive().max(20).default(8),
});

export type GlobalSearchParams = z.infer<typeof globalSearchSchema>;
