<template>
  <button @click="onClick">
    Toggle
  </button>
  <div v-if="isOpen">
    <MovieApp />
  </div>
</template>

<script setup>
import MovieApp from './components/MovieApp.vue'
import { ref } from 'vue'

const isOpen = ref(false)

function onClick() {
  isOpen.value = !isOpen.value
}
</script>
