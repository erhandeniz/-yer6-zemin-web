import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { HomeContent } from "./HomeContent";

const pageUrl = siteConfig.siteUrl;
const homeTitle = "YER6 Zemin Güçlendirme, Jet Grout ve Fore Kazık";
const homeDescription =
  "YER6; zemin güçlendirme, zemin iyileştirme, jet grout, fore kazık, DSM zemin iyileştirme, enjeksiyon ve temel güçlendirme çözümleri sunar.";

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
