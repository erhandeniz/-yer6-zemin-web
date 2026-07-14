"use client";

import Link from "next/link";
import { CheckCircle2, ChevronDown, ChevronUp, Phone } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { cityPages } from "@/lib/cityContent";
import { getServiceBySlug, projects } from "@/lib/content";
import { publishedKnowledgeArticles } from "@/data/knowledge";
import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/lib/siteConfig";

const serviceArticleMap: Record<string, string[]> = {
  "jet-grout": ["yer-alti-zemin-iyilestirme", "jet-grout-nedir", "jet-grout-hangi-zeminlerde-uygulanir", "jet-grout-kalite-kontrol"],
  dsm: ["yer-alti-zemin-iyilestirme", "dsm-nasil-uygulanir", "dsm-malzeme-secinimi", "jet-grout-ve-dsm-farki"],
  "fore-kazik": ["yer-alti-zemin-iyilestirme", "fore-kazik-nedir", "fore-kazik-uygulama-asamalari", "fore-kazik-avantajlari"],
  "mini-kazik": ["fore-kazik-nedir", "saha-denetimi-numune-testleri", "zemin-iyilestirme-planlama"],
  ankraj: ["zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri", "zemin-iyilestirme-planlama"],
  "iksa-sistemleri": ["zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri", "zemin-kalite-kontrol-standartlari"],
  "zemin-iyilestirme": ["yer-alti-zemin-iyilestirme", "zemin-iyilestirme-yontemleri", "zemin-iyilestirme-planlama", "zemin-iyilestirme-risk-yonetimi"],
  "geoteknik-danismanlik": ["zemin-iyilestirme-planlama", "zemin-kalite-kontrol-standartlari", "saha-denetimi-numune-testleri"],
  "zemin-civisi": ["kazi-destek-sistemleri-nedir", "zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri"],
  "puskurtme-beton": ["kazi-destek-sistemleri-nedir", "zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri"],
  "kazik-yukleme-testleri": ["fore-kazik-nedir", "saha-denetimi-numune-testleri", "zemin-kalite-kontrol-standartlari"],
  "zemin-etudu": ["zemin-iyilestirme-planlama", "sivilasma-riskine-karsi-zemin-guclendirme", "zemin-kalite-kontrol-standartlari"],
  "tas-kolon": ["zemin-iyilestirme-yontemleri", "sivilasma-riskine-karsi-zemin-guclendirme", "zemin-iyilestirme-planlama"],
  "diafram-duvar": ["kazi-destek-sistemleri-nedir", "zemin-iyilestirme-risk-yonetimi", "fore-kazik-nedir"]
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

  const relatedArticles = (serviceArticleMap[service.slug] ?? [])
    .map((articleSlug) => publishedKnowledgeArticles.find((article) => article.slug === articleSlug))
    .filter((article): article is (typeof publishedKnowledgeArticles)[number] => Boolean(article));
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
                <p className="mt-6 text-lg leading-8 text-white/70">{t(`${service.key}_summary`)}</p>
                <p className="mt-4 text-base leading-7 text-white/65">{t(`${service.key}_detail`)}</p>
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
                          <p className="font-semibold text-white">{step.title}</p>
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
                    {service.technicalNote as string}
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

              {/* İlgili Teknik İçerikler */}
              {relatedArticles.length > 0 && (
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
                  <h2 className="text-2xl font-semibold text-white">İlgili Teknik İçerikler</h2>
                  <div className="mt-6 grid gap-3 text-sm text-white/70">
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
                    {["jet-grout", "dsm", "fore-kazik", "mini-kazik", "ankraj", "iksa-sistemleri", "zemin-iyilestirme", "geoteknik-danismanlik", "zemin-civisi", "puskurtme-beton", "kazik-yukleme-testleri", "zemin-etudu", "tas-kolon", "diafram-duvar"]
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
                    </div>
                  </div>
                )}

                {/* WhatsApp CTA */}
                <a
                  href={`${siteConfig.whatsapp.url}?text=${encodeURIComponent(`Merhaba YER6, ${service.title} hizmeti için bilgi almak istiyorum.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 px-5 py-4 text-center text-sm font-semibold text-[#25D366] hover:bg-[#25D366]/25 transition"
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
