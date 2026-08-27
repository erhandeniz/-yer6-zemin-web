import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Building2,
  FileScan,
  FolderKanban,
  Gauge,
  Layers3,
  ShieldCheck,
  Users
} from "lucide-react";

export type ProjectStatus = "Analysis" | "Review" | "Complete";

export type Project = {
  id: string;
  name: string;
  location: string;
  category: string;
  status: ProjectStatus;
  progress: number;
  files: number;
  updated: string;
  image?: string;
};

export const engineeringCategories = [
  "Jet Grout",
  "DSM",
  "Fore Pile",
  "Micropile",
  "CFA",
  "Anchors",
  "Diaphragm Wall",
  "Soldier Pile Wall",
  "Sheet Pile",
  "Ground Improvement",
  "Soil Injection",
  "Compaction Grouting",
  "Permeation Grouting",
  "Stone Columns",
  "Vibro Compaction",
  "Vibro Replacement",
  "Shotcrete",
  "Retaining Systems"
] as const;

export const projects: Project[] = [
  {
    id: "PRJ-0248",
    name: "Pekintaş Düzce Güneş Paneli Fabrikası",
    location: "Düzce, TR",
    category: "Jet Grout",
    status: "Analysis",
    progress: 72,
    files: 18,
    updated: "12 dk önce",
    image: "/images/projects/pekintas-duzce-fabrika-jet-grout.jpg"
  },
  {
    id: "PRJ-0241",
    name: "Bursa Yunuseli Nida Evleri Zemin İyileştirme",
    location: "Bursa, TR",
    category: "Ground Improvement",
    status: "Review",
    progress: 91,
    files: 32,
    updated: "2 sa önce",
    image: "/images/projects/bursa-yunuseli-nida-evleri/bursa-yunuseli-nida-evleri-jet-grout-hero.webp"
  },
  {
    id: "PRJ-0234",
    name: "Bozüyük Gıda İşleme ve IQF Tesisi",
    location: "Bilecik, TR",
    category: "Jet Grout",
    status: "Complete",
    progress: 100,
    files: 24,
    updated: "Dün",
    image: "/images/projects/bozuyuk-sok-dondurma-tesisi-jet-grout.jpg"
  },
  {
    id: "PRJ-0229",
    name: "Marmara Lojistik Merkezi Zemin Güçlendirme",
    location: "Kocaeli, TR",
    category: "DSM",
    status: "Complete",
    progress: 100,
    files: 42,
    updated: "3 gün önce",
    image: "/images/projects/saha/saha-genel-cok-makineli-card.avif"
  },
  {
    id: "PRJ-0222",
    name: "Ege Liman Genişleme Su Kesici Perde",
    location: "İzmir, TR",
    category: "Jet Grout",
    status: "Complete",
    progress: 100,
    files: 29,
    updated: "4 gün önce",
    image: "/images/projects/saha/su-kenari-kazik-imalati-card.avif"
  },
  {
    id: "PRJ-0218",
    name: "Ankara Raylı Sistem Derin Kazı İksa",
    location: "Ankara, TR",
    category: "Retaining Systems",
    status: "Complete",
    progress: 100,
    files: 54,
    updated: "1 hafta önce",
    image: "/images/projects/ankara-rayli-sistem-iksa.jpg"
  },
  {
    id: "PRJ-0214",
    name: "Aydın İncirliova Meydan ve Yeraltı Otoparkı",
    location: "Aydın, TR",
    category: "Jet Grout",
    status: "Analysis",
    progress: 68,
    files: 21,
    updated: "5 sa önce",
    image: "/images/projects/aydin-incirliova/aydin-meydan-otopark-jet-grout-calisma.jpg"
  },
  {
    id: "PRJ-0209",
    name: "Ankara Balâ Karayolları Yol Genişletme",
    location: "Ankara, TR",
    category: "Jet Grout",
    status: "Review",
    progress: 85,
    files: 37,
    updated: "Dün",
    image: "/images/projects/bala-karayollari-delici-saha.jpg"
  },
  {
    id: "PRJ-0202",
    name: "Malatya Battalgazi Deprem Konutları",
    location: "Malatya, TR",
    category: "Fore Pile",
    status: "Complete",
    progress: 100,
    files: 61,
    updated: "2 hafta önce",
    image: "/images/projects/malatya-deprem-konutlari-fore-kazik.jpg"
  },
  {
    id: "PRJ-0197",
    name: "Hatay Antakya Emlak Konut Deprem Konutları",
    location: "Hatay, TR",
    category: "Fore Pile",
    status: "Review",
    progress: 94,
    files: 48,
    updated: "1 gün önce",
    image: "/images/projects/hatay-emlak-konut-fore-kazik.jpg"
  },
  {
    id: "PRJ-0191",
    name: "Hatay Arsuz Muhafaza Borulu Casing Kazık",
    location: "Hatay, TR",
    category: "Fore Pile",
    status: "Complete",
    progress: 100,
    files: 33,
    updated: "3 hafta önce",
    image: "/images/projects/hatay-arsuz-casing-fore-kazik.jpg"
  },
  {
    id: "PRJ-0185",
    name: "Körfez Bölgesi Kule Gelişim Projesi Derin Temel",
    location: "Körfez Bölgesi (Yurt Dışı)",
    category: "Fore Pile",
    status: "Complete",
    progress: 100,
    files: 88,
    updated: "1 ay önce",
    image: "/images/projects/saha/korfez-fore-kazik-hero.webp"
  },
  {
    id: "PRJ-0179",
    name: "Çekya Ofis Kampüsü Kazık ve İksa",
    location: "Prag, Çekya",
    category: "Fore Pile",
    status: "Complete",
    progress: 100,
    files: 39,
    updated: "1 ay önce",
    image: "/images/projects/saha/avrupa-kentsel-kazik-imalati.webp"
  },
  {
    id: "PRJ-0172",
    name: "Güney Asya Nehir Köprüsü Temel Kazıkları",
    location: "Güney Asya (Yurt Dışı)",
    category: "Fore Pile",
    status: "Complete",
    progress: 100,
    files: 45,
    updated: "2 ay önce",
    image: "/images/projects/saha/kopru-temeli-kazik-imalati.webp"
  },
  {
    id: "PRJ-0166",
    name: "Güney Asya Toplu Konut Projesi Fore Kazık",
    location: "Güney Asya (Yurt Dışı)",
    category: "Fore Pile",
    status: "Complete",
    progress: 100,
    files: 52,
    updated: "2 ay önce",
    image: "/images/projects/saha/konut-fore-kazik-hero.webp"
  },
  {
    id: "PRJ-0160",
    name: "Mevcut Bina Altında Jet Grout Güçlendirme",
    location: "Türkiye",
    category: "Jet Grout",
    status: "Complete",
    progress: 100,
    files: 22,
    updated: "2 ay önce",
    image: "/images/projects/saha/bina-alti-jet-grout-kompakt-makine.webp"
  },
  {
    id: "PRJ-0155",
    name: "İstanbul Karma Kullanım Kulesi",
    location: "İstanbul, TR",
    category: "Fore Pile",
    status: "Complete",
    progress: 100,
    files: 58,
    updated: "3 ay önce",
    image: "/images/projects/istanbul-rezidans-fore-kazik.jpg"
  }
];

export const metrics: Array<{
  label: string;
  value: string;
  delta: string;
  icon: LucideIcon;
}> = [
  { label: "Active projects", value: "24", delta: "+4 this month", icon: FolderKanban },
  { label: "Documents analyzed", value: "1,842", delta: "+18.6%", icon: FileScan },
  { label: "AI engineering hours", value: "386", delta: "94% accepted", icon: Bot },
  { label: "Risk items", value: "7", delta: "3 require review", icon: ShieldCheck }
];

export const adminMetrics = [
  { label: "Workspace users", value: "42", icon: Users },
  { label: "Monthly analyses", value: "8,924", icon: Gauge },
  { label: "Storage used", value: "68%", icon: Layers3 },
  { label: "Organizations", value: "12", icon: Building2 }
];
