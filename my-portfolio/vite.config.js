import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio-rebuild/',  // <-- This must match the repo name
  plugins: [react()],
})
