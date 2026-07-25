import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { HomeContent } from "./HomeContent";

const pageUrl = `${siteConfig.siteUrl}/`;
const homeTitle = "YER6 Zemin Güçlendirme | Jet Grout, DSM ve Fore Kazık";
const homeDescription =
  "YER6, Türkiye ve uluslararası projelerde lider zemin güçlendirme, jet grout yapan firmalar ve fore kazık firmaları arasında premium mühendislik ve saha operasyonu sunar.";

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
