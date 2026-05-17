# 🌟 Feature Template

> Yeni özellik geliştirme iş akışı şablonu.

---

## Feature: [FEATURE_NAME]

### 1. Planlama ✏️
- [ ] Gereksinim analizi yap
- [ ] `plans/implementation-plan.md` şablonunu kopyala ve doldur
- [ ] Gerekiyorsa ADR yaz (`docs/decisions/`)
- [ ] Backlog'a ekle (`plans/backlog.md`)

### 2. Branch Oluştur 🔀
```bash
git checkout develop
git pull origin develop
git checkout -b feature/[feature-name]
```

### 3. Dosya Yapısı oluştur 📁
```bash
mkdir -p src/features/[feature-name]
```
`.collections/templates/component.md` şablonunu kullan.

### 4. Test Yaz (TDD) 🧪
```bash
# test dosyasını oluştur
touch tests/unit/features/[feature-name].test.js
```
- Red → Green → Refactor döngüsünü uygula

### 5. Implement Et 💻
- `.instructions/coding-standards.md` kurallarına uy
- `.instructions/naming-conventions.md` kurallarını takip et
- Clean code prensiplerini uygula

### 6. Test Et ✅
```bash
npm run test
npm run lint
```

### 7. Belgesle 📚
- API dokümantasyonunu güncelle (`docs/api/`)
- CHANGELOG'a ekle (`docs/changelog/CHANGELOG.md`)
- Gerekiyorsa README güncelle

### 8. PR Oluştur 🔄
- `.instructions/git-conventions.md` PR şablonunu kullan
- CI pipeline'ının yeşil olduğundan emin ol
- Review talep et

### 9. Merge 🎉
- Review onayı al
- Squash merge ile develop'a birleştir
- Feature branch'i sil
