# YER6 — Cloudflare Koruma Kontrol Listesi

Koddan yapılan korumalar (robots AI-bot engeli, güvenlik başlıkları, source map kapatma,
telif sayfaları, canary imza) repoda uygulandı. Aşağıdakiler **Cloudflare panelinden**
(dash.cloudflare.com → yer6zemin.com.tr) tek seferlik açılır. Sıra önemlidir.

## 1. Bot koruması (Security → Bots)
- [ ] **Bot Fight Mode** (ücretsiz) veya planın izin veriyorsa **Super Bot Fight Mode** → AÇIK
- [ ] "Definitely automated" trafiği → **Block**
- [ ] "AI bots / AI scrapers" engelleme → **Block** (yeni siteler için varsayılan; kapalıysa aç)

## 2. AI crawler engelleme (Security → Settings / AI Audit)
- [ ] **Block AI bots** → AÇIK
- [ ] Uygun planda **AI Labyrinth** → AÇIK (kurala uymayan AI botlarını sahte içerik labirentine yollar)

## 3. Scrape Shield (Security → Settings → Scrape Shield)
- [ ] **Email Address Obfuscation** → AÇIK
- [ ] **Hotlink Protection** → AÇIK (görsellerin başka sitede kullanılmasını engeller)

## 4. WAF — Rate Limiting (Security → WAF → Rate limiting rules)
- [ ] Kural: aynı IP için **60 saniyede > 100 istek** → **Block / Managed Challenge** (10 dk)
      Bu, tüm sitenin bir botla toplu indirilmesini pratik olarak durdurur.
- [ ] Kural: `/sitemap.xml` ve `/*/` yollarına anormal seri erişim → Challenge

## 5. WAF — Custom Rules (Security → WAF → Custom rules)
- [ ] Bilinen kötü user-agent'ları engelle (ör. içinde "scrapy", "python-requests",
      "curl", "wget", "HeadlessChrome" geçen ve boş user-agent'lar) → **Managed Challenge**
- [ ] İsteğe bağlı: yalnızca hedef pazarınız dışındaki yüksek riskli ülkelerden gelen
      şüpheli trafiğe Challenge (SEO'yu bozmamak için dikkatli kullanın)

## 6. Turnstile (formlar için)
- [ ] dash → Turnstile → yeni **site key** oluştur
- [ ] İletişim/teklif formuna Turnstile doğrulaması ekle (bot form gönderimini keser)
      Not: form gönderimi bir backend/worker'a gidiyorsa doğrulama sunucu tarafında kontrol edilmeli.

## 7. SSL/TLS ve başlıklar
- [ ] SSL/TLS → **Full (strict)**
- [ ] Edge Certificates → **Always Use HTTPS** = AÇIK, **HSTS** = AÇIK
- [ ] (Kodda `public/_headers` ile X-Frame-Options, CSP frame-ancestors, nosniff vb. zaten geliyor.)

## 8. Doğrulama
- [ ] Yayından sonra: `https://www.yer6zemin.com.tr/robots.txt` → engelli botların listede olduğunu gör
- [ ] `curl -I https://www.yer6zemin.com.tr` → güvenlik başlıklarının döndüğünü gör
- [ ] Başka bir siteye `<iframe src="https://www.yer6zemin.com.tr">` koyup açılmadığını doğrula

> Not: `_headers` dosyasının çalışması için Cloudflare'de statik varlıkların (Workers Assets)
> bu dosyayı okuması gerekir. Yayından sonra başlıklar gelmiyorsa, aynı kuralları
> **Rules → Transform Rules → Modify Response Header** ile de ekleyebilirsiniz.
