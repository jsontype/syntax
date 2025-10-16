const state = {
  todosList: [],
}

const mutations = {
  updateTodosList(state, newList) {
    state.todosList = newList
  },
}

const actions = {
  updateTodosList({ commit }, newList) {
    commit("updateTodosList", newList)
  },
}

const getters = {
  todos: (state) => state.todosList,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
