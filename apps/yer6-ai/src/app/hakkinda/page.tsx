import type { Metadata } from "next";
import { FounderProfile } from "@/components/founder-profile";

export const metadata: Metadata = {
  title: "Erhan Deniz — Kurucu & Geoteknik Proje Yöneticisi | YER6 AI",
  description:
    "Erhan Deniz, YER6 Zemin Güçlendirme Geoteknik Mühendislik'in kurucusu ve Geoteknik Proje Yöneticisidir."
};

// Public founder profile (Package C): reachable WITHOUT signing in — the
// middleware exempts /hakkinda. Shows only the approved public identity; no
// private phone/email/address/admin data.
export default function FounderProfilePage() {
  return <FounderProfile />;
}
