<template>
  <div>
    <h3>string1: {{ string1 }}</h3>
    <h3>string2: {{ string2 }}</h3>
    <h3>number1 : {{ number1 }}</h3>
    <h3>boolean1 : {{ boolean1 }}</h3>
    <button @click="onClick">Click me</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{ 
  string1: string,
  string2: string,
  number1: number,
  boolean1: boolean,
  onClick: () => {}
}>()
</script>

<style scoped>
</style>
