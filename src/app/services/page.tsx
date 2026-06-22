import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";
import { siteConfig } from "@/lib/siteConfig";

const pageUrl = `${siteConfig.siteUrl}/services`;

export const metadata: Metadata = {
  title: "Zemin Güçlendirme ve Zemin İyileştirme Hizmetleri",
  description: "Jet grout, fore kazık, DSM zemin iyileştirme, enjeksiyon, ankraj, iksa sistemleri ve temel güçlendirme hizmetlerini inceleyin.",
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: "Zemin Güçlendirme ve Zemin İyileştirme Hizmetleri | YER6",
    description: "Jet grout, fore kazık, DSM zemin iyileştirme, enjeksiyon, ankraj, iksa sistemleri ve temel güçlendirme hizmetlerini inceleyin.",
    url: pageUrl
  }
};

export default function ServicesPage() {
  return <ServicesContent />;
}
