import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { client } from "../../../sanity/lib/client";
import { allPostsQuery } from "../../../sanity/lib/queries";
import { formatDate } from "@/lib/utils";
import type { Post } from "@/types";

export const metadata: Metadata = {
  title: "Blog & Resources",
  description:
    "Medicare tips, ACA Marketplace guides, and life insurance resources from licensed broker Yousha Arafat.",
};

const categoryColors: Record<string, string> = {
  medicare: "bg-brand-100 text-brand-700",
  aca: "bg-indigo-100 text-indigo-700",
  life: "bg-emerald-100 text-emerald-700",
  tips: "bg-amber-100 text-amber-700",
};

const isSanityConfigured =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "placeholder";

export default async function BlogPage() {
  const posts: Post[] = isSanityConfigured
    ? await client.fetch(allPostsQuery, {}, { next: { revalidate: 3600 } })
    : [];

  return (
    <>
      <div className="pt-24 pb-12 sm:pt-28 sm:pb-14 md:pt-32 md:pb-16 bg-gradient-to-br from-brand-800 to-brand-950 text-white text-center">
        <div className="container">
          <Badge className="mb-4 bg-white/10 text-white border-white/20 text-xs uppercase tracking-widest px-4 py-1.5">
            Resources
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Blog &amp; Guides
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Plain-language guides on Medicare, ACA, and life insurance to help you make informed decisions.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg mb-2">No articles published yet.</p>
              <p className="text-gray-400 text-sm">Check back soon for guides and tips!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post._id} href={`/blog/${post.slug.current}`} className="group block h-full">
                  <article className="h-full bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="h-44 bg-gradient-to-br from-brand-700 to-brand-500 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/20 font-display text-7xl font-bold">
                          {post.category?.[0]?.toUpperCase() || "M"}
                        </span>
                      </div>
                      {post.category && (
                        <span className={`absolute top-4 left-4 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${categoryColors[post.category] || "bg-gray-100 text-gray-700"}`}>
                          {post.category}
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      {post.publishedAt && (
                        <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatDate(post.publishedAt)}
                        </div>
                      )}
                      <h2 className="font-display font-bold text-brand-900 mb-2 leading-snug group-hover:text-brand-700 transition-colors">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>
                      )}
                      <div className="flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
