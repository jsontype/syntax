import { useStore } from "vuex"
import { computed } from "vue"

export function useTodosStore() {
  const store = useStore()
  const todosList = computed(() => store.state.todos.todosList || [])

  const updateTodosList = (newList) => {
    store.dispatch("todos/updateTodosList", newList)
  }

  return {
    todosList,
    updateTodosList,
  }
}
