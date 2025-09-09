import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',  // 브라우저 환경
    setupFiles: './src/setupTests.ts',
  },
})
