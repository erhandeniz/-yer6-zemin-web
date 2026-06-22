import type { Metadata } from "next";
import { KnowledgeContent } from "./KnowledgeContent";

export const metadata: Metadata = {
  title: "Zemin Mühendisliği Bilgi Merkezi",
  description:
    "Jet Grout, Fore Kazık, DSM ve zemin iyileştirme uygulamalarını teknik bir dille ele alan YER6 bilgi kaynakları.",
  alternates: {
    canonical: "/knowledge"
  },
  openGraph: {
    title: "Zemin Mühendisliği Bilgi Merkezi | YER6",
    description:
      "Jet Grout, Fore Kazık, DSM ve zemin iyileştirme uygulamalarını teknik bir dille ele alan YER6 bilgi kaynakları.",
    url: "https://www.yer6zemin.com.tr/knowledge"
  }
};

export default function KnowledgeIndexPage() {
  return <KnowledgeContent />;
}
