import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";
import { siteConfig } from "@/lib/siteConfig";

const pageUrl = `${siteConfig.siteUrl}/about`;

export const metadata: Metadata = {
  title: "Zemin Güçlendirme Ekibi ve Jeoteknik Mühendislik",
  description: "YER6; zemin güçlendirme, zemin iyileştirme, jet grout, fore kazık ve temel güçlendirme projelerinde saha odaklı geoteknik mühendislik ekibidir.",
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: "Zemin Güçlendirme Ekibi ve Jeoteknik Mühendislik | YER6",
    description: "YER6; zemin güçlendirme, zemin iyileştirme, jet grout, fore kazık ve temel güçlendirme projelerinde saha odaklı geoteknik mühendislik ekibidir.",
    url: pageUrl
  }
};

export default function AboutPage() {
  return <AboutContent />;
}
