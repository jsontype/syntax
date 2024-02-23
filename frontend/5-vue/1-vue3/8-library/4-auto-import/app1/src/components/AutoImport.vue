<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>

<script setup lang="ts">
const count = ref(0) // 여기서 ref는 자동으로 임포트된다.

function increment() {
  count.value++
}
</script>

<style scoped>
</style>
