import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/private-resume/', // ✅  GitHub Pages Repository
  plugins: [vue()],
});
