import Vue from "vue";
import Vuex from "vuex";
import words from "./modules/words";
import settings from "./modules/settings";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    words,
    settings,
  },
});
