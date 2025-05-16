<template>
  <h1 class="gray">{{ msg }}</h1>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

withDefaults(defineProps<{ msg?: string; }>(), {
  msg: 'Bye Bye!'  
})
</script>

<style scoped>
</style>
