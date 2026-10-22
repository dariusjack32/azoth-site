// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE_URL } from "./src/config.ts";

export default defineConfig({
  site: SITE_URL,
  trailingSlash: "always",
  // Keep classic whitespace handling so spaces between inline elements survive.
  compressHTML: true,
  build: { format: "directory" },
  integrations: [
    sitemap({
      // /arch/ is an unlisted study (noindex): shared by link, kept out of search.
      filter: (page) => !page.includes("/portal/") && !page.includes("/404") && !page.includes("/arch/"),
    }),
  ],
});
