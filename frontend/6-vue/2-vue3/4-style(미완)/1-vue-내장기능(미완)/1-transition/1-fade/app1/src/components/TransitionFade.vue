<template>
  <h1>Fade</h1>
  <button @click="toggle">Toggle</button>
  <transition name="fade">
    <div v-if="isOpen">
      <HelloWorld />
    </div>
  </transition>
</template>

<script setup lang="ts">
import HelloWorld from './HelloWorld.vue'
import { ref } from 'vue'

const isOpen = ref(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
