import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Counter from '@/views/Counter.vue'
// import Movies from '@/views/Movies.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/counter', name: 'Counter', component: Counter },
  // { path: '/movies', name: 'Movies', component: Movies },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
