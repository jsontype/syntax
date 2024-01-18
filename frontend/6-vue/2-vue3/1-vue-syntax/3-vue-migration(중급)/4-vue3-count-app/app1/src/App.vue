<script setup>
import CountApp from './components/CountApp.vue'
import { ref } from 'vue'

const isOpen = ref(false)

function onClick() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <button @click="onClick">Toggle</button>
  <div v-if="isOpen">
    <CountApp />
  </div>
</template>
