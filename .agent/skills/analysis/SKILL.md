---
name: analysis
description: Kod analizi, performans profiling, güvenlik denetimi ve teknik borç değerlendirmesi
---

# 🔬 Analysis Skill

Bu skill, kod ve sistem analizi süreçlerini yönetir.

---

## Sorumluluklar

1. **Kod Analizi**: Kod kalitesi, karmaşıklık ve bakım kolaylığı değerlendirmesi
2. **Performans Analizi**: Darboğaz tespiti ve optimizasyon önerileri
3. **Güvenlik Denetimi**: Zafiyet taraması ve güvenlik analizi
4. **Teknik Borç**: Teknik borç tespiti ve ödeme stratejisi
5. **Bağımlılık Analizi**: Paket güvenliği ve güncellik kontrolü

---

## Analiz Türleri

### 1. Kod Kalite Analizi

```markdown
## Kod Kalite Raporu

### Metrikler
| Metrik | Değer | Hedef | Durum |
|--------|-------|-------|-------|
| Cyclomatic Complexity | [N] | < 10 | ✅/❌ |
| Code Duplication | [%] | < 5% | ✅/❌ |
| Function Length (avg) | [lines] | < 30 | ✅/❌ |
| File Length (avg) | [lines] | < 300 | ✅/❌ |
| Test Coverage | [%] | > 80% | ✅/❌ |

### Sorunlar
| Dosya | Satır | Sorun | Önem | Öneri |
|-------|-------|-------|------|-------|
| ... | ... | ... | High | ... |

### Özet
[Genel değerlendirme ve aksiyon önerileri]
```

### 2. Performans Analizi

Kontrol noktaları:
- **Bundle Size**: Gereksiz büyük paketler var mı?
- **Render Performance**: Gereksiz re-render var mı?
- **Memory**: Memory leak riski var mı?
- **Network**: Gereksiz API çağrısı var mı?
- **Database**: N+1 query, index eksikliği var mı?
- **Async**: Paralel çalıştırılabilecek sequential işlemler var mı?

### 3. Güvenlik Denetimi

Kontrol listesi:
- [ ] Input validation ve sanitization
- [ ] Authentication & Authorization
- [ ] CORS konfigürasyonu
- [ ] Rate limiting
- [ ] Sensitive data exposure
- [ ] SQL Injection / XSS / CSRF koruması
- [ ] Dependencies güvenlik taraması (`npm audit`)
- [ ] Environment variable yönetimi
- [ ] Error message'larda bilgi sızıntısı

### 4. Teknik Borç Değerlendirmesi

```markdown
## Teknik Borç Raporu

### Kategori: [High/Medium/Low]

| # | Borç | Dosya(lar) | Etki | Tahmini Efor | Öncelik |
|---|------|-----------|------|-------------|---------|
| 1 | ... | ... | ... | ... | P1 |

### Ödeme Stratejisi
- Sprint bazında %20 kapasiteyi teknik borç'a ayır
- Yeni özelliklerle birlikte ilgili borçları öde
- Kritik borçları özel sprint ile ele al
```

---

## Analiz Araçları

| Araç | Amaç | Komut |
|------|-------|-------|
| ESLint | Kod kalitesi | `npm run lint` |
| npm audit | Güvenlik | `npm audit` |
| Lighthouse | Performans | Chrome DevTools |
| Bundle Analyzer | Bundle size | `npm run analyze` |

---

## Best Practices

1. **Düzenli analiz**: Her sprint sonunda otomatik analiz çalıştır
2. **Trend takibi**: Metriklerdeki değişimi izle
3. **Aksiyon odaklı**: Her analiz raporu aksiyon önerileri içermeli
4. **Otomasyona yatırım**: Manuel kontrolleri otomatize et
5. **Bağlam önemli**: Metrikleri proje bağlamında değerlendir
