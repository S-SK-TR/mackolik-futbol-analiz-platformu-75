---
description: Test suite'lerini çalıştırır — unit, integration ve e2e testleri
---

# 🧪 Test Workflow

Proje test pipeline'ını yönetir.

## Adımlar

### 1. Unit Testleri Çalıştır
// turbo
```bash
npm run test:unit
```
Tüm unit testlerin geçtiğinden emin ol.

### 2. Integration Testleri Çalıştır
// turbo
```bash
npm run test:integration
```
Modüller arası etkileşimleri doğrula.

### 3. E2E Testleri Çalıştır
```bash
npm run test:e2e
```
Kullanıcı senaryolarını uçtan uca test et.

### 4. Coverage Raporu Oluştur
// turbo
```bash
npm run test:coverage
```
Coverage oranını kontrol et:
- **Minimum Hedef**: %80 line coverage
- **İdeal Hedef**: %90+ branch coverage

### 5. Sonuçları Değerlendir
- Başarısız testleri incele ve düzelt
- Coverage düştüyse yeni testler ekle
- Test raporunu `tests/reports/` altına kaydet

## Test Yazma Kuralları
1. Her public fonksiyon için en az 1 unit test
2. Her API endpoint için integration test
3. Her kullanıcı hikayesi için e2e test
4. Edge case'leri ve error handling'i test et
5. Test isimleri açıklayıcı olmalı: `should_[beklenen]_when_[koşul]`

## Notlar
- Testler `tests/` dizini altında organize edilir
- Fixture'lar `tests/fixtures/` altında tutulur
- Mock'lar test dosyasının yanında veya `tests/__mocks__/` altında
