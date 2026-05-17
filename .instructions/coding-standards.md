# 📐 Kodlama Standartları

> Bu belge, projedeki tüm kod yazımı için geçerli olan standartları tanımlar.

---

## Genel Kurallar

### Dosya Yapısı
1. Her dosya **tek bir sorumluluk** taşımalıdır
2. Dosya uzunluğu **300 satırı** geçmemelidir
3. İlgili import'lar gruplandırılmalıdır:
   - External dependencies
   - Internal modules
   - Relative imports
4. Dosya sonunda **boş satır** bulunmalıdır

### Fonksiyon Kuralları
1. Fonksiyon uzunluğu **~25 satır** ile sınırlı olmalıdır
2. Parametre sayısı **3'ü geçmemelidir** (fazlası options object olarak)
3. Her fonksiyon **tek bir iş** yapmalıdır
4. Early return tercih edilmelidir (guard clauses)
5. Side effect'ler açıkça belirtilmelidir

### Değişken Kuralları
1. `const` tercih edilmelidir; `let` sadece gerekli olduğunda
2. `var` **kullanılmamalıdır**
3. Magic number'lar **sabit** olarak tanımlanmalıdır
4. Boolean değişkenler `is`, `has`, `can`, `should` ile başlamalıdır

---

## JavaScript / TypeScript

### Stil Kuralları
```javascript
// ✅ İyi
const MAX_RETRY_COUNT = 3;
const isUserActive = user.status === 'active';

async function fetchUserProfile(userId, options = {}) {
  if (!userId) {
    throw new Error('userId is required');
  }

  const { useCache = true, timeout = 5000 } = options;
  // ...
}

// ❌ Kötü
var x = 3;
let active = user.status === 'active';

async function getData(id, cache, timeout, retries, format) {
  // çok fazla parametre, options object kullan
}
```

### Async / Await
```javascript
// ✅ İyi — async/await kullan
async function loadData() {
  try {
    const users = await fetchUsers();
    const profiles = await Promise.all(
      users.map(u => fetchProfile(u.id))
    );
    return profiles;
  } catch (error) {
    logger.error('Failed to load data', error);
    throw error;
  }
}

// ❌ Kötü — nested callbacks
function loadData(callback) {
  fetchUsers(function(err, users) {
    if (err) return callback(err);
    // callback hell...
  });
}
```

### Export / Import
```javascript
// ✅ İyi — named exports (barrel pattern)
// features/auth/index.js
export { login } from './login';
export { logout } from './logout';
export { AuthProvider } from './AuthProvider';

// ❌ Kötü — default export her yerde
export default function something() { ... }
```

---

## CSS

### BEM Naming Convention
```css
/* Block */
.card { }

/* Element */
.card__title { }
.card__body { }
.card__footer { }

/* Modifier */
.card--featured { }
.card--disabled { }
.card__title--large { }
```

### CSS Değişkenleri
```css
:root {
  /* Colors */
  --color-primary: #2563eb;
  --color-secondary: #7c3aed;
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-danger: #ef4444;

  /* Typography */
  --font-family-base: 'Inter', sans-serif;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;

  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;

  /* Borders */
  --border-radius: 0.5rem;
  --border-color: #e5e7eb;
}
```

---

## Hata Mesajları

```javascript
// ✅ İyi — açıklayıcı ve aksiyon önerili
throw new Error(
  `User "${userId}" not found. Verify the user ID is correct and the user exists.`
);

// ❌ Kötü — belirsiz
throw new Error('Error occurred');
```

---

## Logging

```javascript
// Seviye kullanımı
logger.debug('Cache hit', { key, ttl });         // Geliştirme detayları
logger.info('User logged in', { userId });         // Normal akış
logger.warn('Rate limit approaching', { current: 95, limit: 100 }); // Dikkat
logger.error('Payment failed', { orderId, error }); // Hata
```

---

## Performans

1. **Gereksiz re-render önle**: Memoization kullan
2. **Lazy loading**: Büyük modülleri lazy load et
3. **Debounce/throttle**: Input event'lerinde kullan
4. **Virtual scrolling**: Uzun listeler için
5. **Image optimization**: WebP formatı, lazy load, srcset
