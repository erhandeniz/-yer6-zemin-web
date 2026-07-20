import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const dynamic = "force-static";

// Arama motoru botlari (Google, Bing, Yandex, DuckDuckGo, Apple) serbesttir; SEO icin gereklidir.
// Asagidaki botlar icerigi yapay zeka egitimi icin toplayan crawler'lar ile agresif
// icerik/SEO kazima (scraping) botlaridir ve engellenir. Durust botlar bu talimata uyar;
// uymayanlar icin asil koruma Cloudflare tarafindadir (bkz. docs/CLOUDFLARE-KORUMA.md).
const blockedBots = [
  // Yapay zeka egitim / tarama botlari
  "GPTBot", "ChatGPT-User", "OAI-SearchBot", "CCBot", "Google-Extended",
  "anthropic-ai", "ClaudeBot", "Claude-Web", "PerplexityBot", "Perplexity-User",
  "Amazonbot", "Applebot-Extended", "Bytespider", "meta-externalagent",
  "FacebookBot", "cohere-ai", "Diffbot", "ImagesiftBot", "Omgili", "Omgilibot",
  "Timpibot", "YouBot", "DataForSeoBot", "AI2Bot",
  // Agresif SEO casusluk / icerik kazima botlari
  "AhrefsBot", "SemrushBot", "MJ12bot", "DotBot", "PetalBot", "BLEXBot",
  "MegaIndex", "SeekportBot", "Scrapy"
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      },
      ...blockedBots.map((userAgent) => ({
        userAgent,
        disallow: "/"
      }))
    ],
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
    host: siteConfig.siteUrl
  };
}
