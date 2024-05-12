import { createMemoryHistory, createRouter } from "vue-router"

import Home from "./components/Home.vue"
import Counter from "./components/Counter.vue"
import Movies from "./components/Movies.vue"
import Todos from "./components/Todos.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/counter", component: Counter },
  { path: "/movies", component: Movies },
  { path: "/todos", component: Todos },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
