import { defineNuxtPlugin } from "#app";
import { createStore } from "vuex";
import { state, getters, mutations, actions } from "~/store";

export default defineNuxtPlugin((nuxtApp) => {
  const store = createStore({
    state,
    getters,
    mutations,
    actions,
  });

  nuxtApp.vueApp.use(store);

  return {
    provide: {
      store,
    },
  };
});
