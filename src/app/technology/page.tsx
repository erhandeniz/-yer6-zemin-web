import type { Metadata } from "next";
import { TechnologyContent } from "./TechnologyContent";
import { siteConfig } from "@/lib/siteConfig";

const pageUrl = `${siteConfig.siteUrl}/technology`;

export const metadata: Metadata = {
  title: "Zemin İyileştirme Teknolojileri",
  description: "Zemin güçlendirme, jet grout, DSM, fore kazık ve enjeksiyon uygulamalarında saha verisi, kalite kontrol ve hesaplama teknolojileri.",
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: "Zemin İyileştirme Teknolojileri | YER6",
    description: "Zemin güçlendirme, jet grout, DSM, fore kazık ve enjeksiyon uygulamalarında saha verisi, kalite kontrol ve hesaplama teknolojileri.",
    url: pageUrl
  }
};

export default function TechnologyPage() {
  return <TechnologyContent />;
}
