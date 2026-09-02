import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative assets load seamlessly on GitHub Pages, Vercel, Netlify, etc.
  server: {
    port: 5174,
    host: true
  }
})
