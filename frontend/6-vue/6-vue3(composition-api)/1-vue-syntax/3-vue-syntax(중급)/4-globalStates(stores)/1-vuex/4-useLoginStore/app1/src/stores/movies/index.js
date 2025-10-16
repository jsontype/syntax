const state = {
  moviesList: [],
}

const mutations = {
  updateMoviesList(state, newList) {
    state.moviesList = newList
  },
}

const actions = {
  updateMoviesList({ commit }, newList) {
    commit("updateMoviesList", newList)
  },
}

const getters = {
  movies: (state) => state.moviesList,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
