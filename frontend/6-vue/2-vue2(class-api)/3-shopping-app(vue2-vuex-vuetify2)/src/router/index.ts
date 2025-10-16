import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/movies",
    name: "movies",
    component: () => import("../views/MoviesView.vue"),
  },
  {
    path: "/todos",
    name: "todos",
    component: () => import("../views/TodosView.vue"),
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("../views/ShopView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/CartView.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
