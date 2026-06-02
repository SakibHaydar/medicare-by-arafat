"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 100, suffix: "+", label: "Families Covered", desc: "and counting" },
  { value: 3, suffix: "", label: "Insurance Types", desc: "Medicare, ACA & Life" },
  { value: 100, suffix: "%", label: "Free Consultations", desc: "no obligation ever" },
  { value: 5, suffix: "★", label: "Star Service", desc: "client satisfaction" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-800 to-brand-950">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-4xl sm:text-5xl font-bold text-white mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="font-semibold text-blue-100 mb-1">{stat.label}</p>
              <p className="text-blue-300 text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
