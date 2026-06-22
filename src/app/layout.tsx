import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";
import { siteConfig } from "@/lib/siteConfig";

const siteUrl = siteConfig.siteUrl;
const openGraphImage = `${siteUrl}/opengraph-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "YER6 Zemin Güçlendirme, Jet Grout ve Fore Kazık",
    template: "%s | YER6"
  },
  description:
    "YER6; zemin güçlendirme, zemin iyileştirme, jet grout, fore kazık, DSM zemin iyileştirme, enjeksiyon ve temel güçlendirme çözümleri sunar.",
  keywords: [
    "zemin güçlendirme",
    "jet grout",
    "DSM",
    "deep soil mixing",
    "fore kazık",
    "mini kazık",
    "enjeksiyon",
    "temel güçlendirme",
    "deprem bölgesi zemin güçlendirme",
    "ankraj",
    "iksa sistemleri",
    "geoteknik mühendislik",
    "YER6"
  ],
  alternates: {
    languages: {
      tr: "/",
      en: "/?lang=en",
      ar: "/?lang=ar"
    }
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" }
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }]
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "YER6",
    title: "YER6 Zemin Güçlendirme, Jet Grout ve Fore Kazık",
    description:
      "Zemin güçlendirme, zemin iyileştirme, jet grout, DSM, fore kazık, enjeksiyon ve temel güçlendirme projelerinde mühendislik odaklı saha uygulaması.",
    images: [
      {
        url: openGraphImage,
        width: 1200,
        height: 630,
        alt: "YER6 zemin güçlendirme ve jeoteknik mühendislik logosu"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "YER6 Zemin Güçlendirme",
    description: "Jet grout, DSM zemin iyileştirme, fore kazık, enjeksiyon ve temel güçlendirme çözümleri.",
    images: [openGraphImage]
  }
};

export const viewport: Viewport = {
  themeColor: "#070707",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "EngineeringService"],
  name: "YER6 Zemin Güçlendirme ve Jeoteknik Mühendislik",
  url: siteUrl,
  image: openGraphImage,
  priceRange: "$$",
  areaServed: ["TR", "EU", "MENA"],
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country
  },
  telephone: siteConfig.phone.display,
  email: siteConfig.email,
  serviceType: [
    "Jet Grout",
    "Deep Soil Mixing",
    "Bored Piling",
    "Mini Piling",
    "Ground Anchors",
    "Shoring Systems",
    "Geotechnical Consulting"
  ],
  slogan: "Geleceğin Yapıları Güçlü Zeminlerle Başlar"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body>
        <Script
          id="yer6-organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <div className="noise" />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
