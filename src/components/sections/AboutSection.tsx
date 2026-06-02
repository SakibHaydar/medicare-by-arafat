"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const highlights = [
  { icon: Award, label: "Licensed Broker", desc: "New York State licensed and certified" },
  { icon: Users, label: "Independent", desc: "No carrier bias — I work for you" },
  { icon: Clock, label: "Free Service", desc: "My consultations cost you nothing" },
  { icon: Phone, label: "Always Available", desc: "Easy to reach by phone or email" },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-brand-800 to-brand-950 rounded-3xl p-10 shadow-2xl overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
              />
              {/* Avatar */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-display font-bold text-5xl shadow-xl mb-6 animate-float">
                  YA
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-1">
                  Yousha Arafat
                </h3>
                <p className="text-brand-300 font-medium mb-1">Licensed Insurance Broker</p>
                <p className="text-brand-400 text-sm mb-6">New York, NY</p>
                <div className="w-full bg-white/10 rounded-2xl p-5 text-left">
                  <p className="text-sm font-semibold text-brand-200 mb-3 uppercase tracking-widest">Specializing In</p>
                  {["Medicare", "ACA Marketplace Plans", "Life Insurance"].map((s) => (
                    <div key={s} className="flex items-center gap-2 py-1.5 border-b border-white/10 last:border-0">
                      <span className="w-2 h-2 rounded-full bg-accent-light flex-shrink-0" />
                      <span className="text-white text-sm font-medium">{s}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 mt-6 w-full">
                  <a href="tel:3474357882" className="flex-1 bg-white/10 hover:bg-white/20 rounded-xl py-3 text-center text-sm text-white font-medium transition-colors">
                    📞 Call Now
                  </a>
                  <a href="mailto:madicarebyarafat01@gmail.com" className="flex-1 bg-white/10 hover:bg-white/20 rounded-xl py-3 text-center text-sm text-white font-medium transition-colors">
                    ✉️ Email
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-accent-dark" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">State Licensed</p>
                <p className="text-xs text-gray-500">Insurance Broker</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Badge variant="brand" className="mb-4 px-4 py-1.5 uppercase tracking-widest text-xs">
              About Me
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-900 mb-5">
              Your Trusted Insurance{" "}
              <span className="gradient-text">Partner</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                I&apos;m Yousha Arafat, a licensed insurance broker based in New York. I help individuals and families navigate the often confusing world of health and life insurance — making sure you get the right coverage at the best price.
              </p>
              <p>
                As an <strong className="text-brand-800">independent broker</strong>, I have no obligation to any single insurance company. That means my only loyalty is to you. I compare plans from multiple top-rated carriers and provide honest, pressure-free guidance every step of the way.
              </p>
              <p>
                Whether you&apos;re new to Medicare, looking for an affordable Marketplace plan, or protecting your family with life insurance — I&apos;m here to make it simple.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => (
                <div key={item.label} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-900 text-sm">{item.label}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild variant="brand" size="lg" className="group">
              <Link href="/about">
                Learn More About Me
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
