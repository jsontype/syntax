<template>
  <button @click="onClick">Toggle</button>
  <div v-if="isOpen">
    <TodoApp />
  </div>
</template>

<script setup>
import TodoApp from './components/TodoApp.vue'
import { ref } from 'vue'

const isOpen = ref(true)

function onClick () {
  isOpen.value = !isOpen.value
}
</script>
