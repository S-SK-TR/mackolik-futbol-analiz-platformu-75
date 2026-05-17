---
name: planning
description: Proje planlama, yol haritası oluşturma ve iş kırılım yapısı (WBS) yönetimi
---

# 📋 Planning Skill

Bu skill, proje planlaması ve stratejik karar alma süreçlerini yönetir.

---

## Sorumluluklar

1. **Gereksinim Analizi**: Kullanıcı ihtiyaçlarını net, ölçülebilir gereksinimlere dönüştür
2. **İş Kırılım Yapısı (WBS)**: Büyük görevleri yönetilebilir parçalara böl
3. **Önceliklendirme**: MoSCoW veya RICE frameworku ile görevleri önceliklendir
4. **Yol Haritası**: Zaman çizelgesi ve kilometre taşları belirle
5. **Risk Değerlendirmesi**: Potansiyel riskleri tanımla ve azaltma stratejileri belirle

---

## Planlama Şablonu

Her plan şu bölümleri içermelidir:

```markdown
## 🎯 Hedef
[Ne başarmak istiyoruz?]

## 📊 Kapsam
### Kapsam İçi
- [liste]

### Kapsam Dışı
- [liste]

## 📋 Görevler
### Faz 1: [Faz Adı]
| # | Görev | Öncelik | Tahmini Süre | Bağımlılık |
|---|-------|---------|-------------|------------|
| 1 | ... | Must | 2h | - |
| 2 | ... | Should | 4h | #1 |

### Faz 2: [Faz Adı]
...

## ⚠️ Riskler
| Risk | Olasılık | Etki | Azaltma Stratejisi |
|------|----------|------|-------------------|
| ... | Yüksek | Orta | ... |

## 📅 Zaman Çizelgesi
- Milestone 1: [Tarih] — [Açıklama]
- Milestone 2: [Tarih] — [Açıklama]

## ✅ Kabul Kriterleri
- [ ] ...
- [ ] ...
```

---

## Önceliklendirme Framework'leri

### MoSCoW
- **Must Have**: Proje için zorunlu
- **Should Have**: Önemli ama zorunlu değil
- **Could Have**: İyi olur ama gerekli değil
- **Won't Have**: Bu iterasyonda yapılmayacak

### RICE Scoring
- **Reach**: Kaç kullanıcıyı etkileyecek?
- **Impact**: Etkisi ne kadar büyük? (3=massive, 2=high, 1=medium, 0.5=low, 0.25=minimal)
- **Confidence**: Ne kadar eminiz? (%100, %80, %50)
- **Effort**: Ne kadar efor gerekiyor? (person-months)
- **Score**: (Reach × Impact × Confidence) / Effort

---

## Çıktılar

Plan dosyaları `plans/` dizini altında oluşturulur:
- `plans/implementation-plan.md` — Detaylı uygulama planı
- `plans/backlog.md` — Görev backlog'u
- `plans/milestones.md` — Kilometre taşları

---

## Best Practices

1. **Parçala**: Her görev 4 saatten az olmalı
2. **Bağımlılıkları belirle**: Kritik yol analizi yap
3. **Buffer ekle**: Tahmini süreye %20 buffer ekle
4. **Iteratif planla**: Büyük planları küçük iterasyonlara böl
5. **Kabul kriterlerini yaz**: Her görev için "Done" tanımı olmalı
