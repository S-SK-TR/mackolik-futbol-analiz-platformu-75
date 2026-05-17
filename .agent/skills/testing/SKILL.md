---
name: testing
description: Test stratejisi, test piramidi, TDD döngüsü ve test best practices
---

# 🧪 Testing Skill

Bu skill, kapsamlı ve etkili test yazma süreçlerini yönetir.

---

## Sorumluluklar

1. **Test Stratejisi**: Test piramidi ve kapsam planlaması
2. **Unit Testing**: İzole fonksiyon/modül testleri
3. **Integration Testing**: Modüller arası etkileşim testleri
4. **E2E Testing**: Kullanıcı senaryosu testleri
5. **Test Kalitesi**: Anlamlı, bakımı kolay testler yazma

---

## Test Piramidi

```
        ╱╲
       ╱E2E╲          ← Az sayıda, yavaş, kritik akışlar
      ╱──────╲
     ╱ Integr. ╲      ← Orta sayıda, modül etkileşimleri
    ╱────────────╲
   ╱  Unit Tests  ╲   ← Çok sayıda, hızlı, izole testler
  ╱────────────────╲
```

| Seviye | Oran | Hız | Kapsam |
|--------|------|-----|--------|
| Unit | %70 | Çok Hızlı | Fonksiyonlar, sınıflar |
| Integration | %20 | Orta | Modül etkileşimleri, API |
| E2E | %10 | Yavaş | Kullanıcı akışları |

---

## Test Yazma Kalıpları

### AAA Pattern (Arrange-Act-Assert)

```javascript
describe('Calculator', () => {
  describe('add()', () => {
    it('should return sum of two positive numbers', () => {
      // Arrange
      const calculator = new Calculator();
      const a = 5;
      const b = 3;

      // Act
      const result = calculator.add(a, b);

      // Assert
      expect(result).toBe(8);
    });

    it('should handle negative numbers', () => {
      // Arrange
      const calculator = new Calculator();

      // Act
      const result = calculator.add(-5, 3);

      // Assert
      expect(result).toBe(-2);
    });

    it('should throw error for non-numeric input', () => {
      // Arrange
      const calculator = new Calculator();

      // Act & Assert
      expect(() => calculator.add('a', 3)).toThrow(TypeError);
    });
  });
});
```

### Test İsimlendirme Kuralları

```javascript
// Format: should_[beklenen sonuç]_when_[koşul]
it('should return empty array when no items match filter')
it('should throw ValidationError when email is invalid')
it('should update user profile when valid data is provided')
it('should redirect to login when session is expired')
```

---

## Test Dosya Organizasyonu

```
tests/
├── unit/
│   ├── utils/
│   │   ├── string.utils.test.js
│   │   └── date.utils.test.js
│   └── features/
│       ├── auth.test.js
│       └── dashboard.test.js
├── integration/
│   ├── api/
│   │   ├── auth.api.test.js
│   │   └── users.api.test.js
│   └── services/
│       └── user-service.test.js
├── e2e/
│   ├── login.e2e.test.js
│   ├── dashboard.e2e.test.js
│   └── checkout.e2e.test.js
├── fixtures/
│   ├── users.fixture.js
│   ├── products.fixture.js
│   └── mock-data.json
└── helpers/
    ├── test-utils.js
    ├── setup.js
    └── teardown.js
```

---

## TDD Döngüsü (Red-Green-Refactor)

```
1. 🔴 RED    → Başarısız test yaz (beklenen davranışı tanımla)
2. 🟢 GREEN  → Testi geçecek minimum kodu yaz
3. 🔵 REFACTOR → Kodu temizle (test hâlâ geçmeli)
4. ↩️ TEKRARLA
```

### TDD Kuralları
1. Başarısız bir test olmadan production kodu yazma
2. Sadece bir testi geçirecek kadar kod yaz
3. Refactoring sırasında yeni özellik ekleme

---

## Mock & Stub

### Ne Zaman Mock Kullanılır?
- External API çağrıları
- Database operasyonları
- Dosya sistemi işlemleri
- Time-dependent operasyonlar
- Random değerler

### Ne Zaman Mock KULLANILMAZ?
- Pure fonksiyonlar
- Basit data transformasyonları
- Konfigürasyon nesneleri

```javascript
// Mock örneği
jest.mock('./api/userApi', () => ({
  fetchUser: jest.fn().mockResolvedValue({
    id: 1,
    name: 'Test User',
    email: 'test@example.com'
  })
}));
```

---

## Coverage Hedefleri

| Metrik | Minimum | İdeal |
|--------|---------|-------|
| Line Coverage | %80 | %90+ |
| Branch Coverage | %75 | %85+ |
| Function Coverage | %80 | %90+ |
| Statement Coverage | %80 | %90+ |

> ⚠️ Coverage = kalite değil. %100 coverage kötü testlerle anlamsızdır.

---

## Test Anti-Patterns (Kaçınılması Gerekenler)

1. ❌ **Test içinde logic**: if/else, loop kullanma
2. ❌ **Multiple assertions**: Bir testte çok fazla assert
3. ❌ **Tightly coupled**: Testler birbirine bağımlı olmamalı
4. ❌ **Implementation testing**: Davranışı test et, implementasyonu değil
5. ❌ **Flaky tests**: Bazen geçen bazen geçmeyen testler
6. ❌ **Slow tests**: Unit testler milisaniye düzeyinde olmalı
7. ❌ **No cleanup**: Her test kendi state'ini temizlemeli

---

## Best Practices

1. **Testler hızlı olmalı**: Yavaş testler çalıştırılmaz
2. **Testler bağımsız olmalı**: Sıralama önemli olmamalı
3. **Testler tekrarlanabilir olmalı**: Aynı sonucu vermeli
4. **Testler okunabilir olmalı**: Test = canlı dokümantasyon
5. **Edge case'leri kapsmalı**: Null, undefined, empty, boundary
6. **Error path'leri test et**: Sadece happy path yetmez
