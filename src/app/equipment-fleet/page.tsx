import type { Metadata } from "next";
import { EquipmentContent } from "./EquipmentContent";
import { siteConfig } from "@/lib/siteConfig";

const pageUrl = `${siteConfig.siteUrl}/equipment-fleet`;

export const metadata: Metadata = {
  title: "Zemin İyileştirme Makine Parkı",
  description: "Jet grout, DSM zemin iyileştirme, fore kazık, ankraj, mini kazık ve enjeksiyon uygulamaları için YER6 ağır makine filosu.",
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: "Zemin İyileştirme Makine Parkı | YER6",
    description: "Jet grout, DSM zemin iyileştirme, fore kazık, ankraj, mini kazık ve enjeksiyon uygulamaları için YER6 ağır makine filosu.",
    url: pageUrl
  }
};

export default function EquipmentFleetPage() {
  return <EquipmentContent />;
}
