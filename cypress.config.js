import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    supportFile: false, // Вимикаємо файл підтримки для e2e, щоб не було помилок імпорту
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
