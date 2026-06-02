export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  category?: string;
  publishedAt?: string;
  mainImage?: {
    asset: { url: string };
    alt?: string;
  };
  body?: unknown[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  location?: string;
  quote: string;
  rating?: number;
  service?: string;
  photo?: { asset: { url: string } };
}

export interface Service {
  _id: string;
  title: string;
  slug?: { current: string };
  icon?: string;
  shortDescription?: string;
  benefits?: string[];
}

export interface FAQ {
  _id: string;
  question: string;
  answer: string;
  category?: string;
}
