"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number").optional().or(z.literal("")),
  insuranceType: z.string().min(1, "Please select an insurance type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  consentEmail: z.boolean().refine((v) => v, "You must consent to be contacted by email"),
  consentSms: z.boolean().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { consentEmail: false, consentSms: false },
  });

  const consentSms = watch("consentSms");

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl border border-gray-100 shadow-xl p-12 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-display text-2xl font-bold text-brand-900 mb-3">Message Sent!</h3>
        <p className="text-gray-500 mb-2">
          Thank you for reaching out. Yousha will get back to you within 24 hours.
        </p>
        <p className="text-sm text-gray-400">
          For urgent inquiries, call{" "}
          <a href="tel:3474357882" className="text-brand-600 font-medium">
            347-435-7882
          </a>
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 md:p-10">
      <h2 className="font-display text-xl font-bold text-brand-900 mb-6">Send a Message</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Name */}
        <div className="space-y-1.5">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            placeholder="Your full name"
            {...register("name")}
            className={cn(errors.name && "border-red-400 focus-visible:ring-red-400")}
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>

        {/* Email + Phone */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              className={cn(errors.email && "border-red-400 focus-visible:ring-red-400")}
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(123) 456-7890"
              {...register("phone")}
            />
          </div>
        </div>

        {/* Insurance type */}
        <div className="space-y-1.5">
          <Label htmlFor="insuranceType">I&apos;m interested in... *</Label>
          <select
            id="insuranceType"
            {...register("insuranceType")}
            className={cn(
              "flex h-11 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
              errors.insuranceType && "border-red-400"
            )}
          >
            <option value="">Select insurance type</option>
            <option value="Medicare">Medicare</option>
            <option value="ACA Marketplace">ACA Marketplace Plan</option>
            <option value="Life Insurance">Life Insurance</option>
            <option value="Not sure">Not sure — need guidance</option>
          </select>
          {errors.insuranceType && (
            <p className="text-red-500 text-xs">{errors.insuranceType.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            placeholder="Tell me a bit about your situation or what you're looking for..."
            rows={4}
            {...register("message")}
            className={cn(errors.message && "border-red-400 focus-visible:ring-red-400")}
          />
          {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
        </div>

        {/* Consent checkboxes — REQUIRED for compliance */}
        <div className="space-y-3 pt-2 border-t border-gray-100">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Consent *</p>

          {/* Email consent — required */}
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              {...register("consentEmail")}
              className="mt-0.5 w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500 cursor-pointer"
            />
            <span className="text-xs text-gray-600 leading-relaxed">
              I consent to be contacted by Yousha Arafat via email regarding insurance plan options and related information.{" "}
              <span className="text-red-500">*</span>
            </span>
          </label>
          {errors.consentEmail && (
            <p className="text-red-500 text-xs ml-7">{errors.consentEmail.message}</p>
          )}

          {/* SMS consent — optional */}
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              {...register("consentSms")}
              className="mt-0.5 w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500 cursor-pointer"
            />
            <span className="text-xs text-gray-600 leading-relaxed">
              I also consent to receive SMS text messages from Yousha Arafat. Message &amp; data rates may apply.
              Reply <strong>STOP</strong> to unsubscribe, <strong>HELP</strong> for help.{" "}
              <span className="text-gray-400">(Optional)</span>
            </span>
          </label>

          {consentSms && (
            <p className="text-xs text-gray-400 ml-7">
              By checking this box you agree to receive text messages. See our{" "}
              <a href="/sms-policy" className="text-brand-600 underline">SMS Policy</a>.
            </p>
          )}
        </div>

        {/* Privacy note */}
        <p className="text-xs text-gray-400">
          Your information is never sold or shared. See our{" "}
          <a href="/privacy-policy" className="text-brand-600 underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/terms" className="text-brand-600 underline">
            Terms &amp; Conditions
          </a>
          .
        </p>

        <Button
          type="submit"
          variant="brand"
          size="lg"
          className="w-full group"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
