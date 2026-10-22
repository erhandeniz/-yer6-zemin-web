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
  // Yalnizca trafik getirmeyen agresif veri kaziyicilar ve SEO-casusluk botlari engellenir.
  // GPTBot, Google-Extended, ClaudeBot ve Applebot-Extended acik birakilir ki yapay zeka
  // asistanlari ve AI arama ozetleri YER6 sayfalarini ve sitemap.xml'i dogrudan okuyabilsin.
  "CCBot", "anthropic-ai",
  "Amazonbot", "Bytespider", "meta-externalagent",
  "cohere-ai", "Diffbot", "ImagesiftBot", "Omgili", "Omgilibot", "Timpibot",
  "DataForSeoBot", "AI2Bot", "PanguBot",
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
