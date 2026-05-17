---
name: implementation
description: Kod yazma standartları, design patterns, refactoring stratejileri ve best practices
---

# 💻 Implementation Skill

Bu skill, temiz, bakımı kolay ve ölçeklenebilir kod yazma süreçlerini yönetir.

---

## Sorumluluklar

1. **Clean Code**: Okunabilir, anlaşılır ve bakım yapılabilir kod yazma
2. **Design Patterns**: Uygun tasarım kalıplarını seçme ve uygulama
3. **Refactoring**: Mevcut kodu iyileştirme
4. **Error Handling**: Kapsamlı hata yönetimi
5. **Performance**: Performans odaklı geliştirme

---

## Kod Yazma Prensipleri

### SOLID Prensipleri
- **S**ingle Responsibility: Her modül tek bir sorumluluğa sahip
- **O**pen/Closed: Uzantıya açık, değişikliğe kapalı
- **L**iskov Substitution: Alt sınıflar üst sınıfın yerine kullanılabilir
- **I**nterface Segregation: Kullanılmayan arayüzlere bağımlılık olmamalı
- **D**ependency Inversion: Üst seviye modüller alt seviyeye bağımlı olmamalı

### Clean Code Kuralları
1. **Anlamlı isimlendirme**: Değişken, fonksiyon ve sınıf isimleri amacı açıklamalı
2. **Küçük fonksiyonlar**: Bir fonksiyon tek bir iş yapmalı (max 20-30 satır)
3. **Yorum yerine kod**: Kod kendini açıklamalı; yorum sadece "neden" için
4. **DRY**: Kendini tekrarlama — tekrar eden kodu soyutla
5. **KISS**: Basit tut — gereksiz karmaşıklıktan kaçın
6. **YAGNI**: İhtiyacın olmayacak — şu an gerekli olmayan kodu yazma

---

## Dosya Yapısı Şablonu

### Feature-Based Yapı (Önerilen)
```
src/features/[feature-name]/
├── index.js              # Public API (barrel export)
├── [feature-name].js     # Ana bileşen/modül
├── [feature-name].css    # Stiller
├── [feature-name].test.js # Testler
├── utils.js              # Feature-specific yardımcılar
├── constants.js          # Sabitler
└── types.js              # Tip tanımları (TS kullanılıyorsa)
```

### Shared Modül Yapısı
```
src/shared/
├── utils/
│   ├── index.js
│   ├── string.utils.js
│   ├── date.utils.js
│   └── validation.utils.js
├── constants/
│   ├── index.js
│   ├── app.constants.js
│   └── api.constants.js
├── types/
│   └── index.d.ts
└── hooks/ (React ise)
    ├── useLocalStorage.js
    └── useFetch.js
```

---

## Error Handling Stratejisi

```javascript
// ❌ Kötü
try {
  doSomething();
} catch (e) {
  console.log(e);
}

// ✅ İyi
try {
  const result = await doSomething();
  return result;
} catch (error) {
  if (error instanceof ValidationError) {
    logger.warn('Validation failed', { context: error.details });
    throw new UserFacingError('Geçersiz veri', 400);
  }
  if (error instanceof NetworkError) {
    logger.error('Network failure', { url: error.url, status: error.status });
    throw new UserFacingError('Bağlantı hatası, lütfen tekrar deneyin', 503);
  }
  logger.error('Unexpected error in doSomething', { error });
  throw new UserFacingError('Beklenmeyen bir hata oluştu', 500);
}
```

---

## Sık Kullanılan Design Patterns

| Pattern | Kullanım Alanı | Örnek |
|---------|----------------|-------|
| Module | Encapsulation | ES Modules, IIFE |
| Observer | Event handling | EventEmitter, PubSub |
| Factory | Object creation | createWidget(), buildConfig() |
| Strategy | Algoritma seçimi | Sort stratejileri, validation kuralları |
| Singleton | Tek instance | Config manager, Logger |
| Adapter | Uyumluluk | API wrapper, data transformer |
| Decorator | Fonksiyon zenginleştirme | Middleware, HOC |

---

## Code Review Checklist (Self-Review)

Kodu commit etmeden önce kendin kontrol et:

- [ ] Tüm testler geçiyor mu?
- [ ] İsimlendirme kurallarına uygun mu?
- [ ] Error handling var mı?
- [ ] Edge case'ler düşünüldü mü?
- [ ] Gereksiz console.log kaldırıldı mı?
- [ ] Magic number/string yok mu?
- [ ] Fonksiyonlar küçük ve odaklı mı?
- [ ] TODO yorumları issue'ya dönüştürüldü mü?

---

## Best Practices

1. **Önce test yaz** (TDD): Implement etmeden önce beklentiyi tanımla
2. **Küçük commitler**: Her commit tek bir mantıksal değişiklik
3. **Feature branch**: Her özellik kendi branch'inde
4. **Refactor sık**: Kod kokusu fark ettiğinde hemen refactor et
5. **Dependency minimize et**: Gerçekten gerekli olmayan paketleri ekleme
