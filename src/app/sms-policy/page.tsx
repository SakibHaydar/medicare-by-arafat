import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "SMS Policy",
  description: "SMS text message policy for Medicare by Arafat.",
};

export default function SmsPolicyPage() {
  return (
    <>
      <div className="pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-12 bg-gradient-to-br from-brand-800 to-brand-950 text-white text-center">
        <div className="container">
          <Badge className="mb-4 bg-white/10 text-white border-white/20 text-xs uppercase tracking-widest px-4 py-1.5">
            Legal
          </Badge>
          <h1 className="font-display text-4xl font-bold mb-3">SMS Text Messaging Policy</h1>
          <p className="text-blue-300 text-sm">Last updated: June 1, 2026</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container max-w-3xl text-gray-600 text-sm leading-relaxed space-y-8">
          <div>
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">1. SMS Consent</h2>
            <p>
              By checking the SMS opt-in box on our contact form, you expressly consent to receive text messages
              from Yousha Arafat (Medicare by Arafat) at the phone number you provided. Your consent is not a
              condition of purchase or enrollment.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">2. Types of Messages</h2>
            <p>If you opt in, you may receive:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
              <li>Appointment reminders for your consultation</li>
              <li>Follow-up information about your insurance inquiry</li>
              <li>Enrollment deadline reminders (e.g., Medicare Open Enrollment)</li>
              <li>General insurance tips and updates (infrequent)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">3. Message Frequency</h2>
            <p>
              Message frequency will vary but will generally be low. We will not send promotional or marketing
              messages more than once per week.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">4. Message &amp; Data Rates</h2>
            <p>
              <strong>Message and data rates may apply</strong> depending on your wireless carrier and plan.
              Medicare by Arafat is not responsible for any charges from your carrier.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">5. How to Opt Out</h2>
            <p>
              You may opt out of SMS messages at any time by replying{" "}
              <strong className="text-brand-800">STOP</strong> to any text message you receive from us. You will
              receive a one-time confirmation message and then no further texts.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">6. How to Get Help</h2>
            <p>
              For assistance, reply <strong className="text-brand-800">HELP</strong> to any message, or contact
              us directly:
            </p>
            <ul className="list-none mt-2 space-y-1">
              <li>
                Email:{" "}
                <a href="mailto:madicarebyarafat01@gmail.com" className="text-brand-600 underline">
                  madicarebyarafat01@gmail.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:3474357882" className="text-brand-600 underline">
                  347-435-7882
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">7. Privacy of SMS Data</h2>
            <p>
              Your phone number and SMS consent record are stored securely and will never be sold or shared with
              third parties for marketing purposes. See our{" "}
              <a href="/privacy-policy" className="text-brand-600 underline">
                Privacy Policy
              </a>{" "}
              for details.
            </p>
          </div>

          <div className="p-5 bg-brand-50 rounded-2xl border border-brand-100">
            <p className="text-xs font-semibold text-brand-700 uppercase tracking-widest mb-2">Summary</p>
            <p className="text-xs text-gray-600">
              Text <strong>STOP</strong> to cancel · Text <strong>HELP</strong> for help ·
              Msg &amp; data rates may apply · Msg frequency varies
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
