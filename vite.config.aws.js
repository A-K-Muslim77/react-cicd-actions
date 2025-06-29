import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',  // Use relative paths for AWS S3 compatibility
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.js'],
  }
})
