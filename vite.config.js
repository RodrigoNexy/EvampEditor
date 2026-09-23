import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Prevents Vite from picking up an unrelated postcss.config.js / tailwind.config.js
  // found in a parent directory (e.g. the user's home folder from another project).
  css: {
    postcss: {
      plugins: [],
    },
  },
})
