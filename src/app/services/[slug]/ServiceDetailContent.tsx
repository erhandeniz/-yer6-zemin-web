"use client";

import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { cityPages } from "@/lib/cityContent";
import { getServiceBySlug } from "@/lib/content";
import { publishedKnowledgeArticles } from "@/data/knowledge";
import { useLanguage } from "@/components/LanguageProvider";

const serviceArticleMap: Record<string, string[]> = {
  "jet-grout": ["jet-grout-nedir", "jet-grout-hangi-zeminlerde-uygulanir", "jet-grout-kalite-kontrol"],
  dsm: ["dsm-nasil-uygulanir", "dsm-malzeme-secinimi", "jet-grout-ve-dsm-farki"],
  "fore-kazik": ["fore-kazik-nedir", "fore-kazik-uygulama-asamalari", "fore-kazik-avantajlari"],
  "mini-kazik": ["fore-kazik-nedir", "saha-denetimi-numune-testleri", "zemin-iyilestirme-planlama"],
  ankraj: ["zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri", "zemin-iyilestirme-planlama"],
  "iksa-sistemleri": ["zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri", "zemin-kalite-kontrol-standartlari"],
  "zemin-iyilestirme": ["zemin-iyilestirme-yontemleri", "zemin-iyilestirme-planlama", "zemin-iyilestirme-risk-yonetimi"],
  "geoteknik-danismanlik": ["zemin-iyilestirme-planlama", "zemin-kalite-kontrol-standartlari", "saha-denetimi-numune-testleri"]
};

export function ServiceDetailContent({ slug }: { slug: string }) {
  const { t } = useLanguage();
  const service = getServiceBySlug(slug);

  if (!service) return null;

  const relatedArticles = (serviceArticleMap[service.slug] ?? [])
    .map((articleSlug) => publishedKnowledgeArticles.find((article) => article.slug === articleSlug))
    .filter((article): article is (typeof publishedKnowledgeArticles)[number] => Boolean(article));
  const serviceCities = cityPages.filter((page) => page.serviceSlugs.includes(service.slug)).slice(0, 5);

  return (
    <main>
      <PageHero
        eyebrowKey="servicesEyebrow"
        titleKey={`${service.key}_title`}
        copyKey={`${service.key}_detail`}
      />
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="space-y-10">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
                <h2 className="text-3xl font-semibold text-white">{t("serviceHowItWorks")}</h2>
                <p className="mt-6 text-lg leading-8 text-white/70">{t(`${service.key}_summary`)}</p>
                <p className="mt-6 text-base leading-7 text-white/70">{t(`${service.key}_detail`)}</p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
                <SectionHeader
                  eyebrow={t("serviceTechSpecs")}
                  title={t("serviceTechSpecs")}
                  copy={t("serviceTechSpecsCopy")}
                  align="left"
                />
                <ul className="mt-8 space-y-3 text-white/70">
                  {[1, 2, 3].map((n) => (
                    <li key={n} className="rounded-2xl bg-white/5 px-4 py-3">
                      {t(`${service.key}_spec${n}`)}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
                <h2 className="text-3xl font-semibold text-white">İlgili teknik içerikler</h2>
                <div className="mt-6 grid gap-3 text-sm text-white/70">
                  {relatedArticles.map((article) => (
                    <Link key={article.slug} href={`/knowledge/${article.slug}`} className="rounded-2xl bg-white/5 px-4 py-3 transition hover:bg-white/10 hover:text-white">
                      {article.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <aside className="space-y-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-sm text-white/75">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-gold-200">{t("serviceSidebarTitle")}</p>
                <p className="text-white/70">{t("serviceSidebarText")}</p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-sm uppercase tracking-[0.32em] text-gold-200">{t("serviceSidebarValueTitle")}</h3>
                <ul className="mt-4 space-y-3 text-white/70">
                  <li>- {t("serviceSidebarValue1")}</li>
                  <li>- {t("serviceSidebarValue2")}</li>
                  <li>- {t("serviceSidebarValue3")}</li>
                </ul>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-sm uppercase tracking-[0.32em] text-gold-200">Şehir bazlı hizmetler</h3>
                <div className="mt-4 space-y-3 text-white/70">
                  {serviceCities.map((page) => (
                    <Link key={page.slug} href={`/sehirler/${page.slug}`} className="block hover:text-white">
                      {page.city} {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
