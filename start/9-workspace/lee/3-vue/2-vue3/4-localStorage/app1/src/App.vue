<template>
  <Component1 v-if="isOpen" />
  <Component2 v-else />
  <button @click="isOpen = !isOpen">Toggle</button>
  <button @click="onLoad">데이터 호출</button>
  <h2>{{ text }}</h2>
</template>

<script setup lang="ts">
import Component1 from '@/components/Component1.vue'
import Component2 from '@/components/Component2.vue'

import { ref } from 'vue'

const isOpen = ref(false)
const text = ref('')

const onLoad = () => {
  // Local Storage 값 호출 (인자는 변수명)
  text.value = localStorage.getItem('globalText')
}
</script>

<style scoped>
</style>
