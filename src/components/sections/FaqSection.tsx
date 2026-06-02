"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { FAQ } from "@/types";

const fallbackFaqs: FAQ[] = [
  {
    _id: "1",
    question: "What is Medicare and when can I enroll?",
    answer:
      "Medicare is a federal health insurance program for people 65 or older and certain younger people with disabilities. Your initial enrollment period begins 3 months before your 65th birthday and ends 3 months after. Missing this window can result in late enrollment penalties.",
    category: "medicare",
  },
  {
    _id: "2",
    question: "What is the difference between Medicare Advantage and Original Medicare?",
    answer:
      "Original Medicare (Parts A & B) is provided directly by the federal government. Medicare Advantage (Part C) is offered by private insurers approved by Medicare and often includes extra benefits like dental, vision, and hearing — sometimes at no extra premium.",
    category: "medicare",
  },
  {
    _id: "3",
    question: "Do I qualify for an ACA subsidy?",
    answer:
      "You may qualify for a premium tax credit (subsidy) if your income falls between 100% and 400% of the Federal Poverty Level (some states have expanded this). I can help you check your eligibility and find the best plan for your budget.",
    category: "aca",
  },
  {
    _id: "4",
    question: "How much does a consultation with you cost?",
    answer:
      "My consultations are completely free. As a licensed broker, I am compensated by the insurance carrier when you enroll through me — at no cost to you and with no impact on your premium.",
    category: "general",
  },
  {
    _id: "5",
    question: "What types of life insurance do you offer?",
    answer:
      "I help clients compare Term Life (affordable coverage for a set period), Whole Life (permanent coverage with cash value), and Final Expense insurance (smaller policies to cover end-of-life costs). We'll find the right fit for your goals and budget.",
    category: "life",
  },
  {
    _id: "6",
    question: "How do I get started?",
    answer:
      "Simply call me at 347-435-7882 or fill out the contact form on this website. I'll schedule a free, no-pressure consultation where we'll review your needs and explore your options together.",
    category: "general",
  },
];

interface Props {
  faqs?: FAQ[];
}

export function FaqSection({ faqs }: Props) {
  const data = faqs && faqs.length > 0 ? faqs : fallbackFaqs;
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge variant="brand" className="mb-4 px-4 py-1.5 uppercase tracking-widest text-xs">
            FAQ
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-lg">
            Have questions? Here are answers to the most common ones.
          </p>
        </motion.div>

        <div className="space-y-3">
          {data.map((faq, i) => (
            <motion.div
              key={faq._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div
                className={cn(
                  "bg-white rounded-2xl border transition-all duration-200 overflow-hidden",
                  openId === faq._id
                    ? "border-brand-200 shadow-md"
                    : "border-gray-100 hover:border-brand-100 hover:shadow-sm"
                )}
              >
                <button
                  onClick={() => setOpenId(openId === faq._id ? null : faq._id)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={openId === faq._id}
                >
                  <span className="font-semibold text-brand-900 text-sm leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-brand-600 flex-shrink-0 transition-transform duration-300",
                      openId === faq._id && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {openId === faq._id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
