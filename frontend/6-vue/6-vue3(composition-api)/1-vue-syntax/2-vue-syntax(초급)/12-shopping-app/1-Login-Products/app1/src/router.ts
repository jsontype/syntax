import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Products from '@/views/Products.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/products', name: 'Products', component: Products },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
