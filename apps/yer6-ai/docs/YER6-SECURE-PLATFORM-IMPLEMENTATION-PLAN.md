# YER6 SECURE PLATFORM — AUDIT & IMPLEMENTATION PLAN
Tarih: 2026-07-25 · Branch: `feature/yer6-secure-platform-and-agents` · Kapsam: yalnızca `apps/yer6-ai` (AURENZA'ya dokunulmaz)

## 1. Mevcut kimlik doğrulama mimarisi
- NextAuth (JWT stratejisi, 8 saat) + PrismaAdapter + tek CredentialsProvider (`src/lib/auth.ts`).
- `authorizeCredentials`: env tabanlı DEMO kullanıcı kısa devresi + `prisma.user.findUnique` + bcryptjs `compare`.
- Çerezler NextAuth varsayılanı (HttpOnly, SameSite=Lax, prod'da Secure). Oturum rotasyonu JWT yeniden imzalama ile.
- `middleware.ts`: `AUTH_REQUIRED=true` iken sayfaları `/login`'e yönlendirir; `api`, `login`, `demo`, statikler hariç.
- Admin API'ler `guardAdmin` (demo kilidi → `requireAdmin` → rate limit) ile korunur. `requireAdmin` yalnız `ADMIN` kabul eder.
- KAYIT YOK: kullanıcılar yalnızca `scripts/create-admin.ts` ile açılıyor. Şifre sıfırlama yok. E-posta doğrulama altyapısı (VerificationToken tablosu) var ama kullanılmıyor.

## 2. Mevcut kullanıcı/rol şeması
- `UserRole enum: ENGINEER | MANAGER | ADMIN` (varsayılan ENGINEER).
- `User`: id, name, email(unique), emailVerified, image, passwordHash, role. Profil alanları (unvan, telefon, ülke, şehir) YOK. `organizationId` YOK.
- Organization TABLOSU YOK; `organizationId` string alanları (KnowledgeDocument, MemoryRecord, SpatialAsset, Proposal) env `YER6_ORGANIZATION_ID="yer6"` ile dolduruluyor.
- `AuditLog` tablosu MEVCUT (action, entity, entityId, metadata, userId) — kullanan kod yok.

## 3. Mevcut tenant-izolasyon durumu
- İYİ: Project.ownerId + Conversation.userId + Message→Conversation zinciri; `resolveKnowledgeScope` proje erişimini owner/ADMIN'e daraltır; uploadthing session zorunlu; admin uçları `guardAdmin`; demo istekleri üretim RAG/DB'ye kapalı (`toolContext.demo`).
- BOŞLUKLAR: (a) tek gerçek org olduğundan org-düzeyi izolasyon hiç test edilmemiş; (b) merkezi yetki yardımcı katmanı yok (her route kendi kontrolünü yazıyor); (c) kayıt olmadığı için "yabancı kullanıcı" senaryosu hiç çalışmamış; (d) Proposal erişimi yalnız admin uçlarında — org filtresi admin sorgularında mevcut ama kullanıcı-düzeyi uç yok.

## 4. Kırık link/buton envanteri
- Kenar çubuğu alt profil bloğu: `<Link href="/login">` — giriş yapmış kullanıcıyı login'e atar (Paket B'nin bildirdiği hata). SABİT "ED / Erhan Deniz / Başmühendis".
- Üst bar avatar butonu (ED): onClick YOK — dekoratif.
- Zil (Bell) butonu: onClick YOK — dekoratif rozetli ikon (Paket D / R2).
- "Aktif proje" butonu: onClick YOK; `@/lib/data` fixture'ından okur (Paket E / R2).
- Global arama kutusu: yalnızca görsel; ⌘K bağlanmamış (R2+).
- Dashboard "Tümünü gör" ve üç-nokta menüleri: kısmen dekoratif (R2).
- Login "Şifrenizi mi unuttunuz?": onClick YOK.

## 5. Sabit/demo veri envanteri
- `src/lib/data.ts`: 3 fixture proje ("Duzce Industrial Campus", "Yunuseli Residences", "Bozuyuk Cold Storage") + metrikler (Aktif projeler 24 / AI saati 386 / %94 kabul / Risk 7 / 3 inceleme) — dashboard ve "Aktif proje" bunları gerçekmiş gibi gösterir (R2'de gerçek sorgu/boş durum).
- `operational-page.tsx`: Belgeler sekmesinde 4 sahte dosya satırı; Raporlar/Ekip/Ayarlar "hazır" placeholder.
- Kenar çubuğunda sabit kimlik (ED/Erhan Deniz/Başmühendis) — R1'de gerçek oturuma bağlanıyor.

## 6. Bildirim durumu
- UI: yalnızca dekoratif zil + sabit rozet. API/tablo/receipt YOK. → R2 (Notification, NotificationReceipt, hedef kitle, zamanlama, süre dolumu).

## 7. Ayarlar durumu
- `/settings` → `OperationalPage` placeholder; hiçbir form/persist yok. → R2 (mevcut kabuk korunarak PROFILE/PREFERENCES/SECURITY/PRIVACY/COMPANY/ADMIN bölümleri).

## 8. Aktif proje seçici durumu
- Görsel buton; zustand `selectedProjectId` + fixture liste; tıklanınca hiçbir şey olmaz; gerçek projelerle bağı yok. → R2 (yetkili proje listesi, arama, Genel çalışma alanı, kalıcılık, bağlam güncelleme).

## 9. Chat / model seçici durumu
- Chat gerçek (GPT-5.6 runtime, SSE, araçlar, geçmiş persist). Model "seçici" görseldir; YER6 mod adları yok. Public bot zinciri (gemini→groq→cerebras→mistral→deepseek→gpt-5.6→cf) yalnız `/api/public/estimate-chat`'te. → R3 (YER6 Otomatik/Hızlı/Teknik/Derin/Görsel + sağlıklı-mod filtresi + mod metadata).

## 10. Migration planı (additive)
- M1 `add_platform_roles`: `ALTER TYPE "UserRole" ADD VALUE IF NOT EXISTS` → SUPER_ADMIN, COMPANY_ADMIN, MEMBER, VIEWER, DEMO (mevcut ENGINEER/MANAGER/ADMIN korunur; yeni değer aynı işlem içinde KULLANILMAZ — PG kuralı gereği ayrı migration).
- M2 `add_secure_tenancy_registration`: `Organization` tablosu; `User.organizationId/title/phone/country/city/locale` (+FK SET NULL, index); `AppSetting(key PK, value JSONB, updatedById, timestamps)`; veri düzeltmesi: Erhan (erhandeniz962@gmail.com) → role SUPER_ADMIN + unvan "Kurucu & Geoteknik Proje Yöneticisi" + varsayılan "YER6" organizasyonu oluşturulup mevcut TÜM kullanıcılar ona bağlanır (tek-org geçmişle uyumlu, kayıpsız).
- R2+: Notification*, UserPreference, Invitation, FeatureFlag, Research*/Opportunity*, ImprovementProposal — ayrı additive migrationlar.
- Geri alma: migrationlar yalnız ekler; rollback = önceki worker sürümüne dönüş (kolonlar boş kalır, eski kod etkilenmez). Yıkıcı işlem YOK.

## 11. Release planı
- R1 (bu tur): kayıt + politika + org tenancy temeli + audit olayları + avatar/hesap menüsü + Erhan public profili + merkezi yetki yardımcıları + negatif güvenlik testleri. Kapılar: prisma validate, typecheck, secret scan, test (operatör), build (operatör), deploy (operatör) → canlı doğrulama.
- R2: bildirim merkezi, aktif proje seçici, ayarlar, gerçek dashboard verisi.
- R3: chat-first giriş kartı + YER6 mod seçici.
- R4: günlük araştırma/fırsat ajanları + admin kuyrukları.
- R5: İyileştirme Merkezi (onaysız prod deploy YOK).

## 12. Risk ve geri dönüş planı
- Riskler: (a) enum migration'ı canlı DB'de — M1 ayrı işlem kuralına uyuldu; (b) kayıt açık → spam: politika kill-switch (`REGISTRATION_DISABLED=true`) + IP rate limit + honeypot; (c) oturum menüsü demo'da veri sızdırmamalı — demo'da menü yalnız "Giriş yap"; (d) Erhan hesabı: yalnız YÜKSELTİLİR (ADMIN→SUPER_ADMIN), asla düşürülmez; `requireAdmin` SUPER_ADMIN'i de kabul edecek şekilde genişletildi (geriye dönük uyumlu).
- Rollback: mevcut üretim sürümü deploy öncesi kaydedilir (`wrangler deployments list`); sorun halinde `wrangler rollback` + migrationlar additive olduğundan veri kaybı yok. Kayıt acil kapatma: `REGISTRATION_DISABLED=true` env → anında kapalı.
- Tasarım koruması: hiçbir sayfa/kabuk/grid yeniden tasarlanmaz; yalnız mevcut kabuk içine menü/form/dropdown eklenir.
