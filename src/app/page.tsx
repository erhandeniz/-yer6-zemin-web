import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { HomeContent } from "./HomeContent";

const pageUrl = `${siteConfig.siteUrl}/`;
const homeTitle = "YER6 Zemin İyileştirme & Güçlendirme | Jet Grout, DSM, Fore Kazık";
const homeDescription =
  "YER6; zemin iyileştirme, zemin güçlendirme, jet grout, DSM ve fore kazık projelerinde Türkiye geneli mühendislik, makine ve saha uygulaması sunar.";

export const metadata: Metadata = {
  title: {
    absolute: homeTitle
  },
  description: homeDescription,
  alternates: {
    canonical: pageUrl,
    // Tek dilli (TR) site: tr-TR öz-referans + yalnızca ana sayfada x-default.
    languages: { "tr-TR": pageUrl, "x-default": pageUrl }
  },
  openGraph: {
    // ZORUNLU: Next.js, sayfa kendi openGraph bloğunu tanımladığında layout'taki
    // bloğu birleştirmez, tamamen değiştirir. siteName burada tekrar yazılmazsa
    // ana sayfada og:site_name HİÇ üretilmez ve Google site adını alan adından
    // (yer6zemin.com.tr) türetir. Bu satır silinmemelidir.
    siteName: "YER6 Geoteknik",
    title: homeTitle,
    description:
      "Zemin güçlendirme, zemin iyileştirme, jet grout, DSM, fore kazık, enjeksiyon ve temel güçlendirme projelerinde mühendislik odaklı saha uygulaması.",
    url: pageUrl,
    type: "website",
    locale: "tr_TR"
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description:
      "Zemin güçlendirme, zemin iyileştirme, jet grout, DSM, fore kazık, enjeksiyon ve temel güçlendirme projelerinde mühendislik odaklı saha uygulaması."
  }
};

export default function HomePage() {
  return <HomeContent />;
}
