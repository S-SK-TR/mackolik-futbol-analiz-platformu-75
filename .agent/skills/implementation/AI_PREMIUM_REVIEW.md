# 💎 AI Premium Review Skill

Bu yetenek, bir React/Vite uygulamasının "Premium SaaS" standartlarına uygunluğunu denetlemek ve iyileştirmek için kullanılan altın standartları tanımlar. AI, bu dosyayı bir "denetçi" ve "iyileştirici" gözüyle okumalıdır.

---

## 🎯 Denetim Felsefesi
Sadece "çalışan" kod yeterli değildir. Proje şu üç sütun üzerine inşa edilmelidir:
1. **Görsel Büyüleyicilik (Aesthetics)**: İlk bakışta "pahalı" ve profesyonel bir his.
2. **Kusursuz Hareket (Motion)**: Statik olmayan, yaşayan bir arayüz.
3. **Teknik Olgunluk (Architecture)**: PWA desteği ve temiz bağımlılık yönetimi.

---

## 🛠️ Premium Standartlar & Kontrol Listesi

### 1. Görsel Tasarım (Aesthetics)
- **Glassmorphism**: Kartlarda ve navigasyonda `backdrop-blur` (min 12px), `bg-white/5` veya `bg-black/5` ve ince `border-white/10` kullanımı.
- **Bento Grid**: Karmaşık verileri sunarken asimetrik ve modern grid yapıları.
- **Renk Teorisi**: Çiğ renklerden kaçın. Soft geçişler, Mesh Gradients ve derin gölgeler kullan.
- **Tipografi**: Başlıklar için `Outfit`, gövde metni için `Inter`. Mutlaka Google Fonts entegrasyonu yap.

### 2. Animasyon & Mikro-etkileşimler (Motion)
- **Framer Motion**: Tüm önemli öğeler için `initial`, `animate` ve `transition` değerleri tanımlanmalı.
- **Staggered Entry**: Listeler ve grid öğeleri ekrana sırayla, yumuşak bir yükselme efektiyle (`y: 20` → `y: 0`) girmeli.
- **Hover Effects**: Butonlar ve kartlar hover durumunda `scale: 1.02` ve `shadow-xl` gibi tepkiler vermeli.

### 3. PWA & Mobil Uyumluluk
- **Installable**: `vite-plugin-pwa` yapılandırması, `manifest.json` ve tüm ikon setleri (`192x192`, `512x512`) eksiksiz olmalı.
- **Apple Touch Icon**: iOS kullanıcıları için özel ikon tanımlanmalı.
- **Responsive Precision**: Mobil görünümde asla taşma olmamalı, font boyutları ve padding değerleri optimize edilmeli.

---

## 🔍 İnceleme (Review) Tablosu

| Alan | Standart (Standard) | Elit (Premium) |
| :--- | :--- | :--- |
| **Gölgeler** | `shadow-md` | `shadow-[0_20px_50px_rgba(0,0,0,0.1)]` + renkli glow |
| **Köşeler** | `rounded-lg` (8px) | `rounded-2xl` (16px) veya `rounded-3xl` (24px) |
| **Kenarlıklar** | `border-gray-200` | `border-white/20` veya `border-indigo-500/30` |
| **Geçişler** | `transition-all` | `framer-motion` spring transition |
| **Animasyon** | yoksa | staggered entry: y:20→y:0, opacity:0→1 |
| **Hover** | yok | scale:1.02 + shadow-xl |

---

## 🚨 Kritik Fonksiyon Kontrolleri (Runtime Hata Önleyici)

| # | Kontrol | Önem |
|---|---------|------|
| ☐ | `AppShell`'de `<Routes>` ve tüm feature route'ları var mı? | 🔴 Kritik |
| ☐ | Zustand action'ları (`setUi`, `setGallery` vb.) tanımlanmış mı? | 🔴 Kritik |
| ☐ | `useStore` hook'u `useContext → useZustandStore` zinciriyle mi? | 🔴 Kritik |
| ☐ | Sidebar menüleri `<NavLink>` kullanıyor mu? | 🔴 Kritik |
| ☐ | `tsconfig.json`'da `baseUrl` ve `paths` var mı? | 🟡 Önemli |
| ☐ | PWA ikon dosyaları fiziksel olarak mevcut mu? | 🟡 Önemli |
| ☐ | Çift `@tailwind base` direktifi var mı? | 🟡 Önemli |
| ☐ | Feature sayfaları empty state yönetiyor mu? | 🟡 Önemli |
| ☐ | `Maçkolik - Futbol Analiz Platformu` placeholder kalmış mı? | 🟠 Orta |
| ☐ | Store'da `Date` nesnesi yerine ISO string mi? | 🟠 Orta |

---

## 🧪 Test Altyapısı Standardı

- **Runner**: Vitest
- **Ortam**: jsdom
- **Kütüphaneler**: `@testing-library/react`, `@testing-library/jest-dom`
- **Setup**: `tests/setup.ts` (Global mock'lar ve store reset)
- **Komutlar**:
  - `npm run test`: Tüm testleri çalıştırır
  - `npm run test:coverage`: Kod kapsama raporu oluşturur

---

## 🚀 AI İçin Uygulama Talimatı
Bir projeyi incelerken veya kodlarken:
1. Önce bu standartları oku.
2. Mevcut kodun bu standartların neresinde olduğunu puanla (0-100).
3. Eksik olan her maddeyi projenin bir sonraki iterasyonunda ("fix" veya "visual_enhancer" turu) mutlaka koda uygula.
4. **Asla placeholders (lorem ipsum) kullanma**; gerçekçi SaaS içerikleri üret.
5. AppShell'deki `<Routes>` bloğunu ve NavLink bileşenlerini asla bozma.
