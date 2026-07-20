import type { MetadataRoute } from "next";
import { company } from "./company";
import { locales, localeToBcp47, defaultLocale } from "./i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[localeToBcp47[l]] = `${company.domain}/${l}`;

  return locales.map((l) => ({
    url: `${company.domain}/${l}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: l === defaultLocale ? 1 : 0.8,
    alternates: { languages },
  }));
}
