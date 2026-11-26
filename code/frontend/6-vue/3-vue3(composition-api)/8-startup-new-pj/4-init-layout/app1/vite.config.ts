import {defineConfig, loadEnv} from 'vite';
import vue from '@vitejs/plugin-vue';
import ViteSvgLoader from 'vite-svg-loader';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env': env,
    },
    plugins: [
      vue(),
      ViteSvgLoader()
    ],
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
  };
});
