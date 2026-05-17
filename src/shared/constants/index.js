// ============================================
// Application Constants
// ============================================

/**
 * HTTP durum kodları
 */
export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_ERROR: 500,
};

/**
 * Uygulama sabit değerleri
 */
export const APP = {
    NAME: 'Maçkolik - Futbol Analiz Platformu',
    VERSION: '0.1.0',
    DEFAULT_LOCALE: 'tr-TR',
    DEFAULT_PAGE_SIZE: 20,
    MAX_PAGE_SIZE: 100,
};

/**
 * Local Storage anahtarları
 */
export const STORAGE_KEYS = {
    THEME: 'app_theme',
    LOCALE: 'app_locale',
    AUTH_TOKEN: 'auth_token',
    USER_PREFERENCES: 'user_preferences',
};

/**
 * Event isimleri
 */
export const EVENTS = {
    APP_READY: 'app:ready',
    APP_ERROR: 'app:error',
    USER_LOGIN: 'user:login',
    USER_LOGOUT: 'user:logout',
    THEME_CHANGE: 'theme:change',
    DATA_LOADED: 'data:loaded',
};
