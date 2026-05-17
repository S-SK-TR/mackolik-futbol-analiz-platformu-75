---
description: Geliştirme sunucusunu başlatır ve development ortamını hazırlar
---

# 🚀 Development Workflow

Geliştirme ortamını hazırlar ve dev server'ı başlatır.

## Adımlar

### 1. Environment Kontrolü
// turbo
```bash
node --version
```
Node.js versiyonunun >= 18 olduğundan emin ol.

### 2. Bağımlılık Kontrolü
// turbo
```bash
npm ls --depth=0
```
Eksik bağımlılık varsa `npm install` çalıştır.

### 3. Lint Kontrolü
// turbo
```bash
npm run lint
```
Lint hataları varsa düzelt.

### 4. Dev Server'ı Başlat
```bash
npm run dev
```

## Environment Değişkenleri
- `.env` dosyasının mevcut ve güncel olduğundan emin ol
- Tüm required değişkenlerin set edildiğini kontrol et

## Notlar
- Dev server varsayılan olarak `http://localhost:3000` üzerinde çalışır
- Hot reload aktif olmalıdır
- Tarayıcı otomatik açılmalıdır
