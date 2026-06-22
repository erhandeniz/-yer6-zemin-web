import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";
import { siteConfig } from "@/lib/siteConfig";

const siteUrl = siteConfig.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "YER6 Zemin Güçlendirme ve Jeoteknik Mühendislik",
    template: "%s | YER6"
  },
  description:
    "YER6; jet grout, DSM, fore kazık, mini kazık, ankraj, iksa sistemleri ve geoteknik danışmanlık alanlarında premium zemin güçlendirme çözümleri sunar.",
  keywords: [
    "zemin güçlendirme",
    "jet grout",
    "DSM",
    "deep soil mixing",
    "fore kazık",
    "mini kazık",
    "ankraj",
    "iksa sistemleri",
    "geoteknik mühendislik",
    "YER6"
  ],
  alternates: {
    canonical: "/",
    languages: {
      tr: "/",
      en: "/?lang=en",
      ar: "/?lang=ar"
    }
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "YER6",
    title: "YER6 Zemin Güçlendirme ve Jeoteknik Mühendislik",
    description:
      "Geleceğin yapıları güçlü zeminlerle başlar. Jet grout, DSM, piling, ankraj ve iksa sistemlerinde premium mühendislik.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "YER6 premium geotechnical engineering operations"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "YER6 Zemin Güçlendirme",
    description: "Premium geoteknik mühendislik, zemin güçlendirme ve temel sistemleri."
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
  "@type": "EngineeringService",
  name: "YER6 Zemin Güçlendirme ve Jeoteknik Mühendislik",
  url: siteUrl,
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
