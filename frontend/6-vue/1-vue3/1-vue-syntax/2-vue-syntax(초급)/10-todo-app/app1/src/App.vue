<template>
  <button @click="onClick('counter')">Counter</button>
  <button @click="onClick('movies')">Movies</button>
  <div v-if="isOpenCounter">
    <CounterApp />
  </div>
  <div v-else-if="isOpenMovies">
    <MovieApp />
  </div>
  <div v-else-if="isOpenTodo">
    <TodoApp />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CounterApp from './components/CounterApp.vue'
import MovieApp from './components/MovieApp.vue'
import TodoApp from './components/TodoApp.vue'

const isOpenCounter = ref(false)
const isOpenMovies = ref(false)
const isOpenTodo = ref(false)

function onClick(menu) {
  switch (menu) {
    case 'counter':
      isOpenCounter.value = true
      isOpenMovies.value = false
      isOpenTodo.value = false
      break
    case 'movies':
      isOpenCounter.value = false
      isOpenMovies.value = true
      isOpenTodo.value = false
      break
    case 'todo':
      isOpenCounter.value = false
      isOpenMovies.value = false
      isOpenTodo.value = true
      break
  }
}
</script>
