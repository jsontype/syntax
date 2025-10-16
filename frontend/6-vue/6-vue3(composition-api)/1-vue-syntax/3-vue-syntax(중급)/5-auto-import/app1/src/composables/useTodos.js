import { computed } from "vue"
import { useTodosStore } from "@/stores/todos/useTodosStore"

export function useTodos() {
  const todosStore = useTodosStore()

  const updateTodosList = (newList) => {
    todosStore.updateTodosList(newList)
  }

  const todosList = computed(() => todosStore.todosList)

  return {
    todosList,
    updateTodosList,
  }
}
