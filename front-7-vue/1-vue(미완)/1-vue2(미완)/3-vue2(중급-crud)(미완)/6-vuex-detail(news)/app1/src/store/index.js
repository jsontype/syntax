import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        news: [],
        ask: [],
        newsDetail: null
    },
    actions,
    mutations
})
