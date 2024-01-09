import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// * TODO: Vue Router Warnになるので「/」のルートを作る。
// import Start from "./views/Start.vue";
import Talkroom from "/src/views/Talkroom.vue";
import Account from "/src/views/Account.vue";

const routes: RouteRecordRaw[] = [
  // {
  //   path: "/",
  //   name: "Start",
  //   component: Start,
  //   meta: { layout: "empty" },
  // },
  {
    path: "/talkroom",
    name: "Talkroom",
    component: Talkroom,
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
