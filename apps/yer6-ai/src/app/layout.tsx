import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "https://ai.yer6zemin.com.tr"),
  title: {
    default: "YER6 AI | Geoteknik Mühendislik Zekâsı",
    template: "%s | YER6 AI"
  },
  description:
    "Proje belgeleri, zemin iyileştirme analizleri ve mühendislik kararları için AI destekli geoteknik çalışma alanı.",
  applicationName: "YER6 AI",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "YER6 AI",
    title: "YER6 AI | Geoteknik Mühendislik Zekâsı",
    description: "Zemin mühendisliği kararları için profesyonel AI çalışma alanı."
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#080808",
  colorScheme: "dark"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
