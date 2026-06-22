import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "İletişim",
  description: "YER6 ile iletişime geçin, WhatsApp üzerinden hızlı teklif alın ve zemin güçlendirme projeniz için keşif talebi oluşturun."
};

export default function ContactPage() {
  return <ContactContent />;
}
