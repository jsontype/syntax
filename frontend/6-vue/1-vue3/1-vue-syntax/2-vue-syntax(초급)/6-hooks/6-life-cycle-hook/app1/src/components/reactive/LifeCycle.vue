<template>
  <div>
    <h1>LifeCycle</h1>
    <button @click="toggle">토글</button>
    <LifeCycleSubComponent v-if="isOpen" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LifeCycleSubComponent from '@/components/reactive/LifeCycleSubComponent.vue'

const isOpen = ref(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<style lang="scss" scoped>
</style>
