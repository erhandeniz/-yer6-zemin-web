import {
  Anchor,
  BadgeCheck,
  Building2,
  Compass,
  Drill,
  Factory,
  Gauge,
  Layers3,
  MapPinned,
  Mountain,
  Network,
  ShieldCheck,
  Sparkles,
  Waves
} from "lucide-react";

export const navItems = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/projects", key: "projects" },
  { href: "/equipment-fleet", key: "fleet" },
  { href: "/technology", key: "technology" },
  { href: "/knowledge", key: "knowledge" },
  { href: "/blog", key: "blog" },
  { href: "/contact", key: "contact" }
] as const;

export const metrics = [
  { value: 250, suffix: "+", labelKey: "metric1Label", detailKey: "metric1Detail" },
  { value: 1.8, suffix: "M m", labelKey: "metric2Label", detailKey: "metric2Detail" },
  { value: 42, suffix: "+", labelKey: "metric3Label", detailKey: "metric3Detail" },
  { value: 99, suffix: "%", labelKey: "metric4Label", detailKey: "metric4Detail" }
];

export const clientLogos = [
  "Kamu Altyapı",
  "Endüstriyel Tesis",
  "Ulaşım",
  "Liman",
  "Enerji",
  "Konut",
  "Ticari Proje",
  "Deprem Güçlendirme"
];

export const services = [
  {
    slug: "jet-grout",
    key: "svc_jet_grout",
    icon: Drill,
    // Kept for metadata/generateMetadata (default TR)
    title: "Jet Grout",
    summary: "Yüksek basınçlı enjeksiyon ile düşük geçirgenlikli, yüksek dayanımlı zemin kolonları.",
    detail: "Dar sahalarda, mevcut yapılara yakın bölgelerde ve su yalıtımı gereken alanlarda kontrollü kolon geometrisi.",
    specs: ["Mono, double ve triple sistem", "Gerçek zamanlı basınç takibi", "Kolon çapı optimizasyonu"]
  },
  {
    slug: "dsm",
    key: "svc_dsm",
    icon: Layers3,
    title: "DSM",
    summary: "Derin zemin karıştırma ile taşıma kapasitesi ve oturma performansı kontrollü iyileştirme.",
    detail: "Yumuşak kil, gevşek kum ve dolgu alanlarında düşük vibrasyonlu, seri üretimli çözüm.",
    specs: ["Çimento bağlayıcı tasarımı", "Laboratuvar karışım tasarımı", "Kolon kalite kaydı"]
  },
  {
    slug: "fore-kazik",
    key: "svc_fore_kazik",
    icon: Building2,
    title: "Fore Kazık",
    summary: "Büyük çaplı temeller, derin kazılar ve yüksek taşıma kapasitesi için rotary delgi uygulamaları.",
    detail: "Bentonit, muhafaza borusu ve tremie beton süreçleriyle hassas geoteknik üretim.",
    specs: ["Derin delgi kapasitesi", "Dikeylik kontrolü", "Beton sarf izleme"]
  },
  {
    slug: "mini-kazik",
    key: "svc_mini_kazik",
    icon: Mountain,
    title: "Mini Kazık",
    summary: "Sınırlı erişimli alanlarda güçlendirme, underpinning ve hassas temel çözümleri.",
    detail: "Mevcut yapı temellerinde düşük titreşimli, güvenli ve kontrollü kapasite artışı.",
    specs: ["Kompakt ekipman", "Çelik donatı seçenekleri", "Enjeksiyonlu imalat"]
  },
  {
    slug: "ankraj",
    key: "svc_ankraj",
    icon: Anchor,
    title: "Ankraj",
    summary: "Derin kazılar, iksa perdeleri ve stabilizasyon işleri için aktif pasif ankraj sistemleri.",
    detail: "Proje yüklerine göre delgi, enjeksiyon, germe ve kabul testi süreçlerinin yönetimi.",
    specs: ["Ön germeli ankraj", "Kabul ve uygunluk testleri", "Korozyon koruması"]
  },
  {
    slug: "iksa-sistemleri",
    key: "svc_iksa",
    icon: ShieldCheck,
    title: "İksa Sistemleri",
    summary: "Kent içi derin kazılarda diyafram, kazıklı perde, ankraj ve kuşak entegrasyonu.",
    detail: "Yanal deplasman, komşu yapı etkisi ve saha lojistiğini birlikte düşünen tasarım.",
    specs: ["Kazıklı perde", "Kuşak kirişleri", "Enstrümantasyon uyumu"]
  },
  {
    slug: "zemin-iyilestirme",
    key: "svc_zemin_iy",
    icon: Sparkles,
    title: "Zemin İyileştirme",
    summary: "Oturma, sıvılaşma ve taşıma sorunlarına özel hibrit geoteknik iyileştirme paketleri.",
    detail: "Zemin modelinden saha kalitesine kadar tek merkezden izlenen mühendislik süreci.",
    specs: ["Kolon, enjeksiyon ve drenaj", "Performans tasarımı", "Saha veri analizi"]
  },
  {
    slug: "geoteknik-danismanlik",
    key: "svc_geoteknik",
    icon: Compass,
    title: "Geoteknik Danışmanlık",
    summary: "Saha araştırması, tasarım denetimi, metraj optimizasyonu ve risk yönetimi.",
    detail: "Yatırım kararından uygulama teslimine kadar karar destekli geoteknik mühendislik.",
    specs: ["Zemin modeli", "Risk matrisi", "Uygulama metodolojisi"]
  }
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServicePaths() {
  return services.map((service) => ({ slug: service.slug }));
}

export const projects = [
  {
    slug: "marmara-lojistik-temel-guclendirme",
    key: "proj_marmara",
    category: "DSM",
    location: "Kocaeli",
    year: "2026",
    area: "118.000 m²",
    metric: "42.000 m DSM kolon",
    // Kept for metadata (default TR)
    title: "Marmara Lojistik Merkezi",
    summary: "Yumuşak kil tabakaları üzerinde düşük oturmalı endüstriyel platform tasarımı.",
    challenge: "Yüksek raf yükleri, sınırlı termin programı ve değişken dolgu kalitesi.",
    solution: "DSM kolonları, saha karot testleri ve dijital üretim raporlaması ile performans kontrollü iyileştirme.",
    tags: ["DSM", "Endüstriyel", "Oturma Kontrolü"],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80"
  },
  {
    slug: "ege-liman-jet-grout-perdesi",
    key: "proj_ege",
    category: "Jet Grout",
    location: "İzmir",
    year: "2025",
    area: "740 m perde",
    metric: "8.600 adet kolon",
    title: "Ege Liman Genişleme",
    summary: "Kıyı yapısında su kontrolü ve taşıma kapasitesi için jet grout perdesi.",
    challenge: "Yüksek yer altı suyu, deniz etkisi ve dar çalışma koridoru.",
    solution: "Triple jet grout, enjeksiyon basınç kayıtları ve aşamalı kalite testleri.",
    tags: ["Jet Grout", "Liman", "Su Kontrolü"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
  },
  {
    slug: "ankara-rayli-sistem-iksa",
    key: "proj_ankara",
    category: "İksa",
    location: "Ankara",
    year: "2024",
    area: "26 m kazı derinliği",
    metric: "1.920 adet ankraj",
    title: "Ankara Raylı Sistem Etabı",
    summary: "Kent içinde hassas deplasman limitleriyle derin kazı ve iksa sistemi.",
    challenge: "Trafik, komşu yapılar ve servis hatları nedeniyle düşük toleranslı saha koşulları.",
    solution: "Ankrajlı kazıklı perde, izleme planları ve etaplı kazı senaryoları.",
    tags: ["Ankraj", "İksa", "Ulaşım"],
    image: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=1600&q=80"
  },
  {
    slug: "istanbul-rezidans-fore-kazik",
    key: "proj_istanbul",
    category: "Fore Kazık",
    location: "İstanbul",
    year: "2024",
    area: "58 kat",
    metric: "1.240 m³ beton günlük pik",
    title: "İstanbul Karma Kullanım Kulesi",
    summary: "Yüksek yapı temel sistemi için büyük çaplı fore kazık ve baret entegrasyonu.",
    challenge: "Sınırlı saha lojistiği ve yoğun beton-donatı koordinasyonu.",
    solution: "Rotary delgi, kalite formları ve beton döküm takip sistemi ile sürekli imalat.",
    tags: ["Fore Kazık", "Yüksek Yapı", "Temel"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
  }
];

export const equipment = [
  {
    key: "eq_jg220",
    icon: "drill"
  },
  {
    key: "eq_dsm",
    icon: "layers"
  },
  {
    key: "eq_kr300",
    icon: "building"
  },
  {
    key: "eq_anchor",
    icon: "anchor"
  }
];

export const workflow = [
  { key: "wf1", icon: MapPinned },
  { key: "wf2", icon: Gauge },
  { key: "wf3", icon: Network },
  { key: "wf4", icon: BadgeCheck }
];

export const certificateKeys = [
  "cert_iso9001",
  "cert_iso14001",
  "cert_iso45001",
  "cert_methodology",
  "cert_calibration",
  "cert_qa"
];

export const team = [
  { key: "team_design", icon: Waves },
  { key: "team_ops", icon: Factory },
  { key: "team_qa", icon: BadgeCheck }
];

export const blogArticles = [
  {
    slug: "jet-grout-nedir",
    key: "blog_jet_grout",
    read: "7 dk",
    // Kept for metadata
    title: "Jet Grout Nedir? Hangi Zeminlerde Tercih Edilir?",
    excerpt: "Kolon geometrisi, enjeksiyon parametreleri ve kalite kontrol adımlarıyla jet grout seçim rehberi.",
    category: "Teknik Rehber"
  },
  {
    slug: "dsm-nasil-uygulanir",
    key: "blog_dsm",
    read: "9 dk",
    title: "DSM ile Oturma Kontrolü: Tasarımdan Sahaya",
    excerpt: "Derin zemin karıştırma yönteminde bağlayıcı oranları, kolon aralığı ve test stratejisi.",
    category: "Zemin İyileştirme"
  },
  {
    slug: "zemin-iyilestirme-risk-yonetimi",
    key: "blog_iksa",
    read: "6 dk",
    title: "İksa Sistemlerinde Komşu Yapı Riskleri",
    excerpt: "Kent içi derin kazılarda izleme, ankraj programı ve deformasyon limitlerinin yönetimi.",
    category: "İksa"
  }
];
