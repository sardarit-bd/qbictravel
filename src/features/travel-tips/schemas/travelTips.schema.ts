import { z } from "zod";

export const travelTipImageSchema = z.object({
  url: z.string(),
  alt: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
});

export const travelTipTopicSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string().min(1),
  iconName: z.string(),
  image: travelTipImageSchema,
  description: z.string().optional(),
  itemCount: z.number().optional(),
});

export const travelTipAccordionItemSchema = z.object({
  id: z.string(),
  order: z.number().positive(),
  title: z.string().min(1),
  summary: z.string().optional(),
  image: travelTipImageSchema.optional(),
  paragraphs: z.array(z.string()),
  highlights: z.array(z.string()).optional(),
  checklists: z.array(z.string()).optional(),
  topicId: z.string().optional(),
});

export const travelChecklistItemSchema = z.object({
  id: z.string(),
  label: z.string().min(1),
  isDefaultChecked: z.boolean().optional(),
  category: z.string().optional(),
});

export const popularTravelTipSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string().min(1),
  image: travelTipImageSchema,
  readTime: z.string().optional(),
  category: z.string().optional(),
});

export const travelTipsTopicsResponseSchema = z.object({
  topics: z.array(travelTipTopicSchema),
});

export const travelTipsAccordionResponseSchema = z.object({
  items: z.array(travelTipAccordionItemSchema),
});
