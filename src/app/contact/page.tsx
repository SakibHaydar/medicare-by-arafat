import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Yousha Arafat",
  description:
    "Schedule a free consultation with licensed insurance broker Yousha Arafat. Medicare, ACA, and Life Insurance guidance at no cost.",
};

const contactInfo = [
  { icon: Phone, label: "Phone", value: "347-435-7882", href: "tel:3474357882" },
  {
    icon: Mail,
    label: "Email",
    value: "madicarebyarafat01@gmail.com",
    href: "mailto:madicarebyarafat01@gmail.com",
  },
  { icon: MapPin, label: "Location", value: "New York, NY", href: null },
  { icon: Clock, label: "Availability", value: "Mon–Sat, 9am–7pm EST", href: null },
];

export default function ContactPage() {
  return (
    <>
      <div className="pt-24 pb-12 sm:pt-28 sm:pb-14 md:pt-32 md:pb-16 bg-gradient-to-br from-brand-800 to-brand-950 text-white text-center">
        <div className="container">
          <Badge className="mb-4 bg-white/10 text-white border-white/20 text-xs uppercase tracking-widest px-4 py-1.5">
            Contact
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Get Your Free Consultation
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Fill out the form below or call directly. I&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </div>

      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-brand-900 mb-2">
                  Let&apos;s Talk
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  No pressure, no commitment — just honest guidance to help you find the right insurance plan.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) =>
                  item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-100 transition-all group"
                    >
                      <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                        <item.icon className="w-5 h-5 text-brand-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</p>
                        <p className="text-brand-900 font-semibold text-sm">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm"
                    >
                      <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-brand-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</p>
                        <p className="text-brand-900 font-semibold text-sm">{item.value}</p>
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="p-5 bg-brand-50 rounded-2xl border border-brand-100">
                <p className="text-xs font-semibold text-brand-700 uppercase tracking-widest mb-2">Disclaimer</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  By submitting this form you consent to be contacted by Yousha Arafat regarding insurance options. This is not an application for insurance. No purchase is required.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
