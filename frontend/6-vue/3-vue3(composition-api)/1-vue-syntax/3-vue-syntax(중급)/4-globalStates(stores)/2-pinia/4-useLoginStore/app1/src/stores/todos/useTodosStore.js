import { defineStore } from "pinia"

export const useTodosStore = defineStore("todos", {
  state: () => ({
    todosList: [],
  }),
  actions: {
    updateTodosList(newList) {
      this.todosList = newList
    },
  },
  getters: {
    todos: (state) => state.todosList,
  },
})
