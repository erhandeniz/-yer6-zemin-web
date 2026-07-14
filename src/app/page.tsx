import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { HomeContent } from "./HomeContent";

const pageUrl = `${siteConfig.siteUrl}/`;
const homeTitle = "YER6 Zemin Güçlendirme, Jet Grout ve Fore Kazık";
const homeDescription =
  "YER6, Türkiye ve uluslararası projelerde zemin güçlendirme, jet grout, DSM ve fore kazık uygulamalarında premium mühendislik ve saha operasyonu sunar.";

export const metadata: Metadata = {
  title: {
    absolute: homeTitle
  },
  description: homeDescription,
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: homeTitle,
    description:
      "Zemin güçlendirme, zemin iyileştirme, jet grout, DSM, fore kazık, enjeksiyon ve temel güçlendirme projelerinde mühendislik odaklı saha uygulaması.",
    url: pageUrl
  }
};

export default function HomePage() {
  return <HomeContent />;
}
