# 🏛️ Mimari Prensipler

> Bu belge, proje mimarisi için temel ilkeleri ve kararları tanımlar.

---

## Temel Prensipler

### 1. Separation of Concerns (Sorumluluk Ayrımı)
Her katman ve modül belirli bir sorumluluğa sahiptir. Katmanlar arası bağımlılıklar minimumda tutulur.

```
┌──────────────────────────────┐
│        Presentation          │  ← UI, Components, Pages
├──────────────────────────────┤
│        Application           │  ← Use Cases, Business Logic
├──────────────────────────────┤
│          Domain              │  ← Entities, Value Objects
├──────────────────────────────┤
│       Infrastructure         │  ← API, Database, External Services
└──────────────────────────────┘
```

### 2. Feature-Based Architecture
Koyu teknik katmanlar yerine, iş alanlarına göre organize et.

```
// ❌ Kötü — Teknik katman bazlı
src/
├── components/     ← 50 component dosyası karışık
├── services/       ← Hangi feature'a ait belli değil
└── utils/          ← Dev bin

// ✅ İyi — Feature bazlı
src/
├── features/
│   ├── auth/       ← Login, register, token
│   ├── dashboard/  ← Dashboard widgets, charts
│   └── settings/   ← User preferences, config
├── shared/         ← Cross-feature paylaşımlar
└── core/           ← Framework, bootstrap
```

### 3. Dependency Rule
Bağımlılıklar sadece **içe doğru** akmalıdır.

```
UI → Application → Domain ← Infrastructure
        ↓
   Domain hiçbir şeye bağımlı olmamalı
```

### 4. Abstraction & Loose Coupling
```javascript
// ❌ Kötü — Tight coupling
class OrderService {
  async save(order) {
    await mysql.query('INSERT INTO orders...', order);  // DB'ye doğrudan bağımlı
  }
}

// ✅ İyi — Loose coupling via interface
class OrderService {
  constructor(repository) {
    this.repository = repository;  // Herhangi bir storage olabilir
  }
  
  async save(order) {
    await this.repository.save(order);
  }
}
```

---

## Katman Sorumlulukları

### Presentation Layer (UI)
- **Sorumluluk**: Kullanıcı arayüzü ve etkileşim
- **İçerik**: Components, Pages, Layouts, Styles
- **Kural**: İş mantığı içermemeli

### Application Layer (Use Cases)
- **Sorumluluk**: İş akışları ve orchestration
- **İçerik**: Services, Controllers, Middleware
- **Kural**: Tek bir use case'e odaklanmalı

### Domain Layer (Core Business)
- **Sorumluluk**: İş kuralları ve domain logic
- **İçerik**: Entities, Value Objects, Domain Events
- **Kural**: Framework'e bağımlı olmamalı

### Infrastructure Layer (External)
- **Sorumluluk**: Dış dünya ile iletişim
- **İçerik**: API clients, Database, File system, Cache
- **Kural**: Domain interface'lerini implement etmeli

---

## Mimari Kararlar

### Karar Kayıt Süreci
1. Karar gerektiğinde `docs/decisions/` altında ADR oluştur
2. Alternatifleri ve trade-off'ları belgele
3. Kararı takımla tartış
4. Onaylanan kararı Accepted olarak işaretle
5. Superseded kararları belirt

### Referans
ADR formatı için [Documentation Skill](../.agent/skills/documentation/SKILL.md) belgesine bakın.

---

## Cross-Cutting Concerns

Bu konular tüm katmanları keser ve tutarlı bir şekilde ele alınmalıdır:

| Konu | Yaklaşım |
|------|----------|
| **Logging** | Merkezi logger service, structured logging |
| **Error Handling** | Global error boundary, custom error sınıfları |
| **Authentication** | Middleware tabanlı, token-based |
| **Authorization** | Role/permission tabanlı, guard pattern |
| **Validation** | Input katmanında, reusable validators |
| **Caching** | Strategy pattern, TTL-based |
| **Configuration** | Environment-based, centralized config |
| **Monitoring** | Health checks, metrics, alerting |

---

## Scalability Prensipleri

1. **Stateless design**: Her instance bağımsız olmalı
2. **Horizontal scaling**: Yatay ölçeklenmeye uygun tasarla
3. **Cache wisely**: Doğru katmanda, doğru stratejide cache
4. **Async where possible**: Uzun süreli işlemleri asenkron yap
5. **Database indexing**: Query pattern'lerine göre index oluştur
6. **CDN usage**: Statik dosyalar CDN'den serve edilmeli

---

## Security by Design

1. **Input validation**: Her giriş noktasında doğrula
2. **Least privilege**: Minimum yetki ile çalış
3. **Defense in depth**: Çok katmanlı güvenlik
4. **Secrets management**: Gizli bilgileri environment'da tut
5. **Audit logging**: Kritik işlemleri logla
6. **Regular updates**: Bağımlılıkları güncel tut

---

## Best Practices

1. **Start simple**: Karmaşıklığı ihtiyaç oldukça ekle (YAGNI)
2. **Document decisions**: Neden böyle tasarlandığını belgele
3. **Review regularly**: Mimariyi periyodik olarak gözden geçir
4. **Measure first**: Optimizasyon öncesi ölç
5. **Consistency**: Tüm modüllerde aynı pattern'leri kullan
