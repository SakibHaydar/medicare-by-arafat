"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Heart, FileText, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "medicare",
    icon: Shield,
    badge: "Medicare",
    title: "Medicare Plans",
    description:
      "Turning 65? Already on Medicare? I'll help you compare Medicare Advantage, Medicare Supplement (Medigap), and Part D drug plans to find what fits your health needs and budget.",
    benefits: [
      "Medicare Advantage (Part C)",
      "Medicare Supplement / Medigap",
      "Prescription Drug Plans (Part D)",
      "Annual enrollment guidance",
    ],
    color: "from-brand-700 to-brand-500",
    bgColor: "bg-brand-50",
    borderColor: "border-brand-100",
    badgeClass: "bg-brand-100 text-brand-700",
  },
  {
    id: "aca",
    icon: Heart,
    badge: "ACA Marketplace",
    title: "ACA Marketplace Plans",
    description:
      "Under 65 and looking for individual or family health coverage? I'll walk you through Marketplace plans, check your subsidy eligibility, and get you enrolled quickly.",
    benefits: [
      "Individual & family plans",
      "Subsidy & tax credit eligibility",
      "Special enrollment periods",
      "Bronze, Silver, Gold & Platinum tiers",
    ],
    color: "from-indigo-600 to-purple-500",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-100",
    badgeClass: "bg-indigo-100 text-indigo-700",
  },
  {
    id: "life",
    icon: FileText,
    badge: "Life Insurance",
    title: "Life Insurance",
    description:
      "Protect your family's financial future with the right life insurance policy. I compare term, whole life, and final expense policies from top carriers to find your best fit.",
    benefits: [
      "Term Life Insurance",
      "Whole Life Insurance",
      "Final Expense Insurance",
      "No medical exam options",
    ],
    color: "from-emerald-600 to-teal-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-100",
    badgeClass: "bg-emerald-100 text-emerald-700",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="brand" className="mb-4 px-4 py-1.5 uppercase tracking-widest text-xs">
            What I Offer
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 mb-4">
            Insurance Solutions Tailored{" "}
            <span className="gradient-text">For You</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            As an independent broker, I work for you — not the insurance companies. That means unbiased advice and access to multiple carriers.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={cardVariants}>
              <Card
                className={`h-full border-2 ${service.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${service.badgeClass}`}>
                    {service.badge}
                  </span>
                  <h3 className="font-display text-xl font-bold text-brand-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="brand-outline" size="sm" className="w-full group/btn">
                    <Link href={`/services#${service.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm mb-4">
            Not sure which plan is right for you?
          </p>
          <Button asChild variant="brand" size="lg">
            <Link href="/contact">
              Get a Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
