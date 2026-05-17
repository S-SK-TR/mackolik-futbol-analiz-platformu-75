// ============================================
// Core Module - Application Bootstrap
// ============================================
// Bu dosya uygulamanın temel başlatma mantığını içerir.
// Proje başladığında bu dosyayı gerçek bootstrap koduyla değiştirin.

/**
 * Uygulama konfigürasyonu
 */
export const config = {
  appName: 'Maçkolik - Futbol Analiz Platformu',
  version: '0.1.0',
  environment: process.env.NODE_ENV || 'development',
};

/**
 * Uygulamayı başlatır
 */
export function bootstrap() {
  console.log(`${config.appName} v${config.version} starting...`);
  console.log(`Environment: ${config.environment}`);
}
