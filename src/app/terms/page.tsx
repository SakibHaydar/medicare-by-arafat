import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for Medicare by Arafat website.",
};

export default function TermsPage() {
  return (
    <>
      <div className="pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-12 bg-gradient-to-br from-brand-800 to-brand-950 text-white text-center">
        <div className="container">
          <Badge className="mb-4 bg-white/10 text-white border-white/20 text-xs uppercase tracking-widest px-4 py-1.5">
            Legal
          </Badge>
          <h1 className="font-display text-4xl font-bold mb-3">Terms &amp; Conditions</h1>
          <p className="text-blue-300 text-sm">Last updated: June 1, 2026</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container max-w-3xl text-gray-600 text-sm leading-relaxed space-y-8">
          <div>
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website (medicarebyarafat.com), you accept and agree to be bound by
              these Terms and Conditions. If you do not agree, please do not use this website.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">2. Services Description</h2>
            <p>
              This website is operated by Yousha Arafat, a licensed insurance broker. The website provides
              general information about Medicare, ACA Marketplace Plans, and Life Insurance, and allows visitors
              to request a free consultation. <strong>Nothing on this website constitutes an application for
              insurance or a binding insurance contract.</strong>
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">3. No Insurance Advice</h2>
            <p>
              Content on this website is for informational purposes only. It does not constitute professional
              insurance, financial, or legal advice. Always consult directly with a licensed professional before
              making insurance decisions.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">4. Not Affiliated with the Government</h2>
            <p>
              This website and its operator are <strong>not affiliated with, endorsed by, or connected to</strong>{" "}
              Medicare, the Centers for Medicare &amp; Medicaid Services (CMS), the federal government, or any
              state government agency.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">5. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, and logos, is the property of Yousha Arafat
              and may not be reproduced without written permission.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">6. Limitation of Liability</h2>
            <p>
              Yousha Arafat is not liable for any damages arising from the use of, or inability to use, this
              website or the information contained herein. We make no warranties, express or implied, regarding
              the accuracy or completeness of the information on this site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">7. Links to Third Parties</h2>
            <p>
              This site may link to external websites. We are not responsible for the content, accuracy, or
              practices of those sites.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">8. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. Continued use of the website after changes
              are posted constitutes acceptance of the updated Terms.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">9. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of New York.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-900 mb-3">10. Contact</h2>
            <p>
              Questions about these Terms?{" "}
              <a href="mailto:madicarebyarafat01@gmail.com" className="text-brand-600 underline">
                madicarebyarafat01@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
