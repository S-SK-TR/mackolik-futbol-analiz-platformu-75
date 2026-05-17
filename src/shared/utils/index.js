// ============================================
// Shared Utilities
// ============================================

/**
 * String'in boş veya null olup olmadığını kontrol eder
 * @param {string|null|undefined} value - Kontrol edilecek değer
 * @returns {boolean}
 */
export function isEmpty(value) {
    return value === null || value === undefined || value.trim() === '';
}

/**
 * Tarihi formatlar
 * @param {Date} date - Formatlanacak tarih
 * @param {string} [locale='tr-TR'] - Locale
 * @returns {string} Formatlanmış tarih
 */
export function formatDate(date, locale = 'tr-TR') {
    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(date);
}

/**
 * Benzersiz ID üretir
 * @returns {string} UUID-like benzersiz string
 */
export function generateId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Belirtilen süre kadar bekler
 * @param {number} ms - Milisaniye
 * @returns {Promise<void>}
 */
export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Debounce wrapper
 * @param {Function} fn - Debounce edilecek fonksiyon
 * @param {number} delay - Gecikme süresi (ms)
 * @returns {Function}
 */
export function debounce(fn, delay = 300) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}
