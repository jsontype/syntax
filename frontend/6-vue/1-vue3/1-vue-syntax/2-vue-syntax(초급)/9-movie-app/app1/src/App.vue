<template>
  <button @click="onClick('counter')">Counter</button>
  <button @click="onClick('movies')">Movies</button>
  <div v-if="isOpenCounter">
    <CounterApp />
  </div>
  <div v-else-if="isOpenMovies">
    <MovieApp />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CounterApp from './components/CounterApp.vue'
import MovieApp from './components/MovieApp.vue'

const isOpenCounter = ref(false)
const isOpenMovies = ref(false)

function onClick(menu) {
  switch (menu) {
    case 'counter':
      isOpenCounter.value = true
      isOpenMovies.value = false
      break
    case 'movies':
      isOpenCounter.value = false
      isOpenMovies.value = true
      break
  }
}
</script>
