# YER6 — DEĞİŞMEZ ÇALIŞMA KURALLARI

Bu kurallar Erhan Deniz tarafından konmuştur ve her oturumda geçerlidir.
İstisnası yoktur; "daha iyi olur" gerekçesiyle esnetilmez.

## 1. SAYFA YAPISINA ASLA DOKUNULMAZ

Aşağıdakiler hiçbir koşulda yeniden tasarlanmaz, yeri değiştirilmez, sadeleştirilmez:

- header, navigasyon, mobil menü
- footer
- ana sayfa yerleşimi ve bölüm sırası
- kartların görsel dili, renk paleti, tipografi
- mevcut animasyonlar ve CTA'lar
- mevcut URL yapısı ve rotalar
- çoklu dil (TR/EN/AR) altyapısı

Yeni özellikler **mevcut tasarım sisteminin içinde** uygulanır: içerik bölümü,
teknik tablo, kart, accordion, SSS, schema, metadata, iç bağlantı.

## 2. SİLMEDEN ÖNCE MUTLAKA HABER VERİLİR

Hiçbir sayfa, bölüm, makale, görsel, hizmet, proje, rota veya özellik
**önceden haber verilip onay alınmadan silinmez.**

Silinmesi gerektiği düşünülen bir şey varsa:

1. Ne olduğu ve neden sorunlu olduğu yazılı olarak bildirilir
2. Silmek yerine düzeltme/genişletme seçeneği önerilir
3. Onay gelmeden dokunulmaz

Bu kural URL değiştirmeyi, içerik kısaltmayı ve bir bölümü gizlemeyi de kapsar —
bunlar da fiilî silme sayılır.

## 3. İÇERİK DOĞRULUĞU

- Kanıtlanamayan proje, metraj, müşteri veya rakam yazılmaz.
- Stok/internet görseli YER6 referansı gibi sunulmaz.
- Deprem tahmini yapılmaz; korku üzerinden pazarlama dili kullanılmaz.
- Müşteriye anlamsız gelen geliştirici dili (CMS, MDX, boilerplate vb.) sitede yer almaz.

## 4. YAYIN ZİNCİRİ

Site **statik export**tur (`out/` → Cloudflare assets). Bu nedenle:

- `git push` tek başına canlıyı DEĞİŞTİRMEZ.
- Canlıya çıkmak için: `npm run gates && npx wrangler deploy`
- `gates` sırası: iCloud temizliği → typecheck → içerik kapısı → deprem kapısı → build → SEO kapısı

## 5. KAPSAM DIŞI

- YER6 AI uygulamasına (`apps/yer6-ai`) bu repodaki işlerde dokunulmaz.
- AURENZA'ya hiçbir koşulda dokunulmaz.
- Yeni Cloudflare projesi, yeni domain veya yeni repo oluşturulmaz.

## 6. EŞ ZAMANLI ÇALIŞMA

Aynı repoda başka bir yapay zekâ aracı (Codex vb.) çalışırken git kilitlenmesi
ve bozuk build oluşabilir. Build/deploy sırasında diğer araç kapalı olmalıdır.
