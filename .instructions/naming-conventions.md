# 📝 İsimlendirme Kuralları

> Tutarlı isimlendirme, kodun okunabilirliği ve bakım kolaylığı için kritiktir.

---

## Genel Prensipler

1. **Açıklayıcı olmalı**: İsim, amacı ve kullanımı anlatmalı
2. **Kısa ama anlamlı**: Kısaltmalardan kaçın (`usr` → `user`)
3. **Tutarlı ol**: Aynı kavram için hep aynı ismi kullan
4. **Bağlam önemli**: İsim, kullanıldığı bağlamda mantıklı olmalı

---

## JavaScript / TypeScript

| Tür | Kural | Örnek |
|-----|-------|-------|
| Değişken | camelCase | `userName`, `isActive`, `itemCount` |
| Fonksiyon | camelCase, fiil ile başla | `getUserById()`, `calculateTotal()` |
| Sınıf | PascalCase | `UserService`, `PaymentGateway` |
| Sabit | UPPER_SNAKE_CASE | `MAX_RETRY_COUNT`, `API_BASE_URL` |
| Enum | PascalCase | `UserRole`, `OrderStatus` |
| Enum Value | UPPER_SNAKE_CASE | `UserRole.ADMIN`, `OrderStatus.PENDING` |
| Boolean | is/has/can/should prefix | `isLoading`, `hasPermission`, `canEdit` |
| Array | çoğul | `users`, `selectedItems`, `errorMessages` |
| Map/Object | tekil veya açıklayıcı | `userById`, `configMap` |
| Private | _ prefix | `_internalState`, `_processQueue()` |
| Event Handler | handle/on prefix | `handleClick`, `onSubmit` |
| Async | fetch/load/save gibi fiiller | `fetchUsers()`, `loadConfig()` |

### Fonksiyon İsimlendirme Örnekleri

```javascript
// Veri getirme
fetchUser()          // API'den veri al
getUser()            // Senkron, cache/memory'den al
loadUserData()       // Sayfa yüklenirken veri yükle
findUserByEmail()    // Arama/filtreleme

// Veri değiştirme  
createUser()         // Yeni oluştur
updateUser()         // Güncelle
deleteUser()         // Sil
removeItemFromCart()  // Listeden çıkar

// Durum kontrolü
isValidEmail()       // Boolean döner
hasPermission()      // Boolean döner
canUserEdit()        // Boolean döner

// Dönüştürme
formatDate()         // Format değiştir
parseJSON()          // Parse et
toUpperCase()        // Dönüştür
mapUserToDTO()       // Model dönüşümü

// Event handling
handleSubmit()       // Event handler
onUserSelect()       // Callback
```

---

## Dosya İsimlendirme

| Tür | Kural | Örnek |
|-----|-------|-------|
| Component | PascalCase | `UserCard.jsx`, `LoginForm.tsx` |
| Utility | kebab-case | `string-utils.js`, `date-helpers.js` |
| Style | kebab-case, modül adı ile | `user-card.css`, `login-form.module.css` |
| Test | kaynak adı + .test | `user-card.test.js`, `auth.test.js` |
| Constant | kebab-case | `api-routes.js`, `error-codes.js` |
| Config | kebab-case | `webpack.config.js`, `jest.config.js` |
| Type/Interface | PascalCase | `User.types.ts`, `ApiResponse.d.ts` |

---

## Dizin İsimlendirme

| Tür | Kural | Örnek |
|-----|-------|-------|
| Feature | kebab-case | `user-management/`, `payment-gateway/` |
| Genel | kebab-case veya düz | `utils/`, `shared/`, `core/` |
| Test | düz | `tests/`, `__tests__/`, `__mocks__/` |

---

## CSS İsimlendirme (BEM)

```
.block                    → Ana element
.block__element           → Alt element
.block--modifier          → Varyasyon
.block__element--modifier → Alt element varyasyonu
```

| Tür | Örnek |
|-----|-------|
| Component block | `.nav-bar`, `.user-card`, `.search-form` |
| Element | `.nav-bar__item`, `.user-card__avatar` |
| Modifier | `.nav-bar--dark`, `.user-card--compact` |
| State | `.is-active`, `.is-disabled`, `.has-error` |
| Utility | `.u-text-center`, `.u-margin-top`, `.u-hidden` |

---

## Git Branch / Commit İsimlendirme

Branch stilleri için [Git Conventions](./git-conventions.md) belgesine bakın.

---

## Kaçınılması Gereken İsimler

```javascript
// ❌ Kötü İsimler
const d = new Date();           // "d" ne?
const temp = getData();         // "temp" ne?
const data = fetchAll();        // "data" çok belirsiz
const flag = true;              // "flag" ne flag'i?
const list = [];                // ne listesi?
function process() { }          // neyi process ediyor?
function handle() { }           // neyi handle ediyor?

// ✅ İyi İsimler
const createdDate = new Date();
const userProfile = getUserProfile();
const activeOrders = fetchActiveOrders();
const isFormValid = true;
const selectedProducts = [];
function processPayment() { }
function handleFormSubmit() { }
```

---

## Kısaltma Kuralları

### Kabul Edilebilir Kısaltmalar
| Kısaltma | Tam Hali |
|----------|----------|
| `id` | identifier |
| `url` | uniform resource locator |
| `api` | application programming interface |
| `db` | database |
| `config` | configuration |
| `env` | environment |
| `auth` | authentication |
| `info` | information |
| `err` | error (sadece catch bloğunda) |
| `req/res` | request/response |
| `btn` | button (UI'da) |
| `msg` | message |
| `img` | image |

### Kabul Edilemez Kısaltmalar
| Kısaltma | Yerine |
|----------|--------|
| `usr` | `user` |
| `mgr` | `manager` |
| `cnt` | `count` |
| `idx` | `index` |
| `val` | `value` |
| `tmp` | Anlamlı isim kullan |
| `ret` | Anlamlı isim kullan |
