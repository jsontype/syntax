import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Counter from '@/views/Counter.vue'
import Movies from '@/views/Movies.vue'
import Todos from '@/views/Todos.vue'
import News from '@/views/News.vue'
import Login from '@/views/Login.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/counter', name: 'Counter', component: Counter },
  { path: '/movies', name: 'Movies', component: Movies },
  { path: '/todos', name: 'Todos', component: Todos },
  { path: '/news', name: 'News', component: News },
  { path: '/login', name: 'Login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
