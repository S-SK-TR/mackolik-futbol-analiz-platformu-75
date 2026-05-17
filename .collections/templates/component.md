# 🧩 Component Template

> Yeni bileşen oluşturma şablonu.

---

## Kullanım

Yeni bir feature bileşeni oluştururken bu şablonu kullan:

### Dosya Yapısı
```
src/features/[feature-name]/
├── index.js              # Public API (barrel export)
├── [feature-name].js     # Ana modül
├── [feature-name].css    # Stiller
├── [feature-name].test.js # Testler
├── utils.js              # Yardımcı fonksiyonlar
└── constants.js          # Sabitler
```

### index.js (Barrel Export)
```javascript
export { FeatureName } from './feature-name';
export { helperFunction } from './utils';
```

### feature-name.js (Ana Modül)
```javascript
/**
 * [Bileşenin amacı ve kullanımı]
 *
 * @module FeatureName
 * @example
 * const feature = new FeatureName(options);
 * feature.init();
 */

import { CONSTANTS } from './constants';
import './feature-name.css';

export class FeatureName {
  /**
   * @param {Object} options - Yapılandırma seçenekleri
   */
  constructor(options = {}) {
    this.options = { ...FeatureName.defaults, ...options };
  }

  static get defaults() {
    return {
      // varsayılan değerler
    };
  }

  init() {
    // başlatma mantığı
  }

  destroy() {
    // temizleme mantığı
  }
}
```

### feature-name.test.js (Test)
```javascript
import { FeatureName } from './feature-name';

describe('FeatureName', () => {
  let instance;

  beforeEach(() => {
    instance = new FeatureName();
  });

  afterEach(() => {
    instance.destroy();
  });

  describe('constructor', () => {
    it('should create instance with default options', () => {
      expect(instance).toBeDefined();
    });
  });

  describe('init()', () => {
    it('should initialize correctly', () => {
      instance.init();
      // assertions
    });
  });
});
```
