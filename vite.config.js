import { defineConfig } from 'vite';

export default defineConfig({
  base: "./",
  optimizeDeps: {
    exclude: ['@sqlite.org/sqlite-wasm'],
  },
});
