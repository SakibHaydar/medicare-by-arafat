import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "medicare-by-arafat",
  title: "Medicare By Arafat",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Blog Posts")
              .child(S.documentTypeList("post").title("Blog Posts")),
            S.listItem()
              .title("Testimonials")
              .child(
                S.documentTypeList("testimonial").title("Testimonials")
              ),
            S.listItem()
              .title("Services")
              .child(S.documentTypeList("service").title("Services")),
            S.listItem()
              .title("FAQs")
              .child(S.documentTypeList("faq").title("FAQs")),
            ...S.documentTypeListItems().filter(
              (item) =>
                !["post", "testimonial", "service", "faq"].includes(
                  item.getId() ?? ""
                )
            ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
