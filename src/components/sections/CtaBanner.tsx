"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-light font-semibold text-sm uppercase tracking-widest mb-4">
            Ready to Get Covered?
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto leading-tight">
            Let&apos;s Find the Right Plan for You — at No Cost
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
            Schedule a free, no-obligation consultation today. I&apos;ll explain your options clearly and help you enroll in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="white" size="xl" className="group font-bold shadow-xl">
              <Link href="/contact">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="xl" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 rounded-xl font-semibold">
              <a href="tel:3474357882">
                <Phone className="mr-2 w-5 h-5" />
                Call 347-435-7882
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
