import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const dynamic = "force-static";

// STRATEJI (siralamayi korur, sadece hirsizligi engeller):
// 1) Arama motorlari (Google, Bing, Yandex, DuckDuckGo, Apple) TAMAMEN SERBEST -> SEO ve
//    siralama korunur. Bu botlar ASLA engellenmez; aksi halde Google'da gorunurluk kaybolur.
// 2) AI ARAMA / ASISTAN botlari (ChatGPT Search, Perplexity) SERBEST -> icerigi kaynak
//    gostererek ziyaretci getirebilir; "herkes bize gelsin" hedefine hizmet eder.
// 3) Yalnizca ICERIK CALAN / MODEL EGITEN ve karsiliginda trafik getirmeyen botlar ile
//    agresif SEO-casusluk kaziyicilari engellenir. Bunlar Google botu DEGILDIR; siralamayi
//    ETKILEMEZ. Sosyal medya onizleme botlari (Facebook vb.) da engellenmez.
const blockedBots = [
  // Yapay zeka MODEL EGITIM botlari (icerigi alir, karsiliginda hicbir sey vermez)
  "GPTBot", "CCBot", "Google-Extended", "anthropic-ai", "ClaudeBot", "Claude-Web",
  "Amazonbot", "Applebot-Extended", "Bytespider", "meta-externalagent",
  "cohere-ai", "Diffbot", "ImagesiftBot", "Omgili", "Omgilibot", "Timpibot",
  "YouBot", "DataForSeoBot", "AI2Bot", "PanguBot",
  // Agresif SEO-casusluk / toplu kazima botlari (Google DEGILDIR; siralamayi etkilemez)
  "AhrefsBot", "SemrushBot", "MJ12bot", "DotBot", "BLEXBot", "MegaIndex",
  "SeekportBot", "Scrapy"
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
