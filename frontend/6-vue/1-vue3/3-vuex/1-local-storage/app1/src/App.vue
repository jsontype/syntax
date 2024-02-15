<template>
  <button @click="toggle = !toggle">컴포넌트 변경</button>
  <LocalStorage1 v-if="toggle" />
  <LocalStorage2 v-else-if="!toggle" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

import LocalStorage1 from '@/components/LocalStorage1.vue'
import LocalStorage2 from '@/components/LocalStorage2.vue'

const toggle = ref(true)
</script>

<style scoped>
</style>
