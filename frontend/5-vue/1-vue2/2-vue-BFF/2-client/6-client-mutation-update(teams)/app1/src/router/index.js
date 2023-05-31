import Vue from "vue"
import Router from "vue-router"
import Roles from "../views/Roles"
import Teams from "../views/Teams"
import People from "../views/People"

Vue.use(Router)

const routes = [
  {
    path: "/roles",
    name: "Roles",
    component: Roles,
  },
  {
    path: "/teams",
    name: "Teams",
    component: Teams,
  },
  {
    path: "/people",
    name: "People",
    component: People,
  },
]

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
