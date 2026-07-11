import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";
import { localBusinessSchema } from "@/lib/seo";
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
  ...(siteConfig.googleSiteVerification
    ? { verification: { google: siteConfig.googleSiteVerification } }
    : {}),
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
  name: "YER6 Zemin Mühendislik",
  url: siteUrl,
  inLanguage: "tr-TR",
  description: "Jet grout, DSM, fore kazık, mini kazık, ankraj ve iksa sistemleri alanında zemin güçlendirme hizmetleri.",
  publisher: { "@id": `${siteUrl}/#organization` }
};

const organizationSchema = localBusinessSchema();

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script
          id="yer6-website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          id="yer6-organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {siteConfig.gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${siteConfig.gaMeasurementId}');
              `}
            </Script>
          </>
        ) : null}
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('yer6-theme');
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `
          }}
        />
        <div className="noise" />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
