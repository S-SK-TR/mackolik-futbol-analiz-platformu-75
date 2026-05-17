import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// PostCSS config'i doğru formatta tanımlayın
const postcssConfig = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};

export default defineConfig({
  resolve: { alias: { '@': '/src' } },
  css: {
    postcss: postcssConfig
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Maçkolik - Futbol Analiz Platformu',
        short_name: 'Maçkolik - Futbol Analiz Platformu',
        description: 'Premium PWA Experience',
        theme_color: '#000000',
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ],
});
