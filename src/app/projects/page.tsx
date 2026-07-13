import type { Metadata } from "next";
import { ProjectsContent } from "./ProjectsContent";
import { siteConfig } from "@/lib/siteConfig";

const pageUrl = `${siteConfig.siteUrl}/projects/`;

export const metadata: Metadata = {
  title: "Zemin Güçlendirme Projeleri",
  description: "Jet grout, DSM zemin iyileştirme, fore kazık, iksa ve temel güçlendirme projelerinde YER6 saha uygulama örnekleri.",
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: "Zemin Güçlendirme Projeleri | YER6",
    description: "Jet grout, DSM zemin iyileştirme, fore kazık, iksa ve temel güçlendirme projelerinde YER6 saha uygulama örnekleri.",
    url: pageUrl
  }
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
