# YER6 Teklif Motoru (PDF Proposal Engine) — Modül 11

Her ticari teklif **resmi, doğrulanmış bir PDF** üretir. PDF üretilip doğrulanmadan
hiçbir teklif tamamlanmış / onaylanmış / gönderilmiş / kabul edilmiş sayılamaz.
XLSX yalnızca opsiyonel iç hesap ekidir; resmi teklifin yerini asla almaz.

## Mimari

Bağımsız (sıfır bağımlılık) PDF motoru — Cloudflare Workers ve Node'da çalışır:

| Katman | Dosya | Görev |
|---|---|---|
| TTF ayrıştırıcı | `src/server/proposals/pdf/ttf.ts` | cmap/hmtx/head/hhea/maxp — Unicode→glyph |
| PDF yazıcı | `src/server/proposals/pdf/pdf-document.ts` | Type0/Identity-H gömülü font, seçilebilir/aranabilir metin, ToUnicode, tablo, sayfa no, metadata |
| Font sağlayıcı | `src/server/proposals/pdf/fonts.ts` | R2 → statik asset (`/proposal-fonts`) → dosya sistemi |
| Biçimlendirme | `format/money.ts`, `format/number-to-words.ts`, `format/filename.ts` | TR/USD/EUR, yazı-ile toplam, güvenli dosya adı |
| Hesap/doğrulama | `domain/totals.ts`, `domain/validation.ts` | satır/ara/iskonto/KDV/genel toplam, ön-doğrulama |
| Numara/durum/görünürlük | `domain/numbering.ts`, `domain/status.ts`, `domain/visibility.ts` | YER6-YYYY-0001-R0, durum makinesi + değişmezlik, iç/müşteri ayrımı + sızıntı testi |
| Kurumsal kimlik | `render/identity.ts` | Onaylı YER6 logo/renk/iletişim + TR/EN/AR etiketler |
| Renderer | `render/proposal-pdf.ts` | Müşteri + iç maliyet PDF düzeni |
| Doğrulama | `verify/verify-pdf.ts`, `verify/checksum.ts` | açılır mı, sayfa/boyut/metin/teklif no/genel toplam/sızıntı |
| Depolama | `storage/proposal-store.ts` | R2 (+fs fallback), HMAC imzalı süreli indirme jetonu |
| İş akışı | `service.ts` | create → validate → render → verify → store → onay/gönder/revize |

API uçları: `src/app/api/admin/proposals/**` (admin-korumalı) + `src/app/api/proposals/download` (jeton ile).

## Veritabanı

Yeni tablolar (yalnızca ekleme): `Proposal, ProposalRevision, ProposalItem, ProposalPdf,
ProposalNumberSequence, ProposalTemplate, ProposalEvent`.
Migration: `prisma/migrations/20260715150000_add_proposal_engine/`.

## Makinende çalıştırma komutları

```bash
cd apps/yer6-ai

# 1) Prisma client'ı yeni modellerle üret
corepack pnpm --filter @yer6/ai db:generate

# 2) Migration'ı uygula (Accelerate/edge URL migrate çalıştırmaz; doğrudan Postgres URL gerekir)
#    a) Migration dosyasıyla:
DATABASE_URL="postgresql://<direct-connection>" corepack pnpm --filter @yer6/ai db:migrate:deploy
#    b) veya şema senkronu (ek değişiklik olduğu için güvenli):
DATABASE_URL="postgresql://<direct-connection>" corepack pnpm --filter @yer6/ai exec prisma db push

# 3) Doğrulama zinciri
corepack pnpm --filter @yer6/ai typecheck
corepack pnpm --filter @yer6/ai lint          # sıfır uyarı
corepack pnpm --filter @yer6/ai test           # vitest (yeni testler dahil)
corepack pnpm --filter @yer6/ai build

# 4) Deploy (Cloudflare kimlik bilgileri gerekir)
corepack pnpm --filter @yer6/ai cloudflare:deploy
```

> Not: Bu kod Cowork ortamında yazıldı ve **tipkontrol (tsc) + lint (@typescript-eslint) + saf mantık
> ve gerçek PDF üretimi** orada doğrulandı. `vitest`, `next build`, `prisma generate` ve `deploy`
> ağ erişimi / native binary / Cloudflare kimliği gerektirdiğinden senin makinende çalıştırılmalıdır.

## Fontlar (Workers'ta)

`public/proposal-fonts/YER6Sans-{Regular,Bold}.ttf` statik asset olarak sunulur; renderer
Workers'ta bunları `NEXT_PUBLIC_APP_URL/proposal-fonts/...` üzerinden çeker. İstersen aynı
dosyaları R2'ye `system/fonts/` altına koyabilirsin (öncelikli okunur). Font: DejaVu Sans
(serbest lisans), tam Türkçe + temel Arapça kapsar.

## Konfigürasyon

- `NEXTAUTH_SECRET` → indirme jetonlarını imzalar (zaten mevcut).
- Opsiyonel `PROPOSAL_STORE` R2 binding → ayrı özel kova (yoksa `RAG_DOCUMENTS` kullanılır,
  `proposals/<org>/<id>/...` önekiyle izole).
- Opsiyonel `PROPOSAL_SIGNING_SECRET` → jeton imzası için ayrı sır.

## Bilinen sınır

- **Arapça (AR) RTL**: metin sağa hizalanır ve etiketler mevcuttur; ancak gerçek Arapça harf
  birleştirme (shaping) için ayrı bir shaping motoru gerekir. Onaylı orijinal (TR/EN) metin
  her zaman korunur ve dil, her PDF revizyonunda saklanır.
- Cloudflare Free plan ~2000 ms CPU limiti çok kalemli tek istekte PDF üretimini zorlayabilir;
  büyük tekliflerde Paid plan (`limits.cpu_ms`) önerilir.
