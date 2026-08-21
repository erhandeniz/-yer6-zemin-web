import type { Metadata } from "next";
import { NotFoundContent } from "@/components/NotFoundContent";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı (404) | YER6",
  description: "Aradığınız sayfa mevcut değil veya taşınmış olabilir.",
  robots: {
    index: false,
    follow: false
  }
};

export default function NotFound() {
  return <NotFoundContent />;
}
