"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight, Shield, Heart, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const floatingCards = [
  { icon: Shield, label: "Medicare Plans", color: "from-blue-500 to-blue-600", delay: 0 },
  { icon: Heart, label: "ACA Marketplace", color: "from-indigo-500 to-purple-600", delay: 0.2 },
  { icon: FileText, label: "Life Insurance", color: "from-brand-700 to-brand-500", delay: 0.4 },
];

const trustPoints = [
  "Licensed & Certified Broker",
  "Free No-Obligation Consultation",
  "100+ Families Covered",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-pattern">
      {/* Animated mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glowing orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-500/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-indigo-500/15 blur-3xl"
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative z-10 pt-28 pb-20 sm:pt-32 sm:pb-24 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="accent" className="mb-5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
                Licensed Insurance Broker — New York
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5 sm:mb-6"
            >
              Insurance Coverage{" "}
              <span className="relative inline-block">
                <span className="text-accent-light">Made Simple</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-light origin-left"
                />
              </span>{" "}
              for You
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-blue-100 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Yousha Arafat specializes in <strong className="text-white">Medicare</strong>,{" "}
              <strong className="text-white">ACA Marketplace Plans</strong>, and{" "}
              <strong className="text-white">Life Insurance</strong> — providing honest, personalized guidance at no cost to you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button asChild variant="white" size="xl" className="group font-bold">
                <Link href="/contact">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="brand-outline" size="xl" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                <a href="tel:3474357882">
                  <Phone className="mr-2 w-5 h-5" />
                  347-435-7882
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-blue-100 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent-light flex-shrink-0" />
                  {point}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — floating service cards */}
          <div className="hidden lg:flex flex-col gap-4 items-end">
            {/* Profile card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="w-80 glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center text-white font-display font-bold text-2xl shadow-lg">
                  YA
                </div>
                <div>
                  <p className="font-display font-bold text-brand-900 text-lg">Yousha Arafat</p>
                  <p className="text-brand-600 text-sm font-medium">Licensed Insurance Broker</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent text-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                "I&apos;m here to make insurance easy to understand. My consultations are always free."
              </p>
            </motion.div>

            {/* Service cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + card.delay }}
                style={{ marginRight: i === 1 ? "3rem" : 0 }}
                className="glass-card rounded-2xl p-4 flex items-center gap-4 w-64 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-brand-900 text-sm">{card.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">Expert guidance available</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path d="M0 80L60 74.7C120 69.3 240 58.7 360 53.3C480 48 600 48 720 53.3C840 58.7 960 69.3 1080 69.3C1200 69.3 1320 58.7 1380 53.3L1440 48V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
