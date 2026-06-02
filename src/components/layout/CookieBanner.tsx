"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[100] bg-white rounded-2xl shadow-2xl border border-gray-100 p-5"
        >
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 text-brand-700" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900 text-sm mb-1">We use cookies</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                We use cookies to enhance your browsing experience. By clicking{" "}
                <strong>Accept</strong>, you consent to our use of cookies. See our{" "}
                <Link href="/privacy-policy" className="text-brand-600 underline">
                  Privacy Policy
                </Link>{" "}
                for details.
              </p>
              <div className="flex gap-2 mt-3">
                <Button size="sm" onClick={accept} className="bg-brand-700 hover:bg-brand-800 text-white h-8 text-xs">
                  Accept
                </Button>
                <Button size="sm" variant="outline" onClick={decline} className="h-8 text-xs">
                  Decline
                </Button>
              </div>
            </div>
            <button onClick={decline} className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0">
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
