import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { orderedCityPages } from "@/lib/cityContent";
import { siteConfig } from "@/lib/siteConfig";

const pageUrl = `${siteConfig.siteUrl}/sehirler/`;

export const metadata: Metadata = {
  title: "Şehirlere Göre Zemin Güçlendirme Hizmetleri",
  description:
    "Türkiye genelinde 81 il için jet grout, DSM, fore kazık, enjeksiyon ve temel güçlendirme dahil zemin güçlendirme ve zemin iyileştirme hizmetleri.",
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: "Şehirlere Göre Zemin Güçlendirme Hizmetleri | YER6",
    description:
      "Öncelikli şehirlerde jet grout, DSM zemin iyileştirme, fore kazık, enjeksiyon ve temel güçlendirme çözümleri.",
    url: pageUrl
  }
};

export default function CitiesPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 pb-20 pt-40">
        <div className="absolute inset-0 technical-mesh opacity-80" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-14 bg-gold-300 gold-line" />
              <span className="text-xs font-semibold uppercase tracking-[0.36em] text-gold-200">Şehirler</span>
            </div>
            <h1 className="text-balance text-5xl font-semibold leading-tight text-white md:text-7xl">
              Şehirlere göre zemin güçlendirme ve zemin iyileştirme hizmetleri.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/64">
              Öncelikli şehirlerde zemin koşulu, deprem riski, temel tipi ve saha lojistiğine göre jet grout, DSM, fore kazık, enjeksiyon ve temel güçlendirme çözümleri değerlendirilir.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {orderedCityPages.map((page) => (
            <Link
              key={page.slug}
              href={`/sehirler/${page.slug}`}
              className="group block rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 transition hover:border-gold-300/30 hover:bg-white/[0.07]"
            >
              <MapPin className="h-7 w-7 text-gold-200" />
              <h2 className="mt-6 text-2xl font-semibold text-white">{page.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/62">{page.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-100">
                İncele <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
