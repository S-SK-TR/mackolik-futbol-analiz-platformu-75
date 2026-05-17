---
description: Deployment pipeline — build, validate ve production deploy işlemleri
---

# 🚢 Deploy Workflow

Production veya staging ortamına deployment sürecini yönetir.

## Adımlar

### 1. Pre-Deploy Kontrolleri
- [ ] Tüm testler geçiyor mu?
- [ ] Lint hataları yok mu?
- [ ] CHANGELOG güncel mi?
- [ ] Versiyon numarası güncellendi mi?
- [ ] Breaking change var mı? (ADR yazıldı mı?)

### 2. Build
// turbo
```bash
npm run build
```
Production build'in hatasız tamamlandığından emin ol.

### 3. Build Doğrulama
// turbo
```bash
npm run preview
```
Build çıktısını kontrol et. Beklenmeyen dosya veya hata var mı?

### 4. Versiyon Güncelle
```bash
npm version patch  # veya minor / major
```

### 5. Tag ve Push
```bash
git tag -a v[VERSION] -m "Release v[VERSION]"
git push origin main --tags
```

### 6. Deploy
```bash
npm run deploy
```

### 7. Post-Deploy Doğrulama
- [ ] Uygulama canlıda erişilebilir mi?
- [ ] Kritik endpoint'ler çalışıyor mu?
- [ ] Performans metrikleri normal mi?
- [ ] Error tracking aktif mi?

## Rollback Prosedürü
Eğer deployment başarısız olursa:
1. Önceki versiyon tag'ine dön
2. Rollback deploy yap
3. Post-mortem raporu hazırla

## Notlar
- Deployment öncesi mutlaka staging'de test et
- Cuma akşamı deploy yapma! 🚫
- Her deployment için backup al
