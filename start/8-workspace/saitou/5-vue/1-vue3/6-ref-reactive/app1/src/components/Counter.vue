<template>
  <div>
    <h1>Counter</h1>
    <p>Count: {{ count }}</p>
    <button @click="plus">+</button>
    <button @click="minus">-</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const plus = () => {
  count.value = count.value + 1
}
const minus = () => {
  count.value = count.value - 1
}
</script>

<style scoped>
</style>
