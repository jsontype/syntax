import { ref } from "vue"

export function useTodos(userId) {
  const todos = ref([])
  const newTodo = ref("")

  function toggleTodo(item) {
    item.completed = !item.completed
  }

  function addTodo() {
    if (newTodo.value.trim() === "") {
      alert("할 일을 입력해주세요.")
      return
    }
    const todo = {
      id: Date.now(),
      title: newTodo.value,
      completed: false,
      userId: userId.value,
    }
    todos.value.push(todo)
    newTodo.value = "" // 입력 필드 초기화
  }

  function delTodo(id) {
    const index = todos.value.findIndex((todo) => todo.id === id)
    if (index !== -1) {
      todos.value.splice(index, 1)
    }
  }

  return { todos, newTodo, addTodo, toggleTodo, delTodo }
}
