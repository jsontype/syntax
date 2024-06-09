import users from "@/data/users.json"

const state = {
  isAuthenticated: false,
  user: null,
  authError: null,
}

const mutations = {
  LOGIN_SUCCESS(state, user) {
    state.isAuthenticated = true
    state.user = user
    state.authError = null
  },
  LOGIN_FAILURE(state, error) {
    state.isAuthenticated = false
    state.user = null
    state.authError = error
  },
  LOGOUT(state) {
    state.isAuthenticated = false
    state.user = null
    state.authError = null
  },
}

const actions = {
  login({ commit }, { username, password }) {
    const user = users.find(
      (u) => u.username === username && u.password === password
    )
    if (user) {
      commit("LOGIN_SUCCESS", user)
    } else {
      commit("LOGIN_FAILURE", "Invalid username or password")
    }
  },
  logout({ commit }) {
    commit("LOGOUT")
  },
}

const getters = {
  isAuthenticated: (state) => state.isAuthenticated,
  authError: (state) => state.authError,
  user: (state) => state.user,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
