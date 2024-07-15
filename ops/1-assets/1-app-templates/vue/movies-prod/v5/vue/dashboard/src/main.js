import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import './assets/scss/streamit.scss';
import './assets/scss/custom.scss';
import './assets/scss/dashboard-custom.scss';
import './assets/scss/rtl.scss';
import './assets/scss/pro.scss'
import './assets/scss/customizer.scss';
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { createI18n } from './i18n';
import Router from './router/index';
import GlobalComponents from './plugins/global';
import BootstrapVueNext from 'bootstrap-vue-next';
import VueApexCharts from 'vue3-apexcharts';
import 'bootstrap/dist/js/bootstrap.min.js';



import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'shepherd.js/dist/css/shepherd.css';
import 'choices.js/public/assets/styles/choices.min.css';
import VueMasonry from 'vue-masonry-css'

const pinia = createPinia();

const app = createApp(App);
app.use(GlobalComponents);
app.use(Router);
app.use(BootstrapVueNext);
app.use(pinia);
app.use(createI18n());
app.use(VueApexCharts);
app.use(VueSweetalert2);
app.use(VueMasonry);

app.mount('#app');
