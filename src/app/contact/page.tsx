import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";
import { siteConfig } from "@/lib/siteConfig";

const pageUrl = `${siteConfig.siteUrl}/contact/`;

export const metadata: Metadata = {
  title: "Zemin Güçlendirme Teklif ve İletişim",
  description: "Zemin güçlendirme, zemin iyileştirme, jet grout, fore kazık, DSM ve temel güçlendirme projeleri için YER6 ile iletişime geçin.",
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: "Zemin Güçlendirme Teklif ve İletişim | YER6",
    description: "Zemin güçlendirme, zemin iyileştirme, jet grout, fore kazık, DSM ve temel güçlendirme projeleri için YER6 ile iletişime geçin.",
    url: pageUrl
  }
};

export default function ContactPage() {
  return <ContactContent />;
}
