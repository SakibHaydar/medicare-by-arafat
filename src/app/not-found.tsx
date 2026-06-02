import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <p className="font-display text-8xl font-bold text-brand-200 mb-4">404</p>
        <h1 className="font-display text-2xl font-bold text-brand-900 mb-3">Page Not Found</h1>
        <p className="text-gray-500 mb-8 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <Button asChild variant="brand" size="lg">
          <Link href="/">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
