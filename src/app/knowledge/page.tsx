import type { Metadata } from "next";
import { KnowledgeContent } from "./KnowledgeContent";
import { siteConfig } from "@/lib/siteConfig";

const pageUrl = `${siteConfig.siteUrl}/knowledge/`;

export const metadata: Metadata = {
  title: "Zemin Güçlendirme Bilgi Merkezi",
  description:
    "Jet grout, fore kazık, DSM zemin iyileştirme, enjeksiyon, temel güçlendirme ve kalite kontrol konularında teknik YER6 makaleleri.",
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: "Zemin Güçlendirme Bilgi Merkezi | YER6",
    description:
      "Jet grout, fore kazık, DSM zemin iyileştirme, enjeksiyon, temel güçlendirme ve kalite kontrol konularında teknik YER6 makaleleri.",
    url: pageUrl
  }
};

export default function KnowledgeIndexPage() {
  return <KnowledgeContent />;
}
