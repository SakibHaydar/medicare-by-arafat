"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "Services",
    href: "/services",
    children: [
      { href: "/services#medicare", label: "Medicare" },
      { href: "/services#aca", label: "ACA Marketplace Plans" },
      { href: "/services#life", label: "Life Insurance" },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-700 to-brand-500 flex items-center justify-center shadow-lg">
            <span className="text-white font-display font-bold text-lg">M</span>
          </div>
          <div>
            <p
              className={cn(
                "font-display font-bold text-base leading-tight transition-colors",
                scrolled ? "text-brand-900" : "text-white"
              )}
            >
              Medicare by Arafat
            </p>
            <p
              className={cn(
                "text-xs font-medium transition-colors",
                scrolled ? "text-brand-600" : "text-blue-200"
              )}
            >
              Licensed Insurance Broker
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    scrolled
                      ? "text-gray-700 hover:text-brand-700 hover:bg-brand-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      servicesOpen && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:text-brand-700 hover:bg-brand-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  scrolled
                    ? "text-gray-700 hover:text-brand-700 hover:bg-brand-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:3474357882"
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors",
              scrolled ? "text-brand-700" : "text-blue-100 hover:text-white"
            )}
          >
            <Phone className="w-4 h-4" />
            347-435-7882
          </a>
          <Button asChild size="sm" className="bg-brand-700 hover:bg-brand-800 text-white shadow-md">
            <Link href="/contact">Free Consultation</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-lg transition-colors",
            scrolled ? "text-brand-900" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <p className="px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
                      {link.label}
                    </p>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-8 py-2 text-sm text-gray-600 hover:text-brand-700 hover:bg-brand-50 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-brand-700 hover:bg-brand-50 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href="tel:3474357882"
                  className="flex items-center gap-2 px-4 py-2 text-brand-700 font-medium"
                >
                  <Phone className="w-4 h-4" /> 347-435-7882
                </a>
                <Button asChild className="bg-brand-700 hover:bg-brand-800 text-white">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Free Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
