import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { client } from "../../sanity/lib/client";
import {
  featuredTestimonialsQuery,
  allFaqsQuery,
  recentPostsQuery,
} from "../../sanity/lib/queries";

const isSanityConfigured =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "placeholder";

export default async function HomePage() {
  const [testimonials, faqs, recentPosts] = isSanityConfigured
    ? await Promise.all([
        client.fetch(featuredTestimonialsQuery, {}, { next: { revalidate: 3600 } }),
        client.fetch(allFaqsQuery, {}, { next: { revalidate: 3600 } }),
        client.fetch(recentPostsQuery, {}, { next: { revalidate: 3600 } }),
      ])
    : [[], [], []];

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqs={faqs} />
      <BlogPreviewSection posts={recentPosts} />
      <CtaBanner />
    </>
  );
}
