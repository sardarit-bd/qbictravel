import { z } from "zod";

/**
 * Client & Server Environment Variable Validation Schema
 * Only NEXT_PUBLIC_* variables are accessible in the browser.
 */
const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  NEXT_PUBLIC_API_URL: z
    .string()
    .url("NEXT_PUBLIC_API_URL must be a valid URL")
    .default("http://localhost:3000/api/v1"),
  NEXT_PUBLIC_SITE_URL: z
    .string()
    .url("NEXT_PUBLIC_SITE_URL must be a valid URL")
    .default("http://localhost:3000"),
});

const parsed = envSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
});

if (!parsed.success) {
  console.error("❌ Invalid environment variables configuration:", parsed.error.format());
  throw new Error("Invalid environment configuration. Check your .env setup.");
}

export const env = parsed.data;
