import type { Metadata } from "next";
import { ProjectsContent } from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Projeler",
  description: "YER6 interaktif proje galerisi, filtrelenebilir geoteknik uygulama portföyü ve before-after zemin iyileştirme karşılaştırmaları."
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
