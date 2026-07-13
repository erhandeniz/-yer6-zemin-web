"use client";

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForms } from "@/components/ContactForms";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/siteConfig";
import { useLanguage } from "@/components/LanguageProvider";

export function ContactContent() {
  const { t } = useLanguage();
  const { phone, email, emailHref, address, whatsapp } = siteConfig;
  const waHref = `${whatsapp.url}?text=${encodeURIComponent(whatsapp.message)}`;

  const contactItems: { label: string; value: string; Icon: typeof Phone; href: string | null }[] = [
    { label: t("contactPhone"), value: phone.display, Icon: Phone, href: phone.href },
    { label: t("contactEmail"), value: email, Icon: Mail, href: emailHref },
    { label: t("contactAddress"), value: `${address.streetAddress}, ${address.postalLine}`, Icon: MapPin, href: null },
    { label: t("contactWhatsApp"), value: phone.display, Icon: MessageCircle, href: waHref }
  ];

  return (
    <main>
      <PageHero
        eyebrowKey="contactEyebrow"
        titleKey="contactTitle"
        copyKey="contactCopy"
      />
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {contactItems.map(({ label, value, Icon, href }) => (
            <div key={label} className="gsap-reveal rounded-[2rem] border border-white/10 bg-white/[0.045] p-6">
              <Icon className="h-7 w-7 text-gold-200" />
              <div className="mt-5 text-xs uppercase tracking-[0.28em] text-white/42">{label}</div>
              {href ? (
                <a
                  href={href}
                  {...(href.startsWith("https://") ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="mt-3 block text-lg font-semibold text-white"
                >
                  {value}
                </a>
              ) : (
                <div className="mt-3 text-lg font-semibold text-white">{value}</div>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="px-5 pb-24">
        <div className="mx-auto max-w-7xl">
          <ContactForms />
        </div>
      </section>
      <section className="px-5 pb-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 text-center">
          <a
            href="https://armut.com/hizmetveren/yer6-zemin-guclendirme-geoteknik-muhendislik-ankara-golbasi-zemin-iyilestirme_85780374"
            target="_blank"
            rel="noreferrer"
            title="Yer6 Zemin Güçlendirme Geoteknik Mühendislik Zemin İyileştirme - Armut"
          >
            <img
              src="https://cdn.armut.com/images/armut-member-badge-colour@2x.png"
              alt="YER6 Zemin Mühendislik — Armut üyelik rozeti"
              className="mx-auto block h-auto w-full max-w-[260px]"
              loading="lazy"
            />
          </a>
          <a
            href="https://armut.com/hizmetveren/yer6-zemin-guclendirme-geoteknik-muhendislik-ankara-golbasi-zemin-iyilestirme_85780374"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold tracking-[0.02em] text-gold-200 transition hover:text-gold-100"
          >
            Yer6 Zemin Güçlendirme Geoteknik Mühendislik — Armut Profili
          </a>
        </div>
      </section>
      <section className="px-5 pb-24">
        <div className="mx-auto overflow-hidden rounded-[2rem] border border-white/10 max-w-7xl">
          <iframe
            title="YER6 Google Maps"
            src="https://www.google.com/maps?q=Karsiyaka%20Mahallesi%2C%20Sehit%20Ali%20Gaffar%20Okan%20Caddesi%2042A%2C%20Golbasi%2C%20Ankara&output=embed"
            className="h-[430px] w-full border-0 grayscale contrast-125 invert"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
