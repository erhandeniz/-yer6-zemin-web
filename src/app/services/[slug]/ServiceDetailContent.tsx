"use client";

import Link from "next/link";
import { Calculator, CheckCircle2, ChevronDown, ChevronUp, Phone } from "lucide-react";
import { getToolForService } from "@/lib/calculators";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { cityPages } from "@/lib/cityContent";
import { getServiceBySlug, projects } from "@/lib/content";
import { publishedKnowledgeArticles } from "@/data/knowledge";
import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/lib/siteConfig";
import { parseMarkdownLinks } from "@/components/LinkParser";
import { YouTubeVideoPlayer } from "@/components/YouTubeVideoPlayer";

const serviceArticleMap: Record<string, string[]> = {
  "jet-grout": ["yer-alti-zemin-iyilestirme", "jet-grout-nedir", "jet-grout-hangi-zeminlerde-uygulanir", "jet-grout-kalite-kontrol"],
  dsm: ["yer-alti-zemin-iyilestirme", "dsm-nasil-uygulanir", "dsm-malzeme-secinimi", "jet-grout-ve-dsm-farki"],
  "fore-kazik": ["yer-alti-zemin-iyilestirme", "fore-kazik-nedir", "fore-kazik-uygulama-asamalari", "fore-kazik-avantajlari"],
  "mini-kazik": ["fore-kazik-nedir", "saha-denetimi-numune-testleri", "zemin-iyilestirme-planlama"],
  ankraj: ["zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri", "zemin-iyilestirme-planlama"],
  "iksa-sistemleri": ["zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri", "zemin-kalite-kontrol-standartlari"],
  "zemin-iyilestirme": ["yer-alti-zemin-iyilestirme", "zemin-iyilestirme-yontemleri", "zemin-iyilestirme-planlama", "zemin-iyilestirme-risk-yonetimi"],
  "zemin-guclendirme": ["temel-alti-zemin-guclendirme", "zemin-iyilestirme-yontemleri", "sivilasma-riskine-karsi-zemin-guclendirme", "zemin-kalite-kontrol-standartlari"],
  "geoteknik-danismanlik": ["zemin-iyilestirme-planlama", "zemin-kalite-kontrol-standartlari", "saha-denetimi-numune-testleri"],
  "zemin-civisi": ["kazi-destek-sistemleri-nedir", "zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri"],
  "puskurtme-beton": ["kazi-destek-sistemleri-nedir", "zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri"],
  "kazik-yukleme-testleri": ["fore-kazik-nedir", "saha-denetimi-numune-testleri", "zemin-kalite-kontrol-standartlari"],
  "zemin-etudu": ["zemin-iyilestirme-planlama", "sivilasma-riskine-karsi-zemin-guclendirme", "zemin-kalite-kontrol-standartlari"],
  "tas-kolon": ["zemin-iyilestirme-yontemleri", "sivilasma-riskine-karsi-zemin-guclendirme", "zemin-iyilestirme-planlama"],
  "diafram-duvar": ["kazi-destek-sistemleri-nedir", "zemin-iyilestirme-risk-yonetimi", "fore-kazik-nedir"],
  "bina-alti-jet-grout": ["temel-alti-zemin-guclendirme", "binalari-yikmadan-zemin-guclendirme", "jet-grout-nedir"],
  "cfa-kazik": ["fore-kazik-nedir", "fore-kazik-sureklilik-ve-yukleme-testleri", "zemin-iyilestirme-risk-yonetimi"],
  "deep-soil-mixing": ["yer-alti-zemin-iyilestirme", "dsm-nasil-uygulanir", "dsm-malzeme-secinimi", "jet-grout-ve-dsm-farki"]
};

const serviceHubLinks: Partial<Record<string, { href: string; label: string }[]>> = {
  "zemin-iyilestirme": [
    { href: "/knowledge/deprem/", label: "Deprem, sıvılaşma ve zemin güvenliği bilgi merkezi" }
  ],
  "deep-soil-mixing": [
    { href: "/services/dsm/", label: "Ana DSM zemin iyileştirme hizmet sayfası" }
  ],
  "cfa-kazik": [
    { href: "/services/zemin-guclendirme/", label: "Zemin güçlendirme yöntemleri ana hizmet sayfası" }
  ]
};

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden">
      <button
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-white/90 hover:text-white transition"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-medium">{question}</span>
        {open ? <ChevronUp className="h-4 w-4 shrink-0 text-gold-200" /> : <ChevronDown className="h-4 w-4 shrink-0 text-gold-200" />}
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm leading-7 text-white/65">
          {answer}
        </div>
      )}
    </div>
  );
}

export function ServiceDetailContent({ slug }: { slug: string }) {
  const { t } = useLanguage();
  const service = getServiceBySlug(slug);

  if (!service) return null;

  // Bu hizmete karşılık gelen hesaplama aracı (yoksa kart gösterilmez).
  const calculatorTool = getToolForService(service.slug);
  const relatedArticles = (serviceArticleMap[service.slug] ?? [])
    .map((articleSlug) => publishedKnowledgeArticles.find((article) => article.slug === articleSlug))
    .filter((article): article is (typeof publishedKnowledgeArticles)[number] => Boolean(article));
  const relatedHubLinks = serviceHubLinks[service.slug] ?? [];
  const serviceCities = cityPages.filter((page) => page.serviceSlugs.includes(service.slug)).slice(0, 6);
  const relatedProjects = projects.filter((project) => {
    if (!("relatedServiceSlugs" in project)) return false;
    return (project.relatedServiceSlugs as string[]).includes(service.slug);
  });

  return (
    <main>
      {/* H1 + Hero */}
      <PageHero
        eyebrowKey="servicesEyebrow"
        titleKey={`${service.key}_title`}
        copyKey={`${service.key}_detail`}
      />

      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">

            {/* ── Ana içerik sütunu ── */}
            <div className="space-y-10">

              {/* Giriş paragrafı */}
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
                <h2 className="text-3xl font-semibold text-white">{t(`${service.key}_title`)} Nedir?</h2>
                <p className="mt-6 text-lg leading-8 text-white/70">{parseMarkdownLinks(t(`${service.key}_summary`))}</p>
                <p className="mt-4 text-base leading-7 text-white/65">{parseMarkdownLinks(t(`${service.key}_detail`))}</p>
              </div>

              {/* Uygulama Alanları */}
              {"applications" in service && service.applications && service.applications.length > 0 && (
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
                  <h2 className="text-2xl font-semibold text-white">Uygulama Alanları</h2>
                  <p className="mt-3 text-sm text-white/55">
                    {t(`${service.key}_title`)} hangi projelerde ve zemin koşullarında uygulanır?
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {(service.applications as string[]).map((item, i) => (
                      <li key={i} className="flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-3">
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-gold-200" />
                        <span className="text-sm text-white/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Avantajlar */}
              {"advantages" in service && service.advantages && service.advantages.length > 0 && (
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
                  <h2 className="text-2xl font-semibold text-white">Avantajlar</h2>
                  <p className="mt-3 text-sm text-white/55">
                    {t(`${service.key}_title`)} uygulamasının teknik ve operasyonel üstünlükleri
                  </p>
                  <ul className="mt-6 space-y-3">
                    {(service.advantages as string[]).map((item, i) => (
                      <li key={i} className="flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-3">
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-gold-200" />
                        <span className="text-sm text-white/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Uygulama Süreci */}
              {"processSteps" in service && service.processSteps && service.processSteps.length > 0 && (
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
                  <h2 className="text-2xl font-semibold text-white">Uygulama Süreci</h2>
                  <p className="mt-3 text-sm text-white/55">
                    Sahada izlenen adım adım {t(`${service.key}_title`)} uygulama süreci
                  </p>
                  <ol className="mt-6 space-y-4">
                    {(service.processSteps as { title: string; description: string }[]).map((step, i) => (
                      <li key={i} className="flex gap-4 rounded-2xl bg-white/5 px-5 py-4">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-300/20 text-xs font-bold text-gold-200">
                          {i + 1}
                        </span>
                        <div>
                          <h3 className="font-semibold text-white">{step.title}</h3>
                          <p className="mt-1 text-sm leading-6 text-white/65">{step.description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Teknik Değerlendirme */}
              {"technicalNote" in service && service.technicalNote && (
                <div className="rounded-[2rem] border border-gold-300/20 bg-gold-300/[0.06] p-8">
                  <h2 className="text-2xl font-semibold text-white">Teknik Değerlendirme</h2>
                  <p className="mt-4 text-sm leading-7 text-white/70">
                    {parseMarkdownLinks(service.technicalNote as string)}
                  </p>
                </div>
              )}

              {/* Teknik Özellikler */}
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
                <SectionHeader
                  eyebrow={t("serviceTechSpecs")}
                  title={t("serviceTechSpecs")}
                  copy={t("serviceTechSpecsCopy")}
                  align="left"
                />
                <ul className="mt-8 space-y-3 text-white/70">
                  {[1, 2, 3].map((n) => (
                    <li key={n} className="rounded-2xl bg-white/5 px-4 py-3 text-sm">
                      {t(`${service.key}_spec${n}`)}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fore Kazık & Ağır Geoteknik Makine Parkuru İndeksleme Kartı (Yandex & Google #1 Engine) */}
              {service.slug === "fore-kazik" && (
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
                  <h2 className="text-2xl font-semibold text-white">Fore Kazık Delgi Makinesi Parkurumuz</h2>
                  <p className="mt-3 text-sm text-white/55">
                    Derin temel, iksa ve ağır geoteknik projeleriniz için YER6 bünyesindeki yüksek torklu rotary delgi makineleri
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <h3 className="font-semibold text-white text-base">Bauer BG 45 BS 95</h3>
                      <p className="mt-1 text-xs text-gold-200">461 kNm Tork · 100 m Delgi Derinliği</p>
                      <p className="mt-2 text-xs leading-5 text-white/65">
                        Büyük çaplı kılıflı/kılıfsız fore kazık, baret kazık ve derin temeller için yüksek kapasiteli Alman mühendisliği.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <h3 className="font-semibold text-white text-base">Bauer BG 28 H PremiumLine</h3>
                      <p className="mt-1 text-xs text-gold-200">277 kNm Tork · 65,7 m Delgi Derinliği</p>
                      <p className="mt-2 text-xs leading-5 text-white/65">
                        Orta ve ağır zemin koşullarında yüksek imalat hızı ve hassas dikey tolerans sağlayan rotary delgi makinesi.
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 text-right">
                    <Link href="/equipment-fleet" className="inline-flex items-center gap-2 text-xs font-semibold text-gold-200 hover:text-gold-100">
                      Tüm Makine Parkurunu İncele &rarr;
                    </Link>
                  </div>
                </div>
              )}

              {/* ZEMİN İYİLEŞTİRME KÜRESEL GEOTEKNİK MEGA-HUB (Google #1 Dominance Section) */}
              {service.slug === "zemin-iyilestirme" && (
                <div className="space-y-10">
                  {/* 1. Geoteknik Zemin İyileştirme Karşılaştırma Matrisi */}
                  <div className="rounded-[2rem] border border-gold-300/30 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl">
                    <div className="flex items-center gap-3">
                      <span className="flex h-3 w-3 rounded-full bg-gold-300 animate-pulse" />
                      <h2 className="text-2xl font-bold tracking-tight text-white">
                        Uluslararası Zemin İyileştirme Yöntemleri Karşılaştırma Matrisi
                      </h2>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/65">
                      TBDY 2018, Eurocode 7, USACE ve ISSMGE şartnamelerine göre projelendirilen başlıca zemin iyileştirme ve iksa yöntemlerinin teknik parametreleri:
                    </p>

                    <div className="mt-6 overflow-x-auto rounded-xl border border-white/10 bg-black/40">
                      <table className="w-full text-left text-xs text-white/80">
                        <thead className="border-b border-white/10 bg-white/10 text-white font-semibold">
                          <tr>
                            <th className="p-3.5">İyileştirme Yöntemi</th>
                            <th className="p-3.5">Çalışma Prensibi</th>
                            <th className="p-3.5">Uygun Zemin Türü</th>
                            <th className="p-3.5">Ana Hedef</th>
                            <th className="p-3.5">İmalat Hızı</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          <tr className="hover:bg-white/5 transition-colors">
                            <td className="p-3.5 font-bold text-gold-200">
                              <Link href="/services/jet-grout" className="hover:underline">Jet Grout (JG1/JG2)</Link>
                            </td>
                            <td className="p-3.5">400-600 Bar Yüksek Basınçlı Enjeksiyon</td>
                            <td className="p-3.5">Kil, Silt, İnce Kum (Tüm Zeminler)</td>
                            <td className="p-3.5">Taşıma Gücü + Su Kesme Perdesi</td>
                            <td className="p-3.5">250-400 m/gün</td>
                          </tr>
                          <tr className="hover:bg-white/5 transition-colors">
                            <td className="p-3.5 font-bold text-gold-200">
                              <Link href="/services/dsm" className="hover:underline">Deep Soil Mixing (DSM)</Link>
                            </td>
                            <td className="p-3.5">Mekanik Bıçaklı Çimento Karıştırma</td>
                            <td className="p-3.5">Yumuşak Kil, Gevşek Silt, Alüvyon</td>
                            <td className="p-3.5">Geniş Alan Oturma & Sıvılaşma Kontrolü</td>
                            <td className="p-3.5">350-500 m/gün</td>
                          </tr>
                          <tr className="hover:bg-white/5 transition-colors">
                            <td className="p-3.5 font-bold text-gold-200">
                              <Link href="/services/tas-kolon" className="hover:underline">Taş Kolon (Stone Column)</Link>
                            </td>
                            <td className="p-3.5">Titreşimli Kırmataş Dolgu (Vibro-Repl.)</td>
                            <td className="p-3.5">Gevşek Kum, Çakıl, Siltli Kum</td>
                            <td className="p-3.5">Sıvılaşma Önleme + Düşey Drenaj</td>
                            <td className="p-3.5">200-350 m/gün</td>
                          </tr>
                          <tr className="hover:bg-white/5 transition-colors">
                            <td className="p-3.5 font-bold text-gold-200">
                              <Link href="/services/fore-kazik" className="hover:underline">Fore Kazık (Derin Temel)</Link>
                            </td>
                            <td className="p-3.5">Rotary Delgi + Beton + Donatı Kalesi</td>
                            <td className="p-3.5">Her Türlü Zemin ve Kaya Katmanı</td>
                            <td className="p-3.5">Yüksek Ağır Yapı Yükü Transferi</td>
                            <td className="p-3.5">60-100 m/gün</td>
                          </tr>
                          <tr className="hover:bg-white/5 transition-colors">
                            <td className="p-3.5 font-bold text-gold-200">
                              <Link href="/services/mini-kazik" className="hover:underline">Mini Kazık (Underpinning)</Link>
                            </td>
                            <td className="p-3.5">Ø15-25 Delgi + Çelik Profil / Donatı</td>
                            <td className="p-3.5">Mevcut Bina Altı / Dar Sahalar</td>
                            <td className="p-3.5">Temel Güçlendirme & İksa</td>
                            <td className="p-3.5">100-180 m/gün</td>
                          </tr>
                          <tr className="hover:bg-white/5 transition-colors">
                            <td className="p-3.5 font-bold text-gold-200">
                              <Link href="/services/palplans" className="hover:underline">Palplanş (Çelik İksa)</Link>
                            </td>
                            <td className="p-3.5">Vibro Çakıcı Vinç ile Kenetli Profil</td>
                            <td className="p-3.5">Yeraltı Suyu Yüksek Alüvyon</td>
                            <td className="p-3.5">%100 Su Geçirimsiz Batardo Perdesi</td>
                            <td className="p-3.5">200-300 m²/gün</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 2. Zemin Türüne ve Problemlere Göre Yöntem Seçim Rehberi */}
                  <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
                    <h2 className="text-2xl font-bold tracking-tight text-white">
                      Hangi Zeminde Hangi İyileştirme Yöntemi Seçilmelidir?
                    </h2>
                    <p className="mt-3 text-sm text-white/60">
                      Geoteknik mühendisliğinde tek bir evrensel çözüm yoktur. Zemin sondaj raporundaki (SPT-N, CPT, atterberg limitleri) dane boyutu ve plastisiteye göre karar verilir:
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <h3 className="font-semibold text-gold-200 text-base">1. Ince Taneli Killi ve Siltli Zeminler</h3>
                        <p className="mt-2 text-xs leading-5 text-white/70">
                          Yüksek plastisite ve düşük geçirgenliğe sahip killi sahalarda <Link href="/services/dsm" className="text-gold-200 hover:underline font-medium">DSM (Derin Karıştırma)</Link> ve <Link href="/services/jet-grout" className="text-gold-200 hover:underline font-medium">Jet Grout</Link> birincil tercihtir. Çimento bağlayıcı mekanik olarak zeminle karıştırılarak serbest basınç dayanımı (UCS) 1.5 - 4.0 MPa seviyesine çıkarılır.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <h3 className="font-semibold text-gold-200 text-base">2. Gevşek Kumlu Zeminler & Sıvılaşma</h3>
                        <p className="mt-2 text-xs leading-5 text-white/70">
                          Deprem esnasında aşırı boşluk suyu basıncı artışıyla sıvılaşan kumlu ve çakıllı sahalarda <Link href="/services/tas-kolon" className="text-gold-200 hover:underline font-medium">Taş Kolon (Stone Column)</Link> uygulanır. Kırmataş dolgu hem zemini sıkıştırır hem de sönümleyici düşey dren görevi görür.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <h3 className="font-semibold text-gold-200 text-base">3. Mevcut Bina Altı & Kentsel Dönüşüm</h3>
                        <p className="mt-2 text-xs leading-5 text-white/70">
                          Mevcut yapıların temellerinde oturma ve çatlak meydana geldiğinde, binayı yıkmadan titreşimsiz elektrikli ünitelerle <Link href="/services/bina-alti-jet-grout" className="text-gold-200 hover:underline font-medium">Bina Altı Jet Grout</Link> veya mikro kazık (underpinning) enjeksiyonu yapılır.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <h3 className="font-semibold text-gold-200 text-base">4. Yeraltı Suyu Yüksek Derin Kazı İksaları</h3>
                        <p className="mt-2 text-xs leading-5 text-white/70">
                          Deniz veya nehir kenarı kazılarında suyun şantiyeye dolmasını önlemek için kesişen Jet Grout (secant grout) perdesi veya <Link href="/services/palplans" className="text-gold-200 hover:underline font-medium">Çelik Palplanş Batardo</Link> imalatı gerçekleştirilir.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 3. TBDY 2018 ve Uluslararası Kalite Kontrol Şartnameleri */}
                  <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
                    <h2 className="text-2xl font-bold tracking-tight text-white">
                      TBDY 2018 ve Kalite Kontrol Şartnamelerimiz
                    </h2>
                    <p className="mt-3 text-sm text-white/60">
                      YER6 Geoteknik, yapılan zemin iyileştirmelerini sadece bir hafriyat imalatı olarak değil, raporlanan bir mühendislik garantisi olarak teslim eder:
                    </p>

                    <div className="mt-6 space-y-3">
                      <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-200 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-white text-sm">Karot Alımı ve Serbest Basınç (UCS) Testleri</h3>
                          <p className="mt-1 text-xs text-white/65">
                            İmal edilen kolonlardan 7, 14 ve 28 günlük periyotlarda karot numunesi alınarak akredite laboratuvarda basma dayanımı (MPa) belgelenir.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-200 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-white text-sm">Saha Plaka Yükleme Deneyleri (Plate Load Test)</h3>
                          <p className="mt-1 text-xs text-white/65">
                            Kolon başlıkları üzerinde hidrolik krikolarla gerçek yükleme testleri yapılarak oturma miktarı ve zemin yatak katsayısı (ks) sahada doğrulanır.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-200 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-white text-sm">Data Logger ile Anlık Dijital Üretim Kaydı</h3>
                          <p className="mt-1 text-xs text-white/65">
                            Makine sensörlerimiz ile 600 Bar enjeksiyon basıncı, çimento debisi (L/dk) ve delgi derinliği eş zamanlı dijital olarak kaydedilir.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 4. YER6 Yapay Zeka Hesaplayıcı Buton Grubu */}
                  <div className="rounded-[2rem] border border-gold-300/30 bg-gold-300/[0.07] p-8">
                    <div className="flex items-start gap-4">
                      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gold-300/20 text-gold-200">
                        <Calculator className="size-6" />
                      </span>
                      <div>
                        <h2 className="text-2xl font-bold text-white">YER6 AI Zemin İyileştirme Hesaplama Merkezi</h2>
                        <p className="mt-2 text-sm leading-6 text-white/70">
                          Projenizin metrajını, çimento/donatı ihtiyacını ve makine süresini saha parametreleriyle anında hesaplayın:
                        </p>
                        <div className="mt-5 flex flex-wrap gap-3">
                          <Link
                            href="/hesaplama/jet-grout-maliyet-hesaplama/"
                            className="rounded-full bg-gold-300 px-4 py-2 text-xs font-bold text-obsidian transition hover:bg-gold-200"
                          >
                            Jet Grout Hesaplayıcı →
                          </Link>
                          <Link
                            href="/hesaplama/dsm-maliyet-hesaplama/"
                            className="rounded-full border border-gold-300/40 bg-white/5 px-4 py-2 text-xs font-bold text-white transition hover:bg-white/10"
                          >
                            DSM Hesaplayıcı →
                          </Link>
                          <Link
                            href="/hesaplama/fore-kazik-maliyet-hesaplama/"
                            className="rounded-full border border-gold-300/40 bg-white/5 px-4 py-2 text-xs font-bold text-white transition hover:bg-white/10"
                          >
                            Fore Kazık Hesaplayıcı →
                          </Link>
                          <Link
                            href="/hesaplama/palplans-maliyet-hesaplama/"
                            className="rounded-full border border-gold-300/40 bg-white/5 px-4 py-2 text-xs font-bold text-white transition hover:bg-white/10"
                          >
                            Palplanş Hesaplayıcı →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 5. Türkiye Geneli Şehir Ağı Bağlantıları */}
                  <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
                    <h2 className="text-xl font-bold text-white">Türkiye Geneli Zemin İyileştirme Operasyon Ağımız</h2>
                    <p className="mt-2 text-xs text-white/60">
                      Ankara merkezli makine parkımız ve uzman mühendis kadromuzla 81 ilde zemin iyileştirme uygulamaları gerçekleştiriyoruz:
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 text-xs text-white/70">
                      <Link href="/sehirler/istanbul-zemin-guclendirme" className="rounded-xl bg-white/5 p-2.5 hover:bg-white/10 hover:text-gold-200 transition">
                        → İstanbul Zemin İyileştirme
                      </Link>
                      <Link href="/sehirler/izmir-zemin-guclendirme" className="rounded-xl bg-white/5 p-2.5 hover:bg-white/10 hover:text-gold-200 transition">
                        → İzmir Zemin İyileştirme
                      </Link>
                      <Link href="/sehirler/ankara-zemin-guclendirme" className="rounded-xl bg-white/5 p-2.5 hover:bg-white/10 hover:text-gold-200 transition">
                        → Ankara Zemin İyileştirme
                      </Link>
                      <Link href="/sehirler/bursa-zemin-guclendirme" className="rounded-xl bg-white/5 p-2.5 hover:bg-white/10 hover:text-gold-200 transition">
                        → Bursa Zemin İyileştirme
                      </Link>
                      <Link href="/sehirler/kocaeli-zemin-guclendirme" className="rounded-xl bg-white/5 p-2.5 hover:bg-white/10 hover:text-gold-200 transition">
                        → Kocaeli Zemin İyileştirme
                      </Link>
                      <Link href="/sehirler/duzce-zemin-guclendirme" className="rounded-xl bg-white/5 p-2.5 hover:bg-white/10 hover:text-gold-200 transition">
                        → Düzce Zemin İyileştirme
                      </Link>
                      <Link href="/sehirler/hatay-zemin-guclendirme" className="rounded-xl bg-white/5 p-2.5 hover:bg-white/10 hover:text-gold-200 transition">
                        → Hatay Zemin İyileştirme
                      </Link>
                      <Link href="/sehirler/gaziantep-zemin-guclendirme" className="rounded-xl bg-white/5 p-2.5 hover:bg-white/10 hover:text-gold-200 transition">
                        → Gaziantep Zemin İyileştirme
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Saha Uygulama YouTube Video Oyuncusu & Video Schema */}
              <YouTubeVideoPlayer
                title={`YER6 ${t(`${service.key}_title`)} Saha Uygulama Çekimleri`}
                description={`YER6 Geoteknik mühendislik ekibinin sahada gerçekleştirdiği ${t(`${service.key}_title`)} operasyonu ve kalite kontrol test süreçleri.`}
                videos={
                  service.slug === "fore-kazik"
                    ? [
                        {
                          id: "-I5Nxlqsphs",
                          title: "Hatay Arsuz Muhafaza Borulu (Casing) Fore Kazık İmalatı",
                          location: "Hatay Arsuz Sahası",
                          description: "Hatay Arsuz'da muhafaza borulu kılıflı rotary delgi fore kazık imalatı ve donatı montaj operasyonu."
                        },
                        {
                          id: "iABCGEeN8F8",
                          title: "Hatay Merkez Emlak Konut Deprem Konutları Kazıklı Temel",
                          location: "Hatay Merkez Sahası",
                          description: "Hatay Merkez Emlak Konut deprem konutları projesinde rotary delgi fore kazık ve kazıklı radye temel uygulaması."
                        },
                        {
                          id: "lOfabQRZuxQ",
                          title: "Malatya Deprem Konutları Geoteknik Fore Kazık Operasyonu",
                          location: "Malatya Sahası",
                          description: "Malatya deprem konutları sahasında yüksek torklu rotary delgi makineleri ile fore kazık delgi ve donatı montajı."
                        }
                      ]
                    : service.slug === "jet-grout"
                    ? [
                        {
                          id: "HcMN8T1X4d8",
                          title: "YER6 Jet Grout Saha Uygulama ve Basınçlı Enjeksiyon Operasyonu",
                          location: "Saha İmalatı",
                          description: "YER6 Geoteknik mühendislik ekibinin sahada gerçekleştirdiği 400-600 bar yüksek basınçlı Jet Grout kolon imalatı."
                        }
                      ]
                    : undefined
                }
              />

              {/* Sık Sorulan Sorular */}
              {"faq" in service && service.faq && (service.faq as { question: string; answer: string }[]).length > 0 && (
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
                  <h2 className="text-2xl font-semibold text-white">Sık Sorulan Sorular</h2>
                  <p className="mt-3 mb-6 text-sm text-white/55">
                    {t(`${service.key}_title`)} hakkında en çok merak edilenler
                  </p>
                  <div className="space-y-3">
                    {(service.faq as { question: string; answer: string }[]).map((item, i) => (
                      <FaqItem key={i} question={item.question} answer={item.answer} />
                    ))}
                  </div>
                </div>
              )}

              {/* Bu hizmete ait hesaplama aracı — mevcut kart diliyle */}
              {calculatorTool && (
                <div className="rounded-[2rem] border border-gold-300/25 bg-gold-300/[0.06] p-8">
                  <div className="flex items-start gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gold-300/15 text-gold-200">
                      <Calculator className="size-5" />
                    </span>
                    <div>
                      <h2 className="text-2xl font-semibold text-white">Metraj ve ön maliyet hesaplayın</h2>
                      <p className="mt-3 text-sm leading-7 text-white/62">
                        {calculatorTool.h1} aracıyla çap, boy ve adet girerek yaklaşık metraj, malzeme
                        tüketimi, süre ve ön maliyet aralığını saniyeler içinde görün. Ücretsizdir;
                        sonucu PDF olarak indirebilirsiniz.
                      </p>
                      <Link
                        href={`/hesaplama/${calculatorTool.slug}/`}
                        className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold-300 px-5 py-2.5 text-sm font-semibold text-obsidian transition hover:bg-gold-200"
                      >
                        Hesaplama aracını aç
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* İlgili Teknik İçerikler */}
              {(relatedArticles.length > 0 || relatedHubLinks.length > 0) && (
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
                  <h2 className="text-2xl font-semibold text-white">İlgili Teknik İçerikler</h2>
                  <div className="mt-6 grid gap-3 text-sm text-white/70">
                    {relatedHubLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-2xl bg-white/5 px-4 py-3 transition hover:bg-white/10 hover:text-white"
                      >
                        → {item.label}
                      </Link>
                    ))}
                    {relatedArticles.map((article) => (
                      <Link
                        key={article.slug}
                        href={`/knowledge/${article.slug}`}
                        className="rounded-2xl bg-white/5 px-4 py-3 transition hover:bg-white/10 hover:text-white"
                      >
                        → {article.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* İlgili Projeler */}
              {relatedProjects.length > 0 && (
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
                  <h2 className="text-2xl font-semibold text-white">İlgili Projeler</h2>
                  <div className="mt-6 grid gap-4">
                    {relatedProjects.map((project) => {
                      const imageAlt = "imageAlt" in project ? (project.imageAlt as string) : t(`${project.key}_title`);

                      return (
                        <Link
                          key={project.slug}
                          href={`/projects/${project.slug}`}
                          className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition hover:border-gold-300/40 hover:bg-white/[0.07]"
                        >
                          <div className="grid gap-0 md:grid-cols-[220px_minmax(0,1fr)]">
                            <div className="h-48 overflow-hidden md:h-full">
                              <img
                                src={project.image}
                                alt={imageAlt}
                                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                            <div className="p-5">
                              <p className="text-lg font-semibold text-white">{t(`${project.key}_title`)}</p>
                              <p className="mt-2 text-sm leading-6 text-white/62">{t(`${project.key}_summary`)}</p>
                              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-gold-200">
                                {project.location} · {project.metric}
                              </p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ⚡ Canlı Hesaplayıcı Çağrısı (Dwell Time & Engagement Engine) */}
              {calculatorTool && (
                <div className="rounded-[2rem] border border-gold-300/30 bg-gradient-to-r from-obsidian via-gold-950/40 to-obsidian p-8 text-white shadow-xl">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-gold-300/30 bg-gold-300/10 px-3 py-1 text-xs font-semibold text-gold-200">
                        <Calculator className="h-3.5 w-3.5" /> Anlık Ön Değerlendirme & Metraj
                      </div>
                      <h3 className="mt-3 text-xl font-bold text-white">
                        {calculatorTool.h1}
                      </h3>
                      <p className="mt-2 text-sm text-white/70 max-w-xl">
                        Projenizin tahmini adet, delgi derinliği ve çap parametrelerini girerek canlı döviz kuru üzerinden tahmini metraj ve yaklaşık birim maliyet analizi alın.
                      </p>
                    </div>
                    <Link
                      href={`/hesaplama/${calculatorTool.slug}/`}
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-gold-300 px-6 py-3.5 text-sm font-bold text-obsidian transition hover:bg-gold-200"
                    >
                      <Calculator className="h-4 w-4" /> Hesaplamaya Başla
                    </Link>
                  </div>
                </div>
              )}

              {/* İletişim CTA */}
              <div className="rounded-[2rem] border border-gold-300/30 bg-gold-300 p-8 text-obsidian">
                <h2 className="text-2xl font-semibold">
                  {t(`${service.key}_title`)} projesi için teklif alın
                </h2>
                <p className="mt-3 text-sm leading-7 font-medium">
                  Zemin koşullarınızı ve proje ihtiyaçlarınızı paylaşın; YER6 mühendisleri size özel teknik değerlendirme ve yaklaşık metraj hazırlasın.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex w-full justify-center rounded-2xl bg-obsidian px-6 py-3 text-sm font-semibold text-white transition hover:bg-graphite sm:w-auto"
                  >
                    Teklif İste
                  </Link>
                  <a
                    href={siteConfig.phone.href}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-obsidian/20 bg-obsidian/8 px-6 py-3 text-sm font-semibold transition hover:bg-obsidian/15 sm:w-auto"
                  >
                    <Phone className="h-4 w-4" /> {siteConfig.phone.display}
                  </a>
                </div>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <aside className="space-y-6 self-start">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-sm text-white/75 space-y-6">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold-200">{t("serviceSidebarTitle")}</p>
                  <p className="text-white/70 leading-6">{t("serviceSidebarText")}</p>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                  <h3 className="text-sm uppercase tracking-[0.32em] text-gold-200">{t("serviceSidebarValueTitle")}</h3>
                  <ul className="mt-4 space-y-3 text-white/70 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-gold-300/60" />{t("serviceSidebarValue1")}</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-gold-300/60" />{t("serviceSidebarValue2")}</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-gold-300/60" />{t("serviceSidebarValue3")}</li>
                  </ul>
                </div>

                {/* Diğer hizmetler */}
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                  <h3 className="text-sm uppercase tracking-[0.32em] text-gold-200">Diğer Hizmetler</h3>
                  <div className="mt-4 space-y-2 text-sm text-white/65">
                    {["zemin-guclendirme", "jet-grout", "dsm", "deep-soil-mixing", "fore-kazik", "cfa-kazik", "mini-kazik", "ankraj", "iksa-sistemleri", "zemin-iyilestirme", "geoteknik-danismanlik", "zemin-civisi", "puskurtme-beton", "kazik-yukleme-testleri", "zemin-etudu", "tas-kolon", "diafram-duvar"]
                      .filter((s) => s !== service.slug)
                      .map((s) => (
                        <Link key={s} href={`/services/${s}`} className="block py-1 hover:text-white transition">
                          → {s.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                        </Link>
                      ))}
                  </div>
                </div>

                {/* Şehir bazlı hizmetler */}
                {serviceCities.length > 0 && (
                  <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                    <h3 className="text-sm uppercase tracking-[0.32em] text-gold-200">Şehir Bazlı Hizmetler</h3>
                    <div className="mt-4 space-y-2 text-sm text-white/65">
                      {serviceCities.map((page) => (
                        <Link key={page.slug} href={`/sehirler/${page.slug}`} className="block py-1 hover:text-white transition">
                          {page.city} {service.title}
                        </Link>
                      ))}
                      <Link href="/sehirler/" className="block border-t border-white/10 pt-3 text-gold-200 transition hover:text-white">
                        → Tüm şehirleri gör
                      </Link>
                    </div>
                  </div>
                )}

                {/* WhatsApp CTA */}
                <a
                  href={`${siteConfig.whatsapp.url}?text=${encodeURIComponent(`Merhaba YER6, ${service.title} hizmeti için bilgi almak istiyorum.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-gold-300/30 bg-gold-300/10 px-5 py-3.5 text-center text-[13px] font-medium tracking-wide text-gold-300 transition hover:bg-gold-300/20"
                >
                  WhatsApp ile Hızlı Teklif
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
