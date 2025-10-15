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

// onMounted, onUpdated, onUnmounted 등 "과거형" 훅 함수에 동기 함수를 넣어서 처리할 때는 "setTimeout"을 사용
onBeforeMount(() => {
  console.log('onBeforeMount')
  alert('onBeforeMount')
})
onMounted(() => {
  console.log('onMounted')
  setTimeout(() => {
    alert('onMounted')
  }, 0)
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
  alert('onBeforeUpdate')
})
onUpdated(() => {
  console.log('onUpdated')
  setTimeout(() => {
    alert('onUpdated')
  }, 0)
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
  alert('onBeforeUnmount')
})
onUnmounted(() => {
  console.log('onUnmounted')
  setTimeout(() => {
    alert('onUnmounted')
  }, 0)
})
</script>

<style lang="scss" scoped>
</style>
