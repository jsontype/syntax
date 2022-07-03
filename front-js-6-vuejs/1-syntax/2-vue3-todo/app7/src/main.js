import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 스토어를 부르는 부분1
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  // 스토어를 부르는 부분2
  store,
  render: h => h(App)
}).$mount('#app')
