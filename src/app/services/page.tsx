import type { Metadata } from "next";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Badge } from "@/components/ui/badge";
import { client } from "../../../sanity/lib/client";
import { allFaqsQuery } from "../../../sanity/lib/queries";

export const metadata: Metadata = {
  title: "Insurance Services",
  description:
    "Medicare, ACA Marketplace Plans, and Life Insurance services from a licensed broker in New York. Free consultations — no obligation.",
};

const isSanityConfigured =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "placeholder";

export default async function ServicesPage() {
  const faqs = isSanityConfigured
    ? await client.fetch(allFaqsQuery, {}, { next: { revalidate: 3600 } })
    : [];

  return (
    <>
      <div className="pt-24 pb-12 sm:pt-28 sm:pb-14 md:pt-32 md:pb-16 bg-gradient-to-br from-brand-800 to-brand-950 text-white text-center">
        <div className="container">
          <Badge className="mb-4 bg-white/10 text-white border-white/20 text-xs uppercase tracking-widest px-4 py-1.5">
            Services
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Insurance Services
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Medicare, ACA Marketplace, and Life Insurance — free expert guidance to find your perfect plan.
          </p>
        </div>
      </div>

      <ServicesSection />
      <FaqSection faqs={faqs} />
      <CtaBanner />
    </>
  );
}
