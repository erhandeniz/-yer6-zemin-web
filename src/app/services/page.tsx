import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Hizmetler",
  description: "Jet grout, DSM, fore kazık, mini kazık, ankraj, iksa sistemleri, zemin iyileştirme ve geoteknik danışmanlık hizmetleri."
};

export default function ServicesPage() {
  return <ServicesContent />;
}
