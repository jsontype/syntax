<template>
  <h1>
    {{ msg }}
  </h1>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<style scoped>
</style>
