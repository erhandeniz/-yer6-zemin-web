import type { MetadataRoute } from "next";
import { projects, services } from "@/lib/content";
import { orderedCityPages, featuredCitySlugs } from "@/lib/cityContent";
import { siteConfig } from "@/lib/siteConfig";
import { publishedKnowledgeArticles } from "@/data/knowledge";

const baseUrl = siteConfig.siteUrl;
export const dynamic = "force-static";

// next.config.mjs -> trailingSlash: true olduğu için tüm sayfalar ".../slug/" olarak
// servis ediliyor. Sitemap URL'leri de sondaki "/" ile üretilmeli; aksi halde her URL
// 308 ile slash'lı sürüme yönlenir ve Search Console "Sayfa yönlendirme içeriyor" verir.
const withTrailingSlash = (path: string) => {
  const url = `${baseUrl}${path}`;
  return url.endsWith("/") ? url : `${url}/`;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "about", "services", "projects", "equipment-fleet", "technology", "knowledge", "blog", "contact", "sehirler"];
  return [
    ...staticRoutes.map((route) => ({
      url: withTrailingSlash(`/${route}`),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8
    })),
    ...services.map((service) => ({
      url: withTrailingSlash(`/services/${service.slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7
    })),
    ...projects.map((project) => ({
      url: withTrailingSlash(`/projects/${project.slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85
    })),
    ...orderedCityPages.map((page) => ({
      url: withTrailingSlash(`/sehirler/${page.slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      // Öncelikli iller daima önde ve daha yüksek öncelikle listelenir.
      priority: featuredCitySlugs.includes(page.slug) ? 0.9 : 0.7
    })),
    ...publishedKnowledgeArticles.map((article) => ({
      url: withTrailingSlash(`/knowledge/${article.slug}`),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.75
    }))
  ];
}
