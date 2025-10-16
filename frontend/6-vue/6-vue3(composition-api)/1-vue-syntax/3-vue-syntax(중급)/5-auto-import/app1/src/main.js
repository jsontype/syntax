import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import pinia from "./stores"
import { useAuthStore } from "./stores/auth/useAuthStore"

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount("#app")

const authStore = useAuthStore()
authStore.loadAuth()
