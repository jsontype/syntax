import { createApp } from 'vue';
import App from '/src/App.vue';
import router from '/src/router';
import '/src/styles/tailwind.css';
import '/src/assets/main.css';

import DefaultLayout from '/src/components/DefaultLayout.vue';
import EmptyLayout from '/src/components/EmptyLayout.vue';

const app = createApp(App);

app.component('default-layout', DefaultLayout);
app.component('empty-layout', EmptyLayout);

app.use(router);
app.mount('#app');
