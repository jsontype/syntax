<template>
  <h1>Counter App</h1>
  <div>
    <h2>카운트: {{ count }}</h2>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

function increase () {
  count.value++
}

function decrease () {
  count.value--
}
</script>

<style scoped>
</style>
