import { createApp } from 'vue'
import App from './App.vue'
// 선언한 스토어를 앱에 연결
// 1. 선언한 스토어를 임포트한다.
import store from './store'

const app = createApp(App)

// 2. app.use 함수를 통해 스토어를 앱에 연결한다.
app.use(store)
app.mount('#app')
