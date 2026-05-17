# 🤝 Contributing Guide

> Bu projeye katkıda bulunmak için rehber.

---

## Katkıda Bulunma Süreci

### 1. Bir Issue Seç veya Oluştur
- Mevcut issue'ları incele
- Yeni bir fikrin varsa önce issue oluştur
- `good first issue` label'ına bak

### 2. Fork & Branch
```bash
# Fork'u klonla
git clone [YOUR_FORK_URL]
cd Maçkolik - Futbol Analiz Platformu

# Upstream ekle
git remote add upstream [ORIGINAL_REPO_URL]

# Feature branch oluştur
git checkout -b feature/your-feature
```

### 3. Geliştir
- Kodlama standartlarına uy: `.instructions/coding-standards.md`
- İsimlendirme kurallarını takip et: `.instructions/naming-conventions.md`
- Test yaz
- Dokümantasyonu güncelle

### 4. Commit
- Conventional Commits formatını kullan
- Küçük, odaklı commitler yap
- Detaylar: `.instructions/git-conventions.md`

### 5. Pull Request
- PR şablonunu doldur
- CI pipeline'ının yeşil olduğundan emin ol
- Bir reviewer ata

---

## Kod Standartları

| Alan | Referans |
|------|----------|
| Kodlama | `.instructions/coding-standards.md` |
| İsimlendirme | `.instructions/naming-conventions.md` |
| Git | `.instructions/git-conventions.md` |
| Mimari | `.instructions/architecture-principles.md` |

---

## Code of Conduct

- Saygılı ol
- Yapıcı geri bildirim ver
- Çeşitliliğe değer ver
- Kolektif öğrenmeyi teşvik et

---

*Teşekkürler! Her katkı değerlidir. 🙏*
