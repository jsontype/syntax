const state = {
  count: 0,
}

const mutations = {
  increase(state) {
    state.count++
  },
  decrease(state) {
    state.count--
  },
}

const actions = {
  increase({ commit }) {
    commit("increase")
  },
  decrease({ commit }) {
    commit("decrease")
  },
}

const getters = {
  count: (state) => state.count,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
