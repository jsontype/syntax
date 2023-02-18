import Vue from "vue"
import Vuex from "vuex"
import actions from "./actions.js"
import mutations from "./mutations.js"

Vue.use(Vuex)

// 1. ASK : state -> actions -> views에서 dispatch -> commit 하기전에 mutations 생성 -> views에서 commit -> computed에 넣어서 해당 state 변수를 사용 -> v-if, v-for로 렌더링
export default new Vuex.Store({
  state: {
    news: [],
    ask: [],
    newsDetail: {},
  },
  actions,
  mutations,
})
