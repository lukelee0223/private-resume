import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/private-resume', // ⚠️ 這裡要改成你的 GitHub Repository 名稱
  plugins: [vue()],
})
