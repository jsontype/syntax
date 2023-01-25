import Vue from "vue";
import VueRouter from "vue-router";
import MovieView from "../views/MovieView.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [{ path: "/movie", component: MovieView }],
});
