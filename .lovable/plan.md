# Güncelleme Planı

## 1. İletişim bilgileri (site geneli)
- Tüm e-posta adreslerini `bihteranaokullari@hotmail.com` yap (nav, footer, iletişim sayfası).
- Ortak telefonu kaldır. Her şube için ayrı telefon:
  - Yıldırım: +90 (505) 493 14 82
  - Kocatepe: +90 (545) 737 76 38
  - Eyüp: +90 (538) 661 68 06
- Şube kartlarında telefon numarası tıklanabilir (`tel:`) olarak eklenecek.
- Footer'daki tek telefon satırı kaldırılıp yerine "Şubelerimizden ulaşın" ifadesi konacak.

## 2. Instagram bağlantıları
Facebook ikonlarını tamamen kaldır. Sosyal medya kısımlarında (footer + iletişim sayfası "Sosyal Medya" kartı) her şube için ayrı Instagram butonu:
- Yıldırım → https://instagram.com/bihteranaokullari
- Kocatepe → https://instagram.com/bihteranaokullariikocatepe
- Eyüp → https://instagram.com/bihteranaokullarieyup

Her buton şube adıyla etiketli, `target="_blank"` ile açılacak.

## 3. Ön kayıt formu → mailto
Form gönderildiğinde tarayıcının e-posta uygulaması `bihteranaokullari@hotmail.com` alıcısıyla açılacak. Konu: "Ön Kayıt Talebi — [Veli Adı]". Gövde: form alanlarının biçimlendirilmiş özeti (veli, telefon, e-posta, çocuk yaşı, mesaj). Backend/DB yok.

## 4. Metin güncellemeleri (tüm sayfalarda)
- "3–6 yaş" → "2–6 yaş"
- "12+" / "12 yıl" → "9 yıl(lık)"
- "2025-2026 Ön Kayıtlar Açık" → "2026-2027 Ön Kayıtlar Açık"

Etkilenen yerler: `src/routes/index.tsx` (hero rozet, stats, hero paragrafı, floating badge), `src/routes/hakkimizda.tsx` (hero paragrafı, meta description, hikaye tarihi "2013" ifadesi 9 yıla uyacak şekilde "birkaç yıl önce" gibi genel hale gelecek), `src/routes/iletisim.tsx` meta.

## 5. Font değişimi — DynaPuff
- `src/routes/__root.tsx` head links'ine DynaPuff Google Fonts `<link>` eklenecek (Fredoka yerine).
- `src/styles.css` içinde `--font-display` DynaPuff olarak güncellenecek. Body fontu (Nunito) aynı kalır. Böylece tüm `font-display bold` başlıklar otomatik DynaPuff olur.

## 6. Ana sayfa — Kurum Müdürlerimiz bölümü
"Randevu Al" CTA'sının hemen altına yeni bir section:
- Başlık: "Kurum Müdürlerimiz"
- 3 kart (Yıldırım / Kocatepe / Eyüp şubeleri için)
- Her kartta 3:4 oranında portre alanı + isim (şimdilik "—") + şube etiketi
- Fotoğraflar için 3:4 oranlı yer tutucu avatar: gradient arka plan + kullanıcı ikonu (lucide `UserRound`). Kullanıcı sonradan gerçek fotoğrafları verince değiştirilecek.
- Kartlar mevcut kart stiliyle uyumlu (rounded-[2rem], border, hover -translate-y, animate-fade-up gecikmeli).

## 7. Hakkımızda sayfa hatası
Runtime hata: `/hakkimizda` → "Importing a module script failed". Bu tipik olarak eski bundle referansından/asset import zincirinden kaynaklanır. Uygulanacak adımlar:
1. `hakkimizda.tsx` dosyasını yeniden yaz (aynı içerik + yukarıdaki metin güncellemeleri) — asset import'ları temiz olsun.
2. Değişiklik sonrası dev server'ın hata vermediğini doğrulamak için sandbox loglarını kontrol et, gerekirse Playwright ile `/hakkimizda` sayfasına gidip ekran görüntüsü al.
3. Hâlâ hata varsa dev server'ı restart et.

## Teknik detaylar
- Şube verisi tek kaynak olacak şekilde `src/lib/branches.ts` altına taşınacak: `{ name, address, district, phone, instagram, mapQuery }`. `site-footer.tsx` ve `iletisim.tsx` buradan import edecek.
- Font değişikliği DynaPuff için `wght@400..700` variable range yüklenecek, `display=swap`.
- Mailto oluşturma client-side: `encodeURIComponent` ile subject/body kaçış.
- Placeholder avatarlar için ayrı bir asset üretmek yerine CSS gradient + lucide ikonu kullanılacak (net, hafif, kullanıcı gerçek fotoğrafla değiştirince kolay).

## Etkilenen dosyalar
- `src/lib/branches.ts` (yeni)
- `src/components/site-nav.tsx`
- `src/components/site-footer.tsx`
- `src/routes/__root.tsx`
- `src/routes/index.tsx`
- `src/routes/hakkimizda.tsx`
- `src/routes/iletisim.tsx`
- `src/styles.css`
