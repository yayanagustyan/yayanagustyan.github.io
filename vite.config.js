// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  base: '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'views': fileURLToPath(new URL('./src/views', import.meta.url)),
      'assets': fileURLToPath(new URL('./src/assets', import.meta.url))
    },
  },
})
