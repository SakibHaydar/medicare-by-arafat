"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import type { Post } from "@/types";

const categoryColors: Record<string, string> = {
  medicare: "bg-brand-100 text-brand-700",
  aca: "bg-indigo-100 text-indigo-700",
  life: "bg-emerald-100 text-emerald-700",
  tips: "bg-amber-100 text-amber-700",
};

interface Props {
  posts?: Post[];
}

export function BlogPreviewSection({ posts }: Props) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <Badge variant="brand" className="mb-4 px-4 py-1.5 uppercase tracking-widest text-xs">
              Resources
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-900">
              Latest Articles &amp; Guides
            </h2>
          </div>
          <Button asChild variant="brand-outline" size="sm" className="flex-shrink-0">
            <Link href="/blog">
              View All Posts <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.slug.current}`} className="group block h-full">
                <article className="h-full bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  {/* Image placeholder */}
                  <div className="h-44 bg-gradient-to-br from-brand-700 to-brand-500 relative overflow-hidden">
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
                    <h3 className="font-display font-bold text-brand-900 mb-2 leading-snug group-hover:text-brand-700 transition-colors">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="flex items-center gap-1 mt-4 text-sm font-semibold text-brand-600 group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
