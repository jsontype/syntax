import { createApp } from 'vue'
import App from './App.vue'
import routes from './route/routes.js'
import vueSmoothScroll from 'vue-smooth-scroll'
import 'alpinejs';
import '@/assets/css/style.css';
import '@/assets/css/tailwind.css';

createApp(App).use(vueSmoothScroll).use(routes).mount('#app')
