import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://medicarebyarafat.com"
  ),
  title: {
    default: "Medicare by Arafat | Licensed Insurance Broker in New York",
    template: "%s | Medicare by Arafat",
  },
  description:
    "Yousha Arafat is a licensed insurance broker specializing in Medicare, ACA Marketplace Plans, and Life Insurance. Get expert guidance and find the right plan for you.",
  keywords: [
    "Medicare broker",
    "ACA marketplace",
    "life insurance",
    "health insurance",
    "licensed insurance broker",
    "New York insurance broker",
    "Medicare plans",
    "Affordable Care Act",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://medicarebyarafat.com",
    siteName: "Medicare by Arafat",
    title: "Medicare by Arafat | Licensed Insurance Broker",
    description:
      "Expert guidance on Medicare, ACA Marketplace Plans, and Life Insurance.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Medicare by Arafat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare by Arafat",
    description: "Licensed Insurance Broker — Medicare, ACA & Life Insurance",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <Toaster />
      </body>
    </html>
  );
}
