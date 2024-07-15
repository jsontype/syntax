// import './assets/main.css'
import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueNumber from 'vue-number-animation'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueNumber)

app.mount('#app')
