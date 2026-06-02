import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About Yousha Arafat",
  description:
    "Learn about Yousha Arafat, a licensed insurance broker in New York specializing in Medicare, ACA Marketplace Plans, and Life Insurance.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-24 pb-12 sm:pt-28 sm:pb-14 md:pt-32 md:pb-16 bg-gradient-to-br from-brand-800 to-brand-950 text-white text-center">
        <div className="container">
          <Badge className="mb-4 bg-white/10 text-white border-white/20 text-xs uppercase tracking-widest px-4 py-1.5">
            About
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Meet Yousha Arafat
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Licensed Insurance Broker dedicated to making coverage simple, honest, and accessible.
          </p>
        </div>
      </div>

      <AboutSection />

      {/* Credentials */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-brand-900 mb-6">Credentials &amp; Licensing</h2>
          <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
            <p>
              Yousha Arafat is a <strong className="text-brand-800">New York State licensed insurance broker</strong>, authorized to sell health and life insurance products. He is appointed with multiple top-rated insurance carriers, allowing him to offer truly unbiased plan comparisons.
            </p>
            <p>
              As an independent broker, Yousha is compensated by insurance carriers — never by clients. There is never a fee for his consultations or enrollment assistance.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
