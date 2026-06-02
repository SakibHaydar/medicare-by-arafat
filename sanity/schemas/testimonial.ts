import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location (City, State)",
      type: "string",
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Star Rating",
      type: "number",
      options: {
        list: [1, 2, 3, 4, 5].map((n) => ({ title: `${n} Star${n > 1 ? "s" : ""}`, value: n })),
      },
      initialValue: 5,
    }),
    defineField({
      name: "service",
      title: "Service Type",
      type: "string",
      options: {
        list: [
          { title: "Medicare", value: "Medicare" },
          { title: "ACA Marketplace", value: "ACA Marketplace" },
          { title: "Life Insurance", value: "Life Insurance" },
        ],
      },
    }),
    defineField({
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "service", media: "photo" },
  },
});
