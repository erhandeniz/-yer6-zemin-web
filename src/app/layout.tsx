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
    default: "YER6 Zemin Güçlendirme, Jet Grout ve Fore Kazık | Ankara",
    template: "%s | YER6 Zemin Mühendislik"
  },
  description:
    "YER6; zemin güçlendirme, zemin iyileştirme, jet grout, fore kazık, DSM, mini kazık, ankraj ve iksa sistemleri alanında Türkiye geneli saha uygulaması sunar.",
  keywords: [
    "zemin güçlendirme",
    "zemin iyileştirme",
    "jet grout",
    "jet grout nedir",
    "DSM",
    "deep soil mixing",
    "fore kazık",
    "fore kazık nedir",
    "mini kazık",
    "enjeksiyon",
    "temel güçlendirme",
    "deprem bölgesi zemin güçlendirme",
    "ankraj",
    "iksa sistemleri",
    "kazı destek sistemi",
    "geoteknik mühendislik",
    "sıvılaşma zemin güçlendirme",
    "YER6",
    "Ankara zemin güçlendirme"
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
    siteName: "YER6 Zemin Mühendislik",
    title: "YER6 Zemin Güçlendirme, Jet Grout ve Fore Kazık | Ankara",
    description:
      "Zemin güçlendirme, zemin iyileştirme, jet grout, DSM, fore kazık, mini kazık, ankraj ve iksa sistemleri alanında mühendislik odaklı saha uygulaması.",
    images: [
      {
        url: openGraphImage,
        width: 1200,
        height: 630,
        alt: "YER6 zemin güçlendirme ve jeoteknik mühendislik"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "YER6 Zemin Güçlendirme | Jet Grout, Fore Kazık, DSM",
    description: "Jet grout, DSM zemin iyileştirme, fore kazık, mini kazık, ankraj, iksa sistemleri. Türkiye geneli saha uygulaması.",
    images: [openGraphImage]
  }
};

export const viewport: Viewport = {
  themeColor: "#070707",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "YER6 Zemin Güçlendirme ve Jeoteknik Mühendislik",
  url: siteUrl,
  inLanguage: "tr-TR",
  description: "Jet grout, DSM, fore kazık, mini kazık, ankraj ve iksa sistemleri alanında zemin güçlendirme hizmetleri.",
  publisher: { "@id": `${siteUrl}/#organization` }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "EngineeringService"],
  "@id": `${siteUrl}/#organization`,
  name: "YER6 Zemin Güçlendirme ve Jeoteknik Mühendislik",
  alternateName: "YER6",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    "@id": `${siteUrl}/#logo`,
    url: `${siteUrl}/icon.png`,
    width: 512,
    height: 512,
    caption: "YER6 Zemin Mühendislik"
  },
  image: openGraphImage,
  description: "Zemin güçlendirme, zemin iyileştirme, jet grout, fore kazık, DSM, mini kazık, ankraj ve iksa sistemleri alanında mühendislik odaklı saha uygulaması. Ankara merkezli, Türkiye geneli hizmet.",
  foundingDate: "2016",
  priceRange: "$$",
  currenciesAccepted: "TRY",
  areaServed: [{ "@type": "Country", name: "Türkiye" }],
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.7826,
    longitude: 32.8597
  },
  telephone: siteConfig.phone.display,
  email: siteConfig.email,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.phone.display,
      contactType: "customer service",
      areaServed: "TR",
      availableLanguage: ["Turkish", "English"]
    }
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Zemin Güçlendirme Hizmetleri",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Jet Grout Zemin İyileştirme" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "DSM Deep Soil Mixing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fore Kazık" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mini Kazık" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ankraj Sistemleri" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "İksa Sistemleri" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Zemin İyileştirme" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Geoteknik Danışmanlık" } }
    ]
  },
  sameAs: ["https://www.linkedin.com/company/yer6zemin"],
  slogan: "Geleceğin Yapıları Güçlü Zeminlerle Başlar"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body>
        <Script
          id="yer6-website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
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
