"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Testimonial } from "@/types";

// Fallback testimonials shown before Sanity data is available
const fallbackTestimonials: Testimonial[] = [
  {
    _id: "1",
    name: "Maria G.",
    location: "Brooklyn, NY",
    quote: "Yousha made the whole Medicare process so easy. He explained every option clearly and helped me save money on my prescription plan. Highly recommend!",
    rating: 5,
    service: "Medicare",
  },
  {
    _id: "2",
    name: "Carlos R.",
    location: "Queens, NY",
    quote: "I was confused about ACA marketplace plans until I called Yousha. He found me a great plan with a subsidy I didn't even know I qualified for. Amazing service!",
    rating: 5,
    service: "ACA Marketplace",
  },
  {
    _id: "3",
    name: "Sandra T.",
    location: "Bronx, NY",
    quote: "Getting life insurance felt overwhelming, but Yousha walked me through everything. He found affordable coverage for my whole family with no pressure at all.",
    rating: 5,
    service: "Life Insurance",
  },
];

interface Props {
  testimonials?: Testimonial[];
}

export function TestimonialsSection({ testimonials }: Props) {
  const data =
    testimonials && testimonials.length > 0 ? testimonials : fallbackTestimonials;

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="brand" className="mb-4 px-4 py-1.5 uppercase tracking-widest text-xs">
            Client Reviews
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-900 mb-4">
            What Clients Are Saying
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Real stories from real people I&apos;ve helped find the right coverage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((t, i) => (
            <motion.div
              key={t._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 rounded-xl bg-brand-700 flex items-center justify-center shadow-lg">
                <Quote className="w-4 h-4 text-white fill-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4 mt-2">
                {[...Array(t.rating || 5)].map((_, j) => (
                  <span key={j} className="text-accent text-lg">★</span>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 text-sm italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-brand-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">
                    {t.location}
                    {t.service && ` · ${t.service}`}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
