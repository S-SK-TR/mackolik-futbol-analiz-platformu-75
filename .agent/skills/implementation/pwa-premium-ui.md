---
name: premium-ui
description: Premium UI/UX standartları, Glassmorphism, Bento Grid ve PWA entegrasyonu rehberi
---

# 💎 Premium UI/UX Skill

Bu skill, projelerin "Sıradan" bir seviyeden "Premium/Unicorn" seviyesine taşınması için gerekli olan görsel ve teknik standartları tanımlar.

---

## 🎯 Temel Prensipler

1. **Görsel Mükemmellik**: Sadece çalışan değil, büyüleyen bir tasarım.
2. **Akıcı Etkileşim**: Her tıklama ve geçişte mikro-animasyonlar.
3. **PWA Standartları**: Mobil uygulama kalitesinde web deneyimi.
4. **Modern Layout**: Standart grid yerine Bento Grid gibi dinamik yapılar.

---

## 🛠️ Premium Standartlar Listesi (Checklist)

### 1. Görsel Tasarım (Aesthetics)
- [ ] **Glassmorphism**: Backdrop blur (min `blur-md`), yarı şeffaf arka planlar (`bg-opacity-70`) ve ince beyaz border'lar (`border-white/20`).
- [ ] **Premium Renk Paleti**: Saf renkler yerine, Vercel/Linear tarzı derin slate/indigo veya özel HSL paletleri.
- [ ] **Typography**: 
  - Headings için: `Outfit` veya `Satoshi`.
  - Body için: `Inter` veya `Geist`.
  - Hiyerarşi: Büyük ve cesur (bold) başlıklar, geniş satır aralıkları.

### 2. Animasyonlar (Motion)
- [ ] **Giriş Animasyonları**: Sayfa yüklenirken öğelerin sırayla gelmesi (Staggered fade-up).
- [ ] **Etkileşimler**: Butonlara `whileHover={{ scale: 1.05 }}` ve `whileTap={{ scale: 0.95 }}` eklenmesi.
- [ ] **Sayfa Geçişleri**: `AnimatePresence` ile yumuşak geçişler.

### 3. Progressive Web App (PWA)
- [ ] **Eksiksiz Assetler**:
  - `pwa-192x192.png`
  - `pwa-512x512.png`
  - `apple-touch-icon.png`
  - `masked-icon.svg` (Safari için)
- [ ] **Manifest Konfigürasyonu**: `theme_color`, `background_color` ve `display: standalone` ayarlarının doğruluğu.
- [ ] **Offline Desteği**: Temel sayfaların çevrimdışı görüntülenebilmesi.

### 4. Layout & Yapı
- [ ] **Bento Grid**: Ana sayfada modüler, farklı boyutlarda kart yapısı.
- [ ] **Responsive Precision**: Mobil, tablet ve masaüstü için kusursuz uyum (Breakpoint testleri).

---

## 📐 Örnek Uygulama (Reference Implementation)

### Glassmorphism Card
```tsx
<motion.div
  whileHover={{ y: -5 }}
  className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl"
>
  {/* Content */}
</motion.div>
```

### Premium Button
```tsx
<button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.4)]">
  Hadi Başlayalım
</button>
```

---

## 🔍 Denetim (Review) Kriterleri

| Kriter | Kabul Edilebilir | Premium |
|--------|------------------|---------|
| Gölgeler | Standart `shadow-md` | Soft, renkli ve katmanlı gölgeler |
| Köşeler | `rounded-lg` (8px) | `rounded-[2rem]` veya `rounded-4xl` |
| Kenarlıklar | `border-gray-200` | `border-white/10` + `backdrop-blur` |
| Fontlar | System Sans-Serif | Custom Google Fonts (Outfit/Inter) |

---

## 🚀 Uygulama Adımları

1. **Analiz**: Mevcut projedeki "sıradan" bileşenleri tespit et.
2. **PWA Hazırlığı**: Eksik ikonları üret ve `public` klasörüne ekle.
3. **CSS Refactoring**: `index.css` içine global premium değişkenleri ve glass sınıflarını ekle.
4. **Iteratif Geliştirme**: Bileşenleri tek tek Framer Motion ve Glassmorphism ile güncelle.
5. **Final Review**: Lighthouse ve PWA denetimlerini yap.
