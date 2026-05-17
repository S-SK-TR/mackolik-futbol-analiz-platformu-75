# 🔀 Git Konvansiyonları

> Bu belge, Git kullanımı için takım standartlarını tanımlar.

---

## Branch Stratejisi

### Ana Branch'ler
| Branch | Amaç | Korumalı |
|--------|-------|----------|
| `main` | Production-ready kod | ✅ |
| `develop` | Aktif geliştirme | ✅ |

### Feature Branch'ler
```
feature/[kısa-açıklama]       → Yeni özellik
bugfix/[kısa-açıklama]        → Bug düzeltme
hotfix/[kısa-açıklama]        → Acil düzeltme (main'den)
refactor/[kısa-açıklama]      → Yeniden yapılandırma
docs/[kısa-açıklama]          → Dokümantasyon
test/[kısa-açıklama]          → Test ekleme/düzeltme
chore/[kısa-açıklama]         → Bakım işleri (bağımlılık, config)
```

### Branch İsimlendirme Kuralları
- Küçük harf kullan
- Kelimeler tire (`-`) ile ayrılır
- Kısa ve açıklayıcı ol
- Issue numarası ekle (varsa)

```
✅ İyi
feature/user-authentication
bugfix/login-validation-error
hotfix/payment-crash-fix
feature/PROJ-123-dashboard-widgets

❌ Kötü  
Feature/UserAuth
my-branch
fix
update-stuff
```

---

## Commit Mesajları

### Conventional Commits Formatı

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Commit Tipleri

| Tip | Kullanım | Emoji |
|-----|----------|-------|
| `feat` | Yeni özellik | ✨ |
| `fix` | Bug düzeltme | 🐛 |
| `docs` | Dokümantasyon | 📚 |
| `style` | Formatting (kod değişikliği yok) | 💄 |
| `refactor` | Yeniden yapılandırma | ♻️ |
| `perf` | Performans iyileştirme | ⚡ |
| `test` | Test ekleme/düzeltme | ✅ |
| `build` | Build sistemi değişikliği | 🔨 |
| `ci` | CI/CD değişikliği | 👷 |
| `chore` | Bakım (bağımlılık, config) | 🔧 |
| `revert` | Commit geri alma | ⏪ |

### Commit Mesajı Örnekleri

```bash
# ✅ İyi
feat(auth): add JWT token refresh mechanism
fix(dashboard): resolve chart rendering on mobile devices
docs(api): update endpoint documentation for v2
refactor(utils): simplify date formatting functions
test(auth): add integration tests for login flow
perf(dashboard): lazy load chart components

# Body ile
feat(payment): integrate Stripe payment gateway

Implemented Stripe checkout session creation and webhook handling.
Added support for:
- One-time payments
- Subscription billing
- Refund processing

Closes #123

# Breaking change
feat(api)!: change user response format

BREAKING CHANGE: User API response now wraps data in a "data" field.
Migration guide: docs/migrations/v2-user-response.md
```

### Commit Kuralları
1. **Imperative mood** kullan: "add" not "added", "fix" not "fixed"
2. Başlık **50 karakter** limitinde
3. Body satırları **72 karakter** limitinde
4. Anlık commit: tek bir mantıksal değişiklik
5. Working state: her commit derlenmeli ve testler geçmeli

---

## Pull Request (PR) Kuralları

### PR Başlığı
```
[TYPE] Kısa açıklama (#issue-no)

Örnekler:
[FEAT] Add user profile page (#45)
[FIX] Resolve login timeout issue (#52)
[REFACTOR] Simplify auth middleware
```

### PR Açıklama Şablonu
```markdown
## 📋 Açıklama
[Bu PR ne yapıyor? Neden gerekli?]

## 🔗 İlgili Issue
Closes #[issue-number]

## 📸 Ekran Görüntüleri (UI değişikliği varsa)
| Önceki | Sonraki |
|--------|---------|
| [screenshot] | [screenshot] |

## 🧪 Test
- [ ] Unit testler eklendi/güncellendi
- [ ] Manuel test yapıldı
- [ ] Edge case'ler test edildi

## ✅ Checklist
- [ ] Kod standartlarına uygun
- [ ] Self-review yapıldı
- [ ] Dokümantasyon güncellendi
- [ ] Breaking change yok (varsa ADR yazıldı)

## 📝 Ek Notlar
[Reviewer'ın bilmesi gereken özel durumlar]
```

### PR Kuralları
1. PR küçük olmalı (max ~400 satır değişiklik)
2. Tek bir amaca hizmet etmeli
3. Draft PR'lar erken feedback için kullanılabilir
4. Merge öncesi minimum 1 approval gerekli
5. CI pipeline'ı yeşil olmalı

---

## Git İpuçları

### Yararlı Aliaslar
```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.lg "log --oneline --graph --decorate -20"
git config --global alias.last "log -1 HEAD --stat"
```

### .gitkeep
Boş dizinleri Git'e eklemek için:
```bash
touch src/features/.gitkeep
touch tests/e2e/.gitkeep
```

---

## Merge Stratejisi

| Strateji | Ne Zaman |
|----------|----------|
| **Squash merge** | Feature → develop (tek commit) |
| **Merge commit** | develop → main (geçmişi koru) |
| **Rebase** | Local branch güncelleme |
