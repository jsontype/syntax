<template>
  <div>
    <div id="addTodo">
      <input type="text" v-model="newTodo" />
      <button @click="addTodo">추가</button>
    </div>
    <div id="todos">
      <div v-for="todo in todos" :key="todo.id" class="todo">
        <span @click="toggleTodo(todo)">
          <span :class="todo.completed && 'lineThrough'">{{ todo.title }}</span>
          <input type="checkbox" :checked="todo.completed" />
        </span>
        <span>
          <button @click="delTodo(todo.id)">삭제</button>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ref } from "vue"
import { useTodos } from "@/composables/useTodos"

const newTodo = ref("")
const { todosList, updateTodosList } = useTodos()

const todos = ref([])

const addTodo = () => {
  if (newTodo.value.trim()) {
    const newTodoItem = {
      id: Date.now(),
      title: newTodo.value,
      completed: false,
    }
    todos.value.push(newTodoItem)
    updateTodosList(todos.value)
    newTodo.value = ""
  }
}

const toggleTodo = (todo) => {
  todo.completed = !todo.completed
  updateTodosList(todos.value)
}

const delTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id)
  updateTodosList(todos.value)
}

todos.value = todosList.value
</script>

<style scoped>
input {
  margin-right: 5px;
}
.todo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.lineThrough {
  text-decoration: line-through;
}
</style>
