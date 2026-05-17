# 🔍 Code Review Prompt

> Kod inceleme talebi için sık kullanılan prompt şablonu.

---

## Kullanım

Bu prompt'u kod inceleme yaparken kullanın:

```
Lütfen aşağıdaki kod değişikliklerini incele:

## Dosyalar
[Değişen dosyaların listesi]

## Değişiklik Türü
- [ ] Yeni özellik
- [ ] Bug fix
- [ ] Refactoring
- [ ] Performance iyileştirme
- [ ] Güvenlik düzeltmesi

## Kontrol Alanları
Aşağıdaki alanlara göre incele:
1. **Kod Kalitesi**: Clean code prensipleri, okunabilirlik
2. **Mimari Uyum**: Proje mimarisine uygun mu?
3. **Güvenlik**: Güvenlik açıkları var mı?
4. **Performans**: Performans sorunları var mı?
5. **Test**: Yeterli test yazılmış mı?
6. **Edge Cases**: Sınır durumları düşünülmüş mü?

## Çıktı Formatı
Her bulgu için:
- 📍 Dosya ve satır
- 🔴/🟡/🟢 Önem seviyesi
- 💬 Açıklama
- 💡 Önerilen düzeltme
```

---

## Referanslar
- Kodlama standartları: `.instructions/coding-standards.md`
- Review workflow: `.agent/workflows/review.md`
