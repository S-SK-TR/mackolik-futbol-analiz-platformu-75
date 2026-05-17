# 🐛 Bug Fix Prompt

> Bug düzeltme talebi için sık kullanılan prompt şablonu.

---

## Kullanım

Bu prompt'u bug rapor ederken ve düzeltme talep ederken kullanın:

```
## Bug Raporu

### Açıklama
[Bug'ın kısa açıklaması]

### Beklenen Davranış
[Ne olması gerekiyordu?]

### Mevcut Davranış
[Ne oluyor?]

### Reproduksiyon Adımları
1. [Adım 1]
2. [Adım 2]
3. [Adım 3]

### Ortam
- OS: [Windows/macOS/Linux]
- Browser: [Chrome/Firefox/Safari + versiyon]
- Node.js: [versiyon]
- Uygulama versiyonu: [versiyon]

### Ekran Görüntüsü / Hata Logu
[Varsa ekleyin]

### Olası Neden (tahmini)
[Tahmininiz varsa belirtin]

### Önem Seviyesi
- [ ] 🔴 Critical — Uygulama çöküyor / veri kaybı
- [ ] 🟠 High — Önemli özellik çalışmıyor
- [ ] 🟡 Medium — Geçici çözüm mevcut
- [ ] 🟢 Low — Kozmetik / küçük sorun
```

---

## Düzeltme Süreci
1. Bug'ı reproduse et
2. Hatayı reproduse eden test yaz
3. Düzeltmeyi uygula
4. Testin geçtiğini doğrula
5. Regresyon testi çalıştır
