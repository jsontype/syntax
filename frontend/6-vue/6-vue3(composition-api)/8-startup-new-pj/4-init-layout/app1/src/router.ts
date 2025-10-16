import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// import Start from "./views/Start.vue";
import Movies from "/src/views/Movies.vue";
import Account from "/src/views/Account.vue";

const routes: RouteRecordRaw[] = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Start,
  //   meta: { layout: "empty" },
  // },
  {
    path: "/movie",
    name: "Movie App",
    component: Movies,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
