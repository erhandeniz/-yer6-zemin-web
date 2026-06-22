import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "YER6 zemin güçlendirme ve geoteknik mühendislik ekibi, vizyonu, misyonu ve kalite belgeleri."
};

export default function AboutPage() {
  return <AboutContent />;
}
