<template>
  <div>
    <h2>LifeCycle 하위컴포넌트</h2>
    <button @click="onClick">{{ count }}</button>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ count: number, onClick: () => void }>()

import { 
  onBeforeMount, 
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue'
import { ref } from 'vue'

const count = ref(0)
const onClick = () => {
  count.value = count.value + 1
}

onBeforeMount(() => {
  console.log('onBeforeMount')
  alert('onBeforeMount')
})
onMounted(() => {
  console.log('onMounted')
  alert('onMounted')
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
  alert(`onBeforeUpdate`)
})
onUpdated(() => {
  console.log('onUpdated')
  alert(`onUpdated`)
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
  alert('onBeforeUnmount')
})
onUnmounted(() => {
  console.log('onUnmounted')
  alert('onUnmounted')
})
</script>

<style lang="scss" scoped>
</style>
