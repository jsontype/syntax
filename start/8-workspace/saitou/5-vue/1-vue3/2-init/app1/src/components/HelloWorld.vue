<template>
  <h1>{{ msg }} {{ mark }}</h1>
</template>

<script setup lang="ts">
interface Props {
  msg: string
  mark: string
}
defineProps<Props>()
</script>

<style scoped>
</style>
