import { groq } from "next-sanity";

// Blog Posts
export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, excerpt, category, publishedAt,
    mainImage { asset->, alt }
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id, title, slug, excerpt, category, publishedAt, body,
    mainImage { asset->, alt },
    seoTitle, seoDescription
  }
`;

export const recentPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) [0...3] {
    _id, title, slug, excerpt, category, publishedAt,
    mainImage { asset->, alt }
  }
`;

// Testimonials
export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && featured == true] | order(_createdAt asc) {
    _id, name, location, quote, rating, service,
    photo { asset-> }
  }
`;

export const allTestimonialsQuery = groq`
  *[_type == "testimonial"] | order(_createdAt asc) {
    _id, name, location, quote, rating, service,
    photo { asset-> }
  }
`;

// Services
export const allServicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id, title, slug, icon, shortDescription, benefits
  }
`;

// FAQs
export const allFaqsQuery = groq`
  *[_type == "faq"] | order(order asc) {
    _id, question, answer, category
  }
`;

export const faqsByCategoryQuery = groq`
  *[_type == "faq" && category == $category] | order(order asc) {
    _id, question, answer, category
  }
`;
