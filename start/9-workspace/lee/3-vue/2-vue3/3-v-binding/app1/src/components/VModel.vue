<template>
  <div>
    <input v-model="id" placeholder="id 입력">
    <div>id: {{ id }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const id = ref('')
</script>

<style scoped>
</style>
