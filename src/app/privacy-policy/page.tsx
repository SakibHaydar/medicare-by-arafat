import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Medicare by Arafat — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-12 bg-gradient-to-br from-brand-800 to-brand-950 text-white text-center">
        <div className="container">
          <Badge className="mb-4 bg-white/10 text-white border-white/20 text-xs uppercase tracking-widest px-4 py-1.5">
            Legal
          </Badge>
          <h1 className="font-display text-4xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-blue-300 text-sm">Last updated: June 1, 2026</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container max-w-3xl prose prose-blue max-w-none text-gray-600 text-sm leading-relaxed space-y-8">
          <div>
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">1. Information We Collect</h2>
            <p>When you use this website or contact us, we may collect:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
              <li>Name, email address, and phone number (when you fill out our contact form)</li>
              <li>The type of insurance you are inquiring about</li>
              <li>Your message or questions</li>
              <li>Technical information such as IP address, browser type, and pages visited (via cookies)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">2. How We Use Your Information</h2>
            <p>We use the information you provide to:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
              <li>Respond to your consultation requests and inquiries</li>
              <li>Provide information about insurance plans relevant to your needs</li>
              <li>Send follow-up communications (only if you have given consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">3. How We Share Your Information</h2>
            <p>
              We <strong>do not sell, rent, or trade</strong> your personal information to third parties. We may share
              your information with insurance carriers only for the purpose of obtaining quotes or enrolling you in
              a plan, and only with your explicit knowledge and consent.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">4. Cookies</h2>
            <p>
              This website uses cookies to enhance your browsing experience and analyze site traffic. You can
              control cookie settings through your browser or via the cookie banner displayed on your first visit.
              Declining cookies will not affect your ability to use the site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">5. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purpose for which it
              was collected or to comply with legal requirements. Contact form submissions are retained for up to
              3 years.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction or deletion of your personal data</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Withdraw consent for SMS messages by replying STOP</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at{" "}
              <a href="mailto:madicarebyarafat01@gmail.com" className="text-brand-600 underline">
                madicarebyarafat01@gmail.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">7. Security</h2>
            <p>
              We take reasonable measures to protect your personal information from unauthorized access, use, or
              disclosure. Our website uses SSL encryption (HTTPS) for all data transmissions.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">8. Third-Party Links</h2>
            <p>
              This website may contain links to third-party sites. We are not responsible for the privacy practices
              of those sites and encourage you to review their privacy policies.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">9. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact:<br />
              <strong>Yousha Arafat</strong><br />
              Email:{" "}
              <a href="mailto:madicarebyarafat01@gmail.com" className="text-brand-600 underline">
                madicarebyarafat01@gmail.com
              </a>
              <br />
              Phone: <a href="tel:3474357882" className="text-brand-600 underline">347-435-7882</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
