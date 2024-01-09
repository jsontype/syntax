<template>
  <div>
    <h2 v-if="isOpen">Hi!</h2>
    <h2 v-else>Bye!</h2>
    <!-- 함수 없이 바로 넣는 경우: value 불필요 -->
    <button @click="isOpen = !isOpen">Toggle</button>
    <!-- 함수를 넣는 경우: value 필요 -->
    <button @click="toggle">Toggle</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(true)

// ref로 정의한 변수는 .value로 접근해야 한다.
const toggle = () => isOpen.value = !isOpen.value
</script>

<style lang="scss" scoped>
</style>
