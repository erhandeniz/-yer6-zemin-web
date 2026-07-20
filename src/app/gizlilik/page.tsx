import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

const pageUrl = `${siteConfig.siteUrl}/gizlilik/`;

export const metadata: Metadata = {
  title: "Gizlilik Politikası ve KVKK Aydınlatma Metni",
  description:
    "YER6 Zemin Güçlendirme kişisel verilerin işlenmesi, saklanması ve korunmasına ilişkin gizlilik politikası ve 6698 sayılı KVKK aydınlatma metni.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Gizlilik Politikası ve KVKK Aydınlatma Metni | YER6",
    description: "Kişisel verilerin işlenmesi, çerezler, analytics ve KVKK kapsamındaki haklarınız.",
    url: pageUrl
  }
};

const updated = "20 Temmuz 2026";

export default function GizlilikPage() {
  return (
    <main className="relative overflow-hidden px-5 pb-28 pt-40">
      <div className="absolute inset-0 technical-mesh opacity-70" />
      <div className="relative mx-auto max-w-4xl">
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-14 bg-gold-300 gold-line" />
          <span className="text-xs font-semibold uppercase tracking-[0.36em] text-gold-200">Yasal</span>
        </div>
        <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Gizlilik Politikası ve KVKK Aydınlatma Metni
        </h1>
        <p className="mt-6 text-sm text-white/50">Son güncelleme: {updated}</p>

        <div className="mt-12 space-y-10 text-[15px] leading-8 text-white/72">
          <section>
            <h2 className="text-2xl font-semibold text-white">1. Veri Sorumlusu</h2>
            <p className="mt-4">
              6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca veri sorumlusu{" "}
              <strong className="text-white">{siteConfig.companyName}</strong>'dir. İletişim:{" "}
              <a href={siteConfig.emailHref} className="text-gold-100 underline">{siteConfig.email}</a>,{" "}
              {siteConfig.address.streetAddress}, {siteConfig.address.postalLine}.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">2. İşlenen Kişisel Veriler</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-gold-200">
              <li><strong className="text-white">İletişim formu verileri:</strong> ad-soyad, telefon, e-posta ve mesaj içeriğiniz — yalnızca siz gönderdiğinizde.</li>
              <li><strong className="text-white">Kullanım verileri:</strong> ziyaret ettiğiniz sayfalar, cihaz/tarayıcı bilgisi ve anonim davranış verileri (Google Analytics ve Yandex Metrica aracılığıyla).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">3. İşleme Amaçları ve Hukuki Sebep</h2>
            <p className="mt-4">
              Verileriniz; teklif ve bilgi taleplerinizi yanıtlamak, hizmet sunmak, siteyi iyileştirmek
              ve yasal yükümlülükleri yerine getirmek amacıyla, KVKK m.5 kapsamında açık rızanıza ve
              meşru menfaate dayanılarak işlenir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">4. Çerezler (Cookies)</h2>
            <p className="mt-4">
              Site, zorunlu işlevler ve anonim ölçümleme (Google Analytics, Yandex Metrica) için çerez
              kullanır. Tarayıcı ayarlarından çerezleri sınırlandırabilir veya silebilirsiniz; bu durumda
              bazı özellikler kısıtlanabilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">5. Aktarım ve Saklama</h2>
            <p className="mt-4">
              Analytics hizmetleri kapsamında bazı anonim veriler yurt dışındaki sağlayıcı sunucularında
              işlenebilir. Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve ilgili
              mevzuatın öngördüğü sürelerle sınırlı olarak saklanır, ardından silinir veya anonim hâle
              getirilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">6. KVKK Kapsamındaki Haklarınız</h2>
            <p className="mt-4">
              KVKK m.11 uyarınca; verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme,
              düzeltilmesini veya silinmesini isteme ve işlemeye itiraz etme haklarına sahipsiniz.
              Taleplerinizi{" "}
              <a href={siteConfig.emailHref} className="text-gold-100 underline">{siteConfig.email}</a>{" "}
              adresine iletebilirsiniz.
            </p>
            <p className="mt-8">
              <Link href="/kullanim-sartlari" className="text-gold-100 underline">Kullanım Şartları &amp; Telif Bildirimi</Link>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
