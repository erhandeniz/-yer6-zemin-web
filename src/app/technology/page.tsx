import type { Metadata } from "next";
import { TechnologyContent } from "./TechnologyContent";

export const metadata: Metadata = {
  title: "Teknoloji",
  description: "YER6 muhendislik surecleri, animasyonlu is akis diyagramlari, zemin iyilestirme simülasyonlari ve hesaplama araclari."
};

export default function TechnologyPage() {
  return <TechnologyContent />;
}
