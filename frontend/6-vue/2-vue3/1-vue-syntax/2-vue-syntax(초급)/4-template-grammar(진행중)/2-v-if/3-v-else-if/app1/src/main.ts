import { createApp } from 'vue';
import App from './App.vue';
import GlobalHelloWorld from './components/GlobalHelloWorld.vue';

createApp(App)
  .component('GlobalHelloWorld', GlobalHelloWorld)
  .mount('#app');
