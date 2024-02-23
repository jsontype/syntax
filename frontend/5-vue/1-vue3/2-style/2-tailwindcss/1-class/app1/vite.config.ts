import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// postcss 관련 플러그인 임포트
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    postcss: {
      plugins: [postcssImport, tailwindcss, autoprefixer],
    },
  },  
})
