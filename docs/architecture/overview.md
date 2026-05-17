# 🏗️ Architecture Overview

> Projenin teknik mimarisi ve bileşen yapısı.

---

## Sistem Mimarisi

```
┌──────────────────────────────────────────────┐
│                  CLIENT                       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │   Pages  │  │Components│  │  Styles  │   │
│  └────┬─────┘  └────┬─────┘  └──────────┘   │
│       └──────┬───────┘                        │
│              ▼                                │
│  ┌────────────────────┐                      │
│  │   State Management │                      │
│  └──────────┬─────────┘                      │
│             ▼                                │
│  ┌────────────────────┐                      │
│  │   Service Layer    │                      │
│  └──────────┬─────────┘                      │
└─────────────┼────────────────────────────────┘
              ▼
     ┌────────────────┐
     │   API / Backend │
     └────────────────┘
```

---

## Bileşen Yapısı

### Core
Uygulamanın temel altyapısı — bootstrap, routing, configuration.

### Features
İş alanlarına göre organize edilmiş modüller. Her feature kendi bileşenlerini, servislerini ve testlerini içerir.

### Shared
Feature'lar arası paylaşılan utility fonksiyonları, sabitler ve tip tanımları.

---

## Veri Akışı

```
User Action → Event Handler → Service Call → API Request
                                                  ↓
UI Update  ← State Update  ← Data Transform ← API Response
```

---

## Teknoloji Kararları

| Karar | Seçim | Gerekçe |
|-------|-------|---------|
| [Alan] | [Teknoloji] | [Neden?] |

> Detaylı kararlar için `docs/decisions/` altındaki ADR dosyalarına bakın.

---

*Bu doküman proje geliştikçe güncellenmelidir.*
