<template>
  <Component1 v-if="toggle"/>
  <Component2 v-else />
  <button @click="toggle = !toggle">컴포넌트 변경</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Component1 from '@/components/Component1.vue'
import Component2 from '@/components/Component2.vue'

const toggle = ref(true)
</script>

<style scoped>
</style>
