import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio-R/', // <- très important : le nom exact de ton repo
  plugins: [react()],
})
