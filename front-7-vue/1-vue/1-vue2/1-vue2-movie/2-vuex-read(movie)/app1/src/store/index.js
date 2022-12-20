import Vue from "vue"
import Vuex from "vuex"
import mutations from "./mutations.js" // setState 함수자체
import actions from "./actions.js" // 구체적인 setState 액션

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
  },
  mutations,
  actions,
})
