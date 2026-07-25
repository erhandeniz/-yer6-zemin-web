"use client";

import Link from "next/link";
import { ArrowLeft, HardHat, Landmark, MapPin } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { useAITranslation } from "@/components/i18n-provider";

const BIO: Record<string, { title: string; body: string; back: string; areas: string }> = {
  tr: {
    title: "Kurucu & Geoteknik Proje Yöneticisi",
    body:
      "Erhan Deniz, YER6 Zemin Güçlendirme Geoteknik Mühendislik'in kurucusu ve Geoteknik Proje Yöneticisidir. Jet grout, fore kazık, zemin iyileştirme ve temel güçlendirme çalışmalarında saha organizasyonu, ekip yönetimi, maliyet takibi ve proje uygulama süreçleri üzerine çalışmaktadır. YER6 AI'ın geliştirilmesinde, mühendislik bilgisini daha erişilebilir, anlaşılır ve uygulanabilir hâle getirmeyi hedeflemektedir.",
    back: "Girişe dön",
    areas: "Jet grout · Fore kazık · Zemin iyileştirme · Temel güçlendirme"
  },
  en: {
    title: "Founder & Geotechnical Project Manager",
    body:
      "Erhan Deniz is the founder of YER6 Ground Improvement Geotechnical Engineering and its Geotechnical Project Manager. He works on site organization, team management, cost tracking and project delivery across jet grouting, bored piles, ground improvement and foundation strengthening works. Through YER6 AI, he aims to make engineering knowledge more accessible, understandable and actionable.",
    back: "Back to sign in",
    areas: "Jet grouting · Bored piles · Ground improvement · Foundation strengthening"
  },
  ar: {
    title: "المؤسس ومدير المشاريع الجيوتقنية",
    body:
      "أرهان دنيز هو مؤسس شركة YER6 لتحسين التربة والهندسة الجيوتقنية ومدير مشاريعها الجيوتقنية. يعمل على تنظيم المواقع وإدارة الفرق ومتابعة التكاليف وتنفيذ المشاريع في أعمال الحقن النفاث (جيت غراوت) والخوازيق المحفورة وتحسين التربة وتقوية الأساسات. ومن خلال YER6 AI يهدف إلى جعل المعرفة الهندسية أكثر سهولةً ووضوحاً وقابليةً للتطبيق.",
    back: "العودة إلى تسجيل الدخول",
    areas: "الحقن النفاث · الخوازيق المحفورة · تحسين التربة · تقوية الأساسات"
  }
};

export function FounderProfile() {
  const { locale } = useAITranslation();
  const content = BIO[locale] ?? BIO.tr;

  return (
    <main dir={locale === "ar" ? "rtl" : "ltr"} className="min-h-screen bg-[#080808] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col px-5 py-8 sm:px-8">
        <div className="flex items-center justify-between">
          <BrandMark />
          <Link href="/login" className="flex items-center gap-1.5 text-[11px] text-white/40 hover:text-white/75">
            <ArrowLeft className="size-3.5" />
            {content.back}
          </Link>
        </div>

        <section className="mt-12 rounded-lg border border-white/[0.075] bg-white/[0.02] p-6 sm:p-8">
          <div className="flex items-center gap-4">
            <span className="grid size-14 shrink-0 place-items-center rounded-md bg-primary/15 text-lg font-semibold text-primary">ED</span>
            <div className="min-w-0">
              <h1 className="text-xl font-semibold text-white">Erhan Deniz</h1>
              <p className="mt-0.5 text-sm text-primary/80">{content.title}</p>
            </div>
          </div>

          <p className="mt-6 text-sm leading-7 text-white/70">{content.body}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/[0.065] pt-5 text-[11px] text-white/40">
            <span className="flex items-center gap-1.5"><HardHat className="size-3.5 text-primary/70" />{content.areas}</span>
            <span className="flex items-center gap-1.5"><Landmark className="size-3.5 text-primary/70" />YER6 Zemin Güçlendirme Geoteknik Mühendislik</span>
            <span className="flex items-center gap-1.5"><MapPin className="size-3.5 text-primary/70" />Ankara, Türkiye</span>
          </div>
        </section>

        <p className="mt-auto pt-10 text-center text-[10px] text-white/18">© 2026 YER6 AI</p>
      </div>
    </main>
  );
}
