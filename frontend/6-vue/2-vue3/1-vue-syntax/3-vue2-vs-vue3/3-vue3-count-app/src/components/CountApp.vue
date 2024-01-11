<script setup>
import { ref, onMounted, onUpdated, onUnmounted } from 'vue'

// リアクティブな状態
const count = ref(0)

// 状態を変更し、更新をトリガーする関数。
function increase() {
  count.value++
}

function decrease() {
  count.value--
}

// ライフサイクルフック
onMounted(() => {
  console.log(`生まれた！`)
})
onUpdated(() => {
  console.log(`成長した！: ${count.value}`)
})
onUnmounted(() => {
  console.log(`死んだ！`)
})
</script>

<template>
  <h1>{{ count }}</h1>
  <button @click="increase">+</button>
  <button @click="decrease">-</button>
</template>
