import { createApp } from 'vue'
// 선언한 스토어를 앱에 연결
// 1. pinia를 생성하는 함수를 임포트한다.
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
// 2. pinia를 생성한다.
const pinia = createPinia()

// 3. app.use 함수를 통해 pinia를 앱에 연결한다.
app.use(pinia)
app.mount('#app')
