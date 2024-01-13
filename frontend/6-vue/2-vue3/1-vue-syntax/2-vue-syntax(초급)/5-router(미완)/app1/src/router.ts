import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Movies from './views/Movies.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/movies', component: Movies },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
