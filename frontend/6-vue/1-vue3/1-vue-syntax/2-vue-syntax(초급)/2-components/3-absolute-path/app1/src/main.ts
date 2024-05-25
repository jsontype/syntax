import { createApp } from 'vue';
import App from "@/App.vue";
import GlobalHelloWorld from "@/components/GlobalHelloWorld.vue";

const app = createApp(App)

app.component('GlobalHelloWorld', GlobalHelloWorld)
app.mount('#app');
