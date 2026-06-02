import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { client } from "../../../../sanity/lib/client";
import { postBySlugQuery, allPostsQuery } from "../../../../sanity/lib/queries";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/CtaBanner";
import type { Post } from "@/types";

// Next.js 15+ — params is a Promise
interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts: Post[] = await client.fetch(allPostsQuery);
  return posts.map((post) => ({ slug: post.slug.current }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post: Post = await client.fetch(postBySlugQuery, { slug });
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
  };
}

const portableTextComponents = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="font-display text-2xl font-bold text-brand-900 mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="font-display text-xl font-bold text-brand-800 mt-8 mb-3">{children}</h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-gray-600 leading-relaxed mb-5">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-brand-500 pl-5 py-1 my-6 bg-brand-50 rounded-r-xl">
        <p className="text-brand-800 italic">{children}</p>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-inside space-y-2 mb-5 text-gray-600">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside space-y-2 mb-5 text-gray-600">{children}</ol>
    ),
  },
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const post: Post = await client.fetch(
    postBySlugQuery,
    { slug },
    { next: { revalidate: 3600 } }
  );

  if (!post) notFound();

  return (
    <>
      <div className="pt-32 pb-10 bg-gradient-to-br from-brand-800 to-brand-950 text-white">
        <div className="container max-w-3xl">
          <Button asChild variant="ghost" size="sm" className="text-blue-200 hover:text-white hover:bg-white/10 mb-6 -ml-2">
            <Link href="/blog">
              <ArrowLeft className="mr-1 w-4 h-4" /> Back to Blog
            </Link>
          </Button>
          {post.category && (
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-blue-100 mb-4">
              {post.category}
            </span>
          )}
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>
          {post.publishedAt && (
            <div className="flex items-center gap-2 text-blue-300 text-sm">
              <Calendar className="w-4 h-4" />
              {formatDate(post.publishedAt)}
            </div>
          )}
        </div>
      </div>

      <article className="py-16 bg-white">
        <div className="container max-w-3xl">
          {post.body && (
            <div className="prose-custom">
              <PortableText
                value={post.body as Parameters<typeof PortableText>[0]["value"]}
                components={portableTextComponents}
              />
            </div>
          )}

          {/* Author box */}
          <div className="mt-12 p-6 bg-brand-50 rounded-2xl border border-brand-100 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center text-white font-display font-bold text-xl flex-shrink-0">
              YA
            </div>
            <div>
              <p className="font-display font-bold text-brand-900">Yousha Arafat</p>
              <p className="text-sm text-brand-600">Licensed Insurance Broker</p>
              <p className="text-xs text-gray-500 mt-1">
                Questions? Call{" "}
                <a href="tel:3474357882" className="text-brand-600 font-medium">347-435-7882</a> or{" "}
                <a href="mailto:madicarebyarafat01@gmail.com" className="text-brand-600 font-medium">email me</a>.
              </p>
            </div>
          </div>
        </div>
      </article>

      <CtaBanner />
    </>
  );
}
