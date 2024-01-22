<template>  
  <button @click="toggle">toggle</button>
  <div v-if="isOpen">
    <CountApp />
  </div>
</template>

<script setup>
import CountApp from './components/CountApp.vue'
import { ref } from 'vue'

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}
</script>
