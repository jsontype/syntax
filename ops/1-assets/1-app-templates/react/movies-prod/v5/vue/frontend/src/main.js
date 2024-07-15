import './style.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import 'bootstrap';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from './i18n';
import Router from './router/index';
import App from './App.vue';
import globalComponents from './plugins/global-components';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'choices.js/public/assets/styles/choices.min.css';
import './assets/custom/custom-css.scss'

const pinia = createPinia();

const app = createApp(App);
app.use(Router);
app.use(pinia);
app.use(createI18n());
app.use(globalComponents);
app.mount('#app');
