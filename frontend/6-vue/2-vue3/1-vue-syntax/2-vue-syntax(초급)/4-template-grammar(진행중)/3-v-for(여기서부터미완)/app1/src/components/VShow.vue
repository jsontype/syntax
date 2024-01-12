<template>
  <div>
    <h2 v-if="isOpen">Hi! (v-if 사용)</h2>
    <h2 v-show="isOpen">Hi! (v-show 사용)</h2>
    <button @click="toggle">Toggle</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(true)
const toggle = () => isOpen.value = !isOpen.value
</script>

<style lang="scss" scoped>
</style>
