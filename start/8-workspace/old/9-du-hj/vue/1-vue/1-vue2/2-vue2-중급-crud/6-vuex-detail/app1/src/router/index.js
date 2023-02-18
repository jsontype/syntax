import Vue from "vue"
import VueRouter from "vue-router"
import NewsView from "../views/NewsView.vue"
import AskView from "../views/AskView.vue"
import ItemView from "../views/ItemView.vue"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/news",
      component: NewsView,
    },
    {
      path: "/ask",
      component: AskView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
  ],
})

export default router
