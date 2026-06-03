"use client";

/**
 * Sanity Studio embedded in Next.js.
 * Access at: /studio
 *
 * Must be a Client Component — Studio uses React context internally.
 * Must NOT be force-static — it requires dynamic rendering.
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
