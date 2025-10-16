import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import WatchRoute from '@/views/WatchRoute.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/watch-route', name: 'WatchRoute', component: WatchRoute },
  { path: '/other-route', name: 'OtherRoute', component: WatchRoute },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
