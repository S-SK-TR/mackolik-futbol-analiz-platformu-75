---
name: documentation
description: Proje dokümantasyon standartları, ADR yazma ve API belgeleme kuralları
---

# 📚 Documentation Skill

Bu skill, proje dokümantasyonunu yönetir — yaşayan, güncel ve yararlı dokümanlar oluşturur.

---

## Sorumluluklar

1. **Kod Dokümantasyonu**: JSDoc, inline comments, README dosyaları
2. **Mimari Dokümantasyon**: Architecture Decision Records (ADR)
3. **API Dokümantasyonu**: Endpoint'ler, parametreler, response formatları
4. **Kullanıcı Kılavuzları**: Getting started, howto, FAQ
5. **Changelog Yönetimi**: Sürüm notları ve değişiklik geçmişi

---

## Dokümantasyon Türleri

### 1. Kod İçi Dokümantasyon

```javascript
/**
 * Kullanıcı verilerini sunucudan getirir ve cache'e yazar.
 *
 * @param {string} userId - Kullanıcının benzersiz kimliği
 * @param {Object} [options] - İsteğe bağlı ayarlar
 * @param {boolean} [options.useCache=true] - Cache kullanılsın mı
 * @param {number} [options.timeout=5000] - İstek timeout süresi (ms)
 * @returns {Promise<User>} Kullanıcı nesnesi
 * @throws {NotFoundError} Kullanıcı bulunamadığında
 * @throws {NetworkError} Ağ hatası oluştuğunda
 *
 * @example
 * const user = await fetchUser('usr_123', { useCache: false });
 * console.log(user.name); // "Ahmet Yılmaz"
 */
async function fetchUser(userId, options = {}) { ... }
```

#### Yorum Kuralları
- ✅ **"Neden" açıkla**: İş kuralları, kararlar, workaround'lar
- ❌ **"Ne" açıklama**: Kodun ne yaptığı zaten okunabilir olmalı
- ✅ **TODO/FIXME**: İssue referansı ile (`// TODO(#123): Cache invalidation ekle`)
- ❌ **Yorumlanan kod**: Silmeye korkma, git geçmişinde var

### 2. Architecture Decision Records (ADR)

ADR dosyaları `docs/decisions/` altında tutulur.

```markdown
# ADR-[NNN]: [Karar Başlığı]

**Tarih**: YYYY-MM-DD
**Durum**: Proposed | Accepted | Deprecated | Superseded by ADR-XXX

## Bağlam
[Kararın alınmasını gerektiren durum nedir?]

## Karar
[Ne kararı aldık? Neden bu seçeneği seçtik?]

## Alternatifler
### Seçenek A: [Ad]
- ✅ Avantaj
- ❌ Dezavantaj

### Seçenek B: [Ad] (Seçilen)
- ✅ Avantaj
- ❌ Dezavantaj

## Sonuçlar
[Bu kararın beklenen etkileri nelerdir?]
- Pozitif: ...
- Negatif: ...
- Riskler: ...
```

### 3. API Dokümantasyonu

```markdown
## POST /api/users

Yeni kullanıcı oluşturur.

### Headers
| Header | Value | Zorunlu |
|--------|-------|---------|
| Authorization | Bearer [token] | ✅ |
| Content-Type | application/json | ✅ |

### Request Body
```json
{
  "name": "string (required, 2-100 chars)",
  "email": "string (required, valid email)",
  "role": "string (optional, default: 'user', enum: ['admin', 'user', 'viewer'])"
}
```

### Response

#### 201 Created
```json
{
  "id": "usr_abc123",
  "name": "Ahmet Yılmaz",
  "email": "ahmet@example.com",
  "role": "user",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

#### 400 Bad Request
```json
{
  "error": "VALIDATION_ERROR",
  "message": "Email formatı geçersiz",
  "details": [{ "field": "email", "rule": "email" }]
}
```
```

### 4. Changelog

[Keep a Changelog](https://keepachangelog.com/) formatını kullan:

```markdown
## [1.2.0] - 2024-01-15

### Added
- Kullanıcı profil sayfası eklendi (#45)
- Dark mode desteği eklendi (#52)

### Changed
- Dashboard performansı iyileştirildi (#48)

### Fixed
- Login sayfasında şifre validasyonu düzeltildi (#51)

### Deprecated
- Eski API endpoint'i `/v1/users` yerine `/v2/users` kullanın

### Removed
- Legacy dashboard widget'ı kaldırıldı

### Security
- XSS açığı kapatıldı (#53)
```

---

## Dokümantasyon Yapısı

```
docs/
├── architecture/
│   └── overview.md          # Teknik mimari açıklaması
├── api/
│   └── README.md            # API endpoint referansı
├── guides/
│   ├── getting-started.md   # İlk adımlar kılavuzu
│   └── contributing.md      # Katkıda bulunma kılavuzu
├── decisions/
│   └── template.md          # ADR şablonu
└── changelog/
    └── CHANGELOG.md         # Sürüm notları
```

---

## Best Practices

1. **Yaşayan doküman**: Kod değiştiğinde dokümanı da güncelle
2. **Hedef kitleyi tanı**: Developer vs End-User vs Stakeholder
3. **Örneklerle açıkla**: Soyut açıklamalar yerine somut örnekler
4. **Kısa tut**: Uzun dokümanları kimse okumaz
5. **Erişilebilir yap**: Dokümanları kolayca bulunabilir yap
6. **Tutarlı format**: Tüm dokümanlar aynı stili kullanmalı
