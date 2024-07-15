import Vue from 'vue'
import Vuex from 'vuex'
import Setting from './Setting/index'
import Category from './Category/index'
import Movie from './Movie/index'
import Show from './Show/index'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Setting,
    Category,
    Movie,
    Show
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  strict: debug
})
