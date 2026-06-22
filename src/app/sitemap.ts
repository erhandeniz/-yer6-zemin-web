import type { MetadataRoute } from "next";
import { blogArticles, projects, services } from "@/lib/content";
import { siteConfig } from "@/lib/siteConfig";
import { publishedKnowledgeArticles } from "@/data/knowledge";

const baseUrl = siteConfig.siteUrl;
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "about", "services", "projects", "equipment-fleet", "technology", "knowledge", "blog", "contact"];
  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}/${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8
    })),
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7
    })),
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85
    })),
    ...blogArticles.map((article) => ({
      url: `${baseUrl}/blog#${article.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.65
    })),
    ...publishedKnowledgeArticles.map((article) => ({
      url: `${baseUrl}/knowledge/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.75
    }))
  ];
}
