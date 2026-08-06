import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";
import { DeferredCalculator } from "@/components/DeferredCalculator";
import { localBusinessSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";

const siteUrl = siteConfig.siteUrl;
const openGraphImage = `${siteUrl}/opengraph-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "YER6 Zemin Güçlendirme | Jet Grout, DSM ve Fore Kazık",
    template: "%s | YER6 Zemin Güçlendirme Geoteknik Mühendislik"
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
  authors: [{ name: siteConfig.companyName, url: siteUrl }],
  creator: siteConfig.companyName,
  publisher: siteConfig.companyName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  other: {
    copyright: `© 2026 ${siteConfig.companyName}. Tüm hakları saklıdır.`,
    author: siteConfig.companyName,
    "rights-standard": `${siteUrl}/kullanim-sartlari/`
  },
  ...(siteConfig.googleSiteVerification || siteConfig.yandexVerification
    ? {
        verification: {
          ...(siteConfig.googleSiteVerification ? { google: siteConfig.googleSiteVerification } : {}),
          ...(siteConfig.yandexVerification ? { yandex: siteConfig.yandexVerification } : {})
        }
      }
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
    siteName: "YER6 Zemin Güçlendirme Geoteknik Mühendislik",
    title: "YER6 Zemin Güçlendirme | Jet Grout, DSM ve Fore Kazık",
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
  name: "YER6 Zemin Güçlendirme Geoteknik Mühendislik",
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
        {/* LCP hızlandırma: mobil hero görseli erken keşfedilsin diye önceden
            yüklenir. imageSrcSet/imageSizes sayesinde tarayıcı yalnızca ihtiyacı
            olan boyutu indirir; masaüstünde (min-width:768px) indirilmez. */}
        <link
          rel="preload"
          as="image"
          type="image/avif"
          href="/images/site/yer6-construction-hero-640.avif"
          imageSrcSet="/images/site/yer6-construction-hero-640.avif 640w, /images/site/yer6-construction-hero-768.avif 768w, /images/site/yer6-construction-hero-960.avif 960w"
          imageSizes="100vw"
          media="(max-width: 767px)"
          fetchPriority="high"
        />
        <link rel="license" href={`${siteUrl}/kullanim-sartlari/`} />
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
        {siteConfig.gaMeasurementId || siteConfig.yandexMetricaId ? (
          <script
            id="yer6-deferred-analytics"
            dangerouslySetInnerHTML={{
              __html: `
                (function () {
                  var loaded = false;
                  var events = ["pointerdown", "keydown", "touchstart", "scroll"];
                  var gaId = ${JSON.stringify(siteConfig.gaMeasurementId || "")};
                  var yandexId = ${JSON.stringify(siteConfig.yandexMetricaId || "")};

                  function cleanup() {
                    events.forEach(function (event) {
                      window.removeEventListener(event, loadAnalytics);
                    });
                  }

                  function loadAnalytics() {
                    if (loaded) return;
                    loaded = true;
                    cleanup();

                    if (gaId) {
                      window.dataLayer = window.dataLayer || [];
                      window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
                      window.gtag("js", new Date());
                      window.gtag("config", gaId);
                      var gaScript = document.createElement("script");
                      gaScript.async = true;
                      gaScript.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(gaId);
                      document.head.appendChild(gaScript);
                    }

                    if (yandexId) {
                      window.ym = window.ym || function () {
                        (window.ym.a = window.ym.a || []).push(arguments);
                      };
                      window.ym.l = Number(new Date());
                      window.ym(Number(yandexId), "init", {
                        ssr: true,
                        webvisor: true,
                        clickmap: true,
                        ecommerce: "dataLayer",
                        accurateTrackBounce: true,
                        trackLinks: true
                      });
                      var yandexScript = document.createElement("script");
                      yandexScript.async = true;
                      yandexScript.src = "https://mc.yandex.ru/metrika/tag.js?id=" + encodeURIComponent(yandexId);
                      document.head.appendChild(yandexScript);
                    }
                  }

                  events.forEach(function (event) {
                    window.addEventListener(event, loadAnalytics, { once: true, passive: true });
                  });
                  window.setTimeout(loadAnalytics, 12000);
                })();
              `
            }}
          />
        ) : null}
        {siteConfig.yandexMetricaId ? (
          <noscript>
            <div>
              <img
                src={`https://mc.yandex.ru/watch/${siteConfig.yandexMetricaId}`}
                style={{ position: "absolute", left: "-9999px" }}
                alt=""
              />
            </div>
          </noscript>
        ) : null}
      </head>
      <body>
        {/* Telif izleme imzasi (canary) - birebir kopyalanan sitelerde bu imza tasinir ve orjinalin YER6 oldugunu kanitlar. Kaldirmayin. */}
        <div
          aria-hidden="true"
          hidden
          style={{ display: "none" }}
          data-yer6-owner="YER6-Zemin-Guclendirme-Geoteknik-Muhendislik"
          data-yer6-origin="https://www.yer6zemin.com.tr"
          data-yer6-signature="y6z-2026-telif-8f3ac91d-yer6zemin-orjinal"
        />
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
        <DeferredCalculator />
      </body>
    </html>
  );
}
