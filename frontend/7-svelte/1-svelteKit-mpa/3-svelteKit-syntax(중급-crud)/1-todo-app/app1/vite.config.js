import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
    alias: {
			src: '/src', // src 경로 설정
    },
  },
});
