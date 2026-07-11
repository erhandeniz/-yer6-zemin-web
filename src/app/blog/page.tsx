import type { Metadata } from "next";
import { BlogContent } from "./BlogContent";
import { siteConfig } from "@/lib/siteConfig";

const pageUrl = `${siteConfig.siteUrl}/blog/`;

export const metadata: Metadata = {
  title: "Zemin Güçlendirme Blogu",
  description: "Jet grout, DSM zemin iyileştirme, fore kazık, enjeksiyon, temel güçlendirme ve deprem bölgesi zemin güçlendirme rehberleri.",
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: "Zemin Güçlendirme Blogu | YER6",
    description: "Jet grout, DSM zemin iyileştirme, fore kazık, enjeksiyon, temel güçlendirme ve deprem bölgesi zemin güçlendirme rehberleri.",
    url: pageUrl
  }
};

export default function BlogPage() {
  return <BlogContent />;
}
