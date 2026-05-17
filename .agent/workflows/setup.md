---
description: Proje ilk kurulumunu gerçekleştirir — bağımlılıklar, environment ve temel yapılandırma
---

# 🔧 Project Setup Workflow

Bu workflow yeni bir projeyi template'den klonladıktan sonra ilk kurulumu yapar.

## Adımlar

### 1. Template Placeholder'larını Güncelle
- `CLAUDE.md` dosyasındaki `Maçkolik - Futbol Analiz Platformu`, `Maçkolik - Futbol Analiz Platformu — Premium SaaS Uygulaması`, `[TECH_STACK]` gibi alanları gerçek değerlerle değiştir
- `README.md` dosyasındaki placeholder'ları güncelle
- `package.json` oluştur (eğer yoksa)

### 2. Bağımlılıkları Yükle
// turbo
```bash
npm install
```

### 3. Environment Dosyasını Oluştur
```bash
cp .env.example .env
```

### 4. Git Repository'yi Başlat
```bash
git init
git add .
git commit -m "feat: initial project setup from Form4Ever template"
```

### 5. Doğrulama
// turbo
```bash
npm run validate
```

## Notlar
- Bu workflow projenin ilk kurulumunda bir kez çalıştırılır
- Tüm placeholder'ların güncellendiğinden emin olun
- `.env` dosyasını commit etmeyin
