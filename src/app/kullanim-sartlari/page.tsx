import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

const pageUrl = `${siteConfig.siteUrl}/kullanim-sartlari/`;

export const metadata: Metadata = {
  title: "Kullanım Şartları ve Telif Bildirimi",
  description:
    "YER6 Zemin Güçlendirme web sitesinin içerik, tasarım ve yazılımına ilişkin telif hakkı, fikri mülkiyet ve kullanım şartları. İzinsiz kopyalama ve veri kazıma (scraping) yasaktır.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Kullanım Şartları ve Telif Bildirimi | YER6",
    description:
      "Sitenin içerik, tasarım ve yazılımı 5846 sayılı FSEK kapsamında korunmaktadır. İzinsiz kopyalama, çoğaltma ve otomatik veri kazıma yasaktır.",
    url: pageUrl
  }
};

const updated = "20 Temmuz 2026";

export default function KullanimSartlariPage() {
  return (
    <main className="relative overflow-hidden px-5 pb-28 pt-40">
      <div className="absolute inset-0 technical-mesh opacity-70" />
      <div className="relative mx-auto max-w-4xl">
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-14 bg-gold-300 gold-line" />
          <span className="text-xs font-semibold uppercase tracking-[0.36em] text-gold-200">Yasal</span>
        </div>
        <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Kullanım Şartları ve Telif Bildirimi
        </h1>
        <p className="mt-6 text-sm text-white/50">Son güncelleme: {updated}</p>

        <div className="mt-12 space-y-10 text-[15px] leading-8 text-white/72">
          <section>
            <h2 className="text-2xl font-semibold text-white">1. Fikri Mülkiyet ve Telif Hakkı</h2>
            <p className="mt-4">
              Bu web sitesinde yer alan tüm içerikler — metinler, teknik makaleler, bilgi bankası
              yazıları, görseller, fotoğraflar, grafikler, animasyonlar, hesaplama araçları, arayüz
              tasarımı, kaynak kodu, yazılım mimarisi ve bunların düzenlenme biçimi dâhil — münhasıran{" "}
              <strong className="text-white">{siteConfig.companyName}</strong>'e aittir ve 5846 sayılı
              Fikir ve Sanat Eserleri Kanunu (FSEK) ile Bern Sözleşmesi kapsamında korunmaktadır. Tüm
              hakları saklıdır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">2. İzin Verilmeyen Kullanımlar</h2>
            <p className="mt-4">Eser sahibinin önceden yazılı izni olmaksızın aşağıdakiler kesinlikle yasaktır:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-gold-200">
              <li>İçeriğin, tasarımın veya kaynak kodun tamamının ya da bir kısmının kopyalanması, çoğaltılması, yeniden yayımlanması veya dağıtılması.</li>
              <li>Site içeriğinin otomatik araçlarla (bot, crawler, scraper) toplanması, indekslenmesi veya kazınması (data scraping / harvesting).</li>
              <li>İçeriğin yapay zeka modeli eğitimi, veri kümesi oluşturma veya benzeri amaçlarla kullanılması.</li>
              <li>Tasarımın, arayüzün veya içerik yapısının bir başka site ya da ürün için taklit edilmesi, uyarlanması veya türev eser üretilmesi.</li>
              <li>Görsellerin başka sitelerde doğrudan bağlantı (hotlink) ile kullanılması.</li>
              <li>Telif, marka, imza veya kaynak bilgilerinin kaldırılması, gizlenmesi ya da değiştirilmesi.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">3. Sınırlı Kullanım İzni</h2>
            <p className="mt-4">
              Ziyaretçiler siteyi yalnızca kişisel ve bilgilendirme amacıyla görüntüleyebilir. Kaynak
              olarak <strong className="text-white">{siteConfig.companyName}</strong> açıkça belirtilmek
              ve ilgili sayfaya bağlantı verilmek kaydıyla kısa alıntılar yapılabilir; bunun dışındaki
              her kullanım yazılı izne tabidir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">4. İhlal ve Yaptırımlar</h2>
            <p className="mt-4">
              İzinsiz kullanım tespit edildiğinde, FSEK kapsamında ihtarname gönderilmesi, erişimin
              engellenmesi (takedown), maddi ve manevi tazminat davası ile cezai başvuru dâhil tüm
              hukuki yollara başvurulur. Sitenin içeriğine, sahipliği ve önceliği ispatlayan gizli
              dijital imzalar (canary) gömülüdür; birebir kopyalar bu imzalarla tespit edilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">5. Sorumluluğun Sınırlandırılması</h2>
            <p className="mt-4">
              Sitedeki teknik bilgiler genel bilgilendirme amaçlıdır ve projeye özel mühendislik
              danışmanlığı yerine geçmez. Uygulama kararları, sahaya özel etüt ve tasarım gerektirir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">6. İletişim</h2>
            <p className="mt-4">
              Telif, kullanım izni ve hukuki bildirimler için:{" "}
              <a href={siteConfig.emailHref} className="text-gold-100 underline">{siteConfig.email}</a> ·{" "}
              <a href={siteConfig.phone.href} className="text-gold-100 underline">{siteConfig.phone.display}</a>
            </p>
            <p className="mt-8">
              <Link href="/gizlilik" className="text-gold-100 underline">Gizlilik &amp; KVKK Aydınlatma Metni</Link>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
