---
description: Kod inceleme süreci — kalite, güvenlik ve best practice kontrolleri
---

# 🔍 Code Review Workflow

Kod değişikliklerinin kalite kontrolünü yapar.

## Adımlar

### 1. Değişiklikleri İncele
// turbo
```bash
git diff --stat
```
Hangi dosyaların değiştiğini ve nedenini anla.

### 2. Kod Kalite Kontrolü
// turbo
```bash
npm run lint
```

### 3. Stil ve Format Kontrolü
// turbo
```bash
npm run format:check
```

### 4. Test Kontrolü
// turbo
```bash
npm run test
```

### 5. İnceleme Kontrol Listesi

#### Mimari & Tasarım
- [ ] Single Responsibility Principle uygulanmış mı?
- [ ] DRY (Don't Repeat Yourself) ihlali var mı?
- [ ] Gereksiz coupling var mı?
- [ ] Mimari prensiplere uygun mu? (`.instructions/architecture-principles.md`)

#### Kod Kalitesi
- [ ] İsimlendirme kurallarına uygun mu? (`.instructions/naming-conventions.md`)
- [ ] Fonksiyonlar küçük ve odaklı mı?
- [ ] Magic number/string yok mu?
- [ ] Error handling yapılmış mı?
- [ ] Edge case'ler düşünülmüş mü?

#### Güvenlik
- [ ] Kullanıcı input'u sanitize ediliyor mu?
- [ ] Sensitive data log'lanmıyor mu?
- [ ] SQL injection / XSS riski var mı?
- [ ] Authentication/Authorization kontrolleri yapılıyor mu?

#### Performans
- [ ] Gereksiz re-render yok mu?
- [ ] N+1 query problemi var mı?
- [ ] Memory leak riski var mı?
- [ ] Büyük dosyalar lazy load ediliyor mu?

#### Dokümantasyon
- [ ] Yeni API'ler belgelenmiş mi?
- [ ] Complex logic açıklanmış mı?
- [ ] CHANGELOG güncellendi mi?
- [ ] Breaking change ADR yazıldı mı?

### 6. Geri Bildirim
- Yapıcı ve açıklayıcı geri bildirim ver
- "Neden" sorusuna cevap ver, sadece "ne" deme
- Alternatif çözüm öner
- İyi pratikleri de belirt (sadece hataları değil)

## Notlar
- Her PR en az 1 reviewer tarafından onaylanmalı
- Kritik değişiklikler 2 reviewer gerektirir
- Bir sonraki PR'a geçmeden önce geri bildirimleri çöz
