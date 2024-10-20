<template>
  <div>
    <h1>Todos</h1>

    <input type="text" v-model="inputText" maxLength="20" class="todoInput" />
    <button @click="register">登録</button>

    <div class="todoItem" v-for="todo in todos" :key="todo.id">
      <span class="todoText">#{{ todo.id }} {{ todo.text }}</span>
      <span :class="todo.done ? 'green' : 'red'" @click="onToggle(todo.id)">{{ todo.done ? 'DONE' : 'TODO' }}</span>
      <button class="deleteBtn" @click="onDelete(todo.id)">DEL</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

interface Todo {
  id: number
  text: string
  done: boolean
}

const inputText = ref('')
const todoId = ref(1)
const todos = reactive<Todo[]>([])

const register = () => {
  todos.push({ id: todoId.value, text: inputText.value, done: false })
  todoId.value = todoId.value + 1
}

const onToggle = (id: number) => {
  const todo = todos.find(todo => todo.id === id)
  if (todo) {
    todo.done = !todo.done
  }
}

const onDelete = (id: number) => {
  const index = todos.findIndex(todo => todo.id === id)
  if (index !== -1) {
    todos.splice(index, 1)
  }
}
</script>

<style scoped>
.green {
  color: green;
}
.red {
  color: red;
}
.todoItem {
  margin-top: 10px;
}
.todoInput {
  margin-right: 10px;
}
.todoText {
  margin-right: 10px;
}
.deleteBtn {
  margin-left: 10px;
}
</style>
