<template>
  <h1>Transition Group: List의 Transition 처리</h1>
  <button @click="addItem">Add Item</button>
  <transition-group name="list">
    <div v-for="item in items" :key="item">
      {{ item }}
    </div>
  </transition-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref(['Item 1', 'Item 2', 'Item 3'])
const addItem = () => {
  const nextItem = `Item ${items.value.length + 1}`
  items.value.push(nextItem)
}
</script>

<style scoped>
.list-enter-active, .list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
