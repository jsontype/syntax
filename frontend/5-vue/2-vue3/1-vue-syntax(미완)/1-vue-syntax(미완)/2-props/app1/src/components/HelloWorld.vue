<template>
  <h1>{{ `${msg1} ${msg2}!` }}</h1>
  <button @click="onClick">{{ msg1 }}</button>
</template>

<script setup lang="ts">
defineProps<{ msg1: string, msg2: string, onClick: () => {} }>()
</script>

<style scoped>
</style>
