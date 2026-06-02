import { createClient } from "next-sanity";

// TODO: Add your Sanity project credentials to .env.local before enabling
// NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
// NEXT_PUBLIC_SANITY_DATASET=production

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_READ_TOKEN,
});
